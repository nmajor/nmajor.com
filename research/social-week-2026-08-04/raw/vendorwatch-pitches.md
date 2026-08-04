# Vendor watch — pitches for week of 2026-08-04

Beat: vendor pricing shifts, lock-in mechanics, contract terms, quiet cost-shifting.
Raw notes: vendorwatch-raw.md (same directory). Both pitches verified against fetched
sources on 2026-08-04.

---

## Pitch 1 — Cursor asked one customer for $1.5M at renewal. They settled at $250K.

**Hook (≤140 chars):**
Cursor quoted a customer $1.5M to renew 800 licenses they'd paid $200K for. The customer
settled at $250K. The quote wasn't a price.

**The story.** The Information reports that an IT consulting firm which paid Cursor about
$200,000 for 800 licenses in the year to May got a renewal ask of roughly $1.5 million for
the same usage — and negotiated it down to about $250,000. Sanofi and Druva both faced
renewals around 5x last year's bill; Sanofi's chief digital officer Emmanuel Frenehard told
The Information "I may not renew with Cursor. I get a better deal with Claude Code." The
timing is not an accident: Cursor restructured Teams pricing on June 1 (Standard $32/mo
annual, Premium $96/mo annual at "5x the usage for 3x the cost"), applied it to renewing
customers from July 1, and is being acquired by SpaceX for $60B in stock, expected to close
this quarter. When the ask and the settle are 6x apart, the renewal quote is an opening bid
— and only customers who know that get the real price.

**Sources (all fetched 2026-08-04):**
- TNW, 2026-07-29 (retelling The Information):
  https://thenextweb.com/news/cursor-price-hikes-claude-code-harness-shift
- The Information (paywalled primary — attribute, never quote directly):
  https://www.theinformation.com/newsletters/applied-ai/cursor-customers-fight-price-hikes-contract-talks
- Cursor's own pricing post, 2026-06-01: https://cursor.com/blog/teams-pricing-june-2026
- SpaceX–Cursor deal, 2026-06-16:
  https://techcrunch.com/2026/06/16/spacex-to-acquire-cursor-for-60b-in-stock-days-after-blockbuster-ipo/
  and https://www.cnbc.com/2026/06/16/spacex-spcx-cursor-acquisition-ipo.html

**Why now.** The renewal quotes on Cursor's new structure started July 1; The Information's
story landed July 29; the SpaceX deal closes in Q3. Anyone whose contract renews this
quarter is negotiating against this exact playbook this month.

**First-person angle Nick can carry.** He pays for these tools out of his own pocket and
negotiates AI line items with clients: the first-year price of an AI coding tool is a
promotional price, and the renewal is where the real pricing model shows up. His honest
advice — budget the renewal, not the pilot; get a renewal cap in writing while you still
have leverage; and if a vendor's ask-to-settle spread is 6x, the list price is information
about their negotiating posture, not their costs. Distinct from the Uber essay: that was a
customer failing to read its own meter; this is the vendor moving the meter at renewal.

**Breakout potential.** High. "$200K → $1.5M ask → $250K settle" is a three-number story a
stranger reshares at their own procurement team; the Sanofi quote gives it a name-brand
face. Fear of the renewal email is universal and current.

---

## Pitch 2 — Microsoft raised 365 prices up to 43% and the AI line item disappeared

**Hook (≤140 chars):**
On July 1 Microsoft raised 365 prices up to 43% and folded Copilot Chat into every base
plan. No opt-out. The AI spend is now invisible.

**The story.** Effective July 1, 2026, Microsoft raised commercial Microsoft 365 prices —
Business Basic $6→$7 (+16%), Business Standard $12.50→$14 (+12%), Office 365 E3 $23→$26
(+13%), frontline F1 $2.25→$3 (+33%, and +43% on the no-Teams variant) — and folded Copilot
Chat, with Word, Excel and PowerPoint agents, into every base plan, with no opt-out
mentioned anywhere in its licensing announcement. Existing customers keep old pricing only
until their next renewal, so the increase is arriving invoice by invoice through this year.
Buried in the E5 fine print, the opposite move: Security Copilot comes bundled as 400
"security compute units" per month per 1,000 licenses, with overage billed at $6 per SCU —
a usage meter smuggled inside a seat product. Uber's problem was a meter it could read but
couldn't justify; Microsoft's mid-market customers now have the inverse — an AI charge with
no meter at all, paid whether anyone opens Copilot or not.

**Sources (all fetched 2026-08-04):**
- Microsoft's own licensing announcement (SKU prices, no-opt-out, renewal terms):
  https://www.microsoft.com/en-us/licensing/news/2026-m365-packaging-pricing-updates
- Windows Latest, 2026-07-05 ("the AI tax on businesses," +43% F1 no-Teams):
  https://www.windowslatest.com/2026/07/05/microsoft-365-just-got-a-price-hike-over-continuous-innovation-but-copilot-is-the-ai-tax-on-businesses/
- US Cloud, 2026-06-16 (without-Teams table; Security Copilot 400 SCU / $6 overage detail):
  https://www.uscloud.com/blog/microsoft-365-price-increase-july-1-2026-what-enterprise-buyers-need-to-know-part-1/
- Corroborating headline: https://www.marketscale.com/industries/software-and-technology/microsoft-365-prices-rise-up-to-43-as-copilot-chat-folds-into-base-plans

**Why now.** The increase took effect July 1 and the packaging rollout completes around
August 1 — mid-market renewal invoices carrying it are landing right now, and most
operators will read it as "Microsoft got more expensive" rather than "we now have an AI
budget line we can't see."

**First-person angle Nick can carry.** His mid-market clients live on exactly the Business
Basic/Standard SKUs taking the +16%/+12%; he can do the operator math in one line (200
seats on Business Standard = $3,600/year of new spend, AI included whether wanted or not).
His honest position: bundled pricing is the one AI pricing model you can't manage, so the
only lever left is usage — you're paying for Copilot Chat now, so either put it to work
deliberately or treat the increase as pure rent. Careful distinction he'd keep: this is
Copilot Chat, not the $30 full Copilot seat — the predictable flat add-on everyone praised
after the Uber story is precisely the thing that just got repriced with AI baked in.

**Breakout potential.** Medium-high. Every reader with a Microsoft tenant is personally
affected this quarter; "up to 43%, no opt-out" is a reshare-to-your-CFO number. Less novel
than Pitch 1 (widely covered in trade press) but far broader reach — nobody has framed it
against usage-metering as "the AI charge with no meter."
