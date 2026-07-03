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
> - **gemini:** must use the logged-in Google account (subscription/OAuth). Never authenticate with
>   `GEMINI_API_KEY` or `GOOGLE_API_KEY`; keep them unset so the CLI uses the login.
>
> If a provider is not logged in via its subscription, treat that seat as **unavailable** and tell
> Nick to log in interactively. Never silently fall back to an API key.

## Host-agnostic seat mapping

There are three providers: **anthropic** (`claude`), **openai** (`codex`), **google**
(`gemini`). Whichever one is hosting the skill is the host.

- **Host provider's seat(s):** spawn a **native subagent** in the host agent.
  - In **Claude Code**: the Task/Agent tool. Pass the per-seat prompt; instruct it to act
    read-only and return only the JSON object.
  - In **Codex**: its subagent equivalent. Same contract.
  - In **Gemini** (if it ever hosts): its subagent equivalent, else fall back to invoking the
    `gemini` CLI locally as for any other provider.
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

> **Verified in this repo on 2026-06-29:** all three commands below run end-to-end here —
> `claude-opus-4-8` (host), `gpt-5.5` (codex), and `gemini-3.1-pro-preview` (gemini) all
> resolved and returned clean output. Models still rot over time, so keep treating "model not
> found / invalid model" as a fallback trigger (walk the chain); see "Overrides" to verify/pin.

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

### google — `gemini`  (best: `gemini-3.1-pro-preview`, fallbacks `gemini-3-pro-preview` → `gemini-2.5-pro`)

```bash
cat prompt.txt | timeout 240 gemini \
  -m gemini-3.1-pro-preview \
  -o json \
  --approval-mode plan
```

- `--approval-mode plan` = read-only. Parse the envelope: `jq -r '.response'` for the answer;
  the `.response` content may itself be JSON wrapped in ```json fences — strip fences, then
  parse.
- **Failure** = non-zero exit (1 = API/rate failure, 42 = bad input, 53 = turn limit), OR
  `.error != null` / `.response == null`.
- **Auth — HARD RULE: use the logged-in Google account (subscription), NEVER an API key.** Keep
  `GEMINI_API_KEY` and `GOOGLE_API_KEY` **unset** so the CLI uses the interactive login; if gemini
  is not logged in, treat it as unavailable and tell Nick to run `gemini` and sign in. Never
  authenticate gemini with a key.
- **Access / model gating:** Gemini 3 / 3.1 Pro access depends on the logged-in account; if the
  preview id is rejected, fall back. Chain: `gemini-3.1-pro-preview` → `gemini-3-pro-preview` →
  `gemini-2.5-pro` (broadly available).

## Preflight (before building the lineup)

1. **Identify the host** (its provider's seat goes native).
2. **For each non-host provider, check availability:**
   - CLI present: `command -v claude` / `codex` / `gemini`.
   - Authed: `claude` host is already authed. For **gemini**, confirm it is logged in via the Google subscription (`GEMINI_API_KEY` and `GOOGLE_API_KEY` must be unset).
     For **codex**, `OPENAI_API_KEY` being set is **not** enough — confirm `codex login status`
     shows logged-in (see the codex auth gotcha above). If unsure, the one-line smoke prompt
     (below) is the real test: it confirms reachability, auth, and the model id at once.
3. **Optional smoke test** per provider (cheap, also verifies the model id):
   `printf 'Reply with the single word OK.' | <the provider command>` and confirm a clean
   parse. A model-not-found error here is your cue to walk the fallback chain *before* the real
   run, so a bad id never costs you a juror mid-panel.
4. **Build the lineup** and tell the user the roster (provider + resolved model + ICP per seat)
   *before* dispatching.

## Fallback policy (applied during collect)

For any seat that fails — missing CLI, non-zero exit, rate limit, rejected model id, or
malformed JSON after **one** retry:

1. Walk that provider's **model fallback chain** and retry once.
2. If the provider is still down, **reassign the seat to another available provider** (prefer a
   provider not already over-represented, to keep families balanced).
3. If no provider can take it, **drop the seat**.
4. **Always report** the final lineup and **every substitution/drop** in the output.

If fewer than **2 distinct providers** end up usable, the cross-provider debiasing is lost —
warn the user explicitly and ask whether to proceed with a single-family panel (which is
biased toward its own family and runs leniency-high) or to abort and fix auth.

## Overrides

- **Pin or change models** if an id is stale or you want a cheaper/stronger run: keep a small
  per-provider override at the top of the run (e.g. `ANTHROPIC_MODEL=opus`,
  `OPENAI_MODEL=gpt-5.4`, `GEMINI_MODEL=gemini-2.5-pro`) and substitute into the commands. The
  alias `opus` always resolves to the latest Anthropic Opus and is the safest anthropic pin.
- **Verify a current id** without a list subcommand (none of the three expose a clean one):
  run the smoke test above; an "invalid model / not found" error means try the next id. The
  `/model` slash command inside an interactive session of any of the three also lists what the
  current auth can actually reach.
- **Temperature:** keep scoring near 0 for stability where the host lets you set it; the CLIs
  above don't all expose a temperature flag headlessly, so rely on the deterministic-leaning
  defaults and the anchored rubric rather than sampling tricks.
