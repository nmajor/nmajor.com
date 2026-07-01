---
title: Build-versus-buy broke, and AI broke it
summary: "The two costs that made building irrational — money and time — just fell to near zero, even for people who don't write code. Here is the cost that moves onto you, the one that never shows up on the invoice."
pubDate: 2026-06-23
author: Nicholas Major
draft: false
readingMinutes: 5
---

A public school district in Washington expects to [save up to $250,000 in software contracts](https://www.k12dive.com/news/vibe-coding-helped-a-washington-district-save-250k-in-ed-tech-costs/816993/), because its staff, none of them coders, started building the tools themselves. Even software companies used to buy. Now even non-software companies can build.

For most of the last twenty years, build versus buy had one sensible answer. You bought. Building your own was a money pit of cost, delay, and upkeep that only paid off when the thing you needed was genuinely one of a kind. So you rented, and the rent went up every year. AI broke that math. The two costs that made building irrational, the money and the wait, have fallen close to zero, even for people who have never written a line of code.

FranklinCovey's CIO, Blaine Carter, says the old rule out loud. For most of his career, he writes, ["the least controversial question in enterprise IT"](https://diginomica.com/buy-build-how-franklincovey-cio-blaine-carter-replacing-packaged-apps-low-code-and-ai) was what to buy, because building bespoke systems meant "high costs, interminable delays, and ongoing maintenance headaches." He is now replacing packaged software with tools his own team builds. And this is not one district and one CIO. In a [Retool survey this year](https://retool.com/blog/ai-build-vs-buy-report-2026), more than a third of teams said they had already replaced a paid software tool with one they built, and nearly four in five planned to build more this year. A construction firm in Spain [reports building its own project and operations system](https://rork.com/blog/construction-company-erp-case-study), web and mobile apps both, without hiring a single developer.

If you sign the software checks for a real-world business, this should make you do some math. Some of what you rent, you could now own.

## The cost didn't disappear. It moved.

Here is the part the savings stories leave out. I build software for a living, and not all of the work happens before launch. Vital parts happen after. The license fee you cancel does not vanish. It turns into a maintenance and security cost that, unless you are careful, can bite you.

Netlify's people team, four staff with no engineers among them, [built their own HR tools and cut real spend](https://www.netlify.com/blog/the-year-of-vibe-coding-people-team/). They are also honest that one of those apps, a simple employee survey, pushed them past their depth on data security and forced them to pull in the company's engineering, security, and IT teams. Netlify is a software company. Its people had a security team down the hall. If a survey tool tripped them, it can trip a logistics firm or a dental group with nobody to call.

## The danger is the door left open

The risk is also bigger than buggy code. Every tool you stand up and connect to the internet is another door into your business. The dangerous one is rarely the clever break-in. It is the door someone left open without meaning to.

In 2023, the security reporter Brian Krebs found a run of organizations [leaking private data through their own public websites](https://krebsonsecurity.com/2023/04/many-public-salesforce-sites-are-leaking-private-data/), built on Salesforce. Salesforce was not hacked. Whoever set up each site had left the guest setting, the visitor who never logs in, able to read records that were meant to be private. A State of Vermont site for pandemic unemployment aid exposed applicants' names, addresses, Social Security numbers, and bank account numbers. A bank's loan site exposed full Social Security numbers, federal IDs, and payroll figures. Anyone who thought to look could read them. Nobody broke in. The door had been standing open since the day the site went live.

That is the exact shape of the new risk. A team needs a customer portal or an intake form. They stand one up in an afternoon and never quite stop to ask who, exactly, can see what. The tool works, so it ships, and the open door ships with it, still there long after everyone has moved on.

It does not help that AI-built code tends to pick the easy path over the safe one. As the engineer Gautam Koul [puts it on Martin Fowler's site](https://martinfowler.com/articles/vibesec-reckoning.html), you can tell a coding model to "be secure" and it will still reach for open storage and over-broad permissions, then describe them as standard. The fix is the dull work of review.

## Build, but own it on purpose

This isn't a reason not to build. Forbid it and you hand back every dollar of the savings, and your people will build anyway, on personal accounts where you cannot see it. In [Retool's survey](https://retool.com/blog/ai-build-vs-buy-report-2026), 60% said they already had, outside any IT oversight, and the people most fluent in AI are [the most likely to route around the rules](https://www.cio.com/article/4178359/why-your-most-ai-savvy-employees-are-driving-shadow-ai.html). A wall does not work here. A paved road does.

A few things separate Netlify's outcome from those leaks. Give people one sanctioned place to build, so it stops happening in the dark. Draw a clear line for when something needs a real security review, and key that line to the data a tool touches, not its size. A tool that summarizes meeting notes is fine. A tool that holds customer records or moves money is not. And put a named owner on anything that outlives its first month, because the tool nobody owns is the one that fails in silence.

So the software bill that climbs every year is no longer a fixed cost. Some of what you rent, you can now own. Just remember what the rent was quietly paying for. When a vendor patched a hole at two in the morning, that was the rent. Own the tool, and that job is yours, or it is no one's, and no one's is how an app nobody remembers ends up holding your customers' data behind a door nobody locked.

Building is cheap now. Owning is the part you have to mean. Build what you can run, own what you build, and a year from now the savings will still be there.
