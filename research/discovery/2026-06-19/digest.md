# Discovery digest — June 19, 2026

A case-study-focused run. Scanned Exa (7 semantic searches targeting named-company AI
automation, with a 120-day window), Hacker News (6 queries), and Lobsters. Roughly 180
raw items before filtering. Two subagents parsed the raw into the new **case-study
library** (`research/case-studies/`): 16 verified entries landed, 8 process-integration
and 6 SaaS-replacement plus one failure and one build-vs-buy. The candidates below are
the strongest of those, the ones worth a post.

This run deliberately split the beat in two: traditional companies putting AI into an
existing workflow, and teams replacing an expensive SaaS bill with something they built
themselves. Both are now stocked in the library for individual posts and later synthesis.

## Two themes worth a take

- **"We built it ourselves instead of buying."** Netlify's HR team, a Washington school
  district, a UK software shop, a startup dropping Salesforce. The numbers are real but
  almost all self- or vendor-reported, and the honest ones admit a maintenance tail. The
  story is less "AI is cheap" and more "who owns the thing you built, and what does year
  two cost." That tension is the post.
- **Traditional firms start agents at the edges, not the core.** AIG and Bradesco are the
  exceptions aiming at underwriting and credit; most (Williams, Baker Hughes, Philips)
  start at document prep, sourcing suggestions, and the quote desk, with a human keeping
  the final say. Baker Hughes' 5-7% acceptance rate is the most honest number in the set.

## Top candidates — SaaS replacement / build-your-own

### 1. Peninsula School District expects to cut ~$200-250k by vibe-coding its own tools — [K12 Dive](https://www.k12dive.com/news/vibe-coding-helped-a-washington-district-save-250k-in-ed-tech-costs/816993/)
**Source(s):** K12 Dive and EdWeek (trade press, cross-checked)
**Relevance 5 · Deep-cut 4**
A WA public K-12 district has non-CS administrators building apps with $200/mo Claude Code seats, planning to drop three or four subscriptions for 2026-27. The CIO names the vetting and technical-debt risk himself.
**Read:** [entry](../../case-studies/entries/peninsula-school-district-vibe-coding.md) · [K12 Dive](https://www.k12dive.com/news/vibe-coding-helped-a-washington-district-save-250k-in-ed-tech-costs/816993/)

### 2. Netlify's People team replaced HR SaaS with tools they built themselves — [Netlify](https://www.netlify.com/blog/the-year-of-vibe-coding-people-team/)
**Source(s):** Netlify's own blog (first-person, self-reported)
**Relevance 5 · Deep-cut 4**
A four-person, non-engineer People team replaced a survey tool, hiring analytics, and onboarding SaaS, saving over $10k/yr and naming the data-security learning curve as the real cost.
**Read:** [entry](../../case-studies/entries/netlify-people-team-vibe-coding.md) · [Netlify](https://www.netlify.com/blog/the-year-of-vibe-coding-people-team/)

### 3. Imobisoft built a 6-agent CRM in 6 weeks with Claude Code — [Imobisoft](https://imobisoft.co.uk/ai-crm-claude-code-internal-automation/)
**Source(s):** company blog (first-person, self-reported, portfolio piece)
**Relevance 4 · Deep-cut 4**
A 15-year UK software shop reports £200/mo to run vs £36k-£60k/yr SaaS, and is candid: "this is NOT a no-code solution," and "we lost data once during a migration."
**Read:** [entry](../../case-studies/entries/imobisoft-claude-code-crm.md) · [article](https://imobisoft.co.uk/ai-crm-claude-code-internal-automation/)

### 4. Atonom dropped a $40k Salesforce contract for a ~$1,200 Lovable-built CRM — [Analytics India](https://analyticsindiamag.com/ai-news/startup-replaces-40000-salesforce-contract-with-1200-crm-built-with-lovable)
**Source(s):** Analytics India / TechGig, re-reporting Lovable's own customer post (vendor-reported)
**Relevance 4 · Deep-cut 3**
The most-cited SaaS-replacement number in the cluster. Worth using only with the vendor provenance attached.
**Read:** [entry](../../case-studies/entries/atonom-lovable-crm-salesforce.md)

## Top candidates — traditional-company process integration

### 5. AIG rebuilds underwriting on a Palantir ontology — [TBPN Digest](https://www.tbpndigest.com/story/2026-06-04/aig-ceo-peter-zaffino-on-using-palantir-to-rebuild-underwriting-and-cut-portfolio-analysis-from-months-to-days)
**Source(s):** TBPN Digest interview with AIG exec chairman Peter Zaffino
**Relevance 5 · Deep-cut 4**
A century-old commercial carrier put LLM agents on a Palantir ontology, took portfolio analysis from a 30-90 day lag to daily, and folded Everest's $2B premium book in in 4 days. A contrarian build lesson: they skipped the central data lake.
**Read:** [entry](../../case-studies/entries/aig-palantir-underwriting.md) · [TBPN](https://www.tbpndigest.com/story/2026-06-04/aig-ceo-peter-zaffino-on-using-palantir-to-rebuild-underwriting-and-cut-portfolio-analysis-from-months-to-days)

### 6. Williams cuts a field-maintenance checklist from a day to 90 minutes — [Williams](https://www.williams.com/2026/06/17/how-ai-helped-williams-cut-field-work-from-days-to-hours-and-speed-software-delivery/)
**Source(s):** Williams Companies newsroom (first-party)
**Relevance 5 · Deep-cut 4**
A natural-gas pipeline operator used approved Copilot-class tools to assemble a compressor-station maintenance checklist in ~1.5 hours instead of a full day, plus faster software delivery. The boring, repeatable AI win in heavy industry.
**Read:** [entry](../../case-studies/entries/williams-field-maintenance.md) · [Williams](https://www.williams.com/2026/06/17/how-ai-helped-williams-cut-field-work-from-days-to-hours-and-speed-software-delivery/)

### 7. Baker Hughes' AI sourcing, and the honest 5-7% number — [C3 AI](https://c3.ai/customers/baker-hughes-achieves-bottom-line-savings-with-ai-sourcing-optimization/)
**Source(s):** C3 AI customer story (vendor)
**Relevance 4 · Deep-cut 4**
Across 900K SKUs and 800+ sites, AI recommends sourcing moves and buyers accept or reject. Unusually candid for a vendor page: only 5-7% of flagged opportunities get accepted, a realistic picture of human-in-the-loop adoption.
**Read:** [entry](../../case-studies/entries/baker-hughes-c3-sourcing.md)

### 8. Bradesco aims AI at credit models, not the call center — [Valor](https://valorinternational.globo.com/business/news/2026/04/15/ai-use-in-credit-generates-at-least-r250m-for-bradesco.ghtml)
**Source(s):** Valor International interview with Bradesco's head of credit
**Relevance 5 · Deep-cut 4**
A major Brazilian bank gave its credit unit a dedicated AI team and estimates at least R$250M of impact in credit alone. Core risk modeling, not peripheral chatbots. (Full text still needs a read; the site blocked automated fetch.)
**Read:** [entry](../../case-studies/entries/bradesco-credit-ai.md)

## Watch / wildcards
- Philips "Sensai" agentic CPQ, a 135-year device maker taking quotes from 45 days to minutes, built by under 20 people in under 5 months. [entry](../../case-studies/entries/philips-sensai-quoting.md)
- The maintenance-tail counter-story: a custom Claude support-triage tool whose six-month total cost beat the $490/mo SaaS it replaced. The honest "build isn't free" angle. [entry](../../case-studies/entries/custom-claude-triage-maintenance-postmortem.md)
- Headway built its own healthcare-safe agent rather than buy, on compliance grounds. A build-vs-buy decision with a reason that isn't cost. [entry](../../case-studies/entries/headway-eddy-healthcare-agents.md)

## Skipped but notable
- Content-farm numbers we did NOT launder into entries: a UK manufacturer's "351,000 hours / £10.1M" (Ell Advisory), a "$2.3M" manufacturing figure (NSSG), Petrobras "$120M", Cargill/Axia (theapplied.co). Each traces only to an SEO/consulting domain with no named primary source. Flagged for a possible verification pass, not entry-grade as-is.
- Strong nearby enterprise stories left for a future run to avoid insurance overload: Zurich/Cytora, GNP Seguros/Palantir, Travelers/Anthropic, Georgia-Pacific/SAS.
- HN and Lobsters were essentially noise for this beat this run: dev-tooling Show HNs and AI meta-discussion, no named traditional-company deployments with numbers.
