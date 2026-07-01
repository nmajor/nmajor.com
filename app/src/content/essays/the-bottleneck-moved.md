---
title: The bottleneck didn't disappear. It moved to you.
summary: "AI made producing the work cheap, so the constraint moved to the part it can't do: a person understanding and owning what ships. That shift is most of what \"AI budgets up, returns flat\" really is."
pubDate: 2026-07-14
author: Nicholas Major
draft: true
readingMinutes: 4
---

Last year a group of experienced programmers did real work on their own projects, half of it with AI tools and half without. With the AI, they took 19% longer. The part that stays with me: they were sure the AI had sped them up by about 20%. [METR ran it as a controlled study](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/), and the distance between what the developers felt and what the stopwatch said is the most useful thing I've read about AI all year.

I write software with these tools every day, and even I was surprised. The AI produces the code in seconds. But I still have to read it, understand it, decide whether it's right, and put my name on it. That part didn't get faster. It got heavier, because now there's more output to check. The typing was never my bottleneck. Owning what I ship is.

That's most of the story behind the "AI budgets are up but returns are flat" headlines. The fix follows from it.

## Automating a step doesn't remove the bottleneck

It moves it. In 1983, before any of this, the researcher Lisanne Bainbridge wrote up what she called the [ironies of automation](https://humanfactors101.com/2020/05/24/the-ironies-of-automation/): automate the easy parts of a job and the human is left with the hard part, the judgment about whether the machine got it right and what to do when it didn't. Automation doesn't delete the difficult work. It concentrates it.

Operations people know the same idea as the theory of constraints. Speed up a step that wasn't your constraint and the system doesn't get faster; the work just stacks up in front of whatever the real bottleneck is. AI is good at speeding up the making of things. So the constraint slides to the next step, and that step is almost always a person deciding whether the output is good and being accountable for it.

## Why the numbers look flat

Zoom out and that's what the disappointing studies are measuring. Bain looked at 951 companies and found [most that tracked it got single-digit cost savings against double-digit targets](https://www.bain.com/insights/your-ai-budget-is-growing-your-returns-arent-heres-why/). The MIT report that got quoted everywhere as "95% of AI pilots fail" is softer than the number sounds; it counts custom tools that reached production, based on interviews rather than audited books, and [MIT says as much itself](https://mlq.ai/media/quarterly_decks/v0.1_State_of_AI_in_Business_2025_Report.pdf). Everyone is measuring a different thing. The Federal Reserve, looking across the whole economy, [won't yet claim a productivity gain at all](https://www.federalreserve.gov/econres/notes/feds-notes/monitoring-ai-adoption-in-the-u-s-economy-20260403.html).

Some of the "AI is replacing people" story is just message discipline. Even Sam Altman has said companies are ["blaming AI" for cuts "whether or not it really is about AI"](https://moneywise.com/news/top-stories/big-tech-layoffs-ai-washing-overhiring). But the deeper reason returns lag is the one the programmers showed. Work that looks finished feels like progress, right up until someone downstream has to redo it. Researchers gave that a name, [workslop](https://hbr.org/2025/09/ai-generated-workslop-is-destroying-productivity), AI output that looks good and lacks substance, and found about 40% of workers get handed it, at roughly two hours each to sort out. The cost didn't disappear. It moved to whoever owned the result.

## The non-code version

This isn't a software problem. Watch where the bottleneck goes in any operation.

A radiology AI flags more possible findings, faster. In one real deployment it put a [median of 239 alerts in front of each radiologist](https://arxiv.org/html/2601.13379v1), and the alert almost always arrived after the doctor had already opened the case. The reading still ends with a human signature. More flags, same number of people who can stand behind a diagnosis. The same shape holds anywhere a decision carries weight: an AI can draft the underwriting call or the loan decision, but someone still has to own it, and that capacity is the ceiling, not the drafting.

## What the companies with returns actually did

Here's the part that should change what you do Monday. The companies getting real value aren't the ones with a better model. McKinsey's surveys keep finding the strongest predictor of AI reaching the bottom line is whether a company [redesigned the workflow](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai) instead of bolting AI onto the old one. And when Gartner studied 350 companies, the ones chasing returns purely through headcount cuts got [limited returns; the value came from making people more productive](https://fortune.com/2026/05/11/ai-automation-layoffs-gartner-study-roi/), not replacing them.

The boring version works. Allianz's UK arm gave its underwriters an assistant trained on the company's own manuals, and it [saved about 135 working days of document-hunting in a year](https://www.allianz.co.uk/news-and-insight/news/brian-the-ai-brain.html). It works because it's aimed at one narrow task where being wrong is cheap, and it leaves the underwriter to own the decision. They didn't try to remove the bottleneck. They pointed AI at the step in front of it and left the human room to do the part only a human can.

So before you write off an AI project, find where your bottleneck went. If you sped up how fast the work gets produced and left the person who has to check it and sign off just as buried, you don't have a failed pilot. You have a faster machine feeding the same jam.

The programmers in that study weren't wrong that the AI was quick. They were wrong about what the job was. It was never the typing. It's owning what ships, and no model does that part for you.
