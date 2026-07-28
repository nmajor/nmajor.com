# Follow-up hunt: Atonom (Lovable-built CRM replacing Salesforce)

Fetched: 2026-07-20
Entry: `research/case-studies/entries/atonom-lovable-crm-salesforce.md`

RESULT: **Follow-up FOUND — a long-form podcast interview with the principal himself,
in which he directly addresses the maintenance question.** This upgrades the case from
"vendor-authored anecdote re-reported by three outlets" to "principal on the record at
length," though every figure is still self-reported.

---

## THE FOLLOW-UP: GTM Hackers podcast

URL: https://gtmhackers.com/episodes/he-ripped-out-salesforce-to-vibe-code-his-own-crm-autonomous-organization
Title: "He Ripped Out Salesforce to Vibe Code His Own CRM (and Built an Autonomous Organization)"
Guest: Gabe Larsen, CRO, Atonom. Host: Charles Brun.
Date: **2026-04-23** (decoded from host's LinkedIn share, activity 7453108859528757248)
Available on Spotify and YouTube.

Show description:

> Gabe Larsen, CRO of Atonom, joins Charles Brun for a two-part conversation on the
> future of AI in GTM and one of the boldest GTM bets of 2026. In part one, Gabe
> explains Atonom's vision of the autonomous organization [...] In part two, Gabe tells
> the story of **canceling Salesforce at his 30-person startup with no replacement
> plan**, then vibe-coding a working CRM with his CFO in just a few hours.

### Published key takeaways (verbatim list from the episode page)

> - The autonomous organization scales output not headcount
> - AI cloud employees should be hired and onboarded like human employees
> - Multi-agent architectures beat deterministic workflows for complex GTM jobs
> - AI SDRs crush inbound qualification but still struggle with cold outbound
> - Signal stacking with cloud employees is the emerging outbound playbook
> - Leads not scheduled within 3 days convert significantly worse
> - AI can't do what you can't do — process clarity must come first
> - **Vibe coding a CRM with Lovable is viable for small to mid-sized GTM teams**
> - **The maintenance cost argument against vibe coded CRMs is overblown**
> - Conversational CRMs beat traditional dashboards once you treat the CRM as your brain
> - **Never sign a SaaS contract longer than 12 months**

**THE KEY LINE for our beat:** "The maintenance cost argument against vibe coded CRMs
is overblown." Roughly a year after the original decision (Larsen's "AHH, I get to do
it. Rip Salesforce out of a startup" LinkedIn post is dated **2025-07-18**), the
principal is explicitly rebutting the maintenance objection rather than reporting that
it bit him. Self-reported, and he is a CRO with an interest in the narrative — but it
is a direct, on-the-record answer to the exact question our library keeps asking.

Also note the detail "**with no replacement plan**" — the cancellation preceded the build.

### Atonom's own amplification

URL: https://www.linkedin.com/company/atonom (via Charles Brun post thread)
> Gabe Larsen joined Charles Brun on GTM Hackers to break down why we walked away from
> a $40K contract and built our CRM in Lovable instead.
(Atonom company page, 9,350 followers — the $40K figure restated by the company itself,
not just by Lovable.)

---

## Timeline reconstruction

| Date | Event |
|---|---|
| 2025-07-18 | Gabe Larsen LinkedIn: "AHH, I get to do it. Rip Salesforce out of a startup. Now what the hell do I replace it with?" (decoded from activity 7351962890523901956) — **the decision, pre-build** |
| 2026-03 | Lovable publishes the vendor case study |
| 2026-03-10 | Lovable LinkedIn amplification (activity 7437221330824904705), 222 comments |
| 2026-03 onward | Analytics India Mag, TechGig, Fraction re-report the vendor study |
| **2026-04-23** | **GTM Hackers podcast — Larsen on the record at length, ~9 months post-decision** |

So the build is now roughly **12 months old** and reportedly still running.

---

## Original vendor source (unchanged, re-captured)

URL: https://lovable.dev/blog/how-a-startup-replaced-a-salesforce-contract-with-a-lovable-built-crm

> When Atonom's CRO Gabe Larsen looked at their Salesforce bill, he didn't see a growth
> investment. He saw friction. "It was 40 grand a year for 25 or 30 people. We were
> just like, this is crazy for the functionality we need."

> Salesforce wasn't helping them stay lean. Neither were the alternatives. They looked
> at HubSpot, Pipedrive, and others. Every option felt like the same story in a
> different wrapper: expensive, heavy, and built for organizations with far more
> complexity than they actually had. Eventually, they thought they might just go to
> Excel or Google Sheets because the CRMs were too much work or too expensive.

> The pivot didn't come from sales. It came from finance. **Jason, Atonom's Head of
> Finance and Legal**, had been experimenting with Lovable. He made Gabe an offer:
> "I'm going to build you a CRM." Gabe laughed it off.

> Once the CRM was stable, Jason kept building. Finance now runs contract-based revenue
> modeling, budget tracking, forecasting, and executive dashboards inside Lovable.
> "I took our executive board dashboard and just said, build a dashboard like this.
> End of month, it just automatically updates."
> Marketing is next. They've been running project management in spreadsheets; this
> quarter they're building a purpose-fit tool instead of buying another SaaS seat.
> **Each function at Atonom now owns one internal build.**

NEW DETAIL not in our entry: the pattern has **spread across functions** — finance
modelling/forecasting/board dashboards, marketing next, "each function owns one
internal build." That is scope expansion, which raises rather than lowers the
long-run maintenance surface.

---

## Counter-signal found in the same period

URL: https://www.reddit.com/r/lovable/comments/1sza3ce/lovable_crm_to_replace_salesforce
Posted 2026-04-29, r/lovable, 6 upvotes / 28 comments. Practitioners in Lovable's own
subreddit pushing back on exactly this pattern:

> Your issue with doing it in lovable or other pure vibes platforms is all changes
> across front end and back end will occur in a live production system. **Updating a
> prod database with live data is a huge no no.** Especially with vibe coding tools.
> You might make changes that just disrupts company processes etc. anything with
> customer data need to be handled extremely carefully… anything that touches anything
> to do with revenue generation. In my experience lovable generally won't suggest
> making changes that delete data but it's not a risk I'd be taking lightly

> My takeaway is that Lovable may be better as a front-end, intake, or dashboard layer
> rather than a full CRM replacement — especially if real customer data, permissions,
> audit history, and integrations are involved. For a Salesforce use case, I'd be more
> comfortable keeping Salesforce as the system of record and using Lovable only for a
> landing page, lightweight intake experience, or dashboard concept.

Not about Atonom specifically, but it is the informed-practitioner rebuttal to Larsen's
"maintenance argument is overblown," from the vendor's own community, six days later.

---

## Also noted (paywalled, not read)

URL: https://www.theinformation.com/articles/small-firms-use-claude-quit-salesforce
"How Small Firms Use Claude to Quit Salesforce" by Laura Bratton, The Information.
Paywalled; could not verify whether Atonom appears. Flagging as a possible
higher-quality source on this pattern if a subscription is available.

## Net

Numbers unchanged and still self-reported ($40k → ~$1,200/yr). But the case is
materially better sourced than it was: the principal has now spoken at length in an
independent venue, ~12 months in, and says it is still working and that maintenance
has not been the problem. Cite the podcast alongside the Lovable post and label both
as self-reported.
