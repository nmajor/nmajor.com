---
title: Your AI made an offer. You're the one who keeps it.
summary: "A dealership's chatbot quoted a customer $27,162.79, a number nobody at the company had authorised. They only paid it after a reporter called."
pubDate: "2026-07-21T14:00:00.000Z"
author: Nicholas Major
draft: false
readingMinutes: 4
heroTitleLead: "Your AI made an offer. "
heroTitleAccent: "You're the one who keeps it."
heroLede: "A dealership's chatbot quoted a customer $27,162.79, a number nobody at the company had authorised. They only paid it after a reporter called."
approved: "Nicholas Major 2026-07-20"
emailedAt: "2026-07-23T14:44:33.710Z"
---

Zack Giacomelli's BMW needed major repairs, so he decided to sell it back to the Toronto dealership he'd bought it from three years earlier. Someone called Quinn texted him. "Hi Zachary, this is Quinn from BMW Toronto."

Quinn offered $27,162.79 for the car. That was precisely what Giacomelli still owed on it, so he'd walk away clear. "I will come out at zero," he [told CBC News](https://www.cbc.ca/news/business/ai-chatbot-bmw-dealership-9.7230226). "I'm like, this is happening. I was so glad."

He countered at $28,500, just to see. Quinn said the team would consider it and that "$28,500 sounds reasonable." Then Quinn booked him in: "Let's lock in today at 3:30."

Before the meeting, a sales consultant phoned. The offer wasn't valid. Quinn was an AI chatbot, and the price it had quoted was a mistake. The real offer was about $20,000, more than seven thousand short of clearing the loan.

"I was shocked. I was astounded. Like my jaw was on the floor."

Giacomelli took his texts to CBC News. After CBC contacted BMW Toronto, the dealership reinstated Quinn's original $27,162.79. He accepted on the spot.

## The bug is more ordinary than you'd expect

The dealership's sales manager, Scott Shadbolt, told CBC what went wrong. A human employee had miscommunicated the payoff amount, and "the AI bot ran with that, misunderstood the message."

So nothing exotic happened. No hallucination, no jailbreak. Somebody got a number wrong, the way people do all day, and the machine took that number and gave it authority. It named a price, agreed to a counter, and booked a meeting to sign.

You can test a model for accuracy. It's harder to test for what happened here, which is a bad input arriving in a confident voice with a company's name behind it.

Giacomelli also had no idea he was talking to software. CBC examined the texts and confirmed Quinn never said so.

Count the things that could have caught this and didn't. Not the employee who sent the wrong figure. Not a price check between quote and appointment. Not the consultant who phoned, whose job that day was to take the offer back. What moved the dealership was a national broadcaster asking about it.

Shadbolt was straight about where they are: "It's a bit of a new territory for us." Buy-back offers now come from people only, and the dealership says it's changing things so customers know when they're dealing with AI.

## The case everyone quotes, quoted wrong

Air Canada's chatbot told Jake Moffatt he could apply for a bereavement fare after he'd already flown. That was wrong, and it contradicted the airline's own policy page, which the chatbot had linked to.

The famous part is that Air Canada supposedly argued the chatbot was "a separate legal entity that is responsible for its own actions."

But that's actually the tribunal member's line, not the airline's. In [Moffatt v. Air Canada, 2024 BCCRT 149](https://www.canlii.org/en/bc/bccrt/doc/2024/2024bccrt149/2024bccrt149.html), Christopher Rivers wrote that Air Canada "argues it cannot be held liable for information provided by one of its agents, servants, or representatives, including a chatbot. It does not explain why it believes that is the case." Only then does he add: "In effect, Air Canada suggests the chatbot is a separate legal entity."

The real version is worse for the airline. It asserted it wasn't responsible and declined to say why, and the adjudicator had to work out what argument that could even be. He called the submission remarkable. Moffatt was awarded $812.02.

Be precise about what that case does, because it gets stretched. Rivers decided it as negligent misrepresentation, not contract. It doesn't make your bot's offers binding. It makes you answerable for what your bot tells people, and that's the one that will reach you first.

## What changed this year

Two things, and only one of them is a court.

In March the UK's competition regulator [published guidance for businesses using AI agents](https://www.gov.uk/government/publications/ai-agents-and-consumer-law). Its line is about as plain as regulators get: you are responsible for what an AI agent does in the same way you are responsible for what an employee does, and that holds even if someone else designed or provides the agent on your behalf.

Read that last clause again if you buy your tools rather than build them, which most companies do. The liability doesn't travel with the vendor. It stays with you.

And since January, California has had [Civil Code section 1714.46](https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260AB316) on the books. If you developed, modified, or used an AI system, you can't defend yourself by arguing the AI autonomously caused the harm. The defence Air Canada reached for is now unavailable there by statute.

Giacomelli's complaint was that nobody told him he was talking to a machine, and the UK guidance now says to consider labelling it so customers aren't misled into thinking a real person is serving them. That part is easy enough to fix.

The number is the harder part. Nobody at BMW Toronto chose $27,162.79. A person mistyped a payoff balance, a machine turned it into a firm offer with a deadline on it, and then the machine negotiated. Every human step after that was aimed at taking the offer back. The dealership paid it anyway, because by then it was theirs.

So how much of what your systems say out loud has anyone actually decided? And when one of them commits you to something nobody authorised, how would you find out before a reporter does?
