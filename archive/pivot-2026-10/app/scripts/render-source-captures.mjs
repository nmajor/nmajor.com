#!/usr/bin/env node

import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { access, readFile, rename, writeFile } from 'node:fs/promises';
import { dirname, isAbsolute, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const LINKEDIN = resolve(ROOT, 'app/linkedin');
const RESEARCH = resolve(ROOT, 'research');
const WIDTH = 1200;
const TOP = 72;
const RED = '#ff1a12';

const fail = (id, message) => {
  throw new Error(`${id ?? 'capture'}: ${message}`);
};
const need = (condition, id, message) => {
  if (!condition) fail(id, message);
};
const text = (value) => (typeof value === 'string' ? value.trim() : '');
const sha256 = (data) => createHash('sha256').update(data).digest('hex');

function safePath(value, base, id, label) {
  need(text(value) && !isAbsolute(value), id, `${label} must be repo-relative`);
  const path = resolve(ROOT, value);
  need(path.startsWith(`${base}/`), id, `${label} must stay under ${relative(ROOT, base)}/`);
  return path;
}

function runMagick(entry, input, output) {
  const { x, y, width, height } = entry.crop;
  const scale = WIDTH / width;
  const draw = (entry.rectangles ?? []).flatMap((mark) => {
    const x1 = Math.round(mark.x * scale);
    const y1 = Math.round(mark.y * scale + TOP);
    const x2 = Math.round((mark.x + mark.width) * scale);
    const y2 = Math.round((mark.y + mark.height) * scale + TOP);
    return ['-stroke', RED, '-strokewidth', '9', '-fill', 'none', '-draw', `rectangle ${x1},${y1} ${x2},${y2}`];
  });
  const args = [
    input,
    '-crop', `${width}x${height}+${x}+${y}`,
    '+repage',
    '-resize', `${WIDTH}x`,
    '-background', '#efefed',
    '-gravity', 'north',
    '-splice', `0x${TOP}`,
    '-gravity', 'northwest',
    '-font', 'DejaVu-Sans-Bold',
    '-pointsize', '31',
    '-fill', '#111111',
    '-stroke', 'none',
    '-annotate', '+22+18', entry.caption,
    ...draw,
    output,
  ];
  const result = spawnSync('magick', args, { encoding: 'utf8' });
  need(result.status === 0, entry.id, result.stderr || 'ImageMagick failed');
}

const args = process.argv.slice(2);
const configArg = args.find((arg) => !arg.startsWith('--'));
if (!configArg) fail('cli', 'usage: render-source-captures.mjs <captures.json> [--replace-review]');
const configPath = resolve(process.cwd(), configArg);
need(configPath.startsWith(`${LINKEDIN}/`) && configPath.endsWith('/visuals/source-captures.json'), 'cli', 'config must be an app/linkedin/*/visuals/source-captures.json file');
const replaceReview = args.includes('--replace-review');
const config = JSON.parse(await readFile(configPath, 'utf8'));
const campaignPath = resolve(dirname(configPath), 'campaign.jsonl');
const rows = (await readFile(campaignPath, 'utf8')).split(/\r?\n/).filter(Boolean).map((line) => JSON.parse(line));

for (const entry of config.captures ?? []) {
  need(/^[a-z0-9][a-z0-9-]*$/.test(text(entry.id)), entry.id, 'invalid id');
  need(text(entry.caption).length >= 3 && text(entry.caption).length <= 80, entry.id, 'caption must be 3-80 characters');
  need(entry.crop && [entry.crop.x, entry.crop.y, entry.crop.width, entry.crop.height].every(Number.isInteger), entry.id, 'crop must contain integer x/y/width/height');
  need(entry.crop.width >= 300 && entry.crop.height >= 200, entry.id, 'crop is too small');
  const row = rows.find((candidate) => candidate.id === entry.id);
  need(row, entry.id, 'no matching campaign row');
  need(row.attached === false, entry.id, 'attached captures cannot be replaced');
  need(row.status === 'draft' || (replaceReview && row.status === 'review'), entry.id, 'capture must be draft, or review with --replace-review');

  const input = safePath(entry.input, RESEARCH, entry.id, 'input');
  const output = safePath(row.output, LINKEDIN, entry.id, 'output');
  await access(input);
  if (row.status === 'review') {
    const old = await readFile(output);
    need(sha256(old) === row.asset_sha256, entry.id, 'existing review asset no longer matches its ledger hash');
  }

  const tmp = `${output}.${process.pid}.tmp.png`;
  runMagick(entry, input, tmp);
  const bytes = await readFile(tmp);
  row.format = 'source-capture';
  for (const field of ['treatment', 'metric', 'supporting', 'steps', 'events', 'left', 'right', 'items', 'quote', 'attribution']) delete row[field];
  row.alt_text = entry.alt_text;
  row.rights = {
    status: 'source-dependent',
    provenance: 'Direct screenshot of the cited source, cropped and marked with red rectangles. No source text was altered.',
  };
  row.asset_sha256 = sha256(bytes);
  row.status = 'review';
  await rename(tmp, output);
  console.log(relative(ROOT, output));
}

const campaignTmp = `${campaignPath}.${process.pid}.tmp`;
await writeFile(campaignTmp, `${rows.map((row) => JSON.stringify(row)).join('\n')}\n`);
await rename(campaignTmp, campaignPath);
