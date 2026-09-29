# Site takes companion output

When the source essay is finalized and approved, generate zero to three short takes in
`app/src/content/takes/`. Takes are the one content type in this workflow that needs no human
approval.

1. Pull three to six standalone claims the essay actually makes.
2. Read every existing `idea:` in `app/src/content/takes/*.md`.
3. Write a canonical, framing-independent `idea` for each candidate.
4. Drop any candidate that repeats an existing claim or another candidate. A new wording or angle
   on the same claim is still a duplicate.
5. Keep the strongest zero to three. Zero is correct when nothing is fresh.
6. Use offsets 2, 4, and 6 in order and validate with `npm --prefix app run takes:lint`.

Each file has an empty body and this frontmatter:

```yaml
---
text: "One or two complete, on-voice sentences."
draft: true
source: <essay-slug>
offsetDays: 2
idea: "Canonical claim used for semantic deduplication."
pubDate: 2099-01-01
---
```

Never add `approved`. Never stamp the real date. `schedule-takes.mjs` derives it from the live
essay. Report generated takes as an FYI, not an approval request.
