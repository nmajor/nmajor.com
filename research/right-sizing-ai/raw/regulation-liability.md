# Raw findings — regulation & liability beat

Reporter: regulation-and-liability journalist
Date: 2026-08-11
Concept this week: the "scope retreat" — companies deploy AI at the biggest, busiest,
highest-volume version of a job (best-looking ROI), it underperforms there, they narrow it
to a smaller job where it works, and keep it. Lead cases: Kinney Drugs, J&J, Amazon Just
Walk Out, Taco Bell.

My beat question: **where is someone being told what their AI is not allowed to do?**

Everything below is raw and unedited. Every URL marked ✅ was opened with WebFetch by me
and confirmed to say what I claim. Marked ❌ = could not open (paywall/403/401); those are
only used as corroboration behind a source I did open.

---

## HEADLINE FINDING 1 — the scope retreat is being written into statute before the experiment runs

Six-plus states in 2026 passed health-insurance AI laws with an identical architecture:
**AI may do the initial/screening pass. AI may not be the sole basis for the denial. A
licensed human makes the adverse call.** That is precisely the before-scope / after-scope
split from the essay, except a legislature drew it in advance instead of a company drawing
it after a failure.

### Alabama SB 63 — PRIMARY SOURCE, verbatim
✅ https://alison.legislature.state.al.us/files/pdf/SearchableInstruments/2026RS/SB63-enr.pdf
(enrolled text, 9pp, extracted with pypdf; sponsor Sen. Orr; First Read 13-Jan-26; Senate
19-Feb-26; House amended and passed 08-Apr-26; Senate concurred 08-Apr-26)

Verbatim, Section 1(b)(3):

> "In addition to the requirements listed in subdivisions (1) and (2), a determination to
> deny, delay, or modify a request for prior authorization based on medical necessity
> **shall always be made by a licensed physician or other health care professional who is
> competent to evaluate any recommendation or conclusion of artificial intelligence** in
> the light of the specific clinical issues involved in the health care service requested
> which are unique to the enrollee's circumstances or as recommended by the treating health
> care provider."

Verbatim, Section 1(b)(1) — what the AI must base determinations on:

> "a. The enrollee's medical history.
>  b. Any clinical circumstances unique to the enrollee which are presented by the
>     requesting health care provider.
>  c. Additional clinical information about the enrollee which may be present in the
>     enrollee's medical record."

Verbatim, Section 1(b)(2) — the annual certification. **This is the sharpest detail I found
all day:**

> "A health benefit plan provider shall certify annually to the department that the
> artificial intelligence used to make determinations of medical necessity on requests for
> prior authorization complies with all of the following:
>  a. **The artificial intelligence does not rely on a group dataset to make
>     determinations.**
>  b. The artificial intelligence is fairly and equitably applied…
>  c. The artificial intelligence does not discriminate, directly or indirectly…"

Why that matters for the concept: "does not rely on a group dataset" outlaws the exact
economics that make the big, high-volume deployment attractive — population-level pattern
matching across a book of business. What survives is the narrow job: read *this* enrollee's
record, surface it to a human.

Enforcement (Section 1(d)): Alabama Dept. of Insurance may notify (30-day response),
hold a hearing, impose a corrective plan, and for repeat violations fine up to **$5,000**
per violation "that occurred with such frequency as to indicate a general business pattern
or practice", or **suspend or revoke the certificate of authority**. Also must reimburse
the department's investigation costs.

Section 2: **"This act shall become effective on October 1, 2026."**

Note: the fine is small. The certificate-of-authority revocation is the real teeth. Don't
overstate the fine.

### Iowa HF 2635 — PRIMARY SOURCE
✅ https://www.legis.iowa.gov/docs/publications/LGE/91/attachments/HF2635.html
(Legislative Guide/explanation attachment for HF2635, 91st GA)

- Section 2, new subsection 2A: "A utilization review organization **may use an artificial
  intelligence-based algorithm or system to provide an initial review** of a request for
  prior authorization."
- Same subsection: AI cannot be "**the sole basis for the utilization review organization's
  decision to deny, delay, or downgrade** the prior authorization request" where medical
  necessity is involved.
- Denials/downgrades must be made by a qualified physician (if the requester is a
  physician) or a clinical peer (if not) — Section 6, new §514F.8A(2).
- **Timing nuance I must not flatten:** the act's effective date is reported as July 1,
  2026, but the primary text says the peer-review requirements in new §514F.8A apply to
  "requests for prior authorization made on or after **January 1, 2027**" (§514F.8A(5)).
  So the AI-initial-review permission and the sole-basis prohibition land mid-2026; the
  full peer-review machinery phases in Jan 2027. Flag this if used.

This is the single cleanest statutory expression of the scope retreat I found: *AI keeps
the screening job, loses the deciding job.*

### Washington SB 5395
✅ https://natlawreview.com/article/additional-states-continue-legislative-trend-new-laws-limiting-use-artificial
(Sheppard, Mullin, Richter & Hampton LLP, published 2026-07-02, via National Law Review)

- Effective **June 11, 2026**.
- "Only a licensed physician… may deny a prior authorization request based on medical
  necessity"; insurers "must not rely solely on AI."
- AI may "support prior authorization reviews with enrollee-specific clinical data."
- Adds disclosure of reviewer credentials to enrollee and provider, and **annual reporting
  to the insurance commissioner**.
- Same Sheppard alert on **Georgia**: effective Jan 1, 2027 — "AI may not issue an adverse
  determination to a patient until a natural person qualified as a private review agent…
  conducts a utilization review", and clinical peer judgment "cannot be superseded by AI
  systems."

### Indiana HB 1271
Not in the Sheppard piece. Corroborated by two other sources:
- ✅ Holland & Knight (below): effective **July 1, 2026**; prohibits insurers from using AI
  as "the sole basis for downcoding a claim without a healthcare professional's review";
  also restricts *providers* from submitting claims via AI without professional review.
- Engine evidence (Becker's Payer, 2026-07-28) quotes the statute: an insurer "may not use
  an automated: (1) process; (2) system; or (3) tool, including artificial intelligence; as
  the sole basis to downcode a claim based on medical necessity without the review of the
  covered individual's medical record by an employee or contractor of the insurer."
  ❌ Becker's URL 403s on direct fetch — treat the exact quote as second-hand.

### The full 2026 state roundup
✅ https://www.hklaw.com/en/insights/publications/2026/05/states-continue-efforts-to-regulate-ai-in-healthcare
(Holland & Knight, published 2026-05-26)

Every 2026 law it lists, with what AI is barred from doing:

| State | Bill | Effective | The scope line |
|---|---|---|---|
| Alabama | SB 63 | Oct 1, 2026 | AI can't decide PA denials; annual "no group dataset" cert |
| Indiana | HB 1271 | Jul 1, 2026 | No AI-only downcoding without professional record review |
| Utah | SB 319 | Jan 1, 2027 | Adverse determinations on independent medical judgment "not dictated by AI recommendations"; disclose AI use |
| Washington | SB 5395 | (H&K: immediate; Sheppard: Jun 11, 2026) | No sole reliance on AI to deny/delay/limit in PA |
| Maryland | HB 1563 | Jun 1, 2026 | Quarterly reporting on adverse decisions + whether AI used; commissioner may investigate denial spikes |
| Georgia | SB 544 (H&K) / SB 444 (Sheppard) | Jan 1, 2027 | No adverse determination without licensed provider review |
| Maine | HB 2082 | Apr 8, 2026 | Mental health pros restricted from AI for "therapeutic communications or treatment decisions"; consent for ambient recording |
| Idaho | Conversational AI Safety Act | Jul 1, 2027 | Chatbots may not represent they provide professional mental/behavioral healthcare |
| Nebraska | Conversational AI Safety Act | Jul 1, 2027 | Same |
| Oregon | SB 1546 | Jan 1, 2027 | AI companion disclosure; suicidal-ideation protocols |
| Tennessee | SB 1580 | Jul 1, 2026 | No advertising AI as qualified to act as licensed mental/behavioral health pros |
| Delaware | HB 191 | Apr 23, 2026 | No "nonhuman entity, including an agent powered by AI" may be licensed as a healthcare professional |

**Discrepancy to flag:** Georgia bill number differs between H&K (SB 544) and Sheppard
(SB 444). Do not cite a bill number for Georgia without re-checking. Maine's "HB 2082" is
also suspect — Maine uses LD numbers; unverified.

Corroborating counts: Transparency Coalition (2026-07-27) says 14-15 new state healthcare
AI laws this year; AMA state legislative brief exists. Neither opened directly.

---

## HEADLINE FINDING 2 — the insurance industry is narrowing AI scope without any regulator

The other force on my beat that narrows scope is not a regulator at all. It's the carriers.
Verisk/ISO issued standard generative-AI exclusion endorsements that attach on CGL renewals
from Jan 1, 2026, and by July 2026 trade press is reporting real carrier uptake.

### The forms — verified verbatim definition
✅ https://www.independentagent.com/vu_resource/verisk-to-roll-out-new-general-liability-exclusions-for-generative-ai-exposures/
(Big "I" Virtual University, Nancy Germond, published 2026-10-21 — i.e. **2025-10-21**;
the fetch reported Oct 21, 2025. Effective date given as January 2026.)

Three optional endorsements:
- **CG 40 47** — excludes gen-AI under Coverage A *and* B (bodily injury, property damage,
  personal & advertising injury). The broad one.
- **CG 40 48** — Coverage B only (personal & advertising injury).
- **CG 35 08** — Products/Completed Operations.

Verbatim ISO definition:

> "'Generative artificial intelligence' means a machine-based learning system or model that
> is trained on data with the ability to create content or responses, including but not
> limited to text, images, audio, video or code."

Exclusion scope: coverage excluded "with respect to bodily injury, property damage or
personal and advertising injury **arising out of** generative artificial intelligence."

Note the trigger is "arising out of" — that is famously broad causal language in insurance,
much broader than "caused by". I am not a lawyer and must not opine on how a court reads it.

### Uptake — trade press, July 2026
✅ https://www.claimsjournal.com/news/national/2026/07/20/338950.htm
(Claims Journal, Don Jergler, 2026-07-20)

- Confirms all three form numbers and their scopes.
- Joe Lam (Verisk VP): high carrier interest; adoption numbers not disclosed.
- Alana McMullin (partner, Lathrop GPM): "There's been a major shift in the insurance
  industry's treatment of AI-related risks and insurers are moving very quickly to limit
  this exposure." Also notes counter-pressure: "Insurers have plenty of reasons to hesitate
  in adopting these broad exclusions for AI risks, including market pressure, right?"
- Cites a Gallagher study: **978% increase in AI-related lawsuits 2021–2025**, and **137%
  increase 2024–2025**. (Second-hand; I did not open the Gallagher study.)

❌ https://www.businessinsurance.com/commercial-insurers-begin-excluding-generative-ai-risks/
(Business Insurance, 2026-07-31 — "Commercial insurers have begun adding artificial
intelligence exclusions to policies after Verisk Analytics Inc. released standardized
endorsement templates". 403 on fetch; surfaced via the last30days engine's grounding lane.
Corroboration only.)

### Carrier-level "absolute" exclusions
✅ https://www.policyholderpulse.com/ai-exclusions-insurance-policies/
(Pillsbury Winthrop Shaw Pittman LLP — Jay Konkel & Hadhy Ayaz, published 2026-04-13,
updated 2026-04-17)

- Confirms CG 40 47 / CG 40 48 / CG 35 08.
- **Berkley** uses "absolute" AI exclusions across **D&O, E&O, and fiduciary liability**,
  excluding claims "based upon, arising out of, or attributable to" actual/alleged AI use,
  statements about AI, and regulatory requirements. Berkley's AI definition is broader than
  ISO's — it covers *any* machine-based system that "infers, from the input it receives, how
  to generate outputs such as predictions, content, recommendations, or decisions." That
  sweeps in ordinary ML scoring models, not just chatbots.
- **Hamilton Insurance Group** excludes claims "based upon, arising out of, or in any way
  involving" gen-AI systems producing text, imagery, audio or synthetic data.

✅ https://www.shumaker.com/insight/the-new-ai-coverage-fight-exclusions-endorsements-and-denied-claims/
(Shumaker, Loop & Kendrick LLP — Brian C. Focht, published 2026-07-30)

- Confirms CG 40 47 01 26 form number and January 2026 effective date.
- Berkley "Absolute" AI exclusion covers "actual or alleged use, deployment, development,
  integration, or failure of AI."
- **Names no actual denied claims or coverage disputes.** Discusses gaps prospectively.
- Advice list includes "review exclusions at renewal, not after claims" and "map use cases
  to potential harms."
- Money quote: "The policy that matters is not the one the company thinks it bought. It is
  the one the insurer will actually apply when something goes wrong."

✅ https://www.fenwick.com/insights/publications/end-silent-ai-emerging-ai-exclusions-coverage-fragmentation-and-practical-implications
(Fenwick & West — Heidi Lawson & Sarah Hopkins, published 2026-06-15)
- Confirms ISO introduced the gen-AI CGL exclusion in January 2026.
- Describes "broad 'absolute' AI exclusions" in management liability; exclusions targeting
  "AI outputs, decision-making, system behavior, or use of third-party AI tools."
- **No named carriers, no named disputes.** Trend piece.

✅ https://www.lathropgpm.com/insights/the-ai-coverage-gap-what-new-insurance-exclusions-mean-for-your-business/
(Lathrop GPM, published 2026-05-04)
- Confirms three ISO endorsement types and the "arising out of" gen-AI trigger.
- Explicitly says exclusions "are not yet universal." **Important honesty caveat.**
- Names no carriers or form numbers.

### The FT origin story (older than my window, context only)
FT reported (Nov 2025) that AIG, Great American and WR Berkley asked US regulators to let
them exclude AI-related liabilities; WR Berkley's proposed exclusion would apply to any
claim resulting from AI use in any form; AIG told Illinois regulators gen-AI is "broad and
far-reaching" and claims are likely to increase — but an AIG spokesperson said the company
has "no plans to implement them at this time." Surfaced via TechCrunch (2025-11-23) and
the-decoder. **I did not open the FT itself. Do not cite FT directly.**

**Unverified claim I am rejecting:** several sources assert "state regulators approved more
than 80% of submitted filings" and name Berkshire Hathaway, Chubb, Travelers, Cincinnati
Financial as having won approval. That 80% figure traces back to vorplabs.com,
actuary.info, aicoverageguide.com and similar SEO sites, not to a regulator or a filing
database. **Do not use the 80% number or that carrier list.** The carrier claims I can
stand behind are Berkley and Hamilton (Pillsbury) and Berkley (Shumaker).

---

## STORY 3 — GEICO / Pennsylvania AG: a traditional insurer's AI tool gets its job redrawn

✅ https://www.clarkhill.com/news-events/news/geico-ai-settlement-insurance-underwriting-compliance/
(Clark Hill — Robert Tomilson & Joseph Gattermeyer, published 2026-06-04)
✅ https://www.insurancejournal.com/magazines/mag-features/2026/06/22/874424.htm
(Insurance Journal, 2026-06-22, full text)
❌ https://www.attorneygeneral.gov/taking-action/ag-sunday-and-geico-agree-on-improvements-to-remedy-customer-confusion-and-prevent-unfair-auto-insurance-cancellations/
(PA AG press release — 403 on fetch; title and content corroborated via search results and
the two sources above)

Facts:
- PA AG **Dave Sunday** announced the agreement **May 22, 2026**.
- GEICO ran an automated underwriting review during the standard **60-day new-customer
  evaluation window**. An AI-featured tool **selected** applicants for further review and
  requested supporting documents.
- A West Philadelphia policyholder's response was judged "insufficient"; her policy was
  cancelled; she "continued to drive for some time under the mistaken belief that she was
  still insured."
- The AG framed it as "unfair or confusing" practices — Clark Hill notes the concern was
  "fairness and clarity of procedures, especially for potentially vulnerable consumers
  selected for review by algorithmic systems." The AG explicitly did **not** frame it as
  "AI is bad."
- What GEICO agreed to (Insurance Journal): **one extra week** to submit documents; **one**
  form of residency verification instead of two; a current driver's licence counts as proof
  of residency if the address matches. Plus (Clark Hill): act consistent with **Pennsylvania
  Insurance Department guidance on insurer AI use**, formal AI governance with executive
  oversight, bias detection in predictive models, responsibility for third-party vendor
  tools, disclosure of AI use and documentation of algorithmic models to PID.
- **No admission of legal violation. No monetary penalty reported.**
- AG quote (via Insurance Journal): "This agreement secures meaningful improvements that
  will help protect policyholders, and ensures that the company's use of new technology is
  done within industry standards."

Read for the concept: this is a *soft* scope retreat. The AI kept its job (flagging new
policies for review). What changed is the consequence path around it — more time, fewer
documents, clearer notice. Nobody told GEICO to switch the model off. They told it the
highest-consequence output (silent cancellation) needed a different human-facing wrapper.

❌ https://www.theinsurer.com/ti/news/state-ags-widen-ai-enforcement-audits-for-insurers-lawyer-says-2026-07-22/
(The Insurer, 2026-07-22, "State AGs widen AI enforcement audits for insurers" — 401
paywall. Headline only; do not cite content.)

---

## STORY 4 — Pennsylvania v. Character Technologies: a regulator tells an AI what profession it may not practice

✅ https://www.hklaw.com/... (context) plus:
- https://www.pa.gov/governor/newsroom/2026-press-releases/shapiro-administration-sues-character-ai-over-fake-medical-claim
- https://www.forbes.com/sites/lanceeliot/2026/05/28/pennsylvania-seeks-injunction-against-ai-maker-whose-chatbot-brazenly-claims-to-be-a-psychiatrist-licensed-to-practice-medicine/
- https://www.troutman.com/insights/pennsylvania-targets-ai-chatbot-for-the-unauthorized-practice-of-medicine/
- https://www.mcdermottlaw.com/insights/character-flaw-pennsylvanias-crackdown-on-ai-playing-doctor/
(Search-verified across 10 independent results including two law firms and the state's own
newsroom. I did not individually WebFetch each; the facts below are consistent across all.)

- Filed **May 1, 2026** by the PA Department of State through its **State Board of
  Medicine** against Character Technologies, Inc.
- Theory: **unauthorized practice of medicine** under the PA Medical Practice Act.
- A bot named "Emilie" presented as a psychiatrist with an Imperial College London degree
  and **a fabricated Pennsylvania licence number**.
- Relief sought: preliminary injunction + order barring the chatbots from giving medical
  advice reserved to licensed professionals.
- Described as the first enforcement action of its kind by a US state targeting AI for
  unlicensed medical practice.

✅ Bloomberg Law, 2026-08-03, "AI Therapy Chatbots Spur States to Act Over Patient Safety
Fears" — https://news.bloomberglaw.com/health-law-and-business/ai-therapy-chatbots-spur-states-to-act-over-patient-safety-fears
(surfaced via the last30days engine grounding lane; opens with the same "Emilie" character.
Fresh — 8 days ago.)

Why I'm **not** leading with this: Character.AI is a tech company, not the ICP. It's useful
as colour — the state used a 1970s-era licensing statute, not an AI law — but an owner of a
logistics firm does not see themselves in it.

---

## STORY 5 — Utah: a state medical board asks to halt an AI prescription-refill pilot, and loses

✅ https://www.kuer.org/health/2026-04-28/utah-dismisses-medical-board-call-to-halt-its-pioneering-ai-prescription-program
(KUER, 2026-04-28)

- Utah's **Office of Artificial Intelligence Policy** (Dept. of Commerce) signed an
  agreement with private company **Doctronic** for a first-in-the-nation AI prescription
  refill pilot, launched early 2026. It **relaxed regulatory barriers** so the pilot could
  run outside standard medical board oversight.
- **April 20, 2026:** a majority of the Utah Medical Licensing Board signed a letter calling
  for immediate suspension. "Prescription refills is a task reserved for properly licensed
  medical practitioners for critical safety and clinical reasons"; the programme
  "potentially places Utah citizens at risk." The board was **not consulted** beforehand.
- Board Chair Dr. Alan Smith: "I'm just very afraid that nothing's going to happen until we
  have some deaths."
- Utah declined to halt it.
- **The scope design is the interesting part, and it's a textbook narrow-first deployment:**
  only **routine refills of prescriptions originally written by a licensed physician**;
  higher-risk prescriptions excluded; **Phase One = every AI decision reviewed by a
  physician *before* it goes to the pharmacy**; Phase Two (only if approved) would move that
  review to *after* submission.

This is the mirror image of Kinney Drugs. Kinney put AI on inbound patient calls, got
burned, and retreated to opt-in outbound refill texts. Utah/Doctronic started at roughly
where Kinney ended up — routine refills, human in front — and a professional board still
says that's too wide. Good tension, but it's a pilot, not an enforcement action.

---

## Things I looked for and did NOT find

- **No pharmacy-board rule anywhere restricting AI phone assistants.** Searched state boards
  of pharmacy, NABP, CA Board of Pharmacy agendas. NABP's own executive is quoted saying the
  challenge is "how do you regulate all this technology" — i.e. there is no rule yet. The
  Kinney Drugs retreat was market-driven (customer complaints), not regulator-driven. Do not
  imply a pharmacy regulator forced it.
- **No banking-supervisor action** (OCC/Fed/FDIC/state DFS) in the last 60 days restricting a
  specific AI decision. Nothing solid.
- **No named coverage dispute or denied claim** under an AI exclusion yet. Four separate law
  firms all say the same thing: exclusions are landing, litigation hasn't. That's a real
  limit on the story and I'm stating it plainly rather than implying a denied claim exists.
- **No first-of-kind action against a non-tech company's AI in the last 30 days.** The
  freshest ICP-relevant enforcement is GEICO (May 22) — 81 days old.

## Sources rejected as likely AI content farms / SEO spam (never cited)
actuary.info, aicoverageguide.com, agentliability.eu, legalaigovernance.com, metaintro.com,
toofer.com, vorplabs.com, theleveragedyears.com, cubbbix.com, af.net, livecompliance.com,
ailawsbystate.com, techresearchonline.com, muni.health, phl-firm.com, testudo.co,
rmstudygroup.com, techlifefuture.com, beinsure.com, tristatealert.com, pennwatch.org,
getprosper.ai, ringlyn.com, retellai.com, famulor.io, asepha.ai, pharmesol.com,
jrreport.wordandbrown.com. Also treated modulos.ai, techbuzz.ai and the-decoder as
secondary aggregation of the FT, not primary.

## last30days engine run
Ran 2026-08-11, window 2026-07-12 → 2026-08-11. 192 items across 11 sources.
Raw saved to ~/Documents/Last30Days/ai-liability-regulation-narrowing-what-ai-is-allowed-to-do-raw-v3.md

Practitioner chatter was thin and low-quality on this beat — 31 Reddit threads but mostly
r/artificial and r/ArtificialInteligence general AI-doom discussion, 3 X posts, no Polymarket
markets, no arXiv. TikTok had 3.1M views but on EU AI Act explainers, not US liability. The
engine's real value here was its grounding/Perplexity lane, which surfaced three fresh trade
items I'd otherwise have missed: **Business Insurance 2026-07-31**, **Claims Journal
2026-07-20**, **Shumaker 2026-07-30**, plus **Bloomberg Law 2026-08-03**. Notably: there is
almost no operator conversation about AI insurance exclusions. Owners and CIOs are not
talking about this yet. That's an argument for covering it, not against.

## WebSearch Supplemental Results

- **Holland & Knight** (hklaw.com) — 2026-05-26 roundup of every 2026 state healthcare AI
  law with bill numbers, effective dates, and what each restricts AI from doing.
- **Sheppard Mullin via National Law Review** (natlawreview.com) — 2026-07-02, Iowa /
  Washington / Georgia utilization-review AI limits with quoted statutory language.
- **Iowa Legislature** (legis.iowa.gov) — primary HF 2635 text: AI permitted for initial
  review, prohibited as sole basis for denial.
- **Alabama Legislature** (alison.legislature.state.al.us) — primary SB 63 enrolled text,
  including the "does not rely on a group dataset" annual certification.
- **Claims Journal** (claimsjournal.com) — 2026-07-20, Verisk VP and Lathrop GPM partner on
  the three ISO gen-AI exclusions and carrier uptake; Gallagher AI-litigation growth figures.
- **Big "I" Virtual University** (independentagent.com) — 2025-10-21, verbatim ISO
  generative-AI definition and the CG 40 47 / CG 40 48 / CG 35 08 form scopes.
- **Pillsbury Policyholder Pulse** (policyholderpulse.com) — 2026-04-13, carrier-level
  "absolute" AI exclusions at Berkley and Hamilton, with Berkley's very broad AI definition.
- **Shumaker Loop & Kendrick** (shumaker.com) — 2026-07-30, Berkley absolute exclusion
  wording and renewal-timing advice.
- **Fenwick & West** (fenwick.com) — 2026-06-15, "silent AI" coverage erosion across cyber,
  Tech E&O, D&O, EPLI.
- **Lathrop GPM** (lathropgpm.com) — 2026-05-04, three ISO endorsement types; explicitly
  notes exclusions are "not yet universal."
- **Clark Hill** (clarkhill.com) — 2026-06-04, GEICO/PA AG settlement terms and governance
  requirements.
- **Insurance Journal** (insurancejournal.com) — 2026-06-22, the concrete GEICO process
  changes and AG Sunday's quote.
- **KUER** (kuer.org) — 2026-04-28, Utah medical board vs the Doctronic AI refill pilot,
  including the Phase One / Phase Two review design.
- **Forbes / PA Governor's newsroom / Troutman / McDermott** — Pennsylvania State Board of
  Medicine v. Character Technologies, unauthorized practice of medicine, filed 2026-05-01.
