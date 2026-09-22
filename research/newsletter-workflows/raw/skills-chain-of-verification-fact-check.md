# RAW: SeiroIto/ClaudeCodeWorkflow -- verify-claims (CoVe), claim-verifier agent, verification-protocol, quality-gates, post-flight-verification

- Repo: https://github.com/SeiroIto/ClaudeCodeWorkflow
- Date accessed: 2026-08-18
- What it is: A large public academic-writing agent workflow. Relevant here for three transferable mechanisms: (1) Chain-of-Verification fact-checking where the verifier subagent runs in a *forked context that never sees the draft*, with fail-closed behaviour; (2) explicit `quality-gates` / `post-flight-verification` rules that sit outside any one skill; (3) a "humanize" skill paired with an adversarial `humanize-auditor` agent, plus a five-critic council that decides what learnings get promoted into persistent memory.

VERBATIM below, complete files, unedited.


---

## .claude/skills/verify-claims/SKILL.md

Source: https://raw.githubusercontent.com/SeiroIto/ClaudeCodeWorkflow/main/.claude/skills/verify-claims/SKILL.md

---
name: verify-claims
description: Run Chain-of-Verification (CoVe) on a draft or a block of text with factual claims. Spawns the `claim-verifier` agent in a forked (fresh) context so it never sees the draft — then reports which claims are supported, contradicted, or unverifiable. Use when user says "verify these citations", "check the claims in X", "did I hallucinate anything", "fact-check this draft", "run CoVe on this", or after any text generation that asserts facts about papers, datasets, or numerical results. NOT for style/grammar review (use `/proofread`) or substance review (use `/review-paper`).
argument-hint: "[file-or-text-path] [--source <path-or-url>] [--no-fail-closed]"
allowed-tools: ["Read", "Grep", "Glob", "Task", "Write"]
---

# /verify-claims — Chain-of-Verification on a Draft

Fact-check a draft using the **Post-Flight Verification protocol** ([`.claude/rules/post-flight-verification.md`](../../rules/post-flight-verification.md)).

**Input:** `$ARGUMENTS` — path to a file containing the draft (markdown, .qmd, .tex, .md) or a shorthand pointer. Optional flags:

- `--source <path-or-url>` — one or more source-material pointers (repeat for multiple). If omitted, the skill infers from context (e.g., papers referenced, cited arXiv URLs).
- `--no-fail-closed` — downgrade FAIL outcomes to warnings without regeneration. Use sparingly.

## When to pick this skill

- **`/verify-claims`** (this skill) — ad-hoc fact-checking on any draft or text block the user hands you. One-shot, user-invoked.
- **Other skills that auto-run Post-Flight internally** (`/lit-review`, `/research-ideation`, `/respond-to-referees`, `/review-paper --peer`) — no need to call this separately; they already run it.
- **`/proofread`** — grammar, typos, overflow. Different lens.
- **`/review-paper`** (default mode) — full manuscript review, not just claim verification.
- **`/validate-bib`** — checks citations *exist* and are well-formed (structural + DOI). This skill checks they *hold* (the cited paper supports the attributed claim). Complementary — run both before submission.

## How it works

Implements the 4-step CoVe loop from Dhuliawala et al. 2023 ([arXiv:2309.11495](https://arxiv.org/abs/2309.11495)), with architectural enforcement of the fresh-context independence trick.

### Phase 0 — Pre-Flight

Confirm:
- Draft file exists and is readable
- At least one source pointer available (either `--source` or auto-detected from draft)
- `claim-verifier` agent file exists at `.claude/agents/claim-verifier.md`

If any fail → surface the failure, do NOT proceed.

### Phase 1 — Extract claims

Read the draft. Identify factual assertions of these types:

| Type | Example |
|------|---------|
| Citation | "Smith (2019, *JEL*) shows X" |
| Numerical fact | "N = 10,000", "ATT = 0.42" |
| Negative literature | "No prior work studies X" |
| Named entity | researcher, paper title, venue, package, estimator name |
| Dataset claim | "The CPS contains field `educ_attain`" |

Skip: opinions, forward-looking suggestions, definitions the draft introduces.

**For citation-type claims, extract the claim↔citation PAIR — not just the citation.** Capture *what* the draft attributes to *which* work, so the verifier checks **appropriateness** (does Smith 2019 actually *show* X?), not merely existence. "Smith (2019) shows a positive wage effect" becomes `{cite: Smith2019, attributed: "positive wage effect"}`. This is the layer `/validate-bib` explicitly defers here: validate-bib confirms the citation *exists and is well-formed*; this skill confirms it *holds*. A mis-citation (the paper exists but says something else, or the opposite) is exactly a numeric/directional contradiction → HIGH-WARN unless a concrete `author_alternative` is recorded (then EXPLAINED).

Output a claims table:

```markdown
| ID | Claim | Source hint |
|----|-------|-------------|
| C1 | ... | ... |
```

### Phase 2 — Generate verification questions

One question per claim. Make it specific and answerable from the source alone.

### Phase 3 — Spawn `claim-verifier` (forked, fresh context)

```
Task: subagent_type=claim-verifier, context=fork
Prompt: hand over claims table + verification questions + source material pointers.
        Do NOT include the draft text.
```

The forked agent runs the CoVe independent-answer step. It has never seen the draft and cannot confirm-bias. It returns a structured verification report.

### Phase 4 — Reconcile

The verifier returns a per-claim verdict in one of these severity tiers:

- **HIGH-WARN** — fabricated reference (the cited paper doesn't exist at the named venue/year), draft claim directly contradicted by the source, or `not_found` retrieval that the verifier interprets as a hallucinated citation. **Gate-refuse** — these block `/commit` for any file `/verify-claims` was just run against, unless the user explicitly overrides with `--no-fail-closed` or sets `verifyClaims.allowHighWarn: true` in `.claude/settings.json`.
- **MED-WARN** — transient infrastructure / retrieval failure (paywall the verifier can normally bypass via cached metadata; DOI resolver timeout; partial PDF read). Surface for the author; do not gate-refuse.
- **LOW-WARN** — source genuinely inaccessible (paywalled and not in cache; private dataset; pre-print server transient). Surface with `cannot-verify` flag; do not gate-refuse.
- **EXPLAINED** (v2.0) — a numeric/directional contradiction the author has *pre-justified* with a concrete named alternative (different defensible edition, specification, sample, or rounding convention), passed to the verifier via the claim's `author_alternative` field. Surfaced with the evidence and the recorded reason; **non-gating**. The hard floor holds: a *fabricated* citation is never EXPLAINED, and a blank/vague alternative stays HIGH-WARN. This mirrors `audit-reproducibility`'s EXPLAINED disposition for numeric claims — a mismatch is not always a failure when a defensible alternative is named.

Verdict aggregation by tier across all extracted claims (EXPLAINED counts as non-gating, like LOW):

| Tier counts | Outcome | `/commit` behaviour |
|---|---|---|
| 0 HIGH, 0 MED, ≥ 0 LOW/EXPLAINED | **PASS** (green block) | proceeds |
| 0 HIGH, ≥ 1 MED, any LOW/EXPLAINED | **PARTIAL** (yellow block) | proceeds with warning |
| ≥ 1 HIGH | **FAIL** (red block) | **halts** unless override |

`--no-fail-closed` opts out of the gate-refuse behaviour on HIGH-WARN. Use sparingly — it's there for offline / hallucination-sensitive contexts where the user accepts the risk in writing.

If the draft is writeable and the user asked for auto-correction, regenerate the affected sections using the verifier's evidence. Otherwise return the report and let the user decide.

## Example

```
/verify-claims quality_reports/lit-review_staggered-did.md --source master_supporting_docs/callaway_santanna_2021.pdf --source master_supporting_docs/dechaisemartin_dhaultfoeuille_2020.pdf
```

Expected output (abridged):

```markdown
## Post-Flight Verification — lit-review_staggered-did.md

**Claims extracted:** 14
**Verified independently:** 14 (forked claim-verifier)
**Outcome:** PARTIAL — 12 verified, 1 discrepancy, 1 unverifiable

### Discrepancies

- **C7** — draft claims "de Chaisemartin & D'Haultfœuille (2020) *propose* a DR estimator." Source Section 4 shows they propose a weighting estimator, not DR. Recommend correction.

### Unverifiable

- **C12** — draft cites "Borusyak et al. 2024 (working paper)". No canonical URL in provided sources. Recommend user supply DOI or arXiv link.

### Verified

| ID | Claim | Evidence |
|----|-------|----------|
| C1 | "Callaway & Sant'Anna 2021 use group-time ATT" | p. 5, eq. (3) |
| ... | ... | ... |
```

## Fail modes and recovery

**Verifier times out:** surface a warning block, return draft as provisional. Do not silently ship.

**Source material inaccessible** (paywall, 404): report the specific claims that hinge on it, flag as `cannot-verify`, recommend user supply an alternative source.

**Draft contains only opinions / forward-looking text:** report "no verifiable factual claims extracted — nothing to check" and return.

## Cross-references

- [`.claude/agents/claim-verifier.md`](../../agents/claim-verifier.md) — the forked verifier.
- [`.claude/rules/post-flight-verification.md`](../../rules/post-flight-verification.md) — the protocol.
- MEMORY.md `[LEARN:pattern]` on Chain-of-Verification vs critic-fixer vs cross-artifact review.


---

## .claude/agents/claim-verifier.md

Source: https://raw.githubusercontent.com/SeiroIto/ClaudeCodeWorkflow/main/.claude/agents/claim-verifier.md

---
name: claim-verifier
description: Fresh-context verifier for factual claims made by other agents or skills. Implements the Chain-of-Verification (CoVe) independence trick via context forking — the verifier never sees the original draft, only the extracted claims + the source material. Use when a skill has produced a draft that contains citations, numerical facts, named entities, or literature references that need hallucination-checking before returning to the user.
tools: Read, Grep, Glob, WebFetch, WebSearch, Bash
model: opus
effort: high
---

<!-- Adapted from Dhuliawala et al. 2023, "Chain-of-Verification Reduces Hallucination in Large Language Models" (arxiv.org/abs/2309.11495). The core idea — answering verification questions in a context that does NOT contain the original draft — is architecturally enforced here by running the agent via Task with context: fork. -->

# Claim Verifier Agent

You are an **independent verifier**. Your job is to check factual claims without being biased by the draft that produced them. You have never seen the draft. You only see:

1. A list of **claims** extracted from the draft
2. A **source material** pointer (file path, URL, dataset, repo, etc.)
3. The **verification questions** that need answering

You answer each verification question from scratch, using the source material and your tools. If your answer disagrees with the claim, you flag a discrepancy. You do NOT try to reconcile — the calling skill decides what to do with discrepancies.

## Protocol

### Step 1: Read the verification request

The calling skill hands you a structured block like:

```yaml
source_material:
  - path: master_supporting_docs/callaway_santanna_2021.pdf
  - url: https://doi.org/10.1016/j.jeconom.2020.12.001
  - search: "Callaway Sant'Anna 2021 event study"

claims:
  - id: C1
    text: "Callaway and Sant'Anna (2021) propose a doubly robust estimator for staggered DiD."
    source_hint: "from master_supporting_docs/callaway_santanna_2021.pdf"
    verification_question: "What estimator do Callaway and Sant'Anna (2021) propose, and is it doubly robust?"

  - id: C2
    text: "The method requires conditional parallel trends."
    source_hint: "same paper"
    verification_question: "What parallel trends assumption does the paper require — unconditional or conditional?"
    author_alternative: ""        # OPTIONAL. If the author has pre-recorded a
                                  # concrete named alternative that accounts for
                                  # an expected numeric/directional gap, put it
                                  # here; a contradiction then resolves to
                                  # EXPLAINED instead of HIGH-WARN. Blank = none.
```

### Step 2: Answer each question independently

For each `verification_question`:

1. Read only the `source_material`. Do NOT try to infer what the draft said — you don't have it, and you shouldn't want it.
2. Use `Read` / `WebFetch` / `WebSearch` / `Grep` as needed to find a grounded answer.
3. Record:
   - `independent_answer`: what the source actually says
   - `matches_claim`: yes / partial / no / cannot-verify
   - `evidence`: direct quote, page number, or URL

Never answer "the claim is correct because it sounds right." Either you found evidence or you didn't.

### Step 3: Handle uncertainty honestly

If the source material is inaccessible, ambiguous, or silent on the question, return `matches_claim: cannot-verify` with a specific reason (e.g., "PDF paywalled, preprint not on arXiv"). Do NOT guess.

If the question itself is ill-posed (the claim doesn't make a verifiable factual assertion — it's an opinion, an aesthetic judgment, or a prediction), return `matches_claim: not-verifiable-claim-type` with a one-sentence explanation.

### Step 4: Return a structured verification report

Each per-claim finding now carries a **severity tier** (v1.9.0):

- **HIGH-WARN** — fabricated reference (cited paper does NOT exist at the named venue/year), direct contradiction between draft and source, or `not_found` retrieval that you interpret as a hallucinated citation. These block `/commit` via `/verify-claims`.
- **MED-WARN** — transient infrastructure failure: DOI resolver timed out, partial PDF read, paywall the cache normally bypasses. The author should re-run the verification later or supply a local copy.
- **LOW-WARN** — source genuinely inaccessible (paywalled with no cache hit, private dataset, pre-print server transient). Surface but do not gate-refuse — the claim may still be correct; the verifier just can't independently confirm.
- **EXPLAINED** — a numeric or directional contradiction for which the request carries a *concrete named alternative* (`author_alternative`) that accounts for the gap — a different but defensible edition, specification, sample, or rounding convention. Surface with the evidence and the recorded alternative, but do **not** gate-refuse: the disagreement is documented, not a bug. EXPLAINED **never** applies to a fabricated/nonexistent citation (that stays HIGH-WARN), nor to a blank or vague alternative ("different version", "rounding" with no specifics).

```markdown
## Claim Verification Report

**Claims reviewed:** N
**Verification outcome:** PASS (all match, 0 HIGH) | PARTIAL (0 HIGH, ≥1 MED) | FAIL (≥1 HIGH)

**Tier counts:** HIGH-WARN: H | MED-WARN: M | LOW-WARN: L

### Per-claim findings

| ID | Claim (draft) | Independent answer | Evidence | Match? | Tier |
|----|--------------|---------------------|----------|--------|------|
| C1 | [quoted claim] | [what source says] | [quote + loc] | yes / partial / no / cannot-verify | — / LOW / MED / HIGH / EXPLAINED |

### HIGH-WARN (gate-refuse `/commit`)

- **C3** — draft says "N = 10,000" but the paper's Table 1 shows N = 1,000. Evidence: Table 1, page 7. **Tier: HIGH** (direct contradiction).
- **C7** — draft cites "Imbens and Rubin (2015)" for a claim that appears only in Imbens and Wooldridge (2009). Evidence: grep of both papers. **Tier: HIGH** (fabricated attribution).

### MED-WARN (retry recommended)

- **C9** — DOI resolver timed out; could not confirm Wooldridge 2010 publication year. **Tier: MED** (transient retrieval).

### LOW-WARN (source inaccessible; manual review)

- **C4** — source paper paywalled; preprint not on arXiv. Recommend user fetch PDF and verify C4 by hand. **Tier: LOW**.
```

### Tier-assignment rules

- A `cannot-verify` outcome is **not automatically HIGH-WARN**. The verifier distinguishes:
  - "I retrieved the source and it contradicts the claim" → HIGH-WARN
  - "I cannot retrieve the source because of a transient failure" → MED-WARN
  - "I cannot retrieve the source because it's genuinely inaccessible" → LOW-WARN
- A cited paper that does NOT exist (no DOI, no arXiv id, no venue search hit) is **always HIGH-WARN** — this is the canonical hallucination signature. Do not soften to MED-WARN or EXPLAINED on the grounds that "maybe my search missed it." This is the hard floor: a fabricated citation is never downgradable.
- A numerical contradiction (draft says X, source says Y, X ≠ Y within rounding) is **HIGH-WARN by default** — *unless* the claim carries a concrete `author_alternative` that names a defensible reason for the gap (different edition/table, specification, sample, rounding convention), in which case record it as **EXPLAINED** (surfaced, non-gating). A blank or vague `author_alternative` does not soften — stay HIGH-WARN.
- A directional contradiction (draft says "positive effect", source says "negative effect") is **HIGH-WARN by default** — same EXPLAINED escape: only a concrete named alternative for that claim downgrades it; otherwise HIGH-WARN.
- A paraphrase mismatch where the draft's gloss is a reasonable summary of the source — not HIGH-WARN. Flag as `partial` with no tier (or LOW if you want to surface the gloss difference).

Be conservative on HIGH-WARN. It blocks `/commit`. False positives erode the gate's authority; false negatives let known-bad claims ship. The EXPLAINED escape exists only to stop a *defensible, author-documented* disagreement from gate-blocking — it is never a way to wave through a fabricated citation or an undocumented contradiction.

## What you DO NOT do

- You do **not** read the original draft, even if the calling skill accidentally includes it in your context. If you spot it, ignore it.
- You do **not** rewrite the claim. You only report whether it's supported.
- You do **not** decide whether a discrepancy is "important enough" to regenerate for. That's the calling skill's job (it knows the domain).
- You do **not** use WebSearch as the ONLY source of evidence for a claim. WebSearch results are themselves hallucination-prone — prefer direct `Read` of `master_supporting_docs/` PDFs or `WebFetch` of a known canonical URL (DOI, arXiv abs page, official site). If WebSearch is the only option, flag it.

## Cross-references

- `.claude/rules/post-flight-verification.md` — the protocol callers follow.
- `.claude/skills/verify-claims/SKILL.md` — user-facing wrapper.
- MEMORY.md `[LEARN:pattern]` — why CoVe (Dhuliawala et al. 2023) is architecturally different from critic-fixer.


---

## .claude/rules/verification-protocol.md

Source: https://raw.githubusercontent.com/SeiroIto/ClaudeCodeWorkflow/main/.claude/rules/verification-protocol.md

---
paths:
  - "Slides/**/*.tex"
  - "Quarto/**/*.qmd"
  - "docs/**"
---

# Task Completion Verification Protocol

**At the end of EVERY task, Claude MUST verify the output works correctly.** This is non-negotiable.

## For Quarto/HTML Slides:
1. Run `./scripts/sync_to_docs.sh` (or `./scripts/sync_to_docs.sh LectureN`) to render and deploy
2. Open the HTML in browser: `open docs/slides/LectureX.html` (macOS) or `xdg-open` (Linux)
3. Verify images display by reading 2-3 image files to confirm valid content
4. Check HTML source for correct image paths
5. Check for overflow by scanning dense slides
6. Verify environment parity: every Beamer box environment has a CSS equivalent in the QMD
7. Report verification results

## For LaTeX/Beamer Slides:
1. Compile with xelatex and check for errors
2. Open the PDF to verify figures render (`open` on macOS, `xdg-open` on Linux)
3. Check for overfull hbox warnings

## For TikZ Diagrams in HTML/Quarto:
1. Browsers **cannot** display PDF images inline — ALWAYS convert to SVG
2. Use SVG (vector format) for crisp rendering: `pdf2svg input.pdf output.svg`
3. **NEVER use PNG for diagrams** — PNG is raster and looks blurry
4. Verify SVG files contain valid XML/SVG markup
5. Copy SVGs to `docs/Figures/LectureX/` via `sync_to_docs.sh`
6. **Freshness check:** Before using any TikZ SVG, verify extract_tikz.tex matches current Beamer source

## For R Scripts:
1. Run `Rscript scripts/R/filename.R`
2. Verify output files (PDF, RDS) were created with non-zero size
3. Spot-check estimates for reasonable magnitude

## Common Pitfalls:
- **PDF images in HTML**: Browsers don't render PDFs inline → convert to SVG
- **Relative paths**: `../Figures/` works from `Quarto/` but not from `docs/slides/` → use `sync_to_docs.sh`
- **Assuming success**: Always verify output files exist AND contain correct content
- **Stale TikZ SVGs**: extract_tikz.tex diverges from Beamer source → always diff-check

## Verification Checklist:
```
[ ] Output file created successfully
[ ] No compilation/render errors
[ ] Images/figures display correctly
[ ] Paths resolve in deployment location (docs/)
[ ] Opened in browser/viewer to confirm visual appearance
[ ] Reported results to user
```


---

## .claude/rules/quality-gates.md

Source: https://raw.githubusercontent.com/SeiroIto/ClaudeCodeWorkflow/main/.claude/rules/quality-gates.md

---
paths:
  - "Slides/**/*.tex"
  - "Quarto/**/*.qmd"
  - "scripts/**/*.R"
---

# Quality Review & Scoring Rubrics

> **Framing:** Thresholds are **advisory at the harness level**. The `/commit` skill runs `quality_score.py` and halts on failure until the user fixes or explicitly overrides. A **real git pre-commit hook** (`.githooks/pre-commit`, activated once via `./scripts/install-hooks.sh`) extends the same gates to *every* commit, so bypassing the skill no longer bypasses the review — unless you opt out with `SKIP_QUALITY_GATE=1` / `--no-verify`. "Gate" here means "checkpoint enforced by a skill or the pre-commit hook," not an unconditional harness-level block.

## Thresholds

- **80/100 = Commit** -- good enough to save
- **90/100 = PR** -- ready for deployment
- **95/100 = Excellence** -- aspirational

## Quarto Slides (.qmd)

| Severity | Issue | Deduction |
|----------|-------|-----------|
| Critical | Compilation failure | -100 |
| Critical | Equation overflow | -20 |
| Critical | Broken citation | -15 |
| Critical | Typo in equation | -10 |
| Major | Text overflow | -5 |
| Major | TikZ label overlap | -5 |
| Major | Notation inconsistency | -3 |
| Minor | Font size reduction | -1 per slide |
| Minor | Long lines (>100 chars) | -1 (EXCEPT documented math formulas) |

## R Scripts (.R)

| Severity | Issue | Deduction |
|----------|-------|-----------|
| Critical | Syntax errors | -100 |
| Critical | Domain-specific bugs | -30 |
| Critical | Hardcoded absolute paths | -20 |
| Major | Missing set.seed() | -10 |
| Major | Missing figure generation | -5 |

## Beamer Slides (.tex)

| Severity | Issue | Deduction |
|----------|-------|-----------|
| Critical | XeLaTeX compilation failure | -100 |
| Critical | Undefined citation | -15 |
| Critical | Overfull hbox > 10pt | -10 |

## Enforcement (the /commit skill + an optional pre-commit hook)

- **Score < 80:** Halt within `/commit`. List blocking issues. User may override with an explicit natural-language signal ("commit anyway" / "skip quality gate") and a reason — the override is logged in the commit body.
- **Score < 90:** Allow commit within `/commit`, warn. List recommendations.
- **Direct `git commit`:** unenforced *until* you run `./scripts/install-hooks.sh`, which points `core.hooksPath` at the version-controlled `.githooks/pre-commit`. After that, every commit (skill or not) runs the surface-sync + quality (≥80) gates. Bypass sparingly with `SKIP_QUALITY_GATE=1` (quality only) or `git commit --no-verify` (all hooks); record the reason in the commit body.

## Quality Reports

Generated **only at merge time**. Use `templates/quality-report.md` for format.
Save to `quality_reports/merges/YYYY-MM-DD_[branch-name].md`.

## Tolerance Thresholds (Research)

<!-- Customize for your domain -->

| Quantity | Tolerance | Rationale |
|----------|-----------|-----------|
| Point estimates | [e.g., 1e-6] | [Numerical precision] |
| Standard errors | [e.g., 1e-4] | [MC variability] |
| Coverage rates | [e.g., +/- 0.01] | [MC with B reps] |


---

## .claude/rules/post-flight-verification.md

Source: https://raw.githubusercontent.com/SeiroIto/ClaudeCodeWorkflow/main/.claude/rules/post-flight-verification.md

---
paths:
  - ".claude/skills/lit-review/SKILL.md"
  - ".claude/skills/research-ideation/SKILL.md"
  - ".claude/skills/respond-to-referees/SKILL.md"
  - ".claude/skills/review-paper/SKILL.md"
  - ".claude/skills/interview-me/SKILL.md"
alwaysApply: false
---

# Post-Flight Verification (anti-hallucination)

Symmetric partner to **Pre-Flight Reports** (`.claude/rules/content-invariants.md` + skill-level `## Phase 0`). Where Pre-Flight proves inputs were read *before* work, Post-Flight proves the output's factual claims hold *after* drafting — before the skill returns to the user.

**Adapted from:** Dhuliawala et al. 2023, "Chain-of-Verification Reduces Hallucination in Large Language Models" ([arXiv:2309.11495](https://arxiv.org/abs/2309.11495)). The **independence trick** — answer verification questions in a context that does not contain the original draft — is architecturally enforced here by running `claim-verifier` via `Task` with `context: fork`. The forked agent literally cannot self-confirm; it has never seen the draft.

## When this rule applies

Any skill whose output contains **factual claims that can be independently verified** against a source:

| Skill | High-risk claim types |
|-------|----------------------|
| `/lit-review` | Citations (paper exists, authors, year, venue); paraphrased claims ("Smith 2019 finds X") |
| `/research-ideation` | "Has anyone tested this?" negative-literature claims; dataset structure claims; estimator feasibility claims |
| `/respond-to-referees` | "We added X on page Y" assertions about actual revisions |
| `/review-paper` (`--peer` mode) | Novelty-probe claims from WebSearch ("this paper's contribution is novel" / "similar to Jones 2020") |
| `/interview-me` | Papers referenced in the research spec (if any cited) |

Does **not** apply to mechanical skills (`/compile-latex`, `/deploy`, `/extract-tikz`, `/commit`) — they produce compiled output verified by external processes (the compiler), not factual text.

## The 4-step CoVe protocol

### Step 1 — Draft (the skill's normal output generation)

Produce the response as usual. Do not short-circuit the Post-Flight check even for "obviously correct" drafts.

### Step 2 — Extract claims

From the draft, identify every assertion of the form:

- **Citation claims:** "Author (Year) shows X."
- **Existence claims:** "A dataset called X contains Y fields."
- **Numerical facts:** "N = 10,000" / "coefficient = 0.42" / "p < 0.01"
- **Named entities:** researcher names, paper titles, venues, package names
- **Negative literature claims:** "No prior work studies X."

Skip:
- **Opinions** ("this is a promising direction") — not verifiable
- **Suggestions** ("the user could try IV with instrument Z") — forward-looking
- **Definitions Claude introduces itself** ("let τ denote the treatment effect")

### Step 3 — Generate verification questions

For each extracted claim, write one specific, answerable question whose answer can confirm or refute the claim from the source material alone. Good questions name the source explicitly. Bad questions are open-ended.

| Bad question | Good question |
|-------------|--------------|
| "Is Callaway and Sant'Anna (2021) about DiD?" | "In Callaway and Sant'Anna (2021), *J. Econometrics*, what is the exact estimator name in Section 4?" |
| "Does the estimator require parallel trends?" | "Does Callaway and Sant'Anna (2021) Section 4 Assumption 2 use unconditional or conditional parallel trends?" |

### Step 4 — Answer in fresh context, then reconcile

Spawn `claim-verifier` via `Task` with `subagent_type=claim-verifier` and `context=fork`. Hand it: claims, verification questions, source material pointers. **Do not include the draft** — forking removes the draft from the verifier's context automatically, but don't explicitly pass it either.

Receive back a verification report. Three outcomes:

- **PASS** (all claims match): return the draft to the user as-is.
- **PARTIAL** (some `cannot-verify`, no hard discrepancies): return the draft with explicit uncertainty flags on the unverified claims, so the user knows to double-check them.
- **FAIL** (at least one claim contradicts the source): **regenerate the affected section** using the verifier's evidence. If regeneration still fails after 2 attempts, return the best draft with discrepancies surfaced as a warning block — do not silently ship a known-wrong claim.

## Output contract

Every skill that applies this rule must include a structured Post-Flight block in its response (can be collapsed by the user; visible on demand):

```markdown
## Post-Flight Verification

**Claims extracted:** N
**Verified independently:** N (forked `claim-verifier` agent)
**Outcome:** PASS | PARTIAL | FAIL → regenerated

### Verified

| ID | Claim | Evidence |
|----|-------|----------|
| C1 | [claim] | [source + loc] |

### Unverifiable (user review recommended)

- **C4** — [reason, e.g., paywalled source]

### Discrepancies (regenerated)

- **C3** — original draft: "N = 10,000"; source shows: "N = 1,000". Corrected in final response.
```

## Fail-closed semantics

- If the verifier agent errors out, returns malformed output, or times out, **do not silently ship the draft.** Surface a block like:
  > "Post-Flight verification failed (verifier error: …). Draft has not been independently checked. Treat the output as provisional."
- This mirrors Pre-Flight's fail-closed contract. Hallucination discipline is most valuable precisely when things are going sideways — that's when silent failures are most expensive.

## Opt-out

`--no-verify` flag skips Post-Flight. Useful for speed-critical iterations or when the user is actively reading the source material themselves. Document the opt-out in each skill's argument hints.

## Cross-references

- `.claude/agents/claim-verifier.md` — the forked verifier.
- `.claude/skills/verify-claims/SKILL.md` — user-facing wrapper for ad-hoc verification of any text.
- `.claude/rules/content-invariants.md` — Pre-Flight (input side).
- `.claude/rules/cross-artifact-review.md` — pattern-based; Post-Flight is draft-based.
- `.claude/rules/summary-parity.md` — rule against enumerative summaries drifting from their bodies; Post-Flight is the factual equivalent for draft content.
