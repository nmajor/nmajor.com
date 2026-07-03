import { defineConfig } from 'astro/config';

// Static build (dist/) served by Cloudflare Workers static assets.
// No localhost in this workspace — we iterate against the live Worker.
export default defineConfig({
  // Canonical host is www: naked nmajor.com 301s to www.nmajor.com (see worker.js),
  // so canonical, OG image, and RSS URLs must all be www to match the redirect.
  site: 'https://www.nmajor.com',
  // The old site's article index lived at /posts; individual posts stay at their
  // original /posts/<slug> URLs (handled by src/pages/posts/[...slug].astro). The
  // section index lives at /building (the build-in-public log).
  redirects: {
    '/posts': '/building',
    '/engineering': '/building',
  },
});
