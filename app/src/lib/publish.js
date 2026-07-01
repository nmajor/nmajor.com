// Single source of truth for what counts as "live" for the publishing pipeline.
//
// An essay is live only when it is not a draft AND its publish time has arrived.
// This is what makes scheduled publishing work on a static site: a deploy can
// run at any time without prematurely emailing or atomizing queued/future essays.
//
// Plain JS (not .ts) on purpose: it is imported by the Node publishing scripts
// (scripts/send-newsletter.mjs, scripts/lib/linkedin.mjs), which run without a
// TypeScript loader. The Astro build filters its own collections inline by
// `!data.draft` in the /writing pages and rss.xml.js.

/**
 * @param {{ draft?: boolean, pubDate: Date }} data  essay frontmatter
 * @param {Date} [now]  defaults to the current time
 * @returns {boolean}
 */
export function isLive(data, now = new Date()) {
  if (data.draft) return false;
  return data.pubDate instanceof Date
    ? data.pubDate.getTime() <= now.getTime()
    : new Date(data.pubDate).getTime() <= now.getTime();
}
