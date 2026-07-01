# Social and forum APIs for applied-AI content discovery (2025-2026)

> Raw subagent research dump. Saved verbatim per the raw-first research pattern. Verified June 2026.

State as of June 2026. Built for an automated pipeline that surfaces deep-cut, early-signal, non-obvious applied-AI stories from social platforms and forums, ranks them, and presents a founder-reviewable list with source links. Every price, limit, and access path below was verified against current sources during this research; citation URLs are inline.

## 1. X / Twitter

### Official X API v2 (2026)

The old four-tier ladder (Free / Basic / Pro / Enterprise) is effectively dead for new signups. New developers now get pay-per-use credits; Basic and Pro survive only as legacy subscriptions for accounts that held them before the cutover. The model changed twice this year: pay-per-use launched 6 Feb 2026, and prices/access shifted again 20 Apr 2026.

| Tier | Monthly cost | New signups? | Post reads | Search | Filtered stream |
|---|---|---|---|---|---|
| Pay-per-use (default) | $0 base + per-call | Yes | $0.005/read, ~2M/mo soft cap | Recent (7-day) and full-archive | No |
| Basic (legacy) | ~$200/mo | No | ~10,000-15,000/mo | 7-day only | No |
| Pro (legacy) | ~$5,000/mo | No | 1,000,000/mo | Full archive | Yes |
| Enterprise | ~$42,000+/mo | Yes (sales) | 50,000,000+/mo | Full archive | Yes |

Pay-per-use exact rates: post read $0.005, profile read $0.010, post creation $0.015, URL-containing post $0.200 (link surcharge added April 2026). Resources are deduplicated within a 24-hour UTC window.

Full-archive search (`/2/tweets/search/all`, back to 2006) is now available on pay-per-use — no $5K Pro gate, you just pay $0.005/read. Recent search (`/search/recent`, 7 days) is open to all. Full-archive rate limits: 300 req/15 min plus a hard 1 req/sec, 500 results/request. Filtered stream (real-time keyword streaming) is now Enterprise-only.

Deep-cut verdict: Moderate, expensive. Full-archive search is useful for verifying a specific thread before writing, but at $0.005/read broad fishing adds up fast (1M reads = $5,000), and you lose real-time filtered stream below Enterprise. Use as the authoritative spot-check source, not the discovery engine.

Citations: docs.x.com/x-api/getting-started/pricing · docs.x.com/x-api/posts/search/quickstart/full-archive-search · blotato.com/blog/twitter-api-pricing

### Third-party X scraper / data APIs

Per 1,000 tweets read: official $5.00 · Bright Data dataset $2.50 · Bright Data scraper $1.50 · SocialData $0.20 · Apify $0.15 · twitterapi.io $0.15.

- twitterapi.io — the standout. $0.15/1,000 tweets, $0.18/1,000 profiles, credits never expire, no card to start. 75+ endpoints including advanced_search (full archive), plus websocket + webhooks for real-time. 1,000+ req/sec, no full-archive throttle. Verdict: Excellent. twitterapi.io · twitterapi.io/blog/twitter-api-pricing
- SocialData API (socialdata.tools). $0.0002/item = $0.20/1,000 tweets; failed requests not billed. Built-in monitoring/alerting product (watch a keyword or user). Verdict: Very good. docs.socialdata.tools/getting-started/pricing/
- Apify X scraper actors. Pay-per-result, $0.15-$0.40/1K (xquik/x-tweet-scraper $0.15/1K). Verdict: Good but operationally heavier (breaks when X changes markup). apify.com/scrapers/twitter
- Bright Data. Scraper $1.50/1K (promo $0.75/1K 3mo), datasets from $2.50/1K. Verdict: Moderate; main asset is legal cover (won the X lawsuit). brightdata.com/blog/web-data/best-twitter-x-data-providers

Legality: Public, logged-out tweet data is on solid ground (Meta v. Bright Data Jan 2024; X Corp v. Bright Data May 2024 dismissed). Risk is (a) authenticating with an X account (accepts ToS banning scraping), (b) copyright/GDPR if you republish. Third-party providers absorb access-side risk; you own downstream use.

## 2. Reddit

### Official Reddit Data API (2026)

- Free tier: 100 queries/min per OAuth client (authenticated), 10/min unauthenticated, rolling 10-min window. Non-commercial only; app review determines commercial approval.
- Commercial: $0.24 per 1,000 API calls, unchanged since 2023. Not self-serve — negotiated contract, frequent rejections, enterprise-or-nothing.
- What you can search: per-subreddit new/hot/top/rising/controversial, subreddit search, per-subreddit keyword search, full comment trees. Reddit's /search across all of Reddit is relevance/recency-limited and shallow (~1,000-item listing cap).
- PRAW still works, sustained ~60 req/min. Free within limits.
- Legal: Reddit Developer Terms forbid using Reddit data to train/fine-tune models without a separate license, and forbid reselling. You can read and surface; not feed to training under free/standard tiers. redditinc.com/policies/developer-terms · octolens.com/blog/reddit-api-pricing

Deep-cut verdict: Medium. Great for live "new" monitoring of niche AI subreddits. Weak for retrospective deep search.

### Reddit historical search and third-party

- Pushshift: effectively dead for the public (mods only since mid-2023). Live replacement: PullPush.io (free, no auth): full-text q=, filters for subreddit/author/after/before/score/num_comments. Deep-cut verdict: HIGH when up — the one path to genuine historical full-text search; reliability fragile (multi-month 2025 outages); cache aggressively. pullpush.io
- Apify Reddit Scraper: $3.40/1,000 results, no login, beats the 1,000-post cap via date-windowing. Cheaper alts (harshmaur from $2.00/1K).
- Bright Data Reddit Scraper API: from ~$0.0025/record, $250 min order.
- Scrapers carry the same no-AI-training/no-resale exposure.

## 3. Hacker News

- Official Firebase API (hacker-news.firebaseio.com/v0/): free, no auth, no rate limit. Item graph by ID, /topstories /newstories /beststories /askstories /showstories /jobstories, /maxitem, /updates. No search — walk by ID. Verdict: Medium; pair with Algolia. github.com/HackerNews/API
- Algolia HN Search API (hn.algolia.com/api/v1/): free, no auth, ~10,000 req/hour/IP. search (relevance) and search_by_date (newest first). Full-text query=, tags= (story, show_hn, ask_hn, front_page, author_<x>), numericFilters on created_at_i and points (num_comments readable but NOT server-side filterable). Verdict: HIGH — the single best free tool here. Verified: hn.algolia.com/api/v1/search_by_date?query=AI&tags=story&numericFilters=points>100. hn.algolia.com/api

Suggested combo: Algolia search_by_date for discovery → Firebase /item to hydrate thread. Both free, reliable, lowest-friction in the report.

## 4. Bluesky / AT Protocol

Deep-cut verdict: HIGH — arguably the best free source for early-signal applied AI. ~300,000 academics migrated from X to Bluesky 2023-early 2025 (~18% of sampled scholars), AI/ML cohort heavily represented (400+ community AI/ML starter packs).

Three free, no-auth-for-reads tiers:
1. Public AppView XRPC (https://public.api.bsky.app): app.bsky.feed.searchPosts supports full-text q, sort=top|latest, since/until, lang/author/domain/tag, limit 1-100 + cursor. Best for targeted pulls.
2. Jetstream — lightweight JSON websocket firehose (wss://jetstream1.us-east.bsky.network/subscribe). Filter by wantedCollections (app.bsky.feed.post) and wantedDids. Cursor replay/backfill. Best for continuous monitoring.
3. Full firehose (com.atproto.sync.subscribeRepos): CBOR/CAR binary, ~600 events/sec. Overkill — prefer Jetstream.

Price: Free, no paid tier. Rate limit: 3,000 requests/5 min per IP. Gotchas: searchPosts cursor may not traverse the full historical set (window with since/until); tag filter buggy (prefer q); Jetstream zstd needs the shipped dictionary. github.com/bluesky-social/atproto · docs.bsky.app/docs/advanced-guides/rate-limits · github.com/bluesky-social/jetstream · arxiv.org/abs/2505.24801v1

## 5. Lobsters (lobste.rs)

Deep-cut verdict: HIGH. Small, invite-only, computing-focused; ai/ml tags surface practitioner-grade discussion early. Append .json to almost any page, no auth, no key. Verified: /hottest.json, /newest.json, /t/ai.json, /t/ai,ml.json, /domains/openai.com.json. Fields: title, url, score, comment_count, tags[], comments_url. Free. Volunteer-run: poll infrequently, descriptive User-Agent, cache, respect 429s. lobste.rs/hottest.json · lobste.rs/t/ai.json

## 6. Mastodon

Deep-cut verdict: HIGH signal, operationally heavy. AI researchers cluster on sigmoid.social, hachyderm.io, fosstodon.org, scholar.social. No global API — query instance by instance. Hashtag timeline GET /api/v1/timelines/tag/:hashtag is the best discovery primitive (append .rss to skip token). Full-text search crippled (admin Elasticsearch + auth, only your own posts). Streaming since v4.2.0 needs a user token. Free; cost is per-instance registration + polling. Rate limit 300 req/5 min. docs.joinmastodon.org/methods/timelines/

## 7. Lemmy

Deep-cut verdict: MEDIUM-HIGH, much easier than Mastodon. Reddit-shaped; AI in !localllama, !technology@lemmy.world. One well-connected instance mirrors many via federation. Real keyword search (GET /api/v3/search). GET /api/v3/post/list filters by community/sort/type; Scaled sort boosts smaller communities (good for deep cuts); type_=All on a busy hub approximates a cross-fediverse feed. Free, unauthed reads. Build against v3. Search throttled (~6 per 600s) — prefer paging post/list. mv-gh.github.io/lemmy_openapi_spec/

## 8. Discord

Deep-cut verdict: NOT FEASIBLE for open discovery. No cross-server search. Only legitimate path: Bot API with Message Content privileged intent, on servers you're invited to. Self-bots forbidden/bannable. Monitoring-only for consented servers, not discovery. discord.com/developers/docs/topics/rate-limits

## 9. LinkedIn

Deep-cut verdict: HIGH signal, HIGH friction — do not automate. Official API has no public post/feed search (403 unless you own the content). Proxycurl is DEAD (sued Jan 2025, shut July 2025). Bright Data datasets ~$0.0025/record ($250 min); Apify post scraper ~$1/1,000 (violates ToS). hiQ lost on contract. Recommendation: do not build a LinkedIn-scraping pipeline; manual human-in-the-loop only.

## BOTTOM LINE — ranked recommendation

1. Hacker News (Algolia + Firebase) — build first. Free, no auth, true keyword + date + points search. Highest signal-to-effort in the report. Algolia search_by_date → Firebase /item.
2. Bluesky / AT Protocol — build second. Free, open, AI-researcher diaspora; both full-text searchPosts and a filterable firehose (Jetstream). Best free social source for non-obvious early signal.
3. twitterapi.io — the paid X engine. X still has the most AI conversation volume; $0.15/1,000 tweets, full-archive + websocket, 30x cheaper than official. Pair with official X full-archive ($0.005/read) only as authoritative spot-check.
4. Lobsters + Lemmy — free supplementary feeds.

Reddit: free official API / PRAW for live monitoring of a niche-subreddit watchlist; add PullPush.io (free) or Apify ($3.40/1K) for historical depth. Skip commercial tier. Note no-AI-training constraint.

Not worth it for discovery: Official X Enterprise ($42K+/mo), Bright Data datasets, Discord (no cross-server discovery), LinkedIn (no legit discovery API), Mastodon (fragmentation; lower ROI than Bluesky/Lemmy).

Starting stack: HN (free) + Bluesky (free) + twitterapi.io (cheap paid) + Reddit free API + Lobsters/Lemmy (free) covers the landscape for well under $100/month at moderate volume; only real spend is X via twitterapi.io.
