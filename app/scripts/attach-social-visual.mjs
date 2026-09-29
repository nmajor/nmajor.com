#!/usr/bin/env node

import { createHash } from 'node:crypto';
import { readFile, rename, writeFile } from 'node:fs/promises';
import { dirname, isAbsolute, relative, resolve } from 'node:path';

const ROOT = resolve(import.meta.dirname, '../..');
const LINKEDIN = resolve(ROOT, 'app/linkedin');
const FENCE = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/;
const PUBLISHABLE_RIGHTS = ['owned', 'licensed', 'public-domain', 'cc-compatible', 'fair-use-approved'];
const APPROVAL = /^Nicholas Major \d{4}-\d{2}-\d{2} \(via chat\)$/;
const ALLOWED_FORMATS = ['classic-meme', 'source-capture', 'workbench-photo'];

const fail = (id, message) => {
  throw new Error(`${id ?? 'visual'}: ${message}`);
};
const need = (condition, id, message) => {
  if (!condition) fail(id, message);
};
const text = (value) => (typeof value === 'string' ? value.trim() : '');
const sha256 = (data) => createHash('sha256').update(data).digest('hex');

function safeRepoPath(value, id, extension) {
  need(text(value) && !isAbsolute(value), id, 'path must be repo-relative');
  const path = resolve(ROOT, value);
  need(path.startsWith(`${LINKEDIN}/`), id, 'path must stay under app/linkedin/');
  if (extension) need(path.endsWith(extension), id, `path must end in ${extension}`);
  return path;
}

function safeImagePath(value, id) {
  const path = safeRepoPath(value, id);
  need(/\.(png|jpe?g)$/i.test(path), id, 'asset must be PNG or JPEG');
  return path;
}

function assets(row) {
  return [row.output];
}

function hashes(row) {
  return [row.asset_sha256];
}

function frontmatterValue(block, key) {
  const match = block.match(new RegExp(`^${key}:\\s*(.*)$`, 'm'));
  if (!match) return '';
  const value = match[1].trim();
  if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) return value.slice(1, -1);
  return value;
}

function setFrontmatterValue(raw, key, value) {
  const match = raw.match(FENCE);
  need(match, key, 'post has no frontmatter');
  const line = `${key}: ${value}`;
  const pattern = new RegExp(`^${key}:.*$`, 'm');
  const block = pattern.test(match[1]) ? match[1].replace(pattern, line) : `${match[1]}\n${line}`;
  return `---\n${block}\n---\n${match[2]}`;
}

async function atomicWrite(path, data) {
  const tmp = `${path}.${process.pid}.tmp`;
  await writeFile(tmp, data);
  await rename(tmp, path);
}

const args = process.argv.slice(2);
const campaignArg = args.find((arg) => !arg.startsWith('--'));
if (!campaignArg) fail('cli', 'usage: attach-social-visual.mjs <campaign.jsonl> [--write]');
const campaign = resolve(process.cwd(), campaignArg);
need(campaign.startsWith(`${LINKEDIN}/`) && campaign.endsWith('/visuals/campaign.jsonl'), 'cli', 'campaign must be an app/linkedin/*/visuals/campaign.jsonl file');
const shouldWrite = args.includes('--write');
const rows = (await readFile(campaign, 'utf8')).split(/\r?\n/).filter(Boolean).map((line) => JSON.parse(line));
const changes = [];

for (const row of rows) {
  const id = text(row.id);
  need(ALLOWED_FORMATS.includes(row.format), id, 'retired visual format');
  if (row.format === 'workbench-photo') {
    need(row.synthetic === true, id, 'workbench-photo requires synthetic: true');
    need(text(row.generation?.generator) && text(row.generation?.prompt), id, 'workbench-photo lacks generation provenance');
    need(/generated/i.test(text(row.rights?.provenance)), id, 'workbench-photo provenance must identify it as generated');
    need(/AI-generated|synthetic/i.test(text(row.alt_text)), id, 'workbench-photo alt text must disclose that it is generated');
  }
  const postPath = safeRepoPath(row.post, id, '.md');
  const raw = await readFile(postPath, 'utf8');
  const match = raw.match(FENCE);
  need(match, id, 'post has no frontmatter');
  if (frontmatterValue(match[1], 'visual') !== id) continue;

  need(!frontmatterValue(match[1], 'pushedAt'), id, 'post was already pushed');
  need(!frontmatterValue(match[1], 'media'), id, 'post already has media');
  need(row.status === 'approved', id, 'selected visual is not approved');
  need(/^Nicholas Major \d{4}-\d{2}-\d{2} \(via chat\)$/.test(text(row.approved)), id, 'visual lacks exact approval provenance');
  need(PUBLISHABLE_RIGHTS.includes(row.rights?.status), id, 'visual rights are not publishable');
  if (row.rights?.status === 'fair-use-approved') {
    need(APPROVAL.test(text(row.rights?.accepted_by)), id, 'fair-use publication lacks recorded risk acceptance');
  }
  need(sha256(match[2]) === row.post_body_sha256, id, 'post body changed after the visual brief');

  const assetValues = assets(row);
  const assetHashes = hashes(row);
  need(assetValues.length > 0 && assetValues.length === assetHashes.length, id, 'asset paths and hashes do not match');
  const media = [];
  for (let index = 0; index < assetValues.length; index += 1) {
    const assetPath = safeImagePath(assetValues[index], id);
    const bytes = await readFile(assetPath);
    need(/^[a-f0-9]{64}$/.test(text(assetHashes[index])) && sha256(bytes) === assetHashes[index], id, 'asset hash mismatch');
    media.push(relative(dirname(postPath), assetPath));
  }
  changes.push({ row, postPath, next: setFrontmatterValue(raw, 'media', media.join(',')) });
}

need(changes.length > 0, 'campaign', 'no selected, attachable visuals found');
for (const change of changes) console.log(`${shouldWrite ? 'ATTACH' : 'WOULD ATTACH'} ${change.row.id} -> ${relative(ROOT, change.postPath)}`);

if (shouldWrite) {
  for (const change of changes) {
    await atomicWrite(change.postPath, change.next);
    change.row.attached = true;
    change.row.status = 'exported';
  }
  await atomicWrite(campaign, `${rows.map((row) => JSON.stringify(row)).join('\n')}\n`);
}
