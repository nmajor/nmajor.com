# Buy vs build: off-the-shelf content discovery products (2025-2026)

> Raw subagent research dump. Saved verbatim per the raw-first research pattern. Verified June 2026.

Question: for an automated content discovery pipeline that surfaces non-obvious, deep-cut applied-AI story candidates and ranks them for founder review, can we just buy a product instead of building?

## Bottom line first

No single product does the whole job. The category splits into three groups; only one is where the work should go:
1. Reader/curation tools (Feedly, Readwise Reader, Glasp, Memex, Refind) — good at ingest + dedupe + first-pass relevance, but rank against topics you already named. They surface the obvious, not the deep cut. Useful as an ingestion stage, not the discovery brain.
2. Social listening platforms (Brand24, Brandwatch, Meltwater, Sprout, Mention, Talkwalker) — every one is a keyword/Boolean mention engine. None autonomously finds non-obvious stories. Mostly enterprise-priced, poor fit.
3. API-first neural search / research agents (Exa, Tavily, Perplexity Sonar; trend products Exploding Topics/Treendly) — the real programmatic inputs. Cheap, proper APIs, and one (Exa) has the exact primitive deep-cut discovery needs: "find pages semantically similar to this exemplar."

Verdict: build, leaning on bought INPUTS. A small custom pipeline whose discovery layer is Exa (neural search + findSimilar) and Tavily (cheap retrieval/extract), with Perplexity Sonar for enrichment, and an LLM novelty-ranking step you own. The two to look at closely first: Exa.ai and Feedly + Leo AI.

## 1. Feedly + Leo AI — strongest off-the-shelf curation candidate

Tiers: Free, Pro, Pro+, Enterprise. Pro+ unlocks Feedly AI Feeds + RSS Builder + AI summaries. Consumer prices UNVERIFIED (sources disagree: Pro ~$6.99/mo, Pro+ ~$12.99/mo annual; another cluster Pro ~$8.25/mo, Pro+ ~$18/mo). Enterprise Market Intelligence (published): Standard $1,600/mo annual (100 AI Feeds, ≤10 seats); Advanced $2,400/mo annual (200 AI Feeds, Ask AI, Emerging Trends Dashboards, Startup Innovation Radar, ≤25 seats, API Access, SSO).

Leo AI: prioritize topics/keywords, dedupe, mute, dislike-to-train, AI summaries, AI Feeds that score relevance for a topic, RSS Builder for sites lacking RSS.

The API: official supported API is Enterprise-gated ("Self service API tokens are only available to Enterprise clients," up to 100,000 req/month). API Access is on Market Intelligence Advanced (not Standard). A legacy Feedly Cloud v3 dev-token route still appears to work for personal use with low daily caps (~250 req/day) but is not advertised.

Fit: Excellent at ingest + dedupe + first-pass relevance. AI Feeds get closest to deep-cut discovery (semantic relevance scoring on a narrow topic), BUT Leo optimizes for topics you defined and collapses heavily-covered clusters — elevates the obvious on-topic story, doesn't hunt for surprising signals. Programmatic access needs Enterprise. Use as ingestion+dedupe+AI-Feeds layer with your own scoring on top.

## 2. Social listening platforms — wrong primitive

Every one is a keyword/Boolean monitoring engine returning mentions matching pre-defined terms. None has "find stories I didn't ask about." All fits: poor.

| Platform | Price | API | Discovery fit |
|---|---|---|---|
| Brand24 | $199–$1,499+/mo | Yes (paid add-on) | Poor |
| Brandwatch | Hidden (~$50K/yr est) | Yes (30 calls/10min) | Poor |
| Meltwater | Hidden (~$70K/yr est) | Yes (best portal) | Poor–mediocre (corpus is the only asset) |
| Sprout Social | $79–$399/seat; listening add-on hidden | Advanced tier only | Poor |
| Mention | $599/mo (only 5 alerts) | Yes | Poor |
| Talkwalker | Hidden (GBP 9K–125K/yr) | 500 results/call, 30-day window | Poor |

Group verdict: skip for discovery. Only Meltwater's news corpus is interesting, and only as paid plumbing under a discovery layer you build, at enterprise cost.

## 3. Curation / read-later / research tools — feeders, not engines

- Readwise + Reader — ALIVE — strongest pipeline backbone. Full $9.99/mo annual (~$120/yr) includes Reader. Two public APIs (token auth): Highlights API and Reader API (CREATE save URL + scrape HTML, LIST filter by location/category/tags/update-date cursor pagination, UPDATE/BULK/DELETE, TAGS). Categories include rss; locations include feed. Rate limits 50/min write, 20/min list. No built-in ranking — you supply it. Best programmatic ingest-and-store layer here.
- Memex (memex.garden) — ALIVE — credit-based. Free; Base $6/mo; Reader $12/mo; Analyst $40/mo (~12,500 feed updates). API + MCP plus RSS/YouTube/subreddit/X import with auto-tagging. Formal API endpoint docs not retrievable — depth unverified.
- Glasp — ALIVE. Free; Pro $12.50/mo; Unlimited $30/mo. Full public REST API (Bearer). Strong human-capture layer; doesn't ingest feeds or rank.
- Refind — ALIVE. Freemium (~$8–10/mo unverified). No public REST API — topic-based RSS/JSON feeds (~3 links/topic/24h) + Readwise integration. One curated pre-ranked input stream.
- Matter — ALIVE. Free + Premium $8/mo. Public API (save URL, list/filter/sync, tags). No discovery/ranking endpoint — a personal library you POST into.
- Mailbrew — ALIVE (relaunched by Evernomic Nov 2025). Right concept (auto-ranked digests from RSS/HN/Reddit/YT/PH/X) but no public API.
- Pocket — DEAD (Mozilla shut July 8 2025; API disabled).
- Heyday — DEAD (acquired by BetterUp Sept 2024).

Group verdict: ingestion/storage layers and human-curation aids. Readwise Reader is the one with a real read/write + RSS-ingest API worth using as store-and-pipe backbone. None does discovery or ranking itself.

## 4. Newsletter-builder tools with discovery features — destinations, not inputs

None is a viable programmatic discovery INPUT. beehiiv (no real discovery, own-publication API only), Ghost (best publishing destination; read-only Content API), Substack (Notes/Recommendations UI-only, no API), Particle.news (conceptually closest — clusters/summarizes/coverage-leaning, but no public API, closed consumer app), Bulletin (defunct). Ghost (self-hosted) is the natural place to push finished posts.

## 5. AI trend-radar / research-agent / neural-search — where to build

| Product | API-first | Discovery price | Role |
|---|---|---|---|
| Exa.ai | Yes — top pick | Search $7/1k, Contents $1/1k, Answer $5/1k | Primary neural discovery + find-similar |
| Tavily | Yes | basic 1 credit (~$0.0075), advanced 2 | Cheap controllable retrieval + extract |
| Perplexity Sonar | Yes | sonar $1/$1 per 1M tok + per-req fees | Grounded synthesis + deep-research escalation |
| Exploding Topics | Partial (Business add-on) | Business $249/mo | Early-topic detection + 12-mo forecast |
| Treendly | Yes | Pro $99/yr | Cheapest trend-data API w/ growth scoring |
| Glimpse | API, sales-gated | from $99/mo | Quantitative ranking signal |

Exa.ai (strongest single input): /search, /contents, /findSimilar (URL → semantically similar — the key deep-cut primitive), /answer, /research, Websets. Purpose-built to surface non-obvious results cheaply: feed it an exemplar, pull adjacent deep cuts. Caveats: venture-stage, public-web only.

Enterprise/wrong-corpus: Glean (internal knowledge graph), Hebbia (your doc set), AlphaSense (finance). Not suited: ContentStudio, TrendHunter, NetBase Quid.

## Recommended path

1. Discovery: Exa /search + /findSimilar (seed with exemplar deep-cut stories); Tavily for cheap targeted crawl/extract of niche sources.
2. Optional complementary input: Feedly Pro+ AI Feeds + RSS Builder for ingestion + dedupe (manual feeder unless Enterprise API). Readwise Reader as programmatic store-and-pipe backbone.
3. Ranking: your own LLM scoring for novelty/non-obviousness — the part no product does for you.
4. Enrichment: Perplexity sonar-deep-research on promoted candidates.
5. Publish: Ghost (self-hosted) as destination. [Note for us: we publish via our own Astro repo, not Ghost.]

Two to look at first: Exa.ai (discovery engine) and Feedly + Leo AI (best off-the-shelf ingestion/curation input).
