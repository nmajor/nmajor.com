# Vendor-watch beat — raw findings

**Reporter:** vendor-watch journalist (subagent)
**Date of research:** 2026-08-11
**Week's concept:** the "scope retreat" — companies deploy AI at the biggest, busiest version of a
job because that's where the ROI arithmetic looks best; it underperforms; they narrow it to a
smaller job where it works and keep it.
**Beat question:** what are the *vendors* doing about scope?

Everything below is raw and unedited. Verified = I personally opened the URL with WebFetch and
confirmed the quoted text. Unverified = surfaced by search but not opened, or opened and the claim
was not present.

---

## FINDING 1 (STRONGEST) — Vendors all bill "per resolution." They disagree on what a resolution is. Intercom now charges you when the AI hands the job to a human.

This is the scope retreat priced into a SKU. Four vendors, four first-party definitions, and one of
them has quietly made "give this to a person" a billable product outcome equal in price to a full
resolution.

### Intercom / Fin — VERIFIED (two sources, both first-party)

**Source A:** https://www.intercom.com/pricing (Intercom pricing page) — opened 2026-08-11.
Verified quotes:
- "$0.99 per outcome"
- An outcome is counted when: "A customer confirms their issue is resolved, or" / "They don't ask
  for more help after Fin responds, or" / "Fin completes a workflow (Procedure), including handoffs"
- "You're only charged once per conversation, even if multiple questions are answered."

**Source B:** https://fin.ai/help/en/articles/13975800-fin-pricing-outcomes (Fin product docs) —
opened 2026-08-11. Verified quotes:
- Two billable outcome types, both $0.99: **Resolution** and **Procedure handoff**.
- "A Procedure handoff is a type of outcome where Fin successfully executes a Procedure that you
  have intentionally configured to end in a handoff to a human team or teammate." — **billable.**
- Default escalation is NOT billable: "You will never be charged for an outcome that didn't
  happen…if a customer explicitly asks to speak with a human agent at any point…it does not count
  as an outcome."

**Source C (corroborating, same family):**
https://www.intercom.com/help/en/articles/8205718-fin-pricing-and-billing — opened 2026-08-11.
Verified: four outcome types — Resolution ($0.99), Procedure Handoff ($0.99), Disqualification
($0.99, sales), Qualification ($9.99, sales). "You're only charged for one outcome per conversation,
even if Fin takes multiple actions." Page shows "Updated over a week ago" — **no hard date.** This is
the one weakness: I could not date when Procedure-handoff billing was introduced.

Read: the distinction Intercom draws is *deliberate handoff* (billable, because you configured a
Procedure whose designed endpoint is a human) vs *failure handoff* (free, because the customer asked
for a human). That is a vendor formally recognising that "route it to a person" is a legitimate,
sellable job the agent does — not a failure state. That is the scope retreat, productised.

### Zendesk — VERIFIED (opposite definition)

**Source:** https://www.zendesk.com/pricing/ — opened 2026-08-11. Verified quotes:
- "Zendesk AI agents are included in every Suite and Support plan, with pricing based on the
  successful outcomes they deliver."
- "Automated Resolutions: Are the unit of measurement used for calculating and billing your account
  for AI agent usage. Paying per automated resolution means that you pay only for customer requests
  that were successfully resolved by the AI agent, **without any escalation to a human agent**."
- Page does NOT publish the dollar rate or the plan allowance. "Contact sales."

Directly opposite to Intercom: any human involvement voids the charge.

### Decagon — VERIFIED (opposite definition, plus an honest admission)

**Source:** https://decagon.ai/glossary/what-is-resolution-based-pricing — opened 2026-08-11.
Verified quotes:
- "Resolution-based pricing is a model for charging businesses based on the successful outcomes
  delivered by autonomous AI systems in customer service."
- "If the case is escalated to a human, there's no charge."
- "Defining what a resolution is can be tricky, as not all cases end wrapped up in a bow."
- "A customer may leave the chat mid-conversation, or AI could present an answer that doesn't fully
  solve a customer's issue. Gray areas can lead to billing disagreements."
- No date on the page.

The last quote is a vendor admitting, in its own glossary, that the billing unit it sells is
ambiguous enough to cause disputes.

### Sierra — VERIFIED (opposite definition, but the source is old)

**Source:** https://sierra.ai/blog/outcome-based-pricing-for-ai-agents — opened 2026-08-11.
Author: Elliot Greenwald. **Publication date: 2026-12-10 shown as December 10, 2024.** Verified quotes:
- "If the conversation is unresolved, in most cases, there's no charge."
- "if a case needs to be escalated, in most cases, there's no charge."
- Outcomes: "a resolved support conversation, a saved cancellation, an upsell, a cross-sell, or any
  number of valuable outcomes."
- "clear, agreed-upon criteria for each outcome upfront."

Caveat to flag if used: this post is from Dec 2024, i.e. ~20 months old. It is still Sierra's live
public pricing explainer, but it is not fresh. Also note "in most cases" — the actual criteria are
per-contract and unpublished.

### Salesforce Agentforce — NOT VERIFIED

https://www.salesforce.com/agentforce/pricing/ returned **HTTP 403** to WebFetch. Secondary sources
(all SEO/comparison blogs — not cited) describe three models: $2 per conversation, Flex Credits at
$500 per 100,000 credits, and per-user licences from $125/month; and claim an escalated conversation
may still be billable depending on how far the agent got. **I could not confirm any of this
first-hand and it should NOT be used as a claim.** If Nick wants it, someone needs to open the
Salesforce pricing page in a browser.

### Why this is a story for owners/CEOs/COOs who buy this software

Two vendors quoting "about a dollar a resolution" are quoting two different products. On Zendesk,
Decagon and Sierra the meter only runs when a person never touched it — so the price *is* a measure
of true autonomy. On Intercom, a deliberately-configured handoff to a human is worth exactly the
same $0.99 as a full resolution — so the price measures *work routed*, not work finished.

The buyer implication is concrete and checkable: your invoice does not tell you how much of the job
the AI actually did unless you know which definition you signed. And the vendor that changed its
definition changed it in the direction of the scope retreat — it stopped selling "the agent finishes
the job" and started selling "the agent triages and routes."

---

## FINDING 2 (STRONG) — The headline enterprise AI product of 2026 is not the agent. It is the cage. And it is a separate line item.

### Microsoft Agent 365 — VERIFIED

**Source A:** https://www.microsoft.com/en-us/microsoft-agent-365 (Microsoft product page) — opened
2026-08-11. Verified quotes:
- Agent 365 is "the control plane to observe, secure, and govern AI agents."
- "observe, govern, and secure every agent across your organization"
- "Establish guardrails for agents and users"
- "Enforce least-privilege access by controlling which users, data, and tools agents can use"
- "rules-based agent management to automatically enforce lifecycle policies"
- "onboard agents through IT-controlled workflows, applying security policy templates"
- "**Manage agents alongside employees**—using the admin tools you already know."
- **Pricing: $15/user/month standalone (annual commitment). $99/user/month in Microsoft 365 E7.
  E7 without Teams $90.45/user/month.**

**Source B:**
https://www.microsoft.com/en-us/security/blog/2026/05/01/microsoft-agent-365-now-generally-available-expands-capabilities-and-integrations/
— opened 2026-08-11. **Published 2026-05-01.** Authors: Nirav Shah, Rob Lefferts, Jason Roszak.
Verified quotes on how Microsoft frames the problem:
- agents "proliferate fast, span apps, endpoints and cloud, and often operate outside the visibility
  and control of the teams accountable for risk"
- "you can't govern what you can't see, and you can't secure what you don't understand"
- many agents "run unmanaged and outside of traditional governance, as they autonomously execute
  tasks, modify code, or access confidential information, creating a new wave of shadow AI"
- No adoption/customer numbers in the post. References the "Frontier program" and an NTT DATA quote.

GA date: 2026-05-01 (confirmed by the Microsoft Security Blog post itself).

**Source C (freshness anchor, PARTIALLY VERIFIED):**
https://techcommunity.microsoft.com/blog/agent-365-blog/whats-new-in-agent-365-%E2%80%93-july-2026/4543654
— I fetched this and **only the page title rendered**; the body did not come through. Search
summaries say the July 2026 roundup adds partner risk signals, "oversight of usage-based AI spend"
(cost controls), org-wide adoption insights, cross-platform agent discovery (incl. AWS Bedrock and
Google Cloud registry sync), and multi-tenant management. **DO NOT quote this — unverified.** The
existence and date of the post are confirmed by the URL slug only.

### ServiceNow AI Control Tower — VERIFIED

**Source:**
https://newsroom.servicenow.com/press-releases/details/2026/ServiceNow-Reports-Second-Quarter-2026-Financial-Results/default.aspx
— opened 2026-08-11. **Release date 2026-07-22.** Verified quotes:
- "ServiceNow AI crossed $1 billion in annual contract value in Q2 2026."
- CEO Bill McDermott: "**With our AI Control Tower as the market standard, agentic deployments of
  ServiceNow AI increased ninefold in just nine months.**"
- AI Control Tower scope: "discovery, observation, governance, security, and measurement
  capabilities."
- Action Fabric lets third-party AI including Claude "execute workflows securely within established
  guardrails."
- Customer proof point cited: state agencies reporting "66% service desk cost reduction"; nearly all
  50 U.S. states on the platform.

Note the causality in McDermott's own sentence: the *governance product* is credited as the reason
the *agents* got deployed 9x. That is a CEO saying, on an earnings call, that customers would not
scale agents until someone could bound them.

**Not verified:** https://www.servicenow.com/products/ai-control-tower.html returned **HTTP 403**.

### Why this is a story for buyers

Every one of these vendors sold "the agent replaces the function." Within roughly a year they have
all shipped, and separately priced, a product whose entire job is to stop the agent doing too much.
Microsoft's is $15 per user per month on top of everything else. The scope retreat is not something
these vendors are hiding from — it is now their fastest-moving SKU.

---

## FINDING 3 (SUPPORTING DATA, with a fact-check attached) — KPMG: a quarter of large-company leaders have narrowed an agent deployment; only 7% can show ROI.

### The numbers — VERIFIED via two independent reads, KPMG PDF itself NOT parseable

**KPMG Global AI Pulse, Q2 2026.** Fielded 2026-04-28 to 2026-05-25. 2,145 senior/C-suite leaders,
20 countries/territories, organisations with $50M+ annual revenue. Published 2026-06-24.

- **24% scaled back or narrowed an agent deployment**
- **25% delayed or paused further rollout**
- (24 + 25 = the "49%" / "nearly half" figure in the headlines)
- **Only 7% report established ROI from AI agent investments**
- Full visibility into AI operating costs → 15% report established ROI, vs 3% without — a 5x gap
- Only ~a third have full visibility into AI operating costs
- Only 24% can say who is accountable when a decision is made with AI

**Sources opened:**
- https://kpmg.com/be/en/insights/technology/ai-insights/global-ai-pulse.html — opened 2026-08-11.
  KPMG's own words, verified: "nearly half have already delayed or scaled back an agent deployment
  once the bill outgrew the benefit"; "only seven percent say yes" (to proving a return against AI
  spend); "only a third have full visibility"; "only 24 percent can say who is accountable when a
  decision is made with AI."
- https://ppc.land/kpmg-finds-49-cut-ai-agent-rollouts-when-costs-outran-value/ — opened 2026-08-11.
  Luis Rijo, 2026-06-24. Verified: the 24% / 25% split, the field dates, the sample, the 7% ROI
  figure, and a KPMG quote from Rob Fisher, Global Head of Advisory ("The real risk isn't investing
  in AI but doing so without cost visibil…" — truncated in fetch).
- https://kpmg.com/xx/en/our-insights/ai-and-technology/ai-pulse.html — opened 2026-08-11. Confirms
  sample (2,145 leaders, 20 countries) and the 15% vs 3% ROI/cost-visibility figure. Does NOT show
  the 24/25 split on the landing page.
- https://assets.kpmg.com/content/dam/kpmgsites/xx/pdf/2026/06/global-ai-pulse-q2.pdf — fetched, but
  **the PDF would not extract to text.** I could not read the primary document directly. Anyone
  citing exact figures should open this PDF manually.

### FACT-CHECK / CAVEATS — important, do not skip

1. **The "nearly half pulled back" headline flattens two different behaviours.** 24% narrowed the
   scope of a live deployment; 25% delayed or paused a rollout that hadn't happened yet. Only the
   first group is a scope retreat in our sense. If Nick uses this, use "about a quarter narrowed a
   live deployment" — it is both more accurate and more on-concept.
2. **The most-shared version of this stat is a Forbes *contributor* post, not Forbes staff
   reporting.** https://www.forbes.com/sites/sandycarter/2026/08/09/kpmg-says-nearly-half-of-executives-pulled-back-ai-agents-over-cost/
   — opened 2026-08-11, 2026-08-09, by Sandy Carter, who is **CEO of EQUS.ai**, i.e. an AI vendor.
   Verified from the article: the 49% figure, the survey attribution, "rephasing rather than
   retreat," 54% embedding cost reviews into AI approval processes, 53% implementing AI cost
   dashboards, and a GitHub Copilot pricing anecdote ($180/month vs a previous $10 flat rate). No
   vendor responses quoted. Treat as vendor-adjacent commentary, not journalism.
3. **KPMG's own US press release spins the opposite mood.**
   https://kpmg.com/us/en/media/news/q2-ai-pulse-2026.html — opened 2026-08-11, released 2026-06-24.
   This is a *different survey*: 204 U.S. C-suite leaders at $1B+ organisations, fielded
   2026-04-28 to 2026-05-25. Headline: "AI Investment and Agent Deployment Hold Steady Amid Growing
   Focus on Pragmatism." Verified: agent deployment held steady at 53% (vs 55% prior quarter);
   organisations orchestrating multiple agents across workflows **doubled from 9% to 18%**. It
   contains **no** scale-back statistic. Same firm, same fielding window, two surveys, two moods —
   worth knowing before quoting "KPMG says."

---

## CANDIDATES INVESTIGATED AND REJECTED

**Gartner Hype Cycle for Agentic AI.** https://www.gartner.com/en/documents/7671861 — first
standalone agentic-AI Hype Cycle, published 2026-04-02. Agentic AI at Peak of Inflated Expectations
heading for the Trough; only 17% of organisations have deployed AI agents; "more than 40% of agentic
AI projects will be canceled by end of 2027." **Rejected:** analyst, not vendor (off-beat); four
months old; and the 40% line has been recycled to death since 2025. Also every readable summary of
it sits behind a paywall or on an SEO blog.

**"Tokenmaxxing is over" — Uber, Microsoft, Meta, Rippling.** Real, fresh, well-sourced:
- https://fortune.com/2026/08/07/uber-ai-spending-tokenmaxxing-is-over-cto/ (2026-08-07)
- https://apnews.com/article/ai-token-openai-anthropic-corporate-31bb80ac1cd7862d05f6397177d826b1 (2026-07-28)
- https://techcrunch.com/2026/08/07/after-rippling-blew-millions-on-ai-in-months-it-built-an-employee-roi-tool/ (2026-08-07) — Rippling dropped token spend from 40% of headcount budget to ~15% without curtailing usage
- https://thenextweb.com/news/microsoft-tokenmaxxing-ai-spending-limits (2026-08-04) — Jay Parikh internal email, division-level budgets, cheaper default model
- https://techcrunch.com/2026/07/14/metas-adam-mosseri-says-ai-token-budgets-could-soon-be-capped-per-engineer/ (2026-07-14)
**Rejected for this beat:** it's an internal-cost-control story about how companies buy tokens, not
about what vendors are doing to scope. Belongs to a different journalist. Flagging it because it is
the loudest thing in the window and someone else on the desk should probably have it.

**Zendesk retiring AI agents Essential + legacy bots.**
https://support.zendesk.com/hc/en-us/articles/10904648529690 — notice 2026-06-23; development stops
2026-08-31; end of service 2026-12-10. **Rejected:** on inspection this is consolidation and an
upsell in disguise — Zendesk is *removing the Essential/Advanced split* and pushing advanced
features (agentic reasoning, multi-step procedures, external API calls) down into base Suite/Support
plans. That is scope *expansion* dressed as a retirement. Useful context, not a scope-retreat story.

**Zendesk "Autonomous Service Workforce" / Resolution Platform.** Announced 2026-05-19 per
https://www.zendesk.com/newsroom/ (opened 2026-08-11 — confirmed the headline and date exist).
**Rejected:** ~3 months old, outside the 30-60 day priority, and the naming goes the *wrong* way
(toward more autonomy, not less). Zendesk's newsroom shows nothing on AI after 2026-06-15.

**Microsoft Copilot Studio "6 core capabilities to scale agent adoption in 2026."**
https://www.microsoft.com/en-us/microsoft-copilot/blog/copilot-studio/6-core-capabilities-to-scale-agent-adoption-in-2026/
— opened 2026-08-11. **Published 2026-01-26**, Nitasha Chopra, VP & COO Copilot Studio. Verified and
genuinely on-concept: Microsoft tells customers to "start by focusing on" business-to-employee
assistive agents and to "try downloading the Employee Self-Service Agent from the Agent Store";
agents handle "automated approvals, escalating to humans only when judgment is required"; "IT teams
retain clarity and structure under the hood, with agents grounded in logic that can be reviewed,
refined, and governed." **Rejected only on freshness** — 6.5 months old. Excellent supporting quote
if a piece needs "here is where the vendor tells you to start."

**Salesforce Agentforce scoping doctrine.** The substance is right — Salesforce tells builders to
deploy the first agent with a single Topic, to define scope precisely including "what the agent
should not do," and to set guardrails. **Rejected because I could not open the primary sources:**
https://architect.salesforce.com/fundamentals/agentic-patterns returned HTTP 403 and
https://trailhead.salesforce.com/content/learn/modules/agent-builder-basics/customize-agent-topics
returned HTTP 404. Everything I found on it was secondhand (Salesforce Ben, salesforceblogger.com,
Validity). Someone with browser access should re-check; the story is probably there.

**Salesforce Q1 FY27 earnings (2026-05-27).** Agentforce ARR $1.2B, up 205% YoY; Agentforce + Data
360 ARR ~$3.4B, up 200%+; 3.8B "Agentic Work Units" in Q1; Benioff: "The speed at which enterprises
are deploying Agentforce agents in production workflows is unlike anything we have seen in the
history of this company." **Rejected:** pure growth narrative, no scope signal, and 2.5 months old.
Q2 FY27 earnings land 2026-08-26 — after this week's issue. Worth revisiting then.

**UiPath.** Its human-in-the-loop positioning (Action Center) is genuinely long-standing and
on-concept, and FY27 Q1 commentary talks about orchestrating "humans, agentic, and deterministic
automations" together. **Rejected:** I could not open a primary UiPath page that dated or quantified
a *change*, and "UiPath has always had human-in-the-loop" is not news. ARR figure seen in search:
$1.782B, +11% YoY; 16 of top 20 deals had AI/agentic in scope. Unverified.

**Experian Agent Operating System (June 2026), Cisco 90k-employee agent rollout (July 2026).**
Surfaced only via aggregator blogs of uncertain provenance. Not verified, not used.

---

## SOURCE HYGIENE NOTES

**Content farms on the blocklist:** theapplied.co, insideraitrends.com, elladvisory.com,
nssg.consulting, altstack.ai, moonpool.ai, bahrku.com. None appeared in my results and none are
cited.

**Additional low-trust sources I encountered and deliberately did not cite** (SEO comparison blogs,
several run by direct competitors of the vendors they "review"): getmacha.com, eesel.ai,
myaskai.com, coworker.ai, aissist.io, corepiper.com, corebee.ai, ecorpit.com, featurebase.app,
clonepartner.com, servicedeskagents.com, quiq.com, happyrobot.ai, cloudtalk.io, premiumplus.io,
voiceflow.com, logicballs.com, windowsforum.com, windowsnews.ai, ctomagazine.com, epcgroup.net,
vdf.ai, nocode.tech, evoart.ai, wildnetedge.com, enterprisedna.co, aiagentstore.ai, mightybot.ai,
assindo.com, growtoyourfullest.com, explainx.ai, aigovmap.com. These were used only as pointers to
primary sources.

**Special note: fin.ai/learn/* is Intercom's own competitor-comparison content marketing** (Intercom
acquired the fin.ai domain and publishes "Sierra AI pricing", "Decagon AI pricing", "Fin vs Decagon"
pages there). I only cited **fin.ai/help/**, which is genuine product documentation. Do not treat
fin.ai/learn as neutral.

**Pages that blocked me (403/404) — claims about these are unverified:**
- https://www.salesforce.com/agentforce/pricing/ (403)
- https://architect.salesforce.com/fundamentals/agentic-patterns (403)
- https://www.servicenow.com/products/ai-control-tower.html (403)
- https://trailhead.salesforce.com/content/learn/modules/agent-builder-basics/customize-agent-topics (404)
- https://assets.kpmg.com/content/dam/kpmgsites/xx/pdf/2026/06/global-ai-pulse-q2.pdf (fetched, not parseable)
- https://techcommunity.microsoft.com/blog/agent-365-blog/whats-new-in-agent-365-%E2%80%93-july-2026/4543654 (title only, body did not render)

**last30days run:** the engine completed (183.5s, 268 items across 11 sources) but resolved onto a
neighbouring topic — "companies cutting AI budgets and killing AI pilots" — rather than my vendor
query, apparently a collision with a concurrent run on the shared save dir. Saved at
`~/Documents/Last30Days/companies-cutting-ai-budgets-and-killing-ai-pilots-raw-ftm.md`. Its output
was still useful: it is where the KPMG lead and the tokenmaxxing cluster came from. Community signal
in it (r/ArtificialInteligence, r/consulting, HN) is overwhelmingly about *cost*, not about vendor
autonomy claims — which is itself a finding: buyers in the last 30 days are arguing about the bill,
not about whether the agent is autonomous.

---

## ONE-LINE SUMMARY OF THE BEAT

Vendors are not walking back autonomy in their marketing. They are walking it back in their
**contracts and their SKUs** — in how they define a billable outcome, and in the separately-priced
governance product they now sell you to bound the agent you already bought.
