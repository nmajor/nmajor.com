# Astra pitch report: Rockwell publish week

Prepared September 29, 2026. This file is the newsroom researcher's analysis, saved in `raw/` at the orchestrator's request. Downloaded HTML alongside it is unedited source material. No posts were drafted or approved.

## Recommended slate

Reserve Tuesday for the existing Rockwell companion. Select exactly four independent stories:

| Offset | Story | Editorial job | Freshness |
|---|---|---|---|
| 1 | FavTrip and Mary | A small operator's agent earned permission to handle a supplier exception | September 8 reporting |
| 2 | Domtar | Cautionary recovery after AI sensors did not translate into a working maintenance response | September 1 reporting |
| 3 | Odyssey Logistics | Preserve business rules inside legacy forms while changing the cost of modernization | September 23 disclosure |
| 6 | STG Logistics | Test the hardest real tenders before automating routine entry | Durable older case, newly examined here |

FavTrip has the strongest broad-reach potential, so it is the sole proposed spike. That is a hypothesis based on named operators, tangible stakes and an unusual small-business case, not a promise of reach. The other stories are baseline posts. Leave both weekend slots empty.

The pool contains 16 independent pitches, four selected. Normalized evidence, scores, decisions and exact source URLs are in `../pitches.jsonl`. Rockwell is not counted as an independent pitch.

## Selected stories and claim boundaries

### FavTrip

[CStore Decisions, September 8](https://cstoredecisions.com/sultans-ai-agents-pay-off-for-favtrip/) directly interviews founder Babir Sultan. Mary progressed from invoice-status reporting to flagging discrepancies, then emailing preidentified vendors with Sultan copied. He told the vendors about the bot first. According to Sultan, it spotted a $25,000 delivery invoice allocated to the wrong store and requested clarification.

Use the staged permission sequence as the mechanism. Keep the number attributed. This is one caught misbilling, not annual savings, proven ROI or an independently audited result. The source also says the agent makes mistakes and Sultan corrects it. The other three agents at FavTrip have no equivalent quantified result in this report.

Raw: `favtrip-source.html`.

### Domtar

[Business Insider, September 1](https://www.businessinsider.com/simple-administrative-fix-manufacturing-ai-sensors-predictive-maintenance-2026-9) interviews reliability engineer Matthew McLaughlin and Waites' CEO. A motor failed after AI-assisted vibration sensors were already installed. McLaughlin began using the analyst support included in the service, increased the calls to weekly, provided other diagnostic readings and tracked maintenance action items and their age.

This qualifies as cautionary recovery. Do not say AI caused the motor failure, that every alert was ignored, or that the company replaced a failed model. It is predictive maintenance, not confirmed generative AI. McLaughlin estimates about 1,547 avoided downtime hours, but the article supplies no measurement period, independent comparison or AI cost. The recovery mechanism is strong enough without that number.

Raw: `domtar-source.html`.

### Odyssey Logistics

[Cognizant's September 23 release](https://news.cognizant.com/2026-09-23-Cognizant-and-Cognition-put-autonomous-AI-engineering-into-production-at-Odyssey-Logistics,-with-a-37-percent-net-cost-saving) identifies a seven-person team converting Access/VBA forms with Devin while preserving their operating rules. A lead or architect reviewed each change. It reports 37% net cost savings against a conventional approach and roughly one-third higher throughput. A current phase is live; the broader program continues.

The 21-day result belongs to a preceding pilot on a separate standalone application. It is not the duration of the entire transport-platform migration. The comparison is supplier/customer-reported; absolute costs and calculation details are absent. Cognizant's separate 50% and five-to-six-times performance figures are not Odyssey results. Emphasize the legacy business logic and constrained modernization project, not a generic human-review lesson.

Raw: `odyssey-source.html`.

### STG Logistics

The original [Pallet customer case](https://www.pallet.com/customers/stg-logistics) is substantially stronger than September's repackaged article. It identifies messy real documents, 45 fields per order and a customer decision to test difficult orders first. Its 95% touchless figure applies to the orders Pallet processed, with human exception handling. A [public STG post](https://www.linkedin.com/posts/stg-logistics_appreciate-the-partnership-with-the-pallet-activity-7452814092492251136-LrU7) confirms the collaboration and reported gains.

The customer post already predates September by months. Treat this as the one durable older case. Do not claim 95% of all STG orders, perfect accuracy, 15 eliminated jobs or 80% company-wide savings. The primary case has no audited measurement period. Prefer the hardest-orders-first acceptance test over a headline stacking several unaudited percentages.

Raw: `stg-primary.html`. The discovery excerpt for the September repackaging remains in `research/discovery/2026-09-29/raw/exa-enterprise-workflows.json`; fetching that secondary page returned HTTP 403. The verified vendor page supplies the full case.

## Duplication decisions

I searched active `app/linkedin/`, essays and takes for every shortlisted subject and read the nearest conceptual overlaps. FavTrip, STG, Domtar, Odyssey, Prudential and Intact had no name matches. That alone was not enough to pass.

- Domtar is adjacent to `fix-the-process-first`, but the retained claim is narrower and supported by fresh reporting: already-included analyst support was underused, then paired with a recurring diagnostic and action-follow-through process. Do not append the old generic process-first lesson.
- Odyssey differs from the SaaS-replacement thesis in `build-versus-buy-broke`. The retained angle is preserving business rules in legacy forms. Do not turn it into another version of `the-bottleneck-moved` by making signoff the whole point.
- STG differs from both stories despite sharing logistics with Odyssey. Its subject is difficult document acceptance tests for ongoing order intake, rather than software modernization.
- Prudential is the strongest reserve. The primary release confirms an actual September 9 launch, whereas the discovery digest used the September 28 recap date. Its point-of-sale preliminary guidance is real, but it overlaps the existing work-before-signoff argument more than Odyssey does.
- Intact remains a reserve pending detailed measurement mechanics. The recent Farmers issue and value-dashboard post already question aggregate AI benefit claims; another unexplained total would repeat that conversation.
- Kinney Drugs is rejected because `second-deployment-is-smaller` and `personal-kinney-narrowed` already covered it. UnitedHealth is rejected because the claims-denial distinction already sits in the published accountability corpus and current legal details would require another verification pass.
- Aviva and Novo Nordisk are rejected for repeating this week's retrieval/expertise-transfer companion. Oracle repeats the downstream bottleneck thesis. Zarasa repeats the undocumented-process argument and lacks a named client.

## Cautionary desk result

Domtar wins on specificity and named reporting. The anonymous $50,000 agent-loop article does not pass: neither the company nor the alleged underlying Mandiant evidence has been verified in this packet. A sensational number cannot compensate for that absence. Zarasa has the same evidence weakness and a duplicate thesis. Kinney is credible but already covered. No cautionary quota was used to force an unverified disaster story into the slate.

## Evidence quality and remaining checks

FavTrip and Domtar are reporting based on named participants; their outcomes still remain participant claims. Odyssey is a supplier release carrying a customer quote. STG is a vendor case with customer confirmation, not an independent audit. Those distinctions belong in the drafts where the quantitative claim appears.

The source packet supports cautious case-study posts. It does not support claims about general AI success rates, comparative model quality or guaranteed financial returns. The other 12 candidates are explicitly rejected, held or reserved; excerpts are enough to explain why they lost, but not enough to promote their claims automatically into publication.

Image concepts in the pitch file are feasibility notes, not finished images or approved assets. No proposed judgment is attributed to a new conversation or personal experience Nick has not supplied.
