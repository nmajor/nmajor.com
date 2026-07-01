# ICP focus-group ranking — candidate pool (June 30, 2026)

**What this is.** A 3-juror ICP panel ranked the 15-candidate combined pool
(`candidate-pool.md`) by how interesting each topic is *to the ICP, given current events
and the state of AI*. Each juror, in persona, scored every candidate 0-5 (reason before
score), then named top/bottom picks. Aggregated by median (headline), mean, and spread.

**Lineup (mini, one per provider, blind to each other):**
- anthropic · `claude-opus-4-8` (native subagent) — *Skeptical insurance COO*
- openai · `gpt-5.5` (codex CLI) — *Practical logistics ops director*
- google · `gemini-3.1-pro-preview` (gemini CLI) — *Risk-conscious manufacturing CEO*

**Caveat (read it).** Persona simulation is directional, not a forecast of real audience
behavior; it runs leniency-high and explains <10% of variance in real human judgment.
Weight the *agreement pattern* and the *verbatim reasons* over the raw numbers.

## Ranked result

| Rank | ID | Median | Mean | Spread | COO/Log/Mfg | Candidate |
|----|----|----|----|----|----|----|
| 1 | C4 | 5 | 5.00 | 5-5 | 5/5/5 | **Bain: AI budgets up, returns aren't** |
| 2 | C1 | 5 | 4.67 | 4-5 | 5/4/5 | **Ford rehires ~350 engineers (AI QC walk-back)** |
| 3 | C8 | 5 | 4.67 | 4-5 | 5/5/4 | **MassMutual buying playbook: 12mo, zero lock-in** |
| 4 | C13 | 5 | 4.67 | 4-5 | 5/4/5 | **Baker Hughes: humans accept only 5-7%** |
| 5 | C10 | 5 | 4.33 | 3-5 | 3/5/5 | One NZ: AI over legacy, no rebuild |
| 6 | C11 | 5 | 4.33 | 3-5 | 3/5/5 | Lemvigh-Müller: touchless procurement agents |
| 7 | C2 | 4 | 3.33 | 2-4 | 4/2/4 | Starbucks pulls AI inventory after 9mo |
| 8 | C12 | 3 | 3.33 | 3-4 | 3/3/4 | Ecolab: 700pg FDA manuals → 2-min cited answers |
| 9 | C3 | 3 | 3.00 | 2-4 | 4/3/2 | Providence ambient scribe: honestly "modest" |
| 10 | C14 | 3 | 3.00 | 1-5 | 1/5/3 | DHL: smart warehouse −31% fulfillment cost |
| 11 | C5 | 3 | 2.67 | 2-3 | 3/2/3 | Harvard/Belfer: innovate-not-cut beats cost-cutting |
| 12 | C7 | 3 | 2.67 | 1-4 | 4/3/1 | FNBO: agents in financial-crime investigation |
| 13 | C9 | 2 | 2.00 | 0-4 | 4/2/0 | Zurich+KatRisk: real-time cat underwriting |
| 14 | C6 | 1 | 1.33 | 0-3 | 1/3/0 | Santander: AI to 185k staff, $40M Q1 ROI |
| 15 | C15 | 1 | 1.33 | 1-2 | 2/1/1 | KPMG: 276k staff + governance control plane |

Top-3 mentions: C1 ×2, C10 ×2, C11 ×2, then C8/C4/C14 ×1.
Bottom-3 mentions: C6 ×2, C15 ×2, then C14/C2/C5/C9/C7 ×1.

## What the panel agreed on

1. **Honest numbers and failures win, unanimously.** The top 4 are all "the truth about
   AI ROI" stories: the Bain reckoning (C4, a clean 5/5/5), Ford walking AI back (C1),
   MassMutual's buying discipline (C8), and Baker Hughes' brutal 5-7% acceptance rate
   (C13). Every juror reached for the post-mortems and honest losers first.
   - MfgCEO on C1: *"Ford walking back AI on the QA line because it didn't work? Finally, a
     real story. This is exactly why I haven't ripped out my human inspectors."*
   - LogOps on C4: *"This is the boardroom conversation right now: budgets went up, savings
     did not show up, and someone needs a plain-English way to call that out."*
   - COO on C13: *"That brutally honest adoption number is the most useful reality-check on
     this whole list for setting my own expectations."*

2. **"AI over the systems I already run" + ugly back-office automation.** The two operators
   (Log, Mfg) put C10 (legacy, no rebuild) and C11 (agents reading supplier PDFs) at the
   very top. MfgCEO: *"Layering it over legacy without a rebuild. This is the holy grail. I
   am not replacing my ERP."* Both are deep-cuts little else covered.

3. **Buying discipline travels across every seat.** C8 (short contracts, zero lock-in)
   scored 5/5/4 — the one "how to actually buy this" story, and the COO's would-open pick.

## What they reject (and why it matters for us)

- **Giant-enterprise rollout victory laps die.** Santander (C6) and KPMG (C15) are the two
  worst-rated. *"185,000 employees... has absolutely nothing to do with my reality. Useless."*
  (MfgCEO). Headcount-times-buzzword press releases with clean ROI numbers read as PR.
- **Round vendor stats split the room.** DHL's −31% (C14) got a 1 from the COO ("suspiciously
  round... I've learned to discount exactly this") and a 5 from LogOps — but even the fan
  wants the post to "tear apart what automation actually did and what it cost."
- **Sector relevance drives the spread.** Underwriting (C9) and financial crime (C7) were
  gold to the insurance COO and near-zero to the manufacturer. Single-vertical stories only
  land with their own vertical.

## Editorial read (the panel ranks; Nick picks)

The whole top of the board is one spine: **the honest numbers on AI, right now.** That's
dead-center for our anti-hype brand and we haven't published it yet (the three taken topics
are process-first, build-vs-own, and shadow-AI-access). Two shapes to choose from:

- **A named-company failure/honesty piece** — anchor on one story. C1 (Ford, vivid +
  rides the AI-vs-jobs headlines, but already everywhere), C13 (Baker Hughes 5-7%, our most
  uniquely-honest deep-cut), or C2 (Starbucks, vivid, deep-cut).
- **A synthesis piece** — "What the honest AI numbers actually say," braiding Bain's
  reckoning (C4) with Ford (C1), Baker Hughes (C13), and Starbucks (C2). The panel basically
  voted for this theme four times; it's the strongest, and it fits the "translate research
  into what to actually do" charter.
