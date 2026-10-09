# Autonomous weekly LinkedIn newsroom

## Decision

`content-repurposing` is the single weekly command. It can run after the newsletter story is
settled, with or without fresh input from Nick. It finishes at a complete review packet and leaves
all publication approvals unset.

The weekly slate has seven available days, Tuesday through Monday. Tuesday is the required
newsletter companion and is scheduled from the issue's exact publish timestamp plus 60 minutes.
The target is five posts. One to seven may survive, and four or fewer is correct when the reporting
is thin. The other stories range across applied AI rather than inheriting the issue's theme.

Every run includes a cautionary reporting desk. Negative stories compete on evidence and operator
value, not outrage. Every retained post gets a rendered, inspected image recommendation through a
meme-first ladder. Alternatives stay outside the recursively scanned scheduler tree.

## Why this design

The September strategy research supports a staged AI-assisted system: reporting packet, editorial
judgment, audience translation, distinct hook families, constrained drafting, and adversarial
review. It does not support a magic hook, fixed daily frequency, or guaranteed reach. Nick's own
171,633-impression cautionary post is useful account-specific evidence for named, timely,
broadly-addressable event stories, but one viral observation is not a recipe.

Astra and Fable independently found the same autonomy failures in the repo: human choice gates in
hooks and focus-group review, a visual-selection gate, scheduler-tree ingestion hazards, and stale
five-weekday assumptions. Fable also found executable visual contradictions: a hard meme cap and
PNG-only paths despite JPEG meme output.

## Implemented contract

- Optional weekly opinion is captured verbatim and tagged separately from established views and
  agent-proposed judgments.
- Research is raw-first and resumable under `research/linkedin-weekly/<run-id>/`.
- Twelve to eighteen pitches feed hard evidence and duplication gates before any panel score.
- At most one ordinary spike candidate is chosen. Baseline and spike posts have different jobs and
  metrics.
- Hook selection and audience review have non-interactive modes when called by the weekly skill.
- Text variants and image alternatives live in research. Only one recommended post per slot and
  one recommended visual row per post enter scheduler-facing folders.
- Every weekly post sets `mediaRequired: true`. A recommendation does not select, approve, attach,
  or schedule an asset.
- Historical analytics remain optional. The first real export will determine the importer. Missing
  values remain missing; paid and organic results stay separate; findings remain hypotheses with
  sample sizes and counterexamples.

## Validation

The scheduler now supports an exact `offsetMinutesAfterIssue` for the companion. LinkedIn lint
validates that field, its conflict with fixed-hour scheduling, and the `postHourUTC` range. A
documented `lengthReason` permits a post to exceed the normal 1,400-character house target without
making long posts the default.

The weekly-batch lint checks versioned new batches for at most seven posts, unique offsets 0 through
6, exactly one day-zero newsletter companion, one spike at most, personal-channel routing,
`mediaRequired`, and one recommended visual row per retained post. Legacy history is not subject to
the new contract.

The visual validator no longer imposes a meme percentage cap and now accepts PNG and JPEG. Rights
remain fail-closed. Until a classic template's exact art is cleared, the attachable recommendation
should use owned re-created art or fall through to a publishable source capture or workbench image.
