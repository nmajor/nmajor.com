# nmajor.com — Overview

> **Canonical, always-current.** This is the single source of truth for what this
> project is, where it stands, and what's next. Keep it clean: update or delete
> stale sections as the project changes — do not let it drift.
>
> History before the 2026-10-09 pivot (the "Actual Intelligence" applied-AI brand,
> the Institute/Association/consultancy ecosystem framing, the LinkedIn newsroom) is
> preserved in `archive/pivot-2026-10/overview-before-pivot.md` and the git tag
> `archive/actual-intelligence-2026-10`.

## Purpose

**nmajor.com is Nick Major's personal site.** The brand is the person:

> Nick Major. Software engineer figuring out distribution. Building with AI. Testing
> marketing and growth tactics. Sharing what works and what doesn't.

Nick wants to be the developer turned distributor: marketing approached the way a
developer would, automating, measuring, and using AI to skip the busywork. The model
he's borrowing from is Edward Sturm (edwardsturm.com), minus the course. Nick does
**not** plan to sell a course.

**Audience:** indie hackers and developers who are more comfortable building than
marketing. **Goal:** an engaged audience (target ~10k weekly newsletter readers) that
can test, try, and pay for the marketing tools Nick builds for himself, and that makes
tool partnerships worthwhile.

## The pieces

- **nmajor.com (this repo):** personal hub: newsletter signup, projects, writing, about.
  Only things that exist get a page (Nick's rule: don't build empty sections for
  future content). Design is direction B ("hub"), mockup at
  `research/site-pivot-2026-10/mockups/b-hub.html`.
- **Deploy to Humans:** Nick's weekly newsletter ("Shipping is easy. Deploying to
  humans is the hard part."). Nick bought **deploytohumans.com**; it will get its own
  landing site, built separately. Until then `nmajor.com/subscribe/` is its signup
  page. Don't link to deploytohumans.com until it serves something (as of
  2026-10-09 it has Cloudflare NS but no site).
- **Projects:** seven products listed on `/projects/` (Sites That Get Calls, Every
  City in the USA, National Sites Guide, Calculator Campus, TangoLango, VeilBoard,
  SupplierSignal). Each doubles as a place to test a distribution idea.

## Site map

| Path | What |
|---|---|
| `/` | Hub: intro + photo, tiles (Deploy to Humans signup, Projects, Writing, About) |
| `/projects/`, `/about/`, `/subscribe/` | Static pages |
| `/archive/` | "Writing" in the nav: index of everything published so far (all pre-pivot) |
| `/archive/ai/<slug>/` | 13 archived Actual Intelligence essays (`essays` collection) |
| `/archive/takes/` | 30 archived one-line AI takes (`takes` collection) |
| `/archive/engineering/<slug>/` | 20 archived engineering posts, 2018 + 2025 (`building` collection) |
| `/rss.xml` | The applied-AI essays (kept for existing feed subscribers) |

**Legacy URLs 301 in one hop** via `legacyRedirect()` in `app/worker.js`:
`/writing/*` → `/archive/ai/*`, `/posts/*` (dated and the 2018 undated form) →
`/archive/engineering/*`, `/takes` → `/archive/takes/`, `/posts`, `/building`,
`/engineering` → `/archive/engineering/`, `/work-with-me` → `/about/`, and the
briefly-live `/blog` → `/archive/`, `/experiments` and `/tools` → `/`. Archived
essays keep their OG images at `/og/writing/<slug>.png`. Covered by
`app/test/worker.test.mjs`. Do not use Astro `redirects` (static output makes
meta-refresh pages, not 301s).

## How to publish new writing

There is no new-writing collection or page yet, on purpose. When the first new post is
ready, add a collection in `app/src/content.config.ts`, its page route, an OG card
endpoint, and point the nav "Writing" link and `/rss.xml` at it. Follow the
`writing-voice` skill. Deploy with `npm --prefix app run deploy`.

`app/src/lib/publish.js` `isLive` (not a draft and `pubDate <= now`) is evaluated at
build time. There is no scheduled build, so a future-dated post appears only after
the next deploy past its date.

Nothing auto-sends email or social posts. The old queue, Buttondown send script,
LinkedIn scheduler, and takes scheduler are archived in
`archive/pivot-2026-10/app/scripts/`.

## Infrastructure (unchanged by the pivot)

- **Stack:** Astro (static) → Cloudflare Workers static assets + `app/worker.js`.
  Deploy with `app/deploy.sh` (creds from the gitignored root `.env`). `www.nmajor.com`
  is canonical; the naked domain 301s to www. Custom domains are managed in Cloudflare,
  not as `routes` (see `app/wrangler.jsonc`).
- **Newsletter signup:** `app/src/components/SubscribeForm.astro`. Turnstile loads
  only when someone submits (explicit render, `execution: execute`,
  `appearance: interaction-only`), never on page view. `POST /api/subscribe` →
  Turnstile verify (action `nmajor_subscribe`, exact hostname) → Buttondown, double
  opt-in. Headless browsers can't pass the real sitekey; test the flow with
  Cloudflare's always-pass key `1x00000000000000000000AA` swapped in client-side. It still posts to
  the existing Buttondown list (the one created as "Actual Intelligence"). **Open:**
  rename that list to Deploy to Humans or create a new one before deploytohumans.com
  launches; both sites should feed the same list. `BUTTONDOWN_API_KEY` is scoped to
  that list only. Sending domain `newsletter.nmajor.com` (manual DNS in Cloudflare, no
  NS delegation to Buttondown).
- **Analytics:** self-hosted Rybbit, site id 17 (`rybbit.nmajor.net`). Custom event
  `newsletter_subscribe` with `source` (homepage, subscribe_page, about) and `form`.
- **Search:** `sc-domain:nmajor.com` in Google Search Console, managed with
  `scripts/gsc.py` (creds in gitignored `.env.gsc`). IndexNow key file
  `app/public/e70c55cfbfc05af0911a2af8cda5cc21.txt`.
- **OG cards:** generated at build by `app/src/og/card.ts` (satori + resvg), Bricolage
  Grotesque + Inter, with Nick's photo.

## State

- **2026-10-09: Pivot shipped.** Old direction snapshotted and tagged
  (`archive/actual-intelligence-2026-10`). Publish workflow, LinkedIn tree and config
  (`enabled: false`), publishing scripts, and the content-pipeline skills
  (content-builder, content-repurposing, content-discovery, social-meme-campaign,
  meme-angle-selector, social-visual-system) moved to `archive/pivot-2026-10/`. Kept
  skills: writing-voice, hooks, icp-focus-group, last30days. New B-style site built
  and deployed with all legacy URLs 301ing into `/archive/`. Traffic evidence and the
  archive plan: `research/site-pivot-2026-10/` (GSC showed 3 clicks in 16 months;
  Rybbit's top old pages were the Farmers essay and the Talos post).
- **Postiz:** two LinkedIn posts approved under the old pipeline were still queued in
  Postiz for 2026-10-10 and 2026-10-12 at pivot time. Nick chose to leave them.
- **2026-10-09 follow-up:** at Nick's direction, removed the empty `/blog/`,
  `/experiments/`, and `/tools/` pages (301'd), made the nav "Writing" link the
  archive index, and moved Turnstile to run only on submit.

## Open questions

- Buttondown list: rename vs. new list (see Infrastructure).
- Whether to add a scheduled build so future-dated posts publish themselves (once new
  writing exists).

## Notes

- Follows workspace conventions in `CLAUDE.md` (`app/` = the site, `research/` =
  raw-first research, `.skills/` shared between Claude Code and Codex).
