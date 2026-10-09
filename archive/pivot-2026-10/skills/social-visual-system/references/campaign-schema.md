# Social visual campaign schema

Store one JSON object per line at
`app/linkedin/<newsletter-slug>/visuals/campaign.jsonl`.

## Shared fields

- `version`: integer `1`.
- `id`: unique lowercase slug.
- `post`: repo-relative LinkedIn Markdown path.
- `post_body_sha256`: SHA-256 of the post body without frontmatter.
- `format`: exactly `source-capture`, `classic-meme`, or `workbench-photo`.
- `title`: internal candidate label.
- `alt_text`: meaningful description of the image.
- `sources`: one to four objects with `name`, `url`, and optional `date`.
- `output`: repo-relative PNG or JPEG path under `app/linkedin/`.
- `rights`: object with `status` and `provenance`.
- `status`: `review`, `approved`, or `exported`. Specialist workflows create the asset before it
  enters this ledger, so visual rows never begin as `draft`.
- `recommended_by`: optional exact value `agent`. It records an autonomous recommendation only;
  it is not human selection or approval.
- `attached`: boolean, false until explicit approval and attachment.
- `asset_sha256`: SHA-256 of the local PNG.
- `approved`: present only after Nick explicitly approves this exact visual, recorded as
  `Nicholas Major YYYY-MM-DD (via chat)`.

Each post has one row. Optional alternatives live in the weekly run's research candidate manifest,
not this scheduler-facing ledger. `render-social-visual.mjs --validate` rejects every other format, stale post
bodies, missing assets, changed asset hashes, missing provenance, and invalid approval state.

## Source captures

Source-capture recipes live at `visuals/source-captures.json` and render with:

```bash
mise exec imagemagick -- node app/scripts/render-source-captures.mjs \
  app/linkedin/<newsletter-slug>/visuals/source-captures.json
```

The recipe may add one plain caption and no more than two red rectangles. Raw browser and PDF
captures stay in the relevant research folder.

## Workbench-photo fields

A `workbench-photo` row also requires:

- `synthetic`: boolean `true`.
- `generation.generator`: the tool used, such as `built-in imagegen`.
- `generation.prompt`: the complete generation prompt.

Its `rights.provenance` must identify it as generated. Its `alt_text` must include
`AI-generated` or `synthetic` so the scene cannot be mistaken for documentary evidence.

## Rights statuses

Publishable: `owned`, `licensed`, `public-domain`, `cc-compatible`, `fair-use-approved`.

Review-only: `unverified`, `fair-use-review`, `source-dependent`.

`fair-use-approved` is limited to an established meme template whose exact post-and-visual pair
Nick approved. Its `rights` object must include
`accepted_by: "Nicholas Major 2026-09-29 (via chat)"`, recording his standing instruction not to
repeat the general fair-use-risk question. It is not a claim that the template is licensed.

Rendering or generation does not clear rights. A visual can pass QA and remain blocked from
attachment.

## Attachment

Put `visual: <row-id>` in the post frontmatter only after Nick selects a candidate. An agent's
`recommended_by` value is not that selection. Selection is
not approval. After explicit visual approval updates the row to `approved`, run:

```bash
mise exec -- node app/scripts/attach-social-visual.mjs \
  app/linkedin/<newsletter-slug>/visuals/campaign.jsonl --write
```

The command rejects retired formats, changed post bodies, review-only rights, stale asset hashes,
existing media, already-pushed posts, and visuals without exact approval provenance.
