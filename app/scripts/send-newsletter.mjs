// Email any live, approved post that hasn't been emailed yet.
//
// Decoupled from the queue on purpose: it emails ANY post that is (1) live,
// (2) approved (Nick's sign-off), and (3) has no `emailedAt` lock. That single
// rule covers queue promotions, manually pinned future-dated posts, and manual
// flips — each gets emailed exactly once.
//
// Idempotency is double-locked:
//   1. `emailedAt` frontmatter (committed back to the repo) — primary lock.
//   2. A Buttondown subject pre-check — catches the rare case where a send
//      succeeded but the commit/push afterwards did not.
//
// Send mechanics (Buttondown API v2026-04-01): create the email with
// status "about_to_send" (queues an immediate send). The newer API requires a
// confirmation header for sends, so we pass X-Buttondown-Live-Dangerously.
//
// Newsletter: "Actual Intelligence" — Nick's OWN Buttondown newsletter, a
// separate list from the Institute's. The Buttondown account hosts several
// newsletters, so BUTTONDOWN_API_KEY here MUST be this newsletter's own key
// (scoped to "Actual Intelligence") — never the Institute's key.
//
// Flags: --dry-run logs what it would send and writes/sends nothing.

import { readAllPosts, setFrontmatterFields } from './lib/posts.mjs';
import { isLive } from '../src/lib/publish.js';
import { discord } from './lib/notify.mjs';

const DRY = process.argv.includes('--dry-run');
const SITE = 'https://nmajor.com';
const API = 'https://api.buttondown.email/v1/emails';

function authHeaders(extra = {}) {
  return {
    Authorization: `Token ${process.env.BUTTONDOWN_API_KEY}`,
    'Content-Type': 'application/json',
    'X-API-Version': '2026-04-01',
    ...extra,
  };
}

/** Has an email with this subject already been created in Buttondown? */
async function alreadyInButtondown(subject) {
  const res = await fetch(`${API}?ordering=-creation_date`, { headers: authHeaders() });
  if (!res.ok) {
    // Don't block a legitimate send on a flaky list call; the emailedAt lock
    // is the primary guard. Log and proceed.
    console.warn('buttondown list pre-check failed:', res.status);
    return false;
  }
  const data = await res.json();
  const results = Array.isArray(data.results) ? data.results : [];
  return results.some((e) => (e.subject || '').trim() === subject.trim());
}

async function sendOne(post) {
  const subject = post.data.title;
  const body = `${post.body.trim()}\n\n---\n\n[Read this on the site](${SITE}/writing/${post.slug}/)\n`;

  if (await alreadyInButtondown(subject)) {
    console.log(`"${subject}" already exists in Buttondown; marking emailed without resending.`);
    if (!DRY) setFrontmatterFields(post.slug, { emailedAt: new Date().toISOString() });
    return { slug: post.slug, sent: false, deduped: true };
  }

  if (DRY) {
    console.log(`[dry-run] would send "${subject}" (${body.length} chars) via about_to_send`);
    return { slug: post.slug, sent: false, dry: true };
  }

  const res = await fetch(API, {
    method: 'POST',
    headers: authHeaders({ 'X-Buttondown-Live-Dangerously': 'true' }),
    body: JSON.stringify({ subject, body, status: 'about_to_send' }),
  });
  if (!res.ok) {
    throw new Error(`buttondown send failed ${res.status}: ${await res.text()}`);
  }

  setFrontmatterFields(post.slug, { emailedAt: new Date().toISOString() });
  return { slug: post.slug, sent: true };
}

async function main() {
  const due = readAllPosts().filter(
    (p) => isLive(p.data) && p.data.approved && !p.data.emailedAt,
  );

  if (due.length === 0) {
    console.log('No live, approved, unsent posts. Nothing to email.');
    return;
  }
  console.log(`${due.length} post(s) to email: ${due.map((p) => p.slug).join(', ')}`);

  if (!DRY && !process.env.BUTTONDOWN_API_KEY) {
    throw new Error('BUTTONDOWN_API_KEY is not set');
  }

  for (const post of due) {
    const r = await sendOne(post);
    if (r.sent) {
      console.log(`Emailed "${post.data.title}".`);
      await discord('green', 'Published and emailed', `**${post.data.title}**`, [
        { name: 'Post', value: `${SITE}/writing/${post.slug}/`, inline: false },
        { name: 'Author', value: post.data.author || 'Unknown', inline: true },
      ]);
    } else if (r.deduped) {
      await discord('amber', 'Already in Buttondown', `**${post.data.title}** was already created in Buttondown; marked emailed without resending.`);
    }
  }
}

main().catch(async (err) => {
  console.error('send-newsletter failed:', err);
  await discord('red', 'Newsletter send failed', err instanceof Error ? err.message : String(err));
  process.exit(1);
});
