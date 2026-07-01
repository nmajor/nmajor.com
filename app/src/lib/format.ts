// Small formatting helpers shared across pages.

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** "Jun 2026" */
export function monthYear(d: Date): string {
  return `${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

/** "18 Jun 2026" */
export function longDate(d: Date): string {
  return `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

/** Reading time in whole minutes from raw markdown body (~200 wpm), min 1. */
export function readingMinutes(body: string | undefined, override?: number): number {
  if (override) return override;
  const words = (body ?? '').trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

/** Compact relative time for takes: "2d ago", "1w ago", "3mo ago". */
export function relativeShort(d: Date, now: Date = new Date()): string {
  const days = Math.max(0, Math.round((now.getTime() - d.getTime()) / 86_400_000));
  if (days === 0) return 'today';
  if (days === 1) return '1d ago';
  if (days < 7) return `${days}d ago`;
  const weeks = Math.round(days / 7);
  if (days < 30) return `${weeks}w ago`;
  const months = Math.round(days / 30);
  if (days < 365) return `${months}mo ago`;
  return `${Math.round(days / 365)}y ago`;
}
