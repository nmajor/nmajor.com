# Providers: seat mapping, CLI commands, fallbacks, preflight

Reference companion to `SKILL.md`. How to run each juror, host-agnostic, read-only, with
fallbacks. The skill runs inside whatever agent reads it (the **host**); the host's own
provider is judged with a **native subagent**, the other two via **their CLI**.

> **HARD RULE — subscriptions only, never API keys (all three providers).** Every seat runs on
> its provider's **interactive subscription login**, never on an API key or metered API credits.
> We have weekly subscription usage to spend; API keys bill real money and have been burned
> before. This overrides any older per-provider note below.
> - **claude:** the host is authed via the Claude subscription/OAuth. Never rely on `ANTHROPIC_API_KEY`.
> - **codex:** `codex login status` must show "Logged in using ChatGPT". Never run
>   `codex login --with-api-key` and never authenticate with `OPENAI_API_KEY`.
> - **antigravity:** the Google-family seat must use the logged-in Antigravity
>   subscription/OAuth. Never authenticate with `GEMINI_API_KEY` or `GOOGLE_API_KEY`; keep them
>   unset so the CLI uses the login.
>
> If a provider is not logged in via its subscription, treat that seat as **unavailable** and tell
> Nick to log in interactively. Never silently fall back to an API key.

## Host-agnostic seat mapping

There are three providers: **anthropic** (`claude`), **openai** (`codex`), **google**
(`antigravity`, running a Gemini model). Whichever one is hosting the skill is the host.

- **Host provider's seat(s):** spawn a **native subagent** in the host agent.
  - In **Claude Code**: the Task/Agent tool. Pass the per-seat prompt; instruct it to act
    read-only and return only the JSON object.
  - In **Codex**: its subagent equivalent. Same contract.
  - In a **Google-family host** (if one ever hosts): use its subagent equivalent, else fall back
    to invoking the `antigravity` CLI locally as for any other provider.
- **Each other provider's seat(s):** shell out to that provider's CLI (commands below).

This holds regardless of which of the three is the host. Detect the host from the environment
(in Claude Code, `ANTHROPIC_API_KEY` is typically unset because the host is already
authed via subscription/OAuth, and the agent knows it is Claude). When in doubt, the agent
reading this knows its own identity — assign its own provider to the native-subagent seat.

- **`mini`:** 3 seats, one per provider → 1 native + 2 CLI.
- **`full`:** 6 seats, two per provider → 2 native + 4 CLI (distinct personas each).
- **custom N:** round-robin seats across the available providers; the host's share runs native.

## Per-provider commands (read-only, headless)

Write each per-seat prompt to its own temp file, then run wrapped in `timeout` (e.g.
`timeout 240`). A hung CLI is a failure — let it fall through. Run all seats in parallel.

> **Verified in this repo on 2026-09-23:** Antigravity 1.2.9 resolved
> `gemini-3.1-pro-high` and returned a clean authenticated response. Models still rot over time,
> so keep treating "model not found / invalid model" as a fallback trigger.

### anthropic — `claude`  (best: `claude-opus-4-8`, alias `opus`)

```bash
cat prompt.txt | timeout 240 claude -p \
  --model claude-opus-4-8 \
  --output-format json \
  --permission-mode plan \
  --append-system-prompt "You are an evaluation juror. Output only the JSON. Never use tools or edit files."
```

- `--permission-mode plan` = read-only (cannot edit files or run tools). Required.
- Parse: `jq -r '.result'` for the answer text. **Failure** = non-zero exit OR `.is_error == true`
  (read `.subtype` for the reason). Leave `CLAUDE_CODE_RETRY_WATCHDOG` unset so capacity errors
  fail fast instead of retrying forever.
- Fallback chain: `claude-opus-4-8` → `opus` (alias, always resolves to latest Opus) →
  `sonnet`. You can also add `--fallback-model sonnet` for automatic in-CLI fallback.

### openai — `codex`  (best: `gpt-5.5`, fallback `gpt-5.4`)

```bash
cat prompt.txt | timeout 240 codex exec - \
  -m gpt-5.5 \
  --sandbox read-only \
  --skip-git-repo-check \
  --ephemeral 2>/dev/null
```

- `codex exec` defaults to a read-only sandbox; the final answer goes to **stdout**, progress
  to **stderr** (so `2>/dev/null` leaves just the answer). `--skip-git-repo-check` runs outside
  a repo; `--ephemeral` writes no session files.
- The model may wrap JSON in ```json fences or a preamble — strip fences before parsing.
- **Failure** = non-zero exit, OR stderr/output containing `usage_limit_reached` / `429` /
  `insufficient_quota`. Fallback chain: `gpt-5.5` → `gpt-5.4` → `gpt-5` / `gpt-5-codex`.
- **Auth — HARD RULE: always use the logged-in ChatGPT plan, NEVER the API key.** codex must
  be authed via the subscription: `codex login` (interactive OAuth, done once by Nick). **Do NOT
  run `codex login --with-api-key`, and do NOT `codex login` with an API key** — that meters
  against paid API credits and has burned them before. If `codex login status` shows "Logged in
  using ChatGPT", you are good. If it shows an API key, or shows logged-out, **do not silently
  re-login with a key** — stop and tell Nick to run `codex login` on his ChatGPT plan. Detect
  availability via `codex login status` (not the presence of `OPENAI_API_KEY`); `OPENAI_API_KEY`
  in the env is irrelevant and must not be used to authenticate codex.

### google — `antigravity` (best: `gemini-3.1-pro-high`)

```bash
env -u GEMINI_API_KEY -u GOOGLE_API_KEY timeout 240 mise exec agy -- antigravity \
  --model gemini-3.1-pro-high \
  --sandbox \
  --disable-slash-commands \
  --output-format json \
  --print-timeout 230s \
  --print="$(<prompt.txt)"
```

- Run from a temporary directory and keep the prompt entirely in `--print`; Antigravity otherwise
  treats the next flag as the prompt. `--sandbox` is required. `--disable-slash-commands` prevents
  skill expansion during a jury call.
- Parse the envelope with `jq -r '.response'`. Success requires `.status == "SUCCESS"` and a
  non-empty `.response`; strip JSON fences before validating the juror schema.
- **Auth — HARD RULE: use Antigravity's logged-in subscription, NEVER an API key.** Keep
  `GEMINI_API_KEY` and `GOOGLE_API_KEY` unset. If the smoke test fails authentication, treat the
  seat as unavailable and tell Nick to authenticate Antigravity. Never fall back to Gemini CLI.
- **Model gating:** list the authenticated catalog with `mise exec agy -- antigravity models`.
  Prefer the highest available Google Pro model, then the highest Google Flash High model. Do
  not use Antigravity's Claude or GPT-OSS models for this seat because those duplicate another
  provider family.

## Preflight (before building the lineup)

1. **Identify the host** (its provider's seat goes native).
2. **For each non-host provider, check availability:**
   - CLI present: `command -v claude` / `codex`; for Antigravity use
     `mise exec agy -- antigravity --version` because mise owns the executable.
   - Authed: `claude` host is already authed. For **antigravity**, keep `GEMINI_API_KEY` and
     `GOOGLE_API_KEY` unset and run the one-line smoke test through its subscription login.
     For **codex**, `OPENAI_API_KEY` being set is **not** enough — confirm `codex login status`
     shows logged-in (see the codex auth gotcha above). If unsure, the one-line smoke prompt
     (below) is the real test: it confirms reachability, auth, and the model id at once.
3. **Optional smoke test** per provider (cheap, also verifies the model id): use that provider's
   documented prompt form (`stdin` for Claude/Codex; `--print='Reply with the single word OK.'`
   for Antigravity) and confirm a clean parse. A model-not-found error here is your cue to walk
   the fallback chain *before* the real run, so a bad id never costs you a juror mid-panel.
4. **Build the lineup.** In standalone mode, tell the user the roster before dispatching. In
   inherited-context mode, record it in the run manifest and continue without pausing.

## Fallback policy (applied during collect)

For any seat that fails — missing CLI, non-zero exit, rate limit, rejected model id, or
malformed JSON after **one** retry:

1. Walk that provider's **model fallback chain** and retry once.
2. If the provider is still down, **reassign the seat to another available provider** (prefer a
   provider not already over-represented, to keep families balanced).
3. If no provider can take it, **drop the seat**.
4. **Always report** the final lineup and **every substitution/drop** in the output.

If fewer than **2 distinct providers** end up usable, the cross-provider debiasing is lost. In
standalone mode, warn the user and ask whether to proceed with a single-family panel or abort and
fix auth. In inherited-context mode, continue, mark the panel `degraded: true`, list every missing
family and substitution, and do not describe the result as cross-provider.

## Overrides

- **Pin or change models** if an id is stale or you want a cheaper/stronger run: keep a small
  per-provider override at the top of the run (e.g. `ANTHROPIC_MODEL=opus`,
  `OPENAI_MODEL=gpt-5.4`, `GOOGLE_MODEL=gemini-3.1-pro-high`) and substitute into the commands. The
  alias `opus` always resolves to the latest Anthropic Opus and is the safest anthropic pin.
- **Verify a current id:** use `antigravity models` for the Google seat. For Claude and Codex,
  run the smoke test; an "invalid model / not found" error means try the next id.
- **Temperature:** keep scoring near 0 for stability where the host lets you set it; the CLIs
  above don't all expose a temperature flag headlessly, so rely on the deterministic-leaning
  defaults and the anchored rubric rather than sampling tricks.
