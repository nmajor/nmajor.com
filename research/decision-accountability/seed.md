# Seed — essay working doc (accountability / decisions machines shouldn't make)

Working notes, not for readers. Topic dir: `research/decision-accountability/`.

## Thesis (one sentence, from Nick's dump)
UnitedHealth is a caution about automation itself: accountability can't be automated, so
some decisions that land on a person's life should never be a machine's to make, no matter
how accurate it gets.

## Why a reader should care (ICP: AI decision-makers at traditional companies)
Every operator is being pushed to automate. This gives them the one question that decides
whether an automation is a win or a liability that lands on a real person, and tells them
which decisions to keep out of a machine's hands entirely.

## Tactical take-home (woven, never labeled)
Before automating any step, ask the harder question: not "can a machine do this," but "is
this a task, or a decision that lands on a person, and if it goes wrong is there still a
human who is actually allowed to overrule it and answerable for the outcome?" If not, that
decision doesn't belong to the machine.

## Shape
News-shaped opinion essay (a real, current event + Nick's read), building to a bigger
argument. Lead with the opinion/cost, per the news shape. ~700-900 words.

## Spine material (Nick's, keep his framing)
- "UnitedHealth automated the wrong thing and now it's costing them X" (cost-forward hook).
- "It was not even an LLM / the fancy kind" — the danger isn't sophistication, it's aim.
- Task vs decision (the operating line).
- The human harm: people denied coverage they shouldn't have been; "liability for people's
  lives that never should have been in the hands of a machine."
- His concession: AI might one day be as good or better at the call. Accuracy isn't the crux.
- The crux: accountability and responsibility. A machine can produce a decision, not be
  answerable for one.
- "Maybe society should disallow this class of decision" (health/lives).
- "Flew too close to the sun and got burned, rightfully so" (render plainly, no cliché).
- Insurance is going hardest at AI of any industry.
- Close: ask the harder question before you automate.

## Claims to back → source (all already verified this session)
- $3B AI push; nH Predict is older PREDICTIVE model, not an LLM → `research/case-studies/entries/unitedhealth-ai-claims-denials.md` (CONFIRMED tier); STAT/Health Affairs.
- Class action + Senate report + decade-of-files discovery order (Mar 9, 2026) → case-study entry (CONFIRMED); ArentFox Schiff; Lokken docket.
- Denial rate 8.7% → 22.7% (2019-2022) → PSI Senate report "Refusal of Recovery" (CONFIRMED, verbatim). Frame as co-occurring (report says "at the same time"), not proven cause.
- Gene Lokken, 91, coverage cut; family paid ~$12-14k/month until his death (Jul 17, 2023) → CBS News (CONFIRMED). Attribute as the patient's cost.
- "Pushed to keep patients within ~1% of the model's projected days" → STAT "Denied by AI" (REPORTED, former employees). Use "reportedly."
- ~90% error / >80% reversed on appeal → Lokken complaint (ALLEGED — attribute as allegation, or omit).
- NO verified dollar cost to UNH; "$5M" is the amount-in-controversy threshold, not a paid cost; stock drop is multi-causal → case-study entry caveat. Do NOT invent a $ figure.
- Insurance leads every sector (incl. tech) in AI mentions in 2025 filings: 82.9% (n=140, 116 mention AI) vs tech 77.4% → Institute `ai-in-filings/processed/rates-2025.csv` (first-party). HONEST FRAME: it measures AI *disclosure*, not deployment depth; the Institute's own finding is ~0.43% of AI-mentioning 10-Ks quantify an outcome ("AI washing"). So say "talks about AI / tells investors about AI more than any other industry," not "deploys most."
- FSB insurer counter-example (AI drafts quick-quote in ~45s, human signs; days→45s; ~400k manual instances eliminated 2025) → `research/case-studies/raw/regulated-decisions-01-fsb-*` (CONFIRMED; it's a June 2026 FSB consultation draft, non-binding). Optional balance leg.
- Philosophy → `research/decision-accountability/report.md`:
  - Responsibility gap (Matthias 2004) — STRONG; cite principle (his strict case is learning machines; nH Predict is fixed, so don't imply it's a self-learning agent).
  - Moral crumple zone (Elish 2019) — STRONG; the in-loop human absorbs blame.
  - Meaningful human control (Santoni de Sio & van den Hoven 2018) — STRONG; life-and-death needs a real answerable human (killer-robot → healthcare bridge).
  - GDPR Article 22 — right not to be subject to a solely automated decision with significant effect (EU; cite as principle/precedent, not US law).
  - (Kant dignity, Sandel = optional/stretch; keep the spine on the three above.)
- Regulators already draw the line (US, in force): CMS-4201-F (AI can't be sole basis to deny MA admission); California SB 1120 (a licensed clinician must make a medical-necessity denial) → case-study raw `unitedhealth-legal-05/06`. Use to show "the line is already law in places."

## Open questions / skeptic pushback
- "But humans deny claims too / are also biased." → Answer with accountability, not accuracy: a human denier can be held to account; that's the point, not error rate.
- "nH Predict wasn't even AI-as-you-mean-it (not an LLM)." → Pre-empted: that's the point, the harm didn't need advanced AI.
- "Isn't this just healthcare?" → No; the task-vs-decision + accountability test generalizes; insurance is just the front line.
- Don't overclaim causation (denials↔algorithm) or a $ cost to UNH.

## Structure (moves)
1. Hook: cost-forward — UnitedHealth automated the wrong thing; here's what it's costing.
2. It wasn't even the fancy kind of AI (not an LLM). The danger is aim, not sophistication.
3. Task vs decision + the human harm (Gene Lokken; denial-rate rise).
4. The concession + the pivot: even if the machine got as good/better, accuracy isn't the crux — accountability is (responsibility gap; moral crumple zone).
5. The bigger claim: some decisions we should refuse to automate; we already draw this line elsewhere (meaningful human control / battlefield; GDPR Art 22; CMS/SB1120).
6. Insurance is racing hardest at exactly this line.
7. Close (bookend): the harder question to ask before you automate anything.
