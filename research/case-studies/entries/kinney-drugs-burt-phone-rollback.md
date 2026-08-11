---
slug: kinney-drugs-burt-phone-rollback
company: Kinney Drugs
sector: Retail pharmacy
size: Employee-owned regional chain, New York and Vermont
category: failure
tags: [customer-service, voice-agent, healthcare, hipaa, rollback, pharmacy]
date_added: 2026-08-11
published: 2026-08-07
verified: source-read
confidence: medium
sources:
  - https://www.wcax.com/2026/08/07/kinney-drugs-pulls-back-ai-phone-assistant-after-hundreds-customer-complaints/
  - https://news.ycombinator.com/item?id=49244569
---

## What they did
Kinney Drugs introduced an AI phone assistant named Burt in May 2026 to handle incoming patient
calls. After hundreds of customer complaints, the chain reverted incoming patient calls to a
touch-tone system and kept Burt only for outbound prescription refill texts, on an opt-in basis.

## The numbers
- Deployed: May 2026. Pulled back: reported August 7, 2026 — roughly three months.
- Complaints: "hundreds" (reported aggregate; no precise figure, and no store or patient count
  disclosed).
- Reported failure modes: incoherent calls, incorrect medication dosages, missed prescription
  notifications.
- Cost of the deployment or the rollback: not disclosed.

## What broke / the caveats
The failures were not edge cases in a low-stakes channel — they included wrong medication
dosages and missed refill notifications at a pharmacy. Privacy questions were raised about
personal health information passing through the platform; president John Marraffa says Burt is
"fully HIPAA compliant" and that "the AI is not open-source and does not generate or manipulate
data," a claim that is asserted rather than evidenced in the reporting. Marraffa's line on the
operational failures — "We did not, and we own that" — is unusually direct for a company
statement. Single-outlet local-news sourcing; no vendor named, no independent audit.

## Why it matters for our beat
A traditional, non-tech, employee-owned regional business put a voice agent on its highest-stakes
customer channel, took real patient-safety complaints, and rolled it back to touch-tone inside
three months. The retreat position is instructive: they did not fix the agent, they moved it to
the one job where a wrong answer is cheap (opt-in outbound texts) and gave the risky job back to
a 1990s phone tree.

## Post angles
- The rollback shape is the lesson: keep the agent, move it to where being wrong is survivable.
- Where a mistake costs a dosage, "hundreds of complaints" is the detection system. That is not
  a rollout, it is a live trial on patients.
- Pairs with the customer-service rollback data (74% of firms rolling back bots) as the named,
  concrete instance behind an abstract survey number.
