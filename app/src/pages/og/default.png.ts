// Default / home OG card (also the site-wide fallback). Prerendered to
// dist/og/default.png at build, served at /og/default.png.
import type { APIRoute } from 'astro';
import { renderOgPng, ogResponse } from '../../og/card';

export const GET: APIRoute = async () => {
  const png = await renderOgPng({
    eyebrow: "Hey, I'm Nick",
    title: 'Software engineer figuring out distribution',
    subtitle: "Building with AI. Testing marketing and growth tactics. Sharing what works and what doesn't.",
  });
  return ogResponse(png);
};
