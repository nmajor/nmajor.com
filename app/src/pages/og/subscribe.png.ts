// Newsletter / subscribe OG card. Ink (black) theme to echo the home page's black
// subscribe block. Prerendered to dist/og/subscribe.png, served at /og/subscribe.png.
import type { APIRoute } from 'astro';
import { renderOgPng, ogResponse } from '../../og/card';

export const GET: APIRoute = async () => {
  const png = await renderOgPng({
    eyebrow: 'The newsletter',
    title: 'Actual Intelligence',
    subtitle: 'Plain-English AI for people who run things. One essay in your inbox, roughly weekly. Free.',
    theme: 'ink',
  });
  return ogResponse(png);
};
