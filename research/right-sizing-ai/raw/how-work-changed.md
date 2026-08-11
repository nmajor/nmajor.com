# Raw findings — HOW-WORK-CHANGED beat

**Reporter:** how-work-changed journalist subagent
**Date collected:** 2026-08-11
**Week's concept:** the "scope retreat" — companies deploy AI at the biggest, busiest, highest-volume
version of a job; it underperforms; they narrow it to a smaller job where it works, and keep it.
Essay covers Kinney Drugs, Johnson & Johnson, Amazon Just Walk Out, Taco Bell voice AI.

**My beat:** what happens to the PEOPLE when the scope gets narrowed. Rehires/redeployments,
deliberate returns to older simpler tech, the all-hard-cases queue, frontline worker accounts,
hiring data on re-posted roles.

**Method:** WebSearch + WebFetch (every cited URL personally opened unless marked otherwise),
plus the `last30days` engine run (saved to
`~/Documents/Last30Days/companies-rolling-back-ai-and-rehiring-workers-raw-v3.md`), plus direct
HN Algolia API pulls and Reddit via the arctic-shift archive API (reddit.com/search.json is
blocked from this environment).

---

## 1. FORD — the strongest story on this beat. The job came back, but not the same job.

**What happened.** Ford leaned on AI/automated tooling for vehicle quality and design-requirement
ingestion. It underperformed. Over three years Ford hired **350 veteran engineers** — some former
Ford employees, some pulled from suppliers — internally nicknamed the **"gray beards."**

**The detail that makes this my beat, not the general AI-layoff-reversal beat:** the rehired
engineers did **not** come back to the jobs they left. Per Fortune, they now function as
**"internal auditors"** running **mandatory weekly peer design reviews**, hunting failure points
before blueprints reach manufacturing, and **reprogramming the AI tools that displaced them**.
Per The Next Web: they "mentor junior staff, rebuild data pipelines feeding Ford's AI training,
and refine the automated systems originally meant to replace them."

That is a textbook scope retreat with the people consequence attached: AI was scoped at
"produce a high-quality product from ingested design requirements," it failed there, the scope
narrowed to "AI tool trained and audited by senior humans," and the humans who came back are
now the audit layer on the narrowed tool.

**Verbatim, Charles Poon, Ford VP of vehicle hardware engineering, at a press meeting (week of
2026-06-22, reported 2026-06-29):**
- "Artificial intelligence is a fantastic tool, but it's only as good as the information you use
  to train it."
- "Mistakenly we thought that by just introducing artificial intelligence and ingesting the design
  requirements that we had, that that would produce a high-quality product."
- "we recognized that for us to enhance some of our automation and machine learning and artificial
  intelligence tools we needed to ensure that they were trained by the most experienced individuals."

**Root cause named by Ford:** many of its most experienced engineers had left before their
knowledge could be captured, so the automated tools **amplified weak inputs** rather than catching
design flaws.

**Outcome:** Ford topped J.D. Power's 2026 Initial Quality Study among mainstream brands — first
time in 16 years, up from 10th the prior year. (Ford's own attribution; treat causality as
Ford's claim, not established fact.)

**Sources personally opened:**
- Fortune, 2026-06-29 — https://fortune.com/2026/06/29/ford-ai-hired-human-workers-gray-beards-automation/
  (VERIFIED: 350 engineers over three years, former employees + suppliers, "internal auditors,"
  mandatory weekly peer design reviews, reprogram ineffective AI tools, Poon quote, press meeting,
  10th → 1st JD Power.)
- The Next Web, 2026-06-26 — https://thenextweb.com/news/ford-rehired-350-engineers-ai-quality-jd-power
  (VERIFIED: 350 engineers; mentor junior staff, rebuild data pipelines, refine the automated
  systems originally meant to replace them; notes it does not carry a direct verbatim Poon quote.)

**Sources found but NOT opened (403/404 from this environment):** TechCrunch 2026-06-28
(`/2026/06/28/ford-rehires-gray-beard-engineers-after-ai-falls-short/` — 404 on one URL variant,
listed in search results), Motor1 (403), Forbes/Joe Toscano 2026-06-30 (not opened),
Insurance Journal / SupplyChainBrain syndications (not opened). The two I did open agree on every
load-bearing number.

---

## 2. KINNEY DRUGS — the touch-tone return, and what it does (and doesn't) tell us about staff

**What happened.** Kinney Drugs (Vermont + upstate New York chain) launched an AI phone assistant
called **"Burt"** (named for the founder) in **May 2026** to handle patient prescription
communication. After hundreds of customer complaints it **pulled Burt off incoming patient calls
and returned to a "prompt-based, touch-tone phone system"** — deliberately going back to the older,
dumber technology. Burt survives in a narrowed slot: **prescription refill texts, now opt-in.**

**Company framing (verbatim, from VTDigger 2026-08-10):** "Burt is designed to supplement pharmacy
teams by handling routine, non-clinical interactions so staff can focus more time on direct patient
care, clinical questions, and in-pharmacy services."

**Honest gap on my beat:** none of the Kinney coverage I opened says anything about staffing levels,
call volume, workload, or pharmacy-employee experience. No pharmacist or technician is quoted. I
searched for Kinney staffing/hiring signals and found only generic ZipRecruiter/Breakroom listings
(119 pharmacy-technician postings, breakroom worker comments about staying late and skipping
breaks) — **not attributable to the AI rollout and not usable as evidence.** Do not imply Kinney
rehired or redeployed anyone. There is no evidence of that.

**Patient-side detail (VTDigger 2026-07-29), all verbatim:**
- Maria Aveni (anesthesiologist, customer): "Burt demands that you talk to him" — no keypad option —
  "talk to Burt or don't get your drugs." She now goes in person to avoid it.
- Matt Penney (two-year customer): the new system was "more complicated and cumbersome than the
  previous recording."
- Dave Bellini: the AI "has absolutely no value, no benefit to the customer" and "wastes time and
  delays customer service."
- Kathy Callaghan: near-daily calls with garbled drug names led her to approve refills she didn't
  need — "four bottles of something that I take twice a week."
- Stephen McArthur: "privacy is just about out the window."
- Kinney response: aware "that some patients have experienced frustration with Burt, especially
  during rollout."
- Documented failure modes: processing delays between physician order and fulfillment, inability to
  find longtime customer accounts, incorrect dosages ordered, failed pickup notifications,
  incoherent speech output, automatic consent by providing a phone number.

**President John Marraffa (via WCAX, 2026-08-07):** Burt is fully HIPAA compliant, is not
open-source, and "does not generate or manipulate data."

**Sources personally opened:**
- VTDigger, 2026-08-10, Tsehai Alfred — https://vtdigger.org/2026/08/10/kinney-drugs-pulls-back-ai-tool-after-customer-complaints/ (VERIFIED)
- VTDigger, 2026-07-29 — https://vtdigger.org/2026/07/29/a-pharmacy-chain-in-vermont-implemented-ai-for-efficiency-its-led-to-delays-incorrect-information-and-privacy-concerns/ (VERIFIED, all patient quotes above)
- Hacker News thread #49244569, 149 points, 2026-08 — pulled via Algolia API (the HTML page 429'd)

**HN practitioner + frontline voices on the Kinney thread (verbatim, via Algolia API):**
- **exizt88** (builds voice AI for call centres): "As someone who's been doing AI call centres for a
  while, I'm not surprised. It's really, really hard to build voice AI that works. There are no open
  source solutions that work out of the box. But the biggest problem is ASR. WER is still atrocious
  even with SOTA models. When you add drug names and regional accents, it's a recipe for disaster."
- **pessimizer**: "It's important to note while people are pumping the AI bubble that a near-moron
  with a checklist can do this job. **They replaced AI with a regular old phone tree.**"
- **AndrewKemendo** (states the scope-retreat thesis from the other side, and it's the strongest
  counter-argument in the whole corpus): "Explain to me then why pharmacies have almost exclusively
  used IVR based phone systems for pharmacy refills and prescription management for the last
  decade? ... the AI system in this case is not any worse than the previous IVR system, it just
  **expanded the use cases** and now people say oh it doesn't work for those expanded use cases."
- **cmiles8**: "In many ways this is a repeat of the India call center train wrecks of the 00s. On
  paper, letting someone in Bangalore vs onshore handle incoming customer service calls looked like
  a path to amazing savings. In practice the customer experience was horrendous and companies
  CTRL-Zed these decisions and rapidly brought customer service back onshore again."
- **jdw64**: "The biggest problem with AI customer service is that a human employee would've let a
  minor issue slide without escalating it. But a chatbot often inflames the situation, and by the
  time the customer reaches a human agent, they're already furious."

Note: HN comment point counts are not exposed per-comment by the Algolia item API; the parent story
is 149 points. Treat these as individual practitioner accounts, not a measured consensus.

---

## 3. THE ALL-HARD-CASES QUEUE — where the narrowed AI leaves the humans

### 3a. Klarna: this is what "narrowed and kept" looks like at the end state

Klarna deployed agentic AI for support in early 2024 (2.3m conversations in month one; two-thirds
of tickets resolved in 2 minutes vs 11). External human agents went from **3,000 to 2,300**. CEO
Sebastian Siemiatkowski later conceded the cuts went too far and reopened hiring for premium and
complex-case roles.

**Where it landed (Forbes/Bernard Marr, 2026-07-16, opened and verified):** Klarna added a
"relatively small team of around **100 highly-skilled human operators**" to identify cases needing
personal attention, alongside thousands of outsourced agents. Klarna spokesperson **Clare
Nordstrom**, verbatim: "AI gives us speed. Talent gives us empathy. Together, we can deliver
service that's fast when it should be, and empathic and personal when it needs to be."

The Forbes piece explicitly says it does **not** establish whether those 100 were rehires, what
their job descriptions are, or their contract terms. Don't overclaim.

The widely-circulated Siemiatkowski line — "In a world where AI can do the most simplistic customer
service, we believe that human customer service will almost be seen as a VIP thing" — appears in
search summaries dated June 2026 but I **did not open a primary source for it**. Do not quote it
without verification.

**Rejected on Klarna:** getperspective.ai, asisteclick.com, digitalapplied.com, twig.so, kaamfu.ai,
openbooklet.com, imceleste.com, bigeye.com — all SEO/vendor content recycling the same 2025
Bloomberg reporting. Not used.

### 3b. Commonwealth Bank of Australia — the reversal that reversed back

**Aug 2025 (context, not fresh):** CBA cut 45 contact-centre roles claiming its "voice bot" reduced
call volumes by 2,000 a week. The Finance Sector Union said volumes were actually **rising**, and
CBA was offering overtime and pulling team leaders onto phones. CBA reversed the cuts and admitted
it had made an "error." FSU called it a "major win."

**Jul 2026 — the part nobody is talking about, and the best twist available on this beat.**
Information Age (Australian Computer Society), 2026-07-30, Denham Sadler — **opened and verified**:
- CBA's generative-AI chatbot **"Hey CommBank"** (built on Microsoft's platform incl. Copilot) was
  **resolving almost nine in every ten customer conversations** independently by May 2026.
- **Hundreds of customer-service chat positions were eliminated** — the work moved to an outsourcing
  company, **Nutun, based in Johannesburg**.
- The article explicitly references the August 2025 reversal of the 45 onshore roles "made in
  'error'."
- FSU also reports **176 technology and engineering roles** cut, with some subsequently advertised
  through CBA's **India-based subsidiary**, and alleges **~800 CBA roles cut in the past year**.

**Why this matters for the beat:** it is the cleanest available answer to "were the jobs the same
jobs?" At CBA the answer is no — a year after the celebrated reinstatement, the narrowed-and-working
AI held the routine tier, and the remaining human work was re-posted **offshore**, not onshore.
The reinstatement was a pause, not a floor.

Source: https://ia.acs.org.au/article/2026/ai-drives-fresh-commbank-job-cuts.html (VERIFIED)
2025 context sources found but not opened: The Register 2025-08-22, Bloomberg 2025-08-21,
Finextra, ia.acs.org.au 2025, TechRadar Pro.

### 3c. Frontline accounts — r/callcentres, "The future state of this industry"

Thread posted ~2026-08-09, r/callcentres, 28 points / 36 comments.
https://reddit.com/r/callcentres/comments/1vjuv29/the_future_state_of_this_industry/
Pulled via arctic-shift archive API (reddit.com blocked). Comment scores from the archive are
unreliable (many show as 1); treat all of these as individual anecdotes, not weighted signal.

**OP (works at "a company you have heard of"), verbatim, describing the intended end state:**
"We have implemented Self-Service for the IVR... The agents use Agent Assist... **Routing to the
best agent becomes meaningless because with AA, any agent can handle any type of interaction.**
The next phase is to use AI agents on a more autonomous basis. AI costs about 1/10th as much as a
human agent. **Human agents will become supervisors and be used for relationship building and
last-resort escalations.** It should go without saying that many agents will lose their jobs
unfortunately, but I do think there is an onramp to the 'AI agent supervisor' role."

**Replies (verbatim):**
- **emotional_low** (warranty advisor): "Our AI agents are already causing issues by stating they
  will raise replacement orders, and promising the customers things which their warranty does not
  cover. **Then it's up to us to fix that mess.**" Also: "They want someone to blame if it goes tits
  up, and you cannot blame or hold AI accountable like you can a human employee."
- **ObvOpt** (one of the largest banks in the world, ~70 calls/day): "the number one complaint I
  get? '**oh thank god I'm speaking to a real person, I'd like to raise a complaint about your
  IVR**'"
- **ladyambrosia999** (the all-hard-cases queue in one line): "I've noticed that AI is used for
  booking appointments and taking messages basically and **a human is used for people too frustrated
  to move forward**"
- **Advanced_Heat_2610** (a scope retreat inside a week): "we tried it and **had to withdraw it
  within the week** because it would not book them correctly and people got so angry with it, they
  refused to continue because it could not understand English with other accents... it could not
  process refunds even automatically because it could not do split refunds"
- **TiredMotherOfChaos** (management): "we had to sit through a painful webinar from our software
  company showing how AI can replace our staff. It failed so epically! ... We all agreed to not
  touch that with a 10 foot pole."
- **reddit_account_12** (the strongest operator take in the thread): "AI will and does a good job at
  deflecting proactively... **outstanding reps will still be required for calls with complexity**...
  the value prop may be, '**call us to speak with a human**'... I would tell reps to start learning
  how the AI works and help their teams improve it, to get some job security."
- **Counter-voice, liquidskypa** (healthcare, 20 hospitals): patient satisfaction scores "went up"
  because it was easier to get appointments and get callbacks; boomers can talk to the AI without
  the active-call-time pressure human agents face. Unverifiable, but the corpus is not one-sided
  and this should be represented.

**Other r/callcentres threads in window:** "Do customers accuse you of sounding like AI and do you
agree?" (28 pts / 34 cmt, 2026-08). r/pharmacy returned **zero** AI-related posts in the last
60 days via arctic-shift. r/talesfromcallcenters had nothing on-topic except a journalist's
recruitment post. So: **no verified pharmacy-technician frontline account exists in this window.**
Do not invent one.

---

## 4. HIRING DATA — what is solid, what is not

### Solid enough to use, with attribution

- **Robert Half**, survey of **more than 2,000 US hiring managers, fielded April 2026**: **32% of
  hiring managers who eliminated a role primarily because of AI later rehired for the same or a
  similar position.** By function: **finance 44%, HR 35%, technology 32%.**
  **CAVEAT — I could not open the Robert Half primary release.** The March 2026 release at
  press.roberthalf.com is a different survey (AI-generated applications, fielded Nov 2025) and
  does **not** contain the 32% figure; the Aug 2022 release on StockTitan is unrelated. The figure
  is reported consistently by CNBC (2026-07-01, 403 to me), the Kelly Services "Need to Know"
  briefing of 2026-08-03 (**opened and verified as reporting it**), and Outsource Accelerator.
  **Cite as "Robert Half data, as reported by CNBC" — not as a primary read.**
- **Orgvue**: **39%** of business leaders made employees redundant because of AI; **55% of that
  group** say the decision was wrong. (Kelly Services briefing, opened; sample size and field date
  not given anywhere I could find. Attribute carefully.)
- **Indeed Hiring Lab**, Guillermo Gallacher, **2026-07-08** — opened and verified:
  "Agentic AI may be flipping the relationship between AI exposure and job posting growth."
  US software development postings **+~15%** since Claude Code's late-Feb-2025 launch while overall
  postings **fell 7%**; software postings still **27.5% below pre-pandemic**; **71%** of the software
  posting increase is senior roles and **37%** is roles with AI in the title; "the more exposed to
  AI an occupation is, on average, the more it rebounded" since May 2025.
  **The piece contains NO customer-service posting data.**
  https://www.hiringlab.org/2026/07/08/ai-and-job-postings-from-destruction-to-creation/
- **CX Dive**, Kristen Doerer, **2026-07-08** — opened and verified. Using Indeed Hiring Lab data via
  FRED: **customer service job postings are about 10% BELOW pre-pandemic levels** while overall
  postings remain above. Forrester's Kate Leggett predicts AI will "slash the number of customer
  service jobs in half by 2030." Leggett verbatim: "Lower-level jobs are going away, those that can
  be automated. However, AI is unlocking more knowledge work, different types of jobs." Also names
  the real mechanism: "**decoupling customer service inquiry volume to headcount growth**."
  https://www.customerexperiencedive.com/news/AI-expands-customer-service-labor-market-contracts/824761/

### REJECTED — do not use

- **herohunt.ai** ("Customer Service Talent Market: 2026 Hiring Guide") claims customer-service
  postings "accelerated" and that customer-service hiring "outpaces the overall job market by a
  10-percentage-point margin." This is **directly contradicted** by CX Dive's read of the same
  Indeed/FRED series (postings ~10% below pre-pandemic). herohunt.ai is a recruiting-AI vendor.
  **Rejected as vendor content with an unverifiable and contradicted number.** This was the most
  tempting stat I found on the whole beat and it does not survive contact with the primary data.
- **All contact-centre AHT/complexity vendor blogs**: Dialpad, Zoom, JustCall, Sharpen, Knowmax,
  Lorikeet, Natterbox, Parloa, goodcall.com, builts.ai, digitalapplied.com, liveagent, TTEC,
  bluetweak, ultimatestaffing, cloudinteract. These all assert some version of "AI deflects the easy
  calls so agents get harder, longer ones and AHT rises," with numbers like "55–70% of tier-1 volume
  resolved without humans" and "35–45% cut in escalation handle time." **Every one is a vendor
  selling contact-centre AI.** I found **no independent dataset** measuring post-deflection queue
  difficulty or AHT. The all-hard-cases-queue claim is real as lived experience (see §3c) and
  **unproven as a measured trend.** Say so out loud if using it.
- **Known content farms flagged in the brief** — none encountered directly, but same class:
  buildmvpfast.com, alanscottencinas.com, intuitionlabs.ai, iqsource.ai, memeburn,
  letsdatascience.com, redbranchmedia, metaintro, americanbazaaronline, vibegraveyard.ai,
  gadgetreview, openbooklet, imceleste. Not used.
- **"$1.27 spent for every dollar hoped to be saved"** — from an Instagram reel by @nilofer
  (2026-07-27, 10.6k views) surfaced by the last30days engine. No primary source found. **Do not
  use.**
- **Wharton "The AI Layoff Trap" paper**, cited by a TikTok (@urincognitoview, 2026-08-09,
  20k views). Not located or opened. **Do not cite.**

### Could not open (paywall/geo/bot-block), listed for the record
CNBC 2026-07-01 (403), Fast Company 2026-07-15 "The great AI layoff is turning into the great AI
rehire" (403 — the last30days engine's extract of it claims "about half of all companies that
swapped people for AI end up experiencing a boomerang effect, rehiring at greater cost"; **treat as
unverified, I did not open it**), Fast Company 91554983 (403), Motor1 (403), TechCrunch (404),
WPXI (geo-blocked), Bloomberg 2025 (not attempted), The Information (paywall).

---

## 5. DELIBERATE RETURNS TO OLDER, SIMPLER TECHNOLOGY — inventory

Confirmed instances in or near the window:

1. **Kinney Drugs → touch-tone.** Incoming patient calls returned to a prompt-based touch-tone
   system, Aug 2026. AI kept only for opt-in refill texts. (VTDigger, verified.) The HN framing is
   sharper than any trade-press framing: "They replaced AI with a regular old phone tree."
2. **Amazon Just Walk Out → Dash Cart / scan-as-you-go.** Removed from US Amazon Fresh stores
   (installed at 27 of 44). Replaced with barcode-scanning smart carts — a 1970s technology with a
   screen on it. Amazon's own stated reason: shoppers "wanted to view their receipts and savings as
   they shopped." Reporting also established Just Walk Out relied on **1,000+ reviewers in India**,
   with **~700 of every 1,000 sales requiring human review as of 2022**. As of Jan 2026 Amazon is
   closing Amazon Go and Fresh stores and converting sites to Whole Foods; the newest Dash Cart
   rolls into dozens of Whole Foods locations by end of 2026.
   **Note: search-summary level only — I did NOT open aboutamazon.com, NBC News, or The Information
   directly.** The essay already covers Amazon; verify before quoting a number.
3. **Advanced_Heat_2610's employer → manual booking**, withdrawn within a week (r/callcentres,
   Aug 2026). Anecdotal, unnamed company.
4. **TiredMotherOfChaos's employer → no deployment at all** after a live vendor demo failed
   (r/callcentres, Aug 2026). Anecdotal, unnamed company.

Not found despite looking: a named non-tech company outside these that publicly reverted to a
pre-AI system in the last 60 days. If the essay wants a fifth example, it does not exist in this
window on the public record I could reach.

---

## 6. WHAT I LOOKED FOR AND DID NOT FIND

- **A named company that rehired the specific people it cut, into the specific jobs it cut.**
  Ford's 350 came back into a *different* role. Klarna's ~100 are not established as rehires.
  CBA's 45 were reinstated in 2025 and the function was then cut again and offshored in 2026.
  The honest finding is that **the job title comes back and the job does not.**
- **Any pharmacy-technician or pharmacist frontline account of Burt.** r/pharmacy: zero AI posts in
  60 days. No trade-press interview with Kinney staff. It does not exist publicly right now.
- **Independent measurement of the all-hard-cases queue.** Only vendor assertions (see rejections).
- **Kinney staffing/hiring changes tied to the rollback.** No evidence either way.
- **Taco Bell / Yum! Brands voice-AI narrowing detail on staff.** Not pursued in depth — the essay
  already carries it and my searches surfaced no worker-side reporting in the window.

---

## 7. last30days engine run

Command: topic "companies rolling back AI and rehiring workers", 4-subquery plan, subreddits
pinned to talesfromcallcenters, pharmacy, retail, sysadmin, callcentres, antiwork, ExperiencedDevs.
Window 2026-07-12 → 2026-08-11. Runtime 183.5s.

Coverage: Reddit 28 threads (27,631 upvotes, 4,062 comments), X 11, YouTube 1, TikTok 18
(390k views), Instagram 7 (273k views), HN 28 stories (3,715 pts, 2,145 cmt), GitHub 10, Digg 40,
Techmeme 1, Perplexity 47, Web 16. Polymarket 0, arXiv 0.

Top clusters: Kinney Drugs pullback (score 71); Economic Times "AI layoffs are backfiring"
2026-08-04 (67); Klarna rehiring TikTok explainer (63); Fast Company "great AI rehire" 2026-07-15
(62); boomerang-hiring commentary (61).

**Assessment of the engine's value on this beat:** it confirmed the Kinney story is the live
centre of gravity and surfaced the Fast Company piece, but the top-ranked social evidence is
overwhelmingly **commentary about the trend** (TikTok/Instagram explainers with 10k–20k views)
rather than **frontline accounts of doing the work**. The genuinely useful frontline material came
from the two manual pulls: the HN Algolia API on the Kinney thread and arctic-shift on
r/callcentres. Noted for future runs — pinned-subreddit search on Reddit returned 0 from
r/talesfromcallcenters and 0 from r/pharmacy.

Saved raw: `~/Documents/Last30Days/companies-rolling-back-ai-and-rehiring-workers-raw-v3.md`
