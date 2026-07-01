// Validate that every slug in the queue is a finished, signed-off draft.
//
// This is the guard behind "nothing publishes without Nick's personal sign-off":
// the publisher runs this first and REFUSES to publish anything if the queue
// contains a broken or unapproved entry. Run standalone any time with:
//   npm run queue:lint

import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { readConfig } from './lib/config.mjs';
import { readPost, ESSAYS_DIR } from './lib/posts.mjs';

const MIN_BODY_CHARS = 200;

/** @returns {{ok: boolean, problems: Array<{slug: string, issues: string[]}>}} */
export function lintQueue(cfg) {
  const problems = [];
  const seen = new Set();

  for (const slug of cfg.queue) {
    const issues = [];

    if (seen.has(slug)) issues.push('listed more than once in the queue');
    seen.add(slug);

    if (!existsSync(join(ESSAYS_DIR, `${slug}.md`))) {
      problems.push({ slug, issues: ['no matching essay file (src/content/essays/' + slug + '.md)'] });
      continue;
    }

    const post = readPost(slug);
    const d = post.data;
    if (!d.title) issues.push('missing title');
    if (!d.summary) issues.push('missing summary');
    if (!d.author) issues.push('missing author');
    if (!d.pubDate || Number.isNaN(d.pubDate.getTime())) issues.push('missing/invalid pubDate placeholder');
    if (post.body.trim().length < MIN_BODY_CHARS) {
      issues.push(`body looks unfinished (<${MIN_BODY_CHARS} chars)`);
    }
    if (!d.approved) issues.push('not approved — set `approved:` (Nick only)');
    if (d.draft !== true) issues.push('expected draft: true while queued (it is not live yet)');

    if (issues.length) problems.push({ slug, issues });
  }

  return { ok: problems.length === 0, problems };
}

function format(problems) {
  return problems
    .map((p) => `  • ${p.slug}:\n${p.issues.map((i) => `      - ${i}`).join('\n')}`)
    .join('\n');
}

// CLI entry
if (import.meta.url === `file://${process.argv[1]}`) {
  const cfg = readConfig();
  if (cfg.queue.length === 0) {
    console.log('Queue is empty. Nothing to lint.');
    process.exit(0);
  }
  const { ok, problems } = lintQueue(cfg);
  if (ok) {
    console.log(`Queue OK — ${cfg.queue.length} post(s) ready:\n  ${cfg.queue.join('\n  ')}`);
    process.exit(0);
  }
  console.error(`Queue has ${problems.length} problem(s):\n${format(problems)}`);
  process.exit(1);
}
