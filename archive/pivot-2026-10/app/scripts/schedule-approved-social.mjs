// Schedule explicitly approved social posts without waiting for a parent newsletter.
// This is for user-requested standalone posts. It preserves the same Postiz identity
// preflight, media upload, and pushedAt idempotency lock as schedule-linkedin.mjs.

import { existsSync, readdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import {
  LINKEDIN_DIR,
  readItem,
  readLinkedinConfig,
  setItemFields,
  verifyIntegrationIdentity,
} from './lib/linkedin.mjs';
import {
  createScheduledPost,
  listIntegrations,
  postContent,
  uploadMedia,
} from './lib/postiz.mjs';

function parseArgs(argv) {
  const atArg = argv.find((arg) => arg.startsWith('--at='));
  const ids = argv.filter((arg) => !arg.startsWith('--'));
  if (!atArg || ids.length === 0) {
    throw new Error('usage: node schedule-approved-social.mjs --at=<ISO timestamp> <post-id> [...]');
  }
  const at = new Date(atArg.slice(5));
  if (Number.isNaN(at.getTime())) throw new Error('invalid --at timestamp');
  const now = new Date();
  if (at.getTime() < now.getTime() + 5 * 60_000) {
    throw new Error('--at must be at least five minutes in the future');
  }
  if (at.getTime() > now.getTime() + 24 * 60 * 60_000) {
    throw new Error('--at must be within the next 24 hours');
  }
  return { at, ids };
}

function resolveMedia(item) {
  const base = join(LINKEDIN_DIR, dirname(item.id));
  const files = [];
  for (const entry of item.data.media) {
    const path = join(base, entry);
    if (!existsSync(path)) throw new Error(`${item.id}: media not found: ${entry}`);
    if (statSync(path).isDirectory()) {
      const names = readdirSync(path)
        .filter((name) => /\.(png|jpe?g)$/i.test(name))
        .sort();
      if (names.length === 0) throw new Error(`${item.id}: media directory is empty: ${entry}`);
      files.push(...names.map((name) => join(path, name)));
    } else {
      files.push(path);
    }
  }
  return files;
}

async function main() {
  const { at, ids } = parseArgs(process.argv.slice(2));
  const cfg = readLinkedinConfig();
  if (!cfg.enabled) throw new Error('linkedin.config.json is not in live mode');

  const items = ids.map(readItem);
  const selectedChannels = {};
  for (const item of items) {
    if (!item.data.approved) throw new Error(`${item.id}: explicit approval is missing`);
    if (item.data.pushedAt) throw new Error(`${item.id}: already pushed at ${item.data.pushedAt.toISOString()}`);
    const channel = cfg.channels[item.data.channel];
    if (!channel?.integrationId) throw new Error(`${item.id}: channel ${item.data.channel} is not connected`);
    selectedChannels[item.data.channel] = channel;
  }

  const integrations = await listIntegrations();
  const problems = verifyIntegrationIdentity(selectedChannels, integrations);
  if (problems.length) {
    throw new Error(`integration identity preflight failed:\n${problems.map((p) => p.message).join('\n')}`);
  }
  console.log('Integration identity preflight passed for requested channels.');

  for (const item of items) {
    const channel = cfg.channels[item.data.channel];
    const media = [];
    for (const path of resolveMedia(item)) media.push(await uploadMedia(path));
    const { postId, date } = await createScheduledPost({
      content: postContent(item),
      integrationId: channel.integrationId,
      settingsType: channel.settingsType,
      at,
      media,
      extraSettings: channel.defaultSettings || {},
    });
    const pushedAt = new Date().toISOString();
    setItemFields(item.id, { pushedAt, postizId: postId, postizScheduledAt: date });
    console.log(`${item.id} scheduled for ${date} (Postiz ${postId})`);
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
