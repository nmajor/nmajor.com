import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
import { isLive } from '../lib/publish.js';

const parser = new MarkdownIt();

// Feed of the applied-AI essays (archived at /archive/ai/). Kept so existing feed
// subscribers keep working; swap to new writing once it exists.
export async function GET(context) {
  const essays = (await getCollection('essays', ({ data }) => isLive(data))).sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime(),
  );

  return rss({
    title: 'Nick Major',
    description: "A software engineer figuring out distribution. Building with AI, testing marketing and growth tactics, and sharing what works and what doesn't.",
    site: context.site,
    items: essays.map((essay) => ({
      title: essay.data.title,
      description: essay.data.summary,
      pubDate: essay.data.pubDate,
      link: `/archive/ai/${essay.id}/`,
      author: 'Nick Major',
      content: sanitizeHtml(parser.render(essay.body ?? ''), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
      }),
    })),
  });
}
