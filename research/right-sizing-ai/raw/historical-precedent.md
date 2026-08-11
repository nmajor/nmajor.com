# Historical-precedent desk — raw findings

**Beat:** the "scope retreat" — deploy at the biggest/busiest version of a job because the
ROI arithmetic looks best there, underperform, narrow to a smaller job, keep it.
**Question I was asked to test:** does the second, narrowed deployment actually work?
History says: *sometimes*. I found one clean win and one clean quiet death, both verified
to primary sources.

**Researched:** 2026-08-11. Every URL below was opened with WebFetch or returned in a
search with quoted content, and I say per-item what I verified vs. what I could not.

---

## HEADLINE FINDING

The strongest precedent is **Just Walk Out itself** — but the arc is much longer and much
more recently resolved than Nick's essay probably assumes. **On 27 January 2026 Amazon
announced it is closing every Amazon Go and Amazon Fresh store in the US.** The first-party
deployment is at *zero*. The technology survived — as a licensing business in 360+
third-party locations. That is the purest scope retreat on record: the original
deployment did not shrink, it was *eliminated*, and the narrowed version is now the whole
business.

The counterweight is **Watson for Oncology**: it also narrowed, and the narrowed version
died anyway. Merative's product page today (verified, opened 2026-08-11) lists six
products and the word "Watson" appears nowhere.

So the honest historical claim is not "the second deployment works." It's: **the second
deployment works when narrowing changed the unit economics, and fails when narrowing only
changed the marketing.** That distinction is the essay's payoff.

---

## 1. AMAZON JUST WALK OUT — the full arc (STRONGEST; scope retreat that worked)

### The ambition (2018)
Bloomberg, Spencer Soper, 19 Sept 2018: Amazon "is considering a plan to open as many as
3,000 new AmazonGo cashierless stores in the next few years" — 10 by end of 2018, ~50 in
2019, "as many as 3,000 by 2021."
https://www.bloomberg.com/news/articles/2018-09-19/amazon-is-said-to-plan-up-to-3-000-cashierless-stores-by-2021
*Verified:* headline + figures confirmed via search result content and corroborated by
CSP Daily News, Supermarket News, Retail Dive coverage of the same Bloomberg report.
*Note:* Bloomberg itself is paywalled; I did not open the Bloomberg page directly. The
3,000/2021 figure is consistently attributed across four independent trade outlets, so I'm
confident in it, but flag it as sourced-to-Bloomberg-via-trade-press.

### Step 1 of the retreat: pulled from big-basket grocery (April 2024)
Retail Dive, 3 April 2024 — Amazon removed Just Walk Out from US Amazon Fresh stores,
replacing it with **Dash Carts**. At that point JWO was "limited to Amazon Go and some
smaller U.K. stores."
https://www.retaildive.com/news/amazon-removes-just-walk-out-tech-amazon-fresh-stores-dash-carts/712150
*Verified by WebFetch.* Amazon spokesperson Carly Golden's stated reason was customer-facing
(shoppers wanted to "view their receipt as they shop, and know how much money they saved"),
not a performance admission — worth noting, because the timing was not innocent.

### The human-reviewer story (April 2024) — HANDLE WITH CARE
The Information reported ~1,000 workers in India reviewing JWO sessions; ~700 of every
1,000 sales needed human review in 2022 against an internal target of 50 per 1,000.
Amazon publicly disputed the framing.
- Amazon's rebuttal, via Retail Technology Innovation Hub, 17 April 2024:
  https://retailtechinnovationhub.com/home/2024/4/17/amazon-hits-back-at-media-reports-that-its-just-walk-out-technology-relies-on-human-reviewers-watching-from-afar
- Axios, 17 April 2024: https://www.axios.com/2024/04/17/amazon-walk-out-store-technology-grocery-expansion

**Distortion flag.** The popular version — "Just Walk Out was actually 1,000 Indians
watching you shop live" — is *not* what was reported. The claim was **post-hoc review of
video to verify auto-generated receipts and label training data**, not live remote
cashiering. Amazon's Nathan Strauss (quoted in the Retail Dive piece I opened): "The primary
role of our Machine Learning data associates is to annotate video images." The real,
defensible, and more interesting finding is the **ratio**: 70% of sessions needing human
verification against a 5% target. That's a cost-per-transaction story, not a fraud story.
Nick should use the ratio, not the meme. I could not independently open The Information's
original (paywalled); the 700/1,000 and 50/1,000 figures are consistently reported across
Axios, HR Grapevine, Retail Tech Innovation Hub and PYMNTS as sourced to The Information.

### Step 2: the technical re-engineering that made the narrow job pay
Grocery Dive, Jeff Wells, 31 July 2024 — Amazon replaced the piece-by-piece pipeline
(cameras, shelf sensors, 3-D store model, product data processed separately) with a
**multi-modal model that analyses all inputs simultaneously**. Claimed: "more accurate,
more efficient and quicker to provide receipts." At that date: **170 third-party
locations**, aiming to double within the year. JWO thriving in airports, stadiums,
hospitals, residential buildings (Hudson alone at 16 locations). Also confirms **Whole
Foods removed JWO** from stores that had it.
https://www.grocerydive.com/news/amazon-just-walk-out-checkout-technology-ai-upgrade-new-model/722942/
*Verified by WebFetch.*

SiliconANGLE, Zeus Kerravala (ZK Research), 18 Dec 2025 — the economics change is explicit:
- **"Lane approach"** replaces full-store retrofits — camera corridors instead of
  instrumenting an entire store.
- **Deployment costs down ~50%** via algorithm optimisation.
- AI now handles 6–7 ft ceilings, sloped floors, inconsistent surfaces "without costly
  renovations"; gate plates eliminate cement coring.
- Real-time inventory (previously one-day delayed); loyalty integration now works.
- "Currently quoting over 300 locations."
https://siliconangle.com/2025/12/18/amazons-just-walk-just-walks-new-use-cases/
*Verified by WebFetch.* Caveat: Kerravala is an industry analyst writing a favourable
piece; the article offers **no third-party validation** of effectiveness. Treat the cost
figures as Amazon-sourced.

Amazon's own venue page: **80+ sports stadiums and arenas** across US/UK/Australia/Canada;
**30+ university stores**; Lumen Field at 15 JWO locations; claimed 60% throughput increase
(2022), 85% transaction / 112% sales increase by early 2023; Hard Rock Stadium ~50% YoY
sales growth 2023; average session under one minute.
https://www.aboutamazon.com/news/retail/amazon-just-walk-locations
*Verified by WebFetch. This is Amazon marketing — the throughput/sales numbers are
unaudited first-party claims and should be cited as such, or not at all.*

### Step 3: the first-party deployment goes to zero (January 2026)
GeekWire, Todd Bishop, 27 Jan 2026 (updated 30 Jan): Amazon closing **72 stores — 57
Amazon Fresh, 15 Amazon Go** — with final closure **1 February 2026** (California
locations open an extra 45 days for state labour requirements). The cashierless technology
"will live on as a licensing business," in "more than 360 third-party locations across five
countries, including hospitals and sports arenas, and in more than 40 of its own
fulfillment center breakrooms."
https://www.geekwire.com/2026/amazon-closing-all-amazon-fresh-and-go-stores-to-focus-on-whole-foods-and-grocery-delivery/
*Verified by WebFetch.*

Supermarket News, Bill Wilson, 27 Jan 2026: **58 Fresh + 16 Go**. Same Amazon quote.
https://www.supermarketnews.com/store-closings/amazon-is-closing-all-amazon-fresh-and-amazon-go-stores
*Verified by WebFetch.*
**Discrepancy flag:** GeekWire says 57+15=72, Supermarket News says 58+16=74. Trivial, but
if Nick quotes a number, say "about 70 stores" or attribute to one outlet.

Amazon's own announcement:
https://www.aboutamazon.com/news/company-news/amazon-fresh-go-stores-closing-expanding-whole-foods
*Verified by WebFetch.* The load-bearing quote, and it is a remarkable admission:
> "While we've seen encouraging signals in our Amazon-branded physical grocery stores, we
> haven't yet created a truly distinctive customer experience with the right economic model
> needed for large-scale expansion."
The page confirms JWO is "now a scalable checkout-free solution operating in over 360
third-party locations" and "more than 40 North American Fulfillment Centers using it in
breakrooms today."
*Date flag:* the WebFetch of this Amazon page returned a publication date of 12 May 2026,
which conflicts with GeekWire's 27 Jan 2026. Most likely Amazon updated the post. **Cite
GeekWire/Supermarket News for the date (27 Jan 2026), Amazon for the quote.**

### The arc in one line
3,000 stores by 2021 (2018 ambition) → pulled from Fresh (Apr 2024) → pulled from Whole
Foods → 170 third-party locations (Jul 2024) → 300+ (Dec 2025) → **all first-party stores
closed, 360+ third-party locations, 40+ fulfilment-centre breakrooms (Jan 2026)**.

**Why it worked, mechanically:** the narrow job did not just lower the accuracy bar — it
changed the cost structure. A stadium concession stand is a 200-SKU, small-basket,
30-second, captive-audience transaction where the *alternative* is a 20-minute queue that
loses the venue money. A full grocery store is a 30,000-SKU, 40-item, produce-weighing
problem where the alternative is a checkout lane that already works. Same technology,
completely different denominator. Plus the "lane approach" cut install from a full retrofit
to fixtures and gate plates. **Narrowing worked because the retreat came with a
re-engineering.**

---

## 2. IBM WATSON FOR ONCOLOGY — the scope retreat that didn't save it (STRONG counterweight)

### What was promised
IEEE Spectrum, Eliza Strickland, 2 April 2019 — "How IBM Watson Overpromised and
Underdelivered on AI Health Care." IBM announced the healthcare pivot the day after Watson
won Jeopardy! in 2011, promising commercial healthcare offerings "in 18 to 24 months."
https://spectrum.ieee.org/how-ibm-watson-overpromised-and-underdelivered-on-ai-health-care
*Verified by WebFetch.* Key verified content:
- **MD Anderson spent $62 million** on the Oncology Expert Advisor project before
  cancelling in 2016; it never became a commercial product.
- Concordance with human tumour boards: **73% at Manipal, India (638 breast cancer cases)**;
  **49% at Gachon University, South Korea (656 colon cancer cases)**.
- **No studies demonstrated patient benefit or cost savings.**
- Robert Wachter (UCSF): *"They came in with marketing first, product second, and got
  everybody excited. Then the rubber hit the road."*
- Martin Kohn (former IBM): *"Merely proving that you have powerful technology is not
  sufficient. Prove to me that it will actually do something useful."*
- Eliot Siegel (Univ. of Maryland): *"I don't think they're on the cutting edge of AI."*
- The narrow thing that worked: **Watson for Genomics** — ingest a patient's mutation file,
  produce a report of relevant drugs and clinical trials in minutes.

### The "unsafe recommendations" story — POPULAR VERSION IS GARBLED. FLAG.
Original: STAT, Casey Ross and Ike Swetlitz, **25 July 2018**, "IBM's Watson supercomputer
recommended 'unsafe and incorrect' cancer treatments, internal documents show."
https://www.statnews.com/2018/07/25/ibm-watson-recommended-unsafe-incorrect-treatments/
*Partially verified:* I opened it; it is STAT+ paywalled and only the top of the piece
rendered. I confirmed byline, date, and these lines: "multiple examples of unsafe and
incorrect treatment recommendations"; Watson trained on **"synthetic" cancer cases** rather
than real patient data, relying on "a few specialists for each cancer type" instead of
guidelines; a customer assessment calling recommendations "often inaccurate" and raising
"serious questions about the process for building content and the underlying technology."
The archived PDF at
https://www.statnews.com/wp-content/uploads/2018/09/IBMs-Watson-recommended-unsafe-and-incorrect-cancer-treatments-STAT.pdf
is image-only and did not yield extractable text.

Casey Ross's own account of the investigation, Association of Health Care Journalists,
6 Sept 2018:
https://healthjournalism.org/blog/2018/09/uncovering-the-safety-flaws-in-ibms-watson-supercomputer/
*Verified by WebFetch.* Ross: "After months of reporting, we got our big break: Access to
internal IBM documents." He states Watson "was trained on synthetic patient cases based on
hypothetical scenarios, rather than data about the treatments and outcomes of actual
patients," and that the system "had recommended inaccurate and unsafe treatments while the
company was promoting it to doctors and hospitals around the world."
**Critically: this piece does NOT claim real patients received or were harmed by the
recommendations, and provides no evidence of harm.**

Corroborated context (Becker's, Gizmodo, MedTech Dive, Healthcare Dive, all July 2018):
the documents were **June/July 2017 presentations by Andrew Norden**, then IBM Watson
Health deputy chief health officer. A **Jupiter Hospital (Florida)** physician told IBM:
*"This product is a piece of s—"* — "we bought it for marketing and with hopes that you
would achieve the vision" but "can't use it for most cases."
The famous example: a **65-year-old man with newly diagnosed lung cancer and evidence of
severe bleeding**, for whom Watson recommended chemotherapy plus **bevacizumab (Avastin)**
— a drug carrying a severe/fatal-haemorrhage warning. MSK's presentation noted deviations
from NCCN guidelines and an "unconventional interpretation of evidence."
- https://gizmodo.com/ibm-watson-reportedly-recommended-cancer-treatments-tha-1827868882
- https://www.beckershospitalreview.com/healthcare-information-technology/ibm-s-watson-recommended-unsafe-and-incorrect-cancer-treatments-stat-report-finds/
- https://www.medtechdive.com/news/ibms-watson-gave-unsafe-and-incorrect-cancer-treatment-advice-stat-repo/528702/

**THE DISTORTION, stated plainly:** the story is routinely retold as "Watson told doctors to
give cancer patients drugs that would have killed them." What the reporting actually
established is that **the recommendations appeared in testing and evaluation, and no
reporting I could find established that a real patient received or was harmed by one.**
IBM's counter — Nathan Levitan, in The ASCO Post, 10 Sept 2019 — is that these were
"isolated erroneous treatment recommendations… identified by our own quality process and
corrected before ever reaching a patient," among "tens of thousands of correct
recommendations."
https://ascopost.com/issues/september-10-2019/confronting-the-criticisms-facing-watson-for-oncology/
*Verified by WebFetch.* That is IBM's own claim and not independently confirmed — but the
*absence* of any reported patient harm across eight years of coverage is itself evidence.
Same ASCO Post piece: a 2019 randomised study of 1,000 patients in India found tumour
boards **modified decisions in 13.6% of cases** after Watson input (55% newer treatment
options, 30% personalised alternatives, 15% genotypic/phenotypic insight); Watson was
trained across **ten cancer types**.

**How Nick should use this:** the real scandal was never the drug. It was that **a system
sold as trained on the world's cancer literature was actually trained on a few dozen
hypothetical cases hand-built by a handful of specialists at one hospital.** The demo
generalised; the training data didn't. That is a procurement lesson, not a horror story,
and it's the one that pays off for a CIO.

### The narrowing, then the ending nobody reports
- IBM stopped development and sales of **Watson for Drug Discovery** in 2019.
  https://www.beckershospitalreview.com/healthcare-information-technology/ibm-stops-development-sales-of-watson-for-drug-discovery/
  *(search-result level only; not opened directly — treat as secondary)*
- Watson Health was assembled through acquisitions — Truven Health Analytics, Phytel,
  Explorys, Merge Healthcare — at a reported **~$4bn**, and sold to **Francisco Partners
  for ~$1bn** in 2022, relaunched as **Merative** (Ann Arbor, MI).
  https://www.franciscopartners.com/media/Merative
  https://www.fiercehealthcare.com/health-tech/watson-health-under-new-investment-firm-ownership-reborn-merative
  *(the $4bn-in / $1bn-out figures are widely and consistently reported; I did not open a
  primary financial filing. Cite as "reported.")*
- **THE ENDING — verified directly at the source, 2026-08-11.** I opened
  **https://www.merative.com/** and read the current product list:
  **Cúram** (health & human services), **Merge** (medical imaging), **Micromedex**
  (drug reference / clinical decision support), **Truven** (analytics), **Zelta** (clinical
  trial data management), **MarketScan** (claims / real-world evidence).
  The company describes itself as "a healthcare data, technology and analytics company."
  **The word "Watson" does not appear anywhere. There is no oncology decision-support
  product. There is no genomics product.**

  So: Watson for Oncology narrowed from "diagnose cancer" to "support ten tumour types" to
  "genomics report generation" to — nothing. **The narrowed version quietly died, and what
  survived and got sold was the boring stuff IBM had bought rather than built: a drug
  database, an imaging PACS, and a claims dataset.** The AI was never the asset. The data
  was.
  *Caveat, stated honestly:* I found **no public end-of-life announcement** for Watson for
  Oncology. Merative has never, as far as I can find, said "we discontinued it." Its absence
  from the current product line is strong evidence but is an absence-of-evidence argument.
  Nick should phrase it as "you cannot buy it today" — which is verifiable — rather than
  "it was cancelled on date X," which I cannot source.

---

## 3. RPA (UiPath / Blue Prism / Automation Anywhere) — real, but a weaker pitch

Sold as: automate entire back-office functions. Delivered: task automation.

**The scale number, verified.** Legal IT Insider, 11 Oct 2018, reporting Deloitte's Global
RPA Survey (n = **530 business leaders**, combined revenues $3.5tn):
> "Just 4% of organisations are now operating more than 50 'robots', a negligible increase
> from 3% in 2017."
27% were "either piloting RPA with under 10 robots or have moved into full implementation
with between 10 and 50 robots." Barriers to scale: **process fragmentation 32%**, lack of
clear RPA vision 17%, lack of IT readiness 17%. Quoted: Justin Watson, Deloitte's robotics
and cognitive automation lead.
https://legaltechnology.com/2018/10/11/deloitte-rpa-report-admits-surprise-at-lack-of-vision-and-it-readiness/
*Verified by WebFetch.* **Note:** the widely circulated "only 3% scaled RPA" stat traces to
this Deloitte survey and is usually quoted without the crucial qualifier — the threshold is
**"more than 50 robots,"** not "succeeded." Deloitte's original Romanian landing pages now
302-redirect to a generic site; the primary PDF is no longer reachable at its old URL. Cite
via Legal IT Insider or the Enterprisers Project.

**The ending.** SiliconANGLE, Mike Wheatley, 12 March 2025:
- UiPath Q4 revenue growth **5% YoY to $424m**
- FY2026 guidance $1.525–1.53bn vs. Street $1.58bn; Q1 guidance $330–335m vs. $367.5m
  expected; **stock down more than 16%** on the print
- CEO Daniel Dines pivots to agentic: Autopilot, Agent Builder, Agentic Orchestration
- Holger Mueller (Constellation Research): *"These AI copilots and AI agents are helping
  people do many menial tasks that UiPath tackles with older RPO bots, only they're
  arguably better at it."*
https://siliconangle.com/2025/03/12/uipaths-revenue-growth-slows-crawl-chases-agentic-ai-dream-stock-falls-sharply/
*Verified by WebFetch. ("RPO" is a typo in the original for "RPA.")*

**Why I'm not pitching this as the lead.** The narrative is right and the numbers are real,
but the ending is ambiguous — RPA didn't die, it got absorbed, and it still runs a lot of
invoices. It also lacks a single vivid scene. Good as a supporting paragraph in the essay,
not as a pitch. **Also: I deliberately did not use the "RPA is dead" blog posts that
dominated search results** — lleverage.ai and coasty.ai are vendor/SEO content with
fabricated-sounding market-size figures. Rejected.

---

## 4. FACEBOOK M — investigated, then partly REJECTED for sourcing

The story I wanted: Facebook launched M in 2015 as a do-anything concierge, quietly
discovered humans were doing most of the work, killed it (19 Jan 2018), and kept a narrow
survivor — "M suggestions" in Messenger.

What I could verify: M was shut down 19 January 2018; the human-backed version had reached
only **~2,000 users in California**; M suggestions (keyword-triggered prompts like "make a
plan," "request a ride") continued afterwards inside Messenger.
- https://techcrunch.com/2018/01/08/facebook-is-shutting-down-its-standalone-personal-assistant-m/
- https://www.digitaltrends.com/social-media/facebook-m-beta-discontinued/
- https://en.wikipedia.org/wiki/M_(virtual_assistant)

**What I could NOT verify, and am therefore flagging:**
1. The famous **"70% of M's requests were handled by humans, not AI"** figure. It appears in
   search snippets and is attributed to Wired's "Facebook's Virtual Assistant M Is Dead. So
   Are Chatbots." **wired.com is not fetchable from this environment**, and every
   reproduction I found was a blog re-post. I could not confirm the number at its source.
   **Do not use the 70% figure without someone opening Wired directly.**
2. Whether **M suggestions itself was later removed**. I could not find any dated
   announcement of its retirement. It appears to have faded rather than been killed. I will
   not claim it died.

This would have been a lovely precedent (the narrowed version quietly died too) but I can't
stand it up. **Rejecting it as a pitch.** Watson does the same job with far better sourcing.

---

## 5. SELF-CHECKOUT — real and well-sourced, but it isn't AI

Included because it's the cleanest *quantified* scope retreat I found, and it's the one
Nick's ICP has personally lived through.

**Dollar General.** Announced at Q4 2023 earnings: convert some/all self-checkout to
"assisted checkout" in **~9,000 stores**; remove entirely from 300+ highest-shrink stores.
By mid-2024, removed or limited self-checkout in **12,000 locations**, retaining it only at
"a limited number of stores, most of which are higher volume and low shrink" (CEO Todd
Vasos). Notably, **AI is what found the problem**: Vasos said "We were able to see through
AI what has transpired over the course of many months of transaction data at self-checkout."
https://www.grocerydive.com/news/dollar-general-pull-back-self-checkout-shrink/717769/
https://www.retaildive.com/news/dollar-general-eliminate-self-checkout-shrink/717520/

**The outcome, a year on.** Retail Dive, Daphne Howland, 3 June 2025: Q1 **gross margin up
78 basis points to 31%**, net income up nearly 8% to **$392m**, with lower shrink a major
driver. CFO Kelly Dilts: shrink improvement "should be the gift that just keeps on giving
here." CEO Vasos: "Our store standards are much, much better than they've been in quite a
long time."
https://finance.yahoo.com/news/shrink-down-margins-dollar-general-121300376.html
*Verified by WebFetch (syndicated Retail Dive).*

**Booths (UK).** Removed self-checkout from all but 2 of 26 stores from Nov 2023. The
Grocer, 16 April 2025 — MD Nigel Murray: reduced theft was a "happy consequence"; customer
satisfaction up from **70 to 74 out of 100** (Murray: "Not all of that is due to the fact
that we've taken self-service checkouts out"); staffed tills are *faster* because "if
you've got somebody who is doing a job repetitively for six, seven, eight hours a day, they
are going to do it faster and better."
https://www.thegrocer.co.uk/news/booths-has-less-shrinkage-and-faster-service-since-ditching-self-checkouts/703485.article
*Verified by WebFetch.* No hard shrinkage figure was given — do not invent one.

**Target:** "10 items or fewer" at self-checkout, expanded to ~2,000 US stores, March 2024.
**Walmart:** 15-item limits in places; full removal in select test markets.
*(Search-result level. The best sources here are NBC News
https://www.nbcnews.com/business/business-news/major-retailers-are-backtracking-self-checkout-rcna160234
and CBC https://www.cbc.ca/news/business/some-retailers-scaling-back-self-checkouts-1.7034047 —
I did not open either. Verify before citing.)*

**Why it's a supporting act, not a pitch:** it's not AI, and the retreat here was toward
*humans*, not toward a smaller AI job. Useful as one sentence of colour ("your ICP already
lived through this with self-checkout"), not as the historical spine.

---

## 6. GOOGLE GLASS — considered, not researched further

The obvious "deploy everywhere → narrow enterprise niche" case (consumer Glass died 2015;
Glass Enterprise Edition found warehouse/field-service/surgical use; Google discontinued
Glass Enterprise Edition 2 in March 2023). I did not verify any of this because it adds
nothing the Just Walk Out arc doesn't do better and more currently — and its ending is
*also* death, which duplicates Watson. **Deliberately skipped, not overlooked.**

---

## SOURCES I DELIBERATELY DID NOT USE
Per instruction, avoided AI content farms. Also actively rejected on quality grounds:
- lleverage.ai, coasty.ai — vendor SEO blogs with unsourced "RPA is dead in 2026" market
  sizing
- unboxfuture.com — AI-generated aggregation of the JWO story
- grokipedia.com — not a citable source
- teamblind.com threads on Just Walk Out — anonymous, unverifiable
- henricodolfing.ch, medium.com posts on Watson — secondary retellings that reproduce the
  garbled "unsafe recommendations" framing; these are exactly where the distortion
  propagates
- studocu.com copy of the STAT article — a scraped paywall bypass; not citable

## WHAT I COULD NOT ESTABLISH (stated plainly)
1. No public end-of-life announcement for Watson for Oncology. Its absence from Merative's
   catalogue is my evidence.
2. The Wired 70%-human figure for Facebook M. Unverifiable from this environment.
3. Any independent (non-Amazon) audit of Just Walk Out's current accuracy, cost, or
   per-location economics. Every operational figure traces to Amazon or a friendly analyst.
   **This is a real limitation and Nick should say so if he uses the numbers.**
4. Whether the ~700-per-1,000 human review rate improved after the 2024 multi-modal
   rewrite. Amazon claims accuracy improvements; no figure was published.
