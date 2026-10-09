---
name: meme-angle-selector
description: Find the strongest funny, surprising, and defensible angle in a source-backed post, then retrieve and rank established meme templates by semantic fit before any rendering. Use when choosing a meme for social content, comparing template options, or learning from past meme selections. Do not use to invent new templates or generate imitation template artwork.
---

# Meme angle selector

Choose the joke before choosing the image. A recognizable character or a topical keyword is not a
reason to use a template. The template must express the same relationship as the angle.

This skill selects established templates. `social-meme-campaign` owns contracts, rendering, rights,
and attachment after selection.

## Read first

1. Read the source post and its claim limits.
2. Read [angle-taxonomy.md](references/angle-taxonomy.md).
3. Read [template-selection-index.json](references/template-selection-index.json), then run
   `scripts/validate_selection_index.py`. This index covers every active template with semantic
   families, relationships, usage patterns, near neighbors, audience baggage, and familiarity.
4. Read [ranking.md](references/ranking.md) before scoring or comparing candidates.
5. Read [learning-loop.md](references/learning-loop.md) only when recording selections or performance.

## Selection workflow

### 1. Extract the comic payload

Write a compact angle packet before naming a template:

- `fact`: the checkable event or number;
- `expected`: what a reasonable operator would have expected;
- `actual`: what happened instead;
- `tension`: the specific gap between those two;
- `target`: the decision, process, incentive, claim, or institution the joke exposes;
- `reader_realization`: what should click before the reader sees the caption;
- `tone`: dry, incredulous, cautionary, delighted, or self-aware;
- `forbidden_targets`: affected people, individual workers, protected groups, or anything else that
  must not become the punchline.

If `expected` and `actual` do not create a real tension, a meme may be the wrong format.

### 2. Generate angles without templates

Produce four to six one-sentence angles from different mechanisms in the taxonomy. Each angle must
remain true when stripped of the joke. Reject generic observations and any angle that adds causality,
intent, or a number absent from the post.

Rank angles first on truth, operator recognition, surprise, visual compression, and whether the joke
aims at a decision or system rather than a person harmed by it. Keep the best two angles. Do not let
a favorite template determine this step.

### 3. Retrieve by semantic function

For each surviving angle, shortlist two to four active templates whose `meaning` and `invariants`
express that relationship. Check semantic roles, not the template name. A valid candidate maps every
story role to a declared slot without explanation or role reversal.

Use the local lexical retriever as one auditable candidate source, querying the abstract relationship
rather than company names or topic nouns:

```bash
mise exec -- python .skills/meme-angle-selector/scripts/retrieve_templates.py \
  "supposedly simple action blocked by years of hidden setup" \
  --mechanism hidden_constraint --limit 8
```

Retrieval creates a diverse shortlist. It does not pick the winner. Add a template the retriever
missed when contract reasoning supports it, and record why.

After shortlisting, read each candidate's complete contract, including anti-patterns, ordered slots,
word limits, fixed phrases, and invariants. Record the catalog hash and active count in the packet so
the run proves which catalog it searched.

Use the full active catalog. Do not default to the first familiar template, the most popular image,
or the last template used successfully. Do not use hold, rejected, or uncontracted templates.

### 4. Instantiate and render the shortlist

Map each source fact or story role to an exact contract slot. Reject the candidate when a role has to
change meaning. Write one concise caption for every surviving template, then use
`social-meme-campaign` to render each at actual output size. Inspect at full and phone size before
scoring humor. Retrieval chooses candidates; it does not choose the winner.

### 5. Rank rendered candidates

Create a JSON packet matching [selection-packet.example.json](references/selection-packet.example.json).
Score candidates using [ranking.md], with a concrete reason for every score. Run:

```bash
mise exec -- python .skills/meme-angle-selector/scripts/rank_candidates.py <packet.json>
```

The score does not replace editorial judgment and exact ties do not resolve by input order. Inspect
the top three pairwise. Prefer the template
that makes the sourced tension apparent fastest, needs the least caption text, reads correctly to a
skimmer, fits the audience's cultural knowledge, and does not repeat the recent feed.

Record the recommendation, pairwise reason, and confidence. Keep one alternative only when it
represents a different angle or joke mechanism that could reasonably change the choice. Return
`NO_MEME_FIT` when no candidate clears the relationship and rendering gates.

### 6. Resolve the batch

After individual selection, compare the whole batch for repeated templates and repeated joke
mechanisms. Freshness is a batch assignment, not a self-score inside one post. Reconsider the weaker
item when one template wins several posts. Record the result using [batch-assignment.md](references/batch-assignment.md)
and validate it with `scripts/validate_batch_assignment.py`. Never generate a replacement image for
an established template.

## Learning boundary

Do not fine-tune a model on a handful of subjective choices. First accumulate structured decisions:
the angle packet, complete shortlist, scores, selected template, Nick's accept/reject/edit, and later
performance. Use rejection reasons to improve contracts and ranking examples. Treat reach as one
signal, not ground truth for humor or fit.

## Return

Return the comic payload, ranked angles, top three template candidates with score reasons, the
recommended template first, and at most one genuinely different alternative. State `NO_MEME_FIT`
when no active template survives. Never render a weak meme merely because the post needs an image.
