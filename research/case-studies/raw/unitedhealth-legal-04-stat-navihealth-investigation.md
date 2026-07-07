# Raw capture — STAT News "Denied by AI" investigation into nH Predict/naviHealth (fetched 2026-07-07)

## Primary reporting: STAT "Denied by AI" (Casey Ross & Bob Herman)
- Original investigation: **"Denied by AI: How Medicare Advantage plans use algorithms to cut off care for seniors in need,"** STAT News, **March 13, 2023.**
  https://www.statnews.com/2023/03/13/medicare-advantage-plans-denial-artificial-intelligence/
- Series was a **Pulitzer Prize finalist** for investigative reporting; 2nd place AHCJ Awards for Excellence in Health Care Journalism.
  - Pulitzer finalist page: https://www.pulitzer.org/finalists/casey-ross-and-bob-herman-stat
  - AHCJ writeup: https://healthjournalism.org/blog/2024/10/stats-denied-by-ai-series-a-model-of-solid-investigative-journalism/

## What STAT established (sourced specifics)
- Reporting based on: review of internal naviHealth communications, interviews with **five former employees**, patients' family members, lawyers, and modeling experts. STAT uncovered the very existence of the algorithm and surfaced whistleblowers.
- **nH Predict mechanics (confirms tech type):** factors in a person's diagnosis, age, living situation, and physical function to **match them with similar patients from a database of ~6 million patients**, then generates an assessment of mobility/cognition plus a predicted length of stay and discharge date. => a predictive case-matching model, **NOT an LLM / generative AI.**
- **The performance target (the damning internal detail):** naviHealth set a goal for case managers to keep MA patients' nursing-home rehab stays within **3%** of the algorithm's projected days, later tightened to **less than 1%.** Former case managers said they faced discipline, including possible termination, even when patients met Medicare criteria for more care.
- Concrete harm examples: stroke-complication patients blocked from rehab-hospital stays; amputees denied recovery care.

## Later STAT follow-ups (secondary, same beat)
- May 19, 2025 — "UnitedHealth said it was too dangerous for him to be discharged. Days later, it denied his care": https://www.statnews.com/2025/05/19/unitedhealth-algorithm-ai-denials-of-care/
- Nov 14, 2023 — class-action filing coverage: https://www.statnews.com/2023/11/14/unitedhealth-class-action-lawsuit-algorithm-medicare-advantage/

## Note on the "90% error rate" provenance
- The "90% error rate" originates in the **Lokken complaint's own calculation** (share of appealed denials reversed), which cites STAT's reporting. It is an **ALLEGATION / advocacy statistic**, not an independent STAT or regulator finding. Snopes fact-check treats the "error-prone AI denies claims" framing as unproven-in-court: https://www.snopes.com/fact-check/united-healthcare-ai-denied-claims/
