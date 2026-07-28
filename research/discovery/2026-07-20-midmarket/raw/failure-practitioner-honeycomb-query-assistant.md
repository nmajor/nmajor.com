SOURCE: https://www.honeycomb.io/blog/we-shipped-ai-product
TITLE: "So We Shipped an AI Product. Did it Work?" — Honeycomb engineering blog
AUTHOR/ORG: Honeycomb.io (named company, observability vendor, ~100-200 staff at time of writing). Post authored by Honeycomb engineering (Phillip Carter is the named author of the Query Assistant series).
DATE: 2023 (Query Assistant launched May 2023; this is the retrospective)
FETCHED: 2026-07-20 (Tavily extract + WebFetch)
QUALITY: HIGH — named org, named product, hard cost and adoption numbers, publicly self-critical. Fully verifiable (public post on company domain).
RELEVANCE: This is the closest thing found to "the maintenance bill nobody puts in the case study" written BY the vendor about its OWN shipped AI feature. Notably: the running cost was trivial ($30/mo) but the ADOPTION collapsed — users "graduated" off it and usage "dropped to almost nothing" after one week. The real bill was R&D and marketing opportunity cost, not inference.

---- EXTRACTED CONTENT, VERBATIM WHERE QUOTED ----

## Operational cost (verbatim)

"To summarize, Query Assistant only costs us a few hundred dollars per month. In both engineering and business lingo—that's cheap! The primary reason why it's so inexpensive is that we're using GPT-3.5 and very few of our token usage comes from text generation. Text generation (often called inference) is the most expensive operation for LLMs. If we had a feature where we needed to produce several thousand tokens per request with GPT-4 instead, our costs would be higher."

"On average, our monthly OpenAI bill is… $30. Even if we switched to GPT-4—which we won't, due to GPT-3.5 performing very well—it would still cost us less than $1k per month. Especially considering that these are entirely hosted services, so the cost for us is inexpensive. Finally, we store embedding vectors for dataset schemas in a Redis cluster in AWS. Each node costs us about $100 to store vectors."

Technical shape: GPT-3.5-turbo, ~1800 input tokens and ~100 response tokens per request; text-embedding-ada-002 for embeddings; embedding vectors stored in AWS Redis.

## Build cost (the part they do NOT quantify)

The post does not disclose engineering hours spent building Query Assistant. It states only that the project "diverted R&D and marketing resources." <-- NOTE: this is the missing line item. The dollar cost of inference is disclosed to the dollar; the engineering opportunity cost is disclosed only as a phrase.

## Adoption numbers

Feature awareness / adoption among teams that ran queries:
- Enterprise / Pro Plus tier: 82% adoption
- Self-Serve tier: 75% adoption
- Free tier: 39% adoption

Honeycomb's own admission: "a lot of people didn't even notice Query Assistant existed."

## Retention — the abandonment signal

"Users tend to 'graduate' from Query Assistant and stick with manual querying."

Usage "dropped to almost nothing" after one week for new users.

## What they counted as the win instead

Manual-querying retention for teams who used the feature: 26.5% still ran manual queries by week 6, versus 4.5% for non-users.
Complex query creation: 33% of Query Assistant users created complex queries versus 15.7% without it.

## What did not work

Trigger creation (which they describe as the most important activation signal) showed minimal correlation with Query Assistant use.
Sales impact was modest. Verbatim: "Query Assistant isn't some magical machine that automatically wins sales deals."

---- END ----
