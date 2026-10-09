import assert from 'node:assert/strict';
import test from 'node:test';

import worker, { handleContact } from '../worker.js';

const originalFetch = globalThis.fetch;

const validBody = {
  name: 'Ada Lovelace',
  email: 'ada@example.com',
  company: 'Analytical Engines Ltd',
  message: 'We want to reduce the manual work in our weekly reporting process.',
  'cf-turnstile-response': 'valid-token',
};

function request(body = validBody) {
  return new Request('https://www.nmajor.com/api/contact', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'CF-Connecting-IP': '203.0.113.1',
      'CF-IPCountry': 'PT',
      Referer: 'https://www.nmajor.com/work-with-me',
    },
    body: JSON.stringify(body),
  });
}

const env = {
  PROJECTS_TURNSTILE_SECRET_KEY: 'turnstile-secret',
  DISCORD_CONTACT_WEBHOOK_URL: 'https://discord.test/webhook',
};

test.afterEach(() => {
  globalThis.fetch = originalFetch;
});

test('the Worker routes contact submissions to the contact handler', async () => {
  globalThis.fetch = async (url, options) => {
    if (String(url).includes('turnstile')) {
      return Response.json({ success: true, hostname: 'www.nmajor.com', action: 'nmajor_contact' });
    }
    assert.equal(url, env.DISCORD_CONTACT_WEBHOOK_URL);
    const payload = JSON.parse(options.body);
    assert.equal(payload.embeds[0].fields[1].value, validBody.email);
    assert.deepEqual(payload.allowed_mentions, { parse: [] });
    return new Response(null, { status: 204 });
  };

  const response = await worker.fetch(request(), {
    ...env,
    ASSETS: { fetch: () => assert.fail('contact request fell through to static assets') },
  });
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { ok: true });
});

test('contact validation rejects short messages before external requests', async () => {
  globalThis.fetch = () => assert.fail('validation should happen before fetch');
  const response = await handleContact(request({ ...validBody, message: 'Too short' }), env, 'www.nmajor.com');
  assert.equal(response.status, 400);
  assert.match((await response.json()).error, /20 and 4,000/);
});

test('contact submissions require the exact Turnstile action', async () => {
  let calls = 0;
  globalThis.fetch = async () => {
    calls += 1;
    return Response.json({ success: true, hostname: 'www.nmajor.com', action: 'nmajor_subscribe' });
  };

  const response = await handleContact(request(), env, 'www.nmajor.com');
  assert.equal(response.status, 400);
  assert.equal(calls, 1);
  assert.match((await response.json()).error, /Anti-spam check failed/);
});

test('the honeypot quietly accepts bot submissions without notifying Discord', async () => {
  globalThis.fetch = () => assert.fail('honeypot submissions should not fetch');
  const response = await handleContact(request({ ...validBody, website: 'spam.example' }), env, 'www.nmajor.com');
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { ok: true });
});

test('Discord failures return a retryable error to the form', async () => {
  globalThis.fetch = async (url) => {
    if (String(url).includes('turnstile')) {
      return Response.json({ success: true, hostname: 'www.nmajor.com', action: 'nmajor_contact' });
    }
    return new Response('nope', { status: 500 });
  };

  const response = await handleContact(request(), env, 'www.nmajor.com');
  assert.equal(response.status, 502);
  assert.match((await response.json()).error, /Could not send/);
});
