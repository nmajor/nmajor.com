---
slug: grupo-tecnon-construction-erp
company: Grupo Tecnon (construction company, Spain), "Miguel"
sector: Construction
size: ~€20M revenue; 50 direct employees + ~300 contractors
category: saas-replacement
tags: [erp, construction, no-developers, rork, react-native, vendor-reported, ceo]
date_added: 2026-06-19
published: 2026-05-25
verified: source-read
confidence: low
sources:
  - https://rork.com/blog/construction-company-erp-case-study
---

## What they did
A non-technical construction CEO ("Miguel," 35, Spain, background in law and politics)
built his company's ERP himself on Rork, an AI app builder, with zero developers hired.
From a single React Native (Expo) codebase he shipped a web app (office command center)
plus iOS and Android field apps. The system covers client lifecycle/CRM, a field-service
app with voice-to-report (technicians dictate; AI transcribes into structured reports),
auto-generated contracts with e-signature, and a real-time operations dashboard for team
activity, cash flow, payables, and invoicing. It replaced spreadsheets, budgeting
software, email workflows, and several SaaS subscriptions after he found Procore,
Buildertrend, JobTread, and Spanish ERPs too expensive or misaligned with his
subcontractor-heavy workflow.

## The numbers
- "Avoided $50,000–$150,000+" in custom-development cost, plus 15–25% annual maintenance.
  (Vendor-reported, a range for hypothetical alternative dev, not a cancelled bill.)
- Eliminated multiple SaaS license fees (no per-tool figure given).
- Contract turnaround "from days to one click." (Vendor-reported.)
- Stack: Rork to build, ChatGPT for feature planning, Supabase for the database.

## What broke / the caveats
This is a customer success story published by the platform vendor (Rork), so every claim
is platform-supplied and unaudited. The person is first-name-only in the body ("Miguel");
the "Grupo Tecnon" company name surfaced in the fetch but is not independently confirmed.
Most telling for our beat: the story contains no security or maintenance reckoning at all,
which is precisely the second bill the angle warns about. A non-engineer now solely owns a
React Native ERP touching contracts, cash flow, and client data, with no mention of who
secures or maintains it.

## Why it matters for our beat
The clearest "traditional, non-tech company" instance of business-built software replacing
SaaS: construction, mid-market, no developers, a CEO who studied law. It grounds the
"breadth across departments and industries" leg. Use it as the vivid example, with the
vendor provenance and the missing security note stated plainly.

## Post angles
- The concrete non-tech example for the non-engineers piece (construction, not software).
- A paired contrast with Netlify: Netlify named its security wall; this story does not even
  mention one. Same act, only one of them looked for the second bill.
