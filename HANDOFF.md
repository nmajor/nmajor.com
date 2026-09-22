# Handoff: nmajor.com (read this first on the new machine)

Written 2026-09-22 when the project moved to a new machine. It is for the agent taking
over. Read this file, then `CLAUDE.md`, then `overview.md`. Once you've done the setup
below and talked to Nick, fold anything still true into `overview.md` and delete this file.

## The most important instruction

**Everything in this repo is a starting point, not settled law.** The skills, the
pipeline, the cadence, the LinkedIn batch format, the takes drip, and the approval
mechanics all came out of about two months of fast experiments. Some of it worked. Some of
it Nick is openly unhappy with. Don't re-run the old routine just because it's written
down. Before you run any workflow, ask whether it's earning its place, and propose changes
freely. The goal from here is to get these workflows better over time with Nick.

In Nick's words: he is **not convinced we ever got a good newsletter drafting skill or
workflow**, and **not convinced we ever got a good LinkedIn workflow**. Treat both as open
problems.

The rules that stay firm unless Nick changes them himself:

- **The human approval gate.** Nothing goes out under Nick's name without his explicit
  per-item sign-off (see the HARD RULE in `CLAUDE.md`). This gets more important once
  Hermes is posting, not less.
- **Secrets never get committed.**
- **Raw-first research.** Dump raw data to `research/<topic>/raw/`, then have a subagent
  write the report.
- **The ecosystem firewall.** nmajor.com is Nick's personal, opinionated channel. The
  Institute and Association stay neutral and non-commercial (see `overview.md`).

## Where things stand (2026-09-22)

- **It's been dormant about a month.** The last issue was `seven-days-to-close`
  (published and emailed 2026-08-18). Nothing has gone out on the site, the newsletter,
  or LinkedIn since then.
- **Nick let the Buttondown newsletter plan lapse.** There were no subscribers, so nothing
  was lost. Buttondown remains the settled newsletter platform. Assume
  `BUTTONDOWN_API_KEY` sends will fail until the plan and scoped key are reactivated.
- **The publish queue is empty** (`app/publishing.config.json`). The GitHub Actions cron
  (`.github/workflows/publish.yml`, daily at 14:00 UTC) still runs. With an empty queue it
  only rebuilds the site and drips takes. **Don't queue an essay until the newsletter
  send path works again**, or the run will fail partway through.
- **The active content pipeline is empty.** On 2026-09-22 Nick asked to start fresh. Two
  unpublished essays, all 23 social files without a `pushedAt` lock, three unpublished
  takes, and their dedicated unfinished research were moved to
  `archive/content-reset-2026-09-22/`. Archived approvals do not carry forward.
  Remaining open workflow work:
  - `research/newsletter-workflows/` now has a brief (`BRIEF.md`), 78 raw sources, and a
    completed `report.md`. The report recommends a four-issue Hermes pilot, a two-week
    rolling cadence, claim-level verification, content-hash-bound approvals, and five to
    seven LinkedIn posts as a target rather than a quota.
  - `research/ai-writing-tells/proposed-blacklist-changes.md` proposes edits to the
    `writing-voice` bans that were never applied.
  - Meme workflow (`.skills/social-meme-campaign/`): built and tried once. The rights
    and ledger state is unresolved (see the 2026-08-11 entry in `overview.md`). It's an
    experiment, not a default.
- **LinkedIn is live-enabled:** `app/linkedin.config.json` has `enabled: true` with live
  Postiz integrations for Nick's personal LinkedIn, Facebook, X, and Instagram.
  `CLAUDE.md` now reflects that state. Every post still needs Nick's per-item approval.

## What we learned (the short version)

The detail is in `overview.md` and the `research/*/report.md` files. The key lessons:

- **Automation runs off `main`, not your working tree.** The 2026-07-21 issue was missed
  because the approval and queue change were never pushed. An approval isn't real until
  it's committed and pushed.
- **Check Postiz integration identity, never the ID alone.** A LinkedIn re-auth once
  moved Nick's integration ID onto a different company page. The `expect` blocks in
  `app/linkedin.config.json` exist for this reason.
- **Never hand-edit `emailedAt` or `pushedAt`.** They're idempotency locks.
- **Prose quality is the recurring pain point.** `writing-voice` has grown a long ban
  list. `research/ai-writing-tells/` and `research/linkedin-human-voice/` are the most
  recent evidence on what reads as AI-written. LinkedIn readers can flag AI slop, so this
  matters.
- **The LinkedIn batch was heavy.** 6-10 "journalist" subagents, then a focus-group
  scoring pass, then 5 posts a week, each needing approval. It produced posts, but Nick
  isn't convinced it produced good ones, and the overhead was high. Rethink it; don't
  just rerun it.
- **Background research for reach and craft:** `research/audience-strategy/`,
  `research/linkedin-post-craft/`, `research/linkedin-breakout/`,
  `research/content-hooks/`, and `research/writing-style/`.
- **The case-study library** (`research/case-studies/`) and the discovery digests
  (`research/discovery/<date>/`, with `seen.txt` for dedup) are the idea supply.

## The new direction: Hermes

Nick wants to restart with **Hermes** handling the day-to-day operation: daily LinkedIn
posting, the weekly newsletter, and related work. **Nick supervises and refines.** Hermes
does the work; Nick reviews, edits, and approves.

What this means for you:

1. **Ask Nick how Hermes is set up** before assuming anything: what it runs on, what it
   can access (the repo? Postiz? Buttondown?), and how he wants to review its output.
2. Design the workflow so Hermes produces drafts and Nick holds the approval gate. The
   repo stays the single source of truth for content.
3. Anything Hermes needs should live somewhere both agents can read, so shared skills
   (`.skills/`) and this repo are the natural interface.
4. Expect to iterate. Start small (for example, one good LinkedIn post a day with Nick
   approving it) and let the process earn more autonomy.

## Setting up the new machine

1. **Clone:** `git clone https://github.com/nmajor/nmajor.com.git`. Every commit is on
   `main`.
2. **Recreate the skill symlinks** if the clone didn't keep them: `.claude/skills ->
   ../.skills` and `.agents/skills -> ../.skills`. `AGENTS.md -> CLAUDE.md`.
3. **Secrets aren't in git.** Copy these by hand from the old machine (or have Nick
   re-issue them):
   - `.env`: `CLOUDFLARE_ACCOUNT_ID`, `CLOUDFLARE_API_TOKEN`, `BUTTONDOWN_API_KEY`
     (lapsed, see above), `DISCORD_PUBLISH_WEBHOOK_URL`, `RYBBIT_HOST`,
     `RYBBIT_SITE_ID`, `RYBBIT_ORG_ID`, `RYBBIT_API_KEY`, `POSTIZ_BASE_URL`,
     `POSTIZ_API_KEY`, `EXA_API_KEY`.
   - `.env.gsc`: the Google Search Console OAuth client (used by `scripts/gsc.py`).
   - `last30days` keeps its own config in `~/.config/last30days/`.
   - The `icp-focus-group` skill runs the other providers' seats through the `codex` and
     `gemini` CLIs, so they need to be installed and logged in.
   - GitHub Actions secrets are already set on the repo and don't move with the machine.
4. **Install and check:** `npm --prefix app ci`, `npm --prefix app test`,
   `npm --prefix app run queue:lint`, `npm --prefix app run takes:lint`.
   `npx wrangler whoami` (inside `app/`) confirms Cloudflare auth.
5. **Things that lived outside this repo on the old machine.** `overview.md` points at
   sibling paths in the old workspace (`../../playbooks/institute-association-flywheel.md`,
   `../appliedartificialintelligence.org/`, `../executiveaileadership.org/`) and at a
   workspace `CLAUDE.md` with cross-project rules. Those don't come with this repo. Ask
   Nick whether he's moving them too. If not, treat those references as background only.

## Suggested first session

1. Do the setup and confirm tests pass.
2. Confirm the Buttondown plan and scoped key are active before testing the send path.
3. Read the completed `research/newsletter-workflows/report.md`.
4. Implement the simpler newsletter and LinkedIn pilot from that report and what
   we learned. Agree on it with Nick before you rewrite the skills.
5. Update `overview.md` and `CLAUDE.md` to match, and delete this file.
