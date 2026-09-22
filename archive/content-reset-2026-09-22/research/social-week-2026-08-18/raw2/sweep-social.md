# Social sweep — Reddit / HN / X / Bluesky / YouTube / TikTok
Window requested: 2026-08-08 → 2026-08-18. Run date: 2026-08-18.
Target: operator threads at named non-tech companies describing real AI rollouts (what broke, cost, rollbacks).
Method: last30days engine v3.18.4 (219 items, 11 sources), plus direct HN Algolia queries, plus direct page fetches.

## Engine run (verbatim compact output saved separately)
Full engine output: research/social-week-2026-08-18/raw2/engine-compact.md
Engine raw save: ~/Documents/Last30Days/real-businesses-using-ai-in-production-what-broke-what-it-cost-rollbacks-raw-v3.md

Engine coverage counts (verbatim from footer):
- Reddit: 22 threads | 6,787 upvotes | 3,161 comments
- X: 9 posts | 226 likes | 23 reposts
- YouTube: 4 videos | 14,574 views | 4/4 with transcripts
- TikTok: 28 videos | 4,714,473 views | 607,861 likes
- HN: 46 stories | 8,707 points | 5,749 comments
- GitHub: 3 | Digg: 26 clusters | Techmeme: 2 | Perplexity: 46 | Web: 19
- Instagram: FAILED (HTTP 404) — do not read as "nothing on Instagram"
- Freshness warning emitted by engine: "only 68 of 219 dated items are from the last 7 days"

## Items actually seen, with URLs / dates / engagement / verbatim excerpts

### 1. KPMG Global AI Pulse — 49% of executives cut back AI agent rollouts on cost
- URL: https://www.prismnews.com/workplace/kpmg/kpmg-warns-executives-are-pulling-back-on-ai-agent-rollouts
- Date: 2026-08-09 | Author: Lauren Xu | prismnews.com
- Engagement: n/a (news page, no social counts captured)
- Retrieved by: last30days grounding/web source (score 65). My own direct fetch returned HTTP 503, so the
  text below is the engine's captured page excerpt, not a second independent read.
- VERBATIM (engine capture):
  "# KPMG warns executives are pulling back on AI agent rollouts
   Nearly half of executives cut back AI agent rollouts when costs beat expected value, a sign the market is
   shifting from deployment to value realization.
   Lauren Xu · 8/9/2026 · 2 min read
   ... KPMG's latest Global AI Pulse found that 49% of executives p[ulled back]..."
- Note: aggregator page carrying an "AI-generated illustration" credit. Primary KPMG Global AI Pulse report
  NOT independently verified in this run. Treat the 49% figure as unconfirmed at source.

### 2. Kinney Drugs pulls back its AI phone assistant "Burt"
- URL: https://vtdigger.org/2026/08/10/kinney-drugs-pulls-back-ai-tool-after-customer-complaints/
- Date: 2026-08-10 | Author: Tsehai Alfred | VTDigger
- Engagement: n/a (news page)
- Verified: YES — I fetched and read the page directly.
- VERBATIM: "When Kathy Callaghan called her local pharmacy for a prescription refill last Wednesday, she
  expected to hear the usual AI voice that had attempted to assist her for the last three months. Instead, a
  pharmacist picked up. 'We were thrilled,' she said... The call came as the pharmacy, Kinney Drugs, recently
  pulled back its AI assistant, John Marraffa, president of the Vermont and New York pharmacy chain, told WCAX
  on Friday. In May, Kinney Drugs had implemented the AI tool, named Burt after the pharmacy's founder, to
  improve patient communication and refill services. Customers, however, complained that it was coinciding with
  a range of issues, including medication delays, inaccurate refill information and general confusion. Privacy
  experts raised..."
- STATUS: ALREADY IN seen.txt (as https://www.wcax.com/2026/08/07/kinney-drugs-pulls-back-ai-phone-assistant-after-hundreds-customer-complaints/).
  Same story, different outlet. EXCLUDED from the report per instructions. VTDigger adds a named customer and
  the detail that the tool ran ~3 months (May → early Aug) and was named "Burt".

### 3. YouTube — "What an AI Automation Agency ACTUALLY Pays" (FTC v. Air AI)
- URL: https://www.youtube.com/watch?v=kjRNcHUIARc
- Date: 2026-08-11 | Channel: Actually Profitable
- Engagement: 43 views, 2 likes  (very low)
- Retrieved by: last30days YouTube source with transcript (score 68).
- VERBATIM (transcript/description capture): "In August 2025 the FTC sued Air AI, whose resale licence ran
  $25,000–$100,000 upfront; the complaint says it took roughly $19 million, some buyers losing as much as
  $100,000 each. This is the AI automation agency side hustle — selling chatbots and automation to small local
  businesses, checked against primary sour[ces]..."
- Note: names a company (Air AI) and hard dollar figures, but the underlying FTC action is from Aug 2025, not
  this window. Buyer-side, not an operator deployment story. Engagement is negligible.

### 4. TikTok — "A lot of companies are rehiring people after finding out how expensive and useless AI is"
- URL: https://www.tiktok.com/@christianjmaldonado/video/7671071365897686285
- Date: 2026-08-06 (OUTSIDE the 08-08 → 08-18 window by two days)
- Engagement: 143,551 views | 25,269 likes | 161 comments  (largest single-item engagement in the sweep)
- VERBATIM: "Basically, AI can do whatever regular employees do, but for cheaper. So I'll go ahead and lay off
  thousands of people. Sounds good to me. I'm not gonna regret this now, am I? No. This is gonna save you money.
  Here's your AI Bill. Wow, this is expensive. Yeah, we doubled the cost of tokens, so if you want to use AI,
  it's gonna cost you a lot of money. I th[ink]..."
- Note: satirical sketch. Sentiment signal, NOT an operator account. No named company.

### 5. r/sysadmin — "How much do you trust AI?"
- URL: https://www.reddit.com/r/sysadmin/comments/1vcpu1g/how_much_do_you_trust_ai/
- Date: 2026-08-01 (OUTSIDE window) | 556 upvotes, 552 comments
- Generic sentiment thread. No named company, no rollout detail in the captured evidence.

### 6. Perplexity Sonar aggregate (engine's top-scored cluster, score 75)
- No URL (synthesized answer, not a page). Cited 20 sources.
- VERBATIM: "Between July 19 and August 18, 2026, the main story was that enterprise AI pilots continued to be
  reported as failing to reach production, failing to deliver measurable ROI, or creating costly
  security/containment incidents rather than business value.[1][2][5][6] The strongest recurring numbers in the
  sources are 89% of AI agent pilots..."
- NOT USABLE AS A CITATION. It is a model-generated summary with no primary page behind it in this capture.
  Recorded here only so the record is complete.

## Direct HN Algolia sweep (window-restricted, created_at_i 2026-08-08 → 2026-08-19)
Queries run: "AI rollback", "AI pilot failed", "AI agent production", "enterprise AI cost", "AI customer
service", "rehiring after AI", "AI deployment", "chatbot replaced", "AI in production lessons", "AI layoffs
reversed", "rolled back AI", "AI agents rollback enterprise", "AI ROI enterprise", "AI chatbot customer
complaints", "insurance AI claims", "hospital AI", "bank AI deployment", "retail AI", "call center AI",
"AI cost overrun", "scrapped AI", "AI slop internal".

Everything above the engagement floor in that window was model/tooling/launch chatter — i.e. exactly the
categories excluded by the brief:
- Show HN: Needle2, 14MB agentic LLM | 2026-08-10 | 533pts 183cmt | https://news.ycombinator.com/item?id=49246804
- Launch HN: Bullet (YC S26), coding agent | 2026-08-13 | 117pts 88cmt | https://news.ycombinator.com/item?id=49283063
- Launch HN: Speko (YC S26), voice AI router | 2026-08-17 | 110pts 61cmt | https://news.ycombinator.com/item?id=49332751
- Launch HN: Stoa Markets (YC S26), GPU marketplace | 2026-08-10 | 77pts 51cmt | https://news.ycombinator.com/item?id=49246057
- Gentoo bugzilla closed due to AI bot scraper overload | 2026-08-08 | 173pts 114cmt | https://news.ycombinator.com/item?id=49221864
- Show HN: OJCP, agent-consumable job data protocol | 2026-08-12 | 38pts 10cmt | https://news.ycombinator.com/item?id=49273922
- Show HN: Doberman, watchdog to stop Claude deleting your DB | 2026-08-17 | 9pts 5cmt | https://news.ycombinator.com/item?id=49336757
ZERO named-company non-tech operator threads found on HN in this window.

## Sources that did not answer (do NOT read as "nothing there")
- Reddit direct API (site-wide and per-subreddit search): HTTP 403 Blocked / HTTP 429 on every direct query
  from this host. The 22 Reddit threads the engine collected were not re-emitted at item level by
  --emit=compact, so per-thread Reddit URLs beyond item #5 above were not recoverable inside the time box.
- Bluesky public appview searchPosts: HTTP 403 Forbidden on all four queries from this host.
- Instagram: engine source error, HTTP 404.
- X: engine collected only 9 posts, 226 total likes, top voices @Av1dlive, @WeAreBilig, @jannikwh — none
  surfaced into a scored cluster, so no X item is citable from this run.
- prismnews.com direct re-fetch: HTTP 503.

## Honest bottom line for this window
No new (not-already-in-seen.txt) operator thread from a named non-tech company describing a real AI rollout —
cost, breakage, or rollback — was found in 2026-08-08 → 2026-08-18. The window's social surface was dominated
by dev-tooling launches (HN), satirical/sentiment commentary (TikTok), and one already-covered news story
(Kinney Drugs). The one genuinely new datapoint is the KPMG "49% pulled back" survey line, and it is
survey-level, not operator-level, and unverified at source.
