// Validate every LinkedIn post: it must reference a real newsletter, declare a
// valid channel + non-negative offset, and have a non-trivial body. Posts that
// are `approved` — or auto-approved by the preview policy (see isAutoApproved) —
// are reported as schedule-ready; the rest are listed as drafts (not an error,
// they are waiting on Nick's sign-off).
//
// This is the LinkedIn-side mirror of queue-lint.mjs. The scheduler refuses to
// act on anything that does not pass here. Run any time with:
//   npm run linkedin:lint

import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { readAllItems, CHANNELS, resolveParent, readLinkedinConfig, isAutoApproved } from './lib/linkedin.mjs';
import { ESSAYS_DIR } from './lib/posts.mjs';

const MIN_BODY_CHARS = 120;
// The hook is the first paragraph, everything above LinkedIn's "see more" fold. Mobile (most
// traffic) truncates around 140 chars, and a blank line ends the preview even earlier. So every
// personal reach post must land its whole hook in one paragraph of ≤ 140 chars. Enforced below.
// (Business/preview posts are exempt: they are link-summaries, not reach hooks.)
const HOOK_MAX_CHARS = 140;

/** The hook = first paragraph of the body, comments stripped, whitespace collapsed. */
export function hookLength(body) {
  const clean = body.replace(/<!--[\s\S]*?-->/g, '').trim();
  const firstPara = (clean.split(/\n\s*\n/)[0] || '').replace(/\s+/g, ' ').trim();
  return [...firstPara].length;
}

/** @returns {{ok: boolean, problems: Array, ready: string[], drafts: string[]}} */
export function lintLinkedin(items, channels = {}) {
  const problems = [];
  const ready = [];
  const drafts = [];

  for (const item of items) {
    const d = item.data;
    const issues = [];

    if (!d.newsletter) {
      issues.push('missing `newsletter` slug');
    } else if (!existsSync(join(ESSAYS_DIR, `${d.newsletter}.md`))) {
      issues.push(`newsletter "${d.newsletter}" has no matching essay (src/content/essays/${d.newsletter}.md)`);
    }
    if (!CHANNELS.includes(d.channel)) {
      issues.push(`channel must be one of ${CHANNELS.join(' | ')} (got "${d.channel || ''}")`);
    }
    if (d.offsetDays === null) {
      issues.push('missing/invalid `offsetDays` (whole number ≥ 0)');
    } else if (d.offsetDays < 0) {
      issues.push('`offsetDays` must be ≥ 0');
    }
    if (item.body.trim().length < MIN_BODY_CHARS) {
      issues.push(`body looks unfinished (<${MIN_BODY_CHARS} chars)`);
    }
    // Hook must clear the mobile "see more" fold. Personal reach posts only; business/preview
    // posts are link-summaries whose rules invert, so they are exempt.
    if (d.channel === 'personal') {
      const len = hookLength(item.body);
      if (len > HOOK_MAX_CHARS) {
        issues.push(`hook (first paragraph) is ${len} chars; must be ≤ ${HOOK_MAX_CHARS} to clear the mobile "see more" fold — tighten it or break it into a shorter first paragraph`);
      }
    }

    if (issues.length) {
      problems.push({ id: item.id, issues });
      continue;
    }
    if (d.approved || isAutoApproved(item, channels)) ready.push(item.id);
    else drafts.push(item.id);
  }

  return { ok: problems.length === 0, problems, ready, drafts };
}

function format(problems) {
  return problems
    .map((p) => `  • ${p.id}:\n${p.issues.map((i) => `      - ${i}`).join('\n')}`)
    .join('\n');
}

// CLI entry
if (import.meta.url === `file://${process.argv[1]}`) {
  const items = readAllItems();
  if (items.length === 0) {
    console.log('No LinkedIn posts yet. Nothing to lint.');
    process.exit(0);
  }
  const { channels } = readLinkedinConfig();
  const { ok, problems, ready, drafts } = lintLinkedin(items, channels);
  const now = new Date();
  console.log(`${items.length} LinkedIn post(s): ${ready.length} schedule-ready, ${drafts.length} draft.`);
  if (ready.length) {
    console.log('\nSchedule-ready:');
    for (const id of ready) {
      const item = items.find((i) => i.id === id);
      const parent = resolveParent(item, now);
      const state = !parent.post ? 'no parent'
        : parent.live ? 'parent live → will schedule' : 'parent not yet live';
      const how = item.data.approved ? 'approved' : 'auto-approved preview';
      console.log(`  ✓ ${id}  (${item.data.channel}, +${item.data.offsetDays}d, ${how}, ${state})`);
    }
  }
  if (drafts.length) console.log(`\nDrafts (need approval):\n  ${drafts.join('\n  ')}`);
  if (!ok) {
    console.error(`\n${problems.length} problem(s):\n${format(problems)}`);
    process.exit(1);
  }
  process.exit(0);
}
