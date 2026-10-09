# Weekly run contract

This file defines the durable inputs, artifacts, stages, and completion states for an
autonomous LinkedIn newsroom run.

## Inputs

The only required input is one of:

- an essay slug whose draft or published file already exists; or
- a settled newsletter story brief with a provisional slug.

Everything else is optional. Accept weekly direction in chat or from
`research/linkedin-weekly/<run-id>/input.md`:

- opinions or questions Nick wants to explore;
- stories, industries, or readers to favor;
- sources to inspect;
- topics or claims to avoid;
- timing constraints.

Record each supplied item verbatim before interpreting it. An empty optional input never pauses
the run. If there is no essay file yet, finish the research, slate, copy variants, and visual
work under `research/`. Materialize scheduler-facing Markdown only after the real essay slug
exists. Never invent an essay or approval field to satisfy lint.

## Run directory

Use `research/linkedin-weekly/<YYYY-MM-DD>-<essay-or-brief-slug>/`:

```text
input.md                 verbatim optional direction and resolved defaults
manifest.json            resumable machine state
raw/                     unedited source captures and desk returns
pitches.jsonl            normalized evidence packets and decisions
review.md                the complete human review packet
alternatives.md          text alternatives, never scheduler inputs
variants/                standalone Markdown bodies for material alternatives
visual-candidates.jsonl  recommended and backup image candidates
```

Do not put briefs, variants, or review Markdown below `app/linkedin/`. The LinkedIn reader scans
Markdown recursively and would treat those files as posts.

## Manifest

Use schema version 1. Record:

- `run_id`, `essay_slug` or `provisional_slug`, and hashes of the issue or story brief and
  optional input;
- stage state for `capture`, `reporting`, `selection`, `drafting`, `claim_check`, `audience_review`,
  `visuals`, `materialization`, and `validation`;
- stable pitch and post IDs, selected offsets, artifact paths, and source-capture paths;
- provider substitutions, failed or reduced reviews, visual job IDs, retries, and unresolved
  items;
- final state: `generation-complete`, `awaiting-publication-approval`, or `blocked-item`.

Resume from the last completed stage. Never overwrite manually edited, approved, attached, or
pushed work. A changed issue, post body, or weekly input invalidates dependent hashes and returns
those artifacts to review.

## Evidence packet

Every pitch needs:

- named subject and event date;
- operational setting and what happened;
- exact claims the post may make;
- metric definition, denominator, and measurement window when a number is used;
- implementation detail that explains the result;
- what the source does not disclose;
- contradictory or qualifying evidence;
- at least one primary source when available and independent corroboration for consequential
  claims;
- the operator decision or business stake;
- why it is timely now;
- proposed judgment and its provenance.

Search snippets and social reactions are leads, not proof. Vendor case studies may establish a
named deployment but their results must be labeled vendor-reported unless independently checked.

## Judgment provenance

Tag each proposed angle:

- `nick-this-week`: stated in the optional input for this run;
- `nick-established`: traceable to a prior published piece or durable voice rule;
- `editorial-proposal`: a new interpretation generated from the evidence.

An editorial proposal may be opinionated. It may not claim Nick tested a product, advised the
company, spoke to an employee, felt an emotion, or had any other firsthand experience that is not
in the record.

## Review packet

Show all seven Tuesday-to-Monday slots, including empty slots and the reason each is empty. For
every retained post include an ordered candidate list:

- candidate 1 is always the recommended body and image pair. It is the only pair materialized into
  scheduler-facing files. Explicit approval of the exact displayed pair selects candidate 1 unless
  Nick names a variant; silence never counts as approval;
- the selected hook and at most two hook alternatives;
- zero or one materially different body alternative, stored as its own Markdown file under
  `variants/`, only when the story supports a genuinely different framing;
- offset and intended reach game;
- editorial lane and judgment provenance;
- claim-to-source ledger and factual limits;
- recommended rendered image with alt text, rights state, and QA result;
- at most one meaningfully different backup image. If it accompanies a body alternative, it must
  fit that alternative rather than merely recolor or rerender the recommendation;
- audience-review result and what changed.

Only the recommended post body goes into `app/linkedin/<essay-slug>/`. Alternatives stay in the
research packet.

In the human handoff, show each path exactly once. Use a single clickable path per body and image,
ordered recommendation first. Never emit both a code-formatted path and a separate link to that
same path. Candidate ordering never bypasses the explicit approval gates.

## Completion

Generation is complete when every retained post has passed evidence, voice, duplication, and
audience checks and has an inspected rendered image recommendation. A provisional run may keep
those assets under research; materialization later copies the final recommendation into the
scheduler-facing ledger and rebinds it to the real post-body hash. It can remain
`awaiting-publication-approval` indefinitely. Missing approval does not mean generation failed.

An image timeout or source failure blocks only that item. Continue the other slots and record the
precise unfinished artifact. Do not call the batch complete if the required Tuesday companion is
missing.
