import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';

const parser = new MarkdownIt();

// The essays feed. This is the canonical source the newsletter (Buttondown) will
// consume once wired up. Drafts are excluded.
export async function GET(context) {
  const essays = (await getCollection('essays', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime(),
  );

  return rss({
    title: 'Nicholas Major',
    description: "Plain-English AI for people who run things. Essays on where AI actually fits in a business, and where it doesn't.",
    site: context.site,
    items: essays.map((essay) => ({
      title: essay.data.title,
      description: essay.data.summary,
      pubDate: essay.data.pubDate,
      link: `/writing/${essay.id}/`,
      author: essay.data.author,
      content: sanitizeHtml(parser.render(essay.body), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
      }),
    })),
  });
}
