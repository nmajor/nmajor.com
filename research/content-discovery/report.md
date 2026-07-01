# Content discovery pipeline — research report

> Synthesis of six raw research dumps in `raw/` (social/forum APIs, neural-search APIs,
> buy-vs-build products, curator workflows, DIY architectures, seed sources). Verified
> June 2026. This is the working report; raw files hold the full detail and citations.
> Re-readable against `raw/`, regenerable any time.

## The question we set out to answer

Is there an API or product that is already good at finding deep-cut, non-obvious,
early-signal applied-AI stories from places like Twitter, Reddit, and elsewhere, so a
founder can review a list, read a few sources, and then brain-dump a take?

Short answer: **one API gets unusually close to "already good at this," but no single
product does the whole job.** The closest single primitive is **Exa's `/findSimilar`**:
give it a URL of a great story or a source you trust, and it returns semantically
similar pages from its own neural index, not keyword matches. That is exactly the
"find me more deep cuts like this" move. Everything else is either a raw source (HN,
Bluesky, Reddit, X) or a layer we assemble around it.

## What we learned, in one pass

**The whole professional field runs the same shape.** Across every well-documented
curator (TLDR, AINews/Smol AI, Last Week in AI, Import AI, The Rundown, Stratechery,
Pragmatic Engineer), the pattern is identical:

1. A **wide, tiered collection layer** pulls from many sources.
2. **AI summarizes, classifies, dedupes, and ranks — it never makes the final pick.**
3. **A human selects** from a ranked queue.
4. **Deep cuts come from being where practitioners talk** (niche subreddits, practitioner
   Discords, a curated X list, arXiv, GitHub), not from a cleverer algorithm.
5. Noise is controlled structurally: hard caps, anti-repetition, an explicit anti-hype
   rubric (Last Week in AI literally bans "revolutionizes/groundbreaking" in its prompt).

This maps almost perfectly onto our existing model: the pipeline surfaces candidates,
the founder picks and brings the take (the `content-builder` brain dump). We are not
trying to automate judgment. We are trying to put the right 15 things in front of a
human who will recognize the one worth writing.

**Buy vs build: build, leaning on bought inputs.** No off-the-shelf product finds
non-obvious stories for you. Social-listening tools (Brand24, Brandwatch, Meltwater)
are keyword-mention engines and enterprise-priced. Reader tools (Feedly, Readwise)
ingest and dedupe but rank only against topics you already named, so they surface the
obvious. The real leverage is in API-first neural search plus an LLM scoring step we
own. The scoring-for-novelty step is the part nobody sells.

## The sources that matter, ranked by signal-per-dollar

| Source | Cost | Why it matters for us | Deep-cut value |
|---|---|---|---|
| **Hacker News** (Algolia + Firebase) | Free | Full-text + date + points search, no auth, no real limits. Ask/Show HN = operators describing real problems unprompted | High, build first |
| **Bluesky** (AT Protocol) | Free | The AI-researcher diaspora that left X. Full-text `searchPosts` + a filterable firehose (Jetstream) | High, build second |
| **Exa** (`/search` + `/findSimilar`) | Free tier, then ~$7/1k | The semantic backbone. "Find more like this seed" is the deep-cut engine. Category + date + domain filters | The differentiator |
| **arXiv + HF Daily Papers** | Free | Applied frontier in cs.SE / cs.HC / cs.IR / cs.MA; HF Papers = what the field reads today | High for primary signal |
| **GitHub** (Search API) | Free | Star velocity on agent/RAG/MCP repos = early tooling signal (no official Trending API; synthesize via Search) | Medium-high |
| **Reddit** (free API / PRAW) | Free | Live monitoring of a niche-subreddit watchlist (r/LocalLLaMA, r/AI_Agents, r/Rag, r/LLMDevs, r/mlops) | Medium-high |
| **twitterapi.io** (3rd-party X) | ~$0.15/1k tweets | X still has the most AI conversation volume; 30x cheaper than official; full-archive + websocket | High, the one real spend |
| **Lobsters / Lemmy** | Free | Small, high signal-to-noise; `/t/ai.json` and a federated keyword search | Supplementary |
| GDELT, NewsAPI.ai | Free / $90/mo | News-cycle event detection + clustering, if we want the mainstream layer too | Optional |

**Avoid:** official X API for broad scanning (pay-per-read gets expensive fast; filtered
stream is now Enterprise-only); LinkedIn (no legitimate discovery API, actively
litigated — manual only); Discord for *discovery* (no cross-server search; monitoring of
consented servers only); enterprise social-listening suites (wrong primitive, wrong
price). Stale defaults to skip: Papers with Code (dead), public arxiv-sanity (gone),
AutoGen (maintenance), Nitter (dormant), r/AIAgents without the underscore (dead alias).

## How the discovery engine should work (reference architecture)

The DIY research and the curator research converge on the same funnel. It is also a
clean fit for our Cloudflare + Astro stack.

1. **Ingest** (Workers Cron, tiered cadence → Cloudflare Queues → D1). Adapter per
   source: HN, Bluesky, arXiv, GitHub, Reddit, twitterapi.io, OPML-seeded RSS with
   conditional GET. Free structured sources cost $0; only X costs money.
2. **Dedupe + cluster.** Canonical URL → SimHash (Hamming ≤3) + fuzzy title match →
   embedding cosine ≥0.9. Online nearest-centroid clustering groups "one story, many
   sources"; cluster size becomes a signal.
3. **Score.** A cheap cascade to control cost: embedding gate against a multi-centroid
   "interest profile" of our beat → Claude Haiku first pass → Claude Sonnet judge for
   survivors, scoring relevance, novelty, and depth as structured JSON. The rubric is
   prompt-cached (the biggest cost lever). The Exa `/findSimilar` seed-expansion runs
   here too, fanning out from sources we already trust.
4. **Rank for deep cuts, not popularity.** Reciprocal Rank Fusion across signals, then
   a novelty score that *penalizes* already-viral items:
   `deepcut = novelty + 1/(1+sources) + velocity − popularity`. MMR + per-source caps +
   a little random exploration keep it out of a filter bubble.
5. **Present + learn.** An internal `/review` dashboard (behind Cloudflare Access) shows
   a ranked list: title, a neutral one-line "why it matters" (no opinion — the founder
   brings that), the score breakdown, novelty/velocity badges, source links, and
   Accept / Reject / Skip. Decisions feed a nightly Rocchio update of the interest
   profile, so it gets better at our taste over time. The accepted item flows straight
   into a `content-builder` brain dump.

Build order is incremental and each stage is useful alone: ingestion + D1 (a raw
chronological list) → dedupe/cluster → embedding gate → LLM judge → ranking →
feedback loop last.

## Cost

A lean build runs about **$5/mo (Cloudflare paid plan) + $50–$100/mo** of API spend at
modest volume, almost all of it Exa overage and a little twitterapi.io. Everything else
(HN, Bluesky, arXiv, GitHub, Reddit free tier, GDELT) is free. Managed extras (Exa
Websets/Monitors $49/mo, NewsAPI.ai $90/mo) are optional and can wait.

## Recommendation

Build our own discovery pipeline, Cloudflare-native, with this source set: **HN +
Bluesky + arXiv/HF + GitHub + Reddit free tier for free, twitterapi.io for paid X, and
Exa as the semantic "find similar" backbone.** Start with a thin slice (a few free
sources → dedupe → an Exa seed-expansion → a simple ranked `/review` list) and add
sources and the learning loop once the founder is reviewing real lists.

Open decisions for the founder before building: (1) how much to spend per month;
(2) whether v1 is a true ingestion pipeline or starts as a scheduled Exa/HN sweep;
(3) where the review list lives (internal dashboard vs a generated digest).
The good reference implementations to mirror: `exa-labs/websets-news-monitor`,
`AutoLLM/ArxivDigest` (clean LLM relevance scoring), `finaldie/auto-news` (adapter
pattern). Full detail and citations in `raw/`.
