# huawolf/news-agent — a two-layer dedup system (deterministic keyword-overlap + LLM history check) and a two-axis scoring rubric

- URL: https://github.com/huawolf/news-agent ("AI-powered personal news aggregator with LLM scoring, Web console, and push notifications to Feishu/Discord")
- Date accessed: 2026-08-18
- What it is: The best public example I found of **preventing repetition across a long-running publication as an engineered gate**, not a vibe. It dedups twice: (1) a deterministic pass that compares 10 LLM-extracted keywords per item against the last 3 days of items and zeroes the score on ≥N overlap; (2) an LLM pass that receives a compact `[Title | Link | Summary]` list of everything already pushed and is required to emit the literal token `[NO_NEW_CONTENT]` if everything is a repeat. It also separates **quality score** from **interest/fit score** and refuses to let the model just average them. Prompts are Chinese; reproduced verbatim with English glosses added by me in [brackets] where useful. Cloned via `gh repo clone huawolf/news-agent`.

---

## VERBATIM — `prompts/score_batch.md` (the full scoring rubric prompt)

```markdown
你是一个专业且严苛的科技、商业与投资新闻主编。请对抓取到的碎片化信息进行过滤、评分和信息提取。

## 输出语言（最高优先级，必须严格遵守）

{output_language_instruction}

## 个人兴趣偏好 (Personal Preferences)
为了满足读者的个性化需求，打分时请重点参考以下个人偏好：
"""
{preferences}
"""

## 任务与评分标准
请对输入的每条新闻进行评估，并给出以下评分与关键信息：

1. **基础质量分 (`quality_score` 0-100)**：
   - 来源质量权重：官方/首发渠道（如 OpenAI 官博、知名项目创始人推特）基础分设定为 85+；高质量专业社区/媒体（如 Hacker News 热帖、TechCrunch 原创）基础分设定为 75+；二手转述或 KOL 转发基础分设定为 <70。
   - 内容价值：剔除纯情绪宣泄和广告软文，考察信息量与时效性。
2. **用户兴趣匹配分 (`interest_score` 0-100)**：
   - 以下三条主线 **同等重要、同属最高优先级**，不要默认让 AI 新闻高于股票投资或创业新闻：
     1. **股票投资价值**：能实质改变上市公司收入、利润、现金流、估值或竞争地位的信息，例如财报与指引变化、关键产品销量、订单和市场份额、供需与价格周期、资本开支、监管政策、并购重组、产业链传导及明确的上下游受益/受损关系。
     2. **创业价值**：能帮助发现或判断创业机会的信息，例如明确的未满足需求、新商业模式、产品与分发创新、用户/收入/留存增长、单位经济性、融资并购、竞争格局，以及可复用的 GTM 或创始人执行经验。
     3. **AI 重大进展**：模型能力或成本出现显著跃迁、可信基准或真实应用验证、重要基础设施突破、大规模商业采用，以及会改变行业格局的政策与安全进展。
   - 对任一主线具有明确、可验证且可能改变判断的信息，`interest_score` 评为 85-100；提供有效线索或方法启发但影响尚不确定的，评为 70-84；仅弱相关或缺乏实质信息的，评为 60 以下。
   - 对高潜力产品和创业项目给予明确加权，不限于 AI：包括新产品、原生工作流、显著提升效率的垂直工具，以及已有用户、收入、留存、投票、融资或增长信号的项目。即使来源是 Product Hunt、App Store、Reddit、GitHub 或社区讨论，只要证据具体，`interest_score` 可优先评为 85+。
   - 不要因为标题包含股票代码、股价涨跌、融资金额、创业或 AI 等词就自动高分。纯行情复述、无基本面依据的荐股、融资公关稿、概念炒作和未经验证的能力声明应降分。
3. **最终总分 (`score` 0-100)**：
   - 综合 `quality_score` 与 `interest_score`，由你结合两者算出一个统一的推荐总分（注意：不要简单算算术平均，要综合考量。如果质量极差或兴趣匹配极低，总分应该相应拉低）。
   - 三条最高优先级主线使用相同的总分尺度：证据充分、影响重大且时效性强的股票投资或创业新闻，应与同等级别的 AI 重大进展获得相近总分。

## 提取关键词要求
1. **提取 10 个关键词 (`keywords` 字段)**：
   - 必须为该条新闻提取且仅提取 **10 个** 最核心的关键词，存储为字符串数组。
   - 关键词应当包含：具体的模型/产品名、核心技术点、公司/机构/人物名称、重要的商业数据等。
   - 关键词尽量使用原词或精炼词，避免长句。

## 输出要求
必须返回纯 JSON 对象，顶层包含 `items` 数组字段，数组中每个对象包含：
- `link`: 原文链接（必须保留原样）
- `score`: 最终总分 (0-100 整数)
- `quality_score`: 基础质量分 (0-100 整数)
- `interest_score`: 用户兴趣匹配分 (0-100 整数)
- `tags`: 字符串数组，数量 1-3 个，每个标签 2-12 个字符。必须是新闻中具体的关键词（产品名/模型名/技术特性/关键人物/核心数据），让人一眼能识别"这条新闻具体是关于什么"。禁止空泛的分类标签。
- `keywords`: 包含 **10 个** 核心关键词的字符串数组，用于查重。

## 输出格式（严格只输出 JSON 对象，不要 markdown 标记，不要其他额外标记，以 "{"开始，以"}"结尾）：

{
  "items": [
    {
      "link": "https://example.com/article1",
      "score": 95,
      "quality_score": 90,
      "interest_score": 98,
      "tags": ["GPT-5", "多模态", "原生交互"],
      "keywords": ["GPT-5", "OpenAI", "多模态", "原生交互", "语音助手", "首发", "实时生成", "大语言模型", "人机交互", "发布会"]
    }
  ]
}

## 重要提示

1. items 数组长度必须与输入相同
2. link 字段必须与输入一一对应，用于关联原始数据
3. 只返回 JSON 对象，不要添加任何额外说明文字
4. 字符串内的英文双引号 `"` 必须用反斜杠转义为 `\"`；中文引号无需转义，保留原样

## 输入数据

以下是一个 JSON 数组，包含抓取到的社交媒体和博客内容：

```json
{entries_json}
```
```

### Gloss on the scoring rubric (my summary, NOT the source text)
- Two independent 0-100 axes: `quality_score` (source tier + information value) and `interest_score` (fit to the reader's declared priorities), then a `score` the model must *reason* to rather than average — the prompt explicitly says 不要简单算算术平均 ("do not just take the arithmetic mean") and that a very low score on either axis must drag the total down.
- Source-tier anchors are numeric: official/first-party channel → base 85+; high-quality specialist community/press → base 75+; second-hand restatement or influencer repost → base <70.
- Anti-keyword-gaming clause: do not score high merely because the headline contains a ticker, a price move, a funding number, or the word "AI"; pure price recaps, PR funding pieces, and unverified capability claims get marked down.
- Three co-equal interest lanes (stock-investing value / startup value / major AI progress) with an explicit instruction that AI news must NOT automatically outrank the other two.
- Every item must emit exactly 10 keywords, and the prompt states their purpose outright: `用于查重` — "for deduplication".
- Tags must be concrete (product/model/person/number), with a hard ban on generic category labels: 禁止空泛的分类标签.

---

## VERBATIM — `src/main.py`: the deterministic keyword-overlap dedup

```python
def is_keyword_match(k1: str, k2: str) -> bool:
    """Return whether two keywords are similar enough to match."""
    k1_clean = "".join(c for c in k1.lower() if c.isalnum())
    k2_clean = "".join(c for c in k2.lower() if c.isalnum())
    
    if not k1_clean or not k2_clean:
        return False
        
    if k1_clean == k2_clean:
        return True
        
    if len(k1_clean) >= 3 and len(k2_clean) >= 3:
        if k1_clean in k2_clean or k2_clean in k1_clean:
            return True
            
    return False


def count_overlapping_keywords(keywords_a: List[str], keywords_b: List[str]) -> int:
    """Count overlapping keywords between two keyword lists."""
    matches = 0
    matched_in_b = set()
    
    for k_a in keywords_a:
        for k_b in keywords_b:
            if k_b not in matched_in_b and is_keyword_match(k_a, k_b):
                matches += 1
                matched_in_b.add(k_b)
                break
                
    return matches


def deduplicate_by_keywords(new_entries: List[Dict], config: Dict):
    """Deduplicate by keyword similarity against news fetched in the last 3 days."""
    tz = get_timezone(config)
    now = datetime.now(tz)
    data_dir = config.get("storage", {}).get("data_dir", "news-data")
    threshold = config.get("filter", {}).get("keyword_overlap_threshold", 3)
    
    history_entries = []
    for i in range(3):
        d = now.date() - timedelta(days=i)
        fetch_file = get_fetch_file(d, data_dir)
        if os.path.exists(fetch_file):
            for entry in read_entries(fetch_file):
                # Exclude duplicate entries already set to score 0.
                if entry.get("keywords") and entry.get("score", 0) > 0:
                    history_entries.append(entry)
                    
    print(f"🔍 Keyword deduplication: loaded {len(history_entries)} historical entries from the last 3 days (threshold={threshold})")
    
    if not history_entries:
        return
        
    duplicate_count = 0
    for new_entry in new_entries:
        new_keywords = new_entry.get("keywords")
        if not new_keywords or not isinstance(new_keywords, list):
            continue
            
        is_dup = False
        matching_history_title = ""
        matching_history_link = ""
        for hist_entry in history_entries:
            hist_keywords = hist_entry.get("keywords")
            if not hist_keywords or not isinstance(hist_keywords, list):
                continue
                
            overlap = count_overlapping_keywords(new_keywords, hist_keywords)
            if overlap >= threshold:
                is_dup = True
                matching_history_title = hist_entry.get("title", "")
                matching_history_link = hist_entry.get("link", "")
                break
                
        if is_dup:
            new_entry["score"] = 0
            new_entry["is_duplicate"] = True
            new_entry["duplicate_reason"] = f"Keyword overlap >= {threshold} with historical news '{matching_history_title}' ({matching_history_link})"
            duplicate_count += 1
            print(f"🚫 Keyword duplicate detected: '{new_entry.get('title')}' overlaps with sent news '{matching_history_title}'")
            
    if duplicate_count > 0:
        print(f"🚫 Keyword deduplication blocked {duplicate_count} entries by setting score to 0")


async def collect_entries_for_push(
```

Call site (verbatim):
```python
    # 3. Keyword deduplication.
    deduplicate_by_keywords(scored, config)
```

---

## VERBATIM — `prompts/immediate_push.md`, task rule 1 (the hard block)

> 1. **严格查重与阻断机制（至关重要）**：仔细对比原始数据与【过去已推送历史】。如果原始数据中的事件已经推送过，且没有出现极其重大的新进展，请直接抛弃该事件。如果所有输入的事件都被判定为重复或无需推送，你必须且只能输出 [NO_NEW_CONTENT] 这几个字，绝对不要输出任何其他内容。

[Gloss: "Strict dedup and blocking mechanism (critical): carefully compare the raw data against the past-push history. If an event has already been pushed and there is no extremely significant new development, discard it outright. If every input event is judged a duplicate or not worth pushing, you must output exactly and only the characters [NO_NEW_CONTENT] and absolutely nothing else."]

And the history block it is given (verbatim):
```
## 过去 N 天已推送事件清单（仅供查重，严禁模仿）

<RECENT_PUSH_CONTEXT BEGIN>
{recent_push_context}
<RECENT_PUSH_CONTEXT END>
```
[Gloss: "List of events pushed in the past N days (for deduplication ONLY — imitation strictly forbidden)". The "严禁模仿 / imitation strictly forbidden" clause is notable: past issues are supplied as a *negative* reference so the model does not drift into copying their style.]

---

## VERBATIM — `prompts/digest.md` (the digest assembly prompt, complete)

```markdown
你是一位专业的商业、科技与科学新闻主编。你的任务是将今天来源各异的信息整理成一篇结构清晰、主次分明、极致凝练的《News Agent 每日精选》。

本次目标为 **{max_items} 条新闻**。当输入中存在至少 {max_items} 个互不重复且评分达标的事件时，必须输出 {max_items} 条；只有确实没有足够独立事件时才可以少于该数量。

## 输出语言（最高优先级，必须严格遵守）

{output_language_instruction}

固定文案也必须跟随输出语言：
- 英文输出时，所有固定标签都必须使用英文：链接文案使用 `[Read original](url)`（若有多个原文，使用 `[Read original 1](url1) [Read original 2](url2)`），持续跟踪标记使用 `[Follow-up]`，不要输出 `[查看原文]`、`[持续跟踪]`、`每日精选`、`今日` 等中文固定词。
- 中文输出时，链接文案使用 `[查看原文](url)`（若有多个原文，使用 `[查看原文 1](url1) [查看原文 2](url2)`），持续跟踪标记使用 `[持续跟踪]`。

 ## 核心排版与整合规则（必须严格遵守）：
 1. **新旧剥离与进展追踪**：
    - 对比【今天的新信息】与【历史上下文】。如果今天的信息只是重复昨天的事实，请直接丢弃。
    - 如果今天的信息是**历史事件的延续**，请在标题开头标记为 `[持续跟踪]`。
 2. **精准的事件级融合（切勿过度缝合）**：
    - 把讨论**同一具体事件**（如 DoD 与 Anthropic 合同风波）的官方声明、大佬锐评、社区反应合并为一条新闻，提炼全貌。
    - 绝对不要把两个毫不相干的工具更新强行塞进同一个标题下！如果它们是独立事件，请作为两条独立新闻输出。
 3. **精选原则**：
    - 按同等优先级选择三类高价值新闻：**可操作的股票投资信息、具有证据支撑的创业机会、重大 AI/科技进展**。不得因为一条新闻属于商业、证券、并购、财报或产业政策而仅以“不是 AI 新闻”为由丢弃。
    - 股票投资价值包括财报与指引变化、供需拐点、监管与关税催化、重大并购、产业链价格或产能变化；创业价值包括真实用户/收入/留存增长、新市场形成、商业模式验证和基础设施成本变化；技术价值包括能力突破、可靠评测、重大产品发布和规模化采用。
    - 最多输出 {max_items} 条，绝不能拆分或扩写出输入中不存在的事件。输入中有足够独立且评分达标的事件时应填满 {max_items} 条，不要用笼统的“宁缺毋滥”把合格新闻缩减到目标数量以下。
    - 同一事件的多个来源应合并；不同公司、不同交易、不同财报或不同产品发布不得为了减少条数而强行合并。
    - 绝对剔除以下内容：KOL/博主的个人动态、企业公关软文/广告、纯情绪发泄、未经验证的小道消息、以及无实质技术内容的闲聊。
 4. **结构化呈现与内容简化（最核心约束）**：
    - **每个新闻条目仅保留：1）标题，2）包含原文链接的 1-3 句话的摘要段落。**
    - 绝对不要使用任何无序列表（`*` 或 `-`）、粗体标题引导词（如 `* **核心发布**：`）或 Why it matters 深度分析。
    - 摘要应当是一整段连贯、简洁、流畅的中文字符，完整陈述今天发生的核心事实（谁、做了什么、有何具体数据或影响），字数控制在 1-3 句话。
    - **必须在摘要段落的末尾保留指向原文的 markdown 链接**。
      - 如果只有一个来源：中文输出格式为 `[查看原文](链接地址)`，英文输出格式为 `[Read original](url)`。
      - 如果合并了多个来源（有多个原文链接）：中文输出格式为 `[查看原文 1](链接地址1) [查看原文 2](链接地址2) ...`，英文输出格式为 `[Read original 1](url1) [Read original 2](url2) ...`。请按顺序标注。
 5. **客观专业**：用简练的中文，避免低级词汇，像分析师一样叙述。
 6. **避免风格趋同**：每天的前言导读必须从今日素材本身的具体事实出发，严禁评价性措辞/总结性套话/宏大叙事框架，避免成为流水线产物。
 7. **正文不要写开头引言**：正文请直接从第一条新闻 `### 1️⃣ ...` 开始。导语统一由 frontmatter 的 `lead` 字段承载（见下文输出格式）。

 ## 输出格式（严格按以下结构输出，先 frontmatter 后正文）：

输出必须以 YAML frontmatter 起始，紧跟空行后接 markdown 正文。**绝对不要**在正文里写引言段或一级标题。

frontmatter 字段要求：
- `title`: 提炼其中1-3个核心看点制作短标题，以**核心事实陈述**语气给出，格式 `"<事件1>，<事件2>"`，8-30 字。
- `lead`: 60-100 字前言导读，**只陈述今日具体发生的事实**（谁、做了什么、有何具体后果），按重要性串联。
  - ❌ 严禁评价性措辞，严禁套话开场。
- `highlights`: 2-3 条最值得关注的事件清单，每条 15-30 字，**纯事实陈述**（机构/产品 + 动作 + 具体数字/对象），用于卡片预览。

正文要求：直接从 `### 1. ...` 开始，每条新闻后空一行。

示例：

```markdown
---
title: "Anthropic 拒签五角大楼合同,Google 发布 Nano Banana 2"
lead: "Anthropic 拒绝与五角大楼签署模型供应合同,OpenAI 当日宣布接受国防部条件;Google 发布 Nano Banana 2,Image Arena 盲测登顶。"
highlights:
  - "Anthropic 拒签五角大楼合同,OpenAI 接单"
  - "Google Nano Banana 2 发布,Image Arena 盲测登顶"
  - "Claude Code 上线 /remote-control,接管 Workspace"
---

### 1. Google 发布 Nano Banana 2：图像生成模型大洗牌
Google 官方推出基于 Gemini Flash 架构的 Nano Banana 2 模型，支持更灵活的长宽比和极高精度的多语言文本渲染。该模型在发布首日即在 Image Arena 盲测中超越 GPT-4V 和上代 Pro 模型登顶榜首，Lovart、Genspark 等主流 AI 产品已在第一时间全量接入。[查看原文](https://example.com/nano-banana-2)

### 2. [持续跟踪] 硅谷震动：Anthropic 拒签美国防部，各方反应激烈
Anthropic CEO 明确拒绝了五角大楼的合同，坚守不将模型用于自主武器的底线。随后，Sam Altman 宣布 OpenAI 接受了国防部的采购条件。这一事件暴露出头部 AI 公司在安全准则上的巨大分歧，也暗示了未来政府在 AI 供应链上的强力介入。[查看原文 1](https://example.com/anthropic-defense) [查看原文 2](https://example.com/openai-defense)

### 3. 开发者福音：Claude Code 新增远程控制与批量处理
Claude Code 命令行工具新增 `/remote-control` 模式，支持终端直接控制 Google Workspace 等外部应用。下个版本预告将加入 `/simplify` 和 `/batch` 指令，大幅提升 Agentic Coding 并行开发体验。[查看原文](https://example.com/claude-code-update)
```

*(根据上述结构，整合提取今天最重要的新闻。请直接输出 frontmatter + 正文，不要加分割线，不要在正文里写一级标题)*

## 参考数据

##  待处理的碎片化信息（共 {count} 条）：
（说明：这是你今天需要提取和总结的**核心素材**，你的早报必须基于且仅基于这里的最新信息生成。）

entries是一个JSON数组，包含抓取到的社交媒体或者博客内容,每个对象包含以下字段：

- `title`: 文章标题
- `source`: 文章来源
- `link`: 文章链接
- `score`: LLM评分 (0-100)
- `summary`: 一句话摘要
- `tags`: 标签数组
- `published`: 发布日期
- `content`: 文章内容

```json
{entries}
```

### 近 N 天已推送事件清单（仅供查重，严禁模仿）

说明：以下列表用于判断今日素材是否已报道过，以及是否属于「持续跟踪」类延续事件。

<RECENT_PUSH_CONTEXT BEGIN>
{recent_push_context}
<RECENT_PUSH_CONTEXT END>


### 近几天已处理过的碎片化信息（供洞察参考）：

每条信息包含

- `title`: 文章标题
- `source`: 文章来源
- `score`: LLM评分 (0-100)
- `summary`: 一句话摘要
- `tags`: 标签数组
- `published`: 发布日期

```txt
{context}
```
```

### Gloss on the digest prompt (my summary, NOT the source text)
- Rule 1 **新旧剥离与进展追踪** — "separate new from old and track progress": if today's info merely repeats yesterday's facts, discard it; if it is a *continuation* of a historical event, prefix the headline with `[持续跟踪]` / `[Follow-up]`. So the dedup pass has three outcomes, not two: new / duplicate / continuation.
- Rule 2 **精准的事件级融合（切勿过度缝合）** — "precise event-level fusion (do not over-stitch)": merge multiple sources on the *same concrete event*; never force two unrelated tool updates under one headline.
- Rule 6 **避免风格趋同** — "avoid style convergence": each day's lead must derive from that day's concrete facts; evaluative phrasing, summarizing clichés and grand-narrative framings are banned so the output does not read as assembly-line product.
- Hard shape constraint: each item is exactly a headline + a 1-3 sentence paragraph ending in the source link. No bullet lists, no bolded lead-in labels, no "Why it matters" analysis blocks.
- Fill-the-quota clause: when there are enough independent qualifying events, it MUST output the full `{max_items}`; "宁缺毋滥" (better fewer than lower quality) may not be used as an excuse to under-deliver.

---

## VERBATIM — architecture notes from `docs/system-architecture.md` and `docs/roadmap.md`

> **Implemented:** A unified news pool fed by RSS, Hacker News, and built-in signal adapters; GitHub Trending generation; LLM scoring, keyword deduplication, immediate push notifications, and Feishu / Discord / custom webhook integration.

> 3. **Slimmed Deduplication Context:** Recent push history provided for LLM deduplication is formatted as a compact `[Title | Link | Summary]` list rather than raw multi-paragraph Markdown.

> ### 4.3 GitHub Trending Deduplication & Permanent History Retention
> GitHub repositories processed or sent by the system are recorded in `news-data/trending-history.json`. To enforce strict permanent deduplication ("historically sent repositories are never re-sent"), repository URLs are normalized (lowercased and stripped of trailing slashes) and entries are preserved indefinitely without time-based pruning (`keep_days` cleanup bypass).

> -> URL Deduplication

> These entries are scored, deduplicated, stored, and delivered through the existing fetch pipeline.

> - Rank, filter, deduplicate, and summarize content with an LLM.

Storage helpers (verbatim docstring fragments from `src/storage.py`):
> """加载最近 context_days 天 notify 文件正文（去除 frontmatter，仅供 LLM 查重）
> """加载最近 context_days 天 push 文件中指定 section 的正文(去除 frontmatter,仅供 LLM 查重)。
> """将历史推送的原始 Markdown 提取并转换为简略列表格式 [Title | Link | Summary]，减少 LLM 查重 Token 占用。"""

---

## NOT FETCHED / GAPS
- `prompts/insights.md`, `prompts/section_github.md`, `prompts/section_hackernews.md`, `prompts/section_hackernews_select.md` not reproduced here.
- The default value of `filter.keyword_overlap_threshold` in the shipped config was not confirmed; the code default in `deduplicate_by_keywords` is `3` (i.e. 3 of 10 keywords overlapping = duplicate).
