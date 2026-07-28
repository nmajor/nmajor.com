# Follow-up hunt: Peninsula School District (WA K-12)

Fetched: 2026-07-20
Lane: follow-up reporting on existing case-study library entry
`research/case-studies/entries/peninsula-school-district-vibe-coding.md`

RESULT: **Follow-up FOUND** (multiple, all post-dating the original K12 Dive / EdWeek stories).
Savings figure has DRIFTED across tellings. No board minutes, no state audit, no
independent verification of realized savings found.

---

## Timeline of coverage (original + follow-ups)

| Date | Source | Figure quoted |
|------|--------|---------------|
| 2026-04-10 | K-12 Dive (original) | "up to $250,000" expected saving by 2026-27 |
| 2026-04-19 | Jacob Kantor LinkedIn (reshare of K12 Dive) | up to $250,000 |
| 2026-04-27 | **CIOnews.com interview (FOLLOW-UP)** | no dollar figure at all |
| 2026-05 | EdWeek (original-ish) | "~$200K", Hagel says "may save around $220,000 annually—perhaps much more" |
| 2026-05-25 | League of Innovative Schools LinkedIn | "nearly $220,000" |
| 2026-05-26 | **Kris Hagel LinkedIn + district blog (FOLLOW-UP)** | "sunsetting about $250,000 in software subscriptions" |

Note: LinkedIn activity-ID timestamps decoded from the post IDs.

---

## FOLLOW-UP 1 — CIOnews.com interview with Kris Hagel

URL: https://www.cionews.com/post/diy-ai-platform-edtech-kris-hagel-peninsula-school-district
Published: 2026-04-27
Title: "'Built For Our Frameworks': How A Public School District Replaced EdTech
With A DIY Platform And Coding Agents"

Verbatim excerpts (via Tavily extract, 2026-07-20):

> Kris Hagel, CIO at Peninsula School District, has spent nearly two decades at the
> same district, moving from overhauling aging infrastructure to building the
> district's own AI platform from scratch. A Certified Education Technology Leader
> and CoSN board member, he brings both the technical depth of a working developer
> and the instructional grounding of a leader who has built curriculum-aligned
> systems from the ground up.

> Pennies for prompts: The economics of that shift have changed faster than most
> districts realize. "Essentially, the code is cheap these days," Hagel said. "A $100
> a month Claude Code subscription gets you a whole lot you can add to platforms." At
> that price, a six-to-eight-week build cycle is viable. The district's instructional
> coaching app, which lets teachers upload audio or video of their class and receive
> feedback against multiple pedagogical frameworks, went from concept to a pilot in
> about three weeks. "We put it in the self-service portal for any teacher to install
> on their laptop if they want to," Hagel said. "It's now available for all 600
> teachers."

> That build-first philosophy is already reaching the district's back office. When
> the enrollment coordinator was preparing to leave, Hagel and the CFO mapped out how
> much of the job was rules-based and handed it to an agent. The district publishes
> everything it builds to its public GitHub, free for any school to use. "I sat in
> the vendor hall at the conference last week, and I looked around and said, I can
> rebuild that in three days," Hagel said. "Your product is way more complicated. I
> don't even know that I would try and tackle it," he continued, "but that doesn't
> mean somebody else isn't going to."

> The district's in-house platform traces back to an open-source project from
> Vanderbilt University designed to let institutions safely interact with frontier AI
> models. When it became clear the platform was built for university researchers
> rather than K-12 classrooms, Hagel's team began building beyond it, using coding
> agents to develop tools aligned to the district's own instructional frameworks.
> What started as a workaround is now a full platform.

> The governance question that follows is one every district will eventually face:
> What happens when anyone in the organization can build, not just IT?

NEW DETAIL vs original entry:
- Claude Code price now quoted as **$100/month**, not $200/month (original K12 Dive said $200/mo).
- LessonLens "now available for all 600 teachers" — scale confirmation.
- **Job displacement detail, new**: departing enrollment coordinator's rules-based work
  handed to an agent rather than backfilled.
- Platform provenance: forked from a **Vanderbilt University open-source project**
  (this is Amplify GenAI — see AWS item below), not built from zero.
- District publishes builds to a **public GitHub**.
- NO dollar savings figure given in this follow-up.
- Maintenance/ownership still not addressed with any specificity.

---

## FOLLOW-UP 2 — Kris Hagel's own district blog post + LinkedIn

URL (LinkedIn): https://www.linkedin.com/posts/krishagel_build-products-our-agents-can-use-activity-7465112657281478656-WKo0
Post title: "Build Products Our Agents Can Use"
Date: 2026-05-26 (decoded from activity ID 7465112657281478656)

Hagel verbatim:

> A few weeks ago, K-12 Dive and others covered our work at Peninsula School District,
> building our own tools and sunsetting about $250,000 in software subscriptions. The
> dollars were never the point. The precedent was.
> I just wrote the follow-up that the article deserves, and the short version is this:
> the future of EdTech is not every product having its own chatbot. It's district-owned
> agents that coordinate work safely across every system we run. SIS, LMS, HR, special
> ed, finance, transportation, all of it.
> No single vendor assistant can do that. Ours can, if your product lets it.

Commenter (James Cantonwine, district director of research and assessment):
> Kris is showing admirable restraint here in not naming specific companies that are
> either trying to building moats or are putting their heads in the sand about the
> changes needed to match what's already here.

Commenter (Luke Allpress):
> The action steps are concrete and doable. APIs, MCPs, and audit trails. Agent layer
> in RFPs and DPAs. Agent readiness frameworks and industry standards.

NOTE: Hagel himself calls this "the follow-up that the article deserves" — but the
follow-up is about **EdTech vendor strategy**, NOT about whether the savings landed.
He uses past-progressive "sunsetting about $250,000", still not "cancelled and banked".
"The dollars were never the point" is a notable rhetorical retreat from the headline number.

---

## FOLLOW-UP 3 — AWS Champions / govtech (platform provenance)

URL: https://www.govtech.com/champions/k12/peninsula-school-district
Dated on page: July 25, 2025 (predates the vibe-coding stories; included for platform context)

> Peninsula School District has been named a 2025 AWS Champions Award winner for its
> strategic and forward-thinking implementation of Amplify GenAI, an open-source
> generative AI platform hosted on Amazon Bedrock.

> "AWS Services, in particular Bedrock, has opened up amazing possibilities for us to
> forward our AI goals and initiatives throughout the Peninsula School District. We are
> able to offer personalized tools for staff powered with some of the latest frontier
> models." — Kris Hagel, CIO

CONTEXT: confirms "AI Studio" = Amplify GenAI (the Vanderbilt open-source project) on
Amazon Bedrock. The ~$600/month figure in the original entry is for this.

---

## Board minutes / audit search — NEGATIVE

Searched: psd401.net board pages, BoardDocs (go.boarddocs.com/wa/psd401/Board.nsf/Public),
monthly budget reports page, and general web for "Informed K12" + Peninsula + 2026-27 budget.

- BoardDocs portal is a JS app; agenda item text is not indexed/searchable via web search
  or Tavily extract. Board meeting dates confirmed (regular meetings 2026-07-14,
  2026-08-18, etc.) but **no agenda item, minutes text, or budget line referencing
  cancellation of Informed K12 or any named ed-tech contract was retrievable**.
- psd401.net/monthlybudgetreports exists but content is not exposed to crawlers.
- **No Washington State Auditor's Office report on Peninsula SD touching this was found.**
- Informed K12 (informedk12.com) still markets normally; no public statement about
  losing the Peninsula account.

**NO EVIDENCE FOUND that the $200k-$250k was realized.** As of 2026-07-20, the
2026-27 school year has only just begun; the figure remains projected.

---

## Contradicting / complicating signal

URL: https://www.gigharbornow.org/news/education/peninsula-school-district-taps-the-brakes-on-screen-time-for-students
(Gig Harbor Now, local nonprofit newspaper — date not captured precisely, 2026)

> The school board on Tuesday approved a nearly $4.8 million, four-year, lease-to-own
> contract with Apple to acquire MacBook Neos for all students. Grades 1 through 12
> will receive the devices this fall. The board's resolution shows an estimated cost
> of just under $4.8 million and authorizes the district to take on non-voted debt up
> to $4.9 million.
> The contract calls for a fixed interest rate of 1.7%. CFO Ashley Murphy said the
> district is financially better off in a lease agreement rather than purchasing the
> Macs outright.

> The Peninsula School District will de-emphasize use of screens in some grades next year.

RELEVANCE: the same district and same board, in the same period, took on ~$4.8M of
non-voted debt for hardware. Useful proportion check — the celebrated ~$220k software
saving is ~4.6% of one hardware contract. Not a contradiction of the savings claim,
but important context that "district saves $250k with AI" is a small line item in the
district's actual technology spending posture.
