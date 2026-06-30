# nmajor.com

Read `overview.md` first — it is the canonical, always-current source for this
project's purpose, state, and plans. Keep it clean as you work: update or remove
stale parts, add what's missing; never let it drift.

`AGENTS.md` is a symlink to this file, so Claude Code and Codex share these
instructions.

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
