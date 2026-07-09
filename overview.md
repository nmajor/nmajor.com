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
  - **Name (settled 2026-07-01): "Actual Intelligence."** The A.I. wordplay flipped
    from *artificial* to *actual* — it winks at "AI" while meaning the real, honest,
    non-hype thing, so the name reinforces the brand instead of fighting it. It is a
    **title under Nick's personal brand** ("Actual Intelligence, by Nicholas Major"),
    **not a separate brand or its own domain.** Rationale (decided after weighing the
    Camp-A personal-name vs Camp-B publication-brand split): the whole strategy bets on
    the *person* as the reach engine, so the newsletter is a named product under
    `nmajor.com`, visually identical to the site, always with Nick's byline. The one
    distinct brandable name in the system belongs to the *consultancy*, not the
    newsletter. Optional cheap hedge: own a vanity domain and 301 it to nmajor.com;
    never make it the canonical home.
  - **Sending domain (settled 2026-07-01): `newsletter.nmajor.com`, from `nick@newsletter.nmajor.com`.**
    A dedicated sub-domain isolates bulk-send reputation from Nick's real Google
    Workspace mail on the `nmajor.com` root (which we never touch). Rejected a longer
    `actual-intelligence.nmajor.com` (clunky in-inbox) and Buttondown's shared domain.
    From-name **"Nicholas Major"** (personal, matches the byline); **reply-to
    `nick@nmajor.com`** so replies land in Nick's monitored inbox — the funnel converts
    on conversations, so a human sender + real reply target is deliberate. **No Buttondown
    managed-DNS / NS delegation** (explicit: never delegate the sub-domain to Buttondown).
    DNS is **manual records** in Cloudflare (Buttondown → Postmark under the hood):
    `pm-bounces.newsletter…` CNAME → `pm.mtasv.net` (Return-Path/SPF alignment),
    `track.newsletter…` CNAME → `webhook-consumer.buttondown.email`, `_dmarc.newsletter…`
    TXT (Buttondown's recommended `p=quarantine; rua=…@inbound.postmarkapp.com` — reports
    feed Buttondown's deliverability monitoring; safe since the sub-domain sends only
    Buttondown mail with aligned DKIM+SPF), plus the domain-specific **DKIM TXT**
    (`…pm._domainkey.newsletter`). **All records live in Cloudflare and resolving.** The
    DKIM key exists only in the Buttondown dashboard (no API), so it was pasted in once
    by hand; everything else was set programmatically. Final step: click **Verify** in
    Buttondown once DNS propagates.
  - **Buttondown branding set via API** to match the site (Direction 4a): tint
    `#e5391f`, the "AI" monogram as icon/avatar, a generated 1200×630 OG card (Archivo
    Black, vermillion accent), socials → nmajor.com + LinkedIn.
  - **Buttondown does not publish publicly.** Public archive disabled (`enabled_features`
    = `api` + `portal` only); the canonical home for every issue is `nmajor.com/writing`.
    No RSS-to-email automation (0 automations) — sending stays script-driven so it can't
    double-send.
- **Stack: rebuild fresh, do not port Vercel.** Reuse the sister projects' proven
  blueprint: **Astro → Cloudflare Workers** (static build served by a custom
  `worker.js`), Buttondown + Cloudflare Turnstile for the newsletter, the
  scheduled-publishing queue, build-time OG image generation, self-hosted Rybbit
  analytics, and a Turnstile-gated contact path. Copy patterns from
  `../appliedartificialintelligence.org/app/`, do not migrate the old Next/Vercel code.

## State

- **2026-07-02 — Analytics live (self-hosted Rybbit).** Registered as **site id 17** in
  the shared Rybbit instance (`rybbit.nmajor.net`, org "Critical AI test" —
  `eHFGe7uW6m7ljg9u3BmzrGFuvKuarNZj`, same org/host/key as the Institute). Cookieless
  (salted user ids, bot-blocking), with pageviews, outbound-link, URL-param, Web Vitals
  and JS-error tracking on. Script loaded site-wide in `app/src/layouts/Base.astro`
  (`data-site-id="17"`). **Newsletter conversion is tracked as a custom event
  `newsletter_subscribe`** fired on a successful subscribe (props: `source` =
  `homepage`/`subscribe_page`, `form` = which form, `status` = `new`/`already`) — wired in
  `index.astro` and `subscribe.astro` on the `/api/subscribe` success branch. `RYBBIT_*`
  creds + `RYBBIT_SITE_ID` in `.env`. (A Rybbit "goal" for the event must be created in the
  dashboard — the org API key can't create goals; the events themselves already flow.)
- **2026-06-30:** Project scaffolded via `scripts/new-project.sh`. Strategy decisions
  above settled. Production was still the old Vercel build at this point (DNS
  `nmajor.com` → Vercel; code now archived, see below). **Superseded 2026-07-02: DNS
  cut over to the Cloudflare Worker — see Build progress.**
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

## Design (settled 2026-07-01)

- **Home page = direction "4a"**, designed by Nick in his Claude Design project
  *AI Profile Redesign* and implemented 1:1 in `app/` at `/`. Look: **clean paper
  hero + black newsletter block, Archivo, vermillion `#e5391f` accent** — a distinct
  personal brand, deliberately *not* a sibling of the Institute's Newsreader/navy.
  Byline uses **"Nicholas Major"**, tagline *"plain-English AI for people who run
  things."* Five earlier prototype directions live at `/v1`–`/v5` (v1 = the "billboard"
  Nick first liked) with a temporary version switcher across them; these are scratch
  and can be deleted once 4a is locked.
- **Photo: yes.** The About block has a portrait slot (currently a "Drop your photo"
  placeholder). Nick to provide a strong high-contrast portrait; also feed it into the
  build-time OG/social cards (the face is the reach engine). Design must not block on it.
- **Content model = newsletter-first, one body of writing.** Three content types:
  **Takes** (short, frequent, billboard/social fuel — now **auto-generated and
  auto-scheduled** from each approved essay by `content-repurposing`; see build progress
  below), **Essays** (the substantive spine — *each essay IS the blog post AND the newsletter
  issue AND the source for LinkedIn atomization*; do not run a separate blog and newsletter),
  and **Pages** (About, Work-with-me, engineering archive). Every page's #1 job is to earn an
  email signup. Open: how commercial the "Work with me" page is at launch (consultancy still
  has no name/site).
- **Home hero auto-tracks the latest live essay** (`featured: true` is an optional manual pin
  that overrides). No per-issue upkeep — the hero advances on its own as issues publish. New
  essays should set `heroTitleLead`/`heroTitleAccent`/`heroLede` so the hero reads punchy when
  it advances to them.

## Build progress

- **2026-07-09 — `/projects` page added.** Lists Nick's current project portfolio in
  order: Every City in the USA, National Sites Guide, Sites That Get Calls,
  TangoLango, Calculator Campus, VeilBoard, and SupplierSignal. Project rows use each
  site's published `og:image` where available; SupplierSignal has no exposed OG image
  yet, so the page uses a local fallback card. Sites That Get Calls includes the Figma
  hero resource and Cal.com project link. Footer now includes a small `/projects` link
  and an Elsewhere column with Linktree, X, Instagram, LinkedIn, and GitHub.
- **2026-07-01.** Home page live (direction 4a). **Publications structure done:**
  `essays` + `takes` content collections, `/writing` (index + per-essay pages),
  `/takes`, and `/rss.xml` (the feed Buttondown will consume). **Engineering archive
  migrated:** all 20 old posts (5 home-lab-Kubernetes + 15 2018 dev tutorials) copied
  from the archived Vercel site into an `engineering` collection, rendered at their
  ORIGINAL `/posts/<date-slug>` URLs so old links/SEO keep working (`/uploads` images
  came too; old `/posts` index 301s to `/engineering`). **Footer expanded** to three
  columns (Writing / Elsewhere / Site); the Institute + Association links live here,
  which is the firewall-safe home for org links (an ICP focus group showed a co-founder
  credential in the bio read as contrived and lowered subscribe-intent, so it was pulled
  from the About block). **Logo** (monogram mark `n-e`, red rounded tile + white N) and
  favicon wired via the shared `Base` layout. **Bio** finalized through the Institute's
  `writing-voice` skill + a 3-provider ICP focus group.
- **2026-07-01 — content + workflow moved over from the Institute.** Three articles that
  were really Nick's own opinionated takes (mis-published on the neutral Institute, whose
  newsletter had 0 subscribers) were **relocated here as real essays**: *Build-versus-buy
  broke, and AI broke it*, *Banning AI is the risk, not the safeguard* (the featured hero
  essay), and *Fix the process first. The AI is the last step.* — rendering at
  `/writing/<slug>/`, byline Nicholas Major, real publish dates. The three earlier design
  stubs were replaced/removed. **Takes expanded to 14**, atomized from those essays and
  spaced one per day (2026-06-18 → 07-01). The **personal-brand content-creation workflow was
  copied from the Institute and adapted** to nmajor's personal, opinionated, commercial-pull
  positioning (dropping the Institute's neutral/firewall framing): the `content-discovery`,
  `content-builder`, `content-repurposing`, `writing-voice`, `hooks`, and `icp-focus-group`
  skills in `.skills/`, their backing `research/` reports, and the **publishing pipeline**
  (`app/scripts/`: newsletter send, scheduled-publish queue, LinkedIn scheduler; `npm test`
  16/16 green). The LinkedIn atomizations for two of the essays came along in `app/linkedin/`.
  Pipeline is in **shadow mode** and needs env wiring before it can send (see below).
- **2026-07-02 — takes automation baked into the pipeline + hero made self-updating.**
  The `takes` collection is now an auto-generated drip that hangs off each approved essay, so
  the site keeps a steady pulse between weekly issues with zero manual work. `content-repurposing`
  now writes 1-3 short takes per issue (atomized from the essay's real takeaways, every word on
  `writing-voice`), **deduplicated against every past take by a canonical `idea` fingerprint** —
  a reframing of an existing claim counts as a repeat, and an essay with nothing fresh generates
  **zero** takes and picks the drip up on a later issue. Takes need **no approval** (the one
  content type an agent writes and ships). Mechanics mirror LinkedIn exactly: a take couples to
  its essay by `source` + `offsetDays` (never a date), starts `draft:true`, and
  `scripts/schedule-takes.mjs` (new workflow step) stamps `pubDate = essay date + offset` and
  flips `draft:false` when the essay goes live; the render now gates on `isLive` (not just
  `!draft`) so each take reveals on its day via the daily build. Backed by `scripts/lib/takes.mjs`
  + `takes-lint.mjs` + unit tests (`npm test` green), `npm run takes:lint`. The 14 existing takes
  were backfilled with `source`/`idea` to seed the dedup ledger. Separately, the **home hero now
  auto-tracks the latest live essay** (unpinned `banning-ai`'s `featured` flag; the flag stays as
  an optional override), and the home page's essay/takes lists now use `isLive` too (which also
  stops a pinned future-dated essay from leaking onto the home page before its date).
- **2026-07-02 — LAUNCHED: DNS cutover off Vercel is done. nmajor.com is live on the
  Cloudflare Worker.** The `nmajor` Worker (static Astro assets) is bound to **`nmajor.com`
  and `www.nmajor.com`** as Cloudflare **Custom Domains**. The two Vercel records (apex
  `A → 76.76.21.21`, `www CNAME → cname.vercel-dns.com`) were deleted and replaced; the zone
  was already on Cloudflare nameservers, so this was a record-level swap, not an NS migration.
  **Mail and newsletter DNS were deliberately left untouched** (5× Google MX; the newsletter
  `pm-bounces`/`track`/DKIM/DMARC records; google-site-verification). Verified live: apex +
  www + `/writing` + `/takes` + `/rss.xml` + a per-essay page + a migrated `/posts/...` K8s URL
  all return 200 over HTTPS, `server: cloudflare`. The custom domains are managed outside
  `wrangler deploy` (the deploy token lacks Workers Routes scope; see `app/wrangler.jsonc`).
  **Follow-ups (non-blocking):** (1) optionally turn `workers_dev` off to drop the duplicate
  `*.workers.dev` host; (2) the old Vercel project can be decommissioned now that no traffic
  points to it; (3) the daily `publish.yml` cron is still paused — un-pausing it (with the
  GitHub secrets) is what turns on automatic weekly publishing + newsletter send + LinkedIn/takes
  scheduling.
- **2026-07-02 — canonical host is now `www.nmajor.com`; naked `nmajor.com` 301s to www,
  always.** The redirect lives in `app/worker.js` (apex → www, path + query preserved), mirroring
  the Institute. Astro `site` flipped to `https://www.nmajor.com`, so every canonical tag, OG
  image URL, and the RSS feed point at www and match the redirect target. The subscribe form only
  ever loads on www after the redirect, so `/api/subscribe` posts stay same-origin (no POST is
  redirected); the Turnstile widget already lists www. Verified: apex + `/subscribe` + `/writing/*`
  + `/og/*` all 301 to the www equivalent, www serves 200, no redirect loop. (The `nmajor.com`
  *domain* is still canonical vs other domains per the Decisions section; this is only the
  www-vs-apex host choice for the website.)
- **2026-07-02 — subscribe landing page + the newsletter form is now wired for real
  (Turnstile-gated).** New conversion-focused landing page at **`/subscribe`**
  (`app/src/pages/subscribe.astro`), the page Nick links from LinkedIn: value-prop hero,
  "what you get" with real essay titles, who-it's-for (including who it isn't), credibility
  (no fake subscriber counts, honest for an early list), sample essays, an expectations FAQ,
  and a repeated CTA. Structure came from a Fable-5 research pass over real conversion-focused
  newsletter pages (Ben Evans, Pragmatic Engineer, The Diff, Lenny, etc.); copy follows
  `writing-voice`. **The form actually subscribes now, with real anti-spam:** a small Worker
  endpoint **`POST /api/subscribe`** (`app/worker.js`, mirroring the Institute's blueprint)
  verifies a **Cloudflare Turnstile** token *server-side* (secret `TURNSTILE_SECRET_KEY`), then
  creates the subscriber in Buttondown's "Actual Intelligence" list (`BUTTONDOWN_API_KEY`, double
  opt-in on). Both secrets are Worker secrets, never in the repo. The Turnstile widget is a new
  managed widget scoped to nmajor.com/www/workers.dev (sitekey `0x4AAAAAADuku3pIVO1zcaoN`, public).
  wrangler.jsonc gained `main: worker.js` + a named `ASSETS` binding with `run_worker_first` so the
  Worker sees `/api/subscribe` and everything else falls through to the static build. The **home
  page subscribe form was also wired** to the same endpoint (it was a fake-success prototype
  before), and nav/footer "Subscribe" now point to `/subscribe`. Verified: site still serves,
  server-side gate rejects missing/invalid emails and bogus Turnstile tokens, and Buttondown accepts
  the worker's exact payload (201, then cleaned up). The one step automation can't cover is a real
  human solving the managed Turnstile challenge, so the final positive click-test is Nick's.
- **2026-07-02 — real OG (social share) images, generated at build, on brand.** Every page
  now has a proper 1200x630 OpenGraph/Twitter card instead of the old fallback photo. Built with
  **satori + @resvg/resvg-js** as prerendered Astro endpoints under `app/src/pages/og/` (the
  Institute's proven pattern; native resvg runs only at build, never in the Worker). Shared
  renderer `app/src/og/card.ts`, direction-4a design: the red "N" mark, an Archivo Black title, a
  vermillion IBM Plex Mono eyebrow + subtitle, and a `Nicholas Major / nmajor.com` footer. Two
  themes: paper (brand + essays) and ink/black (the newsletter card, echoing the home black
  block). Cards: `/og/default.png` (home + site-wide fallback, wired as the Base default),
  `/og/subscribe.png` (ink), and per-essay `/og/writing/<slug>.png` (title + summary, gated on
  `!draft` to match the essay page so no card is ever missing). Base emits `og:image` +
  `og:image:width/height` + `twitter:image`. Fonts live in `app/src/og/fonts/` (ArchivoBlack +
  IBMPlexMono; the variable Archivo was dropped because satori's parser can't read `fvar`).
  Verified live: all cards serve 200 `image/png` and the right card is referenced per page. Note:
  LinkedIn/Twitter cache OG images, so use their post inspectors to force a refresh on already-shared URLs.
- **Still TODO:** `/about` page (where the co-founder credential gets real context);
  optionally take the LinkedIn pipeline out of shadow mode (needs `POSTIZ_*` + a consultancy
  company-page integration for the currently-disabled `business` channel); un-pause the daily
  `publish.yml` cron to turn on automatic weekly publishing. (Done since the earlier plan: DNS
  cutover off Vercel, and the newsletter form is wired to Buttondown via the Turnstile-gated
  Worker endpoint using `BUTTONDOWN_API_KEY` — the send script uses the same key. Now that a
  `worker.js` exists, the optional `www → apex` 301 is a few lines away if wanted.)

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
- **Voice/style (decided 2026-07-01):** nmajor.com runs its **own personal adaptation** of
  the `writing-voice` skill (copied from the Institute and reframed): Nick's first-person,
  more-opinionated voice with tasteful commercial pull, keeping the anti-hype core and the
  blacklist. `voice-nick.md` (built from Nick's blog) is the target voice.
- **Retire the content machinery on the Institute?** The personal-brand workflow (skills +
  LinkedIn pipeline) was **copied** here, not deleted from the Institute. Open whether to now
  strip it from the Institute or keep a neutral-research variant there. Also: the 3 removed
  Institute URLs currently 404 — decide whether to 301 them to their new `nmajor.com/writing/`
  homes (they had 0 subscribers and little/no external reach, so low urgency).

## Notes

- Follows workspace conventions in the root `CLAUDE.md` (`app/` = the site,
  `research/` = raw-first research, `.skills/` shared between Claude Code and Codex).
- **Cross-references:** Institute (`../appliedartificialintelligence.org/`),
  Association (`../executiveaileadership.org/`), playbook
  (`../../playbooks/institute-association-flywheel.md`).
- **Firewall reminder:** the *orgs* never sell; nmajor.com (personal) and the
  consultancy may. Keep that line clean — commercial CTAs belong here and on the
  consultancy, never on the Institute or Association.
