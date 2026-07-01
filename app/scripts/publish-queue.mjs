// Promote the top of the queue when a cadence slot arrives.
//
// Runs in CI (and via `workflow_dispatch`). On a cadence day, if the queue has
// an approved, finished post at the top, it stamps it live (draft:false,
// pubDate=now), removes it from the queue, and records lastPublishedAt. The
// workflow then builds + deploys, and send-newsletter emails it.
//
// Safety properties:
//   - lint gate: refuses to publish if the queue head is broken/unapproved.
//   - idempotent: skips if it already published during this UTC day.
//   - quiet on no-op days; amber Discord ping if a cadence day finds an empty queue.
//
// Output: writes `published_slug=<slug>` (or empty) to $GITHUB_OUTPUT.
//
// Flags: --force publishes regardless of cadence day (manual dispatch);
//        --dry-run computes the decision and prints it, writes nothing.

import { appendFileSync } from 'node:fs';
import { readConfig, writeConfig, isCadenceDay, alreadyPublishedToday } from './lib/config.mjs';
import { readPost, setFrontmatterFields } from './lib/posts.mjs';
import { lintQueue } from './queue-lint.mjs';
import { discord } from './lib/notify.mjs';

const args = new Set(process.argv.slice(2));
const FORCE = args.has('--force');
const DRY = args.has('--dry-run');

function output(slug) {
  const out = process.env.GITHUB_OUTPUT;
  if (out) appendFileSync(out, `published_slug=${slug || ''}\n`);
  console.log(`published_slug=${slug || ''}`);
}

async function main() {
  const now = new Date();
  const cfg = readConfig();

  if (!FORCE && !isCadenceDay(cfg, now)) {
    console.log(`Not a cadence day (UTC day ${now.getUTCDay()}, cadence ${cfg.cadence.weekday}). Nothing to do.`);
    return output('');
  }

  if (!FORCE && alreadyPublishedToday(cfg, now)) {
    console.log('Already published during this UTC day. Skipping.');
    return output('');
  }

  if (cfg.queue.length === 0) {
    console.log('Cadence day, but the queue is empty.');
    if (!DRY) await discord('amber', 'Queue is empty', 'A cadence day arrived but there is nothing approved in the queue. Add and approve a post to publish next time.');
    return output('');
  }

  // Refuse to publish anything if the queue head (or any entry) is not a
  // finished, approved draft. Better to publish nothing than the wrong thing.
  const lint = lintQueue(cfg);
  if (!lint.ok) {
    const detail = lint.problems
      .map((p) => `**${p.slug}**: ${p.issues.join('; ')}`)
      .join('\n');
    // Not an infrastructure failure: the cron ran fine, the content isn't ready.
    // Alert red so Nick fixes it, but exit 0 so the healthcheck still reports the
    // run as alive and the failure-ping stays reserved for real breakage.
    console.error(`Refusing to publish — queue has problems:\n${detail}`);
    if (!DRY) {
      await discord('red', 'Publish blocked: queue failed validation', detail);
    }
    return output('');
  }

  const slug = cfg.queue[0];
  const post = readPost(slug);
  console.log(`Promoting "${slug}" (${post.data.title})`);

  if (DRY) {
    console.log('[dry-run] would set draft:false, pubDate:', now.toISOString());
    console.log('[dry-run] would remove from queue and set lastPublishedAt');
    return output(slug);
  }

  setFrontmatterFields(slug, { draft: false, pubDate: now.toISOString() });
  cfg.queue = cfg.queue.slice(1);
  cfg.lastPublishedAt = now.toISOString();
  writeConfig(cfg);

  output(slug);
}

main().catch(async (err) => {
  console.error('publish-queue failed:', err);
  await discord('red', 'Publish failed', err instanceof Error ? err.message : String(err));
  process.exit(1);
});
