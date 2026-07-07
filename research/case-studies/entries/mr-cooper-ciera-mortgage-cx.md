---
slug: mr-cooper-ciera-mortgage-cx
company: Mr. Cooper
sector: Mortgage servicing / financial services
size: One of the largest US mortgage servicers; ~500,000 customer calls/month
category: process-integration
tags: [customer-service, call-center, multi-agent, vertex-ai, human-in-the-loop, mortgage, regulated]
date_added: 2026-07-07
published: 2026-05 to 2026-06
verified: source-read
confidence: medium
sources:
  - https://cloud.google.com/blog/topics/financial-services/assembling-a-team-of-ai-agents-to-handle-complex-mortgage-questions-at-mr-cooper
  - https://nationalmortgageprofessional.com/news/mr-cooper-bets-big-ai-expands-tech-better-cx
  - https://www.gspann.com/insights/blog/ai-agent-governance-customer-experience
---

## What they did
Mr. Cooper, a large US home-loan servicer, built a multi-agent AI system to support (not replace) its call-center staff on complex mortgage questions. The system, CIERA (Coaching Intelligent Education & Resource Agent), runs on Google Cloud's Vertex AI and handles repetitive and complex lookups so human agents can focus on judgment calls. A related tool, "Agent IQ," listens to conversations in real time to detect intent and sentiment, fetches relevant information for the agent, and auto-generates a transcript and call summary. Because mortgage servicing is heavily regulated, the company built a governance layer (an "agentic pulse" plus human oversight) around it.

## The numbers
- ~500,000 customer calls handled per month (secondary/analyst-reported).
- ~28,000 hours of agent capacity unlocked annually (secondary/analyst-reported, gspann).
- Agent IQ trained on "millions" of customer calls (company, via earnings call).
- No cost or headcount figures disclosed.

## What broke / the caveats
The design is explicitly assistive and human-in-the-loop, so there is no "AI replaced the call center" claim here, which is itself the point. The two hard numbers (500k calls, 28k hours) come from a secondary analyst blog, not the primary vendor writeup, so treat them as vendor-framed and medium-low confidence. The Google Cloud source is vendor marketing; the earnings-call detail (National Mortgage Professional) is more independent. Corporate context is in flux: Mr. Cooper recently absorbed Flagstar's mortgage-banking operations (1.1M customers) and is itself being folded into Rocket Mortgage.

## Why it matters for our beat
A named, regulated, traditional financial-services deployment that got the pattern right: AI as a copilot for the human who signs off, with an explicit governance framework, rather than a bot pointed at the customer. It is the "deployment that stuck" counterexample to the 74% customer-service rollback rate.

## Post angles
- Why the AI deployments that survive are the ones that assist the human at the point of sign-off, not the ones that replace them (ties directly to "drafting got cheap, sign-off didn't").
- Governance as an enabler: how a regulated servicer's "agentic pulse" + human oversight is what let it ship at all.
- The example leg for a piece on which customer-service AI holds vs which gets rolled back.
