# Batch assignment

After every post has a validated selection packet, write one batch JSON file:

```json
{
  "version": 1,
  "recent_template_ids": ["drake"],
  "assignments": [
    {
      "post_id": "example",
      "packet": "research/example/selection.json",
      "packet_sha256": "...",
      "template": "mordor",
      "mechanism": "hidden_constraint",
      "collision_reason": null
    }
  ]
}
```

Use `NO_MEME_FIT` with mechanism `none` when a post has no meme. `collision_reason` is required when
the same template appears in recent use or more than once in the batch, or when a mechanism repeats
inside the batch. The reason must explain why repetition is stronger than the next eligible choice.

Validate with:

```bash
mise exec -- python .skills/meme-angle-selector/scripts/validate_batch_assignment.py <batch.json>
```
