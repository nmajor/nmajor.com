// Per-post OG card at /og/blog/<slug>.png. Gating MUST match
// src/pages/blog/[...slug].astro so every post page has its card.
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { isLive } from '../../../lib/publish.js';
import { renderOgPng, ogResponse } from '../../../og/card';

export async function getStaticPaths() {
  const posts = await getCollection('posts', ({ data }) => isLive(data));
  return posts.map((post) => ({ params: { slug: post.id }, props: { post } }));
}

const eyebrows = { writing: 'Writing', experiment: 'Experiment', tools: 'Tools' } as const;

export const GET: APIRoute = async ({ props }) => {
  const { post } = props as { post: { data: { title: string; summary: string; kind: keyof typeof eyebrows } } };
  const png = await renderOgPng({ eyebrow: eyebrows[post.data.kind], title: post.data.title, subtitle: post.data.summary });
  return ogResponse(png);
};
