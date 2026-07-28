SOURCE: n/a — this file records a NEGATIVE FINDING plus salvaged fragments
FETCHED: 2026-07-20

## FINDING: Reddit is unreachable from this environment

Tested 2026-07-20:
- `https://www.reddit.com/r/sysadmin/search.json?q=...&restrict_sr=1` with a normal desktop Chrome User-Agent -> **HTTP 403**
- `https://old.reddit.com/r/sysadmin/search.json?q=...&restrict_sr=1` with the same UA -> **HTTP 403**
- Both return a Reddit challenge/interstitial HTML shell (theme CSS variables, no post data), not JSON.
- `mcp__claude_ai_Tavily__tavily_extract` on a specific reddit.com thread URL -> `{"error":"Failed to fetch url"}`

So: no direct Reddit thread reading, and no full-comment capture from r/ITManagers, r/msp, r/sysadmin, r/ExperiencedDevs, r/cscareerquestions, r/datascience or r/devops in this sweep.

**Only partial workaround that worked:** Tavily *search* with `include_domains: ["reddit.com"]` returns Reddit URLs plus indexed snippets of post and comment text. Those snippets are captured below verbatim. They are fragments from a search index, NOT full threads, and cannot be verified against the live page from here.

## SALVAGED REDDIT FRAGMENTS (via Tavily index, unverified, anonymous authors)

### r/ITManagers — "Is AI making 'Buy' the wrong choice for internal tools?"
URL: https://www.reddit.com/r/ITManagers/comments/1qh9gdb/is_ai_making_buy_the_wrong_choice_for_internal/
Snippet (all the index returned):
"I am a CTO at a large construction company, and I am starting to second guess our long term 'Buy' strategy for internal systems.

For years, we have used"
<-- CUTS OFF. This is the single most on-target thread title found in the entire sweep for the mid-market build-vs-buy question, and the body is not retrievable from here. FLAG FOR MANUAL RETRIEVAL.

### r/ITManagers — "automating end to end service desk"
URL: https://www.reddit.com/r/ITManagers/comments/1inc71l/automating_end_to_end_service_desk_need/
Comment by u/SFBae32 (~1y ago at time of index):
"TBH, you may need to set their expectations. I have a whole team of engineers that do JUST this, automations are not a set it and forget it thing. Shit most of them require more work than just doing things manually sometimes. The end to end solution for this is to hire people to do it and maintain it. If they are rapidly growing, then the automation you set will break in 6months. One new department or reorg and nothing is no longer automated. IdPs like okta have automations, service now has automations, Atlassian has automations, platforms like Tray or airtable can be used to automate. As you can see, where and how you do automations can quickly get out of hand if there is no one to manage them."

Another comment from the same thread:
"Those ITSM tools are great but you'll need a dedicated team to build the automation parts, and care/feed it (not to mention the other parts in the tool). You also only [do] that if you have a very mature, standard, and stable organization. If people are constantly needing to fiddle or like to tweak things then you are in for an ugly automation journey."

### r/agency — "Been bumping into automation/AI lately and wanna know if it's actually worth it"
URL: https://www.reddit.com/r/agency/comments/1q450xv/been_bumping_into_automationai_lately_and_wanna/
Comment snippet:
"Well it depends on what you're automating. Basic 'automation' is usually disappointing. You end up spending more time maintaining the thing than it saves. The stuff that actually works tends to be boring and specific. Give it one clear input, one clear output. Then you can tell if it's broken instead of spending days/weeks tuning it. For us, the wins have been around monitoring and reporting. No matter how good your automation system is, 20% of it should have a person looking into it to make corrections. We learned the hard way because we were trying to fully automate stuff that actually needs a human eye. We'd set it up, it would return some bs output, and then we'd be fixing bad outputs instead of just doing the work. So it became a more 'guardrails first' approach."

### r/agency — "How are people using AI for internal agency tools?"
URL: https://www.reddit.com/r/agency/comments/1r96j76/how_are_people_using_ai_for_internal_agency_tools/
Comment snippet (on the succession/offboarding problem specifically):
"...the privacy/governance layer is the unsexy thing that bites later. when 4 different team members can ask the brain different questions, you very quickly want per-client + per-team-member access controls, audit logs of who-asked-what, and an offboarding flow when a contractor leaves. easy to defer. painful to retrofit."

### r/Rag — "Trying to build a RAG chat bot, turned into my worse nightmare"
URL: https://www.reddit.com/r/Rag/comments/1hl9x4i/trying_to_build_a_rag_chat_bot_turned_into_my/
OP snippet:
"I was recently assigned a RAG project from my company, to create a chat bot for their website's internal documentation. I tried all the tricks in the book, re-rank, contextual retrevier, hybrid search, knowledge graphs.....everything I could find on the internet. IT SIMPLY DOESN'T WORK....things keep getting interpreted the wrong way. Results are awful, to add some spice to the problem statement, I am not supposed to use any closed source techs like openai or antropic models or solutions. I choose to go with Lllama models. Things are crashing and as days pass my hopes are going down on this."

Top reply snippet:
"stop hammering away at the whole problem. Reduce the problem to something smaller. E.g. can you make just the retrieval portion work well on a specific subset of the docs? This may even be just using keyword search, by tagging the docs etc. work out what the specific business need is and solve that. 'We need a chatbot' is definitely not the problem they're actually trying to solve. The real problem is probably something like 'a way to effectively search our internal documentation'. Maybe LLMs are the answer, and maybe they're not."

### r/devops — "Resistance against implementing 'automation tools'"
URL: https://www.reddit.com/r/devops/comments/1pqk6m6/resistance_against_implementing_automation_tools/
Comment snippet:
"It's usually not people being against automation. It's unclear ownership, no standards, and automation feeling like 'extra work.' When things are busy, teams fall back to manual because it's familiar. That can catch up later when things don't scale and everything is harder to support."
(NOTE: this comment is signed "-Matt From ProVal" — it is vendor marketing, not a neutral practitioner. Do not cite.)

### r/n8n — "Why I Left n8n for Python (And Why It Was the Best...)"
URL: https://www.reddit.com/r/n8n/comments/1mcm9d2/why_i_left_n8n_for_python_and_why_it_was_the_best/
Snippet: author hit walls on file handling, scale and advanced logic in n8n and rewrote automations in Python. Relevant to the "we rebuilt it" pattern but no cost figures, no headcount, no org.

## ALSO SURFACED BUT NOT RETRIEVABLE
- LinkedIn post by Richard Meng (Berkeley Meng), 598 comments: "We've spoken with 30 companies who developed RAG-based chatbots on PDF documents. Every single one has failed." Includes: "many end up going back to rule-based chatbots. Our advice is simple - Do You Even Need RAG?" URL: https://www.linkedin.com/posts/berkeleymeng_weve-spoken-with-30-companies-who-developed-activity-7294883636653314049-sjTb
  CAVEAT: Meng is a founder selling an alternative to RAG. The "every single one has failed" claim is a vendor's sales framing, from a self-selected sample. Treat as a lead to chase, not a statistic.

---- END ----
