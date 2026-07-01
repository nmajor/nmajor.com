# Building an automated content-discovery agent: architecture and techniques

> Raw subagent research dump. Saved verbatim per the raw-first research pattern. Cited to primary/vendor sources, current to 2025-2026. Stack assumed: Cloudflare Workers + Astro, Node/TS, calling Claude.

## Ingestion sources

| Source | Endpoint | Auth | Rate limit | Price | Push/Poll |
|---|---|---|---|---|---|
| arXiv Query API (Atom) | export.arxiv.org/api/query | None | 3s delay; 2,000/req, 30,000 total via paging | Free | Poll |
| arXiv OAI-PMH | oaipmh.arxiv.org/oai | None | from/until datestamps | Free | Poll |
| Semantic Scholar | api.semanticscholar.org/graph/v1/ (/paper/search, /paper/search/bulk, /paper/batch) | Optional key | No key: 5,000/5min shared across ALL anon. Key: 1 req/s search, 10 req/s else | Free | Poll |
| GitHub REST Search | GET /search/repositories | Optional (token rec.) | Auth 30/min; anon 10/min | Free | Poll |
| GitHub GraphQL | POST /graphql | Required | 5,000 pts/hr | Free | Poll |
| Algolia HN Search | hn.algolia.com/api/v1/search, /search_by_date | None | No key | Free | Poll |
| HN Firebase | hacker-news.firebaseio.com/v0/ | None | "No rate limit"; /updates.json = cheapest delta | Free | Poll |
| Product Hunt v2 | api.producthunt.com/v2/api/graphql | OAuth2 | 6,250 complexity pts/15min | Free | Poll |
| Papers with Code | (defunct, redirects to HF) | n/a | n/a | n/a — sunset Jul 24 2025; use HF Papers | Poll |
| Exa | api.exa.ai/search | API key | per-plan | $7/1k std; 1,000 free/mo | Poll |
| Tavily | api.tavily.com/search | API key | per-plan | 1,000 free/mo; $30/$100 paid | Poll |

Quirks. arXiv: new metadata nightly ~10:30pm ET Sun-Thu; use OAI v2. Semantic Scholar: no-key pool throttles under global load; /paper/search/bulk is the discovery workhorse. GitHub Trending has NO official API — synthesize via Search q=created:>DATE stars:>N sort:stars. Papers with Code is dead. HN: Algolia for querying, Firebase /updates.json for real-time deltas.

RSS/Atom at scale. Seed from OPML bundles (awesome-AI-feeds, awesome_ML_AI_RSS_feed, awesome-tech-rss). Parse with rss-parser (Node). Conditional GET (store ETag/Last-Modified, resend as If-None-Match/If-Modified-Since; 304 = no body) is the key efficiency win polling thousands of feeds. WebSub/Superfeedr for push, but most corporate eng blogs advertise no hub — run hybrid.

Scheduling. Cloudflare Workers Cron Triggers map cron to scheduled(). Limits: 5 crons free / 250 paid; CPU 10ms free (unusable) / 30s paid. Paid plan ($5/mo) effectively required. Fan out polling onto Cloudflare Queues, persist per-feed ETag in KV/D1, tier feeds by cadence.

Takeaway: the free structured tier (arXiv, Semantic Scholar bulk, both HN APIs, GitHub Search/GraphQL, Product Hunt) is strong and pollable for $0. Gaps: no GitHub Trending API; Papers with Code dead.

## Scoring and ranking

1. Relevance via embeddings. Represent the beat as multiple cluster centroids (k-means over hand-picked exemplar embeddings); score a candidate as the MAX cosine over centroids (single centroid blurs a multi-modal interest).

Embedding models callable from a Worker (price /1M input tokens): OpenAI text-embedding-3-small 1536d $0.02 (Matryoshka: dimensions param to truncate); text-embedding-3-large 3072d $0.13; Cohere embed-english-v3.0 1024d $0.10; Voyage voyage-3 1024d $0.06; CF @cf/baai/bge-large-en-v1.5 1024d $0.20 (512-token cap, edge, pairs with Vectorize). Default: text-embedding-3-small. L2-normalize at write time. Storage: Cloudflare Vectorize (~$0.31/mo for 10k×768; MAX 1536 dims, so 3-large must be truncated) or D1 brute-force for small N. Calibrate thresholds on a labeled set, don't hardcode.

2. LLM-as-judge. Pointwise rubric scoring with structured JSON ({relevance, novelty, depth, rationale} 1-5), anchored examples, chain-of-thought before the score, validated against a golden set (75-90% human agreement). Cost control = two-stage cascade: embedding gate → cheap Haiku first pass → strong Sonnet/Opus on survivors, with the rubric/profile prompt-cached (~90% cheaper cached input) — the single biggest cost lever.

3. Combining signals. Reciprocal Rank Fusion over per-signal ranked lists: RRF(d) = Σ 1/(k + rank), k=60. Recency via HN gravity (p-1)/(t+2)^1.8 or Reddit hot. Velocity via z-score vs a rolling baseline (z>2-3 = rising). Anti-filter-bubble: MMR argmax[λ·rel − (1−λ)·max_sim_to_selected], λ≈0.7; per-source caps; ε-greedy exploration.

Pipeline order: embedding gate → cheap LLM → strong judge → RRF → MMR + diversity cap + exploration.

## Deduplication, clustering, novelty

Near-dup (layered): canonicalize URL (normalize-url, strip utm/resolve redirects) → SimHash 64-bit, Hamming ≤3 (Google's operating point; simhash-js) + fuzzball token_set_ratio≥90 title backstop → embedding cosine ≥0.9 for paraphrases. MinHash+LSH (datasketch) when you need a growing retrievable index.

Clustering "one story, many sources": online nearest-centroid clustering — assign to nearest cluster if similarity ≥ threshold, else open a singleton. Entity-aware similarity cuts false merges. Cluster size = distinct sources.

Novelty / deep-cut — two axes. Internal: First Story Detection = 1 − max cosine to our embedding history (Vectorize index). External maturity: combine inverse source count, velocity z-score, and PENALIZE absolute HN/Reddit popularity:
deepcut = w1·internal_novelty + w2·1/(1+distinct_sources) + w3·velocity_z − w4·popularity_norm
Plus TF-IDF/Kleinberg burst surprise for new vocabulary.

## Real example projects (URLs verified live)

- finaldie/auto-news (~890★) — most complete: adapter-per-source ingestion (RSS, HN, Reddit, YouTube w/ auto-transcribe), LLM filtering as core value ("remove 80%+ noise"), Airflow, Notion reader.
- AutoLLM/ArxivDigest (~430★) — numeric LLM relevance scoring (1-10) against a free-text interest profile. Cleanest copyable ranking primitive. GitHub Actions + SendGrid = zero-server.
- yinan-c/RSS-GPT (~355★) — summary-as-feed-enrichment, re-emits enriched RSS.
- yinan-c/RSSbrew (~290★) — two-stage filter-then-summarize: cheap deterministic rules before spending tokens.
- polyrabbit/hacker-news-digest (~750★) — content-extraction scoring, hosted→local-T5 fallback.
- giftedunicorn/ai-news-bot — 5-provider LLM abstraction + markdown→clean-HTML email.
- belitheops/ai-newsletter-generator — concrete TF-IDF + cosine dedup (~70% threshold, merge-and-cite).
- samestrin/llm-newsletter-generator — fully local/open-weight fallback path.
- exa-labs/websets-news-monitor — best engineering reference: pgvector similarity over 7 days + LLM verification for dedup/clustering, daily webhook digests. Implements the exact discover→cluster→dedup→digest loop.

Convergent architecture: broad ingestion → cheap deterministic narrowing → LLM scoring → LLM summarization → digest → delivery, on a cron. AINews (~150k+ subs) proves the funnel scales.

## Presenting the output

References converge on cluster → LLM-summarize → rank → link out. A review entry shows: title, one-line NEUTRAL why-it-matters blurb, visible score breakdown (opaque numbers erode trust), novelty/velocity badges, cluster sources, link out, Accept/Reject/Skip buttons.

Neutral one-liner prompt = closed-book (only provided source text), explicit NOT_ENOUGH_SOURCE_TEXT abstain token, no-opinion constraint (the founder writes the take), low temperature, store source text for audit.

Feedback loop = Rocchio: q_new = α·q_orig + (β/|Dr|)·Σ accepted − (γ/|Dnr|)·Σ rejected, with γ small (negatives over-correct), profile as an embedding vector recomputed nightly. Persist every decision so the profile rebuilds from history.

Delivery: an Astro internal /review dashboard behind Cloudflare Access is the primary surface (cleanly writes feedback to D1, shows full breakdowns), plus an optional daily email nudge. D1 schema: separate items/clusters tables (one story, many sources), a decision field, an append-only feedback log, versioned profile_versions.

## Recommended reference architecture for a small team

Cloudflare-native, ~$5/mo + modest API spend.
1. Ingest — Cron Triggers (tiered cadence) fan out adapter-per-source fetches (arXiv, Semantic Scholar bulk, HN Algolia + /updates.json, GitHub Search to synthesize Trending, Product Hunt, OPML-seeded RSS with conditional GET) → push onto Cloudflare Queues → consumer Worker extracts bodies, writes to D1.
2. Dedup + cluster — canonical URL → SimHash ≤3 + fuzzball → embed → cosine ≥0.9 near-dup → online nearest-centroid single-link clustering.
3. Score — multi-centroid embedding gate → Haiku first pass (prompt-cached rubric) → Sonnet judge (relevance/novelty/depth JSON) → novelty = FSD + velocity z + inverse source count.
4. Rank — per-signal lists → RRF (k=60) → MMR (λ≈0.7) + per-source cap + ε-exploration.
5. Present + feedback — Astro /review dashboard (Cloudflare Access) with neutral blurbs, score breakdowns, badges; Accept/Reject/Skip POST to D1; nightly Worker runs Rocchio to update the profile vector.

Build order: ingestion + D1 first (gives a raw chronological list), then dedup/cluster, embedding gate, LLM judge, RRF/MMR ranking, feedback loop last. Each stage independently useful, degrades gracefully.
