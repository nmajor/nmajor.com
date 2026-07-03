// Read takes and resolve their schedule relative to their source essay.
//
// Takes are short, one-line site content (the `takes` collection). Most are
// auto-generated: the content-repurposing skill atomizes an approved essay into
// 1-3 standalone takes and writes them here as real collection files, exactly
// like it writes LinkedIn posts — but takes ARE rendered on the site, so they
// live in src/content/takes/ (a real Astro collection), not in a side directory.
//
// The scheduling model is identical to LinkedIn's: a generated take is coupled to
// its essay by `source` and carries an `offsetDays`, never an absolute date. It
// starts life `draft: true` with a placeholder pubDate. When the source essay
// actually goes live, schedule-takes.mjs stamps the take's real pubDate
// (essay pubDate + offsetDays) and flips `draft: false`. From then on the site's
// isLive() gate (draft AND pubDate <= now) reveals each take on its day as the
// daily build runs — the drip. `draft` is the idempotency lock: once flipped, a
// take is never re-stamped.
//
// Frontmatter editing mirrors lib/posts.mjs / lib/linkedin.mjs deliberately:
// targeted line edits inside the `---` fence (no YAML round-trip), so diffs stay
// minimal and human-authored formatting is preserved.

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readPost } from './posts.mjs';
import { isLive } from '../../src/lib/publish.js';

const here = dirname(fileURLToPath(import.meta.url));
export const TAKES_DIR = join(here, '..', '..', 'src', 'content', 'takes');

const FENCE = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;

function parseScalar(raw) {
  let v = raw.trim();
  if (v === '') return '';
  if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
    return v.slice(1, -1);
  }
  if (v === 'true') return true;
  if (v === 'false') return false;
  if (/^-?\d+$/.test(v)) return Number(v);
  return v;
}

function parseFrontmatter(block) {
  const data = {};
  for (const line of block.split(/\r?\n/)) {
    const m = line.match(/^([A-Za-z0-9_]+):\s?(.*)$/);
    if (m) data[m[1]] = parseScalar(m[2]);
  }
  return data;
}

function serialize(value) {
  if (typeof value === 'boolean' || typeof value === 'number') return String(value);
  const s = String(value);
  return /[:#"']|^\s|\s$/.test(s) ? JSON.stringify(s) : s;
}

/** Load one take by slug (filename without .md). */
export function readTake(slug) {
  const path = join(TAKES_DIR, `${slug}.md`);
  const raw = readFileSync(path, 'utf8');
  const m = raw.match(FENCE);
  if (!m) throw new Error(`${slug}.md has no frontmatter block`);
  const fm = parseFrontmatter(m[1]);
  const body = raw.slice(m[0].length);
  return {
    slug,
    path,
    raw,
    fm,
    body,
    data: {
      text: typeof fm.text === 'string' ? fm.text : '',
      pubDate: fm.pubDate ? new Date(fm.pubDate) : null,
      draft: fm.draft === true,
      source: typeof fm.source === 'string' ? fm.source.trim() : '',
      offsetDays: Number.isInteger(fm.offsetDays) ? fm.offsetDays : null,
      idea: typeof fm.idea === 'string' ? fm.idea.trim() : '',
    },
  };
}

/** List every take slug in the collection. */
export function listTakeSlugs() {
  if (!existsSync(TAKES_DIR)) return [];
  return readdirSync(TAKES_DIR)
    .filter((f) => f.endsWith('.md') && f !== 'README.md')
    .map((f) => f.replace(/\.md$/, ''));
}

/** Read every take (parsed). */
export function readAllTakes() {
  return listTakeSlugs().map(readTake);
}

/** Set (or insert) frontmatter fields on a take and write it back. */
export function setTakeFields(slug, updates) {
  const path = join(TAKES_DIR, `${slug}.md`);
  let raw = readFileSync(path, 'utf8');
  const m = raw.match(FENCE);
  if (!m) throw new Error(`${slug}.md has no frontmatter block`);
  let block = m[1];
  for (const [key, value] of Object.entries(updates)) {
    const line = `${key}: ${serialize(value)}`;
    const re = new RegExp(`^${key}:.*$`, 'm');
    block = re.test(block) ? block.replace(re, line) : `${block}\n${line}`;
  }
  const next = `---\n${block}\n---\n${raw.slice(m[0].length)}`;
  writeFileSync(path, next);
  return next;
}

/** Format a Date as a clean YYYY-MM-DD (UTC), matching the takes house style. */
export function toDateStamp(date) {
  return date.toISOString().slice(0, 10);
}

/**
 * Pure function from (offset, source essay pubDate) to a take's publish day.
 * schedule = the essay's publish calendar day + offsetDays, at 00:00 UTC. Midnight
 * (well before the 14:00 UTC daily build) guarantees the take is revealed by the
 * build on its target day, never a day early or late. Because it derives from the
 * essay's real pubDate, reordering or delaying the essay moves every child take
 * with it.
 *
 * @param {number} offsetDays  whole days after the essay publishes
 * @param {Date} essayPubDate  the source essay's real publish time
 * @returns {Date}  midnight UTC on the take's publish day
 */
export function scheduleFor(offsetDays, essayPubDate) {
  return new Date(Date.UTC(
    essayPubDate.getUTCFullYear(),
    essayPubDate.getUTCMonth(),
    essayPubDate.getUTCDate() + offsetDays,
    0, 0, 0, 0,
  ));
}

/**
 * Resolve a take against its source essay. Returns the essay (or null if the
 * take has no/unknown source) and whether that essay is live.
 */
export function resolveSource(take, now = new Date(), readEssay = readPost) {
  if (!take.data.source) return { essay: null, live: false };
  let essay = null;
  try {
    essay = readEssay(take.data.source);
  } catch {
    return { essay: null, live: false };
  }
  return { essay, live: isLive(essay.data, now) };
}

/**
 * Select the takes that are due to be scheduled now: a generated take (has a
 * `source`) that is still unscheduled (`draft: true`), has a valid forward
 * `offsetDays`, and whose source essay is already live. Hand-authored takes (no
 * `source`) are never touched here — they carry their own real pubDate. `draft`
 * is the idempotency lock: once schedule-takes flips it to false, the take is
 * never re-selected.
 *
 * @returns {Array<{take, essay, at: Date}>} each due take with its resolved date
 */
export function selectDueTakes(takes, { now = new Date(), resolve = resolveSource } = {}) {
  const due = [];
  for (const take of takes) {
    const d = take.data;
    if (!d.source) continue;
    if (!d.draft) continue;
    if (d.offsetDays === null || d.offsetDays < 1) continue;

    const src = resolve(take, now);
    if (!src.essay || !src.live) continue;

    due.push({ take, essay: src.essay, at: scheduleFor(d.offsetDays, src.essay.data.pubDate) });
  }
  return due;
}
