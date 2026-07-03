// Edge entry for the nmajor.com Cloudflare Worker.
//
// - Naked domain -> www: nmajor.com always 301s to www.nmajor.com, preserving the
//   path + query. www is the canonical host (astro.config `site`), so canonical /
//   og / rss URLs all point at www and match this redirect.
// - POST /api/subscribe: verify a Cloudflare Turnstile token server-side, then
//   create a Buttondown subscriber on the "Actual Intelligence" list (double
//   opt-in stays on, so Buttondown sends its own confirmation email). Secrets
//   (BUTTONDOWN_API_KEY, TURNSTILE_SECRET_KEY) are Worker secrets, never in the
//   repo. The public Turnstile sitekey lives in the page.
// - Everything else falls through to the static assets (the Astro build in dist/).
//
// run_worker_first is on (see wrangler.jsonc) so this Worker sees every request,
// including /api/subscribe, before the static asset router. The subscribe pattern
// mirrors the appliedartificialintelligence.org sibling, minus its contact form.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Naked domain -> www (301), always. The form only ever loads on www after
    // this, so /api/subscribe posts stay same-origin; no POST is redirected.
    if (url.hostname === 'nmajor.com') {
      url.hostname = 'www.nmajor.com';
      return Response.redirect(url.toString(), 301);
    }

    if (url.pathname === '/api/subscribe' && request.method === 'POST') {
      return handleSubscribe(request, env);
    }

    return env.ASSETS.fetch(request);
  },
};

const json = (status, obj) =>
  new Response(JSON.stringify(obj), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

async function handleSubscribe(request, env) {
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
  const verifyForm = new FormData();
  verifyForm.append('secret', env.TURNSTILE_SECRET_KEY);
  verifyForm.append('response', token);
  if (ip) verifyForm.append('remoteip', ip);

  let verify;
  try {
    const vres = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: verifyForm,
    });
    verify = await vres.json();
  } catch {
    return json(502, { ok: false, error: 'Anti-spam check is unavailable. Please try again later.' });
  }
  if (!verify || !verify.success) {
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
