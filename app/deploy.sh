#!/usr/bin/env bash
# Build and ship the prototype directly to Cloudflare. There is no usable
# localhost in this workspace — the live Worker is the source of truth.
set -euo pipefail
cd "$(dirname "$0")"

# Cloudflare creds (CLOUDFLARE_API_TOKEN, CLOUDFLARE_ACCOUNT_ID) live in the
# gitignored project-root .env. Wrangler reads them from the environment.
if [ -f ../.env ]; then
  set -a
  # shellcheck disable=SC1091
  . ../.env
  set +a
fi

if [ -z "${CLOUDFLARE_API_TOKEN:-}" ]; then
  echo "ERROR: CLOUDFLARE_API_TOKEN not set. Add it (and CLOUDFLARE_ACCOUNT_ID) to ../.env" >&2
  exit 1
fi

npm run build
npx wrangler deploy
