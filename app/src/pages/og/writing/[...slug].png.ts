// OG cards for the archived applied-AI essays, kept at their original
// /og/writing/<slug>.png paths so existing social shares keep their images.
// Gating MUST match src/pages/archive/ai/[...slug].astro.
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { isLive } from '../../../lib/publish.js';
import { renderOgPng, ogResponse } from '../../../og/card';

export async function getStaticPaths() {
  const essays = await getCollection('essays', ({ data }) => isLive(data));
  return essays.map((essay) => ({ params: { slug: essay.id }, props: { essay } }));
}

export const GET: APIRoute = async ({ props }) => {
  const { essay } = props as { essay: { data: { title: string; summary: string } } };
  const png = await renderOgPng({ eyebrow: 'Archive · Applied AI', title: essay.data.title, subtitle: essay.data.summary });
  return ogResponse(png);
};
