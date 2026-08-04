---
title: Uber measured the bill. It couldn't measure the work.
summary: "Uber burned a full year's budget for AI coding tools in four months. The spend was under one percent of its R&D. The problem was that every number it could produce was an input."
pubDate: "2026-08-04T14:50:17.569Z"
author: Nicholas Major
draft: false
approved: "Nicholas Major 2026-08-04 (via chat)"
readingMinutes: 4
heroTitleLead: "Uber measured the bill. "
heroTitleAccent: "It couldn't measure the work."
heroLede: "Uber burned a full year's budget for AI coding tools in four months. The money is the least interesting part of what went wrong."
emailedAt: "2026-08-04T14:50:37.087Z"
---

Uber blew its entire 2026 budget for AI coding tools in four months. Everyone is taking the wrong lesson. 

The company put Claude Code in front of [roughly 5,000 engineers](https://www.forbes.com/sites/janakirammsv/2026/05/17/uber-burns-its-2026-ai-budget-in-four-months-on-claude-code) in December 2025. By April the year was spent. Forbes reports the CTO himself ran up $1,200 in one two-hour session. The average engineer cost $150 to $250 a month, and the heavy users ran between $500 and $2,000.

So do the arithmetic, which almost nobody who shared this story bothered to do. Five thousand engineers at $200 a month is around $12 million a year. Uber spent [$3.4 billion on R&D in 2025](https://www.forbes.com/sites/janakirammsv/2026/05/17/uber-burns-its-2026-ai-budget-in-four-months-on-claude-code). The runaway AI bill that made every newsletter is well under one percent of what the company already spends building things, assuming it sits in R&D where you'd expect engineering tools to sit.

Small against R&D. Enormous against the line it was actually charged to.

Uber ran internal leaderboards ranking engineers by how much they used the tools, and the teams pushing adoption weren't the ones responsible for the budget.

On consumption pricing, "how much you used it" means "how many tokens you burned," which means "how much you spent." So the scoreboard was the bill. They ranked people by cost and read it as progress.

It's the old Dilbert strip where the company announces it will pay engineers for every bug they fix, and Wally says he's going to write himself a minivan. You get what you incentivize. That's an old management problem, and a boring one. AI just made it expensive faster than usual.

By late May, Uber's president and COO Andrew Macdonald was [saying the quiet part on a podcast](https://fortune.com/2026/05/26/uber-coo-ai-spending-tokens-claude-code). On whether the rising spend was producing more for customers, he said the link "is not there yet." He wasn't short of numbers. Uber can tell you 95% of its engineers use AI tools monthly, and its CEO says roughly 10% of committed code is now written by autonomous agents. Macdonald's complaint was that he had the stats and couldn't draw a line from any of them to a feature a rider would notice.

Every number Uber can produce about this is an input. How much got used, and what share of the code it touched. None of it is an output.

None of that is specific to software. Any AI tool you roll out will hand you a usage dashboard on day one, because usage is the thing the vendor can measure for free. Seats active. Documents processed. It looks like adoption and it feels like momentum, and it is a description of your invoice.

For a while I ran three or four AI agents in parallel on different tasks, because more agents obviously meant more throughput. Then they'd all finish. And I'd be sitting there context-switching between four or five different features and bug fixes at once, trying to hold each one in my head well enough to review it honestly. I had optimized the part that was already cheap and built myself a towering to-do list out of the part that wasn't.

I run two now. Two is what I can actually check. And checking is the job: I read the code before it merges, and the bar is whether it looks clean and feels like something I'd have written.

The thing that genuinely moved my productivity wasn't more agents. It was having the AI verify its own work, driving the app end to end with Playwright and actually testing what it built. On a feature with dozens of permutations to check, that's a big lift, and it works because it attacks the review step instead of flooding it.

I can't hand you a clean output metric for AI-assisted engineering, and I don't think anyone has one yet. Code was the expensive thing for twenty years and now it isn't, and refactoring is cheap too, so a lot of what we used to measure quality by has quietly stopped meaning what it meant. Two or three years ago I'd have told you to reward high-quality code balanced against shipping features. Today I'd lean further toward shipped features and admit I'm not certain.

A lot of people are saying AI now costs more than the employees, and I don't think that survives five years. It's selectively true today, not generally true, and the intelligence you get per dollar keeps improving. AI is also still remarkably dumb at plenty of things, including some kinds of software. Both of those can be true at once.

Uber's fix arrived on June 2: a [$1,500 monthly cap per AI coding tool](https://simonwillison.net/2026/Jun/3/uber-caps-usage/), tracked per tool rather than in total, so an engineer running two has a $3,000 envelope. Simon Willison called it a rational response to overspending, and he's right. It's also about seven times the average engineer's actual monthly spend, so it only clips the extreme tail. It came a week after Macdonald said the link wasn't there. A spending cap answers how much. It doesn't answer what for.

If you're turning on a metered AI tool this quarter, the useful move is boring: make whoever owns the adoption target own the budget line too, and decide what output you'll judge it by before the meter starts, while you can still pick honestly. Working that out in advance is a fair bit of what I end up doing with companies.

Uber could tell you exactly what its engineers spent, ranked, to the dollar. What they built with it, nobody there could say.
