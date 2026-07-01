---
title: The bottleneck didn't disappear. It moved to you.
summary: "AI made producing the work cheap, so the bottleneck moved to the one step it can't do: a person checking the output and standing behind it. Skip that step to go faster and all you get is work nobody owns."
pubDate: 2026-07-14
author: Nicholas Major
draft: true
readingMinutes: 4
---

More than [1,600 court filings](https://www.damiencharlotin.com/hallucinations/) have been caught citing cases the AI invented, and the lawyers who filed them are getting fined and thrown off their cases. The tool wrote the brief in seconds. Checking it and standing behind it was still the job, and that part never got faster. Even the people best equipped to catch AI's mistakes miss them: tested on their own code, [experienced developers came out 19% slower with AI](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) while being sure they were about 20% faster.

There's a rule from the factory floor that explains both, and most of the disappointing AI numbers with them. Eli Goldratt built a theory of management on it in *The Goal*, and *The Phoenix Project* later carried the same idea to teams that run everything except factories: any improvement you make somewhere other than the bottleneck is an illusion. Speed up a step that wasn't the constraint and the system as a whole doesn't get faster. The work just piles up in front of whatever the real bottleneck is.

AI is very good at speeding up one part of almost any job: producing the work. It turns a blank page into a draft, or a stack of data into a first-pass answer, in seconds. It is much weaker at the step that comes next, where a person has to check the output and own it. So in most companies the bottleneck didn't disappear. It moved onto whoever signs off on the result, and that step didn't get faster. It got heavier, because now there is more to check.

That's most of the story behind the "AI budgets are up but returns are flat" headlines. The fix follows from it.

## Automation always did this

None of this is new. In 1983, the researcher Lisanne Bainbridge described the [ironies of automation](https://humanfactors101.com/2020/05/24/the-ironies-of-automation/): automate the easy parts of a job and you leave the person with the hard part, the judgment about whether the machine got it right and what to do when it didn't. The difficult work doesn't disappear. It concentrates. That is Goldratt's rule wearing different clothes. AI automates the making of things, so the constraint slides to the one step it can't do, a person being accountable for the result.

## Why the numbers look flat

Zoom out and that's what the disappointing studies are measuring. Bain looked at 951 companies and found [most that tracked it got single-digit cost savings against double-digit targets](https://www.bain.com/insights/your-ai-budget-is-growing-your-returns-arent-heres-why/). The MIT report that got quoted everywhere as "95% of AI pilots fail" is softer than the number sounds; it counts custom tools that reached production, based on interviews rather than audited books, and [MIT says as much itself](https://mlq.ai/media/quarterly_decks/v0.1_State_of_AI_in_Business_2025_Report.pdf). Everyone is measuring a different thing. The Federal Reserve, looking across the whole economy, [won't yet claim a productivity gain at all](https://www.federalreserve.gov/econres/notes/feds-notes/monitoring-ai-adoption-in-the-u-s-economy-20260403.html).

Some of the "AI is replacing people" story is just message discipline. Even Sam Altman has said companies are ["blaming AI" for cuts "whether or not it really is about AI"](https://moneywise.com/news/top-stories/big-tech-layoffs-ai-washing-overhiring). But the deeper reason returns lag is the one the programmers showed. Work that looks finished feels like progress, right up until someone downstream has to redo it. Researchers gave that a name, [workslop](https://hbr.org/2025/09/ai-generated-workslop-is-destroying-productivity), AI output that looks good and lacks substance, and found about 40% of workers get handed it, at roughly two hours each to sort out. The cost didn't disappear. It moved to whoever owned the result.

## The non-code version

This isn't a software problem. Watch where the bottleneck goes in any operation.

A radiology AI flags more possible findings, faster. In one real deployment it put a [median of 239 alerts in front of each radiologist](https://arxiv.org/html/2601.13379v1), and the alert almost always arrived after the doctor had already opened the case. The reading still ends with a human signature. More flags, same number of people who can stand behind a diagnosis. The same shape holds anywhere a decision carries weight: an AI can draft the underwriting call or the loan decision, but someone still has to own it, and that capacity is the ceiling, not the drafting.

## The tempting shortcut

There is a way to make AI genuinely faster: stop checking its work. Skip the reading and the sign-off, and ship whatever it produces. That is the one move that truly clears the new bottleneck, and it is the exact move behind those 1,600 sanctioned briefs and most of the workslop. But that checking is the quality itself. It is the step where a person makes the output true and takes responsibility for it, and those two turn out to be the same act. Remove the person who owns the result and all you have sped up is the production of work nobody stands behind, which costs more downstream than it ever saved.

## What the companies with returns actually did

Here's the part that should change what you do Monday. The companies getting real value aren't the ones with a better model. McKinsey's surveys keep finding the strongest predictor of AI reaching the bottom line is whether a company [redesigned the workflow](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai) instead of bolting AI onto the old one. And when Gartner studied 350 companies, the ones chasing returns purely through headcount cuts got [limited returns; the value came from making people more productive](https://fortune.com/2026/05/11/ai-automation-layoffs-gartner-study-roi/), not replacing them.

The boring version works. Allianz's UK arm gave its underwriters an assistant trained on the company's own manuals, and it [saved about 135 working days of document-hunting in a year](https://www.allianz.co.uk/news-and-insight/news/brian-the-ai-brain.html). It works because it's aimed at one narrow task where being wrong is cheap, and it leaves the underwriter to own the decision. They didn't try to remove the bottleneck. They pointed AI at the step in front of it and left the human room to do the part only a human can.

So before you write off an AI project, find where your bottleneck went. If you sped up how fast the work gets produced and left the person who has to check it and sign off just as buried, you don't have a failed pilot. You have a faster machine feeding the same jam.

The way out runs through that person. Point AI at the work in front of the bottleneck, and give whoever owns the result more room to do the one thing a model can't: judge whether the work is right and put their name on it. That judgment is the job now. The drafting AI sped up was never really the point.
