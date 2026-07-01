---
slug: philips-sensai-quoting
company: Philips
sector: Healthcare technology / medical devices
size: 135-year-old company, tens of thousands of employees
category: process-integration
tags: [sales-quoting, agents, amazon-bedrock, healthcare, configure-price-quote]
date_added: 2026-06-19
published: 2026-05-28
verified: source-read
confidence: low
sources:
  - https://www.rockingrobots.com/how-philips-compressed-45-days-into-minutes-with-ai-and-built-it-in-under-five-months/
---

## What they did
Philips built an agentic system, "Sensai," to generate sales quotes for digital pathology
customers. The old process took 45 days of chasing systems and spreadsheets; Sensai produces a
quote in minutes. A cross-functional team of fewer than 20 people (Philips, AWS, EPAM) built it on
Amazon Bedrock in under five months, using AWS's Kiro AI development tool. Three agent types split
the work: pricing/configuration, product customization, and a manual-activity orchestrator that
updates CRM, distributes quotes, and drafts emails. Presented by Philips' VP of AI and Business
Operations at AWS Summit Amsterdam 2026.

## The numbers
- Quote generation: 45 days down to minutes, for digital pathology (company-stated, from stage).
- Build: under five months; prototype in 2 weeks, first PoC in 6 weeks.
- 75% faster development cycle vs traditional approaches (company-stated).
- Team: fewer than 20 people across Philips, AWS, and EPAM.
- Volume, dollars, post-launch adoption, quote accuracy: unknown.

## What broke / the caveats
This comes from a conference talk at an AWS event, so it is promotional and unaudited. "45 days to
minutes" is a single product line (digital pathology quoting), not Philips-wide. There are no volume
figures, no dollar impact, and no error/accuracy numbers, which matter a lot for quoting. The most
concrete "impact" cited is a seller saying they'd take a doubled quota, an anecdote, not a metric.
The build-speed claims (5 months, 75% faster) come bundled with AWS tooling promotion ("using AI to
build AI").

## Why it matters for our beat
A 135-year-old medical-device maker collapsing a configure-price-quote cycle with agents, built fast
by a small team inside a regulated, legacy-heavy environment. Good example of the unglamorous but
high-value back-office workflow (quoting) that traditional companies actually move first.

## Post angles
- "Where traditional companies start with agents": not the product, the quote desk. CPQ as the
  realistic first agentic deployment.
- The small-team-inside-a-giant pattern (fewer than 20 people, 5 months) is a recurring shape worth
  a synthesis across entries.
