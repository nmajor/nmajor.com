// Schedule LinkedIn posts for any newsletter that has gone live.
//
// Decoupled from the queue, exactly like send-newsletter.mjs: it acts on ANY
// LinkedIn post whose parent newsletter is live + approved, that is itself
// approved, and that has not been handled yet. That single rule covers queue
// promotions, pinned-date issues, and manual flips alike — each LinkedIn post is
// handled exactly once.
//
// PHASE 1 — shadow mode (linkedin.config.json `enabled: false`):
//   Computes the real schedule each due post WOULD get and announces it (log +
//   Discord). Stamps `shadowedAt` so it announces once. No external side effects.
//   This lets us watch the resolver predict correct dates before anything touches
//   LinkedIn.
//
// PHASE 2 — live mode (`enabled: true`, Postiz wired):
//   The same selection, but pushes each post to Postiz as a scheduled draft and
//   stamps `pushedAt` (the idempotency lock, like `emailedAt`). Drop-in: only the
//   push() call below changes.
//
// Flags: --dry-run logs what it would do and writes/sends nothing (safe to repeat).

import { readAllItems, setItemFields, selectDue, readLinkedinConfig, verifyIntegrationIdentity } from './lib/linkedin.mjs';
import { createScheduledPost, postContent, uploadMedia, listIntegrations } from './lib/postiz.mjs';
import { discord } from './lib/notify.mjs';
import { existsSync, statSync } from 'node:fs';
import { readdirSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const LINKEDIN_DIR = resolve(dirname(fileURLToPath(import.meta.url)), '../linkedin');

/**
 * Split a body written as a numbered thread ("1/ ...", "2/ ...") into one
 * string per tweet. Returns a plain string when the body is not a thread, so
 * every non-thread post is unaffected. X rejects anything over 280 characters,
 * and a 17-part thread in one field would be exactly that.
 */
function splitThread(text) {
  const parts = text.split(/\n(?=\d{1,2}\/\s)/).map((s) => s.trim()).filter(Boolean);
  if (parts.length < 2 || !/^1\/\s/.test(parts[0])) return text;
  return parts.map((p) => p.replace(/^\d{1,2}\/\s*/, ''));
}

/**
 * Resolve a post's `media:` frontmatter to absolute file paths.
 *
 * `media` is one path or a list of paths, each relative to the post's own batch
 * folder (app/linkedin/<slug>/). A directory expands to its sorted image
 * contents, which is how a multi-slide carousel is declared as one entry.
 * Returns [] when the post declares no media, so text-only posts behave exactly
 * as they did before this existed.
 */
function resolveMedia(item) {
  const decl = item.data.media;
  if (!decl) return [];
  const list = Array.isArray(decl) ? decl : [decl];
  const base = join(LINKEDIN_DIR, dirname(item.id));
  const files = [];
  for (const entry of list) {
    const p = join(base, entry);
    if (!existsSync(p)) throw new Error(`${item.id}: media not found: ${entry}`);
    if (statSync(p).isDirectory()) {
      const inner = readdirSync(p)
        .filter((f) => /\.(png|jpe?g)$/i.test(f))
        .sort();
      if (!inner.length) throw new Error(`${item.id}: media dir is empty: ${entry}`);
      files.push(...inner.map((f) => join(p, f)));
    } else {
      files.push(p);
    }
  }
  return files;
}

const DRY = process.argv.includes('--dry-run');
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function when(date) {
  return `${DAYS[date.getUTCDay()]} ${date.toISOString().slice(0, 16).replace('T', ' ')} UTC`;
}

/**
 * Identity preflight (the 2026-08-04 incident guard): before ANY push, ask
 * Postiz who is actually behind each configured integrationId and compare
 * against the channel's `expect` block. A LinkedIn re-auth can silently swap
 * the account behind a stable integration ID, so the ID alone is never
 * trusted. Live mode: any problem aborts the whole run before a single post
 * is pushed. Shadow mode: same check, warn only.
 */
async function identityPreflight(cfg) {
  let integrations;
  try {
    integrations = await listIntegrations();
  } catch (err) {
    const msg = `identity preflight could not list Postiz integrations: ${err instanceof Error ? err.message : err}`;
    if (cfg.enabled) throw new Error(`${msg} — refusing to push without verifying who is behind each integration ID.`);
    console.warn(`[shadow] ${msg} (would abort in live mode)`);
    return;
  }
  const problems = verifyIntegrationIdentity(cfg.channels, integrations);
  if (problems.length === 0) {
    console.log('Integration identity preflight: all configured channels match their expect blocks.');
    return;
  }
  const report = problems.map((p) => `  • ${p.message}`).join('\n');
  const msg = `INTEGRATION IDENTITY PREFLIGHT FAILED — nothing was pushed:\n${report}`;
  if (cfg.enabled) throw new Error(msg);
  console.warn(`[shadow] ${msg}\n(would abort in live mode)`);
}

async function main() {
  const cfg = readLinkedinConfig();
  await identityPreflight(cfg);
  const now = new Date();
  const due = selectDue(readAllItems(), { now, enabled: cfg.enabled, postingHourUTC: cfg.postingHourUTC, channels: cfg.channels });

  if (due.length === 0) {
    console.log('No LinkedIn posts due (no live+approved issue with approved, unhandled posts).');
    return;
  }

  const mode = cfg.enabled ? 'live' : 'shadow';
  console.log(`${due.length} LinkedIn post(s) due [${mode} mode]:`);

  // Group by parent issue for a single tidy announcement per issue.
  const byIssue = new Map();
  for (const d of due) {
    const key = d.post.slug;
    if (!byIssue.has(key)) byIssue.set(key, { title: d.post.data.title, items: [] });
    byIssue.get(key).items.push(d);
  }

  for (const [slug, group] of byIssue) {
    const lines = group.items
      .sort((a, b) => a.at - b.at)
      .map((d) => `• ${d.item.data.channel}/${d.item.data.angle || 'post'} (+${d.item.data.offsetDays}d) → ${when(d.at)}`)
      .join('\n');
    console.log(`\n"${group.title}" (${slug}):\n${lines}`);

    if (DRY) continue;

    if (cfg.enabled) {
      // Live mode: push each post to Postiz as a scheduled post, stamping
      // pushedAt (the idempotency lock) immediately after each success so a
      // mid-batch failure never re-pushes the ones that already went through.
      const pushed = [];
      for (const d of group.items) {
        const channel = d.item.data.channel;
        const ch = cfg.channels[channel];
        if (!ch || !ch.integrationId) {
          // No connected destination for this channel: skip it rather than fail
          // the batch, so the mapped posts still go out. Left un-stamped on
          // purpose, so it schedules automatically once a channel is mapped.
          console.warn(`Skipping ${d.item.id}: no Postiz integration for channel "${channel}".`);
          continue;
        }
        // Upload any declared media first, so a failed upload aborts this post
        // before it is created rather than publishing it without its deck.
        const files = resolveMedia(d.item);

        // Instagram rejects any post without media, so skip rather than send
        // one that is guaranteed to fail. Left un-stamped on purpose: it will
        // schedule itself once the asset (e.g. a Reel video) is added.
        if (ch.settingsType === 'instagram' && !files.length) {
          console.warn(`Skipping ${d.item.id}: instagram requires media and none is declared.`);
          continue;
        }

        const media = [];
        for (const f of files) media.push(await uploadMedia(f));

        // A multi-image LinkedIn post has to be flagged as a carousel, or the
        // provider posts the slides as loose images. Postiz then runs its own
        // convertImagesToPdfCarousel() to produce the native document post.
        // (Uploading a ready-made PDF is not an option: Postiz's public upload
        // endpoint rejects application/pdf as "Unsupported file type".)
        // Per-channel required settings (X needs who_can_reply_post, Instagram
        // needs post_type, both rejected by Postiz as 400s if absent) come from
        // the channel's `defaultSettings` so they stay declarative in config.
        const extraSettings = {
          ...(ch.defaultSettings || {}),
          ...(ch.settingsType === 'linkedin' && media.length > 1
            ? { post_as_images_carousel: true }
            : {}),
        };

        const { postId } = await createScheduledPost({
          // Threading is X-only on purpose. X's provider fans a multi-entry
          // value array out into a real thread; LinkedIn's post() posts
          // postDetails[0] and SILENTLY DROPS the rest, so splitting a
          // LinkedIn body would publish only its first part.
          content:
            ch.settingsType === 'x' ? splitThread(postContent(d.item)) : postContent(d.item),
          integrationId: ch.integrationId,
          settingsType: ch.settingsType,
          at: d.at,
          now,
          media,
          extraSettings,
        });
        setItemFields(d.item.id, { pushedAt: now.toISOString(), postizId: postId });
        pushed.push(`• ${channel}/${d.item.data.angle || 'post'} (+${d.item.data.offsetDays}d) → ${when(d.at)}`);
      }
      await discord(
        'green',
        `LinkedIn scheduled: ${group.title}`,
        `Scheduled ${pushed.length} LinkedIn post(s) to Postiz:\n${pushed.join('\n')}`,
      );
      continue;
    }

    // Shadow mode: announce once, then mark handled so it stays quiet.
    for (const d of group.items) setItemFields(d.item.id, { shadowedAt: now.toISOString() });
    await discord(
      'info',
      `LinkedIn schedule ready (shadow): ${group.title}`,
      `This issue is live. In live mode these ${group.items.length} LinkedIn post(s) would be scheduled:\n${lines}\n\n_Shadow mode — nothing was posted. Wire Postiz to go live._`,
    );
  }
}

main().catch(async (err) => {
  console.error('schedule-linkedin failed:', err);
  await discord('red', 'LinkedIn scheduling failed', err instanceof Error ? err.message : String(err));
  process.exit(1);
});
