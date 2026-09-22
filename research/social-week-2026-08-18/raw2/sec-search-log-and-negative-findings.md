# EDGAR full-text search log and NEGATIVE findings — window 2026-08-08 to 2026-08-18
Date accessed: 2026-08-18. Endpoint used: https://efts.sec.gov/LATEST/search-index?q=<phrase>&startdt=2026-08-08&enddt=2026-08-18[&forms=<form>]
(Human UI equivalent: https://www.sec.gov/edgar/search/)
EDGAR full-text search WAS available and returned usable results throughout.

## Confirmed ZERO-result queries (honest negatives — nothing found, nothing inferred)
- `"Item 1.05"` restricted to forms=8-K — **TOTAL: 0**. No Form 8-K in this window reported a
  material cybersecurity incident under Item 1.05 at all, AI-implicated or otherwise.
- `"artificial intelligence"` restricted to forms=UPLOAD — **TOTAL: 0**. No SEC staff comment
  letters mentioning artificial intelligence were released in this window.
- `"artificial intelligence"` restricted to forms=CORRESP — **TOTAL: 0**. No registrant responses
  to comment letters mentioning AI in this window.
- `"artificial intelligence" "headwind"` forms=8-K — TOTAL: 0
- `"AI" "did not perform as expected"` — TOTAL: 0
- `"artificial intelligence" "we have not yet realized"` — TOTAL: 0
- `"investments in artificial intelligence" "margin"` forms=8-K — TOTAL: 0
- `"artificial intelligence" "incorrect or otherwise"` forms=10-Q — TOTAL: 0

## Notable single-result query
- `"replaced by artificial intelligence"` — **TOTAL: 1** across ALL of EDGAR in this 10-day window.
  The single hit is GEE Group Inc. (CIK 0000040570), 8-K accession 0001477932-26-004918,
  Exhibit 99.1 (furnished). See sec-gee-group-ai-replacing-staffing-jobs.md
- `"artificial intelligence" "AI washing"` — **TOTAL: 1**: ResMed Inc. 10-K (CIK 0000943819),
  accession 0000943819-26-000047, filed 2026-08-13. See sec-resmed-10k-ai-washing-and-ai-failure-risk.md

## SEC enforcement pages — NOT verified
https://www.sec.gov/litigations/litreleases and https://www.sec.gov/litigations/admin could not be
retrieved (403 / JS-rendered listings returned no parseable rows). Therefore this hunt makes **no
claim** about whether the SEC brought any new AI-washing enforcement action between 2026-08-08 and
2026-08-18. That remains unverified, not negative.

## Candidates checked and REJECTED as boilerplate (AI mentioned only in a forward-looking-statements
## laundry list or an "about us" blurb — no substantive AI disclosure)
- Douglas Elliman Inc. (CIK 0001878897), 10-Q filed 2026-08-10, acc 0001878897-26-000044 — AI only in
  the forward-looking-statement bullet list: "the ability of the Company to effectively develop and
  integrate artificial intelligence ("AI") technologies into our business and expectations regarding
  the timing, cost and productivity improvements to be obtained by such initiatives".
- Aramark (CIK 0001584509), 10-Q filed 2026-08-11, acc 0001584509-26-000122 — AI only as a bullet in
  the forward-looking-statement risk list: "the use of artificial intelligence technologies within our
  business processes".
- Rhinebeck Bancorp, Inc. (CIK 0001751783), 10-Q filed 2026-08-13, acc 0001751783-26-000040 — AI only
  in the forward-looking-statement list: "the failure to maintain current technologies and to
  successfully implement future information technology enhancements and the operational risks
  associated with the adoption of artificial intelligence and other emerging technologies".
- Conduent Inc. (CIK 0001677703), 8-K Items 2.02/7.01/9.01 filed 2026-08-10, acc 0001677703-26-000091
  — FURNISHED exhibit. AI mentions are promotional ("Introduced an AI-powered next-generation
  Customer Experience platform..."; "Appointed Adam Demuyakor to the Board of Directors, adding
  expertise in artificial intelligence...") plus a forward-looking bullet, "the effects related to our
  use of artificial intelligence on our business". No quantification, no adverse AI event.
