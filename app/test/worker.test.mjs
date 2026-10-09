import assert from 'node:assert/strict';
import test from 'node:test';
import { readdirSync } from 'node:fs';

import worker, { legacyRedirect } from '../worker.js';

const slugs = (dir) => readdirSync(new URL(`../src/content/${dir}/`, import.meta.url))
  .filter((f) => f.endsWith('.md')).map((f) => f.replace(/\.md$/, ''));

const assets = { fetch: async () => new Response('asset', { status: 200 }) };
const get = (url, method = 'GET') => worker.fetch(new Request(url, { method, redirect: 'manual' }), { ASSETS: assets });

test('section indexes map to their archive homes, with or without a slash', () => {
  for (const [from, to] of [
    ['/writing', '/archive/ai/'], ['/writing/', '/archive/ai/'],
    ['/takes', '/archive/takes/'], ['/takes/', '/archive/takes/'],
    ['/posts', '/archive/engineering/'], ['/building/', '/archive/engineering/'],
    ['/engineering', '/archive/engineering/'], ['/work-with-me', '/about/'],
    ['/blog/', '/archive/'], ['/experiments', '/'], ['/tools/', '/'],
  ]) assert.equal(legacyRedirect(from), to, from);
});

test('every archived essay maps from /writing/<slug>', () => {
  for (const s of slugs('essays')) {
    assert.equal(legacyRedirect(`/writing/${s}/`), `/archive/ai/${s}/`);
    assert.equal(legacyRedirect(`/writing/${s}`), `/archive/ai/${s}/`);
  }
});

test('every engineering post maps from its dated /posts URL, and the 2018 undated form too', () => {
  for (const s of slugs('building')) {
    assert.equal(legacyRedirect(`/posts/${s}/`), `/archive/engineering/${s}/`);
    assert.equal(legacyRedirect(`/posts/${s}`), `/archive/engineering/${s}/`);
    const undated = s.slice(11);
    if (s.startsWith('2018-')) assert.equal(legacyRedirect(`/posts/${undated}`), `/archive/engineering/${s}/`);
  }
});

test('current pages are not redirected', () => {
  for (const p of ['/', '/projects/', '/projects', '/about/', '/subscribe/', '/subscribe', '/archive/', '/archive/ai/x/', '/rss.xml', '/og/writing/x.png']) {
    assert.equal(legacyRedirect(p), null, p);
  }
});

test('worker issues one 301 and keeps the query string', async () => {
  const res = await get('https://www.nmajor.com/writing/farmers-built-a-support-bot/?utm_source=x');
  assert.equal(res.status, 301);
  assert.equal(res.headers.get('location'), 'https://www.nmajor.com/archive/ai/farmers-built-a-support-bot/?utm_source=x');
});

test('naked-domain legacy links reach the final URL in one hop', async () => {
  const res = await get('https://nmajor.com/posts/express-js-with-es6-and-babel');
  assert.equal(res.status, 301);
  assert.equal(res.headers.get('location'), 'https://www.nmajor.com/archive/engineering/2018-02-16-express-js-with-es6-and-babel/');
});

test('non-legacy GETs and HEADs fall through to assets', async () => {
  assert.equal((await get('https://www.nmajor.com/')).status, 200);
  assert.equal((await get('https://www.nmajor.com/archive/', 'HEAD')).status, 200);
});
