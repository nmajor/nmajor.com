# Raw capture — CX rollbacks, mainframe/COBOL, healthcare RCM, manufacturing (2026-07-07)

Tool: Tavily search (advanced), time_range=month unless noted.

## Query: "company AI customer service chatbot rollback replaced humans backfired 2026"

- **fin.ai — Build vs Buy AI Customer Service Agent (2026)** https://fin.ai/learn/build-vs-buy-ai-customer-service-agent
  Sinch 2026 study (2,500 AI decision-makers): 74% rollback/shutdown rate for deployed AI customer-communications agents; rose to 81% among orgs with fully mature guardrails. S&P Global: 42% of companies abandoned most AI initiatives in 2025 (up from 17%). RAND: 80.3% of AI projects fail to deliver value. MIT Project NANDA: 95% of GenAI pilots fail to reach production. "The technology works. The projects still fail." Anthropic saved 1,700 hours in first month with Fin (vendor).
- **gspann.com — AI Agent Governance in CX: ROI vs 74% Rollback Rate** (Jun 18, 2026) https://www.gspann.com/insights/blog/ai-agent-governance-customer-experience
  Sinch survey n=2,527 across 10 countries: 74% rollback. Qualtrics: AI customer service fails at 4x the rate of other AI tasks; 75% of consumers frustrated by AI CX. EU compliance deadline Aug 2, 2026. Named:
  - **Mr. Cooper** (US mortgage servicer, ~500,000 monthly calls): AI across contact center unlocked 28,000 hours of agent capacity annually.
  - **Commerzbank**: AI handles >2M customer chats, resolves 70% autonomously.
  - **Mercari** (Japan recommerce): projects 500% ROI, CS workload -20%.
  - Full AI adoption across insurance value chain 8% (2024) → 34% (mid-2025).
- **intuitionlabs.ai** — Klarna: once claimed AI could do 700 agents' work; by 2025 reversed, rehired humans for higher-tier service; consumers "opt for basic AI support or premium human service."
- **Entrepreneur — How AI-Powered Customer Service Is Destroying Brand Trust** https://www.entrepreneur.com/science-technology/how-ai-powered-customer-service-is-destroying-brand-trust/504388 — escalation/handoff failures, hallucinated info, worse for low-English-proficiency users.

## Query: named CX deployments (Mr. Cooper / Commerzbank)

- **Google Cloud Blog — Mr. Cooper CIERA** https://cloud.google.com/blog/topics/financial-services/assembling-a-team-of-ai-agents-to-handle-complex-mortgage-questions-at-mr-cooper
  CIERA (Coaching Intelligent Education & Resource Agent) — multi-agent workforce on Vertex AI supporting call-center agents; human-in-the-loop; "agentic pulse" + human oversight governance framework for regulated industry.
- **National Mortgage Professional** https://nationalmortgageprofessional.com/news/mr-cooper-bets-big-ai-expands-tech-better-cx
  Earnings call: "Agent IQ" agentic framework analyzes conversations in real time, detects customer intent/sentiment, trained on millions of calls, fetches info, generates transcript+summary. President Mike Weinbach. Mr. Cooper closed Flagstar mortgage-banking acquisition, onboarded 1.1M customers (later being acquired by Rocket Mortgage per statements).
- **Google Cloud (LinkedIn)** — Commerzbank "Bene" chatbot: >2M chats, resolves 70% of inquiries. https://www.linkedin.com/posts/google-cloud_leading-companies-are-seeing-the-results-...
- **Microsoft Customer Story — Commerzbank "Ava"** https://www.microsoft.com/en/customers/story/25676-commerzbank-ag-azure-ai-foundry-agent-service
  "Ava" built on Foundry Agent Service: 30,000+ conversations/month, resolves 75% autonomously, 24/7, regulatory compliance emphasized. (Note: Bene = Google Cloud; Ava = Microsoft — two separate deployments/vendors at same bank.)

## Query: "AI legacy mainframe COBOL modernization bank insurer 2026 Gartner fail"

- **Ensono / Gartner report — "Too Big to Fail: Why Mainframe Exit Projects Are Likely to Fail in the Age of Generative AI"** https://www.ensono.com/insights-and-news/analyst-reports/gartner-research-too-big-to-fail-...
  Gartner: "The drive to abandon the mainframe is diminishing. Customers increasingly recognize the near-impossibility of a mainframe exit at acceptable cost and risk."
- **CIO Dive** (as above): Gartner >70% of AI-assisted mainframe-exit projects started this year will fail.
- **Hexaware** https://hexaware.com/blogs/modernizing-legacy-insurance-systems... — 74% of insurers still on legacy systems; Gartner CIO survey ~70% of IT budgets consumed maintaining legacy; 60% of mainframe experts near retirement.
- **triazinesoft.com** (vendor/SEO) — avg COBOL modernization project cost dropped $9.1M (2025) → $7.2M (2026), -21%, attributed to AI tooling compressing discovery/translation. Kyndryl 2026 survey ROI 288-362%. (Treat numbers as vendor/SEO — unverified.)
- **agamisoft.com** — IBM watsonx Code Assistant for Z, AWS Mainframe Modernization, Broadcom toolset named as COBOL-modernization tooling.
- HN adjacent: Hypercubic (YC F25) "AI for COBOL and Mainframes" https://news.ycombinator.com/item?id=45877517 ; https://www.hypercubic.ai/hopper

## Query: hospital / health-system AI documentation & revenue cycle

- **Cedar — Five Ways AI Is Improving RCM in 2026** https://www.cedar.com/blog/five-ways-ai-is-improving-revenue-cycle-management-in-2026
  **Gastro Health** deployed Cedar's AI voice agent "Kora" (autonomous billing Q&A incl. Spanish); in 9 months live-agent handle time -24%, Cedar-supported call-center staffing -22%. Also "ApolloMD" self-pay discount personalization.
- **eClinicalWorks / Sunoh.ai** (via fqhctalent.com AI tracker) — Sacramento Native American Health Center cut after-hours charting 43%; AltaMed deployed AI scribe across 600+ providers. Akido Labs (CHW-facing): 92% top-3 diagnostic accuracy, 40% ED-visit reduction across 6,000 unhoused patients (Medi-Cal CalAIM).
- RCM INSIDER (adsc.com): $19.7B spent annually by US hospitals to overturn denied claims (Premier); 41% of providers report >10% claims denied (up from 30% in 2022); 80% of health systems exploring/piloting/implementing AI in RCM (HFMA/AKASA).
- Black Book 2026 RCM vendor rankings (newswire) — Microsoft Nuance/Dragon Copilot (ambient), AKASA (denials), etc.

## Query: manufacturer factory AI named deployment

- **ment.tech (vendor/SEO)** https://www.ment.tech/blog/generative-ai-use-cases-in-manufacturing — Toyota Indiana: AI predictive maintenance cut downtime up to 50%. ACG Capsules: shop-floor AI assistant cut repair time 30-40%. Bosch product design. (Secondary/SEO — verify before use.)
- aihelperdesk.com: manufacturing AI agents reducing downtime 15-20% via predictive maintenance (aggregate stat).
- Gartner 2026 Global Supply Chain Top 25 (supplychainreview.org): Schneider Electric "Virtual Aggregation Hub" in Europe aggregates carrier capacity via API, +18% vehicle utilization; Lenovo "detour logistics" auto-reroutes around port congestion; Schneider AI demand-sensing cut planning cycles 30%, Scope 3 intensity -12% (2025).
