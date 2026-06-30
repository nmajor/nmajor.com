# nmajor.com — Overview

> **Canonical, always-current.** This is the single source of truth for what this
> project is, where it stands, and what's next. Keep it clean: update or delete
> stale sections as the project changes — do not let it drift.

## Purpose

**nmajor.com is Nick Major's personal brand site** — the human, opinionated,
personality-driven channel in the founders' ecosystem. It is where Nick's personal
point of view on AI lives (AI hot takes, a blog, a personal newsletter), aimed at
building an audience of the consultancy's ideal ICP and converting that attention into
trust that *pulls* people toward the consultancy.

This is a rebuild. The current nmajor.com is a senior-developer portfolio/blog on
**Vercel** ("NMajor Studios": an About, Projects, a Shakespeare-bug homepage poem, and
one article series — *Home Lab Kubernetes Cluster*, 5 posts, April 2025). We are
rebuilding it from the ground up on **Cloudflare Workers** with an AI-decision-maker
brand, reusing the proven stack already running for the sister projects.

### Audience (ICP)

The consultancy's ideal customer: **AI decision-makers at medium-to-large
businesses** — owners, CEOs, CIOs, COOs navigating how to actually implement AI in
their org. Same lane as the Institute and Association, approached through one named
person's opinionated voice.

## Role in the ecosystem (read this first)

nmajor.com is part of a deliberate four-part structure run by brothers **Nick Major**
(nick@nmajor.com) and **Isaac Major**. The full write-up is the workspace playbook:
`../../playbooks/institute-association-flywheel.md`. The other three:

- **Institute of Applied AI** (`appliedartificialintelligence.org`) — the proof /
  content engine. Neutral research. **Strictly non-commercial, no CTAs.**
- **Association for Executive AI Leadership** (`executiveaileadership.org`) — the
  relationship / demand engine. Invite-only roundtables. **Strictly non-commercial.**
- **The consultancy** (a distinct commercial entity, name TBD) — the *actual
  business*. The only place selling happens.

**Where nmajor.com sits: outside the firewall, on purpose.** The Institute and
Association never sell and carry no commercial CTAs. Their governing docs explicitly
re-home the **personal point of view and the commercial nurture to "Nick's personal
channel and the consultancy."** That personal channel is this site. So nmajor.com is
the one node in the system where Nick's opinions *and* commercial pull toward the
consultancy are both allowed and intended.

| Channel | Voice | Sells? |
|---|---|---|
| Institute | Neutral research | No (firewall) |
| Association | Neutral convening | No (firewall) |
| **nmajor.com** | **Nick, personal + opinionated** | Pulls to consultancy |
| Isaac's channel (later) | Isaac, personal | Pulls to consultancy |
| Consultancy site | "We" (Nick + Isaac) | Yes |

**The lead path is pull, not push:** someone reads Nick's takes, comes to trust him,
looks him up, finds the consultancy, reaches out. nmajor.com builds the reputation and
audience; the consultancy is where the commercial conversation happens.

## Decisions (settled 2026-06-30)

- **Personal brand, not a neutral newsletter brand.** Lean fully into Nick's personal
  brand. Rejected: spinning up a separate neutrally-named co-branded newsletter.
  Rationale: the audience strategy already bet on Nick's *personal* profile as the
  reach engine (personal profiles out-reach company pages 5-8x; the
  `content-repurposing` pipeline atomizes each issue into personal-profile posts), the
  neutral-publication lane is already filled by the Institute, decision-makers buy from
  people not publications, and named single-human bylines are what the credibility
  research rewards. A neutral media brand would duplicate the Institute and throw away
  the personal-reach advantage.
- **Isaac fits via his own channel + the joint consultancy, not by co-branding this
  site.** Co-branding one personal channel between two people dilutes the single-voice
  advantage. The brand Nick and Isaac *share* is the consultancy. Isaac builds his own
  personal presence later (he leads GTM/enterprise — a complementary buyer-side voice).
  Guest posts / cross-posts on nmajor.com are fine; the primary voice and byline stay
  Nick's.
- **Domain: nmajor.com stays canonical.** Rejected `nickmajor.com` (already owned by a
  *different* Nick Major; it 301-redirects to that person's Linktree, so it is not
  available). Even if it were free, `nmajor` is the established root of the whole
  system: `nick@nmajor.com` is the contact/sender/forwarding address across the
  Institute and Association, and the self-hosted infra lives on `nmajor.net`
  (`chatwoot.`, `rybbit.`, `hc.`). Don't fragment the root. The site does the
  personal-brand work via wordmark/face/byline; the short domain is fine. (Optional
  cheap hedge if desired: grab `nickmajor.ai`/`.co` and 301 it here; do not make it
  canonical.)
- **Old K8s/DevOps articles: keep their URLs, tuck in an archive.** Migrate the 5
  *Home Lab Kubernetes Cluster* posts so their existing URLs keep working (preserves
  any SEO/backlinks), but do not feature them. House them under an `/engineering` or
  `/archive` section so the brand front is all-AI while the engineer-to-AI-advisor
  credibility (called a real advantage in the Institute's `audience-strategy` research)
  stays visible. Anything not migrated should 301 to home rather than 404.
- **Newsletter: nmajor.com gets its own, separate from the Institute's.** This is
  Nick's *personal* newsletter (hot takes + commercial nurture), which the firewall
  docs explicitly route to the personal channel, distinct from the Institute's neutral
  research cadence. Likely a separate Buttondown newsletter on the existing account.
  **Note: the Buttondown account has several newsletters — never reuse the
  Institute-scoped API key; create/scope a key for this one.**
- **Stack: rebuild fresh, do not port Vercel.** Reuse the sister projects' proven
  blueprint: **Astro → Cloudflare Workers** (static build served by a custom
  `worker.js`), Buttondown + Cloudflare Turnstile for the newsletter, the
  scheduled-publishing queue, build-time OG image generation, self-hosted Rybbit
  analytics, and a Turnstile-gated contact path. Copy patterns from
  `../appliedartificialintelligence.org/app/`, do not migrate the old Next/Vercel code.

## State

- **2026-06-30:** Project scaffolded via `scripts/new-project.sh`. Strategy decisions
  above settled. Current production site is still the old Vercel build (DNS
  `nmajor.com` → Vercel; code now archived, see below).
- **2026-06-30 — repos consolidated into one canonical repo.** This project now
  pushes to **`github.com/nmajor/nmajor.com`** (`origin`, default branch `main` = this
  rebuild). The old sites are preserved losslessly as archive branches and the
  redundant repos were archived read-only on GitHub:
  - `archive/jekyll-2020` — the old 2020 Jekyll/Forestry nmajor.com.
  - `archive/next-vercel` — the **live** Next.js/Vercel site (was `nmajor/nmajor-site`,
    now archived read-only). Holds the 5 Home-Lab-K8s posts to migrate. One 2018
    example Facebook token was scrubbed from this branch's history to pass GitHub push
    protection (literal replaced with `EAA_EXAMPLE_TOKEN_REDACTED`; full commit history
    otherwise intact, and the untouched original remains in the archived
    `nmajor-site` repo).
    - `archive/portfolio-2017` — the 2017 static portfolio (was `nmajor/nmajor-portfolio`,
    now archived read-only).
  - Pre-existing `legacy` (2019 Jekyll) and `gh-pages` (built output) branches left in
    place, untouched.
- **Deploy path verified.** Cloudflare creds (shared account `Nick@nmajor.com`) reused
  from the sister project into this project's gitignored `.env`; `wrangler whoami`
  authenticates. No localhost in this workspace — we iterate against a live Worker
  (a `nmajor` Worker on its `workers.dev` preview URL until cutover).

## Plans

Build order (reusing the Institute blueprint where it fits):

1. **Brand + design direction.** A personal-brand identity that reads as a sibling to
   the Institute/Association system but is distinctly Nick's (more personal, more
   opinionated, a real face/voice). Decide palette/type relative to the shared system
   (Newsreader + IBM Plex; navy ink). Use the `frontend-design` skill.
2. **Scaffold the Astro app in `app/`.** Mirror the Institute's structure: `worker.js`,
   `wrangler.jsonc`, posts content collection, RSS, Base layout, OG generation.
3. **Content model.** Blog/hot-takes posts (the spine) + pages (About, the
   engineering archive, a "what I do" / pointer-to-consultancy page). Migrate the 5 K8s
   posts into the archive at their existing URLs.
4. **Personal newsletter.** Its own Buttondown newsletter + Turnstile-gated subscribe
   → Worker `/api/subscribe`, double opt-in, welcome email in Nick's voice. Separate
   key from the Institute.
5. **Commercial pull (not push).** Tasteful, honest pointers toward the consultancy
   (this site is allowed CTAs, unlike the orgs). Calibrate once the consultancy
   entity/name/site exists.
6. **Publishing + distribution.** Optionally reuse the scheduled-publishing queue and
   the LinkedIn `content-repurposing` pipeline so Nick's posts feed his personal
   LinkedIn (the reach engine).
7. **Cutover.** Point `nmajor.com` DNS from Vercel to the Cloudflare Worker once parity
   is reached; add 301s for any dropped old paths.

## Open questions

- **Consultancy name/site:** still TBD across the ecosystem. The commercial CTAs and
  the "what I do" page on nmajor.com should be calibrated to whether the consultancy
  has its own domain yet, or whether nmajor.com temporarily hosts a light "work with
  me" page until it does. (We chose "personal brand pulls to a separate consultancy" as
  the model; revisit the interim if the consultancy site isn't ready at cutover.)
- **Voice/style:** does the Institute's `writing-voice` skill apply verbatim here, or a
  looser personal variant? The personal channel is meant to be *more* opinionated than
  the neutral orgs, so likely a personal adaptation (keep the anti-hype core, allow a
  stronger first-person POV). Decide before drafting.

## Notes

- Follows workspace conventions in the root `CLAUDE.md` (`app/` = the site,
  `research/` = raw-first research, `.skills/` shared between Claude Code and Codex).
- **Cross-references:** Institute (`../appliedartificialintelligence.org/`),
  Association (`../executiveaileadership.org/`), playbook
  (`../../playbooks/institute-association-flywheel.md`).
- **Firewall reminder:** the *orgs* never sell; nmajor.com (personal) and the
  consultancy may. Keep that line clean — commercial CTAs belong here and on the
  consultancy, never on the Institute or Association.
