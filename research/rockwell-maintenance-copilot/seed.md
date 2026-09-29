# Rockwell maintenance copilot: working seed

## Status

Nick has supplied the position, selected the title and opening line, and approved NASA as the historical counterexample. Ready for drafting.

## Selected title

Rockwell put 30 years of knowledge at the machine

## Selected opening line

Rockwell interviewed technicians with 20 to 30 years on the factory floor before it built their maintenance copilot.

## Thesis

LLMs make an old knowledge-retention ambition newly practical, but Rockwell's result depended on the work around the model: capturing technicians' experience, maintaining it, structuring it for retrieval and delivering it beside the machine.

## Why a reader should care

Established companies often have the knowledge needed for a useful AI system already, but the model cannot make that knowledge usable on its own. Someone has to collect it, maintain it, structure it for retrieval and deliver it where the work happens.

## Tactical take-home

Look for lesson-learned and experiential knowledge that already matters to the operation, then treat its capture, maintenance and point-of-work interface as part of the AI system.

## Shape

Short, news-shaped case study. The evidence should show what Rockwell did and why it worked without turning the close into advice.

## Available spine material

- Microsoft published the customer story on September 24, 2026.
- Rockwell's Singapore technicians use an in-house maintenance assistant when machines stop.
- The assistant searches manuals, manufacturing software, and a database of fixes contributed by engineers with 20 to 30 years on the shop floor.
- Rockwell says downtime fell 33%, service and spare-parts costs fell about 25%, and troubleshooting onboarding fell from nine months to three.
- The World Economic Forum separately says the Singapore site deployed more than 50 digital and AI systems. Across the whole programme, units per person-hour rose 43%, defects fell 35%, and time-to-competency fell 67%.
- Important distinction: the Microsoft story attributes the 33%, 25%, and nine-to-three-month changes to the maintenance work. The WEF figures cover the site's broader programme and cannot be credited to the assistant alone.
- Nick's wording: "this is a really good example of playing to the strengths of LLMs."
- Nick sees the core as an information-retrieval problem.
- Nick expects the technician interviews and maintenance of the corpus to be heavy work that organizations must be prepared to do.
- Nick sees the symptom-cause-response structure as deliberate preparation for retrieval.
- Nick sees the tablet, voice and smart-glasses access as an interface-design and user-experience decision, even in a factory.
- The technical nuance to preserve: the LLM supplies the natural-language interpretation and response layer; Azure AI Search performs the disclosed retrieval. Do not describe the language model itself as the whole retrieval system.

## Claims to back

- Exact scope and measurement basis for the 33% downtime reduction.
- Exact scope and measurement basis for the roughly 25% service and spare-parts cost reduction.
- Whether the nine-to-three-month onboarding figure is measured or estimated.
- What Rockwell means by "trained on" worker knowledge, and how technicians contributed or approved records.
- Whether the assistant retrieves instructions only or can act on equipment.
- Rollout status beyond Singapore.
- Whether a named company has failed on a comparable corpus, retrieval or point-of-work interface decision.

## Open questions

- Which counterexample is close enough to sharpen the argument without dragging the essay into an unrelated chatbot failure?
- Should the counterexample be a short contrast inside the Rockwell story or the bookend at the close?
- The main Rockwell source is a Microsoft customer story. Keep all outcome figures attributed and use only the reconciled forms in `report.md`.

## Proposed outline

1. A stopped machine used to send a technician into hundreds of manual pages or looking for a veteran colleague.
2. Rockwell chose a problem that suits a retrieval-backed language interface.
3. The difficult work came before the query: interviewing technicians, maintaining the corpus, and structuring fixes by symptom, cause and response.
4. Rockwell completed the product by putting text, voice, tablet and smart-glasses access at the machine. That is a user-experience decision, not model capability.
5. Use NASA's pre-LLM Lessons Learned Information System as the before picture: the organization understood the value of retained knowledge, but its repository and search experience did not reliably deliver the right lesson at the right time.
6. Separate the assistant-specific figures from the wider factory programme, and label the customer-reported numbers honestly.
7. Close at the machine: LLMs change what is possible, but the corpus and the interface make the knowledge usable.
