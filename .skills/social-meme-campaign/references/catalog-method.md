# Template catalog method

The local catalog is a curated semantic layer over a renderer catalog. It is not a
copy of a popularity feed and it is not an image-rights registry.

## Evidence used

- **Memegen** supplies the stable local ID, exact background used by the draft
  renderer, maximum line count, render example, and a cultural-source pointer. The
  renderer is MIT-licensed; that license does not cover its third-party background
  art.
- **MemeFact Templates** supplies a large discovery set with historical engagement,
  up to ten caption examples, partial Know Your Meme context, and GPT-4o-generated
  `description` and `caption_style_explanation` fields. Its Hugging Face card says
  Apache-2.0 for the dataset. Treat the AI fields as hypotheses: they can miss fixed
  phrases, confuse renderer order, or generalize from noisy captions, and the data
  license does not clear linked template art.
- **Imgflip popular** supplies a volatile familiarity signal and renderer-specific
  default box counts. Its API is user-generated and uncurated, so popularity is not
  semantic proof or permission.
- **Know Your Meme and original-source pages** supply cultural meaning and origin.
  Preserve the exact response body before relying on it.
- **MetaMeme and KYMKB** support treating templates as semantic structures, including
  reaction, duality, exploitable, and escalating patterns. They do not license art.

The reproducible source snapshot and audit live at
`research/social-meme-template-catalog/`. Do not move the raw corpus into the skill.

## Admission rule

Never add a template from its title or blank image alone. A researched contract moves
to `admission.active` only after all of these checks:

1. Preserve the renderer metadata and the linked cultural-source page.
2. Read the source meaning and several examples where available.
3. Render the proposed `operator_example` with the exact local renderer.
4. Visually verify every slot against the person, object, panel, or dialogue turn it
   labels.
5. Encode the shortest useful meaning, a direct writing guide, explicit anti-patterns,
   ordered slots, fixed phrases/equality constraints, and at least one relationship
   invariant.
6. Reject or hold templates whose joke relies on injury, disaster, a protected-class
   stereotype, humiliation, political-personality baggage, or text too small for a
   review thumbnail.
7. Keep the art at `fair-use-review` regardless of semantic confidence.

Cross-renderer `lines`, `box_count`, and overlay counts are not interchangeable.
When sources disagree, the local Memegen render determines technical slot order and
the cultural source determines meaning.

## Contract fields

- `meaning`: the reusable relationship carried by the image.
- `writing_guide`: instructions for producing a valid instance.
- `anti_patterns`: near-misses that look plausible but break the established joke.
- `slots`: exact Memegen line order, semantic role, word ceiling, and optional regex
  or equality constraint.
- `invariants`: relationships between slots that deterministic field validation
  cannot fully prove.
- `operator_example`: a short nmajor.com example used for visual regression review.

The document retains active, hold, and rejected research contracts, but campaign
validation and rendering accept only IDs in `admission.active`. Keeping rejected
contracts prevents rediscovery from silently undoing an earlier safety decision.
Before changing admission, read the candidate-specific evidence and blocker in
`research/social-meme-template-catalog/report.md` and preserve any new raw source
that resolves it.

## Catalog maintenance

```bash
python .skills/social-meme-campaign/scripts/validate_template_catalog.py --contracts-only
python research/social-meme-template-catalog/fetch_selected_sources.py
python .skills/social-meme-campaign/scripts/sync_templates.py
python .skills/social-meme-campaign/scripts/validate_template_catalog.py
python .skills/social-meme-campaign/scripts/render_template_catalog.py
```

Review the generated contact sheets under `scratch/social-meme-template-catalog/`.
Do not promote a contract merely to hit a target count.
