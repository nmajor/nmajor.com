import { test } from 'node:test';
import assert from 'node:assert/strict';
import { lintWeeklyBatches } from './linkedin-weekly-lint.mjs';

function post(angle, offsetDays, over = {}) {
  const id = `issue/personal-${angle}`;
  return {
    id,
    data: {
      newsletter: 'issue',
      channel: 'personal',
      weeklyBatchVersion: 1,
      offsetDays,
      offsetMinutesAfterIssue: null,
      editorialLane: 'value',
      sourceKind: 'independent',
      reachGame: 'baseline',
      mediaRequired: true,
      ...over,
    },
  };
}

function visuals(posts) {
  return posts.map((item) => ({ post: `app/linkedin/${item.id}.md` }));
}

test('accepts a five-post batch with one exact issue companion', () => {
  const posts = [
    post('companion', 0, { editorialLane: 'companion', sourceKind: 'newsletter', offsetMinutesAfterIssue: 60 }),
    post('one', 1), post('two', 2), post('three', 3), post('monday', 6),
  ];
  assert.equal(lintWeeklyBatches(posts, () => visuals(posts)).ok, true);
});

test('rejects more than seven posts, duplicate days, or a missing companion', () => {
  const posts = Array.from({ length: 8 }, (_, index) => post(`p${index}`, index % 7));
  const result = lintWeeklyBatches(posts, () => visuals(posts));
  assert.equal(result.ok, false);
  assert.match(result.problems[0].issues.join(' '), /at most 7/);
  assert.match(result.problems[0].issues.join(' '), /unique/);
  assert.match(result.problems[0].issues.join(' '), /companion/);
});

test('requires one visual row for every retained post', () => {
  const posts = [post('companion', 0, { editorialLane: 'companion', sourceKind: 'newsletter', offsetMinutesAfterIssue: 60 })];
  assert.equal(lintWeeklyBatches(posts, () => []).ok, false);
});
