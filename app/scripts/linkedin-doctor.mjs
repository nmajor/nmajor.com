// Doctor for the Postiz channel wiring: prints, for every configured channel,
// what linkedin.config.json expects and what Postiz actually reports for its
// integrationId, with OK/MISMATCH per field. Exit 1 on any problem.
//
// Why this exists: on 2026-08-04 a LinkedIn re-auth silently swapped the
// identity behind a stable integration ID (Nick's personal profile became the
// "Lynchburg Roanoke Concrete" company page) and five posts were scheduled to
// the wrong account. The same check runs as a hard preflight in
// schedule-linkedin.mjs; this command is the standalone way to run it by hand.
//
// Env: POSTIZ_BASE_URL + POSTIZ_API_KEY (from .env). Run: npm run linkedin:doctor

import { readLinkedinConfig, verifyIntegrationIdentity, EXPECT_FIELDS } from './lib/linkedin.mjs';
import { listIntegrations } from './lib/postiz.mjs';

async function main() {
  const cfg = readLinkedinConfig();
  const integrations = await listIntegrations();
  const problems = verifyIntegrationIdentity(cfg.channels, integrations);
  const problemFields = new Set(problems.filter((p) => p.field).map((p) => `${p.channel}.${p.field}`));

  console.log(`linkedin-doctor — ${integrations.length} integration(s) on the Postiz instance, mode: ${cfg.enabled ? 'live' : 'shadow'}\n`);

  for (const [channel, ch] of Object.entries(cfg.channels)) {
    if (!ch.integrationId) {
      console.log(`${channel}: PENDING — no integrationId configured, scheduler skips it.\n`);
      continue;
    }
    const integ = integrations.find((i) => i && i.id === ch.integrationId);
    console.log(`${channel}: integration ${ch.integrationId}`);
    if (!integ) {
      console.log(`  MISSING — Postiz reports no integration with this id.\n`);
      continue;
    }
    console.log(`  disabled: ${integ.disabled ? 'YES — MISMATCH' : 'no — OK'}`);
    const expect = ch.expect || {};
    for (const field of EXPECT_FIELDS) {
      const bad = problemFields.has(`${channel}.${field}`) || typeof expect[field] !== 'string' || !expect[field].trim();
      console.log(
        `  ${field}: expected ${JSON.stringify(expect[field] ?? null)}, Postiz reports ${JSON.stringify(integ[field] ?? null)} — ${bad ? 'MISMATCH' : 'OK'}`,
      );
    }
    console.log('');
  }

  if (problems.length) {
    console.error(`FAILED — ${problems.length} problem(s):`);
    for (const p of problems) console.error(`  • ${p.message}`);
    process.exit(1);
  }
  console.log('All configured channels match their expect blocks.');
}

main().catch((err) => {
  console.error('linkedin-doctor failed:', err instanceof Error ? err.message : err);
  process.exit(1);
});
