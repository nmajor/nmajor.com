# Coverage / negative-result notes for 2026-08-08 to 2026-08-18

- Date accessed: 2026-08-18

## Sources opened and what they returned

1. https://www.classaction.org/news — fetched OK. No August 2026 items involving AI, algorithms,
   AI hiring, AI insurance denial, algorithmic pricing, AI credit, chatbots, or AI surveillance.
   August items were product defects, data breaches, misleading advertising, privacy pixels,
   accessibility.
2. https://www.classaction.org/lawsuit-news — HTTP 404.
3. https://www.classaction.org/news/2026/08 — HTTP 404.
4. https://www.classaction.org/ai-interview-screening-lawsuits — fetched OK. Lists iTutorGroup (2023),
   CVS/HireVue (July 2024), Workday (2024), ACLU of Colorado v. HireVue/Intuit (March 2025).
   NONE filed in August 2026.
5. https://www.courthousenews.com/ — HTTP 403, could not open.
6. https://www.courtlistener.com/?q=... (HTML) — HTTP 403. Used the public REST API v4 search endpoint
   instead, which worked unauthenticated. /api/rest/v4/dockets/ requires auth (401).
7. https://www.jdsupra.com/topics/artificial-intelligence/ — fetched OK. Only one newly-filed-suit item
   in window: Reddit Inc. v. SerpApi LLC (Aug 17, 2026, Loeb & Loeb alert) — a DMCA/scraping ruling,
   excluded as model-maker/data-scraping.
8. https://www.dandodiary.com/ — fetched OK. August 2026 posts listed. AI-related:
   - "More About 'Silent AI' and Follow-On D&O Litigation" (Aug 10, 2026) — Nvidia derivative re
     copyright + BIPA. Copyright-adjacent, excluded per brief.
   - "Another AI Spending-Related Securities Class Action" (Aug 5, 2026) — outside the window and
     the Rackspace-type AI-spending securities suits are excluded per brief.
   - "Guest Post: The UK Board's AI Blind Spot" (Aug 13, 2026) — commentary, not a filing.

## CourtListener RECAP, filed 2026-08-08 to 2026-08-18, query "artificial intelligence"
Full result set reviewed. Most hits were noise: W.D.N.C. "Standing Order Regarding Use of Artificial
Intelligence" boilerplate attached to unrelated cases (Jackson v. Costco, Metropolitan Life Ins. Co. v.
White, Myers v. Life Insurance Co. of North America, Martinez v. Commissioner of Social Security, etc.).

Excluded as copyright/training-data or model-maker suits:
- Round Hill Music LP v. Suno, Inc. — N.D. Cal., 2026-08-17, 5:26-cv-08507 (copyright)
- Round Hill Music LP v. Anthropic PBC — N.D. Cal., 2026-08-17, 5:26-cv-08505 (copyright)
- Sullivan v. OpenAI Foundation — S.D.N.Y., 2026-08-14, 1:26-cv-06966 (copyright, 17:501)
- Neural AI, LLC v. OAI International / X.AI Corp. / Tesla Inc. — subpoena-compel miscellaneous actions

Checked and rejected as NOT about a company's use of AI:
- Nisman v. Wilshire Law Firm, P.L.C. — N.D. Cal., 2026-08-12, 5:26-cv-08346. TCPA
  (47:227, NOS 485). No AI allegation visible in indexed text. REJECTED.
- Pearson v. Hims & Hers Health, Inc. — N.D. Cal., 2026-08-14, 3:26-cv-08470, class action,
  NOS 190 Contract. Query for "artificial intelligence" in this docket returned ZERO hits; only
  snippet retrieved was "to licensed healthcare professionals, receive telehealth services,
  prescription health and wellness". REJECTED as unverified AI connection.
- "Rose" — C.D. Cal., 2026-08-14, 2:26-cv-09101, 84-pp class complaint, Zigler Law Group,
  15 named plaintiffs. Snippets: "designed to put taxpayers, not for-profit companies, in charge of
  how TRI is used and disclosed" and "preparation 18 companies, including H&R Block and Intuit
  TurboTax. Defendant's devices 19 installed on". This is a tax-return-information / tracking-pixel
  case, not an AI case. REJECTED.

## Not opened (time box)
State AG newsrooms (CA, NY, TX, MA, WA) and law-firm client-alert blogs (Fisher Phillips, Seyfarth,
Littler, Duane Morris) were NOT opened — the session's web-search budget was exhausted before those
could be reached. Any AI enforcement action announced by a state AG in this window is therefore
UNVERIFIED and excluded from the findings.
