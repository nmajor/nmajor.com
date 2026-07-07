---
name: content-discovery
description: Find fresh, deep-cut applied-AI story candidates and hand Nick a ranked digest to review. Use when Nick wants ideas to write about, a weekly scan of what's worth covering, a "what's happening in applied AI right now" sweep, or a hunt for named-company AI case studies (process integration, or replacing an expensive SaaS bill with an in-house vibecoded tool) to stock the running case-study library at research/case-studies/. Pulls free sources (Hacker News, Lobsters, arXiv, GitHub, Hugging Face papers, web search) plus Exa neural search and findSimilar for the deep cuts keyword sources miss, plus vendor customer-story indexes, industry trade press, conference recaps and earnings calls. Ranks for relevance, non-obviousness, breakout potential (whether a story can feed a LinkedIn post that escapes Nick's network — see research/linkedin-breakout/report.md), and how strong an opinionated first-person take Nick could hang on it, writes a digest, and accretes verified case studies into a permanent library. Nick picks one and brain-dumps into the content-builder skill.
---

# Content discovery: surface deep-cut story candidates

This is the front of the content workflow. It finds candidate stories for Nick's beat,
ranks them, and writes a digest Nick reviews. Nick picks one, reads the sources, and
brain-dumps a take, which goes into the `content-builder` skill. This skill finds;
`content-builder` builds.

This is the manual, run-on-demand version of the discovery pipeline. The full automated
design (Cloudflare ingestion, scheduled monitors, a learning loop) is in
`research/content-discovery/report.md` for when we want to graduate it. For now, an agent
runs this skill, does the ranking with its own judgment, and emits a digest. No infra to
run. The only credential it needs is `EXA_API_KEY` (in `.env`); everything else is free
and keyless. At our volume Exa stays inside its free tier.

## The one rule: surface candidates, never pick for them

Every serious curator we studied (Last Week in AI, AINews, TLDR, Import AI) runs the same
shape: tooling collects and ranks, a human makes the final call. We do the same. This
skill ranks and explains; it does not decide what gets written, and it does not write the
take. Nick brings the opinion — the digest's job is to put the best raw stories in front
of him so he can pick the one he most wants to say something about. So:

- **Blurbs stay plain and factual.** One line on what a thing is and why it might matter,
  in plain words, so Nick can judge the raw story honestly before he forms a take. Don't
  pre-cook the opinion or oversell it — no hype, no "this is huge." If you'd write it on
  the back of a press release, cut it. (The goal is finding stories worth an opinionated
  first-person take; the blurb just states the facts so Nick supplies the angle.)
- **Favor the deep cut over the obvious headline.** A model launch everyone already saw is
  low value to us. An engineer's writeup of what broke when they put agents in production,
  a small repo gaining stars fast, a sharp arXiv paper on enterprise integration: that is
  the signal, and it's the kind of story Nick can have a real, non-obvious take on.
  Penalize anything already on every front page.
- **No banned words.** If any digest text will be read by a person, it follows the
  `writing-voice` skill. Plain and specific, no "revolutionizes / game-changer / unlock."

## What we're looking for (the beat profile)

Read `overview.md` for the full positioning. In one line: **applied AI in practice, with a
signature interest in how traditional, established companies are putting AI into the
systems and workflows they already run** — the material Nick has an opinionated,
first-person point of view on. That means insurance, banking, manufacturing, logistics,
retail, healthcare, legal, customer service and back-office operations, not AI-native
startups and not the developer-tooling world. Score candidates against this:

- **On-target (the core):** how non-tech and established enterprises actually use AI in
  operations: claims, underwriting, supply chain, customer service, finance, compliance,
  document and back-office work. Named-company deployments with real detail. What it cost,
  what broke, what changed. Adoption, integration, governance, and procurement decisions
  made by non-technical leaders. Honest results with real numbers.
- **Occasional, not the spine:** AI coding and developer tooling. We touch it now and
  then when it speaks to how ordinary companies adopt AI, but it is not our beat. Down-rank
  dev-centric stories (agentic coding, IDE tools, framework releases) unless there's a
  clear traditional-company angle.
- **Adjacent, include if strong:** research with a clear applied angle; tooling or cost or
  latency shifts that change what a normal company can deploy; primary-source practitioner
  writeups about real deployments.
- **Off-target, mostly skip:** model-launch hype, funding news, AGI/doom punditry,
  dev-tool-of-the-week, consumer-app roundups, anything with no link behind the claim.

Note on sources: vendor and "customer story" case studies about a named traditional company
(a Databricks/Microsoft/ServiceNow customer, a bank, an insurer) are fair game and often the
only public record of a real deployment. Read them critically, they are marketing, but the
named company and the concrete workflow are exactly our signal.

## Case-study hunt mode (feeds the running library)

Alongside the weekly digest, this skill runs a standing hunt for **named-company AI
case studies** that accrete into a permanent library at `research/case-studies/` (read
its `README.md` for purpose, what qualifies, and the entry schema). The library is dual
use: each entry can anchor an individual post, and the whole corpus can be scanned later
to compile cross-cutting insight pieces. Two spine categories we actively chase:

- **`process-integration`** — a traditional, established company put AI into an existing
  operational workflow (claims, underwriting, supply chain, customer service, finance,
  back office), with real before/after detail.
- **`saas-replacement`** — a team cancelled or shrank a paid software bill by building the
  capability in-house, often "vibecoded" by a small or non-specialist team. The
  before/after cost is the signal. Also: `cost-reckoning`, `failure`, `build-vs-buy`,
  `governance`.

**Exa query intents for the hunt** (sentence-style; widen `startPublishedDate` to ~120
days, case studies age slower than news):
- a company that replaced an expensive SaaS subscription by building its own internal tool with AI
- we cancelled our SaaS vendor and built it in-house with LLMs to cut software costs, with numbers
- a non-technical team vibecoded an internal tool that replaced paid software and what it saved
- a traditional company integrated AI into an existing operational workflow and reported real results and cost
- named enterprise put AI into claims / underwriting / supply chain / back office, before and after numbers
- build versus buy: company chose to build an AI tool internally instead of buying enterprise software
- case study of AI automation in operations with concrete savings: hours, headcount, or dollars

**The content-farm trap (important).** These queries surface a lot of SEO/AI-content-farm
domains that invent or launder numbers (seen so far: theapplied.co, insideraitrends.com,
elladvisory.com, nssg.consulting, altstack.ai, moonpool.ai, bahrku.com). A striking number
with only a content-farm source is **not** entry-grade: either verify the named company
elsewhere or mark the entry `verified: unverified, confidence: low` and say so in the body.
Never launder a farm number into a clean-looking entry. Vendor "customer story" pages
(C3.ai, Blue Prism, Palantir, Capgemini, SAS customers) are different: fair game as the
only public record of a real deployment, but treat their numbers as vendor-reported.

**Parsing into the library.** Per the research pattern, after saving raw, use a subagent
(or two, split by category to parallelize) to: pick the qualifying named cases, WebFetch
the strongest few to verify numbers and what broke, write `entries/<slug>.md` to the
schema, save fetched source text to `case-studies/raw/<slug>.md`, and return index rows +
a digest section to merge. Then append rows to `case-studies/index.md` (newest first),
bump the category counts, and add strong picks to `seeds.txt` and `seen.txt` as usual.

## Other forms of discovery (beyond the keyword/semantic sweep)

The sweep below is the spine, but the deepest case studies often hide in places a query
miss. Rotate these in, especially for the case-study hunt:

- **Vendor customer-story indexes.** The named-deployment record nobody else publishes.
  Crawl the case-study sections of the integrators and platforms our beat buys from:
  Palantir, C3 AI, Blue Prism / SS&C, UiPath, ServiceNow, Microsoft (Copilot customer
  stories), Google Cloud, AWS, Databricks, Salesforce, SAS, Automation Anywhere. Read as
  marketing; mine for the company + workflow + a number to verify.
- **Industry trade press**, not just tech press. Vertical outlets cover real deployments
  the tech world ignores: American Banker, Insurance Insider / reinsurancene.ws,
  FreightWaves, Supply Chain Dive, K12 Dive, Healthcare IT News, CIO Dive, Diginomica,
  Tearsheet, FStech. Exa with `category:news` plus a vertical term surfaces these.
- **Conference talks and recaps.** AWS Summit / re:Invent, Google Cloud Next, vendor
  user-conferences, and sector events often have a named customer on stage with concrete
  numbers before any article exists. Search for recaps and slide writeups.
- **Earnings calls and shareholder letters.** Public companies increasingly quantify AI
  impact for investors (often more honestly than in marketing). Worth a targeted sweep.
- **Practitioner first-person writeups.** Engineering blogs and personal posts where
  someone says "here is what we built, here is the bill before and after, here is what
  broke." The highest-trust SaaS-replacement source when the author names their own org.
- **Auth-gated social (when wired).** Reddit (r/ITManagers, r/msp, r/sysadmin, the LLM
  subs) and Bluesky carry operators comparing build-vs-buy in the open. See the gated-
  sources note below.

## Sources

Save every raw response to the run's `raw/` folder before parsing. Substitute today's
date where noted. Exa needs `EXA_API_KEY` from `.env`; everything else below is keyless.

### Exa — the semantic engine (the deep-cut differentiator)

Exa searches its own neural index by meaning, not keywords, so it surfaces the
non-obvious pages HN and arXiv keyword scans miss. Two ways to use it, both POST with an
`x-api-key` header. Source the key first: `set -a; . ./.env; set +a` (never echo it).

**`/search`** — topic discovery against the beat. Returns links with text included, so
you can blurb accurately. Run a handful of beat-targeted, sentence-style queries (Exa
does better with a described intent than with keywords):
```
curl -sS -X POST "https://api.exa.ai/search" \
  -H "x-api-key: $EXA_API_KEY" -H "Content-Type: application/json" \
  -d '{"query":"an engineering team describing what broke when they put LLM agents into production",
       "type":"auto","numResults":10,
       "startPublishedDate":"YYYY-MM-DD",
       "contents":{"text":{"maxCharacters":500}}}'
```
Set `startPublishedDate` to ~30 days ago for freshness. Good query intents, biased to the
traditional-company beat: how an insurer/bank/manufacturer/retailer/hospital put AI into an
existing workflow; what an enterprise AI rollout actually cost and returned; a named
non-tech company's AI deployment, results and lessons; AI in claims/underwriting/supply
chain/customer service/back office. Optionally pass `"category":"news"`, or `excludeDomains`
to suppress the AI-SEO content farms this surfaces (see the run notes in
`research/discovery/`).

**`/findSimilar`** — the "more like this" move. Pull pages semantically similar to stuff
we already like. Seeds live in `research/discovery/seeds.txt`:
```
curl -sS -X POST "https://api.exa.ai/findSimilar" \
  -H "x-api-key: $EXA_API_KEY" -H "Content-Type: application/json" \
  -d '{"url":"<a seed URL>","numResults":8,"excludeSourceDomain":true,
       "contents":{"text":{"maxCharacters":500}}}'
```
Run it on the strongest few seeds (specific article URLs give sharper similars than
landing pages). This is our lightweight taste loop: when Nick accepts or writes
about a story, add its URL to `seeds.txt` so future runs lean toward our demonstrated
taste. Each `/search` or `/findSimilar` request is one Exa call (10 results, text free);
at a weekly cadence we stay well inside the free tier.

### Free, keyless sources (verified working from this environment)

**Hacker News** (the highest signal-per-effort source):
```
# Recent stories above a points floor, by recency:
curl -sS "https://hn.algolia.com/api/v1/search_by_date?query=AI%20agent&tags=story&numericFilters=points%3E40&hitsPerPage=30"
# Ask HN / Show HN (operators describing real problems; builders shipping):
curl -sS "https://hn.algolia.com/api/v1/search_by_date?tags=ask_hn&query=AI&hitsPerPage=20"
curl -sS "https://hn.algolia.com/api/v1/search_by_date?tags=show_hn&query=AI&hitsPerPage=20"
```
Run several keyword seeds: `AI agent`, `LLM`, `RAG`, `AI in production`, `multi-agent`,
`agent orchestration`, `evals`, `LLM cost`, `prompt injection`, `fine-tuning`. Hits carry
`title`, `url`, `points`, `num_comments`, `objectID` (the HN id, for the comments link
`news.ycombinator.com/item?id=<objectID>`).

**Lobsters** (free, small, high signal-to-noise):
```
curl -sS -A "nmajor-discovery/0.1 (+https://nmajor.com)" "https://lobste.rs/t/ai.json"
curl -sS -A "nmajor-discovery/0.1 (+https://nmajor.com)" "https://lobste.rs/t/vibecoding.json"
```
Fields: `title`, `url`, `score`, `comment_count`, `tags`, `comments_url`. Send a
descriptive User-Agent and poll gently (it's volunteer-run).

**arXiv** (free; the applied frontier lives in cs.SE, cs.HC, cs.IR, cs.MA):
```
curl -sS "https://export.arxiv.org/api/query?search_query=cat:cs.SE+OR+cat:cs.HC+OR+cat:cs.IR+OR+cat:cs.MA&sortBy=submittedDate&sortOrder=descending&max_results=40"
```
Atom XML. Each `<entry>` has `<title>`, `<summary>`, `<published>`, `<id>` (the abstract
URL). Filter for system/deployment/production/integration angles; skip pure theory.

**Hugging Face Daily Papers** (free; what the field is reading today):
```
curl -sS "https://huggingface.co/api/daily_papers?limit=30"
```
JSON: `paper.title`, `paper.id` (`huggingface.co/papers/<id>`), upvotes, summary.

**GitHub** (free, use the authed `gh` CLI for the higher rate limit):
```
gh api -X GET /search/repositories -f q="topic:ai-agents pushed:>YYYY-MM-DD" -f sort=stars -f per_page=20
```
Repeat for topics `llm`, `rag`, `mcp`, `llmops`. Recently-pushed repos gaining stars are
early tooling signal. `full_name`, `description`, `html_url`, `stargazers_count`,
`pushed_at`.

**Web search** (the agent's own `WebSearch` / `WebFetch` tools, no API cost): use for
targeted topic sweeps and to check practitioner blogs (Simon Willison, Hamel Husain,
Eugene Yan, Latent Space, Interconnects, Anthropic Engineering, Ramp/Shopify engineering).
Use `WebFetch` to read a candidate before writing its blurb so the blurb is accurate.

The full curated source list (subreddits, X accounts, blogs, Discords, podcasts, the
keyword seeds, and the stale defaults to avoid) is in
`research/content-discovery/raw/06-seed-sources.md`. Read it before a run.

### Auth-gated sources (not in v1; offer to wire later)

Reddit and Bluesky are two of the best social deep-cut sources, but both return 403 from
this environment without credentials. They are worth adding when Nick is ready to
drop a free credential in `.env`:
- **Reddit:** a free OAuth app (client id/secret) → monitor r/LocalLLaMA, r/AI_Agents,
  r/Rag, r/LLMDevs, r/mlops, r/ChatGPTCoding, r/ITManagers.
- **Bluesky:** a free app password → `app.bsky.feed.searchPosts` and the practitioner
  accounts that left X.
If Nick wants either, set it up and add it to the source list above. Until then,
do not block a run on them.

### Perplexity — enrichment, not discovery

`PERPLEXITY_API_KEY` is available as a machine environment variable. Perplexity returns a
written answer plus citations, so it does not generate a candidate list and is not a
discovery source. Use it sparingly here: to sanity-check a promising-but-thin candidate
("is this real, what's the context") before deciding whether to keep it in the digest.
```
curl -sS -X POST "https://api.perplexity.ai/chat/completions" \
  -H "Authorization: Bearer $PERPLEXITY_API_KEY" -H "Content-Type: application/json" \
  -d '{"model":"sonar","messages":[{"role":"user","content":"<question>"}]}'
```
Its real home is the `content-builder` research stage, where you go deep on the one topic
Nick picked. Mine the `citations` / `search_results` it returns for primary sources.

## Breakout potential: score every candidate for it (this feeds the LinkedIn reach engine)

The essay is also the newsletter issue AND the source for LinkedIn atomization (project
`CLAUDE.md`), so a story's shape at discovery time decides whether it can later feed a
**breakout** LinkedIn post (one that escapes Nick's immediate network) or only a solid
in-network one. **`research/linkedin-breakout/report.md` is the evidence base — read it.**
The short version, grounded in Nick's own natural experiment (four posts about one story:
171,633 impressions vs ~135-234 for the others): breakout reach comes from a **large
"could-be-us" pool × high-arousal but honest emotion (anxiety/awe/surprise) × a live,
novel news peg**, told as a **story** with a **safe, answerable question** and a **mild
moral frame**. Deep, useful analysis pieces make excellent *baseline* essays but rarely
break out — and that is fine; you cannot force it, and only ~1 of every 4 posts should even
try (report §4).

So score every candidate on **breakout potential** alongside relevance and deep-cut, and
tag its natural shape. A candidate hitting most of the following is a **spike** candidate
(write it fast, news-shaped, while the wave is cresting); one that is deep and useful but
hits few is a **baseline** candidate (a strong save-worthy essay — do not force a breakout
frame onto it):

- **First-of-kind / genuinely novel?** (first SEC filing / lawsuit / fine / regulation /
  board resignation caused by AI). True novelty is the honest substitute for bait and the
  single highest-value breakout peg. **Actively hunt these:** SEC EDGAR 8-Ks (Item 1.05),
  regulator actions (FTC, state AGs, banking/insurance regulators), court dockets, law-firm
  client alerts (e.g. WSGR), and governance trade press — exactly where the CB Financial
  shadow-AI story surfaced.
- **Named, concrete, verifiable?** A real company, real stakes, checkable facts.
- **High-arousal but honest stakes?** Anxiety, awe, or surprise from real events — never
  manufactured fear.
- **Broadly addressable?** A wide pool can think "this could be us," then the ICP
  self-selects.
- **A mild moral / accountability frame?** (who's accountable, protecting customers) —
  never partisan outrage.
- **Timely right now?** A news wave still cresting decays fast — flag spike candidates for
  **fast-track** (the specific-date publish path in `CLAUDE.md`); do not let them sit in the
  queue behind evergreen essays.
- **Honest substance underneath?** A candidate that scores only on fear but is thin on real,
  checkable substance is a **reject**, not a spike. Honesty filter first.

## The procedure

1. **Set up the run.** Use today's date. Create
   `research/discovery/<YYYY-MM-DD>/raw/`. (The `research/discovery/` folder holds one
   dated subfolder per run, each self-contained.)
2. **Gather.** Run the source calls above. Start with Exa: several `/search` query
   intents against the beat, plus `/findSimilar` on the strongest few seeds from
   `research/discovery/seeds.txt`. Then the free sources across the keyword seeds. Save
   each raw response into `raw/` (one file per source/query, keep the URL in the filename
   or a header). Raw is kept forever, same as the research pattern.
3. **Normalize and dedupe.** Canonicalize URLs (strip `utm_*`, resolve obvious
   duplicates). Collapse the same story arriving from several sources into one candidate,
   and note every source it came from (multi-source is itself a small signal). Then drop
   anything already surfaced in a previous run by checking `research/discovery/seen.txt`
   (one canonical URL per line; create it if absent).
4. **Score each candidate** against the beat profile, using your own judgment:
   - **Relevance** (0-5): how squarely applied-AI / enterprise-integration it is.
   - **Deep-cut** (0-5): how non-obvious and early it is. High for a practitioner writeup,
     a fast-rising small repo, a sharp niche paper. Low for something already everywhere.
   - **Breakout** (0-5): can it feed a LinkedIn post that escapes Nick's network? Score on
     the ingredients above (first-of-kind/novel, named, high-arousal-but-honest, broadly
     addressable, moral frame, timely). See `research/linkedin-breakout/report.md`. Also
     tag the natural shape: `[incident/named-case/first-of-kind]` (tellable as a story — a
     spike candidate) or `[framework/analysis/trend]` (an explainer — a baseline candidate).
     A low breakout score is not a reject; a deep, useful baseline story is exactly what most
     issues should be. It is a routing signal, not a quality bar.
   - Drop everything below a relevance floor. A model launch with relevance 5 but
     deep-cut 0 is usually a skip for us; say why in one line if you keep it.
5. **Rank and select.** Sort by relevance plus deep-cut. Cap any single source so the
   digest isn't all HN. Keep the top ~12-15, and deliberately include one or two
   higher-risk "wildcards" for serendipity (flag them as such).
6. **Write the digest** to `research/discovery/<YYYY-MM-DD>/digest.md` in the format
   below.
7. **Update `seen.txt`** with the canonical URLs you included, so the next run is fresh.
8. **Hand off.** Tell Nick the digest is ready, point to the file, and give a
   two-line summary of the strongest one or two. When they pick one and brain-dump, run
   the `content-builder` skill with that. Also add the picked story's URL to
   `research/discovery/seeds.txt` so Exa `findSimilar` leans toward our taste next run.

## Digest format

```markdown
# Discovery digest — <Month DD, YYYY>

<One sentence on what this run covered: sources scanned and roughly how many candidates
before filtering.>

## Top candidates

### 1. <Title> — [source link](url)
**Source(s):** Hacker News (180 pts, 90 comments) · Lobsters
**Relevance 5 · Deep-cut 4 · Breakout 4 — spike** · `[incident/named-case/first-of-kind]`
One plain, factual line on what it is and why it might matter for our beat. State the story; leave the take to Nick.
**Read:** [article](url) · [HN thread](url)

### 2. ...

## Watch / wildcards
- <Title> — one line. Why it's a maybe. [link](url)

## Skipped but notable
- <Big obvious story everyone saw> — noted so you know we saw it; skipped as too-covered.
```

Keep blurbs to one line. Nick is scanning to pick, not reading prose.

## Conventions

- **Raw-first, always.** Save the unedited source responses to the run's `raw/`. A digest
  must be re-readable against its raw inputs.
- **Plain and factual.** Blurbs follow `writing-voice`: no hype, no banned words, and
  don't pre-cook the opinion — state the story so Nick can judge it and supply the take.
- **Fresh every run.** Use `seen.txt` so we don't resurface the same links.
- **Don't pad.** A short, sharp digest of 8 real candidates beats 15 with filler. If a run
  is thin, say so.

## When not to use

This finds candidates. It does not research a chosen topic in depth or write anything for
publication. Once Nick picks a candidate and brings a take, switch to
`content-builder`, which does the capture, deep research, drafting, audit, and publish.
