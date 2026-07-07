# Raw capture — Cigna PXDX / ProPublica (comparator for AI-driven denials) (fetched 2026-07-07)

## Primary reporting: ProPublica
"How Cigna Saves Millions by Having Its Doctors Reject Claims Without Reading Them," ProPublica (Patrick Rucker, Maya Miller, David Armstrong), **March 25, 2023.**
https://www.propublica.org/article/cigna-pxdx-medical-health-insurance-rejection-claims

### Sourced specifics (based on internal Cigna documents/spreadsheets)
- Cigna's **PXDX** (procedure-to-diagnosis) system flags claims where the treatment doesn't match a pre-set list of accepted conditions and auto-teed them for denial.
- **In two months, Cigna doctors denied over 300,000 claims using PXDX, spending an average of 1.2 seconds on each.** Denials were signed off in batches with an electronic signature; medical directors did not open the patient files.
- A former Cigna official: "The PXDX stuff is not reviewed by a doc or nurse or anything like that." A Cigna doctor: "We literally click and submit ... It takes all of 10 seconds to do 50 at a time."
- Distinction from nH Predict: **PXDX is a rules-based matching/automation system (procedure vs diagnosis list)** — even simpler than a predictive ML model, and again **NOT an LLM.** Same theme (automation used to deny at volume with nominal human review), different mechanism.

### Regulatory/legal follow-on
- Congressional committee + state regulators questioned the practice; class-action litigation followed in California (e.g., *Kisting-Leung v. Cigna*).
  - ProPublica follow-up: https://www.propublica.org/article/cigna-health-insurance-denials-pxdx-congress-investigation
  - Healthcare Dive on the lawsuit: https://www.healthcaredive.com/news/cigna-lawsuit-algorithm-claims-denials-california/688857/

## Why it's in this file
- Shows the nH Predict story is **not a one-off**: automated/algorithmic denial-at-volume is an industry pattern (UnitedHealth/nH Predict, Cigna/PXDX), which is what the CMS rule, NAIC bulletin, and CA SB 1120 are all reacting to. Useful contrast — and a caution: most of these tools are rules-based or predictive models, NOT generative AI/LLMs.
