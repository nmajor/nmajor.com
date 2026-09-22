import { test } from 'node:test';
import assert from 'node:assert/strict';
import { lintLinkedin } from './linkedin-lint.mjs';

function item(over = {}) {
  return {
    id: over.id || 'seven-days-to-close/personal-test',
    body: 'A concrete hook.\n\nThis test body is long enough to pass the unfinished-body check without adding a hashtag or crossing the length ceiling.',
    data: {
      newsletter: 'seven-days-to-close',
      channel: 'personal',
      angle: 'test',
      offsetDays: 1,
      approved: 'Nicholas Major 2026-08-18',
      shadowedAt: null,
      pushedAt: null,
      ...over,
    },
  };
}

test('live lint reports pushed posts as handled, not schedule-ready', () => {
  const result = lintLinkedin([item({ pushedAt: new Date('2026-08-18T12:00:00Z') })], {}, true);
  assert.deepEqual(result.ready, []);
  assert.deepEqual(result.handled, ['seven-days-to-close/personal-test']);
});

test('shadow lint reports shadowed posts as handled, not schedule-ready', () => {
  const result = lintLinkedin([item({ shadowedAt: new Date('2026-08-18T12:00:00Z') })], {}, false);
  assert.deepEqual(result.ready, []);
  assert.deepEqual(result.handled, ['seven-days-to-close/personal-test']);
});

test('a post handled only in shadow mode remains schedule-ready in live mode', () => {
  const result = lintLinkedin([item({ shadowedAt: new Date('2026-08-18T12:00:00Z') })], {}, true);
  assert.deepEqual(result.ready, ['seven-days-to-close/personal-test']);
  assert.deepEqual(result.handled, []);
});
