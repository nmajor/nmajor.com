# Claim audit, October 6, 2026

I checked the essay and all five LinkedIn drafts against the full source captures. The court's scanned decision was also checked visually on pages 8, 13 and 14. The main numerical and attribution risks have been corrected. Branch's revision separates its measured intake figure from vendor-wide capabilities. No consequential copy blocker remains.

This audit covers copy, not meme captions, image rights or scheduling. Nothing here grants publication approval.

## Source key

- **JPM**: `research/discovery/2026-10-06/raw/05-jpmorgan-lockbox.html`, the bank's original May 27, 2026 HTML. Relevant paragraphs are at lines 2880 and 2948-2975.
- **Newsroom**: `raw/02-full-source-pages.json`, full XPT primary release and Automation Today interview with Tokio Marine HCC executive Tamer Assaad.
- **Branch**: `raw/04-cautionary-full-and-branch-primary.json`, September 30 Liberate release on BusinessWire. Its Branch-specific paragraph is at captured line 38; product capabilities are at line 41.
- **Court**: `raw/elliott-dechert-copy.pdf`, the original decision hosted by Dechert. Its text extraction is empty because the PDF is scanned. Original page images `/tmp/elliott-page-7.png`, `/tmp/elliott-page-12.png` and `/tmp/elliott-page-13.png` were visually inspected.
- **Legal commentary**: Dechert's September 30 analysis and Reason's August 13 direct court excerpts in `raw/04-cautionary-full-and-branch-primary.json`.

## Newsletter and companion

Artifacts: `app/src/content/essays/jpmorgan-ai-in-the-mailroom.md` and `app/linkedin/jpmorgan-ai-in-the-mailroom/personal-staples.md`.

| Claim | Original evidence | Finding |
| --- | --- | --- |
| More than 130 million checks in 2025 | JPM line 2880 gives year, check count and J.P. Morgan Payments scope. | Supported. This is the bank's operation, not the robot's throughput. |
| Robot deployed in 2025 at one lockbox site, developed with Ripcord | JPM lines 2948-2951 name year, one site and partner. | Supported. Copy correctly limits rollout scope. |
| Opens envelopes, unfolds contents, separates pages, removes staples, tracks content and scans documents | JPM line 2951 explicitly lists these actions. | Supported. |
| More than 4,000 permutations | JPM line 2952 describes envelope and document permutations, layouts and content types. | Supported as the bank's capability claim. |
| Platform rebuilt in 2020, AI extraction, validation and review, LLMs added for complex review | JPM lines 2954-2955. | Supported. The precise LLM introduction date is absent; copy gives none. |
| Roughly 13 billion annual keystrokes largely automated | JPM line 2957. Internal-data footnote at line 2975. | Supported as a wider lockbox claim. Correctly withheld from one robot or LLMs alone. |
| Operators see throughput, exceptions and turnaround times; assistant answers process questions | JPM lines 2955 and 2958. | Supported. |
| No public robot cost saving or independently checkable measurement detail | Full JPM article gives neither robot economics nor measurement method beyond internal-data attribution. | Supported description of this source's limits. It is not a claim that no unpublished analysis exists. |
| Physical intake feeds the existing document system | JPM connects the robotics disclosure to the earlier processing platform. | Editorial interpretation of the disclosed sequence. It does not establish a specific API or technical architecture. |

The explanatory definition of lockbox is ordinary background consistent with the source's account. No consequential unsupported JPMorgan claim found.

## Branch intake post

Artifact: `app/linkedin/jpmorgan-ai-in-the-mailroom/personal-branch-intake.md`.

| Claim | Original evidence | Finding |
| --- | --- | --- |
| Branch moved first notice of loss to voice AI and digital intake | Branch captured line 38. | Supported as Liberate's account. |
| About seven minutes versus more than twelve, reported 42% reduction | Same paragraph gives both durations and percentage. | Supported as reported. Rounded durations do not independently calculate an exact percentage. |
| Figure concerns reporting, not settlement | Source labels the activity reporting a claim. | Correct scope restriction. |
| Liberate integrates with core systems and escalates to humans | Branch captured line 41 names core systems and supervisor escalation. | Supported for Liberate's platform. Exact Branch integration/configuration is not separately disclosed there. |
| Round-the-clock vendor service | Full PYMNTS capture in `research/discovery/2026-10-06/raw/04-unilever-liberate-full.json`, captured line 22, describes 24/7 coverage buying. BusinessWire describes after-hours voicemail handling. | Supported as vendor-wide capability; revised copy no longer assigns it specifically to Branch. |
| No sample or measurement period | Full release publishes neither. | Supported source limitation. |
| An intake agent should be judged on the record it leaves as well as duration | Revised closing paragraph gives Nick's evaluation criterion rather than claiming an exact Branch integration. | Editorial-proposal. No unsupported Branch-specific result asserted. |

## Tokio Marine manual post

Artifact: `app/linkedin/jpmorgan-ai-in-the-mailroom/personal-tokio-marine-manual.md`.

| Claim | Original evidence | Finding |
| --- | --- | --- |
| Entire manual supplied, later narrowed to relevant portions, improved specificity | Newsroom interview captured line 29 explicitly states the sequence and reported improvement. | Supported as Assaad's account. No quantified effect. |
| Pre-production testing | Captured line 34 says user acceptance testing and approaching production. | Supported. No achieved production ROI claimed. |
| Agents prioritize submissions; underwriters decide acceptance | Captured lines 21-23. | Supported. |
| Underwriters involved; scores carry reasons | Captured lines 30 and 35-37. | Supported. |
| Plans to evaluate speed and conversion | Captured line 34 names speed-to-quote and conversion ratios. | Supported. |
| More material did not improve the specific answer | Manual-narrowing account supports this interpretation. | Editorial-proposal, not an experiment with a published benchmark. |

No consequential unsupported claim found. Publication-day metadata disagrees; the post wisely asserts no exact interview publication day.

## XPT small accounts post

Artifact: `app/linkedin/jpmorgan-ai-in-the-mailroom/personal-xpt-small-accounts.md`.

| Claim | Original evidence | Finding |
| --- | --- | --- |
| October 1 announcement; small accounts can take nearly as much work with a fraction of premium | Newsroom XPT captured lines 93-94. | Supported as XPT's diagnosis. |
| Binding tool sends to up to 20 markets in parallel through direct connections | Captured line 111 explicitly gives this binding-tool scope. | Supported. Correctly distinguished from 100-market brokerage search at line 112. |
| Expert reviews and remains accountable for placement | Captured lines 90 and 111. | Supported. |
| No new portal, no re-keying, existing retail workflow | Captured lines 90 and 115-117. | Supported as XPT's claim. |
| Company does not isolate growth contribution or disclose tool costs | Full release gives mixed growth figures without controlled attribution or costs. | Supported limitation. |
| Wholesale processing makes broad searches more practical for lower-revenue accounts | Captured line 104 explicitly describes shifting processing to wholesale and widening search. | Editorial interpretation consistent with the company account, not independently measured economics. |

No consequential unsupported claim found.

## Elliott hidden instructions post

Artifact: `app/linkedin/jpmorgan-ai-in-the-mailroom/personal-hidden-instructions.md`.

| Claim | Original evidence | Finding |
| --- | --- | --- |
| Tiny white-on-white messages intended to favor plaintiff | Direct court excerpts in Legal commentary describe entries 177 and 178 and their instructions. | Supported. |
| Attempt failed; court did not use AI to review or decide; judge worked from printed motion | Court page 8 explicitly states all three and says hidden instruction had no impact on a ruling. | Verified against original image. |
| Repeated concealed messages after warning led to loss of e-filing | Court page 13 describes continued messages, including later jokes and video links, and rescinds electronic filing. | Verified against original image. Copy says messages, not repeated successful injections. |
| AI-assisted drafting allowed with independent verification | Court page 14, order item 2. | Verified against original image. AI itself was not banned. |
| August 6 decision and September 30 commentary | Legal commentary capture supplies both dates. | Supported; old event and new commentary remain separate. |
| Incoming documents can contain instructions for reviewing software | Court describes this attempted mechanism. | Editorial interpretation. No actual compromise of a reviewing model demonstrated here. |

No consequential unsupported claim found. The hosted PDF is an original court document on a law-firm server, not a successful direct download from the court endpoint. The official link remains recorded in evidence.md.

## Scope correction and final binding

Branch's first draft applied vendor-wide capabilities too directly to the named customer. The final draft attributes those capabilities to the vendor and explicitly says no Branch-specific escalation results were published. That resolves the concern. JPMorgan's companion now says the robot feeds the processing platform and uses "something" for staple removal, consistent with its automated intake account.

The final checked file SHA-256 values are:

| Artifact filename | SHA-256 |
| --- | --- |
| Essay `jpmorgan-ai-in-the-mailroom.md` | `b3a17ee57bb36eaf83db32705198df96b8e77130aafbc6eb208e281b0fd73cfe` |
| `personal-branch-intake.md` | `43bcce9133a07ddd2588e259d704d9607b71e4664b853ac5c65e60a5ad75408d` |
| `personal-hidden-instructions.md` | `e1d79dc808969645562572f546a364e0a2424b08ccbe20cbdb04c50d8bfbf2f1` |
| `personal-staples.md` | `d65e0a4a4cebd30b14fb04c17c729ed818647dba9ce299d5b46b22d11850eece` |
| `personal-tokio-marine-manual.md` | `cbd2c942691c9fe9dcc76388239170f9339f798202d3c49479305bd5916e8b0d` |
| `personal-xpt-small-accounts.md` | `eb58147e5de5120dcbe1529a9b0bef975950edc6785ce9038c093a5f69cc7ceb` |

The closing judgments across the batch are editorial proposals. They do not supply new production metrics, independent validation, or approval to publish.
