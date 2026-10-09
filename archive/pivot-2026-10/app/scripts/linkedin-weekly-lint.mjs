// Validate the current autonomous weekly-batch contract without applying it to
// legacy LinkedIn history. Only posts with weeklyBatchVersion: 1 participate.

import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { LINKEDIN_DIR, readAllItems } from './lib/linkedin.mjs';

function readVisualRows(newsletter) {
  const path = join(LINKEDIN_DIR, newsletter, 'visuals', 'campaign.jsonl');
  if (!existsSync(path)) return [];
  return readFileSync(path, 'utf8')
    .split(/\r?\n/)
    .filter(Boolean)
    .map((line) => JSON.parse(line));
}

export function lintWeeklyBatches(items, loadVisualRows = readVisualRows) {
  const problems = [];
  const groups = new Map();

  for (const item of items) {
    if (item.data.weeklyBatchVersion !== 1) continue;
    const slug = item.data.newsletter;
    if (!groups.has(slug)) groups.set(slug, []);
    groups.get(slug).push(item);
  }

  for (const [newsletter, posts] of groups) {
    const issues = [];
    if (posts.length > 7) issues.push(`has ${posts.length} posts; weekly batches allow at most 7`);

    const offsets = posts.map((post) => post.data.offsetDays);
    if (offsets.some((offset) => !Number.isInteger(offset) || offset < 0 || offset > 6)) {
      issues.push('every offsetDays must be a whole number from 0 to 6');
    }
    if (new Set(offsets).size !== offsets.length) issues.push('offsetDays values must be unique within the batch');
    if (posts.some((post) => post.data.channel !== 'personal')) issues.push('weekly newsroom posts must use channel: personal');
    if (posts.some((post) => !post.data.mediaRequired)) issues.push('every weekly newsroom post must set mediaRequired: true');
    if (posts.filter((post) => post.data.reachGame === 'spike').length > 1) issues.push('a weekly batch may contain at most one spike post');

    const companions = posts.filter((post) => post.data.editorialLane === 'companion');
    if (companions.length !== 1) {
      issues.push(`expected exactly one newsletter companion; found ${companions.length}`);
    } else {
      const companion = companions[0];
      if (companion.data.offsetDays !== 0) issues.push('the newsletter companion must use offsetDays: 0');
      if (companion.data.offsetMinutesAfterIssue !== 60) issues.push('the newsletter companion must use offsetMinutesAfterIssue: 60');
      if (companion.data.sourceKind !== 'newsletter') issues.push('the newsletter companion must use sourceKind: newsletter');
    }

    const rows = loadVisualRows(newsletter);
    for (const post of posts) {
      const expected = `app/linkedin/${post.id}.md`;
      const matches = rows.filter((row) => row.post === expected);
      if (matches.length !== 1) issues.push(`${post.id} must have exactly one recommended visual row; found ${matches.length}`);
    }

    if (issues.length) problems.push({ newsletter, issues });
  }

  return { ok: problems.length === 0, batches: groups.size, problems };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const result = lintWeeklyBatches(readAllItems());
  if (!result.ok) {
    for (const problem of result.problems) {
      console.error(`${problem.newsletter}:\n${problem.issues.map((issue) => `  - ${issue}`).join('\n')}`);
    }
    process.exit(1);
  }
  console.log(`OK: ${result.batches} weekly LinkedIn batch${result.batches === 1 ? '' : 'es'}`);
}
