// Daily queue status: empty/low-queue alerts + a ~24h pre-publish heads-up.
//
// Read-only. Runs every day in the publish workflow. Two independent jobs:
//
//  1. Queue health (EVERY day): if the queue is empty, nag amber every day until
//     it's filled. If it's running low (at/below cfg.lowQueueThreshold, default 1),
//     warn amber every day too — with weekly cadence, "1 left" means the queue
//     empties after the next slot, so this is the ~week-ahead heads-up. Silent
//     when the queue is healthy.
//
//  2. Preview (only when TOMORROW is the cadence day, i.e. ~24h before a slot):
//     announce what's next up so there's time to reorder or pull it. Flags a head
//     post that would be blocked (red) early.
//
// It changes nothing; the actual publish re-reads queue[0] fresh.
// Flags: --dry-run prints instead of posting to Discord.

import { readConfig, isCadenceDay, nextCadenceSlot, daysUntil } from './lib/config.mjs';
import { readPost } from './lib/posts.mjs';
import { lintQueue } from './queue-lint.mjs';
import { discord } from './lib/notify.mjs';

const DRY = process.argv.includes('--dry-run');
const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

async function say(level, title, description, fields = []) {
  if (DRY) {
    console.log(`[dry-run] ${level}: ${title} — ${description}`);
    return;
  }
  console.log(`notify ${level}: ${title}`);
  await discord(level, title, description, fields);
}

function slotLabel(cfg, now) {
  const slot = nextCadenceSlot(cfg, now);
  const n = daysUntil(slot, now);
  const date = slot.toISOString().slice(0, 10);
  return `${DAYS[slot.getUTCDay()]} ${date} ${String(cfg.cadence.hourUTC).padStart(2, '0')}:00 UTC (in ${n} day${n === 1 ? '' : 's'})`;
}

// 1) Queue-health alerts — run every day.
async function queueHealth(cfg, now) {
  const n = cfg.queue.length;
  const next = slotLabel(cfg, now);

  if (n === 0) {
    await say(
      'amber',
      'Publishing queue is empty',
      `Nothing will publish at the next slot (${next}) unless you add and approve a post. This repeats daily until the queue has something.`,
    );
    return;
  }

  if (n <= cfg.lowQueueThreshold) {
    await say(
      'amber',
      `Publishing queue is running low (${n} left)`,
      `After the next slot${n === 1 ? '' : 's'} the queue will be empty. Add and approve another post to keep the weekly cadence. Next slot: ${next}. This repeats daily until refilled.`,
    );
  }
}

// 2) ~24h preview — only when tomorrow is the cadence day and the queue has a post.
async function preview(cfg, now) {
  const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
  if (!isCadenceDay(cfg, tomorrow)) return;
  if (cfg.queue.length === 0) return; // empty case already covered by queueHealth

  const slug = cfg.queue[0];
  const post = readPost(slug);
  const when = slotLabel(cfg, now);

  // Catch problems 24h early: if the head wouldn't pass publish-time lint, flag now.
  const lint = lintQueue({ ...cfg, queue: [slug] });
  if (!lint.ok) {
    const issues = lint.problems[0]?.issues.join('; ') || 'unknown';
    await say(
      'red',
      'Heads up: next post is not ready',
      `**${post.data.title || slug}** is set to publish ${when} but would be blocked: ${issues}. Fix it or reorder the queue.`,
    );
    return;
  }

  await say(
    'info',
    'Publishing in ~24 hours',
    `**${post.data.title}** is next up, ${when}.\nReorder \`app/publishing.config.json\` to change what goes out, or it will publish and email automatically.`,
    [
      { name: 'Author', value: post.data.author || 'Unknown', inline: true },
      { name: 'In queue after this', value: String(cfg.queue.length - 1), inline: true },
    ],
  );
}

async function main() {
  const now = new Date();
  const cfg = readConfig();
  await queueHealth(cfg, now);
  await preview(cfg, now);
}

main().catch((err) => {
  // Best-effort: never let a status problem matter. (The workflow step also runs
  // with continue-on-error, so this is belt-and-suspenders.)
  console.error('preview-next failed:', err);
  process.exit(0);
});
