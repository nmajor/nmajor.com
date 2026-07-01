Source: https://imobisoft.co.uk/ai-crm-claude-code-internal-automation/
Fetched: 2026-06-19 (WebFetch)
Also in Exa raw: research/discovery/2026-06-19/raw/cs_saas_replace_1.json, cs_saas_replace_2.json

First-person case study by the Imobisoft team, Coventry UK. Published 2 May 2026.

Company: Imobisoft, a 15-year-old UK software development company in Coventry. Builds
bespoke business applications, AI solutions, enterprise software. (So: a software shop
with senior engineers, not a non-technical team.)

What they built: an enterprise CRM with six autonomous AI agents handling sales ops:
- Contact enrichment (emails, job titles, LinkedIn via Apollo.io)
- Lead scoring (0-100 against their ICP)
- Deal follow-up monitoring
- Email intelligence / summarization
- Campaign generation with live news integration
- Contact segmentation

Before/after economics (self-reported):
- Previous SaaS approach: £36k-£60k/year, 2-4 week setup, no ownership
- AI-built solution: £20k-£50k build cost; £200/month run (£2,400/year); annual saving ~£38k
- Build time: 6 weeks; "ROI positive within the first week"
- Manages 7,000+ contacts; runs on a single Hetzner VPS

Tech stack: Next.js 14, Node.js, Python FastAPI, PostgreSQL, Redis, Anthropic Claude API.

Documented failures / caveats (the honest part):
- "Database operations need extra care, we lost data once during a migration."
- Explicitly: "This is NOT a no-code solution." AI still needs experienced engineering
  oversight; cannot replace senior architectural judgment.
- Note: imobisoft.co.uk is the company's own marketing site, so the build/saving figures
  are self-reported and serve as a portfolio piece. The £36k-£60k "before" is a range for
  comparable SaaS, not a specific cancelled invoice.
