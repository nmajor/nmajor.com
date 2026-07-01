# How the best AI/tech newsletter curators source their stories

> Raw subagent research dump. Saved verbatim per the raw-first research pattern. Documented, cited accounts only; inferences flagged.

Strongest copyable primary sources: Last Week in AI (entire pipeline open-source on GitHub), AINews / Smol AI (methodology printed atop every issue), Mike Taylor (fully documented curation pipeline).

## Part 1 — Per-operator findings

### TLDR (Dan Ni)
- Input mix: "a combination of aggregators, Google searches, RSS feeds, and Twitter."
- Job postings are the most concrete evidence: TLDR AI curators monitor "x.com, arXiv, Hacker News, Discord, GitHub, and AI company blogs." TLDR Founders curators work "x.com, Hacker News, and founder Slacks and group chats" to spot trends "before other founders do."
- Tooling: Feedly to consolidate thousands of feeds; Slack as hub; ~3,000–4,000 sources. No documented AI/LLM ranking.
- Team: paid part-time domain-expert curators (~$100/hr), ~1 hr/day, 6–8 stories.
- Deep cuts come from hiring practitioners who live in the raw streams, not from tooling.
- Curation test: "Would I send this to my group chat? If you wouldn't forward this to colleagues in Slack, don't put it in." Hard 6–8 story cap controls noise.

### Ben's Bites (Ben Tossell)
- Hacker News via a custom AI-assistant workflow. Twitter/X timeline as core discovery. Built BB News (HN-style community aggregator, upvotes, "front page of AI"), a 3,700+ Discord, reader replies/polls. Tooling: AI assistants with custom "skills," speech-to-text. Principles: filter noise, impartial, avoid hype, ~5-min read, builder-first.

### The Rundown AI (Rowan Cheung)
- Direct/exclusive lab access (embargoes, interviews). Twitter/X as main discovery: "I research for two hours in the morning, find the coolest things." Perplexity Pro to deepen a lead. Notion catch-all; ChatGPT to summarize ("I don't use AI at all to write"); Claude as "Editor in Chief"; Supertools (Notion+Super DB) tracking new AI tools. Principles: "why it matters," recency, human filter ("AI content has no soul").

### Superhuman AI (Zain Kahn)
- Sourcing largely undisclosed. Writers sift "a stream of news, tweets, and articles." Reader polls steer. Tooling: Bardeen, Gamma, Flair, Midjourney, "ChatGPT remains the MVP." ~8-person team. No documented deep-cut method.

### Import AI (Jack Clark)
- Core inputs are public primary literature: "papers on arXiv, bioRxiv, and NBER, as well as observing the products being deployed by the frontier companies." Tagline: "runs on arXiv, cappuccinos, and feedback from readers."
- Now AI-agent-assisted: "machines were reading literally thousands of research papers on my behalf, compiling data, cross-referencing it, assembling analytic reports." Mission: make a fast technical world legible.

### The Batch (DeepLearning.AI / Andrew Ng)
- Editor Tim Carmody: "Mostly we look at current AI trends, try to mix up what we cover." Primary reporting: "We talk directly to the newsmakers and experienced ML engineers." Funnel: twice-weekly Data Points digest feeds the weekly Batch. Principles: variety/anti-repetition (one model + one paper + one business/legal story), explicit anti-hype.

### Last Week in AI (Andrey Kurenkov / Skynet Today) — most copyable blueprint
- Entire pipeline open-source on GitHub. arXiv first-class: scripts route arXiv URLs to a dedicated extractor, auto-classify arXiv/HuggingFace links as "Research." Dedicated Reuters extractor; YouTube filtered out.
- Measured source mix in one issue: TechCrunch (14), The Verge (6), arXiv (6), CNBC (4), then VentureBeat, The Decoder, MIT Tech Review, Ars Technica, FT, Bloomberg, simonwillison.net.
- Single source of truth = a curated planning spreadsheet (CSV: Name, URL, Type, Section, Main Story or Lightning Round). Humans curate stories in; scripts do the rest. Article text auto-fetched (newspaper3k); AI does classification/summarization/dedup, NOT selection — Claude Haiku classifies + writes one-sentence excerpts, Claude Sonnet writes summaries + final dedup.
- Anti-hype baked into the prompt: excerpts "should avoid 'marketing hype' (terms like 'revolutionizes', 'groundbreaking', 'advanced') -- stick to the facts."
- Founding rationale = "the Snopes for AI"; maintains an explicit AI-coverage best-practices rubric.

### AINews / Smol AI (swyx) — canonical deep-cut model for applied AI
- Sources printed in every issue header: "We summarize top AI discords + AI reddits + AI X/Twitters," with live counts, e.g. "We checked 12 subreddits, 544 Twitters and 24 Discords (256 channels, 7993 messages)." Twitter source is a literal X List; Reddit led by r/LocalLlama; Discords named per issue (Cursor, aider, Nous Research, LM Studio, Eleuther, GPU MODE, Interconnects).
- Pipeline: "99% created by customizable research agents" — recursive "summary of Summaries of Summaries," "best of 4 runs." Human layer: "The editorial is always human written, the recaps are human reviewed."
- Deep cuts come from message-level scanning of practitioner Discords — signal absent from headline news.

### Other research-leaning curators
- Davis Blalock ("Davis Summarizes Papers"): screens ~600/week arXiv ML firehose via a funnel — title → abstract → quick skim → detailed read — to pick 10–20.
- Sebastian Raschka ("Ahead of AI"): "I get most of my ML news from following the right people on Twitter," plus arXiv ML category + Google Scholar keyword alerts; captures into OneNote then prunes hard ("95% is not that important").
- AlphaSignal (Lior): algorithmic scan-then-rank — "scans every new paper, every repository, every model release," ranking on citations, social mentions, repo activity, discussion; surfaces "the top 1%."

### High-end analysis operators (idea-sourcing)
- Ben Thompson (Stratechery): Techmeme is his daily index — scan yesterday's headlines, then read primary sources not commentary; "probably too much Twitter." Runs a persistent worldview ("The Writing Machine"). ~150 browser tabs; archive search. Interviews as deliberate sourcing.
- Gergely Orosz (Pragmatic Engineer): standing anonymous tip line in every Scoop issue; goes direct to CTOs/engineers; triangulates; crowdsourced data (TechPays, surveys). Idea triage = a simple note list. Diet = curated newsletters, deliberately avoiding "HN pandering."
- Lenny Rachitsky: an "advice column" sourced from reader questions; running idea backlog in Coda, reordered weekly; community Slack feeds a hand-curated Community Wisdom digest. Curiosity-led.

## Part 2 — Documented tooling map

- RSS triage backbone: Feedly + Leo AI or Inoreader (Rules & Filters auto-tag/star/mute/route; keyword monitoring; page-change detection). Readwise Reader for deep reading the shortlist.
- Hacker News: hnrss.org — front page, keyword searches, Show/Ask HN, with points/comments thresholds (?points=100).
- arXiv: arxiv-sanity-lite (Karpathy) — tag papers, trains per-tag SVMs over TF-IDF of abstracts, emails daily digests (algorithmic deep-cut engine, individualized). HF Daily Papers for velocity.
- GitHub Trending (early dev-tool signal); Product Hunt (launches).
- Keyword monitoring: Google Alerts (free); Talkwalker Alerts (adds X mention monitoring).
- Twitter/X: topic/people Lists remain primary. TweetDeck now paywalled; Nitter dormant in 2026 — plan around RSS Bridge / Bluesky / Mastodon.
- Curated digest feeders: Refind, The Sample, Mailbrew, Kill the Newsletter (email newsletters → RSS).
- AI search APIs: Exa (neural "find similar"), Tavily (search+extract+crawl), Perplexity Sonar (cited validation).
- Candidate store: Airtable (score/sort/aggregate) or Notion (briefs/prose).
- Reference automated pipeline: n8n/GrowwStacks "summarize AI news from RSS + Reddit + HN" — poll 15–60 min by tier, dedupe by URL hash + fuzzy title match, extract text, LLM-score importance, compile digest.

## Part 3 — The common pattern

1. A wide, tiered collection layer feeds a narrow human selection step. No serious operator lets a tool select the final items.
2. AI is used for summarization, classification, and dedup — never for selection or final voice.
3. Early signal comes from being where practitioners actually talk, not from better algorithms. "Follow the people, not the publications."
4. A persistent candidate queue + capture-all-week, write-in-one-block rhythm is universal (CSV, Notion doc, Coda backlog, Feedly Board, note list).
5. Noise controlled structurally: hard story caps, fixed templates, anti-repetition rules, explicit anti-hype stance.
6. The audience is a two-way source loop (community digests, tip lines, surveys, reader email).

## Part 4 — Techniques most worth copying for a deep-cut applied-AI beat

1. Recap the conversation, not the press releases (the AINews move): monitored set of practitioner Discords + niche subreddits (r/LocalLlama) + a curated X List, scanned at message level.
2. Tier your sources, and keep a deliberate "everything else" tier for serendipity (A-list daily / B-list 2–3x/wk / long-tail).
3. Read primary sources directly via velocity signals: arxiv-sanity-lite tagged library, GitHub Trending, hnrss with a points threshold.
4. Copy Last Week in AI's pipeline shape verbatim: humans curate candidates into a structured queue → automation fetches text, dedupes (URL hash + fuzzy title), LLM-classifies/summarizes → human reviews. AI never selects.
5. Score each candidate on relevance + novelty/information-gain + recency, threshold out the floor, then sort. Add novelty/serendipity as explicit dimensions.
6. Encode an anti-hype rubric into the workflow itself — editorial checklist AND literally in the summarizer prompt (ban "revolutionizes/groundbreaking/advanced").
7. Cultivate direct human sources and a standing tip line.
8. Apply the forward test as the final filter, and cap hard.

Reliability notes: Best-documented = Last Week in AI (open-source), AINews (printed methodology), Mike Taylor, TLDR (job postings). Weak/none = Superhuman, The Batch, AI Breakfast.
