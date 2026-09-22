# CONTRA DUMP — "We already ran this experiment: when lending got faster with technology, the loans got BETTER"

Desk: contrarian. Target thesis: essay `seven-days-to-close.md` — a seven-day close is an input metric and you cannot know whether those were good loans for years.
Counter-claim under test: the speed-vs-quality question in lending is not an open question with no prior. It was measured at market scale on the near-universe of US mortgages, and faster technology-driven processing produced LOWER default rates, not higher. The essay's implied null hypothesis (fast might mean sloppy) has an empirical answer that runs the other way.
All items accessed 2026-08-18.

---

## SOURCE 1 — "The Role of Technology in Mortgage Lending" (Fuster, Plosser, Schnabl, Vickery)
URLs:
- NBER Working Paper 24500: https://www.nber.org/papers/w24500 — PDF https://www.nber.org/system/files/working_papers/w24500/w24500.pdf
- Published version: *The Review of Financial Studies*, Vol. 32, Issue 5 (May 2019), pp. 1854-1899 — https://academic.oup.com/rfs/article-abstract/32/5/1854/5427780
- FRBNY Staff Report 836: https://www.newyorkfed.org/medialibrary/media/research/staff_reports/sr836.pdf
Publication: NBER working paper April 2018; peer-reviewed in Review of Financial Studies May 2019.
Authors: Andreas Fuster (Federal Reserve Bank of New York), Matthew Plosser (FRBNY), Philipp Schnabl (NYU Stern), James Vickery (FRBNY).
Note: PEER-REVIEWED ACADEMIC + CENTRAL BANK RESEARCH. No vendor incentive. Standard disclaimer: "The views expressed in this paper are solely those of the authors."
Extraction: pypdf, 61 pages.

### Verbatim — ABSTRACT (p.2 of PDF)

> "Technology-based ("FinTech") lenders increased their market share of U.S. mortgage lending
> from 2% to 8% from 2010 to 2016.  Using market-wide, loan-level data on U.S. mortgage
> applications and originations, we show that FinTech lenders process mortgage applications about
> 20% faster than other lenders, even when controlling for detailed loan, borrower, and geographic
> observables.  Faster processing does not come at the cost of higher defaults.  FinTech lenders
> adjust supply more elastically than other lenders in response to exogenous mortgage demand
> shocks, thereby alleviating capacity constraints associated with traditional mortgage lending.  In
> areas with more FinTech lending, borrowers refinance more, especially when it is in their interest
> to do so.  We find no evidence that FinTech lenders target marginal borrowers. Our results
> suggest that technological innovation has improved the efficiency of financial intermediation in
> the U.S. mortgage market."

### Verbatim — the authors state the "fast = sloppy" hypothesis they set out to test (Introduction)

> "FinTech lenders may be faster at processing loans than traditional lenders because
> online processing is automated and centralized, with less scope for human error. At the same
> time, this more automated approach may be less effective at screening borrowers; therefore,
> we also examine the riskiness of FinTech loans using data on loan defaults."

### Verbatim — the speed result (Introduction)

> "We find that FinTech lenders process mortgages faster than traditional lenders, measured
> by total days from the submission of a mortgage application until the closing. Using loan-
> level data on the near-universe of U.S. mortgages from 2010 to 2016, we find that FinTech
> lenders reduce processing time by about 10 days, or 20% of the average processing time.
> In our preferred specifications, this effect is larger for refinance mortgages (14.6 days) than
> purchase mortgages (9.2 days). The result holds when we restrict the sample to non-banks,
> indicating that it is not solely due to differences in regulation. The results are also robust
> to including a large set of borrower, loan, and geographic controls; along with other tests
> we conduct, this suggests that faster processing is not explained by endogenous matching of
> 'fast' borrowers with FinTech lenders."

### *** THE KEY PASSAGE *** — Verbatim, the outcome result (Introduction, pp.2-3)

> "Faster processing times by FinTech lenders do not result in riskier loans. We measure
> loan risk using default rates on FHA mortgages, which is the riskiest segment of the market
> in recent years. We find that default rates on FinTech mortgages are about 25% lower than
> those for traditional lenders, even when controlling for detailed loan characteristics. There
> is no significant difference in interest rates. These results speak against a 'lax screening'
> hypothesis, and instead indicate that FinTech lending technologies may help attract and
> [select better borrowers]"

### Verbatim — default comparison table (weighted average percent difference in default rate, FinTech vs all FHA in same time period and market; values <0 = LOWER default for FinTech)

> "D. Disaggregated by neighborhood socioeconomic status (all loans, state level)
> Underserved (low income/minority)   -33.5***  -32.4***  -25.3***
> Not Underserved                     -36.8***  -36.5***  -25.4***
> E. All FHA loans: longer time series
> National level                      -44.7***  -45.6***  -32.7***
> State level                         -45.4***  -46.1***  -33.4***"

> "Table reports weighted average percent difference in default rate between mortgages from
> FinTech lenders and all FHA mortgages originated in same time period and market (ei-
> ther MSA, state or national market). Values less than zero indicate lower default rates
> for FinTech lenders. ... Default definition is either default within
> first year, default within first two years, or the 'mix-adjusted' default rate..."

> "Refinancing  -30.6***  -27.5***  -40.3***"

[DESK NOTE: Critically, the default definition includes **default within the first year** and **within the first two years**. The paper does NOT need to wait a full credit cycle to read the outcome. The essay says the answer "waits for a downturn"; this paper reads a decisive answer at 12 and 24 months, exactly the early-payment-default window the essay itself concedes in one clause and then argues past.]

### Verbatim — resilience/capacity finding (relevant to "speed is itself an outcome")

> "processing time for Fintech lenders is also less sensitive to demand for new mortgages
> compared to banks and (to a lesser extent) other non-bank lenders. This lower sensitivity is
> particularly apparent at the highest levels of application volume (when aggregate application
> volume exceeds 1.2 million mortgages per month)."

---

## SOURCE 2 — "Invisible Primes: Fintech Lending with Alternative Data" (Di Maggio, Ratnadiwakara, Carmichael)
URLs:
- NBER Working Paper 29840: https://www.nber.org/papers/w29840 — PDF https://www.nber.org/system/files/working_papers/w29840/w29840.pdf
- HBS working paper 22-024: https://www.hbs.edu/faculty/Pages/item.aspx?num=61316
- Published: *Management Science* — https://pubsonline.informs.org/doi/10.1287/mnsc.2024.07854
Publication: NBER working paper March 2022; peer-reviewed in Management Science (2024/2025).
Authors: Marco Di Maggio (Harvard Business School), Dimuthu Ratnadiwakara (LSU), Don Carmichael (Univ. of Houston).
Note: PEER-REVIEWED ACADEMIC. Uses "anonymized administrative data provided by a major fintech platform" — the platform has an incentive to look good, but the counterfactual model used is the traditional model the platform is required to build for regulatory reporting, and the analysis is by independent academics.

### Findings as extracted (2026-08-18)

> "the researchers investigated whether using alternative data to assess borrowers' creditworthiness results in broader credit access, using anonymized administrative data provided by a major fintech platform."

> Comparing the fintech platform's model to counterfactual outcomes based on a "traditional model" used for regulatory reporting purposes, they found that the traditional model "would result in a 70% higher probability of being rejected and higher interest rates for those approved."

> "The borrowers most positively affected are the 'invisible primes'—borrowers with low credit scores and short credit histories, but also a low propensity to default."

> "Funding loans to invisible primes leads to better economic outcomes for the borrowers and higher returns for the fintech platform." Using exogenous variation, expanded credit access "improves borrowers' subsequent financial outcomes."

[DESK NOTE: This is a second, independent, peer-reviewed measurement of the OUTCOME (default propensity + borrower financial outcomes + platform returns) of algorithmic underwriting against a traditional-model counterfactual. Again: the outcome was measurable and was measured.]

---

## SOURCE 3 — Champion/challenger and early-warning indicators as standard credit practice
URL: https://www.hlhunt.org/uncategorized/champion-and-challenger-deploying-a-new-credit-model-without-betting-the-book/
Publication: HL Hunt (credit-policy commentary site). Date accessed 2026-08-18. Date published: not stated on page.
Note: WEAK SOURCE — trade/commentary, not primary, possible SEO content. Use only for the shape of standard practice, never for a number. Corroborates the SR 11-7 primary text above, which is where the claim should be sourced.

> "Champion-challenger testing routes a defined percentage of applications through the proposed
> policy while the majority continue under the existing one, then compares outcomes on
> populations that are otherwise matched. Done properly it requires random assignment, a slice
> large enough to produce meaningful results, and patience."

> "A champion holdout—a permanent small control group—is the only way to detect drift in the
> new model against a stable reference, and it's cheap. Monitor by vintage and document
> decisions — because undocumented and indefensible look the same in an examination."

> "Early indicators like first-payment default, delinquency in the first few billing cycles,
> utilization trajectory, and take rate correlate with eventual performance well enough to catch
> a badly wrong change quickly—while not being conclusive enough to justify declaring victory
> early."

---

## SOURCE 4 — The "AI ROI failure" genre is itself contested (context for "AI scepticism has become a lazy genre")
URLs:
- https://www.futuriom.com/articles/news/why-we-dont-believe-mit-nandas-werid-ai-study/2025/08 (Futuriom, tech industry analyst publication — August 2025)
- https://www.forbes.com/sites/jasonsnyder/2025/08/26/mit-finds-95-of-genai-pilots-fail-because-companies-avoid-friction/ (Forbes contributor, 26 Aug 2025)
- https://www.youreverydayai.com/do-95-of-ai-pilots-fail-why-you-should-ignore-mits-viral-new-ai-study/ (podcast/blog — weak source)
Accessed 2026-08-18.

The MIT Media Lab / NANDA "State of AI in Business" report (Aug 2025) produced the viral "95% of enterprise GenAI pilots fail" statistic. Criticisms found:
- Futuriom called the methodology "irresponsible and unfounded" and questioned the construction of the 95% figure.
- The report counts a tool as successfully implemented only if users or executives described it as causing "marked and sustained" productivity or profit impact — a contested and unusually narrow definition of success.
- The methodology section itself lists sample limits, the risk that companies willing to talk about AI are not typical, and "a six-month observation window that may be too short to judge success at all."
- CONFLICT OF INTEREST: the report promotes "NANDA," an MIT Media Lab project offering agentic AI solutions, reportedly at a $250,000 corporate membership fee.

[DESK NOTE: This is CONTEXT, not a load-bearing counter-source. It does not rebut the essay; it shows the surrounding genre. NOTE FAIRLY: the criticism attacks the precision of 95%, not the direction. Do not overclaim. Also note the delicious symmetry — the most-cited "AI doesn't pay off" study is itself an input metric (a six-month window, self-reported executive impressions) masquerading as an outcome, which is the essay's own critique turned on the sceptics.]
