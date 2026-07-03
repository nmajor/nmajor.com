---
title: Banning AI is the risk, not the safeguard
summary: "An employee's AI shortcut just became the first SEC filing of its kind. The lesson isn't to lock AI out. It's to give it the least access the job needs, and contain the rest. Mostly."
pubDate: 2026-06-30
author: Nicholas Major
draft: false
heroTitleLead: "Banning AI is the risk, "
heroTitleAccent: "not the safeguard."
heroLede: "An employee's AI shortcut just became the first SEC filing of its kind. The lesson isn't to lock AI out — it's to give it the least access the job needs, and contain the rest."
readingMinutes: 6
---

Earlier this year an employee at a Pennsylvania bank did something ordinary. To move faster, they ran customer data through an AI tool the bank had not approved. No hacker, no break-in, just someone trying to be efficient. The data included names, Social Security numbers, and dates of birth, and because of how sensitive that is, [the bank had to file an 8-K with the SEC](https://www.sec.gov/Archives/edgar/data/1605301/000160530126000021/cbfv-20260507.htm), the disclosure public companies reserve for material events. As far as anyone can tell, it is the first one ever caused by an employee's AI shortcut.

The easy lesson is "keep data out of AI." It is also the wrong one. AI is only useful when you give it something to work with. A model with nothing to look at is just a chat box. People reach for these tools because they help, and they help because you hand them something real.

## Give it less than it asks for

But look at what the employee did. To get a little help, they handed over everything. The job almost certainly did not need those Social Security numbers. X them out, and the tool could likely have done just as well. That is the first move, and the one people skip: give AI the least it needs, not the most convenient. A lot of the risk you are worried about, you can simply leave out.

## The old rules still apply, with a new wrinkle

Sometimes the useful thing does need the real data, and you cannot x it out. When that happens, you are back to a problem we solved a long time ago: how to give something powerful access without handing it the keys.

You already do this with people. A new hire gets the access their job needs, not the master key, and you check their work until you have earned the right to stop. Computing has had a name for it for fifty years, [least privilege](https://www.cs.virginia.edu/~evans/cs551/saltzer/): the least access the job needs, and no more. Keep a person in the loop on anything you cannot undo, and you have covered most of it.

The new wrinkle is what makes AI different from the tools you have secured before. A spreadsheet does exactly what you tell it. An AI can be talked into doing something else by the very material it is working on. Someone can bury instructions inside an email you asked it to summarize, or a document you asked it to read, and the AI may quietly follow them, with no hacking involved. This has a name, [prompt injection](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/), and the hard part is that nobody can reliably stop it. So you contain it instead. The question is not only what the AI can see, it is what it can do if it gets fooled, and where it can send things. The single most useful limit you can put on an AI is on where it is allowed to send data, because that is the line between a bad afternoon and a breach.

I build these systems, and the rule never changes: give it the narrowest reach that does the job, and watch what it can do with that reach.

Most businesses do not build any of this, they buy it, so the practical version is short:

- Put people on the company's paid AI account, not their personal ones.
- Pick a tool whose terms promise, in writing, not to train on your data.
- Set one rule everyone follows: customer records never go into a personal account.

That last rule alone would have spared the bank its filing.

## A few questions before you say yes

Before you let an AI near anything that matters, make whoever wants it answer these:

- Does it even need this data, or would an x'ed-out version do?
- What is the worst thing it could reach?
- If it got fooled, what could it actually do?
- Can it send data out, and to exactly where?
- If it goes wrong on a Sunday night, can you see what it did and shut it off?

One thing not to do is ban it. A ban does not remove the risk, it just moves it where you cannot see. Your people already use AI whether you bought it or not, and [the most-cited study this year](https://fortune.com/2025/08/19/shadow-ai-economy-mit-study-genai-divide-llm-chatbots/) found that holds at nearly every company. Forbid the official tool and your customer data ends up in someone's personal account, with no rules and no record, which is roughly what happened at the bank. Give people a safe path and make it the easy one.

## The part we are still working out

The foundation is settled, and it is older than AI: give the least access, contain the rest, keep a human on what you cannot undo. What nobody has fully figured out is the new part, a tool that reads and reasons and acts, and can be turned against you by the text it was only meant to read. Containing it shrinks the risk. It does not erase it, and anyone who tells you they have this solved is selling something. So do not wait for certainty, and do not lock the doors. Give AI the least access the work needs, contain it like the powerful new hire it is, and stay a little humble about the parts no one has figured out yet.
