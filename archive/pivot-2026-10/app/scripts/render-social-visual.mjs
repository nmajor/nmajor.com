#!/usr/bin/env node

import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { dirname, extname, isAbsolute, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));
const APP_DIR = resolve(SCRIPT_DIR, '..');
const ROOT = resolve(APP_DIR, '..');
const LINKEDIN = join(ROOT, 'app/linkedin');
const ALLOWED_FORMATS = ['classic-meme', 'source-capture', 'workbench-photo'];
const PUBLISHABLE_RIGHTS = ['owned', 'licensed', 'public-domain', 'cc-compatible', 'fair-use-approved'];
const ALL_RIGHTS = [...PUBLISHABLE_RIGHTS, 'unverified', 'fair-use-review', 'source-dependent'];
const APPROVAL = /^Nicholas Major \d{4}-\d{2}-\d{2} \(via chat\)$/;

const fail = (id, message) => {
  throw new Error(`${id || 'visual'}: ${message}`);
};
const need = (condition, id, message) => {
  if (!condition) fail(id, message);
};
const text = (value) => typeof value === 'string' ? value.trim() : '';
const sha256 = (data) => createHash('sha256').update(data).digest('hex');

function repoOutput(value, id) {
  need(text(value) && !isAbsolute(value), id, 'output must be a repo-relative image path');
  const output = resolve(ROOT, value);
  need(output.startsWith(`${LINKEDIN}/`), id, 'output must stay under app/linkedin/');
  need(['.png', '.jpg', '.jpeg'].includes(extname(output).toLowerCase()), id, 'output must be PNG or JPEG');
  return output;
}

function postBodyHash(value, id) {
  need(text(value).startsWith('app/linkedin/') && text(value).endsWith('.md'), id, 'post must point to a LinkedIn Markdown file');
  const post = resolve(ROOT, value);
  need(post.startsWith(`${LINKEDIN}/`), id, 'post must stay under app/linkedin/');
  const raw = readFileSync(post, 'utf8');
  const match = raw.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n([\s\S]*)$/);
  need(match, id, 'post has no frontmatter');
  return sha256(match[1]);
}

function validateSources(row) {
  const sources = row.sources;
  need(Array.isArray(sources) && sources.length >= 1 && sources.length <= 4, row.id, '1-4 sources are required');
  for (const [index, source] of sources.entries()) {
    need(source && typeof source === 'object', row.id, `sources[${index}] must be an object`);
    need(text(source.name), row.id, `sources[${index}].name is required`);
    need(/^https?:\/\//.test(text(source.url)), row.id, `sources[${index}].url must be HTTP(S)`);
    need(text(source.name).length <= 70, row.id, `sources[${index}].name exceeds 70 characters`);
    need(text(source.date).length <= 28, row.id, `sources[${index}].date exceeds 28 characters`);
  }
}

async function validate(row) {
  const id = text(row.id);
  need(id && /^[a-z0-9][a-z0-9-]*$/.test(id), id, 'id must be a lowercase slug');
  need(row.version === 1, id, 'version must be 1');
  need(ALLOWED_FORMATS.includes(row.format), id, `unsupported format; allowed: ${ALLOWED_FORMATS.join(', ')}`);
  need(['review', 'approved', 'exported'].includes(row.status), id, 'status must be review, approved, or exported');
  need(typeof row.attached === 'boolean', id, 'attached must be true or false');
  need(text(row.title), id, 'title is required');
  need(text(row.title).length <= 72, id, 'title exceeds 72 characters');
  need(text(row.alt_text).length >= 20 && text(row.alt_text).length <= 260, id, 'alt_text must be 20-260 characters');
  need(/^[a-f0-9]{64}$/.test(text(row.post_body_sha256)), id, 'post_body_sha256 is required');
  need(postBodyHash(row.post, id) === row.post_body_sha256, id, 'post body changed after the visual brief was created');
  validateSources(row);

  need(row.rights && typeof row.rights === 'object', id, 'rights are required');
  need(ALL_RIGHTS.includes(row.rights.status), id, 'invalid rights.status');
  if (row.rights.status === 'fair-use-approved') {
    need(APPROVAL.test(text(row.rights.accepted_by)), id, 'fair-use publication needs Nick\'s recorded risk acceptance');
  }
  need(text(row.rights.provenance), id, 'rights.provenance is required');

  if (row.status === 'approved' || row.status === 'exported') {
    need(APPROVAL.test(text(row.approved)), id, 'approved visual needs Nick\'s explicit approval');
  }
  if (row.status === 'exported') need(row.attached === true, id, 'exported visual must be attached');
  if (row.attached) {
    need(row.status === 'approved' || row.status === 'exported', id, 'attached visual must be approved');
    need(PUBLISHABLE_RIGHTS.includes(row.rights.status), id, 'attached visual rights must be publishable');
    need(APPROVAL.test(text(row.approved)), id, 'attached visual needs Nick\'s explicit approval');
  }

  if (row.format === 'workbench-photo') {
    need(row.synthetic === true, id, 'workbench-photo requires synthetic: true');
    need(row.generation && typeof row.generation === 'object', id, 'workbench-photo requires generation provenance');
    need(text(row.generation.generator), id, 'workbench-photo requires generation.generator');
    need(text(row.generation.prompt), id, 'workbench-photo requires the complete generation.prompt');
    need(/generated/i.test(text(row.rights.provenance)), id, 'workbench-photo rights.provenance must identify it as generated');
    need(/AI-generated|synthetic/i.test(text(row.alt_text)), id, 'workbench-photo alt_text must say AI-generated or synthetic');
  }

  const output = repoOutput(row.output, id);
  const bytes = await readFile(output);
  need(/^[a-f0-9]{64}$/.test(text(row.asset_sha256)), id, 'asset_sha256 is required');
  need(sha256(bytes) === row.asset_sha256, id, 'asset_sha256 does not match the local file');
  return output;
}

const args = process.argv.slice(2);
const campaignArg = args.find((arg) => !arg.startsWith('--'));
need(campaignArg, 'cli', 'usage: render-social-visual.mjs <campaign.jsonl> --validate');
need(args.includes('--validate'), 'cli', 'this command validates assets; the three formats use specialist creation workflows');

const campaign = resolve(process.cwd(), campaignArg);
need(campaign.startsWith(`${LINKEDIN}/`) && campaign.endsWith('/visuals/campaign.jsonl'), 'cli', 'campaign must be an app/linkedin/*/visuals/campaign.jsonl file');
const rows = (await readFile(campaign, 'utf8')).split(/\r?\n/).filter(Boolean).map((line) => JSON.parse(line));
need(rows.length > 0, 'campaign', 'campaign must contain at least one visual');

const outputs = [];
for (const row of rows) outputs.push(relative(ROOT, await validate(row)));
need(new Set(rows.map((row) => row.id)).size === rows.length, 'campaign', 'visual ids must be unique');
need(new Set(rows.map((row) => row.post)).size === rows.length, 'campaign', 'each post must have exactly one visual candidate');
need(new Set(outputs).size === outputs.length, 'campaign', 'output paths must be unique');

console.log(`OK: ${relative(ROOT, campaign)} (${rows.length} visual${rows.length === 1 ? '' : 's'})`);
