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

import { readAllItems, setItemFields, selectDue, readLinkedinConfig } from './lib/linkedin.mjs';
import { createScheduledPost, postContent } from './lib/postiz.mjs';
import { discord } from './lib/notify.mjs';

const DRY = process.argv.includes('--dry-run');
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function when(date) {
  return `${DAYS[date.getUTCDay()]} ${date.toISOString().slice(0, 16).replace('T', ' ')} UTC`;
}

async function main() {
  const cfg = readLinkedinConfig();
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
        const { postId } = await createScheduledPost({
          content: postContent(d.item),
          integrationId: ch.integrationId,
          settingsType: ch.settingsType,
          at: d.at,
          now,
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
