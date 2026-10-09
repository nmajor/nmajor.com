# Site pivot: archive plan (draft, 2026-10-09)

Status: proposal. Nothing implemented or deployed.

## Traffic evidence (raw/ in this folder)

- GSC, 2025-06-01 to 2026-10-08: 24 URLs, 3 total clicks. Homepage has 351 impressions,
  `/projects` 180. Only `/writing/seven-days-to-close/` got clicks (2).
- Rybbit, same window (visitors): `/` 268, `/writing/farmers-built-a-support-bot/` 160,
  `/writing/rockwell-knowledge-at-the-machine/` 40, `/writing/seven-days-to-close/` 34,
  `/posts/2025-04-13-...talos-on-bare-metal/` 32, `/writing/uber-measured-the-bill/` 32.
  269 of ~290 referred visits came from kagi.com (likely Nick's own browsing).
- Conclusion: little search equity is at risk, but every old URL still gets a single-hop 301.

## Old URLs to archive

| Current | New home | Notes |
|---|---|---|
| `/writing/<slug>/` (13 essays) | `/archive/ai/<slug>/` | Archived banner; keep canonical on new URL |
| `/writing/` | `/archive/ai/` | Unless new posts reuse `/writing/` (open question) |
| `/takes/` (30 takes) | `/archive/takes/` | Single index page |
| `/posts/<slug>/` (20 engineering posts) | `/archive/engineering/<slug>/` | Talos post gets real traffic |
| `/building/`, `/posts`, `/engineering` | `/archive/engineering/` | Point straight at final target, no chains |
| `/work-with-me` | `/about/` | Consultancy CTA retired |
| `/og/writing/<slug>.png` | keep | Old shares keep their images |
| `/projects`, `/subscribe`, `/rss.xml` | keep | Re-skinned for the new brand |

## Redirect mechanics

- Do the 301s in `worker.js` from a generated map, not Astro `redirects`. With static output,
  Astro writes meta-refresh HTML pages, not real HTTP 301s.
- Map is built from the archived collections so it can't drift. Test every old URL returns
  one 301 to a 200.
- After deploy: resubmit sitemap in GSC, ping IndexNow with the old and new URLs.

## Shut down the old pipeline first

1. Postiz still has approved LinkedIn posts queued for 2026-10-10 and 2026-10-12. Nick decides:
   let them run or cancel.
2. Disable `.github/workflows/publish.yml` (daily 14:00 UTC cron). Queue is empty, so nothing is
   due, but it should not run against the new site.
3. `app/linkedin.config.json` `enabled: false`.
4. Tag the repo `archive/actual-intelligence-2026-10`.
5. Move content skills (content-discovery, content-builder, content-repurposing, hooks,
   icp-focus-group, social-meme-campaign, meme-angle-selector, social-visual-system) and the
   LinkedIn tree into `archive/`. Update `overview.md`, `CLAUDE.md`, `writing-voice`.

## Newsletter

- Buttondown "Actual Intelligence" list: rename to Deploy to Humans and send one honest pivot
  email with an easy unsubscribe, or start a fresh list. Nick decides.
