# RAW: ChrisAdkin8/agentic-ai-weekly -- the `newsletter-ai` Claude Code skill

- Repo: https://github.com/ChrisAdkin8/agentic-ai-weekly
- Skill: https://github.com/ChrisAdkin8/agentic-ai-weekly/blob/main/.claude/skills/newsletter-ai/SKILL.md
- Date accessed: 2026-08-18
- What it is: A real, running weekly AI newsletter published as an Astro site, driven end-to-end by ONE Claude Code skill: a 12-category source sweep, a per-item evaluation/filter step, a fixed issue template, and a GitHub Actions workflow that runs it on a schedule and commits the issue back into the site.
- NOTE: `.claude/skills/newsletter-ai/sources.md` (29KB, the full source URL list) and the two `.canvas` files were NOT fetched into this dump; they are at the repo URLs above.

VERBATIM below, complete files, unedited.


---

## .claude/skills/newsletter-ai/SKILL.md

Source: https://raw.githubusercontent.com/ChrisAdkin8/agentic-ai-weekly/main/.claude/skills/newsletter-ai/SKILL.md

---
name: newsletter-ai
description: Curate a newsletter covering agentic AI and LLM news across 12 categories: community (Reddit incl. r/MLOps, Hacker News, X/Twitter), research and alignment safety labs (ARC, CAIUS, Apollo, METR, Redwood, FAR AI, BAIR, AI2, Alignment Forum, LessWrong), technical blogs and infra companies (NVIDIA, W&B, vLLM, Databricks, Ollama, CrewAI, Modal, Microsoft Semantic Kernel), AI-only media (MIT Tech Review, Ars Technica, IEEE Spectrum), individual writers (Chollet, Marcus, Wolfe), analyst and VC reports (Gartner, a16z, Sequoia, Brookings), AI security (OWASP, MITRE, NIST, CISA, ENISA, NCSC, Trail of Bits, Lakera, HiddenLayer, Embrace the Red, Snyk Labs), regulatory/policy (EU Commission, UK AISI, FTC, ICO, OSTP, Future of Life Institute, Ada Lovelace Institute, CDT, EFF), agent era (LangChain, Pydantic AI, Composio, HF Agents), open-source infra, macro/hardware (NVIDIA, AMD, Next Platform, Datacenter Dynamics, Chips and Cheese, Fabricated Knowledge), model evaluations (LMSYS, Artificial Analysis, Scale SEAL, HELM, LiveBench, AlpacaEval), and newsletters/podcasts as secondary sources (The Batch, Latent Space, TWIML). Use when the user asks for AI news, an LLM digest, an agentic AI roundup, or a newsletter.
argument-hint: "[topic-focus or date-range or vault:~/path or web:~/path/to/astro-site, optional]"
disable-model-invocation: true
allowed-tools: WebSearch, WebFetch, Bash, Write
model: claude-opus-4-6
---

# Agentic AI & LLM Newsletter Curator

You are curating a high-quality weekly newsletter covering agentic AI and large language model developments. Your audience is technical practitioners, researchers, and security professionals.

## Optional focus
$ARGUMENTS

If no arguments are provided, cover the latest developments across all categories below.

---

## Step 1: Gather content from all source categories

Work through each category systematically. For each source, search for content published in the **last 7 days** unless the user specified a different range. Collect at minimum 2–3 items per category.

Refer to [sources.md](sources.md) for the full list of URLs and search queries per category.

### Categories to cover

1. **Community & Discussion** (Reddit incl. r/MLOps, Hacker News, X/Twitter, LinkedIn — named profiles)
2. **Research & Papers** (arXiv, Alignment Forum, LessWrong AI; alignment labs — ARC, CAIUS, Apollo, METR, Redwood, FAR AI; academic labs — BAIR, AI2, EleutherAI; Microsoft Research, Apple ML, Amazon Science)
3. **Technical Blogs & Engineering Posts** (major labs, NVIDIA, W&B, vLLM, Databricks, Ollama, CrewAI, Modal, Microsoft Semantic Kernel; MIT Tech Review, Ars Technica, IEEE Spectrum, The Information; Chollet, Marcus, Wolfe + existing writers)
4. **Analyst & Industry Reports** (Gartner, McKinsey, a16z, Sequoia, Brookings, AI Now Institute, OECD AI)
5. **AI Security** (OWASP, MITRE ATLAS, NIST, CISA, ENISA, NCSC, Trail of Bits, Lakera, HiddenLayer, Embrace the Red, Snyk Labs, Microsoft Security)
6. **Product & Company News** (model releases, funding, partnerships)
7. **Regulatory & Policy** (EU Commission, UK AISI, White House OSTP, FTC, UK ICO, Canada AIDA, Future of Life Institute, IAPP, Covington, HSF Kramer, Ada Lovelace Institute, CDT, EFF)
8. **Agent Era & Technical Workflows** (Vellum AI, ByteByteGo, LangChain, Pydantic AI, Composio, HF Agents tag)
9. **Open Source & Specialised Infrastructure** (HuggingFace, vLLM, Ollama, Anyscale, SemiAnalysis)
10. **Macro & Hardware Watch** (NVIDIA primary, AMD AI/ROCm, Next Platform, Datacenter Dynamics, Computing.co.uk, SemiAnalysis, Chips and Cheese, Fabricated Knowledge)
11. **Model Evaluations & Transparency** (LMSYS, Artificial Analysis, Scale SEAL, HELM, LiveBench, AlpacaEval, HF Leaderboard, WhatLLM.org)
12. **Newsletters & Podcasts** (secondary sources only — The Batch, Latent Space, TWIML; use to identify stories then cite the primary source)

---

## Step 2: Evaluate and filter each item

For every item you find, assess:

- **Relevance**: Does it relate to agentic AI, LLMs, or AI safety/security?
- **Recency**: Is it from the target period?
- **Signal vs noise**: Is it a meaningful development or just hype?
- **Audience fit**: Would a technical practitioner care about this?

Discard PR fluff, duplicate coverage, and content without substance. Keep only the strongest 3–5 items per category.

---

## Step 3: Write the newsletter

Follow the template in [template.md](template.md) exactly. For each item write:

- A **punchy headline** (not the original title — rewrite it to convey the insight)
- A **2–4 sentence summary** explaining what happened and *why it matters*
- A **direct link** to the primary source
- A **tag** from: `[Research]` `[Tool]` `[Security]` `[Industry]` `[Community]` `[Policy]` `[Eval]` `[Safety]`

---

## Step 4: Add the editor's picks

After all sections, select your **top 3 items** across all categories and write a short "Editor's Picks" intro paragraph (2–3 sentences) explaining why you chose them and what theme ties them together.

---

## Output format

Output the complete newsletter as clean markdown. Do not include your search process or intermediate steps in the output — only the finished newsletter. The newsletter should be ready to paste into an email or publish directly.

---

## Step 5: Write to Obsidian vault

After outputting the newsletter to chat, write a permanent copy to the Obsidian vault.

**Default vault path**: `~/Documents/AI-Newsletter-Vault/`

If the user passed a vault path in their arguments (e.g. `/newsletter-ai vault:~/Obsidian/AI/`), use that path instead.

### 5a. Create directories

```bash
mkdir -p ~/Documents/AI-Newsletter-Vault/issues
mkdir -p ~/Documents/AI-Newsletter-Vault/canvas
mkdir -p ~/Documents/AI-Newsletter-Vault/topics
mkdir -p ~/Documents/AI-Newsletter-Vault/sources
mkdir -p ~/Documents/AI-Newsletter-Vault/articles
```

### 5b. Write the issue note

- Determine the **issue date**: end date of the coverage window in `YYYY-MM-DD` format
- Determine the **ISO week**: `YYYY-Www` format (e.g. `2026-W08`)
- Write `~/Documents/AI-Newsletter-Vault/issues/YYYY-MM-DD.md` following the format in [obsidian-template.md](obsidian-template.md):
  - YAML frontmatter: `date`, `week`, `tags`, `theme` (the one-sentence opening framing), `categories` (list of categories with content this issue), `editor_picks` (the 3 headline titles), `source`
  - Full newsletter body after the frontmatter closing `---`, with **one modification**: replace each section's italic subtitle line with a wikilinked version so Obsidian's Graph View connects the issue to its topic index notes:

| Section | Subtitle line in vault note |
|---|---|
| Community Pulse | `*[[topics/community\|Community]] — What the AI community is talking about this week*` |
| Research Highlights | `*[[topics/research\|Research]] — Papers and findings worth your time*` |
| Engineering & Technical Blogs | `*[[topics/engineering\|Engineering]] — What builders are shipping and writing*` |
| Industry & Analyst Watch | `*[[topics/industry\|Industry]] — Enterprise adoption, market signals, and strategic moves*` |
| AI Security & Safety | `*[[topics/security\|Security]] — Threats, vulnerabilities, frameworks, and defences*` |
| Product & Company News | `*[[topics/product\|Product]] — Model releases, funding, and notable moves*` |
| Regulatory & Policy | `*[[topics/policy\|Policy]] — Laws, frameworks, and compliance moves shaping AI deployment*` |
| Agent Era & Technical Workflows | `*[[topics/agent-era\|Agent Era]] — Patterns, tools, and architectures for building production agents*` |
| Open Source & Infrastructure | `*[[topics/open-source\|Open Source]] — Model rankings, benchmarks, and the stack underneath*` |
| Hardware & Macro Watch | `*[[topics/hardware\|Hardware]] — Chips, compute, and the infrastructure layer*` |
| Model Evaluations & Transparency | `*[[topics/evaluations\|Evaluations]] — How models are being measured, compared, and held accountable*` |

These wikilinks power Obsidian's Graph View: the issue note appears at the centre with edges radiating to each topic node it covered.

In addition, each story **headline** in the vault note should be a wikilink to its article note:
`### [[articles/YYYY-MM-DD-topic-slug|Original Headline]]`

Slug format: `YYYY-MM-DD-{topic}-{2-3-word-title}` (lowercase, hyphens). Example:
`### [[articles/2026-02-20-security-owasp-agentic-top-10|OWASP Publishes the Agentic AI Top 10]]`

This links the issue note directly to individual article notes, completing the four-level graph: issue → topic → source → article.

### 5c. Write canvas mindmaps (first run only)

If `~/Documents/AI-Newsletter-Vault/canvas/newsletter-structure.canvas` does not yet exist:
- Read the content of [newsletter-structure.canvas](newsletter-structure.canvas)
- Write it to `~/Documents/AI-Newsletter-Vault/canvas/newsletter-structure.canvas`

If `~/Documents/AI-Newsletter-Vault/canvas/sources.canvas` does not yet exist:
- Read the content of [sources.canvas](sources.canvas)
- Write it to `~/Documents/AI-Newsletter-Vault/canvas/sources.canvas`

These canvas files are static — they map the newsletter's 13 output sections and the 11 source categories respectively. They are created once and do not change issue to issue.

### 5d. Write vault index (first run only)

If `~/Documents/AI-Newsletter-Vault/_index.md` does not yet exist, write the vault dashboard note as defined in [obsidian-template.md](obsidian-template.md).

### 5f. Write topic index notes (first run only)

If `~/Documents/AI-Newsletter-Vault/topics/community.md` does not yet exist, create all 11 topic index notes as defined in [obsidian-template.md](obsidian-template.md). Each topic note includes wikilinks to its catalogue sources. These are static — created once, not updated per issue.

### 5g. Create article notes

For every story included in the newsletter, write one article note to `~/Documents/AI-Newsletter-Vault/articles/SLUG.md` using the article note format defined in [obsidian-template.md](obsidian-template.md):
- Slug: `YYYY-MM-DD-{topic}-{2-3-word-title}` (lowercase, hyphens)
- YAML frontmatter: `date`, `source` (slug from the source catalogue), `topic` (category slug), `tag`, `url`
- Body: the headline, the 2-4 sentence summary, then `[[sources/slug|Name]] · [[topics/slug|Name]] · [Read more](url)`

### 5h. Create source notes (first run only)

If `~/Documents/AI-Newsletter-Vault/sources/hacker-news.md` does not yet exist, create all source notes as defined in [obsidian-template.md](obsidian-template.md). Each source note has a Dataview query that auto-aggregates all article notes where `source = "slug"`. If a story uses a source not in the catalogue, create a new source note for it.

### 5e. Confirm

After all writes, print:

```
Vault note written → ~/Documents/AI-Newsletter-Vault/issues/YYYY-MM-DD.md
Article notes     → ~/Documents/AI-Newsletter-Vault/articles/ (N notes this issue)
Canvas mindmaps   → ~/Documents/AI-Newsletter-Vault/canvas/ (created on first run)
Topic index notes → ~/Documents/AI-Newsletter-Vault/topics/ (created on first run)
Source notes      → ~/Documents/AI-Newsletter-Vault/sources/ (created on first run)
```

---

## Step 6: Publish to web (optional)

Only run this step if the user passed a `web:` argument (e.g. `/newsletter-ai web:~/my-astro-site`). If no `web:` argument was given, skip this step entirely.

This step publishes the newsletter to an [Astro Paper](https://github.com/satnaing/astro-paper) static site that auto-deploys to Vercel or Netlify on push. One-time setup: create the Astro project, connect it to a GitHub repo, and link that repo to Vercel or Netlify free tier — thereafter every push deploys automatically.

### 6a. Extract the web repo path

Parse the `web:` value from `$ARGUMENTS`, expanding `~` to the user's home directory.

### 6b. Write the issue to the Astro content directory

Write `{WEB_REPO}/src/data/blog/YYYY-MM-DD.md` with Astro Paper-compatible frontmatter and the clean newsletter body.

**Frontmatter** (Astro Paper conventions):

```yaml
---
title: "Agentic AI & LLM Weekly — YYYY-Www"
pubDatetime: YYYY-MM-DDT09:00:00Z
description: "[one-sentence theme from the newsletter's opening framing line]"
tags:
  - newsletter
  - agentic-ai
  - weekly
featured: false
draft: false
---
```

**Body**: Use the clean newsletter markdown from Step 3 verbatim — the same text output to chat. Do **not** include Obsidian wikilinks (`[[...]]`). All section subtitles should be plain italic text (not wikilinked).

### 6c. Push to trigger deployment

```bash
cd {WEB_REPO} && \
  git add src/data/blog/YYYY-MM-DD.md && \
  git commit -m "Newsletter YYYY-MM-DD" && \
  git push
```

Vercel and Netlify pick up the push and deploy within ~30 seconds.

### 6d. Confirm

Append to the confirmation block from Step 5e:

```
Web publish       → {WEB_REPO}/src/data/blog/YYYY-MM-DD.md (pushed)
```


---

## .claude/skills/newsletter-ai/template.md

Source: https://raw.githubusercontent.com/ChrisAdkin8/agentic-ai-weekly/main/.claude/skills/newsletter-ai/template.md

# Newsletter Template

Use this exact structure when writing the newsletter output.

---

```markdown
# Agentic AI & LLM Weekly
**Issue #[N] — [Date Range]**

> [One-sentence framing of the dominant theme this week — 15–20 words max.]

---

## Editor's Picks

[2–3 sentence paragraph highlighting the top 3 stories and the thread connecting them. Write this after you've gathered all content so you can choose the strongest items.]

---

## Community Pulse
*What the AI community is talking about this week*

### [Rewritten headline — punchy, insight-first]
`[Community]`

[2–4 sentences: what happened, why it matters, what the community reaction reveals.]

[Source: [Platform/Subreddit](URL)]

---

### [Next item headline]
`[Community]`

[2–4 sentences.]

[Source: [Platform/Subreddit](URL)]

---

## Research Highlights
*Papers and findings worth your time*

### [Paper title rewritten as insight]
`[Research]`

[2–4 sentences: what was studied, key finding, practical implication.]

[Source: [arXiv / Conference / Institution](URL)]

---

### [Next paper]
`[Research]`

[2–4 sentences.]

[Source: [arXiv / Conference / Institution](URL)]

---

## Engineering & Technical Blogs
*What builders are shipping and writing*

### [Headline]
`[Tool]`

[2–4 sentences: what was released or written, what problem it solves, who should care.]

[Source: [Blog / Author](URL)]

---

### [Next item]
`[Tool]`

[2–4 sentences.]

[Source: [Blog / Author](URL)]

---

## Industry & Analyst Watch
*Enterprise adoption, market signals, and strategic moves*

### [Headline]
`[Industry]`

[2–4 sentences: what the report or news says, what it signals for the market.]

[Source: [Analyst firm / Publication](URL)]

---

### [Next item]
`[Industry]`

[2–4 sentences.]

[Source: [Analyst firm / Publication](URL)]

---

## AI Security & Safety
*Threats, vulnerabilities, frameworks, and defences*

### [Headline]
`[Security]`

[2–4 sentences: what the threat or framework is, who is affected, what practitioners should do.]

[Source: [OWASP / MITRE / NIST / Research](URL)]

---

### [Next item]
`[Security]`

[2–4 sentences.]

[Source: [OWASP / MITRE / NIST / Research](URL)]

---

## Product & Company News
*Model releases, funding, and notable moves*

### [Headline]
`[Industry]`

[2–4 sentences.]

[Source: [Company / Publication](URL)]

---

## Regulatory & Policy
*Laws, frameworks, and compliance moves shaping AI deployment*

### [Headline]
`[Policy]`

[2–4 sentences: what the regulation, ruling, or guidance says, who it affects, and what teams need to know.]

[Source: [IAPP / Covington / Regulator / Law firm](URL)]

---

### [Next item]
`[Policy]`

[2–4 sentences.]

[Source: [IAPP / Covington / Regulator / Law firm](URL)]

---

## Agent Era & Technical Workflows
*Patterns, tools, and architectures for building production agents*

### [Headline]
`[Tool]`

[2–4 sentences: what pattern or tool was described, what problem it solves, what teams should consider adopting.]

[Source: [Vellum AI / ByteByteGo / Blog](URL)]

---

### [Next item]
`[Tool]`

[2–4 sentences.]

[Source: [Vellum AI / ByteByteGo / Blog](URL)]

---

## Open Source & Infrastructure
*Model rankings, benchmarks, and the stack underneath*

### [Headline]
`[Research]`

[2–4 sentences: what changed in the rankings or benchmarks, what it means for practitioners choosing models.]

[Source: [WhatLLM / HuggingFace Leaderboard / Papers with Code](URL)]

---

## Hardware & Macro Watch
*Chips, compute, and the infrastructure layer*

### [Headline]
`[Industry]`

[2–4 sentences: what the hardware or infrastructure development is, why it matters for AI capacity or cost.]

[Source: [Computing.co.uk / SemiAnalysis / Publication](URL)]

---

## Model Evaluations & Transparency
*How models are being measured, compared, and held accountable*

### [Headline]
`[Eval]`

[2–4 sentences: what was evaluated or benchmarked, what the results reveal, what practitioners should conclude about model selection or deployment.]

[Source: [LMSYS / Artificial Analysis / Scale SEAL / HELM / HF Leaderboard](URL)]

---

### [Next item]
`[Eval]`

[2–4 sentences.]

[Source: [LMSYS / Artificial Analysis / Scale SEAL / HELM / HF Leaderboard](URL)]

---

## Quick Links
*Worth a bookmark — no summary needed*

- [Title](URL) — one-line description
- [Title](URL) — one-line description
- [Title](URL) — one-line description

---

*Curated by Claude Code · Sources span Reddit, Hacker News, Alignment Forum, arXiv, OWASP, MITRE, NIST, CISA, IAPP, Covington, Ada Lovelace Institute, analyst reports, technical blogs, and hardware press*
```


---

## .github/workflows/newsletter.yml

Source: https://raw.githubusercontent.com/ChrisAdkin8/agentic-ai-weekly/main/.github/workflows/newsletter.yml

name: Generate Weekly Newsletter

on:
  schedule:
    - cron: '0 9 * * 5'  # Every Friday at 09:00 UTC
  workflow_dispatch:       # Allow manual trigger from GitHub UI

permissions:
  contents: write

jobs:
  generate:
    runs-on: ubuntu-latest
    timeout-minutes: 30

    steps:
      - name: Checkout repo
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install Claude Code CLI
        run: npm install -g @anthropic-ai/claude-code

      - name: Install newsletter skill
        run: |
          mkdir -p ~/.claude/skills
          cp -r .claude/skills/newsletter-ai ~/.claude/skills/

      - name: Configure git
        run: |
          git config user.name "Newsletter Bot"
          git config user.email "bot@agenticaiweekly.org"
          git remote set-url origin https://x-access-token:${{ secrets.GITHUB_TOKEN }}@github.com/${{ github.repository }}.git

      - name: Generate and publish newsletter
        env:
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
        run: |
          claude --dangerously-skip-permissions -p "/newsletter-ai web:$(pwd)"

      - name: Push any unpushed changes
        run: |
          git add src/data/blog/ || true
          git diff --staged --quiet || git commit -m "Newsletter $(date -u +%Y-%m-%d)"
          git push || true


---

## README.md

Source: https://raw.githubusercontent.com/ChrisAdkin8/agentic-ai-weekly/main/README.md

# AstroPaper 📄

![AstroPaper](public/astropaper-og.jpg)
[![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/community/file/1356898632249991861)
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![GitHub](https://img.shields.io/github/license/satnaing/astro-paper?color=%232F3741&style=for-the-badge)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white&style=for-the-badge)](https://conventionalcommits.org)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=for-the-badge)](http://commitizen.github.io/cz-cli/)

AstroPaper is a minimal, responsive, accessible and SEO-friendly Astro blog theme. This theme is designed and crafted based on [my personal blog](https://satnaing.dev/blog).

Read [the blog posts](https://astro-paper.pages.dev/posts/) or check [the README Documentation Section](#-documentation) for more info.

## 🔥 Features

- [x] type-safe markdown
- [x] super fast performance
- [x] accessible (Keyboard/VoiceOver)
- [x] responsive (mobile ~ desktops)
- [x] SEO-friendly
- [x] light & dark mode
- [x] fuzzy search
- [x] draft posts & pagination
- [x] sitemap & rss feed
- [x] followed best practices
- [x] highly customizable
- [x] dynamic OG image generation for blog posts [#15](https://github.com/satnaing/astro-paper/pull/15) ([Blog Post](https://astro-paper.pages.dev/posts/dynamic-og-image-generation-in-astropaper-blog-posts/))

_Note: I've tested screen-reader accessibility of AstroPaper using **VoiceOver** on Mac and **TalkBack** on Android. I couldn't test all other screen-readers out there. However, accessibility enhancements in AstroPaper should be working fine on others as well._

## ✅ Lighthouse Score

<p align="center">
  <a href="https://pagespeed.web.dev/report?url=https%3A%2F%2Fastro-paper.pages.dev%2F&form_factor=desktop">
    <img width="710" alt="AstroPaper Lighthouse Score" src="AstroPaper-lighthouse-score.svg">
  </a>
</p>

## 🚀 Project Structure

Inside of AstroPaper, you'll see the following folders and files:

```bash
/
├── public/
│   ├── pagefind/ # auto-generated when build
│   ├── favicon.svg
│   └── astropaper-og.jpg
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   └── images/
│   ├── components/
│   ├── data/
│   │   └── blog/
│   │       └── some-blog-posts.md
│   ├── layouts/
│   ├── pages/
│   ├── scripts/
│   ├── styles/
│   ├── utils/
│   ├── config.ts
│   ├── constants.ts
│   ├── content.config.ts
│   ├── env.d.ts
│   └── remark-collapse.d.ts
└── astro.config.ts
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Any static assets, like images, can be placed in the `public/` directory.

All blog posts are stored in `src/data/blog` directory.

## 📖 Documentation

Documentation can be read in two formats\_ _markdown_ & _blog post_.

- Configuration - [markdown](src/data/blog/how-to-configure-astropaper-theme.md) | [blog post](https://astro-paper.pages.dev/posts/how-to-configure-astropaper-theme/)
- Add Posts - [markdown](src/data/blog/adding-new-post.md) | [blog post](https://astro-paper.pages.dev/posts/adding-new-posts-in-astropaper-theme/)
- Customize Color Schemes - [markdown](src/data/blog/customizing-astropaper-theme-color-schemes.md) | [blog post](https://astro-paper.pages.dev/posts/customizing-astropaper-theme-color-schemes/)
- Predefined Color Schemes - [markdown](src/data/blog/predefined-color-schemes.md) | [blog post](https://astro-paper.pages.dev/posts/predefined-color-schemes/)

## 💻 Tech Stack

**Main Framework** - [Astro](https://astro.build/)  
**Type Checking** - [TypeScript](https://www.typescriptlang.org/)  
**Styling** - [TailwindCSS](https://tailwindcss.com/)  
**UI/UX** - [Figma Design File](https://www.figma.com/community/file/1356898632249991861)  
**Static Search** - [FuseJS](https://pagefind.app/)  
**Icons** - [Tablers](https://tabler-icons.io/)  
**Code Formatting** - [Prettier](https://prettier.io/)  
**Deployment** - [Cloudflare Pages](https://pages.cloudflare.com/)  
**Illustration in About Page** - [https://freesvgillustration.com](https://freesvgillustration.com/)  
**Linting** - [ESLint](https://eslint.org)

## 👨🏻‍💻 Running Locally

You can start using this project locally by running the following command in your desired directory:

```bash
# pnpm
pnpm create astro@latest --template satnaing/astro-paper

# npm
npm create astro@latest -- --template satnaing/astro-paper

# yarn
yarn create astro --template satnaing/astro-paper

# bun
bun create astro@latest -- --template satnaing/astro-paper
```

Then start the project by running the following commands:

```bash
# install dependencies if you haven't done so in the previous step.
pnpm install

# start running the project
pnpm run dev
```

As an alternative approach, if you have Docker installed, you can use Docker to run this project locally. Here's how:

```bash
# Build the Docker image
docker build -t astropaper .

# Run the Docker container
docker run -p 4321:80 astropaper
```

## Google Site Verification (optional)

You can easily add your [Google Site Verification HTML tag](https://support.google.com/webmasters/answer/9008080#meta_tag_verification&zippy=%2Chtml-tag) in AstroPaper using an environment variable. This step is optional. If you don't add the following environment variable, the google-site-verification tag won't appear in the HTML `<head>` section.

```bash
# in your environment variable file (.env)
PUBLIC_GOOGLE_SITE_VERIFICATION=your-google-site-verification-value
```

> See [this discussion](https://github.com/satnaing/astro-paper/discussions/334#discussioncomment-10139247) for adding AstroPaper to the Google Search Console.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

> **_Note!_** For `Docker` commands we must have it [installed](https://docs.docker.com/engine/install/) in your machine.

| Command                              | Action                                                                                                                           |
| :----------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `pnpm install`                       | Installs dependencies                                                                                                            |
| `pnpm run dev`                       | Starts local dev server at `localhost:4321`                                                                                      |
| `pnpm run build`                     | Build your production site to `./dist/`                                                                                          |
| `pnpm run preview`                   | Preview your build locally, before deploying                                                                                     |
| `pnpm run format:check`              | Check code format with Prettier                                                                                                  |
| `pnpm run format`                    | Format codes with Prettier                                                                                                       |
| `pnpm run sync`                      | Generates TypeScript types for all Astro modules. [Learn more](https://docs.astro.build/en/reference/cli-reference/#astro-sync). |
| `pnpm run lint`                      | Lint with ESLint                                                                                                                 |
| `docker compose up -d`               | Run AstroPaper on docker, You can access with the same hostname and port informed on `dev` command.                              |
| `docker compose run app npm install` | You can run any command above into the docker container.                                                                         |
| `docker build -t astropaper .`       | Build Docker image for AstroPaper.                                                                                               |
| `docker run -p 4321:80 astropaper`   | Run AstroPaper on Docker. The website will be accessible at `http://localhost:4321`.                                             |

> **_Warning!_** Windows PowerShell users may need to install the [concurrently package](https://www.npmjs.com/package/concurrently) if they want to [run diagnostics](https://docs.astro.build/en/reference/cli-reference/#astro-check) during development (`astro check --watch & astro dev`). For more info, see [this issue](https://github.com/satnaing/astro-paper/issues/113).

## ✨ Feedback & Suggestions

If you have any suggestions/feedback, you can contact me via [my email](mailto:contact@satnaing.dev). Alternatively, feel free to open an issue if you find bugs or want to request new features.

## 📜 License

Licensed under the MIT License, Copyright © 2025

---

Made with 🤍 by [Sat Naing](https://satnaing.dev) 👨🏻‍💻 and [contributors](https://github.com/satnaing/astro-paper/graphs/contributors).
