// Validate the takes collection. Two jobs:
//
//   1. Structural: every take has non-trivial text; every AUTO-GENERATED take (one
//      carrying a `source`) references a real essay, has a forward offset in range,
//      and carries an `idea` (the dedup fingerprint).
//   2. The hard dedup backstop: no two takes share the same `idea`. The
//      content-repurposing skill does the real, semantic "never a near-duplicate
//      idea" judgment when it generates takes; this catches the exact-match case
//      mechanically so a slip can't ship a literal repeat to /takes.
//
// This is the takes-side mirror of queue-lint.mjs / linkedin-lint.mjs. Run with:
//   npm run takes:lint

import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { readAllTakes } from './lib/takes.mjs';
import { ESSAYS_DIR } from './lib/posts.mjs';

const MIN_TEXT_CHARS = 30;
const MIN_OFFSET = 1;
const MAX_OFFSET = 14;

const normIdea = (s) => s.trim().toLowerCase().replace(/\s+/g, ' ');

/** @returns {{ok: boolean, problems: Array, generated: string[], authored: string[]}} */
export function lintTakes(takes, essaysDir = ESSAYS_DIR) {
  const problems = [];
  const generated = [];
  const authored = [];
  const ideaOwners = new Map(); // normalized idea -> [slug, ...]

  for (const take of takes) {
    const d = take.data;
    const issues = [];

    if (!d.text || d.text.trim().length < MIN_TEXT_CHARS) {
      issues.push(`text looks unfinished (<${MIN_TEXT_CHARS} chars)`);
    }
    if (!d.pubDate || Number.isNaN(d.pubDate.getTime())) {
      issues.push('missing/invalid `pubDate`');
    }

    if (d.source) {
      // An auto-generated take: must couple to a real essay and carry its idea.
      if (!existsSync(join(essaysDir, `${d.source}.md`))) {
        issues.push(`source "${d.source}" has no matching essay (src/content/essays/${d.source}.md)`);
      }
      if (!d.idea) issues.push('missing `idea` (the dedup fingerprint)');
      // offsetDays is only meaningful while a take is still unscheduled
      // (draft:true). Once scheduled (draft:false, real pubDate) the offset has
      // done its job and may be absent. When present it must be in range.
      if (d.offsetDays !== null) {
        if (d.offsetDays < MIN_OFFSET || d.offsetDays > MAX_OFFSET) {
          issues.push(`\`offsetDays\` must be ${MIN_OFFSET}..${MAX_OFFSET} (got ${d.offsetDays})`);
        }
      } else if (d.draft) {
        issues.push('unscheduled generated take missing `offsetDays` (whole number)');
      }
    }

    // Track ideas (from every take that has one) for the global uniqueness check.
    if (d.idea) {
      const key = normIdea(d.idea);
      if (!ideaOwners.has(key)) ideaOwners.set(key, []);
      ideaOwners.get(key).push(take.slug);
    }

    if (issues.length) problems.push({ slug: take.slug, issues });
    else if (d.source) generated.push(take.slug);
    else authored.push(take.slug);
  }

  // Duplicate-idea backstop: any idea claimed by more than one take.
  for (const [, slugs] of ideaOwners) {
    if (slugs.length > 1) {
      problems.push({ slug: slugs.join(' + '), issues: [`duplicate idea shared by: ${slugs.join(', ')}`] });
    }
  }

  return { ok: problems.length === 0, problems, generated, authored };
}

function format(problems) {
  return problems
    .map((p) => `  • ${p.slug}:\n${p.issues.map((i) => `      - ${i}`).join('\n')}`)
    .join('\n');
}

// CLI entry
if (import.meta.url === `file://${process.argv[1]}`) {
  const takes = readAllTakes();
  if (takes.length === 0) {
    console.log('No takes yet. Nothing to lint.');
    process.exit(0);
  }
  const { ok, problems, generated, authored } = lintTakes(takes);
  console.log(`${takes.length} take(s): ${generated.length} generated, ${authored.length} hand-authored.`);
  if (!ok) {
    console.error(`\n${problems.length} problem(s):\n${format(problems)}`);
    process.exit(1);
  }
  console.log('All takes valid.');
  process.exit(0);
}
