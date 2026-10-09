// Newsletter OG card for /subscribe. Prerendered to dist/og/subscribe.png.
import type { APIRoute } from 'astro';
import { renderOgPng, ogResponse } from '../../og/card';

export const GET: APIRoute = async () => {
  const png = await renderOgPng({
    eyebrow: 'The newsletter',
    title: 'Deploy to Humans',
    subtitle: 'Shipping is easy. Deploying to humans is the hard part. One growth experiment a week, with what happened.',
    theme: 'ink',
  });
  return ogResponse(png);
};
