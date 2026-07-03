// Per-essay OG card: the essay title, big, on brand. One PNG per essay,
// prerendered to dist/og/writing/<slug>.png (served at /og/writing/<slug>.png).
// Gating MUST match the essay page (src/pages/writing/[...slug].astro), which
// builds on `!data.draft`, so every essay page has a matching card and never
// references a missing image.
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { renderOgPng, ogResponse } from '../../../og/card';

export async function getStaticPaths() {
  const essays = await getCollection('essays', ({ data }) => !data.draft);
  return essays.map((essay) => ({ params: { slug: essay.id }, props: { essay } }));
}

export const GET: APIRoute = async ({ props }) => {
  const { essay } = props as { essay: { data: { title: string; summary: string } } };
  const png = await renderOgPng({
    eyebrow: 'Actual Intelligence',
    title: essay.data.title,
    subtitle: essay.data.summary,
    theme: 'paper',
  });
  return ogResponse(png);
};
