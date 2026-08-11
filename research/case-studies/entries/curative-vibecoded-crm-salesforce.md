---
slug: curative-vibecoded-crm-salesforce
company: Curative
sector: Healthcare / health insurance
size: Health plan and medical staffing company (private)
category: saas-replacement
tags: [crm, salesforce, vibecoding, claims, healthcare, token-cost, build-vs-buy]
date_added: 2026-08-11
published: 2026-07-21
verified: cross-checked
confidence: medium
sources:
  - https://www.businessinsider.com/curative-ceo-salesforce-vibecode-crm-2026-7
  - https://finance.yahoo.com/technology/ai/articles/curative-ceo-says-company-ditched-090701283.html
  - https://news.ycombinator.com/item?id=49000489
---

## What they did
Curative co-founder and CEO Fred Turner says the company vibecoded a replacement CRM in about
two months and filed a notification of cancellation on its Salesforce contract. His stated
reason was not primarily cost: nobody was using Salesforce any more, and the internal build is
more integrated because Curative's own agents run inside it. The company also says it will be
off its legacy claims-processing system entirely as of July 2026, and plans to cut total SaaS
spend by roughly 80% this year.

## The numbers
- Salesforce contract cancelled: ~$600,000/year (company-reported).
- Build time: ~2 months, internal (company-reported).
- Planned SaaS spend reduction: ~80% in 2026 (company-reported).
- Model spend: reported as growing ~6x every month, from tens of thousands of dollars to
  millions of dollars a month (company-reported, via interview).
- Turner separately claims agentic AI can cut insurance admin costs by up to 96% — a forward
  claim, not a measured result. Treat as marketing.

## What broke / the caveats
Every figure traces to one CEO interview, so it is self-reported and unaudited. The important
detail is the one that undercuts the headline: the SaaS line went down by $600k while the model
line went up at 6x a month, from tens of thousands to millions. On the reported trajectory the
new bill passes the old one quickly, which makes this a substitution of one vendor dependency
for another rather than a clean saving. No before/after on headcount, maintenance burden, or who
is on call for the CRM they now own. Nobody-was-using-Salesforce also suggests the contract was
shelfware, which is a procurement failure as much as an AI win.

## Why it matters for our beat
A named healthcare company on the record cancelling a six-figure enterprise contract for
something a small team built, in a regulated sector — and, in the same breath, disclosing a
token bill compounding faster than the saving. It is the cleanest current example of the real
build-vs-buy trade: you do not remove the cost, you move it to a line that scales with usage
instead of seats.

## Post angles
- "You didn't cancel the bill, you re-based it" — the 6x-a-month token line next to the $600k
  saving.
- Shelfware is the actual finding: nobody was using the CRM. What else is nobody using?
- Pairs with [franklincovey-buy-to-build](franklincovey-buy-to-build.md) and
  [microsoft-claude-code-copilot-cost](microsoft-claude-code-copilot-cost.md) as the two ends of
  the same arc — build to save, then discover consumption pricing.
