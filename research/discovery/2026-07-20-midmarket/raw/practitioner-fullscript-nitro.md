# RAW: Fullscript — "So We Built Our Own Agentic Developer…and then the CEO shipped a feature"
Source URL: https://builders.fullscript.com/posts/lessons-learned-from-building-nitro-fullscripts-autonomous-background-agent
Author: Nick Crum, Fullscript. Published 2026-02-03.
Fetched: 2026-07-20 (via Tavily extract, advanced)
HN submission: https://news.ycombinator.com/item?id=46890962 (2026-02-04, 6 pts, 0 comments)

---
(unedited extract)

# So We Built Our Own Agentic Developer…and then the CEO shipped a feature
Lessons learned from building Nitro, Fullscript's autonomous background agent.

System Fullscript platform / Stack Production systems / Scale 100K+ practitioners / Status Production
Author Nick Crum Published 02/03/2026

Last month, our CEO shipped a bug fix. It went through code review, passed CI, and got merged – just like any other change. No special treatment. A week later, he moved beyond fixes and shipped a brand new feature in our mobile app.

That was a half a year of work paying off.

Our background agent officially launched late October 2025. In January, three months later, 19% of our pull requests were created by this tool, and developers are voluntarily tagging the agent to code review on 45% of our pull requests. They're using it for feature development, tedious tasks, and clearing backlogs that sat untouched for years.

Even more unexpected: the users we never anticipated. Product managers are shipping UX improvements directly. Designers are fixing copy. And yes our CEO has shipped three changes so far.

We call it Nitro. This is the story of how we built it, how it fits into our workflow, and what we learned along the way.

## What Brought Us Here?

We started this effort mid-2025. Even then, the AI tooling space was already full of impressive products: Claude Code, Cursor, and Codex to name a few. ... But, we were struggling to take advantage of them. Fullscript runs a mature Rails monolith with a React frontend. It's over a decade old, with millions of lines of code, and 180+ engineers contributing regularly. That scale and history is an asset, but it also meant off-the-shelf AI tools didn't quite fit for a number or reasons:

*   **Self-hosted GitLab.** Many tools are GitHub-first. Integration was either unavailable or limited.
*   **Monolith complexity.** Our codebase needed execution in the right environment with the right access. Drop-in solutions couldn't easily navigate our setup.
*   **Workflow mismatch.** We use Linear for issues, GitLab for code. Many tools assume one platform or the other.
*   **Internal infrastructure.** We wanted something that could access our internal APIs, run against staging environments, and use our secrets management – things external tools can't do.

Leadership gave a small team a mandate: figure out if this could work. It was a gamble – pulling developers off product work to chase an idea that might not pan out. Within six months, we had something real.

## What We Built

Nitro is an agentic developer in the cloud that's integrated with all of your tools. It doesn't live on your laptop. It lives everywhere else our developers are: the issue tracker and code review system. You assign it an issue, and it opens a pull request. You add it as a reviewer, and it leaves comments.

### How Engineers Use It
*   **In GitLab:** Mention @nitro in any issue or PR comment.
*   **In Linear:** Assign Nitro to an issue or tag it in comments.

### What It Can Do

#### Code Reviews
At Fullscript, we require two reviewers on every PR with at least one approval to merge. That's a lot of review work across 150+ engineers. Nitro helps carry that load.
Add Nitro as a reviewer on any pull request. It leaves inline feedback on conventions, performance issues, and security concerns – consistent every time, no matter when you submit.
Developers are voluntarily tagging Nitro on 45% of our pull requests. Inline with the review, they can provide feedback on the quality with a simple thumbs up / thumbs down system.

#### Catching What Humans Miss
Here's a story we love telling: we retroactively ran Nitro Review on past pull requests that had caused production issues. Nitro identified the bugs.

#### Issue Implementation
Assign a Linear issue to Nitro. It reads the issue, writes code, and opens a PR. Works best for well-defined, scoped tasks.

#### Expanding Who Can Contribute
A PM describes a visual bug or small UX issue. Nitro opens a PR ready for review.
A designer requests a copy change. Working code, ready for review.
An operations lead fixes an unintuitive aspect of an admin tool that's been bugging them for months.

## Under the Hood
*   **Isolated execution.** Each request spins up a fresh environment. Clean clone, no state leakage between runs.
*   **Claude Code backbone.** We use Claude Code as the coding agent that powers Nitro. This is swappable – we could plug in Codex, Gemini, OpenCode or others – but Claude has been the best fit for us so far.
*   **Webhook-driven.** GitLab and Linear events trigger Nitro automatically. Responses post back to the source.
*   **Our environments.** We already had facilities for developers to stand up testing environments on the fly, and we gave that ability to Nitro too.

It took us about half a year to get from "what if we built this" to something usable.

## What Actually Works (and What Doesn't)
The quality bar doesn't change; human reviewer on every PR, developer approval to merge, CI and E2E tests have to pass. Nitro's output goes through the same process as anyone else's code. Half a year in, here's what we've learned.

### Where Nitro Shines
*   **Fixing flaky specs.**  *   **Small UX changes.**  *   **Resolving N+1 queries.**
*   **Bug fixes with stack traces.**  *   **Feature flag cleanup.**
*   **Scoped tasks within larger features.**  *   **Prototyping from designs.**

### Where It Struggles
*   **Ambiguous tasks.** Vague requirements produce vague output. Nitro can't read your mind.
*   **Deep architectural work.** It doesn't understand system-wide tradeoffs well. Big-picture decisions still need human judgment.
*   **Large context needs.** Changes touching many files can exceed useful context. Some problems are too sprawling.
*   **More output, more review load.** More code shipping means more code to review. We're still balancing the increased volume.

## It's Not Perfect
Early on, we used Nitro to fix some N+1 queries. It didn't have a full understanding of some nuances in our setup – how certain patterns could surface N+1s in ways that weren't obvious. The fix it proposed looked reasonable, passed human review, and shipped. Then it caused 500s in production. We reverted it.

That failure clarified something: Nitro can only be as good as the context we give it. The conventions that lived in people's heads? Nitro didn't know them. And honestly, neither did some of our developers at the time.

## The Side Effect We Didn't Expect
To make Nitro effective, we had to document things we'd never written down, such as conventions, patterns, and the nuances that caused that N+1 incident. Some people call this the "intent layer" – markdown files, rule sets, collected skills that tell an AI how to work in your codebase. We like that framing.

Turns out that documentation helps new developers just as much as it helps Nitro. Teaching an agent exposed gaps in how we taught humans. We are writing more documentation than ever before.

## What's Next
*   **Faster, more responsive.** Reducing environment spin-up time.
*   **Mid-task interaction.** Right now, you fire and forget. We want back-and-forth.
*   **More platform integrations.** Slack triggers/notifications, a CLI, a front end.

## Closing Up
The CEO's feature shipped through the same process as everyone else's code. That's the point. We didn't lower the bar, we changed what contribution means.

---
RELATED (same blog, later): "Building Fullscript Assist" (2026-07-08) — https://builders.fullscript.com/posts/building-fullscript-assist
"Using an LLM as a Test Compiler" (2026-06-25) — https://builders.fullscript.com/posts/using-an-llm-as-a-test-compiler
