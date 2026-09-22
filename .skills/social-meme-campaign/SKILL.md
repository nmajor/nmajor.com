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

## Workflow

1. Inventory the batch. Skip generation for every post with non-empty `media:`. Still
   report obvious quality or rights blockers on existing media. Never overwrite it.
2. Abstract the story before writing. Identify the reusable decision error, incentive,
   risk pattern, or operational truth behind it. The named company is evidence for the
   post, not the meme's punchline. Make the operator the observer, not the fool.
3. Choose a contract before writing. The image pattern carries meaning, so every slot
   must perform its declared role. When the user asks for variants, use different
   template relationships and joke mechanisms. Do not relabel the same punchline five
   times.
4. Use short text. Do not add factual claims that are absent from the post. Reject a
   concept that needs the LinkedIn caption to explain the template relationship.
5. Write JSONL to `app/linkedin/<essay-slug>/memes/campaign.jsonl` with
   `status: "draft"` and `attached: false`.
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
10. Treat Memegen and classic-template art as `fair-use-review` by default. The open-source
   renderer does not grant rights to its background images. Before production, record a
   publishable rights status for the exact template asset or replace it with compatible
   art that preserves the same recognizable pattern.
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
- Reject corporate phrasing, generic AI futurism, duplicate jokes, fear, humiliation,
  protected-class jokes, injuries, disasters, or unsupported claims.
- Treat `unverified`, `fair-use-review`, and `classic-template-preview` as review-only.
- Treat `meme:` as the chosen review asset and `media:` as the scheduler attachment.
  Never infer approval or publishable rights from selection.
- Never attach a review meme. The attachment script fails closed on approval, rights,
  file hash, existing media, or a pushed post.
- Prefer no meme over a template that only sort of fits.

## Return

Return the campaign ledger, local template assets used, rendered review set, QA result,
rights blockers, attachment changes, and current asset gate: `DRAFT`, `REVIEW`,
`PRODUCTION-READY`, or `EXPORTED`. State LinkedIn-post approval separately.
