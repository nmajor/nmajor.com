// Edge entry for the nmajor.com Cloudflare Worker.
//
// - Naked domain -> www: nmajor.com always 301s to www.nmajor.com, preserving the
//   path + query. www is the canonical host (astro.config `site`), so canonical /
//   og / rss URLs all point at www and match this redirect.
// - POST /api/subscribe: verify a Cloudflare Turnstile token server-side, then
//   create a Buttondown subscriber on the "Actual Intelligence" list (double
//   opt-in stays on, so Buttondown sends its own confirmation email). Secrets
//   (BUTTONDOWN_API_KEY, PROJECTS_TURNSTILE_SECRET_KEY) are Worker secrets, never
//   in the repo. The public shared Turnstile sitekey lives in the page.
// - POST /api/contact: validate the work-with-me form, verify Turnstile, then
//   send the inquiry to a private Discord webhook. DISCORD_CONTACT_WEBHOOK_URL
//   is a Worker secret and is never exposed to the browser.
// - Everything else falls through to the static assets (the Astro build in dist/).
//
// run_worker_first is on (see wrangler.jsonc) so this Worker sees every request,
// including the form routes, before the static asset router.
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
      return handleSubscribe(request, env, url.hostname);
    }

    if (url.pathname === '/api/contact' && request.method === 'POST') {
      return handleContact(request, env, url.hostname);
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

const clean = (value) => String(value || '').trim();

async function readFields(request) {
  const ctype = request.headers.get('content-type') || '';
  if (ctype.includes('application/json')) return request.json();
  const form = await request.formData();
  return Object.fromEntries(form.entries());
}

async function verifyTurnstile(token, env, host, action, ip) {
  if (!env.PROJECTS_TURNSTILE_SECRET_KEY) {
    return { ok: false, status: 500, error: 'The form is not configured. Please try again later.' };
  }

  const body = new FormData();
  body.append('secret', env.PROJECTS_TURNSTILE_SECRET_KEY);
  body.append('response', token);
  if (ip) body.append('remoteip', ip);

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  let verify;
  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body,
      signal: controller.signal,
    });
    verify = await response.json();
  } catch {
    return { ok: false, status: 502, error: 'Anti-spam check is unavailable. Please try again later.' };
  } finally {
    clearTimeout(timeout);
  }

  if (!verify || verify.success !== true || verify.hostname !== host || verify.action !== action) {
    console.warn('turnstile_rejected', {
      expectedHostname: host,
      expectedAction: action,
      receivedHostname: verify && verify.hostname,
      receivedAction: verify && verify.action,
      errorCodes: (verify && verify['error-codes']) || [],
    });
    return { ok: false, status: 400, error: 'Anti-spam check failed. Please try again.' };
  }

  return { ok: true };
}

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

export async function handleContact(request, env, host) {
  let fields;
  try {
    fields = await readFields(request);
  } catch {
    return json(400, { ok: false, error: 'Could not read your request. Please try again.' });
  }

  const name = clean(fields.name);
  const email = clean(fields.email);
  const company = clean(fields.company);
  const message = clean(fields.message);
  const website = clean(fields.website);
  const token = clean(fields['cf-turnstile-response'] || fields.token);

  // A hidden field catches basic form bots. Return a quiet success so they do
  // not learn which check rejected the submission.
  if (website) return json(200, { ok: true });

  if (name.length < 1 || name.length > 120) {
    return json(400, { ok: false, error: 'Please enter your name.' });
  }
  if (!EMAIL_RE.test(email) || email.length > 320) {
    return json(400, { ok: false, error: 'Please enter a valid work email address.' });
  }
  if (company.length > 160) {
    return json(400, { ok: false, error: 'Company name must be 160 characters or fewer.' });
  }
  if (message.length < 20 || message.length > 4000) {
    return json(400, { ok: false, error: 'Please write between 20 and 4,000 characters.' });
  }
  if (!token) {
    return json(400, { ok: false, error: 'Please complete the anti-spam check, then try again.' });
  }

  const ip = request.headers.get('CF-Connecting-IP') || '';
  const turnstile = await verifyTurnstile(token, env, host, 'nmajor_contact', ip);
  if (!turnstile.ok) return json(turnstile.status, { ok: false, error: turnstile.error });

  if (!env.DISCORD_CONTACT_WEBHOOK_URL) {
    console.error('contact_submit_failed: DISCORD_CONTACT_WEBHOOK_URL is not configured');
    return json(500, { ok: false, error: 'The contact form is not configured. Please try again later.' });
  }

  const country = request.headers.get('CF-IPCountry') || 'Unknown';
  const referer = request.headers.get('Referer') || `https://${host}/work-with-me`;
  let response;
  try {
    response = await fetch(env.DISCORD_CONTACT_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        username: 'nmajor.com contact',
        allowed_mentions: { parse: [] },
        embeds: [
          {
            title: 'New work inquiry',
            color: 15022367,
            description: message,
            fields: [
              { name: 'Name', value: name, inline: true },
              { name: 'Email', value: email, inline: true },
              { name: 'Company', value: company || 'Not provided', inline: true },
              { name: 'Country', value: country, inline: true },
              { name: 'Submitted from', value: referer.slice(0, 1024) },
            ],
            timestamp: new Date().toISOString(),
          },
        ],
      }),
    });
  } catch (error) {
    console.error('contact_submit_failed', error instanceof Error ? error.message : String(error));
    return json(502, { ok: false, error: 'Could not send your message. Please try again later.' });
  }

  if (!response.ok) {
    console.error('contact_submit_failed', { status: response.status });
    return json(502, { ok: false, error: 'Could not send your message. Please try again later.' });
  }

  return json(200, { ok: true });
}
