---
name: social-visual-system
description: "Choose, create, and QA one of the three allowed visual formats for nmajor.com social posts using a meme-first priority: classic meme, real annotated source screenshot, then synthetic workbench photo. Use whenever a LinkedIn or other social post needs an image, a batch needs visual variety, or an existing visual needs refinement. Do not use for website UI or ordinary OpenGraph cards."
---

# Social visual system

Every social visual uses exactly one of three formats, considered in this order:

1. `classic-meme`: a familiar meme whose established relationship carries the joke;
2. `source-capture`: a real page, PDF, spreadsheet, dashboard, Notes page, product screen, or
   message thread with a useful crop and crude annotation;
3. `workbench-photo`: an AI-generated phone-photo scene built around a notebook, whiteboard,
   scratch calculation, or marked-up generic printout.

Do not create evidence cards, quote cards, comparison cards, charts, timelines, carousels,
general illustrations, or other social-image formats. Express the idea through one of the three
allowed choices or use a different post.

Read [references/formats.md](references/formats.md) before choosing. Use
[references/campaign-schema.md](references/campaign-schema.md) when creating or updating the
campaign ledger.

## Choose the format

This is a priority ladder, not three equal choices. Stop at the first format that works:

1. **Try a classic meme first.** If a familiar template communicates the post's actual concept at
   a glance, use it. A clear meme wins even when a screenshot or workbench scene could also work.
   Invoke `meme-angle-selector`, then `social-meme-campaign`; do not improvise a meme format here.
   Skip it when the relationship
   needs explanation, distorts the claim, repeats another post's joke, or the exact template is
   unsafe for the subject.
   Never generate an imitation of a known template. The recognizable image is part of the format.
   A classic-template recommendation may remain review-only while rights are assessed. If the exact
   template cannot be used, choose another established template or move to the next format.
2. **Use a source capture next.** When no clean meme fits, show the real source if it supplies
   proof, context, tension, or comedy. Prefer a crude circle around the exact claim. Use a box,
   arrow, or highlight only when a circle cannot make the point legible. The capture should look
   like somebody marked up a screenshot to show a colleague.
3. **Use a workbench photo last.** Reach for a synthetic notebook, whiteboard, scratch calculation,
   or generic printout only when neither a meme nor the real source carries the point well. Invoke
   `imagegen` and follow the synthetic-image boundary below.

Do not downgrade a strong meme merely to manufacture batch variety. Record why a lower-ranked
format won whenever the post had a plausible meme option.

Do not make a fake screenshot with image generation. Do not turn a source screenshot into a
designed card. Do not use a workbench photo merely because a post needs an image.

## Batch rule

Every post gets one candidate, but a week should not look mass-produced.

- A batch may be meme-heavy when several posts each have a genuinely clear meme. There is no meme
  quota or cap. Do not repeat the same template or joke mechanism within one batch unless the
  repetition itself is the point.
- Vary the physical setup across workbench photos. Repeating the same desk, handwriting, props,
  camera angle, or lighting counts as repeating the image.
- Avoid five screenshots with identical red boxes and crops. The source pages should retain their
  own shape and character.
- These are selection rules, not quotas. A format can be absent when it does not fit.

## Workflow

1. Read the post and its sources. Test the meme option first, then a marked-up real screenshot,
   then a synthetic workbench photo. Stop at the first option that carries the concept cleanly.
2. When called by an autonomous authoring workflow, it may render one recommendation and one
   meaningfully different backup without waiting for a user choice. Store both in that run's
   research candidate manifest. Put only the recommendation in
   `app/linkedin/<newsletter-slug>/visuals/campaign.jsonl`, with `recommended_by: "agent"`.
   Standalone use may still ask the user to choose. Compute `post_body_sha256` from the Markdown
   body. Every candidate stays coupled to one post.
   If the parent workflow is provisional and no real post path exists, keep the rendered assets and
   candidate manifest under that run's research directory. Do not claim the unified ledger or
   validator passed. Once the post is materialized, copy the recommendation under `app/linkedin/`,
   compute the real body hash, create the ledger row, and validate it.
3. Create the asset with its specialist workflow.

   For a source capture:

   ```bash
   mise exec imagemagick -- node app/scripts/render-source-captures.mjs \
     app/linkedin/<newsletter-slug>/visuals/source-captures.json
   ```

   For a classic meme, follow `social-meme-campaign`.

   For a workbench photo, use the built-in image-generation tool. Copy the chosen PNG into
   `app/linkedin/<newsletter-slug>/visuals/workbench-photo-options/`, record the full prompt and
   generation provenance in the ledger, and hash the final local file.
4. Validate the complete ledger:

   ```bash
   mise exec -- node app/scripts/render-social-visual.mjs \
     app/linkedin/<newsletter-slug>/visuals/campaign.jsonl --validate
   ```

5. Inspect each image at full size and around 300 pixels wide. Reject illegible text, malformed
   hands or objects, misleading crops, fake-looking source material, polished stock-photo staging,
   or repeated compositions.
6. Leave candidates at `status: "review"`. An agent recommendation does not write `visual:` and
   is not human selection. A user choice such as `visual: <row-id>` selects the asset but does not
   approve it, clear its rights, attach it, or approve the post.
   If Nick explicitly approves an exact displayed candidate-1 post-and-visual pair without naming
   a variant, that same approval selects candidate 1. Record `visual:` and the visual approval as
   separate state changes. Approval of post copy alone does neither.
7. After Nick explicitly approves that exact visual, record
   `approved: "Nicholas Major YYYY-MM-DD (via chat)"` and attach with:

   ```bash
   mise exec -- node app/scripts/attach-social-visual.mjs \
     app/linkedin/<newsletter-slug>/visuals/campaign.jsonl --write
   ```

## Synthetic workbench-photo boundary

A workbench photo is an illustration. Never claim or imply that it is Nick's real notebook, a
real meeting, a real office, a real historical scene, or a photograph of the source.

- Use mundane phone-photo framing, ordinary light, mild clutter, and one clear physical artifact.
- Keep readable writing short. Every factual number or claim must appear in the post's cited
  sources. The generated photograph is never the evidence for the claim.
- Generic printouts may provide texture, but their body copy must be unreadable. Never generate a
  fake publication masthead, company document, product interface, logo, quotation, or screenshot.
- Avoid staged coffee-and-laptop scenes, pristine desks, coordinated stationery, perfect
  handwriting, cinematic depth of field, and decorative distress.
- Record `synthetic: true`, the full prompt, and the generator in the campaign ledger. Alt text
  must call the image AI-generated or synthetic.
- Inspect hands, text, cables, keyboards, calculators, paper edges, shadows, and reflections.
  Reject visible generation errors rather than explaining them away.

## Gates

- Source every factual claim represented in any visual.
- A source capture gets an honest crop, one short optional caption, and no more than two crude
  boxes, arrows, circles, or highlights. Keep native typography and spacing. No branded frame,
  fake browser chrome, paper texture, logo, or decorative footer.
- A meme follows its template contract and separate rights review.
- Every visual needs useful alt text, recorded provenance, a current post-body hash, an asset hash,
  and a rights status.
- `owned`, `licensed`, `public-domain`, and `cc-compatible` assets can attach. An established meme
  template may also attach as `fair-use-approved` when the ledger records Nick's standing risk
  acceptance as `Nicholas Major 2026-09-29 (via chat)`. Nick instructed the workflow not to ask
  again for that general acceptance; exact post and visual approval are still required. Selection
  and design approval never override any other review-only rights status.
- Never overwrite or attach an approved asset. Never approve a visual or social post without
  Nick's explicit approval of that exact item.
- For long-running generation, record the job identity and expected artifact. Poll the same job
  after a timeout; do not launch a duplicate. Inspect every finished recommendation at full size
  and around 300 pixels wide before calling the visual stage complete.

## Return

Report the chosen format for each post, rendered paths, QA result, sources, provenance, rights
state, and whether each asset is only in review or ready for explicit approval. State post
approval and visual approval separately.
