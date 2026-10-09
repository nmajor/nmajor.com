import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
import { isLive } from '../lib/publish.js';

const parser = new MarkdownIt();

// Feed of current posts only. Archived essays and engineering posts are not in it.
export async function GET(context) {
  const posts = (await getCollection('posts', ({ data }) => isLive(data))).sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime(),
  );

  return rss({
    title: 'Nick Major',
    description: "A software engineer figuring out distribution. Building with AI, testing marketing and growth tactics, and sharing what works and what doesn't.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.summary,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}/`,
      author: 'Nick Major',
      content: sanitizeHtml(parser.render(post.body ?? ''), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
      }),
    })),
  });
}
