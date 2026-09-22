# RAW: anmolgupta824/ai-newsletter-agent -- a scored curation -> editorial pipeline

- Repo: https://github.com/anmolgupta824/ai-newsletter-agent
- Date accessed: 2026-08-18
- What it is: A TypeScript newsletter agent that ingests 90+ articles/week from RSS + HN + GitHub Trending + Product Hunt + Tavily, dedupes by hash, LLM-scores every candidate against a numeric rubric with a threshold, summarizes only the survivors, then runs a separate "editorial" pass that writes the issue. Notable for making the *scoring rubric a config file* and for its explicit cost ceiling / token cap.

VERBATIM below, complete files, unedited.


---

## README.md

Source: https://raw.githubusercontent.com/anmolgupta824/ai-newsletter-agent/main/README.md

<p align="center">
  <h1 align="center">AI Newsletter Agent</h1>
  <p align="center">
    An autonomous agent that reads 90+ articles, scores every one, curates the best 25, writes an editorial, and publishes your newsletter. Every week. Zero human effort.
  </p>
</p>

<p align="center">
  <a href="https://github.com/anmolgupta824/ai-newsletter-agent/stargazers"><img src="https://img.shields.io/github/stars/anmolgupta824/ai-newsletter-agent?style=for-the-badge&color=yellow" alt="Stars"></a>
  <a href="https://github.com/anmolgupta824/ai-newsletter-agent/network/members"><img src="https://img.shields.io/github/forks/anmolgupta824/ai-newsletter-agent?style=for-the-badge" alt="Forks"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue?style=for-the-badge" alt="License"></a>
  <a href="https://github.com/anmolgupta824/ai-newsletter-agent/issues"><img src="https://img.shields.io/github/issues/anmolgupta824/ai-newsletter-agent?style=for-the-badge" alt="Issues"></a>
</p>

<p align="center">
  <b>Any topic. Any niche. $0.006 per run.</b>
  <br/>
  <i>Ships with 6 ready-to-use configs: AI, Crypto, Finance, Healthcare, Tech, Product Management</i>
  <br/><br/>
  <a href="https://github.com/anmolgupta824/ai-newsletter-agent/stargazers"><img src="https://img.shields.io/badge/Like%20this%3F-Give%20it%20a%20%E2%AD%90-yellow?style=for-the-badge" alt="Star this repo"></a>
</p>

---

## What This Agent Does

Most newsletter tools help you **send** emails. This agent **writes the entire newsletter for you.**

```
You: "I want a weekly crypto newsletter"
Agent: *reads 90+ articles, scores them, picks the best 25, writes your editorial, publishes*
You: *sips coffee*
```

It runs on a cron. You set it up once. Every week, a new issue appears. No manual curation, no copy-pasting links, no writer's block.

---

## The Pipeline

```
              YOUR NEWSLETTER AGENT (example: AI config)
  ================================================================

  STEP 1: COLLECT                          6 Source Types
  ---------------------------------------------------------------
  +-------------+  +-------------+  +--------------+
  | RSS Feeds   |  | Hacker News |  | Product Hunt |
  | (any feed)  |  | (API)       |  | (GraphQL)    |
  +------+------+  +------+------+  +------+-------+
         |                |                |
  +------+------+  +------+------+  +------+-------+
  | GitHub      |  | Tavily      |  | Custom       |
  | Trending    |  | Search API  |  | Scraper      |
  +------+------+  +------+------+  +------+-------+
         |                |                |
         +--------+-------+-------+--------+
                  |
                  v
  STEP 2: SCORE                            ~30 LLM calls
  ---------------------------------------------------------------
  Every article scored 0-50 on 5 criteria:
  [Relevance] [Signal Strength] [Freshness] [Credibility] [Engagement]

  Model: gpt-4o-mini via OpenRouter (or any model you choose)
                  |
                  v
  STEP 3: DEDUPLICATE + SELECT
  ---------------------------------------------------------------
  sha256(url + title) -- no duplicates across weeks
  Top 25 stories selected (5 per section)
  30+ candidates scored, best survive
                  |
                  v
  STEP 4: SUMMARIZE                        ~10 LLM calls
  ---------------------------------------------------------------
  Each story gets:
  - Rewritten headline (not clickbait)
  - 2-3 sentence summary
  - "Why it matters" takeaway
                  |
                  v
  STEP 5: EDITORIAL                        1 LLM call
  ---------------------------------------------------------------
  Weekly editorial written in YOUR voice.
  Opinionated. First-person. Not a generic summary.
  (This is what makes your newsletter yours -- customize the prompt!)
                  |
                  v
  STEP 6: PUBLISH
  ---------------------------------------------------------------
  Stored in Supabase (digests + stories tables)
  Auto-published via GitHub Actions cron
  Zero manual steps. Every week. Forever.

  ================================================================
  Total: ~41 LLM calls | Cost: ~$0.006/run | Fully autonomous
```

---

## See It Live

This agent powers **[The AI-Native Digest](https://theainativepm.com/digest)** -- a weekly AI newsletter.

- **1.2M+ views** on Threads in 30 days
- Auto-published every Friday at 6am
- Zero human curation since launch

Same pipeline. Same code. Same agent. The only difference is a tuned editorial prompt.

---

## Get Started in 2 Minutes (AI-First)

The fastest way: let your AI coding tool do everything.

```bash
git clone https://github.com/anmolgupta824/ai-newsletter-agent.git
cd ai-newsletter-agent
```

Then open in your preferred tool:

| Tool | Command |
|------|---------|
| **Claude Code** | `claude` then "Set up a healthcare newsletter" |
| **Cursor** | Cmd+L then "Set up a crypto newsletter" |
| **GitHub Copilot** | Chat then "Configure this for finance news" |
| **Gemini CLI** | `gemini` then "Build me a tech newsletter" |

The AI reads `CLAUDE.md` / `AGENTS.md` / `GEMINI.md` and handles everything:
1. Asks your topic
2. Picks the right config
3. Sets up Supabase tables
4. Configures API keys
5. Runs a dry-run test
6. Sets up the weekly cron

**You don't need to read docs. The agent reads them for you.**

---

## Get Started (Manual)

<details>
<summary>Click to expand manual setup</summary>

1. Fork this repo
2. Copy `.env.example` to `.env.local`
3. Add your API keys:
   - `OPENROUTER_API_KEY` -- required ([get one free](https://openrouter.ai/keys))
   - `TAVILY_API_KEY` -- required, free tier ([tavily.com](https://tavily.com))
   - `SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY` -- required ([supabase.com](https://supabase.com))
4. Run migrations: paste `migrations/001-create-tables.sql` in Supabase SQL editor
5. Pick your topic:
   ```bash
   cp examples/configs/crypto-fintech.json config/sources.json
   ```
6. Install and test:
   ```bash
   npm install
   npm run digest:generate -- --dry-run
   ```
7. Run for real: `npm run digest:generate`
8. Automate: add secrets to GitHub, enable `.github/workflows/newsletter-weekly.yml`

</details>

---

## Pick Your Niche

Ships with **6 production-ready configs**. Fork, pick one, run.

| Config | RSS Sources | Covers |
|--------|------------|--------|
| `ai.json` (default) | TechCrunch AI, Anthropic, OpenAI, Google AI, a16z | AI tools, LLMs, agents, launches |
| `crypto-fintech.json` | CoinDesk, The Block, Decrypt, CoinTelegraph, TechCrunch Fintech | Crypto, DeFi, Web3, payments, neobanks |
| `finance.json` | Bloomberg, Seeking Alpha, Motley Fool, MarketWatch, NYT Business | Markets, IPOs, earnings, macro |
| `healthcare.json` | STAT News, Fierce Healthcare, MedCity, Healthcare IT, Rock Health | Digital health, biotech, FDA, medtech |
| `tech.json` | The New Stack, InfoQ, DZone, TechCrunch | Cloud, infra, dev tools, open source |
| `product-management.json` | Lenny's, Product Talk, SVPG, Pragmatic Engineer, ProductPlan, Intercom | PM strategy, frameworks, career |

```bash
# Switch topics in one command
cp examples/configs/healthcare.json config/sources.json
npm run digest:generate -- --dry-run
```

**Don't see your niche?** Create a custom config. Add any RSS feed, any Tavily search query, any HN keywords.

---

## How the AI Scores Articles

Every article is evaluated on 5 criteria, scored 0-10 each (total 0-50):

| Criteria | What It Measures |
|----------|-----------------|
| **Relevance** | Does this match the newsletter's topic? |
| **Signal Strength** | Is this a real development or just noise? |
| **Freshness** | Published in the last 7 days? |
| **Credibility** | Is the source trustworthy? |
| **Engagement Potential** | Would readers care about this? |

**Threshold: 30+** to be a candidate. **Top 25** make the final cut. The rest are discarded.

---

## Supported Models

Works with **any model** via [OpenRouter](https://openrouter.ai). One API key, 100+ models.

| Provider | Model | Cost/run | Best For |
|----------|-------|----------|----------|
| OpenAI | gpt-4o-mini | ~$0.006 | Best value (recommended) |
| Meta | llama-3.1-8b | ~$0.002 | Cheapest |
| Google | gemini-pro | ~$0.005 | Good balance |
| Anthropic | claude-sonnet-4-5 | ~$0.01 | Best editorial quality |
| OpenAI | gpt-4o | ~$0.02 | Premium scoring |

Change models anytime in `config/scoring.json`. Mix and match -- use a cheap model for scoring, a premium model for the editorial.

---

## What It Costs

| Frequency | gpt-4o-mini | gpt-4o | claude-sonnet |
|-----------|-------------|--------|---------------|
| Weekly | ~$0.024/mo | ~$0.08/mo | ~$0.04/mo |
| Daily | ~$0.18/mo | ~$0.60/mo | ~$0.30/mo |

**Infrastructure: $0.** Supabase free tier (500MB) + GitHub Actions free tier (2000 min/mo) + OpenRouter pay-per-use.

You could run this for a year and spend less than a single coffee.

---

## CLI Commands

```bash
# Run the full pipeline
npm run digest:generate

# Preview without saving (safe to run anytime)
npm run digest:generate -- --dry-run

# Test a single source
npm run digest:generate -- --source hackernews

# Dry run with full AI summaries
npm run digest:generate -- --summarize

# Check if all sources are responding
npm run digest:health-check

# See recent newsletters and run history
npm run digest:status
```

---

## Make It Yours

### Change the Topic
```bash
cp examples/configs/finance.json config/sources.json
```

### Change the Voice
Edit `src/curation/editorial.ts`. The default prompt is generic. Replace it with your personality, opinions, and style. **This is the single biggest lever for making your newsletter unique.**

### Add a Source
Add to `config/sources.json`:
```json
{ "name": "My Source", "url": "https://example.com/feed", "source_name": "Example" }
```

### Tune the Scoring
Edit `config/scoring.json`:
- `CANDIDATE_THRESHOLD` -- min score to be a candidate (default: 30)
- `STORIES_PER_SECTION` -- stories per section (default: 5)
- `scoring_model` / `editorial_model` -- which LLMs to use

### Add a New Source Type
1. Create `src/sources/your-source.ts`
2. Extend `BaseSource`, implement `fetchStories()`
3. Add to `getAllSources()` in `src/index.ts`
4. Test: `npm run digest:generate -- --source your-source --dry-run`

---

## Works With Every AI Coding Tool

This repo ships with instruction files for all major AI coding platforms:

| File | Platform | What It Does |
|------|----------|-------------|
| `CLAUDE.md` | Claude Code | Full conversational setup guide |
| `AGENTS.md` | Codex, Copilot, Cursor, Windsurf, Amp, Devin, Replit | Same guide, universal format |
| `GEMINI.md` | Gemini CLI | Same guide, Gemini-optimized |

Open the repo in any tool. Say "set this up for crypto." It reads the instructions and does everything.

---

## Built-In Safety

| Guardrail | What It Does |
|-----------|-------------|
| **LLM call cap** | Max 50 calls per run. Hard limit. Won't exceed. |
| **Token budget** | Max 50K tokens per run. Protects your wallet. |
| **Fault isolation** | One source failing never kills the pipeline. The rest continue. |
| **Health check** | 2+ sources down = entire run skipped. No garbage output. |
| **Deduplication** | sha256 hash of url+title. No story appears twice, ever. |
| **Rate limiting** | Exponential backoff on 429/5xx. Respects API limits. |
| **Idempotent** | Run it twice, get the same result. Safe to retry. |

---

## Project Structure

```
ai-newsletter-agent/
  src/
    sources/              6 source scrapers
      hackernews.ts         Hacker News API (keyword + score filter)
      producthunt.ts        Product Hunt GraphQL (top launches)
      github-trending.ts    GitHub Trending (by topic)
      rss.ts                RSS feeds (configured in sources.json)
      tavily.ts             Tavily Search API (query-based)
      anthropic.ts          Custom HTML scraper (template)
    curation/             AI-powered processing
      score.ts              Scores articles 0-50, 5 criteria
      summarize.ts          Headlines + summaries + "why it matters"
      editorial.ts          Weekly editorial in your voice
    db/                   Supabase operations
    utils/                Logger, rate limiter, helpers
    index.ts              Pipeline orchestrator + CLI

  config/
    sources.json          Your RSS feeds, queries, keywords
    scoring.json          Models, thresholds, limits

  examples/configs/       6 niche configs ready to use
  migrations/             Supabase schema (one SQL file)
  .github/workflows/      Weekly cron (GitHub Actions)
```

---

## Star History

If this saved you time, gave you ideas, or you just think it's cool -- drop a star. It helps others find it.

[![Star this repo](https://img.shields.io/github/stars/anmolgupta824/ai-newsletter-agent?style=for-the-badge&color=yellow)](https://github.com/anmolgupta824/ai-newsletter-agent)

---

## Contributing

Found a bug? Want to add a source type? PRs welcome.

1. Fork the repo
2. Create a branch (`git checkout -b feature/reddit-source`)
3. Make your changes
4. Test: `npm run digest:generate -- --dry-run`
5. Open a PR

---

## License

MIT -- use it however you want. Commercial use, modifications, distribution, all good.

---

<p align="center">
  <b>Built by <a href="https://theainativepm.com">The AI-Native PM</a></b>
  <br/>
  <i>Breaking down the biggest AI stories every week.</i>
  <br/><br/>
  <a href="https://theainativepm.com/digest">Read the Digest</a> | <a href="https://threads.net/@anmolgupta_05">Follow on Threads</a>
</p>


---

## CLAUDE.md

Source: https://raw.githubusercontent.com/anmolgupta824/ai-newsletter-agent/main/CLAUDE.md

# AI Newsletter Agent

You are helping the user build an automated newsletter using this codebase.

## What This Project Does

This is an AI-powered newsletter agent. It:
1. Collects 90+ articles from 6 sources (Hacker News, Product Hunt, GitHub Trending, RSS feeds, Tavily Search, custom scraper)
2. AI-scores every article on 5 criteria (relevance, signal, freshness, credibility, engagement)
3. Selects the top 25 stories (5 per section)
4. Writes AI summaries + "why it matters" for each
5. Generates a weekly editorial in the user's voice
6. Stores everything in Supabase
7. Runs weekly via GitHub Actions cron

Cost: ~$0.006/run with gpt-4o-mini via OpenRouter.

## First-Time Setup

When the user first opens this project, walk them through:

1. **Ask their topic.** "What topic do you want your newsletter to cover?" Then pick the closest config from `examples/configs/` and copy it to `config/sources.json`. Available: ai, crypto-fintech, finance, healthcare, tech, product-management. If none fit, help them create a custom config with RSS feeds for their niche.

2. **Environment setup.** Check if `.env.local` exists. If not, copy `.env.example` to `.env.local`. Then STOP and ask the user for each key one by one. Do NOT proceed until all keys are provided:
   - `OPENROUTER_API_KEY` (required) -- Ask: "Do you have an OpenRouter API key? If not, get one free at https://openrouter.ai/keys"
   - `TAVILY_API_KEY` (required) -- Ask: "Do you have a Tavily API key? Free tier at https://tavily.com gives you 1000 searches/month"
   - `SUPABASE_URL` (required) -- Ask: "What's your Supabase project URL? If you don't have one, create a free project at https://supabase.com"
   - `SUPABASE_SERVICE_ROLE_KEY` (required) -- Ask: "What's your Supabase service role key? Find it in Supabase Dashboard > Settings > API > service_role key"

   IMPORTANT: Never skip this step. Never use placeholder values. The pipeline will fail without real keys. Write each key to `.env.local` as the user provides them.

3. **Database setup.** Run `migrations/001-create-tables.sql` against their Supabase instance. Ask: "Should I run the migration now? This creates the tables needed for the newsletter."

4. **Install.** `npm install`

5. **Test.** `npm run digest:generate -- --dry-run` -- shows what the pipeline would produce without saving anything. Review the output with the user.

6. **First real run.** `npm run digest:generate` -- runs the full pipeline and saves to Supabase.

7. **Automation.** Help them set up `.github/workflows/newsletter-weekly.yml` with their repo secrets.

## Project Structure

```
src/
  sources/           -- One file per news source
    hackernews.ts       HN API: filters by keywords, min score
    producthunt.ts      PH GraphQL: today's top launches
    github-trending.ts  Scrapes trending repos by topic
    rss.ts              Fetches all RSS feeds from config
    tavily.ts           Tavily Search API: query-based discovery
    anthropic.ts        Custom HTML scraper (template for any site)
  curation/          -- AI-powered content processing
    score.ts            Scores articles 0-50 on 5 criteria
    summarize.ts        Writes headlines + summaries
    editorial.ts        Generates weekly editorial (CUSTOMIZE THIS)
  db/                -- Supabase CRUD operations
  config/            -- Runtime config loader
  types/             -- TypeScript interfaces
  utils/             -- Logger, rate limiter, helpers
  index.ts           -- Main pipeline orchestrator + CLI

config/
  sources.json       -- RSS feeds, Tavily queries, HN keywords, GitHub topics
  scoring.json       -- Model selection, thresholds, token limits

examples/configs/    -- Ready-to-use configs for 6 niches
```

## Key Commands

- `npm run digest:generate` -- Full pipeline
- `npm run digest:generate -- --dry-run` -- Preview without saving
- `npm run digest:generate -- --source hackernews` -- Single source test
- `npm run digest:generate -- --summarize` -- Dry run with full AI output
- `npm run digest:health-check` -- Ping all source APIs
- `npm run digest:status` -- Show recent newsletters

## Common Tasks

### "Change the topic"
Copy the right config: `cp examples/configs/[niche].json config/sources.json`
Available: ai, crypto-fintech, finance, healthcare, tech, product-management.

### "Add a new RSS source"
Add to `config/sources.json` in the `rss_feeds` array:
`{ "name": "Source Name", "url": "https://example.com/feed", "source_name": "Example" }`

### "Change the editorial voice"
Edit `src/curation/editorial.ts` -- the `buildEditorialPrompt()` function. This controls the personality of the weekly editorial. The default is generic -- encourage the user to make it their own.

### "Change the AI model"
Edit `config/scoring.json`:
- `scoring_model`: model for scoring + summarization (default: gpt-4o-mini)
- `editorial_model`: model for editorial (default: gpt-4o-mini)
Any model on OpenRouter works.

### "Add a new source type"
1. Create `src/sources/your-source.ts`
2. Extend `BaseSource` from `./base-source.ts`
3. Implement `fetchStories()` returning `NormalizedStory[]`
4. Add to `getAllSources()` in `src/index.ts`
5. Test: `npm run digest:generate -- --source your-source --dry-run`

### "Set up the weekly cron"
1. Push this repo to GitHub
2. Add secrets in GitHub Settings > Secrets: `OPENROUTER_API_KEY`, `TAVILY_API_KEY`, `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`
3. Enable the workflow in `.github/workflows/newsletter-weekly.yml`
4. Default schedule: Friday 6am UTC. Edit the cron expression to change.

## Guardrails

- Max 50 LLM calls per run (hard cap in config/scoring.json)
- Max 50K tokens per run
- One source failing never kills the pipeline (fault isolation)
- 2+ sources down = skip entire run
- Hash-based dedup across runs (sha256 of url+title)
- Rate limiting with exponential backoff
- Safe to run multiple times (idempotent)


---

## INSTRUCTIONS.md

Source: https://raw.githubusercontent.com/anmolgupta824/ai-newsletter-agent/main/INSTRUCTIONS.md

# Instructions for AI Agents

This file helps AI coding tools (Claude Code, Codex, Cursor, Copilot) understand and work with this codebase.

## Project Overview

AI Digest Agent collects news from 6 sources, scores them with AI, selects the top 25,
writes summaries and an editorial, and stores everything in Supabase.
Runs weekly via GitHub Actions.

## Project Structure

```
src/
├── sources/        One file per news source
│   ├── hackernews.ts
│   ├── producthunt.ts
│   ├── github-trending.ts
│   ├── rss.ts
│   ├── tavily.ts
│   └── anthropic.ts (custom HTML scraper)
├── curation/       AI-powered content processing
│   ├── client.ts      OpenRouter client (supports any LLM)
│   ├── score.ts       Score articles 0-50 on 5 criteria
│   ├── summarize.ts   Write headlines + summaries + "why it matters"
│   ├── editorial.ts   Generate weekly editorial (runner + validation)
│   └── prompt.ts      All prompts — CUSTOMIZE editorial here
├── db/
│   └── operations.ts  Supabase CRUD for digests + stories
└── index.ts        Main pipeline orchestrator

config/
├── sources.json    Which sources to scrape (user-editable)
└── scoring.json    Thresholds and limits (user-editable)

migrations/
└── 001-create-tables.sql   Supabase schema
```

## Key Commands

```bash
npm run digest:generate              # Full pipeline
npm run digest:generate -- --dry-run # Preview without saving
npm run digest:generate -- --source hackernews  # Single source test
npm run digest:health-check          # Ping all source APIs
npm run digest:status                # Show recent digests
```

## How to Add a New Source

1. Create `src/sources/your-source.ts`
2. Export a class extending `BaseSource`:
   ```typescript
   import { BaseSource } from './base-source.js';
   import { NormalizedStory } from '../types/index.js';

   export class YourSource extends BaseSource {
     readonly sourceName = 'your-source' as const;

     protected async fetchStories(): Promise<NormalizedStory[]> {
       // fetch and return normalized stories
     }

     async healthCheck(): Promise<boolean> {
       // return true if source is reachable
     }
   }
   ```
3. Add to `getAllSources()` in `src/index.ts`
4. Test: `npm run digest:generate -- --source your-source --dry-run`

## How to Customize the Editorial

1. Open `src/curation/prompt.ts`
2. Replace `buildEditorialPrompt()` with your own voice and personality
3. Choose your model in `config/scoring.json` (`editorial_model` field)
4. Test: `npm run digest:generate -- --dry-run`

## How to Change Scoring

1. Open `config/scoring.json`
2. Key settings:
   - `CANDIDATE_THRESHOLD`: min score to enter candidate pool (default: 30)
   - `STORIES_PER_SECTION`: stories per section (default: 5)
   - `scoring_model`: which LLM scores articles
   - `editorial_model`: which LLM writes editorial
3. Test: `npm run digest:generate -- --dry-run`

## Environment Variables

| Variable | Required | How to Get |
|----------|----------|------------|
| `OPENROUTER_API_KEY` | Yes | openrouter.ai/keys |
| `TAVILY_API_KEY` | Yes | tavily.com (free: 1000/month) |
| `SUPABASE_URL` | Yes | supabase.com or local `supabase start` |
| `SUPABASE_SERVICE_ROLE_KEY` | Yes | supabase.com or local `supabase start` |
| `PRODUCT_HUNT_API_KEY` | Optional | producthunt.com/v2/oauth/applications |
| `GITHUB_TOKEN` | Optional | github.com/settings/tokens |

## Pipeline Flow

```
1. Health check (ping all sources)
2. Collect stories from all sources (parallel, fault-isolated)
3. Dedup (hash URL+title, skip duplicates from previous runs)
4. AI Score (rate each article 0-50)
5. Select top 25 (5 per section by category)
6. AI Summarize (headline + summary + "why it matters")
7. Fetch OG images (parse meta tags from article URLs)
8. AI Editorial (your chosen model writes the weekly take)
9. Store to Supabase (digests + digest_stories tables)
10. Mark as published
```

## Guardrails

- Max 50K tokens per run (TOKEN_CAP in config)
- One source failing never kills the pipeline (fault isolation)
- Health check: 2+ sources down = skip entire run
- Dedup: sha256(url+title) prevents duplicate stories
- Rate limiting: exponential backoff on 429/5xx responses
- Retry: 2-3 attempts per source, then skip


---

## docs/flow-diagram.md

Source: https://raw.githubusercontent.com/anmolgupta824/ai-newsletter-agent/main/docs/flow-diagram.md

# AI Digest Agent — Architecture

## Pipeline Flow

```
┌─────────────────────────────────────────────────────────┐
│                   AI DIGEST AGENT                        │
│                                                         │
│  ┌──────────┐   ┌──────────┐   ┌──────────┐           │
│  │ Hacker   │   │ Product  │   │ GitHub   │           │
│  │ News API │   │ Hunt API │   │ Trending │           │
│  └────┬─────┘   └────┬─────┘   └────┬─────┘           │
│       │              │              │                   │
│  ┌────┴─────┐   ┌────┴─────┐   ┌───┴──────┐           │
│  │ RSS      │   │ Tavily   │   │ Custom   │           │
│  │ Feeds    │   │ Search   │   │ Scraper  │           │
│  └────┬─────┘   └────┬─────┘   └────┬─────┘           │
│       │              │              │                   │
│       └──────────────┼──────────────┘                   │
│                      ▼                                  │
│            ┌─────────────────┐                          │
│            │  90+ raw stories │                         │
│            └────────┬────────┘                          │
│                     ▼                                   │
│            ┌─────────────────┐                          │
│            │  DEDUP          │  hash-based               │
│            │  sha256(url+    │  no AI needed             │
│            │  title)[:16]    │                           │
│            └────────┬────────┘                          │
│                     ▼                                   │
│            ┌─────────────────┐                          │
│            │  🤖 AI SCORING  │  gpt-4o-mini             │
│            │  5 criteria     │  via OpenRouter           │
│            │  0-50 score     │  ~30 calls                │
│            └────────┬────────┘                          │
│                     ▼                                   │
│            ┌─────────────────┐                          │
│            │  Top 25 selected │                         │
│            │  5 per section   │                         │
│            └────────┬────────┘                          │
│                     ▼                                   │
│            ┌─────────────────┐                          │
│            │  🤖 SUMMARIZE   │  gpt-4o-mini             │
│            │  headline       │  via OpenRouter           │
│            │  summary        │  ~10 calls                │
│            │  why it matters │                           │
│            └────────┬────────┘                          │
│                     ▼                                   │
│            ┌─────────────────┐                          │
│            │  🤖 EDITORIAL   │  your chosen model        │
│            │  weekly take    │  via OpenRouter            │
│            │  600-1000 words │  1 call                    │
│            └────────┬────────┘                          │
│                     ▼                                   │
│            ┌─────────────────┐                          │
│            │  💾 SUPABASE    │  stores everything        │
│            │  digests table  │                           │
│            │  stories table  │                           │
│            └────────┬────────┘                          │
│                     ▼                                   │
│            ┌─────────────────┐                          │
│            │  ✅ PUBLISHED   │                          │
│            └─────────────────┘                          │
│                                                         │
│  🤖 = AI used (3 steps, ~41 calls, ~$0.006/run)        │
└─────────────────────────────────────────────────────────┘
```

## Where AI Is Used

| Step | Model | Calls | Purpose |
|------|-------|-------|---------|
| Scoring | gpt-4o-mini | ~30 | Rate 90+ articles on 5 criteria (0-50) |
| Summarization | gpt-4o-mini | ~10 | Write headline + summary + "why it matters" |
| Editorial | configurable | 1 | Write the weekly take |

**Total: ~41 calls, ~$0.006/run**

## Data Flow

```
Source APIs → NormalizedStory[] → ScoredStory[] → Summarized → digest_stories table
                                                             → digests table (editorial)
```

## Fault Isolation

Each source runs independently. If one fails, the pipeline continues with the remaining 5.
If 3+ sources fail, the run is skipped and logged.

## Dedup

Stories are deduped by `sha256(normalized_url + "|" + title.toLowerCase())[:16]`.
Same story from different sources → kept once. Same story in different weeks → kept both.


---

## config/scoring.json

Source: https://raw.githubusercontent.com/anmolgupta824/ai-newsletter-agent/main/config/scoring.json

{
  "CANDIDATE_THRESHOLD": 30,
  "STORIES_PER_SECTION": 5,
  "MAX_TO_SUMMARIZE": 25,
  "TOKEN_CAP": 50000,
  "scoring_model": "openai/gpt-4o-mini",
  "editorial_model": "openai/gpt-4o-mini",
  "CATEGORY_HINTS": {
    "top_story": ["major release", "announced", "launches", "raises", "breakthrough", "acquired", "ipo", "partnership", "banned", "regulation"],
    "launch": ["released", "launches", "introduces", "ships", "now available", "open source", "github", "v2", "v3", "beta", "alpha"],
    "deep_dive": ["analysis", "framework", "strategy", "research", "study", "report", "insights", "lessons", "playbook", "guide"],
    "stat": ["%", "percent", "million", "billion", "grew", "surpassed", "reached", "hit", "$", "revenue", "users", "growth"]
  }
}


---

## config/sources.json

Source: https://raw.githubusercontent.com/anmolgupta824/ai-newsletter-agent/main/config/sources.json

{
  "topic": "AI & Machine Learning",
  "audience": "engineers, PMs, founders, and indie hackers who build with AI",
  "rss_feeds": [
    {
      "name": "TechCrunch AI",
      "url": "https://techcrunch.com/category/artificial-intelligence/feed/",
      "source_name": "TechCrunch"
    },
    {
      "name": "Anthropic",
      "url": "https://www.anthropic.com/news/rss.xml",
      "source_name": "Anthropic"
    },
    {
      "name": "OpenAI",
      "url": "https://openai.com/news/rss.xml",
      "source_name": "OpenAI"
    },
    {
      "name": "Google AI",
      "url": "https://blog.google/technology/ai/rss/",
      "source_name": "Google AI Blog"
    },
    {
      "name": "Lenny's Newsletter",
      "url": "https://www.lennysnewsletter.com/feed",
      "source_name": "Lenny's Newsletter"
    },
    {
      "name": "Product Talk",
      "url": "https://www.producttalk.org/feed/",
      "source_name": "Product Talk"
    },
    {
      "name": "Mind the Product",
      "url": "https://www.mindtheproduct.com/feed/",
      "source_name": "Mind the Product"
    },
    {
      "name": "a16z",
      "url": "https://a16z.com/feed/",
      "source_name": "a16z"
    },
    {
      "name": "The Pragmatic Engineer",
      "url": "https://newsletter.pragmaticengineer.com/feed",
      "source_name": "The Pragmatic Engineer"
    }
  ],
  "tavily_queries": [
    "AI tools product launch 2026",
    "LLM agent framework release",
    "AI product management trends",
    "generative AI startup launch",
    "AI market share statistics 2026",
    "AI adoption rate survey data 2026"
  ],
  "hackernews": {
    "min_score": 50,
    "max_stories": 100,
    "keywords": [
      "ai", "artificial intelligence", "llm", "gpt", "claude", "gemini",
      "mistral", "agent", "openai", "anthropic", "deepmind", "machine learning",
      "neural", "langchain", "rag", "vector", "embedding", "fine-tun",
      "inference", "diffusion", "stable diffusion", "multimodal", "copilot",
      "cursor", "devin", "sora", "runway", "midjourney", "perplexity"
    ]
  },
  "github": {
    "topics": ["ai", "llm", "agents", "langchain", "rag", "openai", "anthropic"],
    "min_stars": 100,
    "max_repos": 20
  }
}


---

## src/curation/prompt.ts

Source: https://raw.githubusercontent.com/anmolgupta824/ai-newsletter-agent/main/src/curation/prompt.ts

import { NormalizedStory } from '../types/index.js';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Load topic and audience from config/sources.json.
 * These drive ALL prompts — change the config, change the newsletter.
 */
function getNewsletterConfig(): { topic: string; audience: string } {
  try {
    const config = JSON.parse(readFileSync(join(__dirname, '../../config/sources.json'), 'utf-8'));
    return {
      topic: config.topic ?? 'Technology',
      audience: config.audience ?? 'tech professionals and enthusiasts',
    };
  } catch {
    return { topic: 'Technology', audience: 'tech professionals and enthusiasts' };
  }
}

/**
 * Build the batch scoring prompt.
 * Sends all stories in one call — returns structured JSON scores.
 */
export function buildScoringPrompt(stories: NormalizedStory[]): string {
  const { topic, audience } = getNewsletterConfig();

  const storyList = stories.map((s, i) => ({
    index: i,
    title: s.title,
    url: s.url,
    source: s.source_name,
    engagement: s.engagement_stats,
    published: s.published_at.slice(0, 10),
    snippet: s.raw_summary?.slice(0, 150) ?? '',
  }));

  return `You are the editor of a weekly ${topic} newsletter for ${audience}.

Score each article for inclusion in this week's newsletter.

## Scoring criteria (each 0-10, total 0-50):
1. **Relevance** — Is it directly about ${topic}? (core topic = 10, tangential = 3, unrelated = 0)
2. **Signal** — Is it actionable? Can a reader DO something with this? (launch = high, opinion piece = low)
3. **Freshness** — Published this week? (7 days = 10, older = lower)
4. **Credibility** — Known source, official blog, or well-sourced? (major publication = 10, random blog = 3)
5. **Engagement** — Community-validated? (HN 100+ points, PH 200+ upvotes = high)

## Category assignment (pick one):
- **top_story** — A single concrete event: a major product launch, funding round, acquisition, or breakthrough. Must be a specific action by a specific company. NOT a listicle, ranking, or trend piece.
- **launch** — New tool, open-source repo, product update, SDK release, API launch
- **deep_dive** — Analysis, insights, frameworks, research findings, expert perspectives relevant to ${topic}
- **stat** — Quantitative insight: growth stats, survey data, market numbers, benchmark results

## Threshold: Score 30+ enters candidate pool. Score 35+ = pre-selected.

## Stories to score:
${JSON.stringify(storyList, null, 2)}

## Response format (JSON array, one entry per story, same order as input):
[
  {
    "index": 0,
    "relevance": 9,
    "signal": 8,
    "freshness": 10,
    "credibility": 9,
    "engagement": 7,
    "total": 43,
    "category": "launch"
  }
]

Return ONLY the JSON array. No explanation.`;
}

/**
 * Build the summarize prompt for a single story.
 */
export function buildSummarizePrompt(story: NormalizedStory, category: string): string {
  const { topic, audience } = getNewsletterConfig();

  return `You are the editor of a weekly ${topic} newsletter for ${audience}.

Write a newsletter entry for this ${category} story.

## Story:
Title: ${story.title}
Source: ${story.source_name}
URL: ${story.url}
Snippet: ${story.raw_summary?.slice(0, 500) ?? '(no snippet)'}
Engagement: ${JSON.stringify(story.engagement_stats)}

## Write:
1. **Headline** — max 10 words, punchy, specific. Not the original title — rewrite it.

2. **Summary** — 2-3 sentences. What launched? What changed? What's the number?

3. **Why it matters** — 1-2 sentences. Be specific and opinionated.
   - Name a specific company, number, or action — no generic claims
   - Write like a smart friend texting you, not a press release

4. **Category** — confirm: ${category} (change if wrong)

## Response format (JSON):
{
  "headline": "...",
  "summary": "...",
  "why_it_matters": "...",
  "category": "${category}"
}

Return ONLY the JSON. No explanation.`;
}

/**
 * Build the editorial prompt.
 *
 * THIS IS A PLACEHOLDER — replace it with your own voice and personality.
 *
 * The editorial is the most important part of your newsletter. It's what makes
 * readers feel like they're getting YOUR take, not just a list of links.
 *
 * See examples/sample-output.md for what a tuned editorial looks like.
 * See docs/flow-diagram.md for where this fits in the pipeline.
 *
 * Tips for writing your editorial prompt:
 * - Define a persona with strong opinions and a specific audience
 * - Give it a required section structure (headlines, bullets, etc.)
 * - Include tone examples (good vs bad openings, good vs bad analysis)
 * - Add a few-shot example of the exact quality you want
 * - Specify word count (800-1200 words works well)
 *
 * The included prompt below is intentionally minimal.
 * It works, but it won't have YOUR voice. Customize it.
 */
export function buildEditorialPrompt(
  selectedStories: Array<{
    headline: string;
    summary: string;
    why_it_matters: string | null;
    category: string;
    source_name: string;
    og_image_url: string | null;
    ai_score: number | null;
    url: string;
  }>,
  allCandidates?: Array<{
    headline: string;
    category: string;
    source_name: string;
    ai_score: number | null;
    url: string;
  }>,
): { system: string; user: string } {
  const { topic, audience } = getNewsletterConfig();

  const storyList = selectedStories.map((s, i) => `
[${i}] ${s.headline}
Source: ${s.source_name} | Score: ${s.ai_score ?? 0}/50 | Category: ${s.category}
Summary: ${s.summary}
Why it matters: ${s.why_it_matters ?? ''}
`).join('\n---\n');

  const system = `You are the editor of a weekly ${topic} newsletter.
Your readers are ${audience}.
Write in a clear, opinionated voice. Be specific. Use real numbers and company names.
Short paragraphs. Strong opinions. No filler.

TODO: Replace this prompt with your own voice and personality.
See src/curation/prompt.ts for instructions.`;

  const user = `Here are this week's top ${topic} stories:

${storyList}

Write a weekly editorial (600-1000 words) covering the most important stories.

Structure:
### The Big One
The single most important story. What happened, why it matters, what readers should do.

### What Launched
Bullet list of notable launches this week.
- **Product name** — what it does in <10 words [story_id: n]

### Three Signals
Three forward-looking observations based on this week's stories.
> **Bold signal.** 1 sentence max.

### Final Note
2-3 sentences. Your closing thought for the week.

### Joke of the Week
One short ${topic}-related joke.
> "The joke."
> — Your Newsletter Team

Be specific. Name companies and numbers. No generic takes.`;

  return { system, user };
}


---

## src/curation/score.ts

Source: https://raw.githubusercontent.com/anmolgupta824/ai-newsletter-agent/main/src/curation/score.ts

import { getOpenRouterClient, CURATION_MODELS } from './client.js';
import { buildScoringPrompt } from './prompt.js';
import { NormalizedStory, ScoredStory, StoryCategory } from '../types/index.js';
import { SCORING } from '../config/scoring.js';
import { logger } from '../utils/logger.js';
import { sleep } from '../utils/rate-limiter.js';

const MAX_RETRIES = 3;
const RETRY_WAIT_MS = 15_000;

interface ScoreResult {
  index: number;
  relevance: number;
  signal: number;
  freshness: number;
  credibility: number;
  engagement: number;
  total: number;
  category: StoryCategory;
}

interface TokenUsage {
  totalTokensUsed: number;
  capReached: boolean;
}

/**
 * Score all stories in one batch AI call.
 * Returns ScoredStory[] with scores populated.
 * Stories below CANDIDATE_THRESHOLD are filtered out.
 */
export async function scoreStories(
  stories: NormalizedStory[],
  tokenUsage: TokenUsage
): Promise<ScoredStory[]> {
  if (stories.length === 0) return [];

  if (tokenUsage.totalTokensUsed >= SCORING.TOKEN_CAP) {
    logger.warn('Token cap reached before scoring', { used: tokenUsage.totalTokensUsed });
    return [];
  }

  logger.info(`Scoring ${stories.length} stories`);

  const client = getOpenRouterClient();
  const prompt = buildScoringPrompt(stories);
  let scoreResults: ScoreResult[] = [];
  let lastError: Error | null = null;

  for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
    for (const model of CURATION_MODELS) {
      try {
        const response = await client.chat.completions.create({
          model,
          max_tokens: 8000,  // 92 stories × ~80 tokens/score = ~7400 tokens needed
          messages: [{ role: 'user', content: prompt }],
        });

        // Track token usage
        const tokens = response.usage?.total_tokens ?? 0;
        tokenUsage.totalTokensUsed += tokens;
        logger.debug('Scoring tokens used', { tokens, total: tokenUsage.totalTokensUsed, model });

        if (tokenUsage.totalTokensUsed >= SCORING.TOKEN_CAP) {
          logger.warn('Token cap reached during scoring', {
            used: tokenUsage.totalTokensUsed,
            cap: SCORING.TOKEN_CAP,
          });
          tokenUsage.capReached = true;
        }

        const content = response.choices[0]?.message?.content?.trim() ?? '';
        scoreResults = parseScoreResults(content);

        if (scoreResults.length > 0) {
          logger.info(`Scored ${scoreResults.length} stories`, { model });
          break; // Success — stop trying models
        }
      } catch (err) {
        lastError = err instanceof Error ? err : new Error(String(err));

        // Rate limited — wait and retry
        if (String(err).includes('429')) {
          logger.warn('Rate limited, waiting 60s');
          await sleep(RETRY_WAIT_MS * 4);
        }
      }
    }
    if (scoreResults.length > 0) break;
    if (attempt < MAX_RETRIES - 1) await sleep(RETRY_WAIT_MS);
  }

  if (scoreResults.length === 0) {
    logger.error('Scoring failed after all retries', { error: lastError?.message });
    // Fall back: assign default scores so pipeline continues
    return stories.map(story => ({
      ...story,
      ai_score: 0,
      score_breakdown: { relevance: 0, signal: 0, freshness: 0, credibility: 0, engagement: 0 },
      category: 'launch' as StoryCategory,
      ai_selected: false,
    }));
  }

  // Merge scores back into stories
  const scored: ScoredStory[] = [];
  for (const result of scoreResults) {
    const story = stories[result.index];
    if (!story) continue;
    if (result.total < SCORING.CANDIDATE_THRESHOLD) continue; // Below threshold — skip

    scored.push({
      ...story,
      ai_score: result.total,
      score_breakdown: {
        relevance: result.relevance,
        signal: result.signal,
        freshness: result.freshness,
        credibility: result.credibility,
        engagement: result.engagement,
      },
      category: result.category,
      ai_selected: false, // overwritten below by per-section auto-selection
    });
  }

  logger.info(`${scored.length} stories above threshold (${SCORING.CANDIDATE_THRESHOLD}+)`, {
    total_scored: scoreResults.length,
    ai_selected: scored.filter(s => s.ai_selected).length,
  });

  // Sort by score descending
  scored.sort((a, b) => b.ai_score - a.ai_score);

  const N = SCORING.STORIES_PER_SECTION;
  const selected = new Set<number>();
  const countByCategory: Record<string, number> = {};

  // Pass 1 — fill top_story with AI-assigned top_story stories (respects AI categorization)
  for (let i = 0; i < scored.length && (countByCategory['top_story'] ?? 0) < N; i++) {
    if (scored[i].category === 'top_story') {
      selected.add(i);
      countByCategory['top_story'] = (countByCategory['top_story'] ?? 0) + 1;
    }
  }

  // Pass 2 — fill launch, pm_corner, stat (top N each, skip already-selected)
  for (let i = 0; i < scored.length; i++) {
    if (selected.has(i)) continue;
    const cat = scored[i].category;
    if (cat === 'top_story') continue; // Already handled above
    const count = countByCategory[cat] ?? 0;
    if (count < N) {
      selected.add(i);
      countByCategory[cat] = count + 1;
    }
  }

  const result = scored.map((s, i) => ({ ...s, ai_selected: selected.has(i) }));

  logger.info(`Auto-selected ${selected.size} stories`, { by_category: countByCategory });

  return result;
}

function parseScoreResults(content: string): ScoreResult[] {
  try {
    // Strip markdown code blocks if present
    const json = content.replace(/^```(?:json)?\n?/m, '').replace(/\n?```$/m, '').trim();
    const parsed = JSON.parse(json);

    if (!Array.isArray(parsed)) return [];

    const cap = (n: number, max: number) => Math.min(Math.max(Math.round(n), 0), max);

    return parsed.filter(item =>
      typeof item.index === 'number' &&
      typeof item.total === 'number' &&
      typeof item.category === 'string'
    ).map(item => {
      const relevance  = cap(Number(item.relevance)  || 0, 10);
      const signal     = cap(Number(item.signal)     || 0, 10);
      const freshness  = cap(Number(item.freshness)  || 0, 10);
      const credibility = cap(Number(item.credibility) || 0, 10);
      const engagement = cap(Number(item.engagement) || 0, 10);
      // Recompute total from capped criteria (don't trust AI's total)
      const total = relevance + signal + freshness + credibility + engagement;
      return {
        index: item.index,
        relevance, signal, freshness, credibility, engagement, total,
        category: (item.category as StoryCategory) || 'launch',
      };
    });
  } catch (err) {
    logger.error('Failed to parse score results', { content: content.slice(0, 200), error: String(err) });
    return [];
  }
}


---

## src/curation/editorial.ts

Source: https://raw.githubusercontent.com/anmolgupta824/ai-newsletter-agent/main/src/curation/editorial.ts

import { getOpenRouterClient } from './client.js';
import { buildEditorialPrompt } from './prompt.js';
import { ScoredStory } from '../types/index.js';
import { logger } from '../utils/logger.js';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function getScoringConfig(): { editorial_model: string } {
  try {
    return JSON.parse(readFileSync(join(__dirname, '../../config/scoring.json'), 'utf-8'));
  } catch {
    return { editorial_model: 'openai/gpt-4o-mini' };
  }
}

// --- Quality validation ---

function validateEditorial(text: string): { valid: boolean; reasons: string[] } {
  const reasons: string[] = [];

  // Word count
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  if (wordCount < 400) reasons.push(`Too short: ${wordCount} words (min 400)`);
  if (wordCount > 1500) reasons.push(`Too long: ${wordCount} words (max 1500)`);

  // Required sections (matches placeholder prompt structure)
  for (const emoji of ['🔥', '🚀', '👀', '💬', '😂']) {
    if (!text.includes(emoji)) reasons.push(`Missing section: ${emoji}`);
  }

  // Bad openings (check first 120 chars)
  const firstLine = text.slice(0, 120).toLowerCase();
  for (const bad of ['this week', 'welcome', 'in this edition']) {
    if (firstLine.includes(bad)) reasons.push(`Bad opening: starts with "${bad}"`);
  }

  return { valid: reasons.length === 0, reasons };
}

// --- Main ---

/**
 * Generate the weekly editorial for a digest issue.
 * Uses the model configured in config/scoring.json (editorial_model field).
 */
export async function generateEditorial(
  stories: ScoredStory[],
): Promise<string | null> {
  const selected = stories.filter(s => s.ai_selected);
  if (selected.length === 0) {
    logger.warn('No ai_selected stories — skipping editorial generation');
    return null;
  }

  const storyInputs = selected.map(s => ({
    headline: s.headline ?? s.title,
    summary: s.summary ?? s.raw_summary ?? '',
    why_it_matters: s.why_it_matters ?? null,
    category: s.category,
    source_name: s.source_name,
    og_image_url: s.og_image_url ?? null,
    ai_score: s.ai_score ?? null,
    url: s.url ?? '',
  }));

  const allCandidates = stories
    .filter(s => (s.ai_score ?? 0) >= 30)
    .map(s => ({
      headline: s.headline ?? s.title,
      category: s.category,
      source_name: s.source_name,
      ai_score: s.ai_score ?? null,
      url: s.url ?? '',
    }));

  const { editorial_model: modelId } = getScoringConfig();
  const client = getOpenRouterClient();
  const { system, user } = buildEditorialPrompt(storyInputs, allCandidates);

  const callLLM = async (messages: Array<{ role: string; content: string }>) => {
    const response = await client.chat.completions.create({
      model: modelId,
      max_tokens: 2000,
      temperature: 0.8,
      messages: messages as Parameters<typeof client.chat.completions.create>[0]['messages'],
    });
    return response.choices[0]?.message?.content?.trim() ?? '';
  };

  try {
    const editorial = await callLLM([
      { role: 'system', content: system },
      { role: 'user', content: user },
    ]);

    if (editorial.length < 200) {
      logger.warn('Editorial too short', { model: modelId, length: editorial.length });
      return null;
    }

    logger.info('Editorial generated', { model: modelId, length: editorial.length });

    // Validate quality — retry once if it fails
    const validation = validateEditorial(editorial);
    if (!validation.valid) {
      logger.warn('Editorial failed quality checks — retrying once', { reasons: validation.reasons });

      const retryPrompt = `Your editorial failed quality checks:\n${validation.reasons.map(r => `- ${r}`).join('\n')}\n\nRewrite it. Follow the required section structure exactly.`;
      const retried = await callLLM([
        { role: 'system', content: system },
        { role: 'user', content: user },
        { role: 'assistant', content: editorial },
        { role: 'user', content: retryPrompt },
      ]);

      if (retried.length > 200) {
        logger.info('Retry editorial accepted', { model: modelId, length: retried.length });
        return retried;
      }
    }

    return editorial;
  } catch (err) {
    logger.warn('Editorial generation failed', { model: modelId, error: String(err) });
    return null;
  }
}


---

## src/curation/summarize.ts

Source: https://raw.githubusercontent.com/anmolgupta824/ai-newsletter-agent/main/src/curation/summarize.ts

import { getOpenRouterClient, CURATION_MODELS } from './client.js';
import { buildSummarizePrompt } from './prompt.js';
import { ScoredStory, StoryCategory } from '../types/index.js';
import { SCORING } from '../config/scoring.js';
import { logger } from '../utils/logger.js';
import { sleep } from '../utils/rate-limiter.js';

const MAX_RETRIES = 2;
const DELAY_BETWEEN_CALLS_MS = 300;

interface TokenUsage {
  totalTokensUsed: number;
  capReached: boolean;
}

interface SummarizeResult {
  headline: string;
  summary: string;
  why_it_matters: string;
  category: StoryCategory;
}

/**
 * Write AI summaries for scored stories.
 * Only processes top N stories (cost control).
 * Stories that fail summarization keep their original title/snippet.
 */
export async function summarizeStories(
  stories: ScoredStory[],
  tokenUsage: TokenUsage
): Promise<ScoredStory[]> {
  if (stories.length === 0) return [];

  // Only summarize top N (sorted by score already)
  const toSummarize = stories.slice(0, SCORING.MAX_TO_SUMMARIZE);
  const noSummarize = stories.slice(SCORING.MAX_TO_SUMMARIZE);

  logger.info(`Summarizing ${toSummarize.length} stories`);

  const results: ScoredStory[] = [];

  for (const story of toSummarize) {
    if (tokenUsage.totalTokensUsed >= SCORING.TOKEN_CAP) {
      logger.warn('Token cap reached during summarization — stopping', {
        used: tokenUsage.totalTokensUsed,
        remaining: toSummarize.length - results.length,
      });
      tokenUsage.capReached = true;
      // Push remaining stories without summaries
      results.push(...toSummarize.slice(results.length));
      break;
    }

    const summarized = await summarizeSingle(story, tokenUsage);
    results.push(summarized);

    // Small delay between calls
    await sleep(DELAY_BETWEEN_CALLS_MS);
  }

  return [...results, ...noSummarize];
}

async function summarizeSingle(
  story: ScoredStory,
  tokenUsage: TokenUsage
): Promise<ScoredStory> {
  const client = getOpenRouterClient();
  const prompt = buildSummarizePrompt(story, story.category);

  for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
    for (const model of CURATION_MODELS) {
      try {
        const response = await client.chat.completions.create({
          model,
          max_tokens: 512,
          messages: [{ role: 'user', content: prompt }],
        });

        const tokens = response.usage?.total_tokens ?? 0;
        tokenUsage.totalTokensUsed += tokens;
        logger.debug('Summarize tokens', { tokens, total: tokenUsage.totalTokensUsed, model, title: story.title.slice(0, 50) });

        const content = response.choices[0]?.message?.content?.trim() ?? '';
        const result = parseSummarizeResult(content);

        if (result) {
          return {
            ...story,
            headline: result.headline,
            summary: result.summary,
            why_it_matters: result.why_it_matters,
            category: result.category,
          };
        }
      } catch (err) {
        if (String(err).includes('429')) {
          logger.warn('Rate limited during summarize, waiting');
          await sleep(60_000);
        }
        // Try next model
      }
    }
    if (attempt < MAX_RETRIES - 1) await sleep(2_000);
  }

  // Fallback: use original title/snippet
  logger.warn('Summarize failed, using original', { title: story.title.slice(0, 50) });
  return {
    ...story,
    headline: story.title,
    summary: story.raw_summary ?? story.title,
    why_it_matters: undefined,
  };
}

function parseSummarizeResult(content: string): SummarizeResult | null {
  try {
    const json = content.replace(/^```(?:json)?\n?/m, '').replace(/\n?```$/m, '').trim();
    const parsed = JSON.parse(json);

    if (
      typeof parsed.headline === 'string' &&
      typeof parsed.summary === 'string' &&
      typeof parsed.why_it_matters === 'string'
    ) {
      return {
        headline: parsed.headline,
        summary: parsed.summary,
        why_it_matters: parsed.why_it_matters,
        category: (parsed.category as StoryCategory) ?? 'launch',
      };
    }
    return null;
  } catch {
    return null;
  }
}


---

## .github/workflows/newsletter-weekly.yml

Source: https://raw.githubusercontent.com/anmolgupta824/ai-newsletter-agent/main/.github/workflows/newsletter-weekly.yml

# AI Newsletter Agent — Weekly generation cron
# Runs Thursday 10pm UTC (adjust to your timezone)
#
# IMPORTANT: This workflow is DISABLED by default.
# To enable it after you've configured your secrets:
#   1. Uncomment the "schedule" lines below
#   2. Commit and push
#
# Required secrets (GitHub → Settings → Secrets → Actions):
#   SUPABASE_URL               Your Supabase project URL
#   SUPABASE_SERVICE_ROLE_KEY  Service role key (NOT the anon key)
#   OPENROUTER_API_KEY         OpenRouter API key
#   TAVILY_API_KEY             Tavily search API key
#
# Optional secrets:
#   PRODUCT_HUNT_API_KEY       Product Hunt OAuth key
#   GITHUB_TOKEN               GitHub personal access token
#   SITE_URL                   Your site URL (for OpenRouter headers)
#   DIGEST_NAME                Your digest name
#
# Manual trigger: Actions tab → "AI Newsletter: Weekly Pipeline" → Run workflow

name: AI Newsletter — Weekly Pipeline

on:
  # schedule:
  #   - cron: '0 22 * * 4'  # Thursday 10pm UTC — uncomment and change to your preferred schedule
  workflow_dispatch:        # Manual trigger from GitHub Actions UI

jobs:
  generate:
    name: Generate and publish weekly newsletter
    runs-on: ubuntu-latest
    timeout-minutes: 30

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Health check — verify sources are up
        run: npx tsx src/index.ts --health-check || true
        env:
          SUPABASE_URL: ${{ secrets.SUPABASE_URL }}
          SUPABASE_SERVICE_ROLE_KEY: ${{ secrets.SUPABASE_SERVICE_ROLE_KEY }}
          OPENROUTER_API_KEY: ${{ secrets.OPENROUTER_API_KEY }}
          TAVILY_API_KEY: ${{ secrets.TAVILY_API_KEY }}

      - name: Generate newsletter
        run: npx tsx src/index.ts
        env:
          SUPABASE_URL: ${{ secrets.SUPABASE_URL }}
          SUPABASE_SERVICE_ROLE_KEY: ${{ secrets.SUPABASE_SERVICE_ROLE_KEY }}
          OPENROUTER_API_KEY: ${{ secrets.OPENROUTER_API_KEY }}
          TAVILY_API_KEY: ${{ secrets.TAVILY_API_KEY }}
          PRODUCT_HUNT_API_KEY: ${{ secrets.PRODUCT_HUNT_API_KEY }}
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          SITE_URL: ${{ secrets.SITE_URL }}
          DIGEST_NAME: ${{ secrets.DIGEST_NAME }}

      - name: Done
        if: always()
        run: echo "Newsletter pipeline complete."


---

## examples/sample-output.md

Source: https://raw.githubusercontent.com/anmolgupta824/ai-newsletter-agent/main/examples/sample-output.md

# Sample Output

This is an example of what the pipeline produces after a full run with a tuned editorial prompt.
The pipeline collects 90+ articles, scores them, selects the top 25, and writes the editorial.

---

## Dry Run Preview (--dry-run)

```
============================================================
  AI Digest Agent — Dry Run Preview
============================================================

  Sources:
    OK    hackernews  34 stories  (1.2s)
    OK    producthunt  18 stories  (2.1s)
    OK    github  20 stories  (0.8s)
    OK    rss  22 stories  (3.4s)
    OK    tavily  12 stories  (4.2s)
    OK    anthropic  8 stories  (1.1s)

  Candidates (score >= 30): 31
  Auto-selected (top 5/section): 20

  Top 10 stories:
    ⭐ [47/50] [top_story  ] OpenAI acquires Rockset for real-time analytics
    ⭐ [45/50] [launch     ] Cursor hits $500M ARR, announces enterprise tier
    ⭐ [43/50] [stat       ] Anthropic: Claude usage up 3x in 90 days
    ⭐ [42/50] [pm_corner  ] Lenny's Survey: Top PMs spend 40% on discovery
    ⭐ [41/50] [launch     ] Microsoft AutoGen 2.0: multi-agent framework
    ⭐ [40/50] [top_story  ] Google Gemini 1.5 Pro context: 1M tokens, free tier
    ⭐ [38/50] [launch     ] Firecrawl v2: LLM-ready web scraping API
    ⭐ [37/50] [stat       ] GitHub Copilot: 1.8M paid users, $100M ARR
      [36/50] [launch     ] LangChain releases LangGraph Studio
      [35/50] [pm_corner  ] How Figma defines PM levels: complete breakdown

============================================================
```

---

## Editorial Output (sample — with a tuned prompt)

The editorial your pipeline generates depends entirely on the prompt in `src/curation/editorial.ts`.
The included placeholder prompt produces a basic but functional editorial.

A well-tuned editorial looks like this:

---

### 🔥 The Big One

**Everyone's making AI startup lists. Nobody's making AI startups.**

Four separate "top generative AI startups" lists dropped this week. GreyB picked 10, Seedtable found 69, eWeek crowned 75. Meanwhile, the one company actually *shipping* something — **OpenCode** — got less coverage than any of them.

- **What happened** — Four major ranking lists published in 7 days. Zero of the "top" companies announced a meaningful product this week.
- **Why now** — We're in the hype cycle peak. Analysts need content. Startups need PR. Lists are the path of least resistance for both.
- **What this means for you** — If your go-to-market strategy involves getting on lists, you're optimizing for the wrong metric. Shipping beats ranking.

---

### 🚀 What Launched

- **OpenCode** open-source coding agent, gaining GitHub velocity fast (HN, 892 pts)
- **AWS Generative AI Accelerator** 8-week hybrid program for agentic AI startups
- **Firecrawl v2** web scraping API with LLM-ready output
- **AutoGen 2.0** Microsoft multi-agent framework, now with visual workflow builder

---

### 👀 Three Signals

→ **Cursor's $500M ARR is a benchmark, not a ceiling.** If you're building dev tooling without a paid tier, this is your data point.

→ **The "AI checkout" experiment is over.** Walmart published the data: 3x worse conversion when you replace the buy button with a chat interface. Build AI *behind* the experience, not on top of it.

→ **Context windows are about to make RAG optional.** Gemini 1.5 Pro at 1M tokens changes the architecture conversation — check your assumptions before building another vector pipeline.

---

### 💬 Final Note

The companies worth watching this week weren't the ones getting listed — they were the ones shipping. OpenCode launched quietly and gained more GitHub stars in 72 hours than most "top AI startups" have in a year. Next Monday, check who shipped something, not who ranked somewhere.

---

### 😂 Joke of the Week

> "My product roadmap has three states: 'This Quarter', 'Next Quarter', and 'AI will handle it.'"
> — Your Digest Team

---

## Supabase Output

After a full run, your Supabase database contains:

**`digests` table:**
```json
{
  "id": "uuid",
  "issue_number": 1,
  "week_of": "2026-03-23",
  "status": "published",
  "published_at": "2026-03-28T06:00:00Z"
}
```

**`digest_stories` table (per story):**
```json
{
  "digest_id": "uuid",
  "category": "launch",
  "headline": "Cursor Hits $500M ARR Before Most SaaS Hits $5M",
  "summary": "Cursor announced $500M ARR this week...",
  "pm_takeaway": "If you're building dev tooling without a paid tier, this is your benchmark.",
  "source_url": "https://cursor.sh/blog/...",
  "source_name": "Cursor Blog",
  "og_image_url": "https://...",
  "ai_score": 45,
  "score_breakdown": { "relevance": 10, "signal": 9, "freshness": 9, "credibility": 9, "engagement": 8 },
  "ai_selected": true,
  "status": "published",
  "week_of": "2026-03-23",
  "content_hash": "a3f7b1c2d4e5f6a7"
}
```
