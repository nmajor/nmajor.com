# Two published agent skills that ingest many feeds and emit one digest (full SKILL.md text)

- URLs:
  - https://github.com/HarrisHan/ai-daily-digest ("OpenClaw Skill: Daily AI/Tech digest from 92 Karpathy-curated blogs. Zero deps, no API keys. Agent-native RSS → Score → Summarize pipeline.")
  - https://github.com/YouMind-OpenLab/karpathy-rss-daily-skill
  - Source list provenance: https://refactoringenglish.com/tools/hn-popularity/ ("Hacker News Popularity Contest 2025")
- Date accessed: 2026-08-18
- What it is: Two agent-native (SKILL.md) digest pipelines — the closest public analogues to our `content-discovery` skill. Both are "fetch many feeds → score with an explicit multi-dimension rubric → cluster → summarize → template". Cloned via `gh repo clone`; files reproduced verbatim below.

---

# A. HarrisHan/ai-daily-digest — VERBATIM `SKILL.md` (complete file)

```markdown
---
name: ai-daily-digest
description: "Generate a daily tech news digest from 90+ top tech blogs (curated by Karpathy). Trigger with /digest. Fetches RSS feeds, scores articles by relevance/quality, and produces a structured Chinese/English summary. No external API keys needed — uses the agent's own LLM for scoring and summarization."
---

# Tech Daily Digest

Generate a structured daily digest from 90+ top tech blogs curated from [Hacker News Popularity Contest 2025](https://refactoringenglish.com/tools/hn-popularity/).

## Trigger

User says `/digest` or asks for a tech news digest/daily briefing.

## Parameters (ask user if not specified)

| Param | Options | Default |
|-------|---------|---------|
| Time range | 24h / 48h / 72h | 24h |
| Top N articles | 10 / 15 / 20 | 15 |
| Language | zh / en | zh |

## Workflow

### Step 1: Fetch RSS feeds

Run the bundled fetcher script:

```bash
node <skill_dir>/scripts/fetch-rss.mjs --hours <HOURS> --sources <skill_dir>/references/sources.json
```

This outputs JSON to stdout. Capture it. The script:
- Fetches 92 RSS/Atom feeds concurrently (15 parallel, 15s timeout)
- Parses XML (RSS 2.0 + Atom)
- Filters articles by time window
- Outputs sorted JSON array of `{title, link, summary, date, source, sourceUrl}`

### Step 2: Score and classify

From the fetched articles JSON, score each article on three dimensions (1-10):

1. **Relevance** — How relevant to AI, software engineering, security, or tech industry
2. **Quality** — Depth of insight, originality, technical substance
3. **Timeliness** — Breaking news or emerging trend vs. evergreen content

Classify into categories:
- 🤖 AI / ML
- 🔒 Security
- ⚙️ Engineering
- 🛠 Tools / Open Source
- 💡 Opinion / Essay
- 📝 Other

Select the top N articles by total score.

### Step 3: Generate summaries

For each selected article:
1. If `summary` from RSS is sufficient (>100 chars), use it as basis
2. If not, use `web_fetch` to read the full article
3. Generate a structured summary:
   - Chinese title translation (keep original as link text)
   - 2-3 sentence summary covering: core problem → key insight → conclusion
   - Recommendation reason (1 sentence)
   - Keywords (2-3 tags)

### Step 4: Generate trend highlights

Analyze all selected articles together and identify 2-3 macro trends in the tech world today.

### Step 5: Format output

Output as a Telegram-friendly message (not a file):

```
📰 Tech Daily Digest — {date}
来自 Karpathy 推荐的 92 个顶级技术博客

📝 今日看点
{2-3 sentence macro trend summary}

🏆 今日必读 (Top 3)
1. {Chinese title}
   {source} · {relative time}
   {summary}
   🏷️ {keywords}

2. ...
3. ...

📋 更多精选
4. {Chinese title} — {source} · {one-line summary}
5. ...
...

📊 统计：{N} 源 → {M} 篇 → {K} 篇精选
```

## Notes

- **No external API key needed.** The agent itself handles scoring and summarization.
- RSS sources are from Karpathy's curated list of Hacker News top blogs.
- If `exec` is unavailable, fall back to using `web_fetch` on individual RSS URLs (slower but works).
- The script requires Node.js 18+ (available on all OpenClaw instances).
- Source list can be customized by editing `references/sources.json`.
```

## VERBATIM — `README.md` "How It Works" ASCII pipeline diagram

```
92 RSS Feeds → Concurrent Fetch → Time Filter → LLM Scoring → LLM Summary → Digest
     │              │                  │              │              │           │
  sources.json   fetch-rss.mjs    by hours arg    agent scores   agent writes  Telegram
                 (15 parallel)                    relevance/      2-3 sentence  message
                                                  quality/        summaries
                                                  timeliness
```

## VERBATIM — README notes

> **No external API keys required.** Uses the OpenClaw agent's own LLM for scoring and summarization — works with Claude, Gemini, GPT, or any model.

> 92 feeds curated from [Hacker News Popularity Contest 2025](https://refactoringenglish.com/tools/hn-popularity/), including:
> Simon Willison · Paul Graham · Dan Abramov · Gwern · Krebs on Security · Antirez · John Gruber · Troy Hunt · Mitchell Hashimoto · Steve Blank · Eli Bendersky · Fabien Sanglard · and 80 more...

> ### Scheduled Daily Digest
> ```bash
> openclaw cron add \
>   --name "ai-daily-digest" \
>   --cron "0 9 * * *" \
>   --tz "Asia/Shanghai" \
>   --message "/digest" \
>   --announce --exact
> ```

Sample of `references/sources.json` (92 entries, shape):
```json
[
  {"name":"simonwillison.net","xmlUrl":"https://simonwillison.net/atom/everything/","htmlUrl":"https://simonwillison.net"},
  {"name":"jeffgeerling.com","xmlUrl":"https://www.jeffgeerling.com/blog.xml","htmlUrl":"https://jeffgeerling.com"},
  {"name":"seangoedecke.com","xmlUrl":"https://www.seangoedecke.com/rss.xml","htmlUrl":"https://seangoedecke.com"},
  {"name":"krebsonsecurity.com","xmlUrl":"https://krebsonsecurity.com/feed/","htmlUrl":"https://krebsonsecurity.com"},
  {"name":"daringfireball.net","xmlUrl":"https://daringfireball.net/feeds/main","htmlUrl":"https://daringfireball.net"}
]
```

---

# B. YouMind-OpenLab/karpathy-rss-daily-skill — VERBATIM `SKILL.md` (complete file)

```markdown
---
name: karpathy-rss-daily-skill
description: |
  Generate daily AI briefings from Andrej Karpathy's curated RSS sources.
  Use this skill when users want to:
  - Get a daily AI news digest from top-tier sources
  - Stay updated on AI research, engineering, and industry trends
  - Generate structured briefings from Karpathy's reading list
---

# Karpathy Curated RSS Daily Briefing

You are an expert AI news curator that generates structured daily briefings from Andrej Karpathy's curated RSS sources.

## Quick Start

User asks for an AI daily briefing → Fetch RSS feeds → Select top stories → Read full articles → Generate structured briefing.

## Briefing Generation Workflow

### Step 1: Fetch RSS Pack

Fetch the Karpathy curated RSS pack to get the list of feed sources:

```
fetch https://youmind.com/rss/pack/andrej-karpathy-curated-rss
```

This returns a list of RSS feeds curated by Andrej Karpathy covering AI research, engineering, and industry news.

### Step 2: Fetch Individual Feeds

For each feed source in the pack, fetch its RSS content. Focus on entries published within the **last 24 hours** (or the most recent entries if none are from today).

### Step 3: Select Top Stories

From all fetched entries, select **1-2 top stories per source** based on:

- **Relevance**: Directly related to AI/ML research, engineering, or industry
- **Impact**: Significant announcements, breakthroughs, or trend shifts
- **Freshness**: Prefer the most recent content
- **Diversity**: Cover different aspects (research, engineering, business, policy)

Aim for **8-15 total stories** across all sources.

### Step 4: Read Full Articles

For each selected story, use the fetch tool to read the full article content:

```
fetch [article_url]
```

Extract:
- Key points and findings
- Notable quotes or data
- Implications for the AI field

### Step 5: Generate Structured Briefing

Organize stories into **2-5 thematic clusters** and generate the briefing using the template below.

## Source Classification Guide

Classify each story into one of these categories:

| Category | Emoji | Typical Sources |
|----------|-------|-----------------|
| AI Research | 🔬 | arXiv, research blogs, lab announcements |
| Engineering & Tools | 🛠️ | GitHub trending, tech blogs, framework releases |
| Industry & Business | 💼 | Company blogs, product launches, funding news |
| Policy & Safety | 🛡️ | Governance updates, safety research, regulation |
| Tutorials & Insights | 📚 | Technical deep-dives, opinion pieces, analyses |
| Open Source | 🌐 | Model releases, dataset publications, community projects |

## Briefing Template

Generate the briefing in the user's language (default: Chinese). Use this structure:

```markdown
> Karpathy 精选 RSS 日报 | {date} | 共 {N} 条更新

---

## 🔥 核心主题：{main_topic_title}

{2-3 paragraph summary of the most important story/theme of the day}

**关键要点：**
- {key point 1}
- {key point 2}
- {key point 3}

**来源：** [{source_name}]({url})

---

## {emoji} {topic_2_title}：{subtitle}

{Summary with key details}

**来源：** [{source_name}]({url})

## {emoji} {topic_3_title}：{subtitle}

{Summary with key details}

**来源：** [{source_name}]({url})

<!-- Repeat for each thematic cluster -->

---

## 📊 今日数据

- **{X}** 条 RSS 更新
- **{Y}** 篇精选深度阅读
- **{Z}** 个核心主题：{topic_1}、{topic_2}、{topic_3}

## 💡 编者观察

{1-2 paragraphs with meta-observations: emerging trends, connections between stories, what to watch for}

---

*本日报由 AI 自动生成 | 数据源：[Andrej Karpathy curated RSS](https://youmind.com/rss/pack/andrej-karpathy-curated-rss) | Powered by [YouMind](https://youmind.com)*
```

## Writing Guidelines

1. **Be concise**: Each story summary should be 2-4 sentences max
2. **Add context**: Explain why each story matters
3. **Connect dots**: Highlight relationships between different stories
4. **Use data**: Include specific numbers, metrics, or benchmarks when available
5. **Stay objective**: Present facts first, opinions in "编者观察" section only
6. **Link sources**: Always include the original article URL

## Language Handling

- Generate briefing in the user's preferred language (detect from their message)
- Default to Chinese (简体中文) if language is ambiguous
- Keep technical terms in English where appropriate (e.g., model names, paper titles)

## Edge Cases

- **No recent content**: If no entries from the last 24 hours, expand to 48 hours and note this in the briefing
- **Feed unavailable**: Skip unavailable feeds and note which sources couldn't be reached
- **Too many stories**: Prioritize by impact and limit to 15 stories max
- **User specifies topic**: Filter stories to match the user's specific interest area

---

*Powered by [YouMind](https://youmind.com) — AI-native content intelligence platform*
```

---

## NOT FETCHED / GAPS
- `scripts/fetch-rss.mjs` (the fetcher) not reproduced here — it is plumbing (concurrent RSS/Atom fetch, 15 parallel, 15s timeout, time-window filter, sorted JSON out), no prompt content.
- vigorX777/ai-daily-digest (the Chinese-language ancestor project) not cloned.
- youmind.com/rss/pack/andrej-karpathy-curated-rss (the actual feed list) not fetched.
