import { test } from 'node:test';
import assert from 'node:assert/strict';
import { lintLinkedin } from './linkedin-lint.mjs';

function item(over = {}) {
  const { body, id, fm, ...data } = over;
  return {
    id: id || 'seven-days-to-close/personal-test',
    body: body || 'A concrete hook.\n\nThis test body is long enough to pass the unfinished-body check without adding a hashtag or crossing the length ceiling.',
    fm,
    data: {
      newsletter: 'seven-days-to-close',
      channel: 'personal',
      angle: 'test',
      offsetDays: 1,
      approved: 'Nicholas Major 2026-08-18',
      shadowedAt: null,
      pushedAt: null,
      ...data,
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

test('an approved visual-led post fails closed until media is attached', () => {
  const blocked = lintLinkedin([item({ mediaRequired: true, media: [] })], {}, true);
  assert.equal(blocked.ok, false);
  assert.match(blocked.problems[0].issues.join(' '), /requires media/);

  const attached = lintLinkedin([item({ mediaRequired: true, media: ['visuals/card.png'] })], {}, true);
  assert.equal(attached.ok, true);
  assert.deepEqual(attached.ready, ['seven-days-to-close/personal-test']);
});

test('validates fixed and issue-relative timing fields', () => {
  assert.equal(lintLinkedin([item({ postHourUTC: 24 })], {}, true).ok, false);
  assert.equal(lintLinkedin([item({ postHourUTC: 15 })], {}, true).ok, true);
  assert.equal(lintLinkedin([item({ offsetDays: 0, offsetMinutesAfterIssue: 60 })], {}, true).ok, true);
  assert.equal(lintLinkedin([item({ offsetDays: 1, offsetMinutesAfterIssue: 60 })], {}, true).ok, false);
  assert.equal(lintLinkedin([item({ offsetDays: 0, offsetMinutesAfterIssue: 60, postHourUTC: 15 })], {}, true).ok, false);
  assert.equal(lintLinkedin([item({ fm: { postHourUTC: '15.5' }, postHourUTC: null })], {}, true).ok, false);
  assert.equal(lintLinkedin([item({ fm: { offsetMinutesAfterIssue: 'soon' }, offsetMinutesAfterIssue: null })], {}, true).ok, false);
});

test('a documented long-form exception may exceed the normal body target', () => {
  const longBody = `Short hook.\n\n${'A'.repeat(1450)}`;
  assert.equal(lintLinkedin([item({ body: longBody })], {}, true).ok, false);
  assert.equal(lintLinkedin([item({ body: longBody, lengthReason: 'The source limitation needs context.' })], {}, true).ok, true);
  const tooLong = `Short hook.\n\n${'A'.repeat(3050)}`;
  assert.equal(lintLinkedin([item({ body: tooLong, lengthReason: 'Still too long.' })], {}, true).ok, false);
});
