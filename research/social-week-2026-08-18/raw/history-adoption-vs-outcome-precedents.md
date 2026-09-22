# RAW — historical-precedent desk
Beat: earlier tech/management waves where adoption metrics stood in for outcome metrics.
Week concept: "Seven days to close. Years to know if it worked." (essay: app/src/content/essays/seven-days-to-close.md)
All dates accessed: 2026-08-18. Verbatim excerpts below; nothing paraphrased inside quote blocks.

---

## SOURCE 1 — Fortune, "MIT report: 95% of generative AI pilots at companies are failing"
URL: https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/
Publication: Fortune (CFO Daily)
Author: Sheryl Estrada, Senior Writer
Date published: 2025-08-18, 6:54 AM ET
Date accessed: 2026-08-18
NOTE: exactly one year before today's essay date. This is the anniversary hook.

Verbatim / near-verbatim extracted:
> "150 interviews with leaders, a survey of 350 employees, and an analysis of 300 public AI deployments."
> "about 5% of AI pilot programs achieve rapid revenue acceleration; the vast majority stall, delivering little to no measurable impact on P&L."
> "The 95% failure rate for enterprise AI solutions represents the clearest manifestation of the GenAI Divide."
> "More than half of generative AI budgets are devoted to sales and marketing tools, yet MIT found the biggest ROI in back-office automation—eliminating business process outsourcing, cutting external agency costs, and streamlining operations."
> "the ongoing challenge of measuring AI's impact on productivity and profit."
> "Purchasing AI tools from specialized vendors and building partnerships succeed about 67% of the time, while internal builds succeed only one-third as often."

Underlying report: MIT Media Lab, Project NANDA, "The GenAI Divide: State of AI in Business 2025" (Aug 2025).
Market effect reported elsewhere: the finding "sent shockwaves through global markets and drove down shares of AI-exposed companies
such as Palantir, Nvidia, Oracle, and CoreWeave" (per secondary coverage, incl. Fortune 2025-08-21:
https://fortune.com/2025/08/21/an-mit-report-that-95-of-ai-pilots-fail-spooked-investors-but-the-reason-why-those-pilots-failed-is-what-should-make-the-c-suite-anxious/ ).
CAVEAT (must be stated): the NANDA report is a preprint-style working paper, not peer reviewed. Criticism of it as
"preliminary and methodologically fragile" appears in secondary commentary; I did not open the primary report itself.

---

## SOURCE 2 — Eveleens & Verhoef, "The Rise and Fall of the Chaos Report Figures"
URL: https://www.cs.vu.nl/~x/the_rise_and_fall_of_the_chaos_report_figures.pdf
Publication: IEEE Software, January/February 2010, pp. 30-36
Authors: J. Laurenz Eveleens and Chris Verhoef, Vrije Universiteit Amsterdam
Date accessed: 2026-08-18
THIS IS THE STRONGEST FIND: a genuine "go back years later and reproduce it against real data" study.

Verbatim:
> "In 1994, Standish reported a shocking 16 percent project success rate, another 53 percent of the projects were
> challenged, and 31 percent failed outright."

> "However, we question the validity of their figures. Robert Glass and Magne Jørgensen and his colleagues indicated
> that the only way to assess the Chaos results' credibility is to use Standish's data and reiterate their analyses.
> But there's another way: obtain your own data and reproduce Standish's research to assess its validity. We applied
> the Standish definitions to our extensive data consisting of 5,457 forecasts of 1,211 real-world projects totaling
> hundreds of millions of euros. Our research shows that the Standish definitions of successful and challenged
> projects have four major problems: they're misleading, one-sided, pervert the estimation practice, and result in
> meaningless figures."

> "Their total sample size was 365 respondents representing 8,380 applications."

Standish's own definitions, quoted verbatim in the paper:
> "Resolution Type 1, or project success. The project is completed on time and on budget, offering all features and
> functions as initially specified."
> "Resolution Type 2, or project challenged. The project is completed and operational but over budget and over the
> time estimate, and offers fewer features and functions than originally specified."
> "Resolution Type 3, or project impaired. The project is cancelled at some point during the development cycle."

The core criticism — success is defined as ESTIMATE ADHERENCE, not outcome:
> "So, Standish defines a project as a success based on how well it did with respect to its original estimates of the
> amount of cost, time, and functionality."
> "the Standish definitions don't consider a software development project's context, such as usefulness, profit, and
> user satisfaction."
> "They're misleading because they're solely based on estimation accuracy of cost, time, and functionality. But
> Standish labels projects as successful or challenged, suggesting much more than deviations from their original
> estimates."
> "The Standish Group's measures are one-sided because they neglect underruns for cost and time and overruns for the
> amount of functionality."

The empirical reproduction (organization Y, a large financial-services provider):
> "we obtained data on 140 software development projects conducted from 2004 to 2006. The organization made 667
> forecasts for these projects' total costs."
> "A median f/a ratio of 1.0 supports this finding. The forecasts' quality is relatively high, with a median EQF value
> of 8.5. This indicates that half the projects have a time-weighted average deviation of 12 percent or less from the
> actual. Compared to results from the literature, this organization makes best-in-class forecasts."
> "Yet, even though this organization's cost forecasts are accurate, when we apply the Standish definitions to the
> initial forecasts, we find only a 59 percent success rate."
> "despite the forecasts' accuracy, when we apply the Standish definitions to the initial forecasts, we find only a 55
> percent success rate." [functionality: 83 projects 2003-2005, 100 forecasts, median EQF 6.4 = 16% deviation]
> "We applied the reformulated Standish definitions to the initial forecasts of the combined data. Even without taking
> into account failed projects and the time dimension, the best-in-class organization Y obtains a success rate of 35
> percent. Yet, the median EQF of both initial forecasts of costs and functionality is 6.5, showing that half the
> projects have an average time-weighted deviation of only 15 percent from the actuals. If this organization is
> already so unsuccessful in two dimensions according to Standish, it's hardly surprising that Standish found only a
> 16 percent success rate in its first report."

On how far the figure travelled:
> "Scientific articles and media reports widely cite these numbers. Many authors use the figures to show that software
> development project management is in a crisis. The numbers even found their way to a report for the President of
> the United States to substantiate the claim that US software products and processes are inadequate."
> "The figures' impact and their widespread use indicate that thousands of authors have accepted the Standish
> findings. They're perceived as impeccable and unquestionable."

Table 1 — Standish project benchmarks over the years (verbatim from paper):
Year / Successful % / Challenged % / Failed %
1994 / 16 / 53 / 31
1996 / 27 / 33 / 40
1998 / 26 / 46 / 28
2000 / 28 / 49 / 23
2004 / 29 / 53 / 18
2006 / 35 / 46 / 19
2009 / 32 / 44 / 24

---

## SOURCE 3 — Jørgensen & Moløkken-Østvold, "How large are software cost overruns? A review of the 1994 CHAOS report"
URL (publisher): https://www.sciencedirect.com/science/article/abs/pii/S0950584905001023
DOI: 10.1016/j.infsof.2005.07.002
Publication: Information and Software Technology, vol 48 issue 4 (2006), pp. 297-301
Authors: Magne Jørgensen, Kjetil Moløkken-Østvold (Simula Research Laboratory)
Date accessed: 2026-08-18
NOTE: abstract only — the full text is paywalled. Findings below are from the abstract as summarised in search results
and as cited by Eveleens & Verhoef (Source 2). Treat the specifics as abstract-level, not full-text-verified.

Findings:
- The Standish Group's 1994 CHAOS report claimed the average cost overrun of software projects was 189%.
- That figure "was used as input in recent governmental reports on software development and as a benchmark for
  several recent projects' estimation performances."
- The authors compared it against cost-overrun figures in other surveys and reviewed Standish's survey design.
- The 189% figure is "much higher than those reported in similar estimation surveys"; there "may be severe problems
  with the survey design and methods of analysis, such as the population sampling method being strongly biased
  towards 'failure projects'."
- Conclusion: 189% "is probably much too high to represent typical software projects in the 1990s" and "continued use
  of that figure as a reference point for estimation accuracy may lead to poor decision making and hinder progress in
  estimation practices."

---

## SOURCE 4 — Hughes, "Do 70 Per Cent of All Organizational Change Initiatives Really Fail?"
URL (publisher): https://www.tandfonline.com/doi/abs/10.1080/14697017.2011.630506
Repository record: https://research.brighton.ac.uk/en/publications/do-70-per-cent-of-all-organizational-change-initiatives-really-fa/
DOI: 10.1080/14697017.2011.630506
Publication: Journal of Change Management, vol 11 no 4 (2011), pp. 451-464
Author: Mark Hughes, University of Brighton
Date accessed: 2026-08-18
NOTE: abstract-level only, paywalled full text.

Findings (abstract level):
- "A 70 per cent failure rate is frequently attributed to organizational change initiatives, raising questions about
  the origins and supporting evidence for this very specific statistic."
- The paper "critically reviews five separate published instances identifying a 70 percent organizational change
  failure rate."
- Conclusion: "Whilst the existence of a popular narrative of 70 percent organizational change failure is
  acknowledged, there is no valid and reliable empirical evidence to support such a narrative."

Related, SECONDHAND and UNVERIFIED — flag before use:
Multiple secondary sources (Entrepreneur.com "Debunked: The Myth That 70 Percent of Change Initiatives Fail";
reliamag.com "Do 70% of Digital Transformations Fail? Tracing the Number") trace the origin to Michael Hammer and
James Champy, "Reengineering the Corporation" (1993), where the authors wrote that between 50 and 70 percent of
reengineering efforts did not achieve intended results, and described it as an "unscientific estimate"; Hammer is
reported to have walked it back by 1995. I DID NOT open the primary book text. Do not present the Hammer/Champy
quote as verified.

Also secondhand from the same search: McKinsey global surveys reportedly put 30-40% of change efforts as fully
successful and ~10% as complete failures; IBM's "Making Change Work" study reportedly found 41% met stated
objectives. BOTH ARE CONSULTANCY RESEARCH with a commercial incentive in the answer, and neither primary source was
opened. Do not use as fact.

---

## SOURCE 5 — Oshri & Moore, "Robotic process automation revisited: What's really going on?"
URL: https://www.cio.com/article/3509540/robotic-process-automation-revisited-what-s-really-going-on.html
Publication: CIO.com (IDG trade press)
Authors: Ilan Oshri; Georgia Moore (academic researchers writing in trade press)
Date published: 8 Feb 2019
Date accessed: 2026-08-18

Methodology and findings, verbatim/near-verbatim:
> "155 articles and reports that were published between 2014 and present time about RPA on the web."
> "72 per cent of these reports/articles were case and survey-based studies on RPA implementation while 28 per cent
> were opinion pieces."
- Disclosure rates across those reports: 44% reported cost savings; **only 9% disclosed ROI**; 61% mentioned speed
  improvements; 46% addressed accuracy.
> "54 per cent of RPA implementation in the media reported slight or medium improvement in cost savings. Forty per
> cent reported significant improvements, with only 6 per cent that reported exceptional improvement."
> "only 49 per cent of the cases reported significant to exceptional impact of RPA on operational speed while 51 per
> cent reported light to medium improvement."
- Accuracy: "98 per cent reported significant accuracy improvements."
> "Only 20 per cent of our sample have reported significant job losses while 80 per cent reported minimal and medium
> job losses."
- Named case: "Synergy reported US$2.3million in annual costs saving following the implementation of RPA."
- Vendor share of media coverage: Blue Prism 34%, Automation Anywhere 28%, UiPath 26%.

IMPORTANT HONEST LIMIT: this study analysed *published reports about* RPA implementations, not the implementations
themselves. So "9% disclosed ROI" is a statement about DISCLOSURE, not about whether ROI existed. That is still
directly on-point for the essay (what gets said publicly is the input number), but must be framed exactly that way.

---

## SOURCE 6 — UiPath Q1 FY2027 results (the current hook for the RPA pitch)
URL: https://ir.uipath.com/news/detail/452/uipath-reports-first-quarter-fiscal-2027-financial-results
Also: https://www.businesswire.com/news/home/20260528430194/en/UiPath-Reports-First-Quarter-Fiscal-2027-Financial-Results
Publication: UiPath, Inc. investor relations / Business Wire (primary, company-issued)
Date published: 2026-05-28
Date accessed: 2026-08-18

Figures reported (quarter ended 30 April 2026):
- Revenue $418 million, up 17% year over year.
- ARR $1.901 billion, up 12% year over year.
- Net new ARR $49 million.
- Dollar-based net retention rate 109%.
- GAAP operating income $28 million — described as the first time in company history it was GAAP-operating profitable.
- Company framing: "One year into general availability," its agentic products are "moving from pilot to production,"
  with customers "standardizing on UiPath as the orchestration and automation execution layer."
- Announced expansion of its alliance with Deloitte, launching "Deloitte's Agentic ERP" offering.

NOTE: this is a company press release — the framing is promotional. Only the reported financials should be treated as
figures; the "pilot to production" language is marketing.

---

## SOURCE 7 — Springer 2026 RPA paper (COULD NOT OPEN — do not cite)
URL: https://link.springer.com/article/10.1007/s10257-026-00721-0
Title as it appeared in search results: "Beyond the hype of Robotic Process Automation (RPA): on conditions needed to
implement RPA in organizations", Information Systems and e-Business Management, 2026.
Status: Springer redirected to an IdP auth wall; Semantic Scholar returned no content. Abstract NOT verified.
Search-result-level summary only (UNVERIFIED, do not publish): claims that the true value delivered by RPA has been in
service accuracy, that service speed and cost savings were moderate relative to expectations, and that "ROI is pretty
much unknown"; and that managers overestimate benefits and underestimate costs. IF THIS PITCH RUNS, someone must open
the paper first.

---

## SOURCE 8 — Six Sigma retrospectives (CHECKED, CUTS AGAINST THE THESIS — logged for honesty)
- Swink, M. & Jacobs, B.W. (2012), "Six Sigma adoption: Operating performance impacts and contextual drivers of
  success", Journal of Operations Management. https://onlinelibrary.wiley.com/doi/10.1016/j.jom.2012.05.001
  Event study, ~200 Six Sigma adopting firms vs matched controls: "strong evidence of a positive impact on ROA",
  driven mostly by reductions in indirect costs; direct-cost and asset-productivity improvements were NOT evident.
- Jacobs, B.W., Swink, M. & Linderman, K. (2015), "Performance effects of early and late Six Sigma adoptions",
  Journal of Operations Management 36:244-257. https://doi.org/10.1016/j.jom.2015.01.002
  "the empirical results show that, on average, late adopters in our sample enjoy significantly greater performance
  gains than early adopters."
CONCLUSION: the rigorous Six Sigma retrospectives found REAL operating gains. Do not use Six Sigma as a "the wave
didn't work" example — it would be dishonest. Logged so nobody re-runs this search.

---

## SOURCE 9 — EHR / HITECH (checked, no current hook found)
- "Realizing the Promise of Electronic Health Records: Moving Beyond 'Paper on a Screen'", Liebman, Chiang & Chodosh,
  Ophthalmology, March 2019, 126(3):331-334, DOI 10.1016/j.ophtha.2018.09.023.
  https://pmc.ncbi.nlm.nih.gov/articles/PMC12288116/
  > "Far from the early potential of universal interoperable medical records and seamless integration of continuing
  > education, many see EHRs as...platforms that seem to have been designed for billing and compliance rather than
  > clinical care."
  > "EHRs have been implicated as a leading driver of medicine's professional burnout epidemic" — "death by a thousand
  > keystrokes and checkboxes."
- Also located but not opened: "Does the meaningful use of electronic health records improve patient outcomes?",
  Journal of Operations Management (2018), https://www.sciencedirect.com/science/article/abs/pii/S0272696318300391
STATUS: HITECH is the best conceptual parallel in the whole beat (Congress paid out on an ADOPTION metric —
"meaningful use" — because outcomes take years). But I found no 2026 hook to hang it on inside the time box. Parked
for a future week; someone should look for a 2026 HITECH/ONC retrospective.
