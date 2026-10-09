// Read/write the publishing queue + cadence config.
//
// publishing.config.json is the queue: an ordered list of approved post slugs.
// The top of `queue` publishes next. Reordering the array is the entire
// "override next week's post" mechanism. Only Nick edits this file by hand;
// the publisher edits only `lastPublishedAt` and removes the slug it published.

import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
export const CONFIG_PATH = join(here, '..', '..', 'publishing.config.json');

export function readConfig() {
  const cfg = JSON.parse(readFileSync(CONFIG_PATH, 'utf8'));
  cfg.queue = Array.isArray(cfg.queue) ? cfg.queue : [];
  cfg.cadence = cfg.cadence || { weekday: 2, hourUTC: 14 };
  // Warn daily when the queue is at or below this many posts (0 = empty, only
  // warn when fully empty). Default 1: with weekly cadence, 1 post left means
  // the queue empties after the next slot, giving ~a week of lead time.
  cfg.lowQueueThreshold = Number.isInteger(cfg.lowQueueThreshold) ? cfg.lowQueueThreshold : 1;
  return cfg;
}

export function writeConfig(cfg) {
  writeFileSync(CONFIG_PATH, `${JSON.stringify(cfg, null, 2)}\n`);
}

/** True when `now` falls on the configured cadence weekday (UTC). */
export function isCadenceDay(cfg, now) {
  return now.getUTCDay() === cfg.cadence.weekday;
}

/** The next cadence slot datetime strictly after `now` (UTC). */
export function nextCadenceSlot(cfg, now) {
  let d = new Date(Date.UTC(
    now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), cfg.cadence.hourUTC, 0, 0, 0,
  ));
  for (let i = 0; i < 14; i++) {
    if (d.getUTCDay() === cfg.cadence.weekday && d.getTime() > now.getTime()) return d;
    d = new Date(d.getTime() + 24 * 60 * 60 * 1000);
  }
  return d;
}

/** Whole days from `now` until the given date, rounded up (min 0). */
export function daysUntil(date, now) {
  return Math.max(0, Math.ceil((date.getTime() - now.getTime()) / (24 * 60 * 60 * 1000)));
}

/** True when we have already published during the current UTC day. */
export function alreadyPublishedToday(cfg, now) {
  if (!cfg.lastPublishedAt) return false;
  const last = new Date(cfg.lastPublishedAt);
  return last.toISOString().slice(0, 10) === now.toISOString().slice(0, 10);
}
