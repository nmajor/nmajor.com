---
slug: aig-palantir-underwriting
company: AIG
sector: Insurance
size: ~$200B commercial P&C carrier
category: process-integration
tags: [underwriting, insurance, palantir, ontology, llm, agents]
date_added: 2026-06-19
published: 2026-06-04
verified: source-read
confidence: medium
sources:
  - https://www.tbpndigest.com/story/2026-06-04/aig-ceo-peter-zaffino-on-using-palantir-to-rebuild-underwriting-and-cut-portfolio-analysis-from-months-to-days
  - https://getperspective.ai/blog/aig-ai-commercial-insurance-conversational-underwriting-2026
---

## What they did
AIG rebuilt the data layer under its commercial underwriting on Palantir Foundry, building a
digital "ontology" of its portfolio. LLM agents read submissions and extract data, but the
ontology is the part that lets AIG track risk decisions across the whole book. CEO Peter Zaffino
described the goal as assessing risk on a daily basis rather than on a quarterly lag. AIG also
runs Anthropic's Claude internally with underwriters and is building an "Underwriter Companion"
with Palantir and Salesforce.

## The numbers
- Before: portfolio analysis ran on a 30-to-90 day lag (company-reported, via interview).
- After: daily portfolio updates (company-reported).
- Integration: layered Everest's $2B premium book onto the existing ontology in 4 days rather
  than months (company-reported).
- Underwriters reportedly spend ~50%+ less time on data ingestion and submission triage
  (vendor-adjacent blog, getperspective.ai, unverified, treat as soft).
- Cost / headcount: unknown. Zaffino explicitly rejected a layoff framing.

## What broke / the caveats
The hard numbers come from a CEO interview, so they are self-reported and unaudited; no
methodology or dollar figures were given. A useful, non-marketing detail did surface: the team
found a centralized data lake was unnecessary and that routing directly to admin platforms was
faster, which cuts against the usual "build the lake first" advice. The "underwriters spend 50%+
less time" figure traces to a vendor-adjacent blog, not AIG, so it is the weakest claim here.
The Palantir model (forward-deployed engineers, 90-day cycles) is also a cost structure the piece
does not quantify.

## Why it matters for our beat
A 100-year-old commercial carrier putting LLM agents into the core of underwriting, with a named
executive on record about what changed and what they learned (skip the data lake). It is the
clearest current example of "ontology first, LLMs second" in a regulated, traditional business.

## Post angles
- "Agentify a bad process and you just burn tokens" pairs this with the BNP Paribas line: AIG's
  ontology-first sequencing is the counter-move.
- Feeds an insurance-underwriting synthesis alongside Generali, Zurich/Cytora, Allianz.
- The "we didn't need the data lake" finding is its own contrarian post for traditional-company CIOs.
