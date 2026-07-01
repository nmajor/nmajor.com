// Read and edit post frontmatter without reserializing the whole YAML block.
//
// We deliberately do NOT round-trip through a YAML library: edits are targeted
// line replacements/insertions inside the `---` fence so git diffs stay minimal
// and human-authored formatting is preserved. The frontmatter here is always
// flat scalars (title, summary, pubDate, author, draft, approved, emailedAt,
// updatedDate), so this stays simple and predictable.

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
export const ESSAYS_DIR = join(here, '..', '..', 'src', 'content', 'essays');

const FENCE = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;

/** Parse one flat-scalar frontmatter line value into a JS value. */
function parseScalar(raw) {
  let v = raw.trim();
  if (v === '') return '';
  if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
    return v.slice(1, -1);
  }
  if (v === 'true') return true;
  if (v === 'false') return false;
  return v;
}

/** Minimal flat-frontmatter parser. Returns a plain object of raw scalars. */
function parseFrontmatter(block) {
  const data = {};
  for (const line of block.split(/\r?\n/)) {
    const m = line.match(/^([A-Za-z0-9_]+):\s?(.*)$/);
    if (m) data[m[1]] = parseScalar(m[2]);
  }
  return data;
}

/**
 * Load a post by slug (filename without .md). Returns the raw text, the parsed
 * frontmatter, the body, and a typed `data` view useful for the publish gate.
 */
export function readPost(slug) {
  const path = join(ESSAYS_DIR, `${slug}.md`);
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
      title: typeof fm.title === 'string' ? fm.title : '',
      summary: typeof fm.summary === 'string' ? fm.summary : '',
      author: typeof fm.author === 'string' ? fm.author : '',
      draft: fm.draft === true,
      approved: typeof fm.approved === 'string' ? fm.approved.trim() : '',
      pubDate: fm.pubDate ? new Date(fm.pubDate) : null,
      emailedAt: fm.emailedAt ? new Date(fm.emailedAt) : null,
    },
  };
}

/** List every post slug in the collection. */
export function listPostSlugs() {
  return readdirSync(ESSAYS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}

/** Read every post (parsed). */
export function readAllPosts() {
  return listPostSlugs().map(readPost);
}

function serialize(value) {
  if (typeof value === 'boolean') return String(value);
  // Quote anything with characters that would confuse a YAML scalar; dates and
  // plain words pass through unquoted to match the existing house style.
  const s = String(value);
  return /[:#"']|^\s|\s$/.test(s) ? JSON.stringify(s) : s;
}

/**
 * Set (or insert) a frontmatter field on raw post text and write it back.
 * Replaces the field's line in place if present; otherwise inserts it just
 * before the closing `---`. Returns the new raw text.
 */
export function setFrontmatterFields(slug, updates) {
  const path = join(ESSAYS_DIR, `${slug}.md`);
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
