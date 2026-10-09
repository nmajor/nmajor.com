# Historical performance learning

This lane is optional. Its absence never blocks a weekly run.

## Ingest

When Nick supplies an export, screenshots, or a list of posts, preserve the originals under
`research/linkedin-performance/raw/`. Normalize what is available without turning missing fields
into zero:

- post ID, URL, exact text, timestamp, timezone, and media;
- impressions, reactions, comments, reposts, saves, sends, profile views, follows, and clicks;
- organic versus boosted status, spend when known, and collection date;
- viewer seniority, function, industry, company size, and in/out-of-network share when available.

Compare posts at similar ages. Separate paid and organic. Record follower count and platform era
when the data permits. Do not compare a lifetime total for an old post with a two-day total for a
new one as if exposure were equal.

## Blind coding first

Before looking at performance, have a subagent code each post for hook family, story shape,
positive/cautionary/neutral outcome, stakes, named subject, evidence strength, image format,
intended audience, length, CTA, specificity, and baseline/spike intent. Then join the codes to the
metrics.

Use medians, ranges, rates per thousand impressions, and sample sizes. One viral post is a lead,
not a rule. Compare cautionary and constructive posts with similar novelty and addressability so
emotion is not mistaken for reporting strength.

## Durable output

Write `research/linkedin-performance/report.md` and a compact
`research/linkedin-performance/current-patterns.json`. Each hypothesis needs supporting post IDs,
counterexamples, sample size, uncertainty, and one next test. Weekly runs read this compact summary
and the approved example IDs, never the entire raw export.

Performance findings adjust pitch scores and suggest experiments. They never weaken evidence,
voice, rights, approval, or audience-diversity gates. Review results in four-week cohorts and avoid
changing cadence, format, link placement, and audience framing at the same time.
