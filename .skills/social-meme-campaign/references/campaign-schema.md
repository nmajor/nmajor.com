# Campaign ledger schema

Store campaign-specific JSONL at
`app/linkedin/<essay-slug>/memes/campaign.jsonl`. Keep reusable blank templates under
`.skills/social-meme-campaign/assets/templates/`.

Required row fields:

- `version`: integer `1`.
- `id`: unique lowercase slug.
- `post`: repo-relative target LinkedIn Markdown path.
- `audience`: exact value `ai-decision-maker`.
- `operator_moment`: the recognition moment from the post.
- `template`: a key from `template-contracts.json`.
- `slots`: object whose keys and order match that template's contract.
- `alt_text`: description of the template relationship and visible text.
- `asset`: repo-relative rendered-draft path.
- `asset_sha256`: empty while drafting; renderer fills it.
- `render_url`: empty while drafting; renderer records Memegen's canonical URL.
- `rights`: object with `status` and `provenance`.
- `status`: `draft`, `review`, `approved`, or `exported`.
- `post_body_sha256`: SHA-256 of the Markdown body after frontmatter.
- `attached`: boolean. Keep `false` until the exact meme clears approval and rights.

Rights statuses:

- Publishable: `owned`, `licensed`, `public-domain`, `cc-compatible`.
- Review-only: `unverified`, `fair-use-review`, `classic-template-preview`.

## Post selection metadata

Once Nick chooses an option, write its exact repo-relative `asset` path into the target
post's frontmatter:

```yaml
meme: app/linkedin/example/memes/options/example/03-pigeon.jpg
```

The value must match one campaign row for that post and point to an existing file. A
request to adjust a specific option counts as choosing it. `meme:` records selection
only; it is not approval, rights clearance, the scheduler-facing `media:` field, or
authorization to publish.

An approved row also requires:

```json
"approved": "Nicholas Major YYYY-MM-DD (via chat)"
```

Example:

```json
{"version":1,"id":"pharmacy-drake","post":"app/linkedin/example/personal-example.md","audience":"ai-decision-maker","operator_moment":"The pharmacy removes high-consequence incoming calls but keeps opt-in refill texts.","template":"drake","slots":{"rejected_option":"AI ANSWERS PHARMACY CALLS","preferred_option":"AI SENDS OPT-IN REFILL TEXTS"},"alt_text":"Drake rejects AI answering pharmacy calls and approves AI sending opt-in refill texts.","asset":"app/linkedin/example/media/personal-example-meme.jpg","asset_sha256":"","render_url":"","rights":{"status":"fair-use-review","provenance":"Classic Drakeposting template from the local Memegen catalog; review use only until template rights are cleared."},"status":"draft","post_body_sha256":"...","attached":false}
```
