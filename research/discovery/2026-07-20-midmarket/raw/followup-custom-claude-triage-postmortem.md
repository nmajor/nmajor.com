# Verification hunt: `custom-claude-triage-maintenance-postmortem`

Fetched: 2026-07-20
Lane: attempt to independently stand up the case currently marked UNVERIFIED in
`research/case-studies/entries/custom-claude-triage-maintenance-postmortem.md`

## VERDICT: **CANNOT BE STOOD UP. Do not use.**

No legitimate primary source exists. Worse than "unverified" — the evidence now
points to the story being **agency content marketing with a fabricated first person**,
not a real deployment. Recommend removing the entry or reclassifying it as a
media-criticism artifact rather than a case study.

---

## Finding 1: insideraitrends.com is the content arm of a low-code dev agency

URL: https://www.insideraitrends.com/about
Fetched 2026-07-20.

> InsiderAITrends is published by a team of practitioners who build and operate
> AI-powered applications for real businesses. We have no investors and no vendor
> deals — just an interest in what's working in the field.

> If you're building AI-powered applications and need a technical partner, the team
> at Kreante specializes in exactly that — low-code and AI development for companies
> that want to ship fast without sacrificing quality.

Site footer (every page):
> InsiderAITrends — The independent resource for no-code, low-code and AI app
> development news, tools and tutorials. Built by people who ship with AI.
> **AI app development by Kreante.**

Author pages confirm the bylines are Kreante staff, not journalists:

URL: https://www.insideraitrends.com/authors/jorge-del-carpio
> Jorge Del Carpio — **Founder & CEO, Kreante**
> Founder and CEO of Kreante, a LowCode/AI development agency with 165+ projects
> delivered across 35 countries since 2020.

URL: https://www.insideraitrends.com/authors/dario-ramirez
> Dario Ramirez — **Tech Lead, Kreante**
> Tech Lead at Kreante, certified partner on Xano and WeWeb.

So: a site that calls itself "independent" with "no vendor deals" is the lead-generation
blog of the vendor whose services it advertises. The "we" in the post-mortem is an
agency's marketing voice.

---

## Finding 2: the post-mortem's own premise does not check out

URL: https://www.insideraitrends.com/blog/when-custom-ai-loses-a-6-month-migration-post-mortem
Published: 2026-05-26. Full text captured below.

The article opens:

> **Six months ago, we documented what looked like a clean win**: a custom
> Claude-powered support triage tool replacing a $490/month Intercom plan. API costs
> were running $28/month. The build took about 40 hours. At a $100/hour contractor
> rate, that is $4,000 in build cost amortizing across a $462/month saving. Breakeven
> in 9 months. Clean math.

The only prior Intercom article on the site is:

> **Replace Drift Pricing and Intercom for Under $100/mo**
> "Intercom Pro runs $74/seat. A Claude-powered website chatbot handles the same
> conversations for $15-40/month. Here's the build math and what you actually need."
> — Dario Ramirez, category "AI Automation"

That article is (a) a **generic how-to playbook, not a documented deployment of their
own**, (b) quotes **$74/seat and $15-40/month**, which does **not match** the
post-mortem's "$490/month plan" and "$28/month API", and (c) its URL now **404s**
(https://www.insideraitrends.com/blog/replace-drift-pricing-and-intercom-for-under-100-mo
returned "404 page not found" on 2026-07-20).

**There is no "six months ago we documented" to point back to.** The retrospective
frame is invented.

---

## Finding 3: the site is programmatic "Replace <SaaS>" SEO at scale

From https://www.insideraitrends.com/blog (fetched 2026-07-20), the same template
repeated across dozens of posts, bylines rotating among three Kreante staff:

- Replace Mixpanel With Self-Hosted PostHog + Claude
- Replace Klaviyo With Custom Email AI for Under $50
- Replace Slack Team Chat With a Custom Supabase Build and Save Over $2,600 a Year
- Replace Close.com With Custom AI Call Scoring
- Replace Salesforce Einstein With a Custom Lead Scoring System
- Replace AppFolio with Custom AI Tools: Build vs Buy
- Replace BambooHR With Custom AI Under $50 Per Month
- Replace Drift Pricing and Intercom for Under $100/mo
- Best Procore Alternative for SMBs ... for Under $150/Month
- Ditch QuickBooks Add-Ons: AI Bookkeeping for 40 Per Month
- 7 SaaS Categories to Replace With AI (and 3 to Keep)

Every one follows "<Named SaaS> costs $X. A custom <Claude/Supabase/Bubble> stack runs
$Y. Here's the real math." The post-mortem is the deliberate counter-programming piece
in the same series (its sibling: "Vibe Coding vs Agentic Engineering: Why SMB Owners
Should Care How Their Custom AI Gets Built — the build method decides whether the
replacement holds for years or breaks in 6 months"), i.e. the "you need a real agency,
not vibe coding" pitch. The post-mortem's conclusion sells Kreante.

---

## Finding 4: zero independent footprint

Searches run 2026-07-20, all NEGATIVE:

- **HN Algolia API**, `query=insideraitrends` (all tags, no date filter): **`nbHits: 0`**.
  The domain has never been submitted to or mentioned on Hacker News.
- HN Algolia, `tags=story`: "intercom claude triage", "intercom replaced custom support
  tool", "we replaced intercom", "built our own support triage", "cheaper than intercom",
  "support triage claude", "vibe coding maintenance cost" — no matching story.
- HN Algolia, `tags=comment`: `"$490" intercom`, "replaced intercom claude", "total cost
  of ownership intercom", "migrated back to intercom", "went back to SaaS maintenance",
  "custom tool maintenance burden saas" — no matching comment. (Intercom pricing comments
  exist from 2013-2020 but are unrelated.)
- Web/Tavily search for the story on Reddit, personal blogs, or conference talks: nothing.
  Reddit results returned only generic r/SaaS Intercom-pricing threads and Intercom
  alternative round-ups.
- No named company, no named author of the underlying "build", no repo, no invoice,
  no talk.

---

## Full captured text of the post-mortem (for the record)

Source: https://www.insideraitrends.com/blog/when-custom-ai-loses-a-6-month-migration-post-mortem
Published 2026-05-26. Extracted 2026-07-20.

> ## TL;DR
> Custom AI tools can cut SaaS costs significantly, but the maintenance burden is real
> and often invisible at build time. After 6 months, our total cost of ownership
> exceeded the SaaS we replaced. The decision comes down to one question: do you have
> someone who owns the tool full-time?
>
> ## The Build Looked Perfect on Paper
> Six months ago, we documented what looked like a clean win: a custom Claude-powered
> support triage tool replacing a $490/month Intercom plan. API costs were running
> $28/month. The build took about 40 hours. At a $100/hour contractor rate, that is
> $4,000 in build cost amortizing across a $462/month saving. Breakeven in 9 months.
> Clean math.
>
> What the spreadsheet did not show: the 6 hours spent in month 2 when Anthropic
> updated a model deprecation notice and our prompt outputs shifted. The 4 hours in
> month 3 debugging a Supabase edge function that broke after a dependency update
> nobody scheduled. The full Saturday in month 5 when the tool went silent because an
> API key rotated and there was no alert.
>
> By month 6, we had logged 47 hours of unplanned maintenance time. At $100/hour, that
> is $4,700. Added to the build cost, total spend was $8,700 across 6 months against
> $2,940 we would have paid Intercom. The custom tool was now $5,760 more expensive,
> not cheaper.
>
> In our case: $28 API costs plus (7.8 average monthly maintenance hours multiplied by
> $100) plus (0.5 multiplied by $4,000 divided by 18) equals $28 plus $780 plus $111,
> for a total of $919/month. Against $490/month for Intercom, the custom build was
> never the cheaper option once maintenance was priced in.
> If your calculated number is within 20% of the SaaS price, take the SaaS. The
> reliability premium is worth it.
>
> ## What the Migration Back Actually Cost
> Migrating back to Intercom was not painful in terms of the product itself. Intercom's
> onboarding is solid, the data export from our custom tool was clean enough, and the
> feature parity was adequate for our use case.
> The real cost was psychological: admitting the build was the wrong call, re-training
> the team on a new interface, and accounting for the $8,700 in sunk cost.
> The lesson is not that the build failed technically. It worked fine. The lesson is
> that "technically working" and "worth owning" are different thresholds.
> A custom tool that requires 8 hours of maintenance per month to save $462 is not a
> win. It is a part-time job you did not post a listing for.
>
> ## Observability from day one
> Every custom AI tool should have three things before it touches production: a health
> check endpoint, an alert for zero-output conditions (the tool ran but produced
> nothing), and a log of input/output pairs for the last 30 days. These add roughly 4
> to 8 hours to the build and remove the majority of diagnostic time from every future
> incident.
> Teams that implement these four patterns consistently report lower maintenance
> overhead. Teams that skip them in the interest of shipping faster pay for it in the
> kind of incidents described above.
>
> ## Where Custom AI Still Wins
> This is not an argument against building. It is an argument for building the right
> things.

Note the tell in "Teams that implement these four patterns **consistently report**
lower maintenance overhead" — third-person aggregate voice inside a supposed
first-person post-mortem.

---

## Recommendation

Do NOT cite the $490/$28/$8,700 numbers anywhere, with or without hedging. The honest
version of this story for Nick's beat is not "a team's build cost more than the SaaS" —
it is **"the most-quotable build-vs-buy failure story in this corpus was written by a
dev agency that sells the alternative, and nobody has ever documented the real one."**
That absence is itself the finding: the maintenance-cost reckoning is asserted
everywhere and evidenced almost nowhere.
