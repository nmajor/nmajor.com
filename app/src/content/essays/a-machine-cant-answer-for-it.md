---
title: A machine can make the call. It can't answer for it.
summary: "UnitedHealth pointed AI at a decision that lands on a person, and it is costing them in court. Some decisions need a human who can answer for them, no matter how good the AI gets."
pubDate: 2026-07-14
author: Nicholas Major
draft: true
approved: "Nicholas Major 2026-07-08"
readingMinutes: 3
heroTitleLead: "A machine can make the call. "
heroTitleAccent: "It can't answer for it."
heroLede: "UnitedHealth pointed AI at a decision that lands on a person, and it is costing them in court. Some decisions need a human who can answer for them."
---

UnitedHealth automated the wrong thing, and it is costing them. A class action, a Senate investigation, and a decade of internal files a federal judge has [ordered them to hand over](https://www.afslaw.com/perspectives/alerts/federal-court-orders-broad-discovery-against-uhc-ai-coverage-denial-lawsuit).

The mistake was not using AI. And it was not even the fancy kind. This is a company [pouring three billion dollars into AI](https://www.spokesman.com/stories/2026/jun/19/unitedhealths-3-billion-ai-push-has-bots-calling-d/), but the tool in the lawsuit is not part of that. nH Predict is [an older prediction model, not a large language model](https://www.statnews.com/2023/03/13/medicare-advantage-plans-denial-artificial-intelligence/), the boring sort nobody writes headlines about. It matches a patient's age and diagnosis against a database of past cases to guess how long they should need to recover. The danger was never how advanced it was. It was what UnitedHealth let it decide.

Plenty of decisions are fine to hand a machine. I build AI systems for a living, and I would trust a good one with all sorts of calls. This was not one of them. UnitedHealth pointed a model at how much recovery care a sick person gets, and left no one who really had to answer for the result.

A Senate subcommittee found that the denial rate for that care over the course of years [climbed from 8.7% to 22.7%](https://www.hsgac.senate.gov/wp-content/uploads/2024.10.17-PSI-Majority-Staff-Report-on-Medicare-Advantage.pdf). One of those patients, [Gene Lokken, was 91](https://litigationtracker.law.georgetown.edu/wp-content/uploads/2023/11/Estate-of-Gene-B.-Lokken-et-al_20231114_COMPLAINT.pdf). According to the lawsuit, his coverage was cut off while he was still recovering, and his family paid about twelve thousand dollars a month until he died. The staff who might have overruled the model were, [according to former employees](https://www.statnews.com/2023/03/13/medicare-advantage-plans-denial-artificial-intelligence/), pushed to stay within about 1% of the number the nH Predict system produced.

Here is where I want to be careful, because the easy version of this is wrong. You can grant that a model might one day make these calls as well as a person, maybe better. That still would not settle it. A machine can produce a decision. It cannot be answerable for one.

Philosophers named that gap twenty years ago, the [responsibility gap](https://link.springer.com/article/10.1007/s10676-004-3422-1): hand a real decision to a machine and you can get an outcome no person chose and no person can be held to. The usual answer is to keep a human in the loop. But when that human is measured on agreeing with the model, the loop is a fiction. Researchers have a name for them too, a [moral crumple zone](https://estsjournal.org/index.php/ests/article/view/260), the person close enough to take the blame for a call they were never allowed to prevent. On paper UnitedHealth had people in the loop. In practice it had somewhere to put the fault.

So the question sits one level down, past whether a machine can make a call, to whether it should be the one making this one. We already draw that line elsewhere. US Medicare rules say [an algorithm cannot be the sole basis](https://www.cms.gov/newsroom/fact-sheets/2024-medicare-advantage-and-part-d-final-rule-cms-4201-f) for denying a patient's care. Europe gives people a [right not to be subject to a decision made solely by a machine](https://gdpr-info.eu/art-22-gdpr/) when it seriously affects them. A man recovering from a broken leg belongs on the protected side of that line.

And the industry going hardest at all this is insurance. The Institute of Applied AI went through 2025 SEC filings and found it mentions AI more than any other industry, tech included, and other surveys put [most insurers already using AI tools](https://www.insurancejournal.com/news/national/2026/03/10/861186.htm). The front line for this is not some distant frontier. It is the company that processes your claim.

So before you automate anything, sit with the question underneath the obvious one. Everyone asks whether a machine can do the job. The harder question is whether it should be the one deciding at all. Because a machine can make the call. It will never be the one who has to answer for it.
