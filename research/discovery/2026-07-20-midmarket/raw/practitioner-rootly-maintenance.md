# RAW: Rootly — "What broke when engineering went fully agent-based"
Source URL: https://rootly.com/blog/what-broke-when-engineering-went-fully-agent-based
Author: Rigel St. Pierre, Rootly. Published 2026-05-13.
Fetched: 2026-07-20 (via Tavily extract, advanced)
NOTE: Rootly is an incident-management SaaS vendor; this is a first-person engineering
post, not a customer case study. Company is small (well under 100) — below the
mid-market bar — but it is the sharpest maintenance/ownership passage found this run.

---
(unedited extract, nav chrome stripped)

# What broke when engineering went fully agent-based
Rigel St. Pierre — May 13, 2026

Last year, we went fully agent-based at Rootly. Cursor, Claude Code, Codex, all of it. The productivity gains were real. Something broke that I didn't expect though.

Each engineer wasn't running one agent. They were running several. Iain ships code with a workflow he calls Anduril that combines Claude and Codex with adversarial review and automated UI testing. He runs five or more of these in parallel across different worktrees, with a local dashboard to keep track of them.

He's not unusual. Most of our engineers have built out their own version of this. John has one called Feta. Kate has Playwright agent swarms. The patterns get shared in Slack threads and borrowed across the team through shared tooling.

This is great, and it's also where the fragmentation comes from. Every engineer has their own CLAUDE.md. Every engineer's swarm has its own set of conventions, picked up from whatever files it happened to read first and whatever workflow the engineer built around it. When we looked at PRs across the team, we saw the same patterns being implemented in slightly different ways. The agents were solving the same problems, but in a fragmented way.

This isn't a new problem. Conventions drift in any engineering team. What's different with agents is the speed. Ten engineers running multiple agents each can produce dozens of versions of "how we do things" inside a single quarter. The drift compounds faster than humans alone would produce it.

## The fix wasn't centralization
The instinct when something fragments is to centralize. Pick one agent, one CLAUDE.md one way of doing things. That doesn't work for us... What we could standardize was one level up. Not the agents. Not the harnesses. The substrate the agents ground in.

## The standards repo
The first thing we did was move our engineering standards out of Notion and into GitHub. They're markdown files now. Each one covers a specific area: Ruby, Rails migrations, feature flags, Postgres, observability, breaking changes. Some of these are well-developed. Others are still stubs that we're filling in. The consolidation is ongoing.

The reason for the move was practical. Agents can read markdown in GitHub fast. They can't read Notion. Version control gives us an edit history. PRs let us review changes to standards the same way we review changes to code. Notion was where standards went to be forgotten.

## The agent tools
The second repo we built is a Claude Code plugin called rootly-agent-tools. It's a marketplace of skills and commands. One install command, and every engineer on the team gets the same set. Updates push automatically.

The rule of thumb we use for what belongs in there is simple. If it would go in a repo's CLAUDE.md keep it there. If you'd want it everywhere, it belongs in the agent tools.

## The pointer pattern
The skill is called engineering-standards. It's 46 lines. It doesn't contain any standards. What it does is tell the agent that the standards repo is on disk, and to go check it before making an architectural decision. The agent reads the specific standard it needs, when it needs it. We don't pre-load the whole thing.

## Process as skill
The piece of this that's doing the most work is a skill called submit-pr. When an engineer asks an agent to ship a feature, submit-pr runs a six-phase pipeline. It writes E2E tests. It runs them against real data. It generates an architecture diagram. It builds a PR with verified evidence and a rollback plan. Every claim in the PR body has to be backed by actual execution output. Hand-written examples are not allowed.

The rule about not fabricating evidence is the most important one in there. Agents are perfectly capable of producing plausible-sounding fiction. A description of a test that wasn't run. A console session that was hand-written. The skill is structured to prevent that. If the dev DB can't produce a real journey, the gap gets stated in the PR. We don't paper over it.

## The thing I'm still figuring out
The thing I haven't solved is maintenance.

John built an internal Mac app called Soil over a weekend. It visualizes his agent workflows. Multiple worktrees, sub-agents, all of it. He shared it with the team. Other engineers started opening PRs to add features. One of our QA engineers, who doesn't write code day to day, added light mode.

The cost to build that kind of tool is cheaper than it has ever been. That's the part that's exciting. The part I'm still working through is what happens after the weekend.

Soil doesn't have an auto-updater. It doesn't have a settings menu. If John leaves Rootly tomorrow, who owns it? If macOS ships an update that breaks it next month, who fixes it?

The same question applies to the skills. Every rule in submit-pr is there because something went wrong at least once. Those rules are good now. Will they still be good in six months when the codebase has moved, when the agents have new capabilities, when our understanding of what good engineering looks like has shifted again? Probably some of them. Not all of them.

Building this stuff is cheap. Maintaining it is the same problem it has always been. We haven't solved it, and I don't think anyone has yet. That's the part of agent-based engineering I'm thinking about most right now.
