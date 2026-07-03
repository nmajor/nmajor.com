// Default / home OG card (also the site-wide fallback). Prerendered to
// dist/og/default.png at build, served at /og/default.png.
import type { APIRoute } from 'astro';
import { renderOgPng, ogResponse } from '../../og/card';

export const GET: APIRoute = async () => {
  const png = await renderOgPng({
    eyebrow: 'Actual Intelligence',
    title: 'Plain-English AI for people who run things',
    subtitle: "Honest, hype-free writing on where AI actually fits in a business, and where it doesn't.",
    theme: 'paper',
  });
  return ogResponse(png);
};
