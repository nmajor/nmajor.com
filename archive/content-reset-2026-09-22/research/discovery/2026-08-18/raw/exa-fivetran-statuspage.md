# RAW — Fivetran replaced Atlassian Statuspage ($65k/yr) with an AI-built in-house status page
Accessed: 2026-08-18. Lane: Exa neural search (saas-replacement intent).
Source: https://www.fivetran.com/blog/we-built-our-own-status-page-with-ai-replacing-a-65k-saas-product — published 2026-08-07
HN: https://news.ycombinator.com/item?id=49260068 (2 pts, 0 comments — effectively unnoticed)
Author: Mike Gordon, VP Platform Engineering, Fivetran.

## Extracted facts
- Replaced: Atlassian Statuspage at $65,000/year.
- Built by: two engineers, Valentina Mackovic and Jelena Kostic, ~4 months (2026-03-15 to 2026-07).
- Serves ~26,000 notification subscribers; per-service status/uptime, incident tracking, maintenance windows, admin panel.
- Effort breakdown (hours): requirements/design 52; spec prep for agents 88; agent tooling + orchestration 160; AI-generated MVP 162; production hardening + rollout 537; pre-release bug fixing 50. Total ~1,050 hours ≈ $105,000 at $100/hr.
- AI token cost: ~$4,500.
- Ongoing run cost: infra $2,400-$4,800/yr + ~0.1 FTE (~$10,000) = $12,400-$25,000/yr forecast.
- 46 PRs total; 8 never merged. Groups CRUD took 4 separate PRs — "agents redo work".
- "Production hardening was 56% of the total effort — more than requirements, tooling, and the entire MVP combined."
- "The last mile is still a mile."
- Migrating 26,000 subscribers without duplicates or losses took 40+ hours.
- "Two hours of preparation for every hour of building... The agents were fast precisely because the context had already removed all ambiguity."
