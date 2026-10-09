# Fable independent workflow review

Run on 2026-09-29 through Claude Code's available `fable` model alias in read-only plan mode. Fable
did not read Astra's review and did not edit the repository.

## Verdict

Keep the existing publication controls: per-item approval, `pushedAt` idempotency, Postiz identity
verification, `mediaRequired`, and body/asset hashes. The autonomy problems are upstream of
publication.

Fable found these concrete blockers and contradictions:

- The old repurposing skill fixes the week at five weekdays and keeps independent reporting tied to
  the essay's theme.
- Hooks and focus-group skills require a human response during generation.
- The visual validator caps classic memes at 40 percent even though the current editorial policy
  has no cap.
- The unified visual tools accept PNG only while classic meme rendering produces JPEG.
- Classic-template art defaults to review-only rights, so the preferred format often cannot be
  attached. Fable recommends an owned re-creation as the default recommendation and a familiar
  classic-template render only as a review alternative unless exact rights are cleared.
- The meme skill's blanket rejection of fear and disasters conflicts with careful cautionary
  reporting. The joke should target the decision error or incentive, never harmed people. Serious
  injury or death stories should use source evidence rather than a meme.
- A “first comment” link rule describes a feature the scheduler does not have.
- The hook skill's 210-character desktop guidance conflicts with the 140-character lint rule.
- Existing lint does not constrain a new weekly slate to seven unique daily offsets or require a
  rendered visual recommendation for every post.

## Proposed operating rules

Fable proposed one autonomous orchestrator with resumable stages for inputs, pitch gathering,
evidence packets, hard gates, scoring, drafting, bounded critique, visuals, validation, and the
review packet. Optional opinion changes rankings or supplies a judgment but never overrides an
evidence failure. Missing opinion is logged and the run continues with clearly marked editorial
proposals.

For cautionary coverage, Fable recommended actively considering at least two evidence-backed
failure pitches, allowing no more than two to ship, and measuring the rolling mix so reach does not
turn the feed into a fear channel. The integrated design keeps this as a strong selection preference
rather than a rigid publication quota.

Historical performance should be preserved raw, coded blind before metrics are exposed, and used
only when a feature has enough examples. Any performance prior gets a small capped influence on
ranking. It never changes evidence, diversity, rights, or approval gates. The importer should wait
for Nick's real export because its format is not yet known.

## Integration decision

Fable proposed a new `weekly-linkedin-slate` skill. Astra proposed upgrading the existing
`content-repurposing` skill. The implementation keeps `content-repurposing` as the sole entry point
to avoid two overlapping weekly authorities. It adopts Fable's stage model, visual fixes, timing
validation, historical-learning caution, and approval invariants.
