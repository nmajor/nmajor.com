// Discord + healthchecks notifications for the publishing workflow.
//
// The contract that makes silence meaningful:
//   - green  : something published / emailed successfully
//   - amber  : a cadence day arrived but the queue was empty (refill it)
//   - red    : something failed (also fired by the workflow's `if: failure()`)
// Every scheduled run also pings the healthcheck, so if the cron itself stops
// firing, healthchecks alerts independently (the one thing Discord can't self-report).

const COLORS = { green: 0x1f8f4e, amber: 0xb7791f, red: 0xb91c1c, info: 0x15213b };

function runUrl() {
  const { GITHUB_SERVER_URL, GITHUB_REPOSITORY, GITHUB_RUN_ID } = process.env;
  if (GITHUB_SERVER_URL && GITHUB_REPOSITORY && GITHUB_RUN_ID) {
    return `${GITHUB_SERVER_URL}/${GITHUB_REPOSITORY}/actions/runs/${GITHUB_RUN_ID}`;
  }
  return null;
}

/**
 * Post an embed to the publishing Discord webhook. Best-effort: never throws,
 * so a notification problem can't fail a publish that already happened.
 * @param {'green'|'amber'|'red'|'info'} level
 */
export async function discord(level, title, description, fields = []) {
  const url = process.env.DISCORD_PUBLISH_WEBHOOK_URL || process.env.DISCORD_CONTACT_WEBHOOK_URL;
  if (!url) {
    console.warn('notify: no Discord webhook configured; skipping');
    return;
  }
  const link = runUrl();
  const embed = {
    title,
    description: description || undefined,
    color: COLORS[level] ?? COLORS.amber,
    fields: [
      ...fields,
      ...(link ? [{ name: 'Run', value: `[workflow logs](${link})`, inline: false }] : []),
    ],
    timestamp: new Date().toISOString(),
  };
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'Publishing', embeds: [embed] }),
    });
    if (!res.ok) console.error('notify: discord non-2xx', res.status, await res.text());
  } catch (err) {
    console.error('notify: discord failed', err instanceof Error ? err.message : String(err));
  }
}

/**
 * Ping the healthchecks dead-man's switch. `suffix` is '' (success), '/start',
 * or '/fail'. Requires HEALTHCHECK_PING_URL. Best-effort.
 */
export async function healthcheck(suffix = '') {
  const base = process.env.HEALTHCHECK_PING_URL;
  if (!base) {
    console.warn('notify: no HEALTHCHECK_PING_URL configured; skipping');
    return;
  }
  try {
    await fetch(`${base.replace(/\/$/, '')}${suffix}`, { method: 'POST' });
  } catch (err) {
    console.error('notify: healthcheck failed', err instanceof Error ? err.message : String(err));
  }
}
