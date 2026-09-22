# Brief: research on public newsletter workflows / agent skills

## Why
Nick runs a weekly personal newsletter ("Actual Intelligence, by Nicholas Major") out of
this repo. The repo is the single source of truth: an essay in
`app/src/content/essays/<slug>.md` IS the blog post, IS the newsletter issue, and IS the
source for LinkedIn atomization + short site "takes".

## Our current pipeline (what any recommendation must fit)
1. `content-discovery` — scans HN, Lobsters, arXiv, GitHub, HF papers, Exa neural search,
   vendor case-study indexes, trade press → ranked digest of story candidates. Nick picks one.
2. `content-builder` — brain dump / transcript -> extraction -> research -> draft -> audit ->
   publish-ready essay. Composes with `writing-voice` and `hooks`.
3. `writing-voice` — hard prose rules (bans, cadence, anti-slop). Applies to every word.
4. `hooks` — generates 3-5 candidate openers / subject lines.
5. `icp-focus-group` — multi-provider LLM panel (Anthropic/OpenAI/Google) role-playing the
   ICP, scores a draft per-criterion + returns prioritized fixes. Assess-only.
6. `content-repurposing` — after Nick approves an essay: 5 LinkedIn posts (one per weekday),
   most sourced newsroom-style by "journalist" subagents doing fresh news investigation,
   scored by icp-focus-group at pitch stage; plus 1-3 short "takes" deduped against all
   past takes.
7. `last30days` — what people actually say in the last 30 days (Reddit, X, YouTube, TikTok,
   HN, Polymarket, GitHub, web).
8. Publishing: GitHub Actions promotes the top of a queue on a cadence — stamps pubDate,
   flips draft:false, deploys the site, sends via Buttondown, schedules LinkedIn posts,
   stamps takes' dates. Human approval gate (`approved:` field) on essays + each LinkedIn post.

## Audience
AI decision-makers at medium/large businesses — owners, CEOs, CIOs, COOs.

## What we want out of the research
Ideas worth stealing. Concretely: techniques, prompt/skill structures, workflow stages,
quality gates, metrics loops, formats, or tooling from public newsletter workflows and
public Claude/agent skills that we do NOT already do, and that would measurably improve
issue quality, throughput, or growth.
