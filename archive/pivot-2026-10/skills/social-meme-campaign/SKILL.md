---
name: social-meme-campaign
description: Create, calibrate, render, QA, and optionally attach deliberately scrappy, classic-template memes for nmajor.com social posts. Use for applied-AI LinkedIn meme concepts, known meme-pattern selection, batch review sheets, template-catalog upkeep, rights checks, or scheduler-ready media under app/linkedin/. Skip generation for posts that already declare media unless Nick explicitly asks to replace it.
---

# Social meme campaign

Make actual memes: familiar template images, crude overlaid text, and a pattern whose
meaning matches the joke. Do not turn them into branded illustrations or polished social
cards. The jank is part of the format.

## Read first

1. Read `overview.md`, the target `app/linkedin/<essay-slug>/` batch, and the parent
   essay only when a post lacks context.
2. Read `.skills/writing-voice/SKILL.md`, `.skills/writing-voice/voice-nick.md`, and
   `.skills/writing-voice/blacklist.md` before writing meme text or alt text.
3. Read [template-contracts.json](references/template-contracts.json) and
   [campaign-schema.md](references/campaign-schema.md). When adding or changing
   templates, also read [catalog-method.md](references/catalog-method.md).
4. Use the local catalog in `assets/templates/`. Run `scripts/sync_templates.py` only
   when a required template is missing or the user asks to refresh the catalog.

## Catalog upkeep

- The `admission.active` list in the contract file is the runtime allowlist. Never
  generate from `hold`, `rejected`, or an uncontracted remote catalog entry.
- Use `scripts/list_templates.py` to scan active patterns by meaning before choosing;
  do not choose from image recognition alone.
- A contract must include its meaning, a direct AI writing guide, anti-patterns,
  ordered semantic slots, relationship invariants, and a rendered operator example.
- Use `scripts/validate_template_catalog.py` before and after synchronization.
- Run `scripts/render_template_catalog.py` and inspect the contact sheets whenever a
  contract or renderer mapping changes.
- Keep semantic evidence and exact-art rights separate. Familiarity, open metadata,
  open-source rendering code, or a successful render never clears the background art.
- `hold` means the pattern needs better semantic, safety, or legibility evidence.
  `rejected` preserves the research decision so the same bad candidate is not
  repeatedly rediscovered.

## Visual rule

- Use a well-known template whose established meaning fits the post.
- Preserve the template's native composition and low-rent meme feel.
- Use the template's default font and placement. Large, blunt text wins.
- Do not add the Nicholas Major logo, brand palette, borders, paper texture, editorial
  illustration, AI-generated characters, a 1080×1350 frame, or design-system polish.
- Slightly awkward line breaks and compressed JPEGs are fine. Wrong template semantics
  are not.

Never generate replacement artwork for a meme template. The familiar image is part of the meme's
meaning. If the exact template cannot be used, choose another established template, move to a real
source capture, or use no meme.

## Workflow

1. Inventory the batch. Skip generation for every post with non-empty `media:`. Still
   report obvious quality or rights blockers on existing media. Never overwrite it.
2. Abstract the story before writing. Identify the reusable decision error, incentive,
   risk pattern, or operational truth behind it. The named company is evidence for the
   post, not the meme's punchline. Make the operator the observer, not the fool.
3. Run `meme-angle-selector` to generate the comic payload, compare distinct angles, and rank
   established templates before choosing a contract. The image pattern carries meaning, so every slot
   must perform its declared role. When the user asks for variants, use different
   template relationships and joke mechanisms. Do not relabel the same punchline five
   times.
   In an ordered review set, option 1 is the recommendation. Later options exist only when
   they express a genuinely different relationship or framing. Never duplicate a rendered asset
   under a second label, and never describe a text-only change as an image variant.
4. Use short text. Do not add factual claims that are absent from the post. Reject a
   concept that needs the LinkedIn caption to explain the template relationship.
5. For scheduler-facing recommendations, write JSONL to
   `app/linkedin/<essay-slug>/memes/campaign.jsonl` with `status: "draft"` and
   `attached: false`. In delegated weekly-newsroom mode, body and image variants stay entirely
   under the run directory: use `research/linkedin-weekly/<run-id>/variant-memes/campaign.jsonl`,
   keep each asset inside its variant post's research directory, and never attach it directly.
6. Validate concepts:

   ```bash
   python .skills/social-meme-campaign/scripts/validate_campaign.py \
     app/linkedin/<essay-slug>/memes/campaign.jsonl
   ```

7. Render classic-template review drafts with the hosted Memegen renderer. It uses the
   same IDs as the local catalog and records the canonical render URL and asset hash:

   ```bash
   python .skills/social-meme-campaign/scripts/render_campaign_drafts.py \
     app/linkedin/<essay-slug>/memes/campaign.jsonl
   ```

8. Review only the rendered images. For each one, identify the template relationship,
   paraphrase the joke, name the audience, and check legibility at thumbnail size.
   Reject the wrong pattern, unclear labels, advice-first copy, or a joke that punches
   down. Leave survivors at `status: "review"`.
9. Record the chosen option in the target post's frontmatter as a repo-relative asset
   path, for example `meme: app/linkedin/<essay-slug>/memes/options/...jpg`. A direct
   choice such as "this one" selects it. A request to adjust one exact meme also selects
   that option; rerender it and update `meme:` in the same turn. Selection does not grant
   approval, clear rights, set `media:`, or authorize publishing.
   When Nick explicitly approves an exact displayed candidate-1 post-and-meme pair without naming
   another candidate, that approval also selects candidate 1 and the agent records its `meme:` path.
   Approval of post copy alone does not select or approve a visual.
10. Treat Memegen and classic-template art as `fair-use-review` by default. The open-source
    renderer does not grant rights to its background images. Before production, record a
    publishable rights status for the exact template asset. Nick accepted the fair-use risk for
    established meme templates on 2026-09-29 and instructed the workflow not to ask again. After
    he approves an exact post-and-template pair, record `fair-use-approved` and
    `accepted_by: Nicholas Major 2026-09-29 (via chat)` in the scheduler-facing ledger. This
    standing acceptance does not approve the copy or visual selection and does not cover invented
    imitation templates.
11. After Nick explicitly approves each exact rendered meme, record
   `status: "approved"` and
   `approved: "Nicholas Major YYYY-MM-DD (via chat)"`. This approves the meme only,
   not the LinkedIn post. Then run:

   ```bash
   python .skills/social-meme-campaign/scripts/validate_campaign.py \
     app/linkedin/<essay-slug>/memes/campaign.jsonl --publish
   python .skills/social-meme-campaign/scripts/attach_media.py \
     app/linkedin/<essay-slug>/memes/campaign.jsonl --write
   npm --prefix app run linkedin:lint
   ```

12. Never set or clear the post's `approved`, `shadowedAt`, or `pushedAt`. Do not connect
   accounts or schedule externally unless Nick explicitly asks.

## Hard gates

- Require `audience: "ai-decision-maker"`, a specific `operator_moment`, correct slot
  mapping, useful alt text, a matching post-body hash, and a local catalog template.
- Reject corporate phrasing, generic AI futurism, duplicate jokes, fear bait, humiliation,
  protected-class jokes, injuries, disasters, or unsupported claims.
- A verified cautionary story is eligible. The meme must clarify the decision error, incentive,
  or recovery and may not turn affected customers or individual employees into the punchline.
- Treat `unverified`, `fair-use-review`, and `classic-template-preview` as review-only. An exact
  approved established-template pair may move to `fair-use-approved` under Nick's standing
  acceptance; do not ask him to repeat it.
- Treat `meme:` as the chosen review asset and `media:` as the scheduler attachment.
  Never infer approval or publishable rights from selection.
- Never attach a review meme. The attachment script fails closed on approval, rights,
  file hash, existing media, or a pushed post.
- Prefer no meme over a template that only sort of fits.

## Return

Return the campaign ledger, local template assets used, rendered review set, QA result,
rights blockers, attachment changes, and current asset gate: `DRAFT`, `REVIEW`,
`PRODUCTION-READY`, or `EXPORTED`. Order the recommendation first and show each path once.
State LinkedIn-post approval separately.
