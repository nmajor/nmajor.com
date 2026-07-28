SOURCE: https://gothburz.substack.com/p/we-removed-the-immune-system
TITLE: "We Removed the Immune System" — The Cyber Populist (series: "The Confessions")
AUTHOR: Peter Girnus (named; a real, publicly known security researcher). Byline claims the narrator is "a Senior Program Manager on the AI Tools Governance team at Amazon."
DATE: 2026-04-21
FETCHED: 2026-07-20 (Tavily extract; post is partly paywalled — "Continue reading this post for free")
QUALITY: LOW-TO-MEDIUM CONFIDENCE — USE WITH CARE. Read the caveat below before citing anything here.

**** VERIFICATION WARNING ****
This is published under a series called "The Confessions" and is written in a heavily literary, first-person-confessional register ("I should tell you about December", "The ghosts have ghosts", "The medieval church sold indulgences after confession. This is that, but the sins are institutional."). That framing is a strong signal it may be a composite, dramatised, or partly fictionalised narrator rather than straight first-hand reporting, even though Girnus himself is a real named person. The post also opens by referencing OTHER outlets' coverage ("Everyone is reporting this as a story about duplication"), i.e. it is commentary layered on a leaked/reported Amazon document, not necessarily independent first-hand observation.
DO NOT pass the "247 tools" / "1,500 engineers" / "80% weekly usage target" numbers through as verified. They need to be traced to the underlying Amazon reporting before use. Also note: Amazon is a ~1.5M-employee company, not the mid-market reader's world.
*****************************

---- EXTRACTED CONTENT, VERBATIM ----

"I am a Senior Program Manager on the AI Tools Governance team at Amazon.

My role was created in January. I am the 17th hire on a team that did not exist in November. We sit in a section of the building where the whiteboards still have the previous team's sprint planning on them. No one erased them because we don't know which team to notify. That team may not exist anymore. Their Jira board does. Their AI tools do.

My job is to build an AI system that finds all the other AI systems. I named it Clarity."

---

"Everyone is reporting this as a story about duplication. About 'AI sprawl.' About the predictable mess of rapid adoption.

They are missing the point.

The barrier was the governance.

For 2 decades, the cost of building internal tools was an immune system. The engineering weeks. The maintenance burden. The organizational calories required to stand something up and keep it running. Nobody designed it that way. Nobody named it. But when building took weeks, teams looked around first. They checked whether someone already had the thing. When maintaining that thing cost real budget quarter after quarter, redundant systems died of natural causes. The metabolic cost of creation was performing governance. Invisibly. For free.

AI removed the immune system."

<-- THIS IS THE SINGLE MOST USEFUL IDEA IN THE WHOLE SWEEP for the mid-market operator angle: maintenance cost used to be the thing that killed redundant internal tools automatically. Cheap building removes the natural cull. Worth borrowing as an ARGUMENT even if the Amazon numbers are unusable.

---

"Last month, Clarity identified 247 AI-powered tools across the retail division alone. 43 of them do approximately the same thing. 12 were built by teams who did not know the other teams existed. 3 are called Insight. 2 are called InsightAI. 1 is called Insight 2.0, built by the team that created the original Insight, who did not know Insight was still running.

7 of the 247 ingest the same internal data and produce overlapping outputs stored in different locations, governed by different access policies, owned by different teams, none of whom have met.

Clarity is tool number 248.

Nobody cataloged it."

---

"The document calls this a 'data governance challenge.' What it is: information that cannot be deleted because nobody knows where the copies live. Including, sometimes, me. The person whose job is knowing.

Every AI tool that touches internal data creates these ghosts. Every team is building AI tools that touch internal data. Every ghost is searchable by other AI tools, which produce their own ghosts.

The ghosts have ghosts."

---

"I should tell you about December.

In November, leadership mandated Kiro. Amazon's internal AI coding agent. They set an 80% weekly usage target. Corporate OKR. ~1,500 engineers objected on internal forums. Said external tools outperformed Kiro. Said the adoption target was divorced from engineering reality.

The metric overruled them."

---

"We call this 'AI sprawl.' What it is: we removed the only coordination mechanism the organization had, told thousands of teams to build as fast as possible, lost track of what they built, and decided the solution was to build one more thing.

I am building that one more thing.

When I ship, there will be 249.

That's governance."

---- END (paywalled beyond this point) ----
