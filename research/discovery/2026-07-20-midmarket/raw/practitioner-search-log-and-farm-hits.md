# RAW: Search log — queries run, and CONTENT-FARM / low-quality hits explicitly rejected
Fetched: 2026-07-20
Lane: first-person practitioner writeups, mid-market (100-2,000 staff), one workflow,
real numbers, what broke / maintenance / ownership.

## SOURCES WORKED
- Hacker News Algolia API, tags=story, 19 query seeds, created_at > 2025-01-01
  -> see practitioner-hn-stories.md
- Hacker News Algolia API, tags=comment, 15 query seeds, created_at > 2025-06-01
  -> see practitioner-hn-comments.md (LOW YIELD: Algolia comment search is loose OR-matching;
     returned mostly unrelated threads. Numbers grep surfaced nothing on-lane.)
- Hacker News item API, 12 full threads pulled (47436526, 48803546, 46922432, 46937877,
  48876134, 46890962, 47298161, 44800166, 48568221, 47253299, 46360038, 47139978)
  -> see practitioner-hn-threads.md (LOW YIELD: the Ask HN threads on cancelling SaaS /
     building internal tools have single-digit comment counts and no named orgs.)
- Lobste.rs search.json — 7 seeds. FAILED: request timed out (30s, no bytes received).
  Not retried; deprioritised.
- Tavily search x6 (advanced), WebSearch x3.
- Tavily extract x4 (Fullscript, Rootly, NeatContext, r/sysadmin). One extract FAILED:
  reddit.com/r/SaaS/comments/1rfbbmy.

## VERDICT ON THE LANE
Genuinely rare. Across ~40 distinct queries, exactly ONE candidate clears most of the hard
criteria (Fullscript). Everything else either has no named org, no staff count in the
100-2,000 band, no numbers, or is vendor/SEO content.

## CONTENT-FARM AND VENDOR HITS ENCOUNTERED — NOT USABLE
Named on the project's known-farm list and confirmed in results this run:
- talyx.ai — "Why 90% of Enterprise AI Implementations Fail (2026)". Recycles MIT NANDA /
  RAND / Gartner stats. No primary reporting. REJECT.
- intuitionlabs.ai — "Enterprise AI Rollout Failures: Causes and Case Studies". Same. REJECT.
Additional farm/vendor-marketing sources that surfaced and are NOT usable as number sources:
- bagel.ai/blog/why-most-internal-ai-tools-age-like-milk — vendor blog, "$500k to build then
  $500k again to stabilize" is unattributed. REJECT as a number source.
- mindstudio.ai — "$30-40 in inference cost" for a full-stack internal tool. Vendor. REJECT.
- unicoconnect.com, riseuplabs.com, coherentsolutions.com, masterofcode.com, zylo.com,
  glean.com — all "cost to maintain AI" listicles with invented or laundered ranges. REJECT.
- swfte.com — invented case study "NexGen Manufacturing spent $315K migrating 40 AI
  workflows". No such company traceable. REJECT — this is a fabricated case study.
- is4.ai, buildmvpfast.com, thedataexperts.us, skeletos.io, nstarxinc.com,
  aifounders.cz, developmentcorporate.com, trends.thicket.sh, stepto.net, scalevista.com,
  hygge.software, indatalabs.com, thesys.dev, nexgencloud.com — content marketing. REJECT.
- nstarxinc.com specifically claims "a VP of Engineering at a mid-size fintech... token bill
  grew from $8,000/month to $67,000/month in six months." UNNAMED and UNVERIFIABLE, published
  by a consultancy selling the remedy. DO NOT PASS THROUGH.
- dforge.io/blog/internal-tools-built-to-last — "AI Made Internal Tools Easy to Build.
  Keeping Them Alive Is the Hard Part". Correct thesis, but it is a dev-shop's marketing post
  with no case, no company, no numbers. REJECT.
- neatcontext.com blog — see practitioner-neatcontext-sre-agent.md. Vendor post ending in a
  pitch for its own product. REJECT as a case study.

## VENDOR-REPORTED, BORDERLINE, LOGGED NOT RECOMMENDED
- Harmonic (via Retool's 2026 Build vs Buy report, and a Medium writeup by Adeayo Adewale
  at medium.com/@adeayoadewale/the-build-revolt-...): ~100 employees, Miles Konstantin (Head
  of Automation and Tooling), hit a breaking point with a $20,000/yr third-party tool —
  "Their support was so slow that it was faster for me to rebuild the product inside Retool
  than wait for support to get back to me." Now runs 33 internal apps against Salesforce,
  Gong, Slack. Default question is now "Why can't we just build this in Retool?"
  -> ~100 staff = BELOW the mid-market band's floor. Vendor-reported (Retool is the seller).
     No maintenance or failure detail. No ongoing run cost. NOT a lane candidate.
- Retool 2026 Build vs Buy Report (retool.com/blog/ai-build-vs-buy-report-2026): 817
  respondents, 35% have replaced at least one SaaS tool with a custom build, 78% expect to
  build more in 2026. ALREADY IN seen.txt. Survey, not a practitioner writeup.

## OTHER NON-LANE ITEMS SEEN (not pursued)
- news.ycombinator.com/item?id=48968606 "Show HN: I replaced a $120k bowling center system
  with $1,600 in ESP32s" (2026-07-19, 2341 pts). Hardware, hobbyist, not AI-built internal
  tooling at a mid-market employer.
- blog.pragmaticengineer.com/i-replaced-a-120-year-micro-saas-in-20-minutes-with-llm-generated-code/
  — individual, $120/yr, not an organisation.
- ironcladapp.com/resources/articles/rivet-six-months-later — genuine "six months later"
  follow-up on an internal tool (Rivet) that went open source. Ironclad is ~350-400 staff, so
  IN BAND, but the post is a promotional community roundup: no cost numbers, no failure
  detail, no maintenance/ownership discussion, and Rivet is a dev tool they open-sourced
  rather than an internal workflow tool. Weak; not recommended.
- mazhar.bearblog.dev/ai-coding-retrospective/ — "My 6-Month Retrospective: Using AI Coding
  Assistants for Database Infrastructure". Individual practitioner, no employer named,
  0 HN comments. Not checked in depth; no org, so fails the bar.
