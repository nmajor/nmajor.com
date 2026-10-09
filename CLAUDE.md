# nmajor.com

Read `overview.md` first — it is the canonical, always-current source for this
project's purpose, state, and plans. Keep it clean as you work: update or remove
stale parts, add what's missing; never let it drift.

`AGENTS.md` is a symlink to this file, so Claude Code and Codex share these
instructions.

## Publishing (current)

The repo is the single source of truth for all writing on nmajor.com. Current posts
live in `app/src/content/posts/<slug>.md` and render at `/blog/<slug>/` (experiments
also list at `/experiments/`). Follow the `writing-voice` skill for every
reader-facing word. Deploy with `npm --prefix app run deploy`. Details, including how
"live" is decided, are in `overview.md`.

Everything from before the 2026-10-09 pivot (essays, takes, engineering posts) is
archived under `/archive/`, and old URLs 301 there via `app/worker.js`. Don't edit
archived content beyond link fixes. The old Actual Intelligence pipeline (publish
queue, Buttondown send script, LinkedIn/Postiz scheduler, takes drip, and the skills
that drove them) is in `archive/pivot-2026-10/` and is **not** wired up.

> **HARD RULES for agents (Claude Code, Codex):**
> - **Never send email or schedule social posts without Nick's explicit, per-item
>   approval in conversation.** Nothing in this repo sends automatically anymore; keep
>   it that way unless Nick asks for automation.
> - `BUTTONDOWN_API_KEY` in `.env` is scoped to Nick's own newsletter list. Never use
>   it for any other list on the account.
> - Postiz integrations post to Nick's real personal accounts. Treat any Postiz call as
>   publishing.

The Deploy to Humans newsletter gets its own site at deploytohumans.com, built
separately. Don't build its landing page inside this repo.

## Layout

- `app/` — the application. A Cloudflare Worker unless this project is something else.
- `research/` — all research, raw-first (see below).
- `.skills/` — canonical skills, committed to git. Symlinked into `.claude/skills`
  (Claude Code) and `.agents/skills` (Codex). Both agents share these; add a skill
  as `.skills/<name>/SKILL.md` and **edit only here**, never via the symlinks.
- `.env` — local secrets, always gitignored. Never commit secrets.

## Research pattern (always — never summarize in one pass)

Whether from DataForSEO, scraped pages, or scraped YouTube videos:

1. **Dump raw data unedited** to `research/<topic>/raw/`. Keep it forever.
2. **Use a subagent** to parse `raw/` and write `research/<topic>/report.md`.

We work from reports day-to-day, but raw data is never discarded: any report must
be re-readable against its raw inputs and regenerable at any time.
