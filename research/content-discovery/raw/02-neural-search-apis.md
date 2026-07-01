# Neural / semantic search and research APIs for content discovery

> Raw subagent research dump. Saved verbatim per the raw-first research pattern. Research date 2026-06-17.

Goal: an automated pipeline that surfaces non-obvious, deep-cut applied-AI story candidates from a topic or seed example, ranks them, presents to a founder. Core need is semantic/neural discovery ("find things like this"), not keyword matching. Pricing verified against official docs/pricing pages; third-party figures flagged.

## TL;DR bottom line

- Semantic backbone = Exa. The only provider built on a proprietary neural/embeddings index with a true "find similar to this URL" capability, plus category verticals (research paper, company, news, github, tweet) and date/domain filters. Use /search (type auto/fast) for topic discovery and /findSimilar against seed URLs/accounts for lateral deep-cut discovery.
- Second engine = a free signal layer + one cheap fetch/verify tool. GDELT (free, 15-min global news/event/tone) + Hacker News (free) for raw signal; Tavily or Exa Contents for cheap bulk extract/verify. Optionally NewsAPI.ai ($90/mo) for semantic news clustering / event detection.
- Realistic monthly cost at modest volume: ~$50-$150/mo.
- Do NOT build on: Bing/Azure Search API (retired Aug 11, 2025; replacement returns no raw, storable results). Keyword-only feeds (NewsAPI.org, Mediastack, Serper, SerpApi) are for grounding/verifying a known lead, not originating non-obvious ones. Official Google Trends API is alpha-gated.
- Vendor-stability flag: Tavily acquired by Nebius (NASDAQ: NBIS) 2026-02-10. API unchanged short-term, factor 12-24mo roadmap uncertainty.

## 1. Exa (formerly Metaphor) — THE PRIME CANDIDATE

Discovery / deep-cut verdict: Best in class, the natural semantic backbone. Exa runs its own neural/embeddings index (30B+ pages claimed), not a Google/Bing relay. Retrieves by meaning. Has a dedicated find-similar-to-a-URL endpoint plus category verticals and date filters — precisely how you surface deep cuts: feed it a great seed article or source account and ask for more like it. On a 500-query Thinking Machines eval Exa scored 64.8% vs Perplexity 60.1%, gap widening on semantic queries.

Key endpoints / features:
- POST /search — embeddings-based. type: auto (default), fast/instant, deep-lite, deep, deep-reasoning. category verticals: company, research paper, news, personal site, financial report, people (plus github/tweet/pdf/linkedin historically). Date filters: startPublishedDate/endPublishedDate AND startCrawlDate/endCrawlDate. Domain filters: includeDomains (~1,200) / excludeDomains, includeText/excludeText. numResults 1-100.
- POST /findSimilar — "Find similar links to the link provided." Takes a url, returns semantically similar pages; excludeSourceDomain, numResults, include/exclude domains, inline contents. THE deep-cut engine. SDK marks findSimilar deprecated but endpoint remains fully functional; Exa steers new integrations to /search, yet URL-similarity is the only true "more like this seed" call.
- POST /contents — clean parsed text/HTML/highlights/summaries; contents for first 10 results of a search bundled free since March 2026.
- POST /answer — cited answers (RAG over index).
- Research API — automated multi-step research returning structured JSON with citations, per-field grounding/confidence (outputSchema).
- Websets + Monitors — async discovery of verified entities from a NL query (Search → per-result Criteria verification, max 5 → Enrichment columns). Monitors re-run a Webset on cron (5-field cron + IANA tz), at most once per day, auto-deduplicated, webhooks (webset.item.created/.enriched/.idle). Good for daily/weekly sweeps, not real-time.

Pricing (March 3, 2026 simplification):
- Search with contents: $7 / 1,000 requests (10 results, text + highlights free); +$1/1k additional results.
- Exa Deep: $12/1k; Deep (Reasoning): $15/1k.
- Contents endpoint: $1/1k pages per content type. Summaries $1/1k.
- Answer API: $5/1k. Monitors: $15/1k. Research runs: ~$0.012-$2.00/run.
- Websets plans: Free (1,000 credits, 25-result cap), Core $49/mo (8,000 credits), Pro $449/mo (100,000), Enterprise custom. Credits ~10/verified result.
- Free tier: pricing page states up to 20,000 requests/month free for web search + text extraction. (Websets FAQ cites 1,000 credits/month — that's the Websets allowance, not core search. Verify in dashboard.) Startup/edu grants ~$1,000 credits. Rate limit ~5-10 req/sec.

Citations: exa.ai/docs/reference, exa.ai/docs/changelog/pricing-update, exa.ai/pricing, github.com/exa-labs/openapi-spec, exa.ai/docs/websets/api/monitors/create-a-monitor, exa.ai/versus/perplexity.

## 2. Tavily — retrieval/extract/verify layer (not a discovery engine)

Verdict: Medium-low for originating deep cuts; excellent and cheap for fetch/extract/crawl/verify. Query-text driven, RAG-optimized. No "find similar to URL" capability. search_depth: basic (1 credit), advanced (2), fast (1), ultra-fast (1); topic general/news/finance, date range, max_results ≤20, include/exclude domains. Extract, Map, Crawl. Research API: mini 4-110 cr, pro 15-250 cr. Pricing: Free 1,000 credits/mo. PAYGO $0.008/credit. ~$30/mo (4,000) to ~$500/mo (100,000). Acquisition: Nebius/NBIS 2026-02-10.

## 3. Perplexity API (Sonar) — synthesized discovery, mine the citations

Verdict: Medium-high for synthesized discovery via Deep Research; low as a raw candidate-list generator. Returns prose + citation list, not a ranked candidate set — mine the citations. Not a "find similar to seed" engine. Tiers: Sonar, Sonar Pro, Sonar Reasoning (Pro), Sonar Deep Research, raw POST /search ($5/1k). Pricing per 1M tokens + per-1k-request fees. Typical Sonar query ~$0.006-$0.013; Deep Research variable — budget per run.

## 4. Other search / content APIs

- Brave Search API — independent 30B+ index, keyword retrieval not neural. Goggles = custom discard/re-rank rules (strong lever vs SEO slop). As of Feb 12 2026 retired named tiers, flat metering (no standing free tier). $5/1k search, $5/mo free credit (~1k q), 50 QPS. brave.com/search/api
- Bing / Azure — STATUS CHANGE, do not build on. Bing Search APIs retired Aug 11 2025. Replacement = Grounding with Bing Search in Azure AI Agents — LLM answer with citations, no raw/storable results. $14/1,000.
- You.com API — Research API genuinely agentic. $100 free credits, no card. Search ≤100 results, Contents, Research, Live News, Finance, Deep Search, MCP. Search $5/1k (+$1/1k livecrawl). Research per 1,000: Lite $12 / Standard $50 / Deep $100 / Exhaustive $450 (figures inconsistent across their pages — verify).
- Linkup (linkup.so) — agentic search, legal premium-content + customizable index reaches gated sources. fast/standard $0.005/call, deep $0.05/call; async Research $0.25-$2.50/req; free 4,000 queries.
- Diffbot — Knowledge Graph (10B+ entities), DQL relationship traversal, NL API, Extract/Crawl, scheduled-DQL monitoring (emails when new articles surface for tracked entities). Free $0 (10k credits/mo), Startup $299/mo (250k), Plus $899/mo (1M).
- Serper & SerpApi — keyword, grounding only. Serper $1.00/1k (2,500 free). SerpApi $15/1k → ~$9/1k, 80+ engines.

## 5. Trend / signal / novelty detection with an API

- GDELT Project — FREE, top free pick. 15-min global news/event/tone. Event DB (250M+), GKG 2.0 (people/orgs/locations/themes/tone, 65 languages), DOC 2.0 API (full-text search, timeline/tone modes, JSON/CSV/RSS), GEO API, BigQuery. Best free way to detect where enterprise-AI activity spikes. gdeltproject.org/data.html
- NewsAPI.ai (Event Registry) — best self-serve semantic news. Wikipedia-grounded concept/semantic search, event detection + article clustering (dedup), entity tagging, sentiment; 150k+ outlets. Free 2,000 tokens/mo; $90/mo (5,000 tokens); overage $0.015/token. newsapi.ai/plans
- Exa Monitors — daily-cadence scheduled Webset re-runs with webhook delivery; $15/1k.
- Newscatcher — semantic + clustering + monitoring (to 6h); Web Search Starter $50/mo. Quantexa News API (ex-Aylien) — richest NLP, enterprise-gated.
- Google Trends API — official, launched 2025-07-24, alpha-gated, not GA — don't build on it. Glimpse ($99/mo+) adds absolute volume + forecast. DataForSEO Trends sub-cent/task.
- Exploding Topics / Treendly — curated trend signal; thin APIs (Exploding Topics API = $249/mo Business add-on; Treendly Pro $99/yr). Supplementary.
- Social signal mining: HN Algolia + Firebase free/ungated (best free practitioner-discourse source). Reddit Data API pre-approval needed. X pay-per-usage (~$0.005/read) — broad scanning expensive.

## Bottom line — recommended pipeline and cost

Semantic backbone: Exa — only true neural discovery engine with "find similar to URL," category verticals, date/domain filters.
1. Seed-based deep-cut discovery (core move): curated seed URLs (standout articles, practitioner blogs, source "accounts"). Call /findSimilar with excludeSourceDomain: true, numResults: 25. Re-run on schedule (Monitors/Websets daily, or own cron); diff vs seen.
2. Topic discovery: /search with type auto, category set, startCrawlDate, excludeDomains to suppress SEO slop.
3. Rank + present: Exa relevance scores + our own scoring (novelty/unseen, source quality, enterprise-AI fit).

Second engine: free signal layer (GDELT + HN) + cheap fetch (Exa Contents free for first 10, or Tavily $0.008/search). Add NewsAPI.ai ($90/mo) if news-cycle event-clustering matters. Use Perplexity Deep Research or You.com Research occasionally for a promising thread.

Realistic monthly cost: Lean build ~$50-$100/mo (Exa overage + a little Tavily). With managed monitoring + semantic news ~$140-$190/mo. Start with Exa free tier + GDELT/HN free signal; add Websets/Monitors and NewsAPI.ai only if wanted. Single most important capability — semantic "find deep cuts like this seed" — is Exa /findSimilar, no real equivalent.

Verification caveats: (1) Exa exact free-tier ceiling (20,000 req/mo vs Websets 1,000 credits) — confirm in dashboard. (2) You.com Research tier prices and Linkup free-credit figure inconsistent across vendor pages. (3) Tavily/Nebius and Brave Feb-2026 metering change recent — re-verify near build.
