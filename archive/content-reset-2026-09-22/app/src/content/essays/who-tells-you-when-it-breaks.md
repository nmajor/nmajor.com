---
title: Your AI will go wrong. Who tells you?
summary: "Amazon took five months to spot a $1.8 million AI overrun. Kinney Drugs found out from patients getting wrong dosages. In every case this month, the alarm came from outside the team that switched it on."
pubDate: "2026-08-11T14:00:00.000Z"
author: Nicholas Major
draft: true
readingMinutes: 4
heroTitleLead: "Your AI will go wrong. "
heroTitleAccent: "Who tells you?"
heroLede: "Amazon took five months to spot a $1.8 million AI overrun. Kinney Drugs found out from its patients. Nobody had picked who was watching."
---

Amazon spent $1.8 million on one AI task that didn't work, and took five months to notice.

The task was dull. Line up author details against listings on the shopping site. The Financial Times reports staff were [briefed on the episode](https://finance.yahoo.com/technology/ai/articles/amazon-blew-1-8-million-143000231.html) as an 860% cost overrun. Amazon's line is that it's experimenting and learning, that it has built tools and guardrails to help teams monitor AI spend, and that this was one of a handful of cases across hundreds of thousands of employees.

Five months. At Amazon, which sells the monitoring.

Kinney Drugs put an AI phone assistant called Burt on incoming patient calls in May. It's an employee-owned pharmacy chain across New York and Vermont, so this is not a technology company doing a technology thing. By August, Burt was off the phones. Patients had reported [incoherent calls, wrong medication dosages, and missed prescription notifications](https://www.wcax.com/2026/08/07/kinney-drugs-pulls-back-ai-phone-assistant-after-hundreds-customer-complaints/), and the chain went back to a touch-tone system for incoming calls. Burt kept one job, opt-in outbound refill texts.

Read that again. The thing that detected the failure was patients. Hundreds of them, over about three months, some of them calling about their dosages.

To Kinney's credit, their president John Marraffa didn't dress it up. On the failures: "We did not, and we own that." That's a straighter answer than most companies manage, and it's local reporting from one outlet, so treat the detail as thinner than the Amazon numbers.

Then there's the version where nobody has noticed yet. Curative's CEO Fred Turner says the company built a replacement CRM in about two months and cancelled a [$600,000-a-year Salesforce contract](https://finance.yahoo.com/technology/ai/articles/curative-ceo-says-company-ditched-090701283.html). In the same interview: spend on Anthropic models has been growing roughly 6x every month, from tens of thousands of dollars to millions a month. Both numbers, one conversation, nobody doing the subtraction. If the model bill really is millions a month, the contract they cancelled is worth less than a single month of the thing that replaced it.

That's a good trade if the CRM is doing more work than Salesforce was, and Turner says nobody was using Salesforce anyway. Which is its own finding, and not a happy one. But it's a trade, and it should be priced as one.

SAP had an alarm go off eventually. The travel budget. An internal email [obtained by 404 Media](https://www.404media.co/software-giant-sap-stops-most-travel-and-hiring-because-of-ais-soaring-cost/) shows most travel and hiring suspended, with exceptions for AI-related travel and AI hires, and the company saying it needs to "be disciplined in how we spend." No AI cost figures were given. So the first visible consequence of the AI budget was that people stopped flying.

Every one of these companies has dashboards. Amazon builds them for a living. What none of them had was a number, agreed before switching on, that would pull the thing.

I keep meeting a version of this. Somebody wires an AI tool into a live process, and there's a monitoring plan in the sense that the data exists somewhere. There's no threshold, no owner, and no interval. So the tool runs until an outside party gets loud enough. A reporter. A patient. The finance team wondering why nobody's flying.

Every other system in your business has this solved and you didn't think about it. Your invoices have a variance alert. Your production line has a QA gate. Your call centre has a complaint threshold that escalates. Nobody had to argue for those. They arrived with the process, usually because something went badly wrong once and somebody wrote a rule.

AI has been arriving without them, and I think it's because it doesn't feel like infrastructure when you turn it on. It feels like software you're trying. Trials don't get thresholds. Then the trial quietly becomes the process, and it's answering the phone.

The fix is unglamorous and takes about an hour. Before it goes live, write down what number would make you switch it off, who is looking at that number, and how often they look. Not the usage dashboard, which the vendor gives you free because usage is easy to count. The number that means it's hurting someone: complaint rate, exception rate, spend against a cap, error rate on the thing it's actually deciding. Then put a name and a date next to it.

If you can't answer who's watching, you already know the answer. It's whoever it hurts.

Amazon found out in five months. Kinney found out from patients. In both cases the alarm worked. Neither company chose it.
