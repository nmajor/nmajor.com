# Case-study index — running list

The master list. One row per case study; newest at the top. Full detail is in
`entries/<slug>.md`. See `README.md` for the schema and what qualifies. **Append a row
every time a new entry lands.**

Legend — **Category:** `proc` = process-integration · `saas` = saas-replacement ·
`cost` = cost-reckoning · `fail` = failure · `bvb` = build-vs-buy · `gov` = governance.
**Verified:** `unv` unverified · `read` source read · `xchk` cross-checked · `prim`
primary source.

| Added | Company | Sector | Cat | The one-line story | Numbers | Verified | Entry |
|-------|---------|--------|-----|--------------------|---------|----------|-------|
<!-- new rows go here, newest first -->
| 2026-07-07 | UnitedHealth Group | Health insurance | gov | $3B AI push automating claims/coverage while a federal suit over its nH Predict denial algorithm advances | ~$1B 2026 cost cut, 2:1 ROI claimed; denials 8.7%→22.7% (2019-22) | xchk | [unitedhealth-ai-claims-denials](entries/unitedhealth-ai-claims-denials.md) |
| 2026-07-07 | Mr. Cooper | Mortgage servicing | proc | Multi-agent CIERA on Vertex AI assists (not replaces) call-center agents on complex mortgage questions, human-in-the-loop | ~500k calls/mo; ~28k agent-hours/yr freed (analyst-reported) | read | [mr-cooper-ciera-mortgage-cx](entries/mr-cooper-ciera-mortgage-cx.md) |
| 2026-07-07 | Microsoft (Experiences & Devices) | Software / technology | cost | Cancelled Claude Code for thousands of engineers, moved to flat-priced GitHub Copilot after token bills spiked | $500-$2,000/engineer/mo (reported); consolidated by Jun 30 | xchk | [microsoft-claude-code-copilot-cost](entries/microsoft-claude-code-copilot-cost.md) |
| 2026-07-07 | Commerzbank | Banking | proc | Regulated German bank runs AI service agents ("Ava"/"Bene") resolving most routine inquiries autonomously | 70-75% autonomous resolution (vendor-reported, unreconciled) | read | [commerzbank-ai-service-agents](entries/commerzbank-ai-service-agents.md) |
| 2026-06-19 | FranklinCovey | Training / leadership development | saas | CIO Blaine Carter replacing packaged SaaS with low-code/AI builds; a ~$50k/yr finance app and RFP software rebuilt in-house | RFP completion 85-90% faster; ~$100k spend avoided | read | [franklincovey-buy-to-build](entries/franklincovey-buy-to-build.md) |
| 2026-06-19 | Brivo | Physical security / access control | saas | COO Hans Kahler built an internal HR objectives tool himself instead of buying | "Close to $100K" HR software avoided (self-reported) | read | [brivo-hr-tool-vibe-coding](entries/brivo-hr-tool-vibe-coding.md) |
| 2026-06-19 | Grupo Tecnon ("Miguel") | Construction | saas | Non-technical CEO built a web+iOS+Android ERP on Rork, zero developers, replacing Procore-class SaaS | "$50k-$150k+" custom-dev avoided (vendor-reported) | read | [grupo-tecnon-construction-erp](entries/grupo-tecnon-construction-erp.md) |
| 2026-06-19 | AIG | Insurance | proc | Rebuilt commercial underwriting on a Palantir ontology with LLM agents; portfolio analysis went from a 30-90 day lag to daily | Everest $2B book integrated in 4 days | read | [aig-palantir-underwriting](entries/aig-palantir-underwriting.md) |
| 2026-06-19 | Williams Companies | Energy / gas pipelines | proc | Approved AI tools (Copilot) for field-crew document prep and AI-assisted software delivery | Maintenance checklist 1-2 days to ~1.5 hrs | prim | [williams-field-maintenance](entries/williams-field-maintenance.md) |
| 2026-06-19 | Bradesco | Banking | proc | Pointed a dedicated AI team (incl. Kunumi) at credit modeling, not the call center | At least R$250M impact in credit | unv | [bradesco-credit-ai](entries/bradesco-credit-ai.md) |
| 2026-06-19 | Baker Hughes | Energy / industrial | proc | C3 AI sourcing optimization across procurement with human-in-the-loop buyer approval | 5-7% acceptance rate on flagged opportunities | read | [baker-hughes-c3-sourcing](entries/baker-hughes-c3-sourcing.md) |
| 2026-06-19 | Philips | Healthcare / medical devices | proc | Agentic CPQ system "Sensai" for digital-pathology sales quotes, built by <20 people in <5 months | Quote cycle 45 days to minutes | read | [philips-sensai-quoting](entries/philips-sensai-quoting.md) |
| 2026-06-19 | Generali GC&C | Insurance | proc | Gen AI assistant on a 25-country SaaS re-platform of commercial underwriting | Pre-bind activities 80% faster (vendor) | read | [generali-gcc-underwriting](entries/generali-gcc-underwriting.md) |
| 2026-06-19 | Allianz Partners | Insurance | proc | Replacing people-scaled claims ops with Otera autonomous agents (results not yet disclosed) | 90M+ cases/yr; 29-day baseline | unv | [allianz-partners-claims](entries/allianz-partners-claims.md) |
| 2026-06-19 | The Warehouse Group | Retail | proc | Blue Prism digital workers across supply chain and sales (mostly RPA, AI-framed) | $15.3M value, 40,600 hrs (vendor) | unv | [warehouse-group-automation](entries/warehouse-group-automation.md) |
| 2026-06-19 | Netlify (People team) | Software / dev platform | saas | Four-person non-engineer HR team replaced survey/analytics/onboarding SaaS with tools vibe-coded on Netlify | >$10k/yr saved (self-reported) | read | [netlify-people-team-vibe-coding](entries/netlify-people-team-vibe-coding.md) |
| 2026-06-19 | Imobisoft | Software dev (UK) | saas | 15-yr UK software shop built a 6-agent CRM in 6 weeks with Claude Code instead of enterprise SaaS | £200/mo vs £36k-£60k/yr; ~£38k/yr saved (self-reported) | read | [imobisoft-claude-code-crm](entries/imobisoft-claude-code-crm.md) |
| 2026-06-19 | Atonom | Software (AI agents) | saas | 25-30 person startup dropped Salesforce, rebuilt CRM on Lovable in hours | $40k/yr to ~$1,200/yr (vendor-reported via Lovable) | read | [atonom-lovable-crm-salesforce](entries/atonom-lovable-crm-salesforce.md) |
| 2026-06-19 | Peninsula School District | Public K-12 education | saas | WA public district has non-technical admins build apps with Claude Code, cancelling ed-tech contracts | ~$200k-$250k/yr projected saving | xchk | [peninsula-school-district-vibe-coding](entries/peninsula-school-district-vibe-coding.md) |
| 2026-06-19 | Headway | Healthcare (mental health) | bvb | Named health-tech co built its own AI agent "Eddy" rather than buy, citing compliance | 60 PRs/mo, 2-mo build; no $ given | read | [headway-eddy-healthcare-agents](entries/headway-eddy-healthcare-agents.md) |
| 2026-06-19 | Herizon (Mari Luukkainen) | Nonprofit (Finland) | saas | Nonprofit replaced an 8-tool SaaS stack with one custom platform | ~3,000 EUR/mo before (after unconfirmed) | unv | [herizon-custom-platform-saas-replacement](entries/herizon-custom-platform-saas-replacement.md) |
| 2026-06-19 | Unnamed (Ronik Dedhia) | Software / AI search | saas | Author rebuilt Pinecone vector search in-house over a weekend to cut the bill | ~$96k/yr Pinecone bill cut (self-reported, co. unnamed) | unv | [pinecone-in-house-vector-search](entries/pinecone-in-house-vector-search.md) |
| 2026-06-19 | Unnamed (InsiderAITrends) | Software / support | fail | Custom Claude triage tool replaced $490/mo Intercom, but 6-mo TCO exceeded the SaaS | $490/mo vs $28/mo API, TCO higher (content-farm source) | unv | [custom-claude-triage-maintenance-postmortem](entries/custom-claude-triage-maintenance-postmortem.md) |

## Counts by category

_Update as the list grows — a quick read on where the corpus is thick or thin._

- process-integration: 10
- saas-replacement: 9
- cost-reckoning: 1
- failure: 1
- build-vs-buy: 1
- governance: 1

_Total: 23. Thin spots to fill next run: more failure and build-vs-buy cases, manufacturing/logistics deployments, and independently-verified (vs vendor-reported) numbers across the board._
