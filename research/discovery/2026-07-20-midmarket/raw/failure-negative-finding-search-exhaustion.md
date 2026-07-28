# RAW: NEGATIVE FINDING — search exhaustion on mid-market AI abandonment
Fetched: 2026-07-20

Documenting what was searched and returned nothing, so this lane is not re-run blind.

QUERY: '"we built" internal AI tool "no longer maintained" OR "orphaned" employee left company small
business 2026 blog' (Tavily advanced, start_date 2025-06-01, 15 results)
RESULT: ZERO relevant hits. Every single result was vendor/agency content marketing:
  sbecouncil.org (adoption survey), lowcode.agency ("Best AI Employee Platforms"),
  theprotoolkit.com ("Best AI Agents for Small Business"), consulting.sva.com, glideapps.com,
  business.com, yoltlabs.com, hiringaiguide.com, writer.com, aimagicx.com, pwc.com,
  linkedin.com/pulse predictions posts, plus two YouTube SEO-agency videos.
Not one first-hand account of a small or mid-market company abandoning an AI tool.

HN ALGOLIA (tags=comment, Feb 2025 onward, ~15 phrase queries incl. "we abandoned the AI tool",
"we shut it down AI internal tool", "went back to buying built in house", "AI pilot cancelled",
"we regret building it AI", "unmaintained AI tool left the company", "rolled back the AI feature",
"AI chatbot removed customers complained", "our AI project failed postmortem", "we ripped it out",
"we turned it off", "quietly killed", "back to the vendor", "the person who built it left"):
  - "unmaintained AI tool left the company" -> nbHits: 0
  - "AI chatbot removed customers complained" -> nbHits: 0
  - "our AI project failed postmortem" -> nbHits: 0
  - "went back to buying built in house" -> nbHits: 3, all irrelevant
  - "we shut it down AI internal tool" -> nbHits: 8, all irrelevant
  - "we built an internal" -> nbHits: 8, mostly Show HN launch posts
  - The higher-hit queries ("we abandoned the AI tool" nbHits 41, "replaced the AI with humans
    again" nbHits 190) returned general AI-discourse opinion, not confessions. Algolia does OR
    matching on unquoted terms, so high nbHits here means nothing.
Raw dump: failure-hn-comments-batch1.md

REDDIT: hard-blocked from this environment. reddit.com and old.reddit.com .json endpoints return
HTTP 403 with a challenge shell under a normal Chrome UA; Tavily extract returns "Failed to fetch
url"; WebFetch refuses www.reddit.com outright. Only Tavily *search* with include_domains
["reddit.com"] works, returning URLs plus index snippets — fragments, not threads.
  Specifically lost: r/ITManagers "Is AI making 'Buy' the wrong choice for internal tools?"
  (/r/ITManagers/comments/1qh9gdb/) — a CTO at a large construction company second-guessing a
  long-term buy strategy. Best-matching thread title found in the entire sweep. Body unretrievable
  via four methods. NEEDS MANUAL RETRIEVAL by a human in a browser.
Raw dump: failure-practitioner-reddit-access-blocked.md

DIGINOMICA: publishes almost no failure coverage. Its CIO content is largely vendor-sponsored. Worth
knowing before treating it as a failure source in future sweeps.

SEC FILINGS / EARNINGS: zero AI-attributable impairments found. Structural reason (see
failure-tradepress-negative-finding-sec-filings-silent.md): internal AI spend is not capitalised as
a separable asset, so there is nothing to impair — it dissolves into opex. Compounded by
counsel-driven hedging, e.g. Fiserv's 10-K: "there can be no assurance that our use of artificial
intelligence will enhance our products."

CONCLUSION FOR THE LANE: mid-market AI abandonment is essentially unpublished. Every verified case
found in this sweep surfaced through an EXTERNAL ACCOUNTABILITY MECHANISM WITH DISCLOSURE POWER —
union arbitration (POLITICO), parliamentary select committee (Capita), congressional testimony
(CRS), a published federal AI use-case inventory (VA/DOL/State), a labour dispute (CBA), or a
journalist's sourced scoop (Microsoft/The Verge). Not one company volunteered it.
That is the finding. Companies with no regulator, no union, and no select committee — i.e. exactly
the mid-market — leave no record at all.
