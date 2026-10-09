// Edge entry for the nmajor.com Cloudflare Worker.
//
// - Naked domain -> www: nmajor.com always 301s to www.nmajor.com, preserving the
//   path + query. www is the canonical host (astro.config `site`).
// - Legacy URLs -> archive: everything published before the 2026-10 pivot moved
//   under /archive/. legacyRedirect() maps each old URL to its new home in ONE
//   hop (real HTTP 301s; Astro's static `redirects` only writes meta-refresh pages).
// - POST /api/subscribe: verify a Cloudflare Turnstile token server-side, then
//   create a Buttondown subscriber (double opt-in stays on, so Buttondown sends its
//   own confirmation email). Secrets (BUTTONDOWN_API_KEY,
//   PROJECTS_TURNSTILE_SECRET_KEY) are Worker secrets, never in the repo.
// - Everything else falls through to the static assets (the Astro build in dist/).
//
// run_worker_first is on (see wrangler.jsonc) so this Worker sees every request
// before the static asset router.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Naked domain -> www (301), always. The form only ever loads on www after
    // this, so /api/subscribe posts stay same-origin; no POST is redirected.
    if (url.hostname === 'nmajor.com') {
      url.hostname = 'www.nmajor.com';
      // Apply the legacy mapping too so an old naked-domain link is still one hop.
      const target = legacyRedirect(url.pathname);
      if (target) url.pathname = target;
      return Response.redirect(url.toString(), 301);
    }

    if (url.pathname === '/api/subscribe' && request.method === 'POST') {
      return handleSubscribe(request, env, url.hostname);
    }

    if (request.method === 'GET' || request.method === 'HEAD') {
      const target = legacyRedirect(url.pathname);
      if (target) {
        url.pathname = target;
        return Response.redirect(url.toString(), 301);
      }
    }

    return env.ASSETS.fetch(request);
  },
};

// The 2018 posts were first published at undated /posts/<slug> URLs (Jekyll); the
// later site added the date prefix. Map the undated form straight to the final URL.
// Fixed list: these posts are archived and will never change.
const UNDATED_POSTS = {
  'serverless-back-end-for-react-your-introduction-to-serverless-architecture': '2018-01-29-serverless-back-end-for-react-your-introduction-to-serverless-architecture',
  'deploying-a-node-js-app-on-azure-app-services': '2018-02-14-deploying-a-node-js-app-on-azure-app-services',
  'express-js-with-es6-and-babel': '2018-02-16-express-js-with-es6-and-babel',
  'get-a-facebook-page-access-token-that-never-expires': '2018-03-21-get-a-facebook-page-access-token-that-never-expires',
  'react-css-styled-components': '2018-07-16-react-css-styled-components',
  'adding-eslint-to-your-project': '2018-07-17-adding-eslint-to-your-project',
  'making-redux-middleware-for-websockets': '2018-07-25-making-redux-middleware-for-websockets',
  'using-socket-io-with-redux-websocket-redux-middleware': '2018-07-25-using-socket-io-with-redux-websocket-redux-middleware',
  'node-env-variables-solving-the-nightmare': '2018-08-22-node-env-variables-solving-the-nightmare',
  'access-and-refresh-token-handling-with-redux': '2018-08-23-access-and-refresh-token-handling-with-redux',
  'serverless-my-initial-setup-with-es6-testing-and-ci-deployment': '2018-08-25-serverless-my-initial-setup-with-es6-testing-and-ci-deployment',
  'serverless-framework-s3-file-uploads': '2018-08-28-serverless-framework-s3-file-uploads',
  'serverless-framework-executable-binaries-aws-lambda': '2018-09-01-serverless-framework-executable-binaries-aws-lambda',
  'simple-object-storage-in-redis-and-node': '2018-09-20-simple-object-storage-in-redis-and-node',
  'multi-tenancy-with-expressmongoose': '2018-09-28-multi-tenancy-with-expressmongoose',
};

// Old path -> new path, or null if the path is not a legacy URL.
// Trailing slash optional on every input; outputs always end in "/".
export function legacyRedirect(pathname) {
  const p = pathname.replace(/\/+$/, '') || '/';
  const exact = {
    '/writing': '/archive/ai/',
    '/takes': '/archive/takes/',
    '/posts': '/archive/engineering/',
    '/building': '/archive/engineering/',
    '/engineering': '/archive/engineering/',
    '/work-with-me': '/about/',
  };
  if (exact[p]) return exact[p];

  let m;
  if ((m = p.match(/^\/writing\/([^/]+)$/))) return `/archive/ai/${m[1]}/`;
  if ((m = p.match(/^\/posts\/([^/]+)$/))) return `/archive/engineering/${UNDATED_POSTS[m[1]] ?? m[1]}/`;
  return null;
}

const json = (status, obj) =>
  new Response(JSON.stringify(obj), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

async function handleSubscribe(request, env, host) {
  let email = '';
  let token = '';
  try {
    const ctype = request.headers.get('content-type') || '';
    if (ctype.includes('application/json')) {
      const body = await request.json();
      email = String(body.email || '').trim();
      token = String(body['cf-turnstile-response'] || body.token || '');
    } else {
      const form = await request.formData();
      email = String(form.get('email') || '').trim();
      token = String(form.get('cf-turnstile-response') || '');
    }
  } catch {
    return json(400, { ok: false, error: 'Could not read your request. Please try again.' });
  }

  if (!EMAIL_RE.test(email)) {
    return json(400, { ok: false, error: 'Please enter a valid email address.' });
  }
  if (!token) {
    return json(400, { ok: false, error: 'Please complete the anti-spam check, then try again.' });
  }

  // 1) Verify the Turnstile token server-side. Without this the widget is
  //    decoration — a bot can post straight to /api/subscribe. This is the check
  //    that actually stops spam.
  const ip = request.headers.get('CF-Connecting-IP') || '';
  if (!env.PROJECTS_TURNSTILE_SECRET_KEY) {
    return json(500, { ok: false, error: 'The signup form is not configured. Please try again later.' });
  }
  const body = new FormData();
  body.append('secret', env.PROJECTS_TURNSTILE_SECRET_KEY);
  body.append('response', token);
  if (ip) body.append('remoteip', ip);
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  let verify;
  try {
    const vres = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body,
      signal: controller.signal,
    });
    verify = await vres.json();
  } catch {
    return json(502, { ok: false, error: 'Anti-spam check is unavailable. Please try again later.' });
  } finally {
    clearTimeout(timeout);
  }
  if (
    !verify ||
    verify.success !== true ||
    verify.hostname !== host ||
    verify.action !== 'nmajor_subscribe'
  ) {
    console.warn('turnstile_rejected', {
      expectedHostname: host,
      expectedAction: 'nmajor_subscribe',
      receivedHostname: verify && verify.hostname,
      receivedAction: verify && verify.action,
      errorCodes: (verify && verify['error-codes']) || [],
    });
    return json(400, { ok: false, error: 'Anti-spam check failed. Please try again.' });
  }

  // 2) Create the subscriber in Buttondown (double opt-in stays on).
  let bres;
  try {
    bres = await fetch('https://api.buttondown.email/v1/subscribers', {
      method: 'POST',
      headers: {
        Authorization: `Token ${env.BUTTONDOWN_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        ...(ip ? { ip_address: ip } : {}),
      }),
    });
  } catch {
    return json(502, { ok: false, error: 'Could not reach the newsletter service. Please try again later.' });
  }

  if (bres.ok) {
    return json(200, { ok: true });
  }

  // Treat an existing subscriber as a soft success — a returning reader shouldn't
  // see an error for being already on the list.
  let detail = '';
  try {
    detail = JSON.stringify(await bres.json());
  } catch {}
  if (bres.status === 400 && /already|exist|subscrib/i.test(detail)) {
    return json(200, { ok: true, already: true });
  }
  return json(502, { ok: false, error: 'Could not subscribe right now. Please try again later.' });
}
