import { defineConfig } from 'astro/config';

// Static build (dist/) served by Cloudflare Workers static assets.
// No localhost in this workspace — we iterate against the live Worker.
export default defineConfig({
  site: 'https://nmajor.com',
});
