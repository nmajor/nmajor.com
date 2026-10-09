// What counts as "live": not a draft AND its publish time has arrived. A post with
// draft: false and a future pubDate is scheduled and stays hidden until a build
// after that time, so a deploy can run at any time without revealing it early.
// Used by every page that lists or renders posts (and the archived collections).

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
