// Read LinkedIn posts and resolve their schedule relative to their newsletter.
//
// The model: a LinkedIn post is coupled to a newsletter by slug and carries an
// `offsetDays`, never an absolute date. Its real schedule exists only once the
// newsletter actually publishes (its pubDate is stamped). Until then a delay or
// reorder of the newsletter costs nothing — there is no date to keep in sync.
//
// Frontmatter editing mirrors lib/posts.mjs deliberately: targeted line
// edits inside the `---` fence (no YAML round-trip), so diffs stay minimal. This
// dir is intentionally NOT an Astro content collection, so the site build can
// never be broken by a file here; lib/posts.mjs stays untouched (critical path).

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readPost } from './posts.mjs';
import { isLive } from '../../src/lib/publish.js';

const here = dirname(fileURLToPath(import.meta.url));
export const LINKEDIN_DIR = join(here, '..', '..', 'linkedin');
export const CONFIG_PATH = join(here, '..', '..', 'linkedin.config.json');
export const CHANNELS = ['personal', 'business', 'facebook', 'twitter', 'instagram'];

const FENCE = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;

export function readLinkedinConfig() {
  const cfg = existsSync(CONFIG_PATH) ? JSON.parse(readFileSync(CONFIG_PATH, 'utf8')) : {};
  return {
    enabled: cfg.enabled === true,
    postingHourUTC: Number.isInteger(cfg.postingHourUTC) ? cfg.postingHourUTC : 15,
    // Optional day-specific defaults, keyed by UTC weekday number (0=Sunday).
    // Values are HH:MM. These are experiment priors; per-post `postHourUTC`
    // remains available for deliberate overrides.
    postingTimesUTCByWeekday:
      cfg.postingTimesUTCByWeekday && typeof cfg.postingTimesUTCByWeekday === 'object'
        ? cfg.postingTimesUTCByWeekday
        : {},
    // channel name -> { integrationId, settingsType }. Maps each post's `channel`
    // to a connected Postiz channel. Empty/missing in shadow mode.
    channels: cfg.channels && typeof cfg.channels === 'object' ? cfg.channels : {},
  };
}

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

/**
 * Load one LinkedIn post by its id (path relative to LINKEDIN_DIR, no .md).
 * Returns the raw text, parsed frontmatter, body, and a typed `data` view.
 */
export function readItem(id) {
  const path = join(LINKEDIN_DIR, `${id}.md`);
  const raw = readFileSync(path, 'utf8');
  const m = raw.match(FENCE);
  if (!m) throw new Error(`${id}.md has no frontmatter block`);
  const fm = parseFrontmatter(m[1]);
  const body = raw.slice(m[0].length);
  return {
    id,
    path,
    raw,
    fm,
    body,
    data: {
      newsletter: typeof fm.newsletter === 'string' ? fm.newsletter.trim() : '',
      channel: typeof fm.channel === 'string' ? fm.channel.trim() : '',
      angle: typeof fm.angle === 'string' ? fm.angle.trim() : '',
      offsetDays: Number.isInteger(fm.offsetDays) ? fm.offsetDays : null,
      // The issue-day companion may be scheduled relative to the newsletter's
      // exact publish timestamp instead of a fixed UTC hour.
      offsetMinutesAfterIssue: Number.isInteger(fm.offsetMinutesAfterIssue) ? fm.offsetMinutesAfterIssue : null,
      offsetMinutesAfterIssueSupplied: Object.prototype.hasOwnProperty.call(fm, 'offsetMinutesAfterIssue'),
      // Optional per-post posting hour (UTC), overriding the batch-wide
      // postingHourUTC so a week can land on each weekday's best slot.
      postHourUTC: Number.isInteger(fm.postHourUTC) ? fm.postHourUTC : null,
      postHourUTCSupplied: Object.prototype.hasOwnProperty.call(fm, 'postHourUTC'),
      weeklyBatchVersion: Number.isInteger(fm.weeklyBatchVersion) ? fm.weeklyBatchVersion : null,
      sourceKind: typeof fm.sourceKind === 'string' ? fm.sourceKind.trim() : '',
      editorialLane: typeof fm.editorialLane === 'string' ? fm.editorialLane.trim() : '',
      reachGame: typeof fm.reachGame === 'string' ? fm.reachGame.trim() : '',
      lengthReason: typeof fm.lengthReason === 'string' ? fm.lengthReason.trim() : '',
      // Repo-relative review asset chosen from a meme campaign. Selection
      // metadata only; the scheduler continues to use `media` exclusively.
      meme: typeof fm.meme === 'string' ? fm.meme.trim() : '',
      // Row id selected from visuals/campaign.jsonl. Selection alone does not
      // approve or attach the asset; attach-social-visual.mjs enforces both.
      visual: typeof fm.visual === 'string' ? fm.visual.trim() : '',
      // New visual-led posts fail closed at scheduling time until an approved
      // asset has been attached as media. Legacy posts omit this field.
      mediaRequired: fm.mediaRequired === true,
      // Optional attachment(s), relative to the post's own batch folder: one
      // file, a comma-separated list, or a directory (expanded to its sorted
      // images, which is how a multi-slide carousel is declared). Absent on
      // text-only posts, which is the overwhelming majority.
      media:
        typeof fm.media === 'string' && fm.media.trim()
          ? fm.media.split(',').map((s) => s.trim()).filter(Boolean)
          : [],
      approved: typeof fm.approved === 'string' ? fm.approved.trim() : '',
      shadowedAt: fm.shadowedAt ? new Date(fm.shadowedAt) : null,
      pushedAt: fm.pushedAt ? new Date(fm.pushedAt) : null,
    },
  };
}

/** List every LinkedIn post id (relative path without .md), skipping README. */
export function listItemIds(dir = LINKEDIN_DIR, prefix = '') {
  if (!existsSync(dir)) return [];
  const ids = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const rel = prefix ? `${prefix}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      ids.push(...listItemIds(join(dir, entry.name), rel));
    } else if (entry.name.endsWith('.md') && entry.name !== 'README.md') {
      ids.push(rel.replace(/\.md$/, ''));
    }
  }
  return ids;
}

export function readAllItems() {
  return listItemIds().map(readItem);
}

/** Set (or insert) frontmatter fields on a LinkedIn post and write it back. */
export function setItemFields(id, updates) {
  const path = join(LINKEDIN_DIR, `${id}.md`);
  let raw = readFileSync(path, 'utf8');
  const m = raw.match(FENCE);
  if (!m) throw new Error(`${id}.md has no frontmatter block`);
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

/**
 * The ONE carve-out from the human approval gate. A LinkedIn post is approved by
 * policy (no human `approved:` needed) when its channel is configured with
 * `autoApprovePreview: true` AND its angle is exactly `preview`. This exists so
 * the low-stakes company-page newsletter previews Nick trusts can publish
 * automatically, while every bespoke post (any other angle) still requires his
 * sign-off. Scoped to angle so legacy `channel: business` posts stay gated.
 */
export function isAutoApproved(item, channels = {}) {
  const ch = channels[item.data.channel];
  return Boolean(ch && ch.autoApprovePreview === true && item.data.angle === 'preview');
}

/**
 * Fields of a channel's `expect` block that must match what Postiz reports for
 * the channel's integrationId. Born from the 2026-08-04 incident: a LinkedIn
 * re-auth silently swapped the identity behind a stable integration ID from
 * Nick's personal profile to a stranger's company page, and five posts were
 * scheduled to the wrong account. IDs are stable; identities are not.
 */
export const EXPECT_FIELDS = ['identifier', 'name', 'profile'];

/**
 * Verify every configured channel's Postiz integration identity against its
 * `expect` block. Pure: takes the config's channel map and the array returned
 * by listIntegrations(), returns a list of problems (empty = all OK).
 *
 * Rules, per channel that has an integrationId (channels without one are
 * pending and never pushed to, so they are skipped):
 *   - `expect` must exist with all of EXPECT_FIELDS non-empty (fail closed);
 *   - the integration must exist in Postiz and not be disabled;
 *   - identifier, name, and profile must each match `expect` exactly.
 *
 * @param {Record<string, {integrationId?: string, expect?: object}>} channels
 * @param {Array<{id, name, identifier, profile, disabled}>} integrations
 * @returns {Array<{channel: string, field?: string, expected?: string, actual?: string, message: string}>}
 */
export function verifyIntegrationIdentity(channels, integrations) {
  const problems = [];
  const remediation =
    'the integration identity changed — reconnect the right account in Postiz ' +
    'or update integrationId + expect in linkedin.config.json';
  for (const [channel, ch] of Object.entries(channels || {})) {
    if (!ch || !ch.integrationId) continue; // pending channel: nothing can be pushed
    const expect = ch.expect;
    const incomplete =
      !expect || typeof expect !== 'object' ||
      EXPECT_FIELDS.some((f) => typeof expect[f] !== 'string' || !expect[f].trim());
    if (incomplete) {
      problems.push({
        channel,
        message:
          `channel "${channel}" (integration ${ch.integrationId}) has no complete \`expect\` block ` +
          `in linkedin.config.json — add {"identifier","name","profile"} matching the intended ` +
          `account so identity can be verified before pushing (fail closed).`,
      });
      continue;
    }
    const integ = (integrations || []).find((i) => i && i.id === ch.integrationId);
    if (!integ) {
      problems.push({
        channel,
        message:
          `channel "${channel}": integration ${ch.integrationId} does not exist in Postiz — ${remediation}.`,
      });
      continue;
    }
    if (integ.disabled) {
      problems.push({
        channel,
        message:
          `channel "${channel}": integration ${ch.integrationId} ("${integ.name}") is disabled in Postiz — ${remediation}.`,
      });
      continue;
    }
    for (const field of EXPECT_FIELDS) {
      if (integ[field] !== expect[field]) {
        problems.push({
          channel,
          field,
          expected: expect[field],
          actual: integ[field],
          message:
            `channel "${channel}" (integration ${ch.integrationId}): ${field} mismatch — ` +
            `expected ${JSON.stringify(expect[field])} but Postiz reports ${JSON.stringify(integ[field] ?? null)} ` +
            `("${integ.name}", identifier "${integ.identifier}") — ${remediation}.`,
        });
      }
    }
  }
  return problems;
}

/**
 * The heart of the system: a pure function from (offset, newsletter pubDate) to
 * an absolute schedule. schedule = the issue's pubDate calendar day + offsetDays,
 * at postingHourUTC. Because it derives from the real pubDate, reordering or
 * delaying the newsletter automatically moves every LinkedIn post with it.
 *
 * @param {number} offsetDays   whole days after the issue publishes
 * @param {Date} pubDate        the newsletter's real publish time
 * @param {number} postingHourUTC
 * @returns {Date}
 */
export function scheduleFor(offsetDays, pubDate, postingHourUTC = 15) {
  const base = Date.UTC(
    pubDate.getUTCFullYear(), pubDate.getUTCMonth(), pubDate.getUTCDate(),
    postingHourUTC, 0, 0, 0,
  );
  return new Date(base + offsetDays * 24 * 60 * 60 * 1000);
}

/** Resolve an HH:MM weekday prior, falling back to the legacy whole-hour default. */
export function postingTimeFor(offsetDays, pubDate, postingTimesUTCByWeekday = {}, postingHourUTC = 15) {
  const targetDay = new Date(Date.UTC(
    pubDate.getUTCFullYear(), pubDate.getUTCMonth(), pubDate.getUTCDate() + offsetDays,
  )).getUTCDay();
  const raw = postingTimesUTCByWeekday[String(targetDay)];
  const match = typeof raw === 'string' ? raw.match(/^([01]\d|2[0-3]):([0-5]\d)$/) : null;
  if (!match) return { hour: postingHourUTC, minute: 0 };
  return { hour: Number(match[1]), minute: Number(match[2]) };
}

/** Schedule at a precise UTC hour and minute on the issue-relative day. */
export function scheduleForTime(offsetDays, pubDate, postingHourUTC = 15, postingMinuteUTC = 0) {
  const base = Date.UTC(
    pubDate.getUTCFullYear(), pubDate.getUTCMonth(), pubDate.getUTCDate(),
    postingHourUTC, postingMinuteUTC, 0, 0,
  );
  return new Date(base + offsetDays * 24 * 60 * 60 * 1000);
}

/** Schedule relative to the newsletter's exact publish timestamp. */
export function scheduleAfterIssue(pubDate, offsetMinutesAfterIssue) {
  return new Date(pubDate.getTime() + offsetMinutesAfterIssue * 60 * 1000);
}

/**
 * Resolve a LinkedIn post against its parent newsletter. Returns the parent post
 * (or null if missing) and whether the parent is live + approved.
 */
export function resolveParent(item, now = new Date()) {
  let post = null;
  try {
    post = readPost(item.data.newsletter);
  } catch {
    return { post: null, live: false, approved: false };
  }
  return {
    post,
    live: isLive(post.data, now),
    approved: Boolean(post.data.approved),
  };
}

/**
 * Select the LinkedIn posts that are due to be scheduled now: parent newsletter
 * is live, the post itself is approved (by Nick's `approved:` field OR by the
 * auto-approve preview policy, see isAutoApproved), and it has not yet been
 * handled. The "handled" lock depends on mode — `pushedAt` in live mode,
 * `shadowedAt` in shadow mode — so flipping to live never skips a post merely
 * because shadow mode already announced it.
 *
 * @returns {Array<{item, post, at: Date}>}  each due post with its resolved date
 */
export function selectDue(items, { now = new Date(), enabled = false, postingHourUTC = 15, postingTimesUTCByWeekday = {}, channels = {}, resolve = resolveParent } = {}) {
  const due = [];
  for (const item of items) {
    const d = item.data;
    if (!d.approved && !isAutoApproved(item, channels)) continue;
    if (d.offsetDays === null || d.offsetDays < 0) continue;
    if (d.postHourUTCSupplied && d.postHourUTC === null) continue;
    if (d.offsetMinutesAfterIssueSupplied && d.offsetMinutesAfterIssue === null) continue;
    if (Number.isInteger(d.postHourUTC) && (d.postHourUTC < 0 || d.postHourUTC > 23)) continue;
    if (Number.isInteger(d.offsetMinutesAfterIssue) && (
      d.offsetMinutesAfterIssue < 0 || d.offsetDays !== 0 || Number.isInteger(d.postHourUTC)
    )) continue;
    if (!CHANNELS.includes(d.channel)) continue;
    if (enabled ? d.pushedAt : d.shadowedAt) continue;

    // The gate is: the newsletter is actually live (already published) AND the
    // LinkedIn post itself is approved. We do NOT also require the parent's
    // `approved` field — once a post is live it is already out, and live posts
    // may not carry the queue sign-off field at all.
    const parent = resolve(item, now);
    if (!parent.post || !parent.live) continue;

    // A post may override the batch-wide hour with its own `postHourUTC`, so a
    // week can be spread across each weekday's best-performing slot rather than
    // firing every day at the same time.
    let at;
    if (Number.isInteger(d.offsetMinutesAfterIssue)) {
      at = scheduleAfterIssue(parent.post.data.pubDate, d.offsetMinutesAfterIssue);
    } else if (Number.isInteger(d.postHourUTC)) {
      at = scheduleFor(d.offsetDays, parent.post.data.pubDate, d.postHourUTC);
    } else {
      const time = postingTimeFor(
        d.offsetDays,
        parent.post.data.pubDate,
        postingTimesUTCByWeekday,
        postingHourUTC,
      );
      at = scheduleForTime(d.offsetDays, parent.post.data.pubDate, time.hour, time.minute);
    }
    due.push({ item, post: parent.post, at });
  }
  return due;
}
