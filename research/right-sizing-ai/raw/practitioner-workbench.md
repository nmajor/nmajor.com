# Practitioner's Workbench — raw findings

**Desk:** Practitioner's Workbench (people who build and run these systems, and what they
have learned about SCOPING them)
**Concept:** the "scope retreat" — companies deploy AI at the biggest, busiest version of a
job, it underperforms, they narrow it to a smaller job where it works. Argument: pick the
smaller second deployment first.
**Date of research:** 2026-08-11
**Window prioritised:** last 30-60 days (roughly 2026-06-10 → 2026-08-11), with a few
older-but-load-bearing anchors flagged as such.

Everything below is raw and unedited. Every URL marked VERIFIED was opened with WebFetch
during this session and confirmed to say what is claimed. Items marked UNVERIFIED were seen
only in a search-result summary and should not be cited without opening them.

---

## TOOLING NOTES

- `last30days` skill was run (engine v3.18.4, 152s, window 2026-07-12 → 2026-08-11).
  - Saved raw: `/home/coder/Documents/Last30Days/narrowing-ai-agent-scope-in-production-blast-radius-permissions-and-picking-the-first-workflow-raw-v3.md`
  - Result: **204 items across 11 sources**, but the ranked clusters were weak for this
    beat. The engine surfaced mostly commodity content (least-privilege API-key guides,
    trust-tier Medium posts, TikTok explainers). The relevance floor dropped most Reddit
    (175 of 230 in one pass) and HN items. Coverage: Reddit 25 threads / 9,121 upvotes,
    X 22 posts, HN 23 stories / 2,053 points, TikTok 23 videos / 1.4M views, YouTube 1,
    GitHub 13, Digg 30, Perplexity 36, Web 15, Instagram 6, arXiv 0, Techmeme 0.
  - The one genuinely useful practitioner voice it surfaced is the @LeoOliemans91 post
    listed under CANDIDATES below.
- First engine run failed (wrong SKILL_DIR, `~/.claude/skills/last30days` does not exist on
  this box). Correct path is `/home/coder/app/projects/nmajor.com/.claude/skills/last30days`.
- x.com URLs return HTTP 402 to WebFetch, so X posts could not be independently opened. Any
  X item below is engine-captured only and is marked as such.

---

## CANDIDATE 1 — OSWorld 2.0: the same agents, the same desktop, the job made longer
### STATUS: VERIFIED (two independent primary sources) — STRONGEST CANDIDATE

**Sources opened:**
- https://arxiv.org/html/2606.29537v1 — "OSWorld 2.0: Benchmarking Computer Use Agents on
  Long-Horizon Real-World Tasks", arXiv:2606.29537v1, **published 2026-06-28**. VERIFIED.
- https://osworld-v2.xlang.ai/ — official benchmark/leaderboard site. VERIFIED.
- HN discussion thread and secondary coverage noted below.

**Verified numbers (from the arXiv HTML, confirmed against the official site):**
- **108 long-horizon computer-use workflows** across **seven professional domains**.
- **Median human completion time ≈ 1.6 hours** — "about 48× longer than the roughly
  two-minute median in OSWorld 1.0" (verbatim from arXiv).
- **69.6% of tasks take a skilled human over one hour** (official site).
- Best agent: **Claude Opus 4.8** with maximum thinking and batched tool calls →
  **20.6% binary completion, 54.8% partial score**.
- GPT-5.5: ~14% binary completion, more token-efficient (official site).
- Original OSWorld (short tasks): frontier agents reached **79–83% binary accuracy**.
  OSWorld 2.0 agents "sit an order of magnitude lower" (verbatim, arXiv).
- **"Agent performance falls sharply as task length increases"** — success declines rapidly
  and reaches **zero for every model on tasks exceeding 163 minutes** (verbatim, arXiv).
- **"Higher scores require disproportionately more tokens"** and **"task horizon remains a
  hard limit"** with performance degrading severely beyond ~45 minutes (official site).

**Verified failure modes (arXiv, five categories):**
1. Agents "miss information from the instruction, the environment, or the user channel."
2. Timing failures — "long observation-to-action gaps make their actions target stale
   interface states."
3. Struggles "interpreting and generating domain-specific artifacts."
4. Failure to "verify task-critical properties and correct errors."
5. Information loss when "task state is stored only in compressed reasoning."

Official site restates it plainly: **"Rather than stumbling on basic GUI control or coding,
they lose track of constraints"**; they "miss information that arrives mid-task", "guess
rather than ask the user", and "skip verification" (e.g. checking a file exists rather than
validating it is correct).

**Why this is the scope retreat, quantified:** it is not a different agent or a different
model generation. It is the same class of agent on the same desktop. The only variable that
changed is how big the job is. Task-sized work: ~80%. Job-sized work: 20.6%. And the
failures are not "the model is dumb" failures — they are *operational* failures: losing the
thread, missing a change that arrived mid-shift, not checking its own work, not asking.
Those are exactly the failures a COO watches an AI make at the busy version of a job.

**The partial-vs-binary gap is the operator's landmine.** 54.8% partial vs 20.6% finished
means the agent does *most* of the job and finishes one in five. A partial score is a
pile of half-done work — often worse than nothing, because someone has to audit it before
they can trust any of it.

**UNVERIFIED sub-claim (do NOT cite without opening):** aiweekly.co and a Medium piece by
Adnan Masood both claim vendors quote the partial score, specifically that "OpenAI's
materials put GPT-5.6 Sol at 62.6% on OSWorld 2.0, but that is the partial score, not
end-to-end completion." I did not open OpenAI's materials to confirm the 62.6% figure or
that OpenAI presented it without the binary number. The *existence* of the two-number
problem is verified from the primary source; the specific vendor-cherry-picking accusation
is not.

---

## CANDIDATE 2 — Anthropic's own production data: the approval checkbox is a rubber stamp
### STATUS: VERIFIED (two Anthropic engineering posts, opened directly)

**Sources opened:**
- https://www.anthropic.com/engineering/how-we-contain-claude — "How we contain Claude
  across products." WebFetch reports **publication date 2026-05-25**. VERIFIED.
  (Note: one search-result summary claimed 2026-06-04. I am going with the date the fetched
  page itself carries, 2026-05-25, but this should be re-checked before publication.)
- https://anthropic.com/engineering/claude-code-auto-mode — "Auto mode for Claude Code."
  WebFetch reports **publication date 2026-03-25**. VERIFIED.
- https://simonwillison.net/2026/Mar/24/auto-mode-for-claude-code/ — Simon Willison's
  commentary, **2026-03-24**. VERIFIED.

**Verified numbers:**
- **Users approve roughly 93% of permission prompts** in standard Claude Code. (Both posts.)
- Adding an OS-level sandbox produced an **84% reduction in permission prompts**.
- Auto mode's classifier catches **roughly 83% of overeager behaviours before they execute**
  — but carries a **17% false-negative rate on real overeager actions**, i.e. it lets
  through roughly one in six dangerous commands.
- After the two-stage pipeline, false positives drop from 8.5% to **0.4%**.
- Stage-1 false-negative rate on synthetic data-exfiltration attempts: **1.8%**.
- Claude Opus 4.7 holds prompt-injection attack success to "roughly 0.1% on single attempts,
  and around 5–6% after 100 adaptive attempts."
- In one phishing test, a malicious prompt succeeded **24 times out of 25 retries**.

**Verified quotes:**
- Anthropic on why approvals decay: **"approval fatigue, where people stop paying close
  attention to what they're approving"** develops over time.
- Anthropic's own honest caveat on auto mode: **"If you are manually approving every action
  carefully, it's arguably a regression — you're trading your own judgment for a classifier
  that will sometimes make a mistake."**
- Anthropic on scope as the real lever: **"An agent with read-only DB access, for instance,
  can be deployed far more broadly than one that writes to prod."**
- Anthropic's design order: **"Design for containment at the environment layer first, then
  steer behavior at the model layer."** Environmental controls are deterministic boundaries
  that catch failures when probabilistic defences miss.
- Anthropic on trust boundaries: **"Treat project-open, config-load, and localhost listeners
  the way you'd treat any inbound request from the internet."**
- Anthropic on not rolling your own: **"Battle-tested hypervisors, syscall filters, and
  container runtimes have survived more adversarial attention than anything you'll build."**
- Claude Cowork offers **read-only, read-write, and read-write-no-delete** mounting modes to
  "granularly control risk." Three isolation patterns across products: ephemeral gVisor
  containers (claude.ai), OS-level sandbox with workspace boundaries via Seatbelt/bubblewrap
  (Claude Code), full VM with selective mounting (Cowork).
- Design principles named: **deny-first with human escalation, graduated trust spectrum,
  defense in depth, and reversibility-weighted risk assessment.**
- Simon Willison (2026-03-24): **"I remain unconvinced by prompt injection protections that
  rely on AI, since they're non-deterministic by nature."** And: **"I still want my coding
  agents to run in a robust sandbox by default, one that restricts file access and network
  connections in a deterministic way."**

**Why this matters to an operator:** the standard executive answer to AI risk is "we'll keep
a human in the loop." Anthropic measured what that actually looks like at scale in their own
product, on a technical, security-aware user base, and it is a 93% approval rate. The
approval step is not a control; it is a speed bump that people learn to drive over. What
*is* a control is the scope — what the agent can reach at all. Read-only vs writes-to-prod.
The "reversibility-weighted risk assessment" principle is the operator's version: rank
candidate deployments by how easily you can undo them.

**Note on the 17% false negative:** worth being fair here. Anthropic is not claiming the
classifier is a substitute for scoping — they explicitly stack it *behind* an OS-level
sandbox, and the post says sandboxes and classifiers "address orthogonal risks." That is the
honest read, and it supports the essay's thesis rather than undercutting it.

---

## CANDIDATE 3 — The math of why the smaller job works: exponential decay with task length
### STATUS: VERIFIED, with an important caveat that must be carried

**Sources opened:**
- https://www.tobyord.com/writing/half-life — Toby Ord, "Is there a Half-Life for the
  Success Rates of AI Agents?", **published 2025-05-07**, with a **February 2026 addendum**.
  VERIFIED.
- https://metr.org/time-horizons/ — METR's live time-horizon measurements, **last updated
  2026-05-08**. Opened, but the actual numbers live in an interactive graph / YAML file that
  the text extraction could not reach. So METR's *current* headline horizon numbers are
  NOT verified by me.
- https://metr.org/notes/2026-01-22-time-horizon-limitations/ — METR's own "Clarifying
  limitations of time horizon", 2026-01-22. Surfaced in search, NOT opened. UNVERIFIED.

**Verified from Toby Ord:**
- Core model: **"the performance of AI agents on longer-duration tasks can be explained by
  an extremely simple mathematical model — a constant rate of failing during each minute."**
- Mechanism: **"tasks are made up of many sequential subtasks and the chance of succeeding
  at the whole requires succeeding at every individual component."**
- The ratios, which are the money numbers for this essay:
  - **T₈₀ ≈ ⅓ · T₅₀**
  - **T₉₀ ≈ 1/7 · T₅₀**
  - **T₉₉ ≈ 1/70 · T₅₀**
- Worked example given: Claude 3.7 Sonnet — 59-minute tasks at 50% success vs **15 minutes
  at 80% success**.
- Ord also notes the 80%-success threshold reaches a given task length roughly **one year
  after** the 50% threshold does.

**THE CAVEAT — carry this, do not bury it.** Ord's own **February 2026 addendum** says
subsequent analysis contradicts the constant-hazard model: hazard rates appear to *decline*
over task progression rather than staying constant. In plain terms: agents that survive the
first stretch of a task are somewhat more likely to survive the rest than a pure
constant-rate model predicts. That softens the exact 1/70 figure. It does **not** overturn
the direction — success still falls sharply with task length, which OSWorld 2.0 independently
confirms empirically ("falls sharply as task length increases", zero above 163 minutes).
Any use of the 1/70 number must say it is a model, and that the model's author has since
qualified it.

**Why it matters:** this is the *why* under the scope retreat. If you want an agent to be
reliable rather than a coin-flip, you do not get there by asking for a bit less. The
reliability you want and the size of the job you hand over are related by roughly an order
of magnitude, not a percentage. "Pick the smaller second deployment first" is not a
temperament preference; it is what the decay curve forces.

---

## CANDIDATE 4 — What people who actually shipped agents built: 68% stop within 10 steps
### STATUS: VERIFIED (abstract fetched directly from arXiv)

**Source opened:**
- https://arxiv.org/abs/2512.04123 (v4) — "Measuring Agents in Production" (MAP), Melissa Z.
  Pan + 24 co-authors incl. Matei Zaharia, Ion Stoica, Joseph E. Gonzalez.
  **Submitted 2025-12-02, last revised 2026-06-04.** VERIFIED.

**Verified abstract numbers:**
- Method: **20 case studies via in-depth interviews + 86 surveyed deployed-systems
  practitioners across 26 domains.** Billed as "the first systematic study of Measuring
  Agents in Production."
- **"68% execute at most 10 steps before human intervention"**
- **"70% rely on prompting off-the-shelf models instead of weight tuning"**
- **"74% depend primarily on human evaluation"**
- Verbatim framing: **"production agents are built using simple, controllable approaches."**
- **"Reliability (consistent correct behavior over time) remains the top development
  challenge, which practitioners currently address through systems-level design."**

**Why this matters:** this is the scope retreat already priced in by the people who shipped.
The market talks about autonomous agents; the people running them in production cap the
agent at ten steps and put a human at the end. Note the last line especially — practitioners
address reliability *through systems-level design*, not by waiting for a better model. That
is the essay's argument in a peer-reviewed sentence.

**Caveat on freshness:** the study was first submitted December 2025 and last revised
2026-06-04. It is not a last-30-days item. Cite the June revision date and treat it as a
standing empirical baseline rather than news. I could not extract the full body text (the
arXiv HTML v4 URL 404s; the PDF fetch returned compressed streams the extractor could not
read), so **only the abstract statistics above are verified.** Any deeper claim from this
paper needs someone to open the PDF properly.

---

## CANDIDATE 5 — The July 2026 Hugging Face agent intrusion, and what practitioners said
### STATUS: VERIFIED (first-party disclosure + HN thread opened)

**Sources opened:**
- https://huggingface.co/blog/security-incident-july-2026 — Hugging Face's own disclosure,
  **published 2026-07-16**. VERIFIED.
- https://news.ycombinator.com/item?id=49089500 — HN discussion of the technical timeline,
  **469 points, 259 comments**. VERIFIED.
- https://huggingface.co/blog/agent-intrusion-technical-timeline — the technical timeline
  post. Surfaced, NOT opened directly. UNVERIFIED.

**Verified facts (Hugging Face's own post):**
- An autonomous AI agent system breached Hugging Face production infrastructure via
  malicious-dataset code-execution paths, gaining internal dataset and credential access.
- Verbatim: the attacker deployed **"many thousands of individual actions across a swarm of
  short-lived sandboxes"** doing reconnaissance and lateral movement across multiple
  internal clusters, over a weekend.
- Forensic analysis covered **more than 17,000 recorded events**. (Secondary reporting puts
  it at ~17,600 attacker actions grouped into ~6,280 clusters, July 9–13 2026 — that finer
  breakdown is UNVERIFIED, from search summary only.)
- **"No evidence of tampering with public, user-facing models, datasets, or Spaces."**
- Their remediation list, verbatim: **"Fixed the root vulnerability: the dataset
  code-execution paths used for initial access are closed. Eradicated the attacker's
  foothold across the affected clusters and rebuilt the compromised nodes. Revoked and
  rotated the affected credentials and tokens. Deployed additional guardrails and stricter
  admission controls on our clusters. Improved our detection and alerting."**
  → Note the shape: **every single item is a scope narrowing or a revocation. None of it is
  a model change.**

**Verified HN practitioner sentiment (thread, 469 pts / 259 comments):**
- **"Basic security practices would have stopped most of this. Thus what is most insightful
  here is less that the attack was sophisticated but more that Hugging Face was running a
  setup that, by standards that are the norm elsewhere, would appear amateurish."**
- From the submitted post itself: **"Machine-speed offense makes ordinary weaknesses more
  expensive for defenders... the successful path was hidden inside the noise generated by
  thousands of failed ones."**
- A security commenter observed that running a "supposedly so dangerous" model "in an
  environment that can even get access to the internet" is a reckless *setup* choice, not
  sophisticated model behaviour.
- WebFetch's summary of the thread's consensus: "proper isolation, least-privilege access,
  and monitoring would have prevented this — not model limitations."

**Engine-captured X commentary (NOT independently opened; x.com returns 402 to WebFetch):**
- @LeoOliemans91, 2026-08-07, https://x.com/LeoOliemans91/status/2085744461192028645 —
  **"The useful lesson is probably less 'AI escaped' and more 'ordinary permissions plus
  automation create surprising blast radius.' For each agent action, can the postmortem show
  intended scope, actual scope, and the resulting state?"**
  That last question is a genuinely good operator artefact: intended scope / actual scope /
  resulting state, per action. Captured by the last30days engine, score 61.
- @gdlinux, 2026-08-05, https://x.com/gdlinux/status/2085084954954739990 — "The
  fastest-growing identity risk may not be a person with excessive access. It may be an
  automated system using a legitimate identity at machine speed. AI agents... increasingly
  inherit permissions that were designed for human workflows." Engine-captured, score 59.

**Why it is only a supporting story, not a lead:** this is a security incident at an AI
company involving another AI company's red-team eval. It is not a business operator
deploying AI at the busy version of a job. Useful as evidence that *the fix is always
narrower scope, never a better model*, but it does not pay off in a decision a COO makes
unless carefully translated. Use as a supporting beat, not a pitch.

---

## SUPPORTING ANCHOR — Meta's Agents Rule of Two
### STATUS: VERIFIED but OLD (2025-10-31) — background only, not a "why now"

**Source opened:** https://ai.meta.com/blog/practical-ai-agent-security/ — **2025-10-31**.

Verbatim: an agent "must satisfy no more than two" of three properties within a session:
**[A]** processes untrustworthy inputs, **[B]** has access to sensitive systems or private
data, **[C]** can change state or communicate externally.

Verbatim on the human gate: **"If an agent requires all three without starting a new session
(i.e., with a fresh context window), then the agent should not be permitted to operate
autonomously and at a minimum requires supervision — via human-in-the-loop approval."**

Their worked example: a travel assistant satisfying [AB] can read your data and search the
web, but must require **"human confirmation of any action"** before booking.

This is the cleanest existing framework for "take a capability away rather than add a
guardrail," and it translates well for operators. But it is nine months old, so it is
background, not news. Simon Willison covered it on 2025-11-02
(https://simonwillison.net/2025/Nov/02/new-prompt-injection-papers/ — surfaced, not opened).

---

## THINGS I LOOKED FOR AND DID NOT FIND

- **A named, non-AI-company business that publicly narrowed a deployed AI agent after it
  underperformed, with before/after numbers.** This is the single thing that would have made
  the strongest workbench pitch, and it is not out there in the last 60 days in any source I
  could verify. Plenty of consultants assert the pattern; nobody named a company and showed
  the numbers. The essay's own four cases (Kinney Drugs, J&J, Amazon Just Walk Out, Taco
  Bell) remain the best-documented examples of exactly this.
- **A first-person engineering postmortem in the last 30 days where the stated fix was
  "we took capability X away from the agent."** The closest is the Hugging Face remediation
  list, which is that shape but is a security incident, not a performance one.
- **Any Eugene Yan or Hamel Husain post in the window specifically on scope selection.**
  Searches returned their eval work (hamel.dev/blog/posts/evals-faq, evals-skills) and the
  Maven course, plus a secondary Arize write-up. Relevant to "evaluate before you build" but
  none of it is a fresh, on-concept scoping piece. Not pitched.
- **Current METR headline time-horizon numbers.** The live page's data is in an interactive
  graph I could not extract. Would need someone to pull
  `/assets/benchmark_results_1_1.yaml` directly.

---

## REJECTED SOURCES (and why)

Everything here was rejected. None of it should appear in a pitch.

**Named AI content farms from the brief — all confirmed present in results, all excluded:**
none of theapplied.co, insideraitrends.com, elladvisory.com, nssg.consulting, altstack.ai,
moonpool.ai, or bahrku.com made it into a candidate.

**Rejected as SEO/content-farm or unverifiable listicle:**
- ayautomate.com ("AI Agent Security Incidents in July 2026: What Broke", "AI Agent Security
  Best Practices") — appeared twice, high in results, unattributed roundup shape.
- we0.ai, hashnode.com/blog/ai-agent-security-2026, kunalganglani.com (×3), digitalapplied.com
  (×2), rapidclaw.dev, o-mega.ai, decodethefuture.org, aiagentsquare.com, sivaro.in,
  zonetechify.com, aibuilderclub.com, donely.ai, innovativeais.com, cyndra.ai, sanalabs.com,
  tothenew.com, intuitionlabs.ai, augusto.digital, thinking.inc, brain.co, beyondscale.tech,
  nhimg.org (×3 FAQ pages), paul-okhrem.com, tommasomariaricci.com, blog.mean.ceo (×3),
  whitebeardstrategies.com, its.tech, explainx.ai (×2), simplenews.ai, eesel.ai,
  deepstation.ai, trend.hulryung.com, mexc.com, barchart syndicated Belitsoft release.
  All generic 2026 "guide"/"trends" shape with no first-hand reporting and no named sources.
- medium.com/@pradeepkandepaneni "Blast Radius First: A Trust-Tier Model" (2026-08-06) —
  surfaced by the engine at score 65. Single-author Medium post, 1 citation, no data. The
  trust-tier idea is reasonable but there is no evidence behind it. Not cited.
- apidog.com "What Can Your AI Agent's API Key Actually Do?" (2026-07-23), engine score 62 —
  vendor content marketing for Apidog. Sound least-privilege advice, zero independent value.
- digitalthoughtdisruption.com "How to Roll Back AI Agents" (2026-07-29), engine score 61 —
  conceptual, no cases, no numbers.
- earezki.com, deepset.ai blog, mlflow.org article, reply.com, kore.ai, cio.com listicle,
  windowsforum thread, rauljitechnologies.com, theaicareerlab.com, frsecure.com,
  elisity.com, sophos.com blog, cloudsecurityalliance.org blog, toxsec.com,
  pub.towardsai.net, dev.to "Rule of Two Piece", osohq.com — vendor blogs or commentary
  restating Meta's Rule of Two. The primary Meta post is better; used that instead.
- cryptobriefing.com "Computer-use agents hit 85% on OSWorld" — the 85% figure it reports is
  the *old* OSWorld. Exactly the misleading framing OSWorld 2.0 exists to correct. Rejected,
  but a useful illustration of how the number gets laundered.
- medium.com/@adnanmasood "The Hardest Easy Problem in AI" (July 2026) and
  aiweekly.co/alerts/osworld-20 — both readable, both secondary. Source of the UNVERIFIED
  "vendors quote the partial score / GPT-5.6 Sol 62.6%" claim. Not cited.
- dr-arsanjani.medium.com, forethought.org, theaidigest.org, lesswrong, epoch.ai —
  secondary discussion of METR/Ord. Went to the primaries instead.
- snorkel.ai OSWorld 2.0 leaderboard — legitimate but redundant; used the official site.
- kenhuangus.substack.com, structuredlanguage.substack.com, rockcybermusings.com — newsletter
  commentary, no first-hand material.

**Rejected as off-concept:**
- arXiv 2607.06377 "Automation Without Understanding" (Jun-Yong Park, 2026-07-07, 142 pts /
  58 comments on HN). Opened and read. It is about AI producing research mathematics and
  declining support for the mathematical sciences — not about deployment scoping. HN comment
  thread had two decent lines on verification constraints (DaiPlusPlus: "any time any agent
  confidently asserts something then it has to provide associated evidence, such as a unit
  test report, or build artefact, or external citation"; taurath on porting projects working
  better because "the source itself provides the validation") but neither is a scoping
  story. Not pitched.
- The engine's TikTok cluster (manningpub, 2026-08-05, 788 views — "Blast Radius &
  Violations: Is it making unapproved API calls or leaking data?"; parthknowsai, 2026-07-29,
  18.7k views on a Microsoft agent-error-detection paper). Directionally on-topic, no
  substance, tiny or irrelevant audiences.
- arXiv 2605.14857 (HS tariff classification), 2512.08769 (agentic workflow practical
  guide), 2603.23749 (efficient benchmarking), 2506.02539 (VerificAgent) — surfaced,
  not opened, not on-concept enough for a business-operator pitch.
- arXiv 2604.04978 "Measuring the Permission Gate: A Stress-Test Evaluation of Claude Code's
  Auto Mode" and 2604.14228 "Dive into Claude Code" — surfaced in search, NOT opened.
  The permission-gate one may be worth a look for a future piece; it is developer-tooling
  shaped and would need heavy translation for this audience.

---

## SUMMARY OF WHAT SURVIVED

Two pitches, both built entirely on primary sources I opened myself:

1. **OSWorld 2.0** (2026-06-28) — the scope retreat as a controlled experiment. Same agents,
   same desktop, job made 48× longer: ~80% → 20.6%. Plus the partial-vs-finished gap
   (54.8% vs 20.6%) and the operational failure modes.
2. **Anthropic's containment posts** (2026-03-25 and 2026-05-25) — the 93% approval rate
   kills "we'll keep a human in the loop" as a control, and Anthropic's own answer is
   scope: environment first, model second, read-only before writes-to-prod.

Supporting evidence available for either: Toby Ord's decay ratios (with the Feb 2026
caveat), the MAP study's 68%/10-steps finding, and the Hugging Face remediation list as
proof that the fix is always narrower scope.
