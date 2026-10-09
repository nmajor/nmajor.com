// Unit tests for the takes scheduling core: the pure resolver and the
// due-selection logic. Same reliability property as LinkedIn — a generated take's
// reveal date derives from its source essay's real pubDate, so a delayed or
// reordered essay carries its takes with it. Run with: npm test

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { scheduleFor, selectDueTakes } from './takes.mjs';

// --- scheduleFor: the resolver -------------------------------------------------

test('scheduleFor adds offsetDays to the essay day at 00:00 UTC', () => {
  const pub = new Date('2026-06-23T14:00:00Z');
  assert.equal(scheduleFor(2, pub).toISOString(), '2026-06-25T00:00:00.000Z');
  assert.equal(scheduleFor(4, pub).toISOString(), '2026-06-27T00:00:00.000Z');
  assert.equal(scheduleFor(6, pub).toISOString(), '2026-06-29T00:00:00.000Z');
});

test('scheduleFor lands strictly before the 14:00 UTC daily build on its day', () => {
  // Midnight guarantees that day's build reveals the take (not the next day's).
  const pub = new Date('2026-06-23T23:59:00Z');
  const at = scheduleFor(2, pub);
  assert.equal(at.getUTCHours(), 0);
  assert.equal(at.getUTCDate(), 25);
});

test('scheduleFor ignores the essay time-of-day (uses the calendar day)', () => {
  const early = new Date('2026-06-23T02:30:00Z');
  const late = new Date('2026-06-23T23:45:00Z');
  assert.equal(scheduleFor(2, early).toISOString(), scheduleFor(2, late).toISOString());
});

test('a one-week essay delay moves every take by exactly a week', () => {
  const before = new Date('2026-06-23T14:00:00Z');
  const after = new Date('2026-06-30T14:00:00Z');
  for (const off of [2, 4, 6]) {
    const delta = scheduleFor(off, after) - scheduleFor(off, before);
    assert.equal(delta, 7 * 24 * 60 * 60 * 1000);
  }
});

test('scheduleFor crosses month boundaries correctly', () => {
  const pub = new Date('2026-06-30T14:00:00Z');
  assert.equal(scheduleFor(4, pub).toISOString(), '2026-07-04T00:00:00.000Z');
});

// --- selectDueTakes: the gate --------------------------------------------------

const mkEssay = () => ({ slug: 'ess', data: { title: 'Essay', pubDate: new Date('2026-06-23T14:00:00Z') } });
const live = () => ({ essay: mkEssay(), live: true });
const notLive = () => ({ essay: mkEssay(), live: false });
const noSource = () => ({ essay: null, live: false });

function take(over = {}) {
  return {
    slug: over.slug || 'ess-1',
    data: {
      text: 'a take', pubDate: null, draft: true,
      source: 'ess', offsetDays: 2, idea: 'the idea', ...over,
    },
  };
}

test('selects a draft generated take under a live essay, on the right day', () => {
  const due = selectDueTakes([take()], { resolve: live });
  assert.equal(due.length, 1);
  assert.equal(due[0].at.toISOString(), '2026-06-25T00:00:00.000Z');
});

test('skips an already-scheduled take (draft:false is the idempotency lock)', () => {
  assert.equal(selectDueTakes([take({ draft: false })], { resolve: live }).length, 0);
});

test('skips a hand-authored take with no source', () => {
  assert.equal(selectDueTakes([take({ source: '' })], { resolve: live }).length, 0);
});

test('skips a take whose source essay is not yet live', () => {
  assert.equal(selectDueTakes([take()], { resolve: notLive }).length, 0);
});

test('skips a take whose source points at nothing', () => {
  assert.equal(selectDueTakes([take()], { resolve: noSource }).length, 0);
});

test('skips invalid / missing / zero offset', () => {
  assert.equal(selectDueTakes([take({ offsetDays: 0 })], { resolve: live }).length, 0);
  assert.equal(selectDueTakes([take({ offsetDays: -1 })], { resolve: live }).length, 0);
  assert.equal(selectDueTakes([take({ offsetDays: null })], { resolve: live }).length, 0);
});
