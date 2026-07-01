---
title: Fix the process first. The AI is the last step.
summary: "A bank that has done AI for fifteen years says the tool comes last. Here is what a messy process does to an AI system, and what fixing it actually takes."
pubDate: 2026-06-17
author: Nicholas Major
draft: false
readingMinutes: 4
---

BNP Paribas has used machine learning since long before ChatGPT, on credit scoring and fraud. So when its head of AI and IT, Su Yang, says ["agentifying a bad process just burns tokens"](https://www.thebigwhale.io/article/su-yang-bnp-paribas-agentifying-a-bad-process-just-burns-tokens), we should listen.

It's about order. The agent is the last step. The process is the first.

## Where the signal goes

I spend a lot of my time building multi-step AI systems, and the failures often cluster at the handoffs between steps.

The way I think about it, every workflow carries a signal from one end to the other. The signal is the goal, the quality bar, the desired end result, and what the person or system on the receiving end actually needs. Without automation, a good employee carries that signal through the whole job almost without noticing, because they understand the work and they understand the context around everything they do as part of a workflow or process.

An AI system has to be handed that signal at every step, and every handoff is an opportunity for the signal to thin or distort. Start from a workflow that was already vague, and the gaps are everywhere. The errors do not stay put. They compound.

Researchers who stress-test agents on long, interdependent tasks find the same shape I see in my own builds: the models do fine on short jobs and [break down as the steps stack up](https://arxiv.org/abs/2604.11978). What comes out the end is confidently wrong, the kind of thing people now call slop. And given the costs of some of the best models, it's expensive slop. [That is what burning tokens looks like](https://www.cnbc.com/2026/04/19/siiicon-valley-ai-agent-openclaw-problems.html).

The better the models get, the more this hides. A strong model papers over a vague step well enough that nothing looks broken, until the small losses compound and the result quietly turns to slop. I have watched a poorly defined process send a model chasing its tail, redoing work because no step ever told it cleanly what "finished" meant. Or it makes rookie mistakes because the end result and context were not well specified.

Companies get away with messy processes today because a person sits at each step. People carry a model of the world. They know what a customer is, where common mistakes happen in their work, and which things must absolutely be correct and perfect. They fill in the gaps in an unclear instruction from experience without being asked. A language model has none of that. It is a pattern machine, it cannot see the gap, and it keeps going.

## What fixing the process actually means

"Fix the process first" sounds like a technology problem. It is mostly operations work, and the lesson predates AI by decades. Bill Gates wrote a version in 1995 that people in operations have [repeated ever since](https://www.oreilly.com/library/view/eliminating-waste-in/9781430260882/9781430260882_Ch06.xhtml): automation applied to an efficient operation magnifies the efficiency, and, applied to an inefficient one, it magnifies the inefficiency. It is why lean manufacturing stabilizes a process before automating it. An AI agent just gets there faster, and bills you by the token.

In practice it is unglamorous and concrete:

- see how the work actually flows, not how the org chart says it does
- write down the steps that live only in a senior person's head, including the calls they make on instinct
- take the ambiguity out of every handoff, so the same information moves the same way each time
- decide in advance, in writing, how the exceptions get handled
- [get the data underneath it right](https://centricconsulting.com/blog/simplifying-processes-prior-to-standardization-and-automation/), because a clean process on messy data still fails

There is a rough test for this. Could a new hire run the process from the page, with nobody to ask? A new hire who hits a gap asks someone. An AI in the pipeline can't, so each gap the page leaves just becomes a failure. Reducing the work to something a less experienced person could follow is the same thing that makes it legible to a model.

This is why "just add AI to what we already do" disappoints. The return shows up when a company [redesigns the work](https://www.bain.com/de/insights/how-do-companies-create-value-with-ai/) instead of adding a model to the way people already work. BNP did the groundwork first, then aimed AI at narrow targets like document checks in know-your-customer and parts of its mortgage and credit decisions. Process, then model.

The companies that skip that step are easy to spot a year later. They bought a tool, pointed it at a process only their best people fully understood, and watched it generate [more cleanup than it saved](https://centricconsulting.com/blog/simplifying-processes-prior-to-standardization-and-automation/). The process never got better. They just found a faster, more expensive way to make slop.
