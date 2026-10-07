# Release confirmation: October 6, 2026

Nick approved the newsletter and all five exact post/visual pairs: “Approve it all get the newsletter out and the posts scheduled.” Approval is recorded in the content and visual ledgers.

The essay is live at https://www.nmajor.com/writing/jpmorgan-ai-in-the-mailroom/. Cloudflare deployment succeeded (version 1e947374-d4c9-4f1d-a5a4-0e50aa55b318), and the live page returned the approved title. Buttondown confirms status `sent`, email `em_6zzq5vk95p8etbpvgqnfgs23w5`, at 2026-10-06T20:27:24Z.

All five approved memes were attached by the guarded scripts. Postiz identity checks passed. A separate API read confirms every new post is in `QUEUE` on Nicholas Major’s LinkedIn integration.

| Post | UTC | Lisbon | Postiz ID |
| --- | --- | --- | --- |
| personal-staples | 2026-10-06T21:23:47.790Z | 2026-10-06 22:23 | cmux4r9rx0000g46vu3tq5jwt |
| personal-branch-intake | 2026-10-07T20:00:00.000Z | 2026-10-07 21:00 | cmux4rant0001g46viaalm4ta |
| personal-tokio-marine-manual | 2026-10-08T21:00:00.000Z | 2026-10-08 22:00 | cmux4rauu0002g46vywqhvyrz |
| personal-xpt-small-accounts | 2026-10-09T19:00:00.000Z | 2026-10-09 20:00 | cmux4rb2w0003g46v4bv7ek1y |
| personal-hidden-instructions | 2026-10-12T21:00:00.000Z | 2026-10-12 22:00 | cmux4rb990004g46vq2j7nvyp |

The pipeline also scheduled one deduplicated site take for October 8. Production build, production visual validation, LinkedIn lint and takes lint passed. The initial Python Postiz verification request returned HTTP 403; the Node fetch verification succeeded with HTTP 200. No manual changes were made to the send or scheduling locks.

## Today’s retry

The October 6 attempt at 21:23 UTC failed in Postiz. Nick explicitly requested rescheduling five minutes ahead. The same post ID, approved body and meme were rescheduled through the API to 2026-10-06T21:37:09.680Z (22:37 Lisbon), independently verified as `QUEUE`. No idempotency lock was cleared or changed.

The 21:37 UTC retry also failed, verified via Postiz (`ERROR`, no release ID or URL). The debug endpoint returned 403 Unauthorized, and browser automation was unavailable. Nick was asked for the failed-post error message. The post has not published.

## October 7: connection repaired; entire batch shifted one day

Nick confirmed the LinkedIn/Postiz connection was fixed and requested moving all five posts one day later. Each existing post ID was rescheduled through the API with the exact approved text and meme; no send locks were altered. Independent API verification confirms all five entries in `QUEUE` on Nicholas Major’s enabled `nmajor` integration. The failed companion now runs October 7 at 21:37 UTC (22:37 Lisbon); Branch October 8 at 20:00 UTC (21:00 Lisbon); Tokio Marine October 9 at 21:00 UTC (22:00 Lisbon); XPT October 10 at 19:00 UTC (20:00 Lisbon); Elliott October 13 at 21:00 UTC (22:00 Lisbon). See raw/day-shift-verification.json.

## Hidden instructions moved to Monday

At Nick’s explicit request, only the Hidden instructions post was moved to Monday, October 12 at 21:00 UTC (22:00 Lisbon). The same post ID, approved text and meme are independently verified in `QUEUE`. The other four posts are unchanged. See raw/hidden-instructions-monday-verification.json.
