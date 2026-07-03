// Schedule (reveal-date) the auto-generated takes for any essay that has gone live.
//
// Decoupled from the queue, exactly like send-newsletter.mjs and
// schedule-linkedin.mjs: it acts on ANY generated take whose source essay is live,
// that is still unscheduled (draft:true), regardless of how the essay published
// (queue promotion, pinned date, manual flip). Each take is handled exactly once.
//
// What "handling" means for a take: stamp its real pubDate (source essay's pubDate
// + offsetDays, at 00:00 UTC) and flip draft:false. It does NOT appear on the site
// yet — the site's isLive() gate keeps a draft:false + future-dated take hidden
// until its day, and the daily build reveals it then. So this runs once, at the
// essay's publish, and the drip happens on its own over the following days.
//
// `draft` is the idempotency lock (like emailedAt / pushedAt): once flipped false a
// take is never re-selected. Safe to run every publish; a no-op when nothing is due.
//
// Flags: --dry-run logs what it would do and writes nothing (safe to repeat).

import { readAllTakes, selectDueTakes, setTakeFields, toDateStamp } from './lib/takes.mjs';
import { discord } from './lib/notify.mjs';

const DRY = process.argv.includes('--dry-run');

async function main() {
  const now = new Date();
  const due = selectDueTakes(readAllTakes(), { now });

  if (due.length === 0) {
    console.log('No takes due (no live essay with unscheduled generated takes).');
    return;
  }

  console.log(`${due.length} take(s) due to be scheduled:`);

  // Group by source essay for a single tidy announcement per issue.
  const byEssay = new Map();
  for (const d of due) {
    const key = d.essay.slug;
    if (!byEssay.has(key)) byEssay.set(key, { title: d.essay.data.title, items: [] });
    byEssay.get(key).items.push(d);
  }

  for (const [slug, group] of byEssay) {
    const lines = group.items
      .sort((a, b) => a.at - b.at)
      .map((d) => `• ${d.take.slug} (+${d.take.data.offsetDays}d) → ${toDateStamp(d.at)}`)
      .join('\n');
    console.log(`\n"${group.title}" (${slug}):\n${lines}`);

    if (DRY) continue;

    // Stamp each take's real pubDate and flip draft:false. Do it one at a time and
    // write immediately so a mid-batch failure never leaves a take half-scheduled.
    for (const d of group.items) {
      setTakeFields(d.take.slug, { pubDate: toDateStamp(d.at), draft: false });
    }
    await discord(
      'green',
      `Takes scheduled: ${group.title}`,
      `Scheduled ${group.items.length} take(s) to publish over the coming days:\n${lines}`,
    );
  }
}

main().catch(async (err) => {
  console.error('schedule-takes failed:', err);
  await discord('red', 'Takes scheduling failed', err instanceof Error ? err.message : String(err));
  process.exit(1);
});
