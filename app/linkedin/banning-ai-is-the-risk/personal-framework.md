---
newsletter: banning-ai-is-the-risk
channel: personal
offsetDays: 3
angle: framework
# approved: ""   # Nick sets this. Until then it stays a draft and never schedules.
---
Before you let AI near real company data, make whoever wants it answer these five questions.

You do not need to be technical to run this check. You just need to ask it before the tool is live, not after.

This is not hypothetical. CB Financial, a Pennsylvania bank, just disclosed an AI data exposure to the SEC in an 8-K filing, after an employee fed customer records to a tool nobody had vetted.

Most AI risk inside a company is not exotic. It comes down to access: what the tool can see, what it can do, and where it can send things. These five questions surface all three in about ten minutes.

1. Does it even need this data, or would a redacted version do? Most tasks do not need real Social Security or card numbers to be useful. Leave out what it does not need.

2. What is the worst thing it could reach? Name the most sensitive system or file on the access list. That, not the demo, is your real exposure.

3. If it got fooled, what could it actually do? AI can be talked into following hidden instructions buried in an email or document it is reading. The term for this is prompt injection. Assume it happens, and ask what it could do next.

4. Can it send data out, and to exactly where? If the answer is not a short, named list, the answer is "anywhere." That is the line between a bad afternoon and a breach.

5. If it goes wrong on a Sunday night, can you see what it did and shut it off?

None of this needs an engineering team. It needs you to ask before, not after.

Which of these five would your team struggle to answer right now?

<!-- First comment (sources): least privilege, Saltzer & Schroeder 1975 https://www.cs.virginia.edu/~evans/cs551/saltzer/ · prompt injection https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/ -->
