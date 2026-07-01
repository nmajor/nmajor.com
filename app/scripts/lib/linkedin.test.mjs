// Unit tests for the LinkedIn scheduling core: the pure resolver and the
// due-selection logic. These cover the load-bearing reliability property — that
// a LinkedIn post's date derives from its newsletter's real pubDate, so a delay
// or reorder moves it automatically. Run with: npm test

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { scheduleFor, selectDue } from './linkedin.mjs';

// --- scheduleFor: the resolver -------------------------------------------------

test('scheduleFor adds offsetDays to the issue day at postingHourUTC', () => {
  const pub = new Date('2026-06-23T14:00:00Z');
  assert.equal(scheduleFor(0, pub, 15).toISOString(), '2026-06-23T15:00:00.000Z');
  assert.equal(scheduleFor(1, pub, 15).toISOString(), '2026-06-24T15:00:00.000Z');
  assert.equal(scheduleFor(5, pub, 15).toISOString(), '2026-06-28T15:00:00.000Z');
});

test('scheduleFor ignores the time-of-day of pubDate (uses postingHourUTC)', () => {
  const early = new Date('2026-06-23T02:30:00Z');
  const late = new Date('2026-06-23T23:45:00Z');
  assert.equal(scheduleFor(1, early, 9).toISOString(), scheduleFor(1, late, 9).toISOString());
});

test('a one-week newsletter delay moves every LinkedIn post by exactly a week', () => {
  const before = new Date('2026-06-23T14:00:00Z');
  const after = new Date('2026-06-30T14:00:00Z');
  for (const off of [0, 1, 3, 5]) {
    const delta = scheduleFor(off, after, 15) - scheduleFor(off, before, 15);
    assert.equal(delta, 7 * 24 * 60 * 60 * 1000);
  }
});

test('scheduleFor crosses month boundaries correctly', () => {
  const pub = new Date('2026-06-30T14:00:00Z');
  assert.equal(scheduleFor(3, pub, 15).toISOString(), '2026-07-03T15:00:00.000Z');
});

// --- selectDue: the gate -------------------------------------------------------

const mkPost = () => ({ slug: 'iss', data: { title: 'Issue', pubDate: new Date('2026-06-23T14:00:00Z') } });
const liveApproved = () => ({ post: mkPost(), live: true, approved: true });
const liveUnapprovedParent = () => ({ post: mkPost(), live: true, approved: false });
const notLive = () => ({ post: mkPost(), live: false, approved: true });
const noParent = () => ({ post: null, live: false, approved: false });

function item(over = {}) {
  return {
    id: over.id || 'iss/personal-story',
    body: 'x',
    data: {
      newsletter: 'iss', channel: 'personal', angle: 'story', offsetDays: 1,
      approved: 'Nick 2026-06-23', shadowedAt: null, pushedAt: null, ...over,
    },
  };
}

test('selects an approved post under a live, approved newsletter', () => {
  const due = selectDue([item()], { enabled: false, resolve: liveApproved });
  assert.equal(due.length, 1);
  assert.equal(due[0].at.toISOString(), '2026-06-24T15:00:00.000Z');
});

test('skips an unapproved post (Nick has not signed off)', () => {
  assert.equal(selectDue([item({ approved: '' })], { resolve: liveApproved }).length, 0);
});

test('skips a post whose newsletter is not yet live', () => {
  assert.equal(selectDue([item()], { resolve: notLive }).length, 0);
});

test('skips a post whose newsletter slug points at nothing', () => {
  assert.equal(selectDue([item()], { resolve: noParent }).length, 0);
});

test('schedules under a live newsletter even if the parent lacks the approved field', () => {
  // Live posts are already published and may not carry the queue sign-off field.
  assert.equal(selectDue([item()], { resolve: liveUnapprovedParent }).length, 1);
});

test('skips invalid channel / negative / missing offset', () => {
  assert.equal(selectDue([item({ channel: 'twitter' })], { resolve: liveApproved }).length, 0);
  assert.equal(selectDue([item({ offsetDays: -1 })], { resolve: liveApproved }).length, 0);
  assert.equal(selectDue([item({ offsetDays: null })], { resolve: liveApproved }).length, 0);
});

test('idempotency markers are mode-specific', () => {
  const shadowed = item({ shadowedAt: new Date(), pushedAt: null });
  const pushed = item({ shadowedAt: null, pushedAt: new Date() });
  // Shadow mode: a shadowed post is done; a merely-pushed post is not re-shadowed.
  assert.equal(selectDue([shadowed], { enabled: false, resolve: liveApproved }).length, 0);
  // Live mode: a pushed post is done; a merely-shadowed post still needs pushing
  // (so turning live on never skips a post just because shadow announced it).
  assert.equal(selectDue([pushed], { enabled: true, resolve: liveApproved }).length, 0);
  assert.equal(selectDue([shadowed], { enabled: true, resolve: liveApproved }).length, 1);
});

test('business channel is supported alongside personal', () => {
  assert.equal(selectDue([item({ channel: 'business' })], { resolve: liveApproved }).length, 1);
});

const autoApprove = { business: { autoApprovePreview: true } };

test('auto-approves an unapproved business preview when the policy is on', () => {
  const preview = item({ channel: 'business', angle: 'preview', offsetDays: 0, approved: '' });
  assert.equal(selectDue([preview], { resolve: liveApproved, channels: autoApprove }).length, 1);
});

test('auto-approve is scoped to angle:preview — a bespoke business post still needs sign-off', () => {
  const bespoke = item({ channel: 'business', angle: 'myth-bust', approved: '' });
  assert.equal(selectDue([bespoke], { resolve: liveApproved, channels: autoApprove }).length, 0);
});

test('auto-approve does NOT apply to the personal channel', () => {
  const personalPreview = item({ channel: 'personal', angle: 'preview', approved: '' });
  assert.equal(selectDue([personalPreview], { resolve: liveApproved, channels: autoApprove }).length, 0);
});

test('without the policy flag, an unapproved preview is still skipped', () => {
  const preview = item({ channel: 'business', angle: 'preview', offsetDays: 0, approved: '' });
  assert.equal(selectDue([preview], { resolve: liveApproved, channels: {} }).length, 0);
});
