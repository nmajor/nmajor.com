import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Single source of truth for everything Nick publishes. Two kinds of writing:
//   essays — the substantive spine. Each essay IS the blog post AND the newsletter
//            issue AND the source for LinkedIn atomization. Markdown files below.
//   takes  — short, frequent, opinionated one-liners. Billboard + social fuel.
// We never author content anywhere but here.

const essays = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/essays' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Nicholas Major'),
    draft: z.boolean().default(false),
    updatedDate: z.coerce.date().optional(),
    // The one essay featured in the home hero.
    featured: z.boolean().default(false),
    // Hero rendering: split the title so the second half takes the accent color,
    // and give the hero its own punchier lede. All optional — falls back to title
    // + summary when absent.
    heroTitleLead: z.string().optional(),
    heroTitleAccent: z.string().optional(),
    heroLede: z.string().optional(),
    // Reading time. Optional override; otherwise computed from the body word count.
    readingMinutes: z.number().optional(),
    // Personal sign-off. Reserved for Nick; agents never set this. Presence gates
    // eligibility to publish/email once that pipeline exists (mirrors the Institute).
    approved: z.string().optional(),
    emailedAt: z.coerce.date().optional(),
  }),
});

const takes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/takes' }),
  schema: z.object({
    text: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Nicholas Major'),
    draft: z.boolean().default(false),
  }),
});

// The engineering archive: Nick's pre-AI-advisory technical writing (home-lab
// Kubernetes, 2018 dev tutorials), migrated from the old Vercel site. Kept in its
// own collection so it never mixes into the AI essays or the newsletter feed, but
// stays visible as proof he actually builds. Rendered at the ORIGINAL /posts/<slug>
// URLs (the file id includes the date prefix) so old links and SEO keep working.
const engineering = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/engineering' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    hero: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { essays, takes, engineering };
