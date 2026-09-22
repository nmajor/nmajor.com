# RAW: SeiroIto/ClaudeCodeWorkflow -- humanize skill + humanize-auditor agent, seven-pass-review, devils-advocate, interview-me, agent-fleet, orchestration-schemas, promote-memory (five-critic council)

- Repo: https://github.com/SeiroIto/ClaudeCodeWorkflow
- Date accessed: 2026-08-18
- What it is: A large public academic-writing agent workflow. Relevant here for three transferable mechanisms: (1) Chain-of-Verification fact-checking where the verifier subagent runs in a *forked context that never sees the draft*, with fail-closed behaviour; (2) explicit `quality-gates` / `post-flight-verification` rules that sit outside any one skill; (3) a "humanize" skill paired with an adversarial `humanize-auditor` agent, plus a five-critic council that decides what learnings get promoted into persistent memory.

VERBATIM below, complete files, unedited.


---

## .claude/skills/humanize/SKILL.md

Source: https://raw.githubusercontent.com/SeiroIto/ClaudeCodeWorkflow/main/.claude/skills/humanize/SKILL.md

---
name: humanize
description: Read-only audit of `.tex`, `.qmd`, or `.md` text for AI-voice tells — boilerplate transitions ("Moreover", "Furthermore", "It is important to note that"), AI-cliché lexicon ("delve", "navigate the complexities", "tapestry", "robust framework"), em-dash overuse, symmetric paragraph shapes, tricolon abuse, hedging stacking, "not only X but also Y" frames, and formulaic openers. Produces a report; does NOT rewrite. Use when user says "humanize", "does this sound like AI?", "check for AI tells", "de-AI this draft", "remove AI voice", "audit my prose for sycophancy", or before journal submission / posting a working paper.
author: Claude Code Academic Workflow
version: 1.0.0
argument-hint: "[filename or 'all'] [--severity low|med|high]"
disable-model-invocation: true
allowed-tools: ["Read", "Grep", "Glob", "Write", "Task"]
---

# `/humanize` — AI-voice audit (detect-and-flag)

Read the target file (or all paper-like files), audit for the canonical AI-voice tells in academic prose, and write a structured report. **The skill does not rewrite.** The author edits.

## Why this skill exists

Referees and editors increasingly recognise AI-generated prose. The tells are not stylistic preferences — they're statistically conspicuous patterns the LLM training distribution produces at higher rates than human academic writers. Five reasons to audit before submission:

1. **Reviewer suspicion is a tax.** Even good substance pays a credibility tax if the prose reads as AI-drafted.
2. **Journal policy is tightening.** A growing number of venues require disclosure or prohibit AI-drafted text.
3. **AI tells signal weak content.** Boilerplate transitions ("Moreover", "It is important to note") almost always cover up logical gaps the author didn't think through.
4. **You are not the tells.** Even authors who use AI tools heavily can preserve their own voice by stripping the model's lexical fingerprint.
5. **The fix is cheap once you can see it.** The cost is detection, not rewriting — once the report flags the tells, removal is mechanical.

## What this skill is NOT

- **Not a rewriter.** No `--rewrite` mode. Auto-rewriting AI tells degrades prose quality (cross-vendor research finding); the author preserves voice by editing manually.
- **Not a substance reviewer.** Use `/review-paper` for argument structure, identification, citations.
- **Not a grammar checker.** Use `/proofread` for grammar, typos, overflow, citation format.
- **Not a fact-checker.** Use `/verify-claims` for Chain-of-Verification fact-checking of citations and numeric claims.

`/humanize` is the *voice* lens. Run it alongside the others — none of them substitute.

## When to use

- Before journal submission.
- Before posting a working paper / preprint / SSRN draft.
- After any AI-assisted prose generation (R&R response drafts, lit-review synthesis, abstract revisions).
- As a self-discipline pass after long writing sessions — your own writing drifts toward LLM patterns when you stare at LLM output all day.

## When NOT to use

- On `.bib`, `.R`, or other non-prose files — the detectors are tuned for academic prose.
- On code comments — the tells are different.
- On UI/UX copy — voice norms diverge.

## Detection categories

The humanize-auditor agent checks these category groups:

### 1. BOILERPLATE TRANSITIONS

High-confidence AI tells when they appear sentence-initial or mid-paragraph as connective tissue:

- `Moreover,` / `Furthermore,` / `Additionally,` / `In addition,`
- `It is important to note that` / `It is worth noting that` / `Notably,`
- `In conclusion,` / `In summary,` / `To summarise,`
- `On the other hand,` (when not contrasting two named things)
- `Building on this,` / `Building upon this,`
- `As we can see,` / `As is evident,` / `Indeed,` (stacked)

**Severity:** HIGH if more than 1 per 1000 words. MED if 1 per 2000 words. LOW if rare but present.

### 2. AI-CLICHÉ LEXICON

Words and phrases statistically over-represented in LLM output relative to academic prose:

- "navigate the complexities", "navigate the landscape"
- "delve into", "delve deeper into"
- "tapestry of", "rich tapestry"
- "robust framework", "comprehensive framework", "holistic framework"
- "comprehensive approach" / "multifaceted approach" / "nuanced approach" (especially when stacked)
- "leverage" (as a verb in non-finance / non-engineering contexts)
- "in today's [X] landscape" / "in today's rapidly evolving"
- "play a crucial role" / "play a pivotal role" / "play a significant role"
- "shed light on"
- "underscore the importance" / "highlight the importance"
- "It is essential to" / "It is crucial to"

**Severity:** HIGH on a paper's first three pages (abstract, intro). MED elsewhere.

### 3. EM-DASH AND PUNCTUATION OVERUSE

- Em-dash overuse — more than 3 em-dashes per paragraph is a tell.
- Semicolon stacks — three or more semicolons in a single paragraph.
- Triple-Oxford-comma constructions — lists of three with deliberate parallelism repeated paragraph-to-paragraph.

**Severity:** MED. Em-dashes are a legitimate authorial choice; flag overuse, not all use.

### 4. SYMMETRIC PARAGRAPH SHAPES

Paragraphs with the same micro-architecture: topic sentence → three examples → summarising clause. Repeated across consecutive paragraphs is the AI tell — not the shape itself.

**Detection:** flag any three-paragraph window where each paragraph fits the topic→examples→summary cadence.

**Severity:** MED if 3-paragraph window; HIGH if 5+ paragraph stretch.

### 5. TRICOLON ABUSE

"X, Y, and Z" three-element lists are a legitimate rhetorical device. Tells are:

- More than 4 tricolons per page.
- Tricolons used for items that could naturally be 2 or 4.
- Adjective tricolons stacked ("clear, concise, and compelling"; "rigorous, robust, and reliable").

**Severity:** LOW if rare; MED if patterned.

### 6. HEDGING STACKING

Stacked epistemic hedges in single sentences:

- "might potentially be argued"
- "could possibly suggest"
- "may arguably"
- "perhaps potentially"

**Severity:** HIGH — these are almost never authorial choices; they're LLM uncertainty-management.

### 7. "NOT ONLY X, BUT ALSO Y" FRAMES

Used sparingly, this is a legitimate construction. AI tells:

- More than 2 per paper.
- Used when X and Y are not actually parallel.
- Used as paragraph openers.

**Severity:** MED.

### 8. FORMULAIC OPENERS

- Section openers of the form "This [paper / chapter / section / analysis] [does X]."
- Paragraph openers that re-state the section title.
- Abstract opening with "In this paper, we..." (legitimate in some sub-fields; flag for review where it's atypical, e.g., AER abstracts rarely use it).

**Severity:** LOW unless every section starts this way.

### 9. HYPHENATION EXCESS

Long chains of compound modifiers as a paragraph signature:

- "data-driven", "evidence-based", "well-suited", "well-established", "long-standing" — fine individually; flag if three or more appear in a single paragraph.

**Severity:** LOW.

### 10. SYCOPHANCY / SELF-IMPORTANT FRAMING

- "This important contribution"
- "This significant finding"
- "Our novel approach"
- Self-citation as "groundbreaking" / "pioneering"

**Severity:** HIGH — these read as AI-generated promotional copy; referees will react badly.

## Steps

1. **Identify files to audit:**
   - If `$ARGUMENTS` starts with a filename: audit that file only.
   - If `$ARGUMENTS` is `all`: audit all `.qmd`, `.tex`, `.md` files in `Slides/`, `Quarto/`, root, and `master_supporting_docs/`.
   - Skip `.bib`, `.R`, `.py`, code files, and any file under `scripts/`.

2. **Parse `--severity` flag** (default: report all).
   - `--severity low` → report all findings.
   - `--severity med` → suppress LOW findings.
   - `--severity high` → report only HIGH findings.

3. **For each file, launch the `humanize-auditor` agent** with the 10 detection categories.

4. **Receive structured report** from the agent. Format per finding:

   ```
   line N | category | severity | current text | suggested rewrite or "remove"
   ```

5. **Write report** to `quality_reports/humanize_<filename>_report.md`. Include:
   - Per-category counts (HIGH / MED / LOW)
   - Per-finding table
   - Summary recommendation (rough thresholds):
     - **> 8 HIGH findings per 1000 words**: prose reads as AI-drafted. Author should rewrite the affected sections, not patch.
     - **5–8 HIGH per 1000 words**: substantial AI voice. Strip the tells before submission.
     - **< 5 HIGH per 1000 words**: light cleanup; mostly cosmetic.

6. **Present summary** to user:
   - Total findings per category
   - Most concentrated paragraphs (top 3)
   - Action recommendation (rewrite vs. strip vs. cosmetic)

## Pairings

| When you've drafted prose with AI assistance | Run `/humanize` before submission. Pair with `/proofread` (grammar) and `/verify-claims` (citations). |
| When you wrote in your own voice | Run `/humanize` anyway — your own prose drifts toward LLM patterns after long sessions of AI-assisted work. |
| Submission-ready review | `/review-paper --peer [journal] --variance 3` for substance, `/humanize` for voice, `/verify-claims` for facts. |

## Anti-pattern: no `--rewrite` mode

We deliberately do not ship `/humanize --rewrite`. Cross-vendor research (Cursor / Aider community findings; cited in the v1.9.0 plan) finds that auto-rewriting prose to strip AI tells degrades quality more often than it improves it — the rewriter introduces its *own* AI tells. The detect-and-flag pattern preserves authorial voice; the cost is your editing time, which is exactly the cost we want to pay.

If you find yourself reaching for an auto-rewriter, that's the signal to rewrite the paragraph from scratch — not to patch the tells one by one.

## Output

- Report at `quality_reports/humanize_<filename>_report.md` (gitignored).
- Summary to the conversation: counts per category, top concentrated paragraphs, action recommendation.
- **No file edits.** The user reads the report and applies changes manually.


---

## .claude/agents/humanize-auditor.md

Source: https://raw.githubusercontent.com/SeiroIto/ClaudeCodeWorkflow/main/.claude/agents/humanize-auditor.md

---
name: humanize-auditor
description: Read-only auditor for AI-voice tells in academic prose. Reviews `.tex`, `.qmd`, `.md` files for the 10 detection categories defined in `/humanize` (boilerplate transitions, AI-cliché lexicon, em-dash overuse, symmetric paragraph shapes, tricolon abuse, hedging stacking, "not only X but also Y" frames, formulaic openers, hyphenation excess, sycophancy/self-important framing). Produces a structured report without editing. Use when invoked by `/humanize`.
tools: Read, Grep, Glob
model: sonnet
effort: high
---

You are a read-only auditor for AI-voice tells in academic prose. Your job is to detect statistically conspicuous LLM patterns in the user's manuscript and report them — **never edit**.

## Boundary

- You do NOT review grammar (that's `proofreader`).
- You do NOT review substance, argument structure, or identification (that's `domain-referee` / `methods-referee` / `/review-paper`).
- You do NOT verify factual claims or citations (that's `claim-verifier` / `/verify-claims`).
- You do NOT rewrite — you flag.

## Inputs

- A target file path (`.tex`, `.qmd`, or `.md`).
- Optional severity threshold (LOW, MED, HIGH) from `/humanize`.

## Detection categories

Run all 10 categories against the prose. For each finding, record: line number (or near-line), category, severity, current text (≤ 30 words), suggested rewrite or "remove" / "rephrase" / "split paragraph".

### 1. BOILERPLATE TRANSITIONS

Sentence-initial or mid-paragraph connectors that read as LLM-generated glue:

- `Moreover,` / `Furthermore,` / `Additionally,` / `In addition,`
- `It is important to note that` / `It is worth noting that` / `Notably,`
- `In conclusion,` / `In summary,` / `To summarise,`
- `On the other hand,` (when not contrasting two named things)
- `Building on this,` / `Building upon this,`
- `As we can see,` / `As is evident,` / `Indeed,` (stacked)

Severity: HIGH if > 1 per 1000 words; MED if ~1 per 2000 words; LOW otherwise.

### 2. AI-CLICHÉ LEXICON

Words and phrases statistically over-represented in LLM output relative to academic prose. Match case-insensitively:

- "navigate the complexities", "navigate the landscape"
- "delve into", "delve deeper into"
- "tapestry of", "rich tapestry"
- "robust framework", "comprehensive framework", "holistic framework"
- "comprehensive approach" / "multifaceted approach" / "nuanced approach" — flag especially when stacked
- "leverage" (as a verb, in non-finance / non-engineering contexts)
- "in today's [X] landscape" / "in today's rapidly evolving"
- "play a crucial role" / "play a pivotal role" / "play a significant role"
- "shed light on"
- "underscore the importance" / "highlight the importance"
- "It is essential to" / "It is crucial to"

Severity: HIGH on first three pages (abstract, intro, opening of methods); MED elsewhere.

### 3. EM-DASH AND PUNCTUATION OVERUSE

- Em-dash overuse: > 3 em-dashes per paragraph.
- Semicolon stacks: ≥ 3 semicolons in a single paragraph.
- Triple-Oxford-comma constructions repeated paragraph-to-paragraph (parallel "X, Y, and Z" cadence).

Severity: MED.

### 4. SYMMETRIC PARAGRAPH SHAPES

Paragraph micro-architecture: topic sentence → ~3 examples → summarising clause. The tell is repetition across paragraphs.

- Flag any 3-paragraph window where each paragraph follows the topic→examples→summary cadence.
- Severity: MED at 3-paragraph; HIGH at 5+ paragraph stretch.

### 5. TRICOLON ABUSE

"X, Y, and Z" three-element lists:

- > 4 tricolons per page.
- Tricolons used for items that could naturally be 2 or 4.
- Adjective tricolons stacked ("clear, concise, and compelling"; "rigorous, robust, and reliable").

Severity: LOW if rare; MED if patterned.

### 6. HEDGING STACKING

Stacked epistemic hedges in one sentence:

- "might potentially be argued"
- "could possibly suggest"
- "may arguably"
- "perhaps potentially"

Severity: HIGH.

### 7. "NOT ONLY X, BUT ALSO Y"

- > 2 per paper.
- X and Y not actually parallel.
- Used as paragraph opener.

Severity: MED.

### 8. FORMULAIC OPENERS

- "This [paper / chapter / section / analysis] [does X]."
- Paragraph openers that re-state the section title.
- Abstract opening with "In this paper, we..." in sub-fields where it's atypical (AER abstracts rarely use it; APSR often does — calibrate to discipline).

Severity: LOW unless every section starts this way.

### 9. HYPHENATION EXCESS

- "data-driven", "evidence-based", "well-suited", "well-established", "long-standing" — fine individually. Flag if ≥ 3 in a single paragraph.

Severity: LOW.

### 10. SYCOPHANCY / SELF-IMPORTANT FRAMING

- "This important contribution"
- "This significant finding"
- "Our novel approach"
- Self-citation as "groundbreaking" / "pioneering"

Severity: HIGH — these read as AI-generated promotional copy; referees react badly.

## Report format

Return a structured report. **Do not edit any files.**

```markdown
# Humanize Audit: <filename>

**Word count:** <N>
**Findings:** <total> (<H> HIGH, <M> MED, <L> LOW)

## Per-category summary

| Category | HIGH | MED | LOW |
|---|---:|---:|---:|
| 1. Boilerplate transitions | … | … | … |
| 2. AI-cliché lexicon | … | … | … |
| 3. Em-dash / punctuation | … | … | … |
| 4. Symmetric paragraph shapes | … | … | … |
| 5. Tricolon abuse | … | … | … |
| 6. Hedging stacking | … | … | … |
| 7. "Not only X but also Y" | … | … | … |
| 8. Formulaic openers | … | … | … |
| 9. Hyphenation excess | … | … | … |
| 10. Sycophancy | … | … | … |

## Findings

| Line | Cat | Sev | Current text | Suggested |
|---:|---|---|---|---|
| 42 | 1 | HIGH | "Moreover, this approach demonstrates…" | remove "Moreover," — connect with a real connective ("Because", "This implies…") |
| 87 | 2 | MED | "navigate the complexities of identification" | rephrase ("handle identification challenges" / direct statement) |
| 123 | 6 | HIGH | "might potentially be argued that the effect could be substantial" | "the effect is substantial" / state the position directly |

## Concentration

Top 3 paragraphs by finding density:

1. ¶ near line 87–105 — 6 findings (3 HIGH + 2 MED + 1 LOW). Consider rewriting from scratch.
2. ¶ near line 132–145 — 4 findings (2 HIGH + 2 MED).
3. ¶ near line 201–212 — 4 findings (1 HIGH + 3 MED).

## Recommendation

- **<N> HIGH per 1000 words** → [rewrite affected sections | strip tells in place | cosmetic cleanup]
```

## What not to flag

- **Single-mention idioms.** "Moreover," appearing once in a 30-page draft is fine.
- **Discipline-legitimate constructions.** Political science accepts "In this paper, we…" abstracts; economics doesn't. Calibrate. If you can't infer discipline from the file, default to MED.
- **Author's documented voice.** If the user has a `style-profile.md` or similar reference file, respect documented preferences (e.g., "I use em-dashes deliberately"). When in doubt, flag and let the user decide.

## Calibration heuristics

- 1000-word section with 0 HIGH findings: clean.
- 1000-word section with 3 HIGH findings: noticeable but manageable.
- 1000-word section with 8+ HIGH findings: prose reads as AI-drafted. Recommend rewrite, not patch.

Do not over-flag. False positives erode the audit's signal. When you cannot tell whether a construction is a tell or a deliberate choice, mark it LOW and let the author judge.

## Output

- Structured report (the markdown block above) — return as your final response.
- Do NOT write any files yourself — the `/humanize` skill orchestrates report-saving.
- Do NOT propose more than one rewrite per finding — the author makes the choice.


---

## .claude/skills/seven-pass-review/SKILL.md

Source: https://raw.githubusercontent.com/SeiroIto/ClaudeCodeWorkflow/main/.claude/skills/seven-pass-review/SKILL.md

---
name: seven-pass-review
description: Mechanize Pattern 15 — the seven-pass adversarial review protocol for academic manuscripts. Spawns 7 forked subagents in parallel (abstract, intro, methods, results, robustness, prose, citations), then synthesizes a prioritized revision checklist. Use for submission-ready or R&R-stage papers where single-pass review isn't enough.
argument-hint: "[manuscript path]"
allowed-tools: ["Read", "Grep", "Glob", "Write", "Bash", "Task"]
effort: high
---

# Seven-Pass Adversarial Review

Runs seven independent reviewers, each focused on a single lens, then synthesizes their findings into one prioritized revision plan. Pattern 15 from the workflow guide, mechanized.

**Why seven passes?** A single-agent review blends lenses and softens each one. Seven forked agents each approach the paper with full context budget for their own lens, then a synthesizer resolves conflicts and de-duplicates.

> **When to pick this over `/review-paper`:** This skill costs roughly 7× more tokens than `/review-paper` (default) and ~2× more than `/review-paper --adversarial`. Use it when the paper is submission-ready or at R&R stage and you need maximum lens coverage. For early drafts or iterative work, `/review-paper` is the right tool. For journal-simulation pressure test, use `/review-paper --peer <journal>` instead.

## Inputs

- `$0` — manuscript path (`.tex`, `.qmd`, `.md`, or `.pdf`). Required.

## The Seven Lenses

Each lens runs as a **forked subagent** (context: fork) so the main conversation stays clean.

| # | Lens | Focus | Agent type |
|---|---|---|---|
| 1 | Abstract audit | Does the abstract state the question, method, result, and contribution? Does it match the paper? | general-purpose |
| 2 | Intro structure | Does the intro follow Cochrane / Varian framework? Literature placement? Contribution clarity? | general-purpose |
| 3 | Methods / identification | Are assumptions stated? Is identification credible? Are alternatives addressed? | domain-reviewer |
| 4 | Results + tables | Do tables read standalone? Is magnitude + significance discussed? Units consistent? | general-purpose |
| 5 | Robustness | Are obvious threats pre-empted? Is the robustness section convincing or theatrical? | general-purpose |
| 6 | Prose quality | Sentence-level clarity, hedging, passive voice, paragraph cohesion | proofreader |
| 7 | Citation audit | Invokes `/validate-bib --semantic`; checks cite-claim direction for top-10 works | general-purpose |

## Workflow

### Phase 0: Pre-flight

1. Resolve manuscript path.
2. Decide if `.pdf` → extract text first (`pdftotext -layout`).
3. Create output dir: `quality_reports/seven_pass_[stem]/`.

### Phase 1: Spawn 7 reviewers in parallel

In a single message, spawn 7 Task tool calls (one per lens). Each subagent gets:

- The manuscript path (to re-read with its own context).
- The lens-specific prompt (below).
- Instructions to write to `quality_reports/seven_pass_[stem]/lens_[N]_[lens-name].md`.
- A closing `findings:` + `scorecard:` block in the shared schema ([`orchestration-schemas.md`](../../references/orchestration-schemas.md)): `severity: CRITICAL | MAJOR | MINOR`, with `evidence` and `change_my_mind` on every CRITICAL/MAJOR. Phase 2 reduces over these typed findings — it does not re-read the prose.

This is the **fan-out** primitive from [`orchestrator-protocol.md`](../../rules/orchestrator-protocol.md); `Task` subagents are the portable mechanism (the agents that fill lenses 3/6 are in [`agent-fleet.md`](../../references/agent-fleet.md)).

Lens prompt rubrics are embedded inline below — one summary paragraph per lens. Each forked subagent receives its lens's rubric plus the manuscript path.

**Lens prompt summaries:**

- **Lens 1 (Abstract):** Does the first sentence state the question? Does it name the method? Quantify the headline result? State one-sentence contribution? Cross-check: do these four things match the body?
- **Lens 2 (Intro):** Does the intro open with the question? Hook → context → contribution → roadmap? Lit review placed correctly (after the hook, not before)? Contribution-counted (1, 2, 3…)? Preview of findings with magnitudes?
- **Lens 3 (Methods):** Is every assumption stated? Are they strong or weak? Is identification one-liner clear? Are known violations (selection, measurement, reverse causality, SUTVA) addressed? Are instruments / RDD / DiD assumptions explicit and defensible?
- **Lens 4 (Results):** Does each table read standalone (caption, units, SEs clarified)? Is magnitude interpreted (not just significance)? Are units consistent across tables? Are figures legible at 8pt?
- **Lens 5 (Robustness):** Does the paper ANTICIPATE a sharp referee's objections? Are robustness checks motivated, or just listed? Power/placebo tests present? Heterogeneity explored where promised?
- **Lens 6 (Prose):** Sentences under 30 words? Active voice dominant? Hedging proportionate (neither overclaiming nor endless "may suggest")? Paragraph topic sentences?
- **Lens 7 (Citations):** Invoke `/validate-bib --semantic`. For top-10 cited works, does the in-text claim match the cited paper's actual finding direction? Are contemporary / competing works cited?

### Phase 2: Synthesize (reduce → judge, with the hallucination gate)

Wait for all 7 lens reports. **Reduce, don't re-review:** stack the seven `scorecard`s and apply the gate predicate from [`orchestration-schemas.md` §3](../../references/orchestration-schemas.md) — the Executive verdict is a function of the typed findings, not a fresh eighth opinion. Then **run the post-judge hallucination gate** ([§4](../../references/orchestration-schemas.md)): any CRITICAL the synthesis introduces that **no lens raised** must be re-verified in a fresh `claim-verifier` fork, or dropped to `[JUDGE-HALLUCINATED]` and the verdict recomputed. A synthesis may freely downgrade or de-duplicate lens findings; it may not invent a new blocker.

Then produce:

`quality_reports/seven_pass_[stem]/_SYNTHESIS.md`

```markdown
# Seven-Pass Review: [Manuscript]

**Date:** YYYY-MM-DD
**Path:** [manuscript]

## Executive verdict

**Overall state:** [SUBMIT / REVISE-MINOR / REVISE-MAJOR / REJECT-AND-RESTART]

## Cross-lens CRITICAL issues
| # | Lens(es) | Issue | Recommendation |
|---|---|---|---|

## MAJOR issues (second-round)
| # | Lens(es) | Issue |
|---|---|---|

## MINOR polish
[bulleted]

## Per-lens scorecard
| Lens | Critical | Major | Minor | Score/10 |
|---|---|---|---|---|
| 1. Abstract | | | | |
| 2. Intro | | | | |
| 3. Methods | | | | |
| 4. Results | | | | |
| 5. Robustness | | | | |
| 6. Prose | | | | |
| 7. Citations | | | | |
| **Overall** | | | | |

## Revision plan (in recommended order)
1. [Highest-leverage fix — usually a lens with 2+ CRITICALs]
2. …
7. [Lowest-leverage polish]

## Contradictions between lenses
[If two lenses disagree, surface here. E.g., Lens 2 says "expand contribution" but Lens 6 says "trim intro".]
```

### Phase 3: Token-budget report

After synthesis, print:

```
Seven-pass review complete.
Subagents: 7 (parallel) + 1 synthesizer.
Approx token usage: ~80–120k (vs ~15k for single-pass /review-paper).
Runtime: ~3–5 min wall-clock.
For cheaper alternatives:
  - Single-pass: /review-paper
  - Iterative: /review-paper --adversarial
```

## When to use this skill

- **Before first submission** to a top journal.
- **After a major revision** when you want to catch drift.
- **R&R when referees disagree** — surfaces contradictions your revision must navigate.

## When NOT to use

- Early drafts (use `/review-paper` single-pass first).
- Short notes, comments, or replies (overkill).
- When you've already run this in the last 7 days and nothing substantive changed.

## Cross-references

- `.claude/skills/review-paper/SKILL.md` — the single-pass and `--adversarial` modes (cheaper, faster).
- `.claude/skills/validate-bib/SKILL.md` — invoked by Lens 7.
- `.claude/skills/audit-reproducibility/SKILL.md` — complementary; numeric-claims side of the audit.
- Workflow guide, Pattern 15 — the narrative explanation of why seven lenses.

## Exit behavior

- Exits 0 always (review is informational). The synthesis report's "Executive verdict" is the gate.
- Any `CRITICAL` at the top of the synthesis should block submission until resolved.

## What this skill does NOT do

- Re-run seven lenses if the manuscript hasn't changed — check git diff against last run date in `_SYNTHESIS.md`, skip unchanged lenses if requested via `--incremental` (future).
- Auto-apply fixes — that's `/review-paper --adversarial`'s job.
- Replace human judgment. A reviewer who knows your subfield still beats seven LLMs.


---

## .claude/skills/devils-advocate/SKILL.md

Source: https://raw.githubusercontent.com/SeiroIto/ClaudeCodeWorkflow/main/.claude/skills/devils-advocate/SKILL.md

---
name: devils-advocate
description: Adversarial 5-7 question challenge to a deck's pedagogical choices — ordering, prerequisites, cognitive load, motivation. Use when user says "devil's advocate", "poke holes in this deck", "push back on my slides", "stress-test the design", "what would a skeptical student ask?". Read-only; surfaces questions to force rethinking. Lighter than `/pedagogy-review`.
argument-hint: "[Lecture filename]"
allowed-tools: ["Read", "Grep", "Glob"]
---

# Devil's Advocate Review

Critically examine a slide deck and challenge its design with 5-7 specific pedagogical questions.

**Philosophy:** "We arrive at the best possible presentation through active dialogue."

---

## Setup

1. **Read the target file** (the lecture being challenged)
2. **Read the knowledge base** in `.claude/rules/` for notation conventions and narrative arc
3. If applicable, **read adjacent lectures** for narrative continuity

---

## Challenge Categories

Generate 5-7 challenges from these categories:

### 1. Ordering Challenges
> "Could students understand this better if we showed X before Y?"

### 2. Prerequisite Challenges
> "Do students have the background for this notation at this point?"

### 3. Gap Challenges
> "Should we include an intuitive example before this formal proof?"

### 4. Alternative Presentation Challenges
> "Here are 2 other ways to visualize/present this concept."

### 5. Notation Conflict Challenges
> "This symbol conflicts with earlier lecture usage."

### 6. Cognitive Load Challenges
> "This slide has too many new symbols. Can we split?"

### 7. Book Vision Challenges
> "If this becomes a book chapter, does this section stand alone?"

---

## Output Format

```markdown
# Devil's Advocate: [Lecture Title]

## Challenges

### Challenge 1: [Category] — [Short title]
**Question:** [The specific pedagogical question]
**Why it matters:** [What could go wrong]
**Suggested resolution:** [Specific action]
**Slides affected:** [Numbers or titles]
**Severity:** [High / Medium / Low]

[Repeat for 5-7 challenges]

## Summary Verdict
**Strengths:** [2-3 things done well]
**Critical changes:** [0-2 changes before teaching]
**Suggested improvements:** [2-3 nice-to-have changes]
```

---

## Principles

- **Be specific:** Reference exact slides and notation
- **Be constructive:** Every challenge has a suggested resolution
- **Be honest:** If the deck is good, say so
- **Prioritize:** Notation conflicts > missed metaphors
- **Think like a student:** Where do they get lost?


---

## .claude/skills/interview-me/SKILL.md

Source: https://raw.githubusercontent.com/SeiroIto/ClaudeCodeWorkflow/main/.claude/skills/interview-me/SKILL.md

---
name: interview-me
description: Interactive interview that formalizes a fuzzy research idea into a structured spec (RQ, hypotheses, identification, data needs, empirical strategy). Use when user says "interview me", "help me think through this idea", "I have a half-baked idea", "formalize this into a project", "walk me through framing a study". Multi-turn Q&A; saves spec to disk. NOT for lit review (`/lit-review`) or ideation from scratch (`/research-ideation`).
argument-hint: "[brief topic or 'start fresh'] [--no-verify]"
allowed-tools: ["Read", "Write", "Task"]
---

# Research Interview

Conduct a structured interview to help formalize a research idea into a concrete specification.

**Input:** `$ARGUMENTS` — a brief topic description or "start fresh" for an open-ended exploration.

---

## How This Works

This is a **conversational** skill. Instead of producing a report immediately, you conduct an interview by asking questions one at a time, probing deeper based on answers, and building toward a structured research specification.

**Do NOT use AskUserQuestion.** Ask questions directly in your text responses, one or two at a time. Wait for the user to respond before continuing.

---

## Interview Structure

### Phase 1: The Big Picture (1-2 questions)
- "What phenomenon or puzzle are you trying to understand?"
- "Why does this matter? Who should care about the answer?"
- After the user answers, optionally ask: "Do you have a sense of what *kind* of paper this would be — reduced-form / structural / theory+empirics / descriptive / formal-theory / survey-experiment / unsure?" (See `.claude/agents/methods-referee.md` for the type definitions and `.claude/references/discipline-cards.md` for field-default frequencies.) Record the answer in the saved spec under the `**Paper type:**` header field; "unsure" is fine and is recorded as `**Paper type:** unsure`.

### Phase 2: Theoretical Motivation (1-2 questions)
- "What's your intuition for why X happens / what drives Y?"
- "What would standard theory predict? Do you expect something different?"

### Phase 3: Data and Setting (1-2 questions)
- "What data do you have access to, or what data would you ideally want?"
- "Is there a specific context, time period, or institutional setting you're focused on?"

### Phase 4: Identification (1-2 questions)
- "Is there a natural experiment, policy change, or source of variation you can exploit?"
- "What's the biggest threat to a causal interpretation?"

### Phase 5: Expected Results (1-2 questions)
- "What would you expect to find? What would surprise you?"
- "What would the results imply for policy or theory?"

### Phase 6: Contribution (1 question)
- "How does this differ from what's already been done? What's the gap you're filling?"

---

## After the Interview

Once you have enough information (typically 5-8 exchanges), produce a **Research Specification Document**:

```markdown
# Research Specification: [Title]

**Date:** [YYYY-MM-DD]
**Researcher:** [from conversation context]
**Paper type:** [reduced-form | structural | theory+empirics | descriptive | formal-theory | survey-experiment | unsure]

## Research Question

[Clear, specific question in one sentence]

## Motivation

[2-3 paragraphs: why this matters, theoretical context, policy relevance]

## Hypothesis

[Testable prediction with expected direction]

## Empirical Strategy

- **Method:** [e.g., Difference-in-Differences with staggered adoption]
- **Treatment:** [What varies]
- **Control:** [Comparison group]
- **Key identifying assumption:** [What must hold]
- **Robustness checks:** [Pre-trends, placebo tests, etc.]

## Data

- **Primary dataset:** [Name, source, coverage]
- **Key variables:** [Treatment, outcome, controls]
- **Sample:** [Unit of observation, time period, N]

## Expected Results

[What the researcher expects to find and why]

## Contribution

[How this advances the literature — 2-3 sentences]

## Open Questions

[Issues raised during the interview that need further thought]
```

**Save to:** `quality_reports/research_spec_[sanitized_topic].md`

---

## Post-Flight Verification (mandatory, CoVe — applies when the spec cites prior work)

The research spec's **Motivation** and **Contribution** sections typically reference prior papers by author + year. Those citations are hallucination-prone. Before saving the spec, run the Post-Flight Verification protocol from [`.claude/rules/post-flight-verification.md`](../../rules/post-flight-verification.md) if the spec contains any citations.

### Steps (skip if the spec cites zero papers)

1. **Extract claims:** every paper-citation in the Motivation / Contribution sections ("Smith 2019 shows X"), any dataset-structure claims ("the CPS has field `educ_attain`"), any negative-literature assertions ("nobody has studied Y").
2. **Generate verification questions:** specific, answerable questions per claim. "Does Smith (2019, *JEL*) Section 3 report finding X? Is the venue correct?"
3. **Spawn `claim-verifier`** via `Task` with `subagent_type=claim-verifier` and `context=fork`. Hand it the claims + questions + source pointers (DOIs, arXiv links, `master_supporting_docs/` PDFs if the user provided any during the interview). Do NOT include the drafted spec.
4. **Reconcile:** PASS → attach green block to the spec. PARTIAL → mark unverifiable citations with uncertainty flags. FAIL → rewrite the affected paragraph using the verifier's evidence before saving the spec.

### Skip conditions

- Spec contains zero paper citations (pure-methodology specs with no lit references).
- `--no-verify` flag.
- The user explicitly said during the interview "I'll verify the literature myself."

---

## Decision records (when tradeoffs surface)

If during the interview the researcher explicitly chose among alternatives — identification strategy (DiD vs IV vs RDD), data source (admin vs survey), outcome measure, sample scope, etc. — also write an ADR-style **decision record** for each choice. Use [`templates/decision-record.md`](../../../templates/decision-record.md) and save to `quality_reports/decisions/YYYY-MM-DD_[short-topic].md`. Required fields: Status / Problem / Options considered / Decision + rationale / Consequences / Rejected alternatives.

Skip the ADR if the interview produced a single uncontested direction — ADRs are for *decisions with live alternatives*, not for announcing the default path.

---

## Interview Style

- **Be curious, not prescriptive.** Your job is to draw out the researcher's thinking, not impose your own ideas.
- **Probe weak spots gently.** If the identification strategy sounds fragile, ask "What would a skeptic say about...?" rather than "This won't work because..."
- **Build on answers.** Each question should follow from the previous response.
- **Know when to stop.** If the researcher has a clear vision after 4-5 exchanges, move to the specification. Don't over-interview.


---

## .claude/references/agent-fleet.md

Source: https://raw.githubusercontent.com/SeiroIto/ClaudeCodeWorkflow/main/.claude/references/agent-fleet.md

# Agent Fleet Manifest

The 18 specialist subagents, what each is for, the model tier it runs at ([`model-routing.md`](../rules/model-routing.md)), and which skill dispatches it. This makes the fleet legible — when a fan-out skill picks a lens, this is the roster it picks from. Reviewers are **read-only** (they report `FINDING`s per [`orchestration-schemas.md`](orchestration-schemas.md)); only the fixer edits files.

> **Keep this in sync** with `.claude/agents/*.md` frontmatter (`model:` / `effort:`) and with `model-routing.md`. The surface-sync gate counts agents; it does not yet diff this table row-for-row, so update it when you add or retier an agent. (It is a `references/` file, so it is not itself counted as an agent.)

## High-judgment tier — Opus 4.8, effort: high

A wrong "looks fine" from one of these is expensive (a desk-reject, a hallucinated citation, a biased estimator shipped). Never demote to save cost ([`model-routing.md`](../rules/model-routing.md) anti-pattern).

| Agent | Role | Read/Write | Disposition-aware | Dispatched by |
|---|---|---|---|---|
| `editor` | Desk review, referee selection, editorial synthesis | read-only | selects referee dispositions | `/review-paper --peer` / `--variance` |
| `domain-referee` | Substance referee (contribution, positioning, external validity) | read-only | yes (6-way taxonomy) | `/review-paper --peer` |
| `methods-referee` | Methodology referee (paper-type-aware identification/inference) | read-only | yes (6-way taxonomy) | `/review-paper --peer` |
| `claim-verifier` | Fresh-context CoVe verifier (citations, numbers, novelty) | read-only | no | `/verify-claims`, post-flight in `/lit-review` · `/research-ideation` · `/respond-to-referees` · `/review-paper --peer`; hallucination gate |
| `domain-reviewer` | Field-specific substance review of slides (5 lenses; **template — customize**) | read-only | no | `/slide-excellence`, `/seven-pass-review` (methods lens) |
| `quarto-critic` | Adversarial Beamer↔Quarto parity critic | read-only | no | `/qa-quarto`, `/slide-excellence` (parity) |
| `tikz-reviewer` | Measurement-based TikZ collision/aesthetic audit | read-only | no | `/slide-excellence` (if TikZ), `/extract-tikz`, `/new-diagram` |
| `sim-reviewer` | Monte Carlo review (DGP/estimand, MCSE, coverage-vs-truth) | read-only | no | `/simulation-study` |
| `verifier` | End-to-end compile/render/deploy verification gate | read-only | no | `/commit` |

## Review / critique tier — Sonnet 4.6, effort: high

| Agent | Role | Read/Write | Dispatched by |
|---|---|---|---|
| `r-reviewer` | R code quality, reproducibility, idioms | read-only | `/review-r`, `/slide-excellence` (if R), `/data-analysis` |
| `r-package-reviewer` | R package CRAN-readiness (DESCRIPTION/NAMESPACE/roxygen/testthat/policy) | read-only | `/r-package-check` |
| `slide-auditor` | Visual layout audit (overflow, font, spacing) | read-only | `/visual-audit`, `/slide-excellence` |
| `proofreader` | Grammar, typos, overflow, terminology | read-only | `/proofread`, `/slide-excellence`, `/seven-pass-review` (prose lens) |
| `pedagogy-reviewer` | Narrative arc, prerequisites, worked examples, notation, pacing | read-only | `/pedagogy-review`, `/slide-excellence` |
| `humanize-auditor` | AI-voice tell detection (10 categories) | read-only | `/humanize` |

## Apply / translate tier — Sonnet 4.6, effort: medium

| Agent | Role | Read/Write | Dispatched by |
|---|---|---|---|
| `quarto-fixer` | Applies `quarto-critic`'s diffs, re-renders, verifies | **writes** | `/qa-quarto` |
| `beamer-translator` | Beamer→Quarto slide-by-slide translation | **writes** | `/translate-to-quarto` |

## Mechanical / voting tier — Haiku 4.5

| Agent | Role | Read/Write | Dispatched by |
|---|---|---|---|
| `promote-memory-council` | Five-critic vote on `[LEARN]` promotion (generality/staleness/redundancy/evidence/format) | read-only | `/promote-memory` |

## The referee disposition taxonomy

Only the referees (`domain-referee`, `methods-referee`) and the `editor` that assigns them are disposition-aware. The 6-way taxonomy: **STRUCTURAL · CREDIBILITY · MEASUREMENT · POLICY · THEORY · SKEPTIC**. `--peer` samples 2; `--variance N` samples N (with replacement, ≥1 SKEPTIC when N≥3); `--stress` forces SKEPTIC×2. Dispositions are fixed in the `RUN_CONFIG` before launch (referees are forked and cannot be re-prompted mid-run).

## Cross-references

- [`.claude/rules/model-routing.md`](../rules/model-routing.md) — the tiering rationale + the do-not-demote anti-pattern.
- [`.claude/rules/orchestrator-protocol.md`](../rules/orchestrator-protocol.md) — how the fleet is fanned out, reduced, and judged.
- [`.claude/references/orchestration-schemas.md`](orchestration-schemas.md) — the `FINDING`/`SCORECARD` shape every reviewer returns.


---

## .claude/references/orchestration-schemas.md

Source: https://raw.githubusercontent.com/SeiroIto/ClaudeCodeWorkflow/main/.claude/references/orchestration-schemas.md

# Orchestration Schemas (the review runtime's data contracts)

The skills that fan out to reviewer subagents (`/seven-pass-review`, `/slide-excellence`, `/qa-quarto`, `/deep-audit`, `/review-paper --adversarial` and `--peer`) used to describe their findings as free-form markdown the synthesizer re-parsed by eye. This file is the **shared structured contract** they reduce over instead — so a synthesizer counts typed objects, a gate predicate is a deterministic check, and the same severity vocabulary means the same thing in every skill.

This is a **reference**, not a runtime: a Claude Code session has no JSON validator in the loop. The schemas are the *target shape* each reviewer subagent returns (as a fenced ```yaml block at the end of its report) and the synthesizer reads. See [`.claude/rules/orchestrator-protocol.md`](../rules/orchestrator-protocol.md) for how the fan-out → reduce → judge → loop-until-dry runtime uses them.

---

## 1. `FINDING` — one issue a reviewer raises

Every reviewer subagent (lens, referee, critic, auditor) emits a list of findings in this shape:

```yaml
findings:
  - id: F1                       # stable within this run (lens-prefixed is fine: M1, P3)
    lens: methods                # the reviewing lens / dimension / agent name
    severity: CRITICAL           # CRITICAL | MAJOR | MINOR   (the ONE vocabulary)
    location: "Sec 4.2, Table 2 col 3"   # where in the artifact (page/slide/line/cell)
    finding: "Identification rests on conditional PT but the text claims unconditional."
    evidence: "p.11 'parallel trends holds unconditionally' vs Eq.(4) conditions on X_i."
    recommendation: "State the conditional PT assumption explicitly, or drop the covariates."
    change_my_mind: "A sentence in Sec 4 reconciling Eq.(4) with the unconditional claim."
    confidence: high             # high | medium | low  — the reviewer's own certainty
```

**Severity is the single cross-skill vocabulary.** Map every skill's local words onto it:

| Local term (skill) | FINDING severity |
|---|---|
| FATAL / desk-reject-worthy / hard-gate failure | CRITICAL |
| Major Concern / "blocks submission" / Visual-Regression | CRITICAL or MAJOR (use CRITICAL if it blocks) |
| Minor Concern / polish / Low | MINOR |

- `change_my_mind` is required on every CRITICAL/MAJOR (the referee "what would change my mind" ask).
- `confidence` is for the judge/verifier, not the author — a `low`-confidence CRITICAL is a prime candidate for the hallucination gate (§4).

## 2. `SCORECARD` — a reviewer's aggregate

Each reviewer closes its report with a one-row scorecard; the synthesizer stacks them:

```yaml
scorecard:
  lens: methods
  critical: 1
  major: 3
  minor: 5
  score: 6            # 0–10, the reviewer's holistic read of its own lens
  verdict: REVISE-MAJOR   # SUBMIT | REVISE-MINOR | REVISE-MAJOR | REJECT  (artifact-level lenses)
```

For parity/gate skills (`qa-quarto`), the lens verdict is the hard-gate roll-up: `APPROVED` iff every hard gate passes (zero CRITICAL), else `BLOCKED`.

## 3. Gate predicates (how `reduce` decides)

The synthesizer's verdict is a **deterministic function of the typed findings**, not a re-judgment:

| Predicate | Rule |
|---|---|
| **PASS / APPROVED** | `sum(CRITICAL) == 0` across all lenses (and, for gate skills, every hard gate true) |
| **REVISE** | `sum(CRITICAL) == 0` and `sum(MAJOR) > 0` |
| **BLOCK / FAIL** | `sum(CRITICAL) > 0` |
| **converged (loop-until-dry)** | a round produces **0 new** CRITICAL/MAJOR findings (deduped by `location`+`finding`) |

"New" is measured against the running set of already-seen findings, deduped on `(location, finding)` — so a critic re-flagging an unfixed issue does not count as progress, and a fixer silently re-introducing one does not hide.

## 4. Post-judge hallucination gate (the synthesizer cannot invent CRITICALs)

A synthesizer/editor/judge reduces lens findings — it must not **introduce** a blocking claim no lens raised. (The audit found `editor.md` could desk-reject on a reason neither referee gave.) The gate:

1. After the judge produces its verdict, diff its CRITICAL/desk-reject reasons against the union of lens `findings`.
2. Any CRITICAL the judge introduced that is **not traceable** to a lens finding is a **candidate hallucination**.
3. Re-verify each candidate in a **fresh forked context** — spawn `claim-verifier` (`Task`, `context: fork`) with the claim + the artifact location it cites, per [`post-flight-verification.md`](../rules/post-flight-verification.md).
   - Verifier confirms (grounded in a quote/location) → keep the CRITICAL; annotate `[JUDGE-ADDED, verified]`.
   - Verifier cannot ground it → **drop it to a flagged note**, tag `[JUDGE-HALLUCINATED]`, and **recompute the verdict** under §3 without it.
4. A judge may always *downgrade* or *de-duplicate* lens findings freely; it may only *introduce* a blocking finding that survives the gate.

This is cheap (it runs only on judge-introduced CRITICALs, usually 0–2) and it is the single most important guard for trusting an autonomous review near a credibility-sensitive artifact.

## 5. `RUN_CONFIG` — the pre-run input contract

A fan-out runtime collects every interactive choice **before** launch, so no subagent stalls waiting on the user mid-run (subagents cannot prompt). See `orchestrator-protocol.md` → "RUN_CONFIG".

```yaml
run_config:
  artifact: path/to/manuscript.tex        # what is being reviewed
  mode: peer                              # default | adversarial | peer | seven-pass | excellence | audit
  journal: QJE                            # --peer: resolved against journal-profiles.md (else null)
  dispositions: [SKEPTIC, MEASUREMENT]    # --peer/--variance: sampled before launch (else null)
  n_referees: 3                           # --variance N (else null)
  peeves: { critical: 2, constructive: 1 }# referee peeve budget (stress doubles critical)
  fresh_context: true                     # re-audit rounds run in a fresh fork
  max_rounds: 5                           # loop-until-dry FALLBACK cap (not the primary stop)
  cross_artifact: true                    # auto-invoke /review-r + /audit-reproducibility
  novelty_check: true                     # editor WebSearch probe (Post-Flight-verified)
  spend_cap_tokens: 500000                # warn-and-ask ceiling, not a context limit
```

Gather it, echo it back as the **Pre-Flight Report**, and only then spawn the fleet. Any unresolved required field (e.g. an unknown `journal`) halts before launch — never mid-run.

---

## Cross-references

- [`.claude/rules/orchestrator-protocol.md`](../rules/orchestrator-protocol.md) — the runtime that consumes these schemas.
- [`.claude/references/agent-fleet.md`](agent-fleet.md) — which agent fills which lens, at which model tier.
- [`.claude/rules/post-flight-verification.md`](../rules/post-flight-verification.md) — the forked-verifier mechanism the §4 gate reuses.
- [`.claude/rules/summary-parity.md`](../rules/summary-parity.md) — the two-strikes rule the loop reuses for repeatedly-flagged findings.


---

## .claude/skills/promote-memory/SKILL.md

Source: https://raw.githubusercontent.com/SeiroIto/ClaudeCodeWorkflow/main/.claude/skills/promote-memory/SKILL.md

---
name: promote-memory
description: Review candidate `[LEARN]` entries in `.claude/state/personal-memory.md` (gitignored) and run them through a five-critic council in parallel: generality, staleness, redundancy, evidence, format. Majority vote (3+ of 5) promotes the entry to MEMORY.md. Use when user says "promote memory", "review my learnings", "what should graduate to MEMORY.md", "five-critic council", or as monthly memory maintenance.
author: Claude Code Academic Workflow
version: 1.0.0
argument-hint: "[entry-substring or 'all']"
disable-model-invocation: true
allowed-tools: ["Read", "Write", "Glob", "Grep", "Task", "Bash"]
---

<!-- Pattern adapted with attribution from Chris Blattman's claudeblattman v2.1
     "Five-critic council" (claudeblattman.com, Apr 2026 continuous-improvement
     loop). Blattman uses it to decide what enters his MEMORY layer; we adapt
     it to the personal-memory → MEMORY.md promotion question codified in
     .claude/rules/meta-governance.md. -->

# `/promote-memory` — five-critic council for memory promotion

The template's [`meta-governance.md`](../../rules/meta-governance.md) rule splits memory into two tiers:

- **`MEMORY.md`** (committed, ≤ 200 lines) — generic learnings that help all forkers.
- **`.claude/state/personal-memory.md`** (gitignored, no size cap) — machine-specific and user-specific learnings.

The rule says generic patterns should sync via git; personal patterns stay local. **What it doesn't say** is *who decides which is which*. `/promote-memory` operationalizes the call: spawn five critics in parallel, each reviewing the candidate `[LEARN]` entries on a single dimension, and promote on majority vote (3+ of 5).

## When to use

- **Monthly memory maintenance.** Personal-memory accumulates faster than MEMORY.md; the council periodically harvests the genuinely generic learnings.
- **Before sharing a fork.** Someone is about to clone your template — what should they inherit?
- **After a large project ships.** Lessons from a paper or a course cycle deserve curation before the next project starts adding noise.
- **As a `/loop` task.** Wire `/loop monthly /promote-memory all` if you want automated proposal cadence (still requires user approval for each promotion).

## When NOT to use

- **For a single fresh `[LEARN]` after a single correction.** Just add it to personal-memory.md; let it sit until the next council runs.
- **For deleting stale entries.** Use `/learn --revoke` or manual edit. `/promote-memory` only promotes; it doesn't demote.
- **For project-specific context.** That belongs in CLAUDE.md or session logs, not in either memory tier.

## The five critics

Each critic runs in a forked context (`Task` with `context=fork`) — they don't see each other's verdicts or the user's draft. Each casts one **YES/NO** vote per candidate entry with a one-sentence rationale.

### 1. Generality critic

> "Would a non-econ forker benefit from this `[LEARN]` entry — a biology PhD, a sociology postdoc, a CS instructor? If the lesson is specific to *your* setup (your bibliography path, your machine's TeX install, your discipline's notation), vote NO."

### 2. Staleness critic

> "Does this entry contradict the current state of the codebase? Run `grep -r` on the file paths, function names, or settings the entry references. If the referenced thing has been renamed, removed, or significantly changed, vote NO — the entry is stale and would mislead a future session."

### 3. Redundancy critic

> "Is this lesson already encoded in MEMORY.md, CLAUDE.md, or an existing rule? Read the relevant files. If yes (even paraphrased), vote NO — duplication erodes the index's signal."

### 4. Evidence critic

> "Does the entry cite the incident, file path, or specific case that motivated it? If the entry is `[LEARN:foo] always do X` with no anchor to *why*, vote NO. Future Claude can't judge edge cases without the rationale."

### 5. Format critic

> "Does the entry follow the schema in [`.claude/rules/meta-governance.md`](.claude/rules/meta-governance.md): `[LEARN:category] wrong → right` for corrections, structured `**Why:**` + `**How to apply:**` for feedback/project entries? If it's just a free-form note, vote NO — fix the format first, then re-submit."

### Council verdict

Each critic returns YES/NO + rationale. The promotion threshold is **majority (3+ YES)**.

- **5 YES** — promote without modification.
- **4 YES** — promote with a one-line note about the dissenting concern.
- **3 YES** — promote but address the dissenting critics' concerns first (typically: trim, add evidence, fix format).
- **2 or fewer YES** — do not promote. Either fix the entry per the dissenting critics' feedback and re-submit, or leave in personal-memory.md.

## Steps

### Step 1: Read candidate entries

If `$ARGUMENTS` is `all`, read every `[LEARN:*]` entry in `.claude/state/personal-memory.md`. Otherwise treat `$ARGUMENTS` as a substring filter (e.g., `r-code` matches all `[LEARN:r-code]` entries).

### Step 2: Spawn the council

Five `Task` invocations in parallel, one per critic, each with `context: fork`:

- **Generality critic** — context: the candidate entry + a one-paragraph description of who the template's audience is (academic researchers across disciplines).
- **Staleness critic** — context: the candidate entry + the ability to `Read` / `Grep` the codebase. Should explicitly check any file paths / function names / settings the entry references.
- **Redundancy critic** — context: the candidate entry + the current `MEMORY.md` + `CLAUDE.md` + relevant rule files.
- **Evidence critic** — context: the candidate entry only. Vote based on whether the entry self-describes its motivation.
- **Format critic** — context: the candidate entry + [`.claude/rules/meta-governance.md`](.claude/rules/meta-governance.md) for the schema reference.

Use the **Haiku tier** for all five critics (per [`.claude/rules/model-routing.md`](../../rules/model-routing.md): mechanical-ish review work). The user can override via the agent's `model:` field if they want Sonnet for the harder calls.

### Step 3: Aggregate votes

Collect verdicts. For each candidate entry, compute the vote count + per-critic verdicts.

### Step 4: Present the verdicts

For each entry:

```markdown
## `[LEARN:foo] <summary>`

**Vote:** 4-of-5 YES (promote with note)

| Critic | Vote | Rationale |
|---|:---:|---|
| Generality | YES | ... |
| Staleness | YES | ... |
| Redundancy | YES | ... |
| Evidence | NO  | Entry doesn't cite the originating incident. Add a one-line "Incident:" pointer before promoting. |
| Format | YES | ... |

**Recommendation:** Address Evidence critic, then promote.

**Proposed MEMORY.md addition:**
```text
[LEARN:foo] <full proposed text>
```
```

### Step 5: User approves the promotions

The user reviews the report and explicitly approves which entries to promote. The skill writes approved entries to MEMORY.md, removes the same entries from personal-memory.md (or marks them with `# promoted YYYY-MM-DD` for audit), and surfaces a summary.

Do **not** auto-promote — even on 5-of-5 YES votes. The user's approval is the final gate.

## Output

- Per-entry council report (verdicts, rationales, recommendations) — to the conversation.
- On approval: MEMORY.md updated (append at appropriate `[LEARN:category]` section), personal-memory.md updated (entry marked promoted).
- A `quality_reports/memory_promotion_<date>.md` audit file recording the full council session for forensics.

## Anti-patterns

- **Auto-promoting on 5-of-5 YES.** Even unanimous critic agreement can be wrong; the user's domain judgment is the final gate.
- **Re-running the council on the same entry repeatedly** hoping for a different result. If 4 critics consistently say NO, the entry doesn't belong in MEMORY.md — file it in personal-memory.md and stop.
- **Skipping the Evidence critic** because the entry "looks obvious." Evidence is what makes the entry portable across forkers; obvious-to-you ≠ obvious-to-them.
- **Demoting via this skill.** It only promotes. Demotion is a manual edit + commit.

## Cross-references

- [`.claude/rules/meta-governance.md`](../../rules/meta-governance.md) — the two-tier memory contract this skill operationalizes.
- [`.claude/agents/promote-memory-council.md`](../../agents/promote-memory-council.md) — the five-critic implementation (one agent file with five role specs, dispatched in parallel via `Task`).
- [`.claude/rules/model-routing.md`](../../rules/model-routing.md) — why critics default to Haiku tier.
- `/learn` (existing skill) — captures new `[LEARN]` entries; pairs with `/promote-memory` (which decides what graduates).
