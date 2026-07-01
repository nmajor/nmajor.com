---
slug: imobisoft-claude-code-crm
company: Imobisoft
sector: Software development (bespoke business apps), UK
size: SMB; 15-year-old company, Coventry UK
category: saas-replacement
tags: [crm, claude-code, ai-agents, build-vs-buy, uk]
date_added: 2026-06-19
published: 2026-05-02
verified: source-read
confidence: medium
sources:
  - https://imobisoft.co.uk/ai-crm-claude-code-internal-automation/
---

## What they did
Imobisoft, a 15-year-old UK software company in Coventry, built its own enterprise CRM in
six weeks using Claude Code rather than paying for enterprise CRM software. The system runs
six autonomous agents that handle contact enrichment (via Apollo.io), lead scoring against
their ideal-customer profile, deal follow-up, email summarization, campaign generation, and
segmentation across 7,000+ contacts, with the agents doing the work overnight.

## The numbers
- Before: comparable enterprise SaaS quoted at £36k-£60k/year, 2-4 week setup, no ownership.
- After: £200/month to run (~£2,400/year) on a single Hetzner server.
- Cost / spend: build cost stated as £20k-£50k; claimed annual saving ~£38k; "ROI positive
  within the first week" (all self-reported).
- Time / headcount / volume: 6-week build; 7,000+ contacts managed.

## What broke / the caveats
This is on Imobisoft's own marketing site and reads partly as a portfolio piece, so the
figures are self-reported and the "before" is a SaaS price range, not a specific cancelled
contract. Crucially, Imobisoft is a software shop with senior engineers, and they say so:
"This is NOT a no-code solution," AI still needs experienced engineering oversight, and
they "lost data once during a migration." The story argues AI compresses build cost, not
that non-engineers can do this unaided.

## Why it matters for our beat
A useful counterweight to the non-technical vibe-coding stories: a team that already had
engineering skill reports faster, cheaper builds but is blunt that judgment and a data
loss were part of it. Good for separating "AI made building cheaper" from "anyone can build."

## Post angles
- Pairs against Netlify and Atonom in a piece on who the build-it-yourself math actually
  works for (engineers vs non-engineers).
- The migration data-loss line anchors a section on the operational risks vendors omit.
