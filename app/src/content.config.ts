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
    // Personal sign-off. Set by Nick, or by an agent when Nick explicitly says he
    // approves a specific post in the conversation — never on an agent's own judgment.
    // Presence gates eligibility to publish/email once that pipeline exists.
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
    // Auto-generated takes (atomized from an approved essay by the
    // content-repurposing skill) carry these. Hand-authored takes may omit them.
    //   source     — parent essay slug; couples the take to its issue and is how
    //                schedule-takes.mjs finds which takes to stamp when that essay
    //                goes live. Also the provenance link.
    //   offsetDays — schedule = the parent essay's real pubDate + N days. Like
    //                LinkedIn posts, a take stores an OFFSET, never a date, so a
    //                reordered/delayed issue carries its takes with it. Resolved to
    //                a real pubDate only at publish (the take starts draft:true with
    //                a placeholder pubDate; schedule-takes stamps it and flips draft).
    //   idea       — the canonical, framing-independent claim. The dedup fingerprint:
    //                the repurposing skill never generates a take whose idea repeats
    //                one already in the corpus, so /takes never shows near-duplicates.
    source: z.string().optional(),
    offsetDays: z.number().int().optional(),
    idea: z.string().optional(),
  }),
});

// "Building": Nick's build-in-public log and engineering blog. Started as the
// migrated back catalogue (home-lab Kubernetes, 2018 dev tutorials) from the old
// Vercel site, and grows as he ships new things. Kept in its own collection so it
// never mixes into the AI essays or the newsletter feed, but stays visible as proof
// he actually builds. Rendered at the ORIGINAL /posts/<slug> URLs (the file id
// includes the date prefix) so old links and SEO keep working.
const building = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/building' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    hero: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { essays, takes, building };
