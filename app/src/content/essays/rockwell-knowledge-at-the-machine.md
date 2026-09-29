---
title: Rockwell put 30 years of knowledge at the machine
summary: Rockwell's maintenance copilot shows what LLMs change about retaining hard-won operational knowledge, and how much work still sits around the model.
pubDate: 2026-09-29T11:25:00Z
author: Nicholas Major
draft: false
approved: "Nicholas Major 2026-09-29 (via chat)"
emailedAt: "2026-09-29T11:28:54.099Z"
---

Rockwell interviewed technicians with 20 to 30 years on the factory floor before it built their maintenance copilot.

Its Singapore factory has 394 pieces of equipment. When one stopped, a technician would search hundreds of pages of manuals. If the documented fix failed, they found someone who remembered seeing the fault before and worked through it by trial and error.

That made repair time depend partly on who happened to be working. A newer technician on a night shift had a different knowledge base from a veteran standing beside them during the day.

Rockwell chose a problem that suits an LLM unusually well. The knowledge existed. The problem was retrieving the relevant piece of it, in the language of the person asking, while a machine was down.

## The work before the prompt

Rockwell's team sat down with its technicians and documented what they had learned. It organized that experience by symptom, cause and response, then combined it with equipment manuals, maintenance history and data passing through the factory's manufacturing systems. [IndustryWeek describes that process](https://www.industryweek.com/technology-and-iiot/artificial-intelligence/article/55407517/rockwells-singapore-lighthouse-plant-heavily-leverages-ai) in more detail.

Azure AI Search retrieves relevant material. The language model interprets the question and turns that material into a conversational answer. Public accounts do not show the assistant controlling machinery. It suggests likely causes, surfaces previous fixes and walks the technician through a manual. The technician still diagnoses and repairs the equipment.

Rockwell also put the interface beside the machine. Technicians can use text or voice on a tablet, and Microsoft says some use smart augmented-reality glasses. They do not have to leave the fault, find a desktop and work out which repository to search.

That is user-experience design, even with safety glasses on.

Rockwell reports that mean time to repair fell from 18 minutes to 12. [Microsoft says](https://news.microsoft.com/source/features/digital-transformation/rockwell-automation-pairs-ai-with-decades-of-shop-floor-know-how-so-workers-can-solve-glitches-faster/) machine downtime fell 33% and the time needed to become competent at troubleshooting fell from nine months to three. The company has not published the measurement methods behind those figures, so I would treat them as reported outcomes rather than independent proof.

The build order matters more than the headline numbers. Rockwell picked a bounded retrieval problem, did the slow work of capturing experience, and designed the interface around the moment that experience was needed.

## NASA had the knowledge, too

NASA understood the value of institutional memory long before LLMs. Its internal Lessons Learned Information System was supposed to carry knowledge from one project to the next across engineering and operations.

The repository struggled to do that job. A [2002 Government Accountability Office review](https://www.gao.gov/products/gao-02-195) found that 27% of surveyed managers had not heard of the system. Fifty-eight percent said NASA's processes did not give them the right lessons at the right time, and 53% found useful lessons less than a quarter of the time.

A decade later, a [NASA Inspector General audit](https://oig.nasa.gov/docs/IG-12-012.pdf) surveyed managers from 28 projects. Sixteen had used the system and 12 had contributed to it. Respondents described it as outdated, difficult to use and often irrelevant to their work.

NASA's system predates LLMs and served project managers rather than factory technicians. It is the before picture. The organization knew that experience should be captured, but its repository could not reliably turn a current problem into the right piece of past experience.

That old ambition is more practical now. Someone can describe a problem in ordinary language instead of knowing the repository's categories or search syntax. A retrieval system can find the relevant source material, and the model can return it in a usable form.

The model cannot interview retiring technicians. It cannot decide which account of a repair is correct, keep a manual current or choose where the interface belongs. Those remain organizational and product decisions.

Rockwell started with 30 years of experience in people's heads. It ended with that knowledge available at the machine.
