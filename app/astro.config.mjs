import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

// Canonical host is www: naked nmajor.com 301s to www.nmajor.com (see worker.js),
// so canonical, OG image, RSS, and sitemap URLs must all be www to match the redirect.
const SITE = 'https://www.nmajor.com';

// --- Accurate <lastmod> for the sitemap ------------------------------------------
// Google ignores <changefreq> and <priority> but uses <lastmod> when it is verifiably
// accurate, so we set only lastmod, straight from each page's real content date. We read
// the same markdown frontmatter Astro renders (at config time, once per build), so the
// dates can never drift from the published pages.
function readCollection(dir) {
  const base = fileURLToPath(new URL(`./src/content/${dir}`, import.meta.url));
  return readdirSync(base)
    .filter((f) => f.endsWith('.md'))
    .map((f) => ({ slug: f.replace(/\.md$/, ''), data: matter(readFileSync(`${base}/${f}`, 'utf8')).data }));
}

const iso = (v) => (v ? new Date(v).toISOString() : undefined);
const isLive = (d) => d.draft !== true && d.pubDate && new Date(d.pubDate) <= new Date();
const maxIso = (xs) => xs.filter(Boolean).reduce((a, b) => (a > b ? a : b), undefined);

// essays   -> /archive/ai/<slug>/ ; lastmod = updatedDate ?? pubDate
// building -> /archive/engineering/<slug>/ ; lastmod = date
const essays = readCollection('essays').filter((e) => isLive(e.data));
const building = readCollection('building').filter((e) => e.data.draft !== true);

const essayLastmod = new Map(essays.map((e) => [e.slug, iso(e.data.updatedDate ?? e.data.pubDate)]));
const buildingLastmod = new Map(building.map((e) => [e.slug, iso(e.data.date)]));
const latestEssay = maxIso(essays.map((e) => iso(e.data.pubDate)));

function lastmodFor(url) {
  const path = url.replace(SITE, '').replace(/\/$/, '') || '/';
  let m;
  if ((m = path.match(/^\/archive\/ai\/(.+)$/))) return essayLastmod.get(m[1]);
  if ((m = path.match(/^\/archive\/engineering\/(.+)$/))) return buildingLastmod.get(m[1]);
  if (path === '/archive/ai') return latestEssay;
  return undefined; // anything else: omit rather than fake a date
}

// Static build (dist/) served by Cloudflare Workers static assets.
// No localhost in this workspace — we iterate against the live Worker.
export default defineConfig({
  site: SITE,
  // No Astro `redirects`: with static output they are meta-refresh pages, not real
  // 301s. Every legacy URL is 301'd by worker.js (legacyRedirect) instead.
  integrations: [
    sitemap({
      // Only canonical, indexable HTML belongs in a sitemap.
      filter: (url) => !url.includes('/og/') && !url.endsWith('.xml'),
      serialize(item) {
        const lastmod = lastmodFor(item.url);
        if (lastmod) item.lastmod = lastmod;
        // changefreq/priority intentionally omitted: Google ignores both, and an
        // inaccurate signal is worse than none.
        return item;
      },
    }),
  ],
});
