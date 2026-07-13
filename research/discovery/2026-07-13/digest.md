# Discovery digest — July 13, 2026

Scanned free sources (Hacker News, Lobsters, arXiv, Hugging Face, GitHub), web/trade-press,
vendor customer-story indexes, and a grounded research pass on the industry-adoption angle
tied to the Institute's new 10-K census. ~50 raw candidates before filtering; deduped
against the 76 URLs in `seen.txt`. Exa (the semantic deep-cut engine) was unavailable — no
`EXA_API_KEY` in `.env` — so this run leans on the free sweep + targeted web research; see
the note at the bottom.

The lead candidate is the one you flagged, now grounded in real sources and sharpened past
the obvious framing.

## Top candidates

### 1. Why insurance shouts about AI and banks stay silent — the disclosure gap — [Institute census](https://www.appliedartificialintelligence.org/research/ai-in-10k-filings-2025/)
**Source(s):** Institute 10-K census (proprietary) + Bank Policy Institute, BCG, NAIC/Colorado insurance rules, JPMorgan scale data
**Relevance 5 · Deep-cut 5 · Breakout 3 — baseline** · `[framework/analysis/trend]`
The Institute's own dataset shows insurance mentions AI in 82.9% of 10-Ks (above tech's 77.4%) while banks & lenders sit dead last at 22.8% — yet banks are among the heaviest real AI users in the economy (JPMorgan: 500+ production use cases, 230,000+ staff on its LLM suite). The evidence says the gap is mostly *disclosure*, not adoption: banks stay quiet because admitting AI in credit decisions is a fair-lending and securities-litigation surface, while insurers are *required* to document AI by state rules (NAIC model bulletin, Colorado SB 205). A take only Nick can write — it runs on the Institute's data and extends the accountability thread from this week's essay.
**Why it's #1:** unique data asset, non-obvious thesis, honest caveat built in (a 10-K mention measures willingness to disclose, not what runs). Full grounding + sources in `raw/adoption-angle-BRIEF.md`.
**Read:** [Institute report](https://www.appliedartificialintelligence.org/research/ai-in-10k-filings-2025/) · [BPI: overlooked risk in bank AI adoption](https://bpi.com/the-overlooked-risk-in-bank-ai-adoption-regulatory-inaction/) · [BCG: insurance leads AI adoption](https://www.bcg.com/publications/2025/insurance-leads-ai-adoption-now-time-to-scale)

### 2. Banks are scrambling to cut their AI token bills — [American Banker](https://www.americanbanker.com/news/how-banks-are-looking-to-tame-their-growing-ai-bills)
**Source(s):** American Banker, 2026-06-29 (verified)
**Relevance 5 · Deep-cut 4 · Breakout 3** · `[incident/named-case]`
PNC is building its own GPU compute to cut token reliance; JPMorgan's CDO says some employees "spend more on tokens than their salary"; RBC's token use is up 500% year over year. Named, concrete, and the flip side of candidate #1 — the banks that disclose least are quietly burning the most compute.
**Read:** [American Banker](https://www.americanbanker.com/news/how-banks-are-looking-to-tame-their-growing-ai-bills)

### 3. 74% of firms have rolled back an AI customer-service agent — [The Register](https://www.theregister.com/ai-ml/2026/05/13/ai-customer-service-bots-get-rolled-back-at-74-of-firms/)
**Source(s):** The Register, 2026-05-13 (Sinch survey of 2,500+ AI decision-makers; verified)
**Relevance 5 · Deep-cut 3 · Breakout 4 — spike** · `[trend/survey]`
74% of companies running live customer-comms agents have shut down or rolled back at least one — and the number climbs to 81% among the most governance-mature. Aggregate stat, no named companies, but broadly addressable ("could be us") and tellable as a reckoning story.
**Read:** [The Register](https://www.theregister.com/ai-ml/2026/05/13/ai-customer-service-bots-get-rolled-back-at-74-of-firms/)

### 4. IBM is tripling entry-level hiring after hitting the limits of AI automation — [Fortune](https://fortune.com/2026/02/13/tech-giant-ibm-tripling-gen-z-entry-level-hiring-according-to-chro-rewriting-jobs-ai-era/)
**Source(s):** Hacker News (378p/277c) · Fortune
**Relevance 4 · Deep-cut 3 · Breakout 4 — spike** · `[named-case]`
IBM's CHRO says the company is tripling Gen-Z entry-level hiring after finding AI couldn't replace as much as planned. Named, counter-narrative to the "AI ends entry jobs" story, high addressability.
**Read:** [Fortune](https://fortune.com/2026/02/13/tech-giant-ibm-tripling-gen-z-entry-level-hiring-according-to-chro-rewriting-jobs-ai-era/)

### 5. Ramp's spending data: heavy AI adopters are hiring more, not less — [Ramp](https://ramp.com/data/heavy-ai-adopters-hire-more)
**Source(s):** Hacker News (48p/10c) · Ramp data
**Relevance 4 · Deep-cut 4 · Breakout 3** · `[analysis/data]`
Ramp's corporate-card dataset shows companies that spend heavily on AI also grew headcount faster — a non-obvious counter to the replacement narrative, and a natural pair or foil to the IBM story.
**Read:** [Ramp](https://ramp.com/data/heavy-ai-adopters-hire-more)

### 6. The enterprise AI cost reckoning — sticker shock and a plateau — [Axios](https://www.axios.com/2026/05/28/ai-spending-roi-enterprise-costs)
**Source(s):** Hacker News (172p/146c Axios; 193p/154c Apollo) · Axios · Apollo Academy
**Relevance 4 · Deep-cut 3 · Breakout 3** · `[trend/analysis]`
Axios reports enterprises hitting higher-than-expected AI bills with unclear ROI; Apollo's data series shows US corporate AI adoption starting to flatten. A cluster, not one story — the raw material for a "where did the ROI go" essay, adjacent to the cost thread Nick has written before.
**Read:** [Axios](https://www.axios.com/2026/05/28/ai-spending-roi-enterprise-costs) · [Apollo Academy](https://www.apolloacademy.com/ai-adoption-rates-starting-to-flatten-out/)

### 7. An open model nearly matched a human bookkeeper on VAT accounting — [toot-books](https://toot-books.com/blog/glm-5-2-vat-benchmark)
**Source(s):** Hacker News (225p/120c)
**Relevance 4 · Deep-cut 4 · Breakout 3** · `[analysis/benchmark]`
A benchmark claims GLM 5.2 comes close to a human bookkeeper on real VAT accounting tasks. A concrete look at AI reaching into back-office finance — the kind of unglamorous workflow that is exactly our beat.
**Read:** [toot-books](https://toot-books.com/blog/glm-5-2-vat-benchmark)

### 8. DLA Piper scales to 5,000 Harvey licenses — [Harvey](https://www.harvey.ai/blog/how-ai-is-transforming-contract-review-software)
**Source(s):** Harvey blog, March 2026 (vendor-reported; named-firm figure needs a non-vendor source)
**Relevance 4 · Deep-cut 3 · Breakout 3** · `[named-case]`
A global law firm rolling an AI contract-review tool out firm-wide at real scale. A named traditional-professional-services deployment — verify the license figure independently before building on it.
**Read:** [Harvey](https://www.harvey.ai/blog/how-ai-is-transforming-contract-review-software)

### 9. Researchers turned production AI agents into data-exfiltration tools — [Noma / PromptArmor](https://noma.security/blog/gitlost-how-we-tricked-githubs-ai-agent-into-leaking-private-repos/)
**Source(s):** Hacker News (539p / 604p) · Noma Security · PromptArmor
**Relevance 3 · Deep-cut 4 · Breakout 4 — spike** · `[incident]`
Indirect prompt injection was used to make GitHub's AI agent leak private repos, and separately to exfiltrate data from Slack AI. Dev-adjacent, but the governance angle — every AI agent you connect to your data is a new attack surface — is squarely a decision non-technical leaders now own.
**Read:** [Noma: GitLost](https://noma.security/blog/gitlost-how-we-tricked-githubs-ai-agent-into-leaking-private-repos/) · [PromptArmor: Slack AI](https://promptarmor.substack.com/p/data-exfiltration-from-slack-ai-via)

## Watch / wildcards
- **"I'm a PM at a big system-of-record SaaS. We're cooked."** — [Tell HN](https://news.ycombinator.com/item?id=46917886) (103p/46c) — an insider on incumbent enterprise SaaS being hollowed out by AI; sentiment, not a deployment, but a live nerve.
- **Fortune: the AI productivity paradox meets Solow** — [Fortune](https://fortune.com/2026/02/17/ai-productivity-paradox-ceo-study-robert-solow-information-technology-age/) (792p/752c) — a framing piece ("you can see AI everywhere but in the productivity statistics"); good scaffolding for an essay, thin as its own story.
- **Extend (YC W23): messy documents → structured data** — [Launch HN](https://www.extend.ai/) (61p/33c) — document-intake tooling for insurance/legal/ops; more case-study fodder than a story on its own.

## Skipped but notable (too-covered or already surfaced in a prior run)
- **Starbucks pulls its AI inventory system after 9 months** — verified and very tellable, but already surfaced in the last run (`seen.txt`); flagging in case Nick still wants it — it's a strong standalone failure story.
- **AIG's agentic underwriting rebuild** — already in `seen.txt` (TBPN); Reinsurance News adds a Zaffino interview but same deployment.
- **Insurers sued over AI their 10-Ks don't mention** ([Forbes](https://www.forbes.com/sites/daraabasiita/2026/06/09/insurers-are-being-sued-over-ai-their-own-filings-dont-mention/)) — overlaps this week's UnitedHealth essay; the disclosure-gap twist is better folded into candidate #1 as supporting evidence than written twice.
- GLM 5.2 margin-collapse analysis, the AI-subscription "time bomb" piece, and the Antigravity/Slack exfiltration writeups all appeared in earlier runs or are already in `seen.txt`.

## Case-study library candidates (verify before entry — several are vendor- or trade-press-reported)
- **Siemens Erlangen "AI factory" + PepsiCo as early customer** — [Siemens press, CES 2026](https://press.siemens.com/global/en/pressrelease/siemens-unveils-technologies-accelerate-industrial-ai-revolution-ces-2026) — announcement-stage, no before/after yet.
- **Fiserv scaling ServiceNow Now Assist** — [ServiceNow newsroom](https://newsroom.servicenow.com/press-releases/details/2026/ServiceNow-turns-enterprise-AI-chaos-into-control) — vendor-reported, no independent numbers.
- **Bank of Queensland on Microsoft 365 Copilot** — 2.5–5 hrs/week saved at ~70% adoption; Microsoft-sourced, treat as vendor-reported.
- **Becker's healthcare cluster** (CommonSpirit neuro-triage, Ardent+Ambience, HonorHealth+Abridge, MUSC voice-AI "Emily") — trade-press-indexed, direct page 403'd — **UNVERIFIED**, confirm each named number before use.
- **Retool "Build vs Buy" 2026 report** — 35% of teams have replaced a purchased SaaS tool with something custom-built — vendor survey, useful `saas-replacement` framing, no named company.

---

**Run notes:** No `EXA_API_KEY` in `.env`, so the semantic deep-cut engine and the taste
loop (`findSimilar` on `seeds.txt`) didn't run this week — worth wiring for the next run; it
is the source's biggest single lever on non-obvious candidates. The insurance/contract-review/
retail-CX searches were heavily polluted by AI content farms (aiagentsquare, insuretechtrends,
getperspective.ai, actuary.info, digitalapplied); striking single-source numbers from those
were dropped or tagged UNVERIFIED and never laundered into clean claims.
