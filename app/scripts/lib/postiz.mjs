// Minimal Postiz public-API client for scheduling LinkedIn posts.
//
// Self-hosted Postiz serves its public API on the backend under `/api/public/v1`
// (the frontend host redirects unauthenticated paths to /auth). Auth is the raw
// API key in the Authorization header, no "Bearer" prefix.
//
// Env:
//   POSTIZ_BASE_URL  e.g. https://postiz.nmajor.net   (the frontend host)
//   POSTIZ_API_URL   optional override for the API root (defaults to BASE_URL + /api)
//   POSTIZ_API_KEY   from Settings > Developers > Public API

function apiRoot() {
  const override = (process.env.POSTIZ_API_URL || '').trim().replace(/\/$/, '');
  if (override) return override;
  const base = (process.env.POSTIZ_BASE_URL || '').trim().replace(/\/$/, '');
  if (!base) throw new Error('POSTIZ_BASE_URL (or POSTIZ_API_URL) is not set');
  return `${base}/api`;
}

function apiKey() {
  const key = (process.env.POSTIZ_API_KEY || '').trim();
  if (!key) throw new Error('POSTIZ_API_KEY is not set');
  return key;
}

async function postizFetch(path, init = {}) {
  const res = await fetch(`${apiRoot()}/public/v1${path}`, {
    ...init,
    headers: { Authorization: apiKey(), 'Content-Type': 'application/json', ...(init.headers || {}) },
  });
  const text = await res.text();
  if (!res.ok) {
    throw new Error(`Postiz ${init.method || 'GET'} ${path} -> ${res.status}: ${text.slice(0, 300)}`);
  }
  return text ? JSON.parse(text) : null;
}

/** List connected channels (id, name, identifier). Read-only; handy for a doctor check. */
export function listIntegrations() {
  return postizFetch('/integrations');
}

/**
 * Schedule one post to a single channel. `at` is a Date; if it is in the past
 * (a delayed run), the post is sent now rather than rejected. Returns { postId }.
 *
 * @param {{content:string, integrationId:string, settingsType:string, at:Date, now?:Date}} p
 */
export async function createScheduledPost({ content, integrationId, settingsType, at, now = new Date() }) {
  if (!content || !content.trim()) throw new Error('createScheduledPost: empty content');
  if (!integrationId) throw new Error('createScheduledPost: missing integrationId');
  const future = at.getTime() > now.getTime() + 60_000;
  const type = future ? 'schedule' : 'now';
  const date = (future ? at : new Date(now.getTime() + 120_000)).toISOString();
  const data = await postizFetch('/posts', {
    method: 'POST',
    body: JSON.stringify({
      type,
      date,
      shortLink: false,
      tags: [],
      posts: [
        {
          integration: { id: integrationId },
          value: [{ content: content.trim(), image: [] }],
          settings: { __type: settingsType || 'linkedin' },
        },
      ],
    }),
  });
  // Postiz returns an array of created posts: [{ postId, integration }].
  const first = Array.isArray(data) ? data[0] : data;
  const postId = first && (first.postId || first.id);
  return { postId, type, date, raw: data };
}

/** Delete a scheduled post by id (used by the safe end-to-end test). */
export function deletePost(id) {
  return postizFetch(`/posts/${id}`, { method: 'DELETE' });
}

/**
 * The post body that actually goes to LinkedIn: strip the editorial source
 * comment (an HTML comment note to us, never part of the post) and trim.
 */
export function postContent(item) {
  return item.body.replace(/<!--[\s\S]*?-->/g, '').trim();
}
