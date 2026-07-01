# Content-discovery seed source list — applied / enterprise AI beat

> Raw subagent research dump. Saved verbatim per the raw-first research pattern. Verified June 2026. Counts approximate.

Beat: applied AI in practice — what people build with AI now, AI agents/coding/workflows, how AI gets integrated into real company systems at enterprise scale. Audience: technical decision-makers and operators.

## 1. Subreddits

High-signal (applied / enterprise / agents / coding / production):
- r/LocalLLaMA (~750k) — self-hosted/open-weight, GPU/hardware, quantization, local inference economics. "Can we run this on our own metal."
- r/LLMDevs (~153k, +69% YoY) — frameworks, agent memory, cost, debugging real builds.
- r/AI_Agents (~385k, +147% YoY, fastest-growing) — agent architecture, tool/function calling, memory, security. Note the underscore.
- r/Rag (~72k, +163% YoY) — chunking, retrieval failures, vector DBs, parsing. The hard part of enterprise LLM integration.
- r/LangChain (~101k, +60% YoY) — agent/RAG-in-production, observability, candid framework comparisons.
- r/mlops (~34k, +45% YoY) — production ML/LLM ops; small but high-signal (lowercase URL).
- r/ChatGPTCoding (~385k, +35% YoY) — AI coding tools (Cursor, Claude Code, Copilot), agentic coding.
- r/ClaudeAI (~944k, +293% YoY) — Claude Code / agentic-coding; leading indicator on coding-agent adoption.
- r/PromptEngineering (~387k) — production prompt/guardrail tactics.
- r/ExperiencedDevs (~398k) — how senior engineers/tech leads actually adopt AI (the "operators").
- r/ITManagers (~73k, +60% YoY) — closest to enterprise decision-maker signal: governance, procurement, CIO dynamics.
- r/n8n (~245k) — LLMs wired into real business processes.

Broad / lower density (monitor): r/MachineLearning (~3.1M), r/datascience (~2.8M), r/devops (~496k, adoption-skepticism counter-narrative), r/sysadmin (~1.3M), r/cscareerquestions (~2.4M, sentiment).

Noise — deprioritize: r/artificial, r/ArtificialInteligence (misspelling is the real sub), r/OpenAI, r/singularity. r/AIAgents (no underscore) is a dead alias — use r/AI_Agents.

Enterprise note: no single canonical "enterprise AI" sub. Treat r/ITManagers + r/mlops + r/LangChain + r/Rag + r/ExperiencedDevs as one cluster.

## 2. Hacker News & Lobsters
- Show HN (Algolia tag show_hn) — builders shipping AI agents/dev tools/infra.
- Launch HN — funded YC teams (titles prefixed "Launch HN").
- Ask HN (ask_hn) — operators describing real integration problems unprompted. Gold. e.g. "How are you orchestrating multi-agent AI workflows in production?"
- Front page — numericFilters=points>50.
- Search: hn.algolia.com UI; recency feed hn.algolia.com/api/v1/search_by_date?query=AI%20agent&tags=story&numericFilters=points>50. Seeds: AI agent, LLM, RAG, AI in production, multi-agent, agent orchestration, evals.
- lobste.rs/t/ai — canonical AI tag; lower volume, higher S/N than HN.
- lobste.rs/t/vibecoding — where Lobsters routes AI-coding stories. RSS per tag (append .rss); combine lobste.rs/t/ai,vibecoding.

## 3. X / Twitter (verified active)

Researchers / frontier-lab: @karpathy, @lilianweng, @natolambert, @gdb, @madiator.
Builders / AI engineers: @swyx, @simonw, @jxnlco, @rasbt, @chipro, @abacaj, @svpino, @skirano.
Enterprise / ops / AI-eng leaders: @HamelHusain (highest-signal single account: evals/error analysis taught to 4,500+ engineers from 500+ companies), @eugeneyan, @hanchunglee, @sh_reya, @AndrewYNg.
Infra / tooling / agents: @hwchase17, @jerryjliu0, @lateinteraction, @_philschmid, @charles_irl, @willccbb, @GregKamradt, @mathemagic1an, @OfficialLoganK.
Curated X List: "AI High Signal" x.com/i/lists/1585430245762441216 (swyx's ~360-account list, most-vetted single applied-AI list). Also github securibee/Awesome-Twitter-Lists. No single dominant "enterprise rollout" list; that signal is carried by individuals (Hamel, Eugene Yan, Han-Chung Lee, Harrison Chase).

## 4. arXiv
Listing format arxiv.org/list/<cat>/recent. Applied beat lives in cs.SE, cs.HC, cs.IR, cs.MA, cs.CY; cs.AI/cs.CL/cs.LG are upstream/theoretical — filter.
- cs.SE — watch first. AI coding agents, LLM-for-code, agentic dev workflows.
- cs.HC — how people use AI: copilots, agent UX, human-in-the-loop.
- cs.IR — RAG, retrieval, search-over-enterprise-data.
- cs.MA — multi-agent orchestration, agent-to-agent protocols.
- cs.AI/cs.CL/cs.LG — firehose; filter (cs.LG for cost/latency advances that change what's deployable).
- cs.CY — governance/risk/compliance (enterprise-risk angle).
- cs.DC — serving infra, scaling LLMs in production.
- cs.CR — prompt injection, agent/LLM security — load-bearing as agents touch real systems.
Discovery tools: Hugging Face Daily Papers (huggingface.co/papers, "what the field reads today," code-linked); alphaXiv (trending + chat-with-paper). Papers with Code is DEAD (sunset ~July 2025). arxiv-sanity has no public instance (self-host only).

## 5. GitHub
Surfaces: github.com/trending, topics ai-agents (~41k), llm, rag, mcp (sort recently-starred).
Awesome-lists: Hannibal046/Awesome-LLM (~27k), Shubhamsaboo/awesome-llm-apps (~115k, best "what people ship"), punkpeye/awesome-mcp-servers (~89k, clearest signal of agents wiring into real systems), EthicalML/awesome-production-machine-learning (~21k), tensorchord/Awesome-LLMOps (~5.8k), e2b-dev/awesome-ai-agents (~28k, stale tags — index only).
Frameworks to watch: langchain (~140k), langgraph (~35k, where production agent patterns standardize), llama_index (~50k), dspy (~35k), vllm (~83k), ollama (~174k), dify (~146k), crewAI (~54k), openai-agents-python (~27k), microsoft/agent-framework (~11k, successor to AutoGen). AutoGen is maintenance mode — migration signal only.

## 6. Newsletters & practitioner blogs (deep cuts)
Latent Space, Simon Willison, Hamel Husain (hamel.dev), Eugene Yan, Jason Liu (jxnl.co/writing), Chip Huyen (huyenchip.com), The Batch, Interconnects (most serious open-model analysis), The Pragmatic Engineer, AI Engineer (ai.engineer), Ahead of AI (Raschka), Import AI (jack-clark.net), Last Week in AI, The Sequence, Philipp Schmid (philschmid.de), Gradient Flow (enterprise AI reality, what breaks in prod), Don't Worry About the Vase (thezvi). Roundup-leaning (breadth scanning): Ben's Bites, TLDR AI.

## 7. Company engineering blogs
Anthropic Engineering (strongest for agents/coding), OpenAI (403s bots), Netflix, Uber AI, Meta, Google Research, Airbnb, LinkedIn, Microsoft Foundry, Stripe, Shopify, Ramp Builders (builders.ramp.com, not ramp.com/blog), Notion, Vercel, Cloudflare, Databricks, Pinecone, Spotify, DoorDash (403s bots).

## 8. Discords / Slacks / forums
LangChain Slack + Forum, Latent Space Discord, MLOps Community Slack (~28k, strongest ML-in-production signal), Hugging Face Discord (218k+), Ollama Discord (~197k), DSPy Discord, LlamaIndex Discord, Pinecone Community, Weaviate Community, Cursor Forum (~100k), OpenAI Dev Community, Anthropic/Claude Discord, n8n Community (operator-heavy), DataTalks.Club Slack.

## 9. Podcasts / YouTube (transcript-mine)
Latent Space Podcast, Dwarkesh, No Priors, The Cognitive Revolution, MLOps Community Podcast, Practical AI, This Day in AI, Lex Fridman (selective), AI Engineer conf talks (youtube.com/@aiDotEngineer, densest applied-AI talk archive), How I AI, Training Data (Sequoia).

## Top 15 highest-signal seeds to start with
1. r/LocalLLaMA — self-hosted/open-model frontier.
2. HN Algolia Ask/Show HN — operators describing real production problems unprompted.
3. @HamelHusain — best single account on evals/reliable AI at company scale.
4. Latent Space — best aggregator of what AI engineers build.
5. Simon Willison — near-daily primary-source notes on agentic coding/tooling.
6. swyx "AI High Signal" list — ~360 vetted accounts in one subscription.
7. Anthropic Engineering — deepest published material on agent harness design.
8. arXiv cs.SE — applied frontier (coding agents, LLM-for-code).
9. MLOps Community Slack — practitioners debating shipping to production.
10. r/AI_Agents + r/Rag — fastest-growing subs on the hardest integration problems.
11. awesome-mcp-servers — clearest live signal of agents wiring into real systems.
12. Hugging Face Daily Papers — what the field reads today.
13. Ramp Builders + Shopify Engineering — real enterprise teams documenting how they shipped agents.
14. Interconnects — most serious open-model/post-training analysis.
15. AI Engineer conf talks — densest archive of practitioner/VP-of-AI applied talks.

## Stale "defaults" to avoid in the pipeline config
- Papers with Code — sunset July 2025; use HF Daily Papers.
- arxiv-sanity — no public instance since 2025; self-host only.
- AutoGen — maintenance mode; use Microsoft Agent Framework.
- r/AIAgents (no underscore) — dead alias; use r/AI_Agents.
- r/MLOps capitalized URL 404s on some tools; use lowercase r/mlops.
- ramp.com/blog is marketing; use builders.ramp.com.
- OpenAI and DoorDash engineering blogs 403 automated fetchers — browser-fetch.
