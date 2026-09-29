# LinkedIn posting-time priors for a US-heavy professional audience

Date: 2026-09-29

## Recommendation

Use the following Tuesday-through-Monday schedule as a starting prior, not an algorithm rule. The five normal publishing days are Tuesday, Wednesday, Thursday, Friday, and Monday. Weekend slots stay available for unusually strong posts or deliberate experiments.

| UTC day | UTC time | US Eastern / Pacific during daylight time | Role | Confidence |
|---|---:|---:|---|---|
| Tuesday | 15:00 | 11 a.m. / 8 a.m. | Newsletter companion, fixed at issue time plus one hour | Medium for the constraint, low as a universal optimum |
| Wednesday | 20:00 | 4 p.m. / 1 p.m. | Strongest independent post | Medium |
| Thursday | 21:00 | 5 p.m. / 2 p.m. | Strong independent post | Medium |
| Friday | 19:00 | 3 p.m. / noon | Independent post | Medium |
| Saturday | 16:00 | noon / 9 a.m. | Optional sixth post | Low |
| Sunday | 13:00 | 9 a.m. / 6 a.m. | Optional seventh post and test slot | Low |
| Monday | 21:00 | 5 p.m. / 2 p.m. | Fifth normal post | Low to medium |

When US daylight saving time ends, these UTC slots become one hour earlier on local clocks. Keep UTC fixed for operational simplicity during the first test cycle, then decide whether preserving local time produces better results.

The schedule deliberately spans two plausible behaviors. Tuesday tests the older morning and workday view while respecting the newsletter's fixed cadence. Wednesday through Monday lean into Buffer's newer late-afternoon result while still landing inside the workday on the US West Coast.

## What the evidence supports

Three conclusions are defensible.

First, there is no universal best hour. LinkedIn's own guidance says location and audience behavior determine the answer, and its 2024 review highlights conflicts between major third-party studies. Account-specific testing remains the governing rule.

Second, weekdays are the safer prior for professional content. The current Buffer analysis favors Wednesday through Friday. Hootsuite favors Tuesday and Wednesday. LinkedIn's review of earlier studies also clusters around weekdays. The exact winner changes, but weekends usually trail.

Third, the hour evidence has shifted and conflicts. Buffer's September 2026 analysis of 4.8 million LinkedIn posts reports a 3-8 p.m. local window, with Wednesday at 4 p.m. strongest. Hootsuite's Q4 2024 heatmaps favor mornings on Tuesday and Wednesday. LinkedIn's older in-house observations found activity before work, at lunch, and in early evening. These are useful priors, not proof that LinkedIn changed its ranking system or that one hour causes reach.

## Why this schedule fits Nick's audience

The audience is US-heavy and professional, but the account posts from a UTC-based workflow. A single UTC time cannot be 4 p.m. in both New York and Los Angeles. The useful compromise is to anchor the late slots to Eastern late afternoon while keeping them inside Pacific working hours:

- 20:00 UTC reaches 4 p.m. Eastern and 1 p.m. Pacific during daylight time.
- 21:00 UTC reaches 5 p.m. Eastern and 2 p.m. Pacific.
- 19:00 UTC reaches 3 p.m. Eastern and noon Pacific.

That compromise also suits leadership readers, who may check LinkedIn between meetings or after the concentrated part of the workday. This is a plausible audience hypothesis, not something the aggregate studies directly measured.

Tuesday is different because the newsletter publishes at 14:00 UTC and the companion is meant to follow one hour later. A 15:00 UTC companion reaches 11 a.m. Eastern and 8 a.m. Pacific during daylight time. It falls inside the older morning-to-lunch evidence and preserves the editorial relationship between issue and post. The companion should not be moved merely to imitate an aggregate heatmap.

The Monday slot uses 21:00 UTC because Buffer found 5 p.m. local to be Monday's best practical daytime option, even though its unusual 10 p.m. result ranked first. Monday remains a lower-confidence day and should carry a solid baseline post rather than the week's best story.

Weekend slots are optional. Saturday at 16:00 UTC bridges noon Eastern and 9 a.m. Pacific, matching Buffer's Saturday morning result and Hootsuite's professional-services Saturday window. Sunday evidence is especially weak and contradictory. The proposed 13:00 UTC slot is an experiment that catches Eastern morning without pushing the post into Monday UTC.

## Source quality and limitations

### Highest relevance: Buffer 2026

Buffer's dedicated study is current and large, with more than 4.8 million LinkedIn posts. It reports local-time-normalized day and hour results and clearly names engagement as the outcome. It also includes personal brands as well as pages.

The limitations are substantial. The sample contains posts sent through Buffer, so it overrepresents people and organizations that use a scheduler. It is observational. Content quality, account size, format, topic, and existing audience may differ by posting time. The article does not publish uncertainty intervals or a causal design. Treat its 3-8 p.m. window as the strongest available prior, not a guarantee.

### Useful counterweight: Hootsuite 2025

Hootsuite says it analyzed more than one million social posts from 118 countries, localized by time zone, using Q4 2024 data. Its morning result prevents overconfidence in Buffer's later window.

Its visible methodology does not disclose the LinkedIn-only sample size, and the page contradicts itself by describing the overall peak as both 8-9 a.m. and 4-6 a.m. It deserves less weight than Buffer.

### First-party principle: LinkedIn

LinkedIn does not offer a current first-party universal time. Its official guidance says to locate the audience, test different times, and use analytics. Its 2024 article summarizes third-party research rather than presenting a proprietary experiment. This is strong guidance about method, not evidence for a particular slot.

### Context, not optimization evidence: Metricool 2026

Metricool's study is transparent about its sample: 673,658 posts from 63,108 global accounts, including Personal Profiles and Company Pages, across January-February 2025 and 2026. Its timing chart shows that 9 a.m.-noon is the most common publishing window. Posting volume is not engagement performance, so the chart cannot tell us the best time to post.

The more useful operational fact is that most post activity arrives early. Metricool reports nearly 40% of Personal Profile interactions on day one and says most impressions and interactions occur within two days. That supports consistent 48-hour measurement.

### Corroboration only: Sprout Social

Sprout says its timing series uses billions of engagements across thousands of profiles, but the captured overview does not expose the LinkedIn-specific sample or table. Its strongest contribution here is the recommendation to learn from the account's own history.

## Test plan

Run the schedule for at least eight weeks before making a permanent change. Five posts per week yields roughly 40 observations, still a small and confounded sample but enough to reject obvious failures.

Record for every post:

- exact UTC publication time and corresponding Eastern and Pacific local times;
- content lane, story strength, format, and whether it is the newsletter companion;
- impressions, reactions, comments, reposts, saves if available, profile views, and follower change;
- metrics at 48 hours and again at seven days;
- comments or inbound interest from the intended leadership audience, not only total engagement.

Do not compare raw engagement alone. Use engagement per impression alongside total impressions, and separate newsletter companions from independently reported stories. Timing should never be credited for a stronger topic or a better meme.

After eight weeks, compare three buckets:

1. morning and midday, 13:00-17:00 UTC;
2. Eastern late afternoon and Pacific midday, 19:00-21:00 UTC;
3. weekends.

If the late bucket wins across several content lanes, keep it. If Tuesday's fixed 15:00 UTC slot performs well only for newsletter companions, retain it as a content-specific slot rather than generalizing it. Drop weekend publishing if those posts consistently lose to weekday posts after accounting for story quality.

## Bottom line

The safest operating prior is five weekday posts, with the highest-value independent stories on Wednesday and Thursday around 20:00-21:00 UTC. Keep the Tuesday companion at 15:00 UTC because its relationship to the newsletter is more important than chasing an uncertain generic peak. Use Saturday and Sunday only when the content justifies them or when the workflow is intentionally gathering timing evidence.
