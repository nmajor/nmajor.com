# Case-study library

A running, permanent collection of **real-world applied-AI case studies** — named
companies that put AI into the systems they already run, or replaced an expensive piece
of software with something they built themselves. Two uses:

1. **Source material for individual posts.** Each entry is detailed enough to anchor a
   piece on its own, or to drop in as the concrete example that grounds a post (the
   "example" leg of the experience/evidence/example braid).
2. **A corpus for compiling insights later.** Because every entry uses the same schema
   and tags, we can scan across them — "show me every SaaS-replacement story with real
   dollar numbers," "what keeps breaking in claims-automation rollouts" — and write
   synthesis pieces that no single case study could support.

This is **raw-first**, same as all research here: the unedited source capture lives in
`raw/`; the parsed, structured entry lives in `entries/`. An entry must always be
re-readable against its raw source.

## What belongs here

A case study qualifies if it is a **specific, named deployment** with at least some
concrete detail — not a trend piece, not a vendor's generic capability claim. The two
spine categories we actively hunt:

- **`process-integration`** — a (preferably traditional, non-tech) company put AI into an
  existing operational workflow: claims, underwriting, supply chain, customer service,
  finance, compliance, back office. What it cost, what it returned, what broke.
- **`saas-replacement`** — a team cancelled or shrank a paid software bill by building
  the capability in-house, often "vibecoded" by a small or non-specialist team. The
  before/after cost is the signal.

Also welcome: `cost-reckoning` (the bill coming due), `failure` (honest post-mortems),
`build-vs-buy` decisions, `governance` (how non-technical leaders made the call).

## Files

- `index.md` — the running master list. One row per case study. Scan this first; it links
  to the full entry. **Append to it every time a new entry lands.**
- `entries/<slug>.md` — one structured file per case study (schema below).
- `raw/` — unedited source captures (article text dumps, JSON), kept forever.

## Entry schema

Every file in `entries/` follows this frontmatter + body. Leave a field `unknown` rather
than guessing; honesty about gaps is what makes the corpus trustworthy.

```markdown
---
slug: acme-claims-copilot
company: Acme Insurance
sector: Insurance            # the industry, plain
size: ~12,000 employees      # or revenue / "SMB" / unknown
category: process-integration   # process-integration | saas-replacement | cost-reckoning | failure | build-vs-buy | governance
tags: [claims, llm, document-extraction]
date_added: 2026-06-19
published: 2026-05-xx         # when the source was published (or unknown)
verified: source-read         # unverified | source-read | cross-checked | primary-source
confidence: medium            # how much we trust the numbers: low | medium | high
sources:
  - https://...               # primary first
---

## What they did
One short paragraph: the company, the workflow, and the change in plain words.

## The numbers
- Before: ...
- After: ...
- Cost / spend: ...
- Time / headcount / volume: ...
(Mark each number with how solid it is. Vendor-reported ≠ independently verified.)

## What broke / the caveats
The honest part. What didn't work, what's marketing gloss, what's missing from the story.

## Why it matters for our beat
One or two lines tying it to the applied-AI / traditional-company angle.

## Post angles
- A bullet or two: how this could anchor a piece, or which synthesis it feeds.
```

## How this connects to discovery

The `content-discovery` skill's **case-study hunt** mode feeds this library: it runs the
case-study queries, saves raw, and a subagent parses qualifying hits into `entries/` and
appends to `index.md`. A case study strong enough to write about also gets its URL added
to `research/discovery/seeds.txt` (taste loop) and `seen.txt` (dedupe).
