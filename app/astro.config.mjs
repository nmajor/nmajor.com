import { defineConfig } from 'astro/config';

// Static build (dist/) served by Cloudflare Workers static assets.
// No localhost in this workspace — we iterate against the live Worker.
export default defineConfig({
  site: 'https://nmajor.com',
  // The old site's article index lived at /posts; individual posts stay at their
  // original /posts/<slug> URLs (handled by src/pages/posts/[...slug].astro). Only
  // the bare index moves to the new /engineering home.
  redirects: {
    '/posts': '/engineering',
  },
});
