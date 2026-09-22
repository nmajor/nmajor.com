# jnd0/hn-brief — a running daily digest: per-item summarize → cohesive digest, with structural pre-filtering of the source pile and a prompt-leak quality gate

- URL: https://github.com/jnd0/hn-brief ("AI-powered daily summaries of Hacker News stories and discussions")
- Date accessed: 2026-08-18
- What it is: A live, shipping two-stage condenser: stage 1 summarizes each story *and its discussion* separately into XML-tagged fields; stage 2 takes all the per-story summaries and writes one flowing 1200-2200 word digest. Three details worth stealing: (a) it **scores and prunes the raw comment pile deterministically before the LLM sees it**, with a per-root cap and a depth penalty; (b) both prompts carry hard **anti-slop style bans** written as explicit negative rules; (c) it has an `isLowQualitySummaryText` gate that detects **prompt leakage** by matching the model's output against fragments of its own instructions. Cloned via `gh repo clone jnd0/hn-brief`.

---

## VERBATIM — `shared/summarizer-core.ts`, `buildSummaryPrompt` (per-story stage)

```typescript
export function buildSummaryPrompt(story: AlgoliaHit, comments: Comment[]): string {
    const postType = detectPostType(story.title);
    const typeLabel = getPostTypeLabel(postType);
    const isSelfPost = postType !== 'article';

    // Use scoring-based comment selection
    const commentText = selectAndFormatComments(comments, {
        maxChars: MAX_COMMENT_CHARS,
        perRootCap: MAX_COMMENTS_PER_ROOT,
        maxAnalyzedComments: MAX_ANALYZED_COMMENTS_PER_STORY,
        maxDepth: MAX_COMMENT_DEPTH
    });

    const contentDescription = isSelfPost
        ? `This is a ${typeLabel} post (self-post, no external article).`
        : `This links to an external article.`;

    return `Analyze this HN ${typeLabel.toLowerCase()} and discussion.
${contentDescription}
Title: ${story.title}
URL: ${story.url || 'N/A'}
Post Text: ${story.text || 'N/A'}
Comments: ${commentText}

You MUST provide BOTH summaries in exactly this XML format:

<Content Summary>
[3-4 sentences summarizing the ${typeLabel.toLowerCase()} content. Include at least one specific detail (a claim, number, named project, or concrete action).]
</Content Summary>

<Discussion Summary>
[4-6 sentences summarizing the key discussion points. Include: main themes, disagreements, technical insights, community reactions. Use flowing prose, not bullet points unless there are clearly distinct themes. DO NOT start with "The discussion", "The Hacker News discussion", or "The thread". Jump straight into the substance: what people debated, what insights emerged, where they disagreed. Write like a journalist, not a robot.]
</Discussion Summary>

CRITICAL:
- BOTH sections are REQUIRED - never omit Discussion Summary
- Use the exact XML tags shown above (including the forward slash in closing tags)
- Write in English only. No non-English words or phrases.
- Output will be parsed programmatically using these specific tags
- Begin immediately with <Content Summary> - no preamble, no introductions`;
}
```

---

## VERBATIM — `shared/summarizer-core.ts`, `buildDigestPrompt` (assembly stage)

```typescript
export function buildDigestPrompt(stories: ProcessedStory[]): string {
    const storiesContext = stories.map((s, i) =>
        `${i + 1}. "${s.title}" (${s.points} points, ${s.num_comments} comments, type: ${getPostTypeLabel(s.postType)})\n   Summary: ${s.summary}\n   Discussion: ${s.discussion_summary}`
    ).join("\n\n");

    return `You are writing a daily Hacker News digest for busy tech professionals.

Here are today's top stories with their individual summaries:
${storiesContext}

Write a cohesive, engaging digest that is at least 14 paragraphs and roughly 1200-2200 words (vary paragraph length as needed):
1. Opens with the most significant/interesting story of the day (jump straight into it)
2. Groups related topics together
3. Highlights interesting patterns or themes
4. Maintains a smart, cynical, insider tone (like a senior engineer talking to another)
5. Ends with a brief "worth watching" note

CRITICAL STYLE RULES:
- NO "Good morning", "Grab your coffee", "Welcome back", or other fluff.
- NO generic intros like "Today on Hacker News..."
- Start directly with the first story/topic.
- No bullet points or headers. flowing prose only.
- Write in English only.
- Begin immediately with the first story - no preamble, no introductions`;
}
```

The anti-fluff block, isolated:
> CRITICAL STYLE RULES:
> - NO "Good morning", "Grab your coffee", "Welcome back", or other fluff.
> - NO generic intros like "Today on Hacker News..."
> - Start directly with the first story/topic.
> - No bullet points or headers. flowing prose only.
> - Write in English only.
> - Begin immediately with the first story - no preamble, no introductions

And from the per-story prompt:
> DO NOT start with "The discussion", "The Hacker News discussion", or "The thread". Jump straight into the substance: what people debated, what insights emerged, where they disagreed. Write like a journalist, not a robot.

---

## VERBATIM — deterministic comment scoring, run BEFORE the LLM sees the pile

```typescript
 * Compute quality score for a comment based on structural signals
 */
export function scoreComment(meta: CommentMetadata): number {
    const descendantScore = Math.min(meta.descendantCount, 80) * 0.08;
    const textScore = Math.min(meta.textLength, 1200) * 0.002;
    const replyScore = Math.min(meta.directReplyCount, 16) * 0.7;
    const depthPenalty = 0.8 * Math.max(0, meta.depth - 2);

    // Tie-breaker for stable ordering
    const tieBreaker = (meta.descendantCount * 0.001) + (meta.textLength * 0.00001);

    return descendantScore + textScore + replyScore - depthPenalty + tieBreaker;
}
```

Budget constants (verbatim, with defaults):
```typescript
const MAX_COMMENT_CHARS = ... process.env?.MAX_COMMENT_CHARS || '15000'
const MAX_COMMENTS_PER_ROOT = ... process.env?.MAX_COMMENTS_PER_ROOT || '3'
const MAX_ANALYZED_COMMENTS_PER_STORY = ... process.env?.MAX_ANALYZED_COMMENTS_PER_STORY || '500'
const MAX_COMMENT_DEPTH = ... process.env?.MAX_COMMENT_DEPTH || '6'
```

[Gloss, mine not theirs: the score rewards descendant count (capped at 80), text length (capped at 1200 chars), and direct replies (capped at 16), and **subtracts 0.8 per level of depth beyond 2** — i.e. a thread's structure is used as a salience proxy so the model reads the load-bearing comments, not the tail. The per-root cap of 3 is a diversity constraint: no single subthread can dominate the sample.]

---

## VERBATIM — the prompt-leak / low-quality output gate

```typescript
export function isLowQualitySummaryText(text: string): boolean {
    const normalized = normalizeComparableText(text);
    if (!normalized) return true;

    const promptLeakMarkers = [
        '<content summary>',
        '<discussion summary>',
        'you must provide both summaries',
        'the content summary should',
        'the discussion summary should',
        'use exact xml tags',
        'write like a journalist',
        'we have an hn article',
        'now produce xml'
    ];
    if (promptLeakMarkers.some((marker) => normalized.includes(marker))) return true;

    if (/^[.?!,_\-:;]+$/.test(normalized)) return true;
    if (/^(?:\.{2,}|…+)$/.test(normalized)) return true;
```

---

## VERBATIM — the XML parse contract with graceful fallback

```typescript
export function parseSummaryResponse(content: string): { summary: string; discussion: string } {
    const contentMatch = content.match(/<Content Summary>([\s\S]*?)<\/Content Summary>/);
    const discussionMatch = content.match(/<Discussion Summary>([\s\S]*?)<\/Discussion Summary>/);

    // If we have both tags, perfect!
    if (contentMatch?.[1] && discussionMatch?.[1]) {
        return {
            summary: normalizeSummaryText(contentMatch[1]),
            discussion: normalizeDiscussionText(discussionMatch[1])
        };
    }

    // FALLBACK: If we have content but no discussion tag, extract from remaining text
    if (contentMatch?.[1] && !discussionMatch?.[1]) {
        const contentEnd = content.indexOf('</Content Summary>') + '</Content Summary>'.length;
        const remaining = content.slice(contentEnd).trim();
        
        // If there's substantial content after Content Summary, use it
        if (remaining.length > 50) {
            return {
                summary: normalizeSummaryText(contentMatch[1]),
                discussion: normalizeDiscussionText(remaining.replace(/<\/?[^>]+(>|$)/g, '').trim())
            };
        }
    }

    return {
        summary: contentMatch?.[1] ? normalizeSummaryText(contentMatch[1]) : "Summary unavailable.",
        discussion: discussionMatch?.[1] ? normalizeDiscussionText(discussionMatch[1]) : "Discussion unavailable."
    };
}
```

---

## NOT FETCHED / GAPS
- `AGENTS.md` (175 lines) and `README.md` (157 lines) not reproduced.
- `selectAndFormatComments` body (the packing loop that applies the char budget and per-root cap) not reproduced; only its scoring function and constants are here.
- The repo contains ~a year of shipped output under `summaries/YYYY/MM/DD.md` and `DD-digest.md` — real examples of the two stages' output, not reproduced.
