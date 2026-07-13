#!/usr/bin/env python3
"""Google Search Console CLI for the nick@nmajor.com (Supertools) account.

Self-contained (Python 3 stdlib only). Reads OAuth creds from a .env-style file
(default: ./.env.gsc). Covers token refresh, site/property listing, sitemap
submit/list, DNS-TXT domain verification, and a generic API passthrough.

ACCOUNT: nick@nmajor.com  ·  CLIENT: Supertools desktop (id starts 49880968399-3atv8)
NEVER sign in as nmajor.foxpage@gmail.com or any other account for this token.
"""
from __future__ import annotations

import argparse
import http.server
import json
import pathlib
import secrets
import sys
import threading
import urllib.error
import urllib.parse
import urllib.request

DEFAULT_ENV = pathlib.Path.cwd() / ".env.gsc"

AUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth"
TOKEN_URL = "https://oauth2.googleapis.com/token"
GSC_BASE = "https://www.googleapis.com/webmasters/v3"
SITEVERIFY_BASE = "https://www.googleapis.com/siteVerification/v1"
TOKENINFO_URL = "https://oauth2.googleapis.com/tokeninfo"

SCOPES = [
    "https://www.googleapis.com/auth/webmasters",
    "https://www.googleapis.com/auth/siteverification",
]
DEFAULT_PORT = 8788
EXPECTED_CLIENT_PREFIX = "49880968399-3atv8"
FORBIDDEN_CLIENT_PREFIX = "723359942989-"  # nmajor.foxpage@gmail.com (do not use)


def load_env(path: pathlib.Path) -> dict[str, str]:
    d: dict[str, str] = {}
    if not path.exists():
        return d
    for line in path.read_text(encoding="utf-8").splitlines():
        s = line.strip()
        if not s or s.startswith("#") or "=" not in s:
            continue
        k, v = s.split("=", 1)
        d[k.strip()] = v.strip().strip('"').strip("'")
    return d


def env_path(args) -> pathlib.Path:
    return pathlib.Path(args.env_file).expanduser().resolve()


def creds(args) -> dict[str, str]:
    env = load_env(env_path(args))
    cid = env.get("GOOGLE_OAUTH_CLIENT_ID", "")
    if not cid:
        sys.exit(f"Missing GOOGLE_OAUTH_CLIENT_ID in {env_path(args)}")
    if cid.startswith(FORBIDDEN_CLIENT_PREFIX):
        sys.exit(
            f"WRONG CLIENT: {cid[:24]!r} is the nmajor.foxpage@gmail.com client. "
            f"This tool is ONLY for nick@nmajor.com's Supertools client "
            f"(id starts {EXPECTED_CLIENT_PREFIX})."
        )
    if not cid.startswith(EXPECTED_CLIENT_PREFIX):
        print(
            f"WARNING: client id does not start with {EXPECTED_CLIENT_PREFIX} — "
            f"expected the Supertools client for nick@nmajor.com.",
            file=sys.stderr,
        )
    return env


def redirect_uri(env: dict[str, str]) -> str:
    port = env.get("GOOGLE_OAUTH_CALLBACK_PORT", str(DEFAULT_PORT))
    return env.get("GOOGLE_OAUTH_REDIRECT_URI", f"http://127.0.0.1:{port}/oauth2/callback")


def post_form(url: str, data: dict[str, str]) -> dict:
    body = urllib.parse.urlencode(data).encode()
    req = urllib.request.Request(url, data=body, method="POST")
    req.add_header("content-type", "application/x-www-form-urlencoded")
    try:
        with urllib.request.urlopen(req) as r:
            return json.loads(r.read().decode())
    except urllib.error.HTTPError as e:
        sys.exit(f"HTTP {e.code}: {e.read().decode()}")


def access_token(env: dict[str, str]) -> str:
    for k in ("GOOGLE_OAUTH_CLIENT_ID", "GOOGLE_OAUTH_CLIENT_SECRET", "GOOGLE_OAUTH_REFRESH_TOKEN"):
        if not env.get(k):
            sys.exit(f"Missing {k}. Run: python gsc.py auth-url  (sign in as nick@nmajor.com)")
    tok = post_form(
        TOKEN_URL,
        {
            "client_id": env["GOOGLE_OAUTH_CLIENT_ID"],
            "client_secret": env["GOOGLE_OAUTH_CLIENT_SECRET"],
            "refresh_token": env["GOOGLE_OAUTH_REFRESH_TOKEN"],
            "grant_type": "refresh_token",
        },
    )
    if "access_token" not in tok:
        sys.exit(f"Refresh failed: {tok}. Re-auth with: python gsc.py auth-url")
    return tok["access_token"]


def api(env: dict[str, str], method: str, url: str, payload: dict | None = None) -> dict | None:
    token = access_token(env)
    data = json.dumps(payload).encode() if payload is not None else None
    req = urllib.request.Request(url, data=data, method=method)
    req.add_header("Authorization", f"Bearer {token}")
    if data is not None:
        req.add_header("content-type", "application/json")
    try:
        with urllib.request.urlopen(req) as r:
            raw = r.read().decode()
            return json.loads(raw) if raw else None
    except urllib.error.HTTPError as e:
        sys.exit(f"API {method} {url} -> HTTP {e.code}: {e.read().decode()}")


def write_refresh_token(path: pathlib.Path, token: str) -> None:
    lines = path.read_text(encoding="utf-8").splitlines() if path.exists() else []
    out, seen = [], False
    for line in lines:
        if line.split("=", 1)[0].strip() == "GOOGLE_OAUTH_REFRESH_TOKEN" and "=" in line:
            out.append(f"GOOGLE_OAUTH_REFRESH_TOKEN={token}")
            seen = True
        else:
            out.append(line)
    if not seen:
        out.append(f"GOOGLE_OAUTH_REFRESH_TOKEN={token}")
    path.write_text("\n".join(out).rstrip() + "\n", encoding="utf-8")
    try:
        path.chmod(0o600)
    except OSError:
        pass
    print(f"wrote GOOGLE_OAUTH_REFRESH_TOKEN -> {path}")


def build_auth_url(env: dict[str, str], state: str) -> str:
    q = urllib.parse.urlencode(
        {
            "client_id": env["GOOGLE_OAUTH_CLIENT_ID"],
            "redirect_uri": redirect_uri(env),
            "response_type": "code",
            "scope": " ".join(SCOPES),
            "access_type": "offline",
            "prompt": "consent",
            "state": state,
        }
    )
    return f"{AUTH_URL}?{q}"


def exchange_code(env: dict[str, str], code: str, path: pathlib.Path) -> None:
    tok = post_form(
        TOKEN_URL,
        {
            "client_id": env["GOOGLE_OAUTH_CLIENT_ID"],
            "client_secret": env["GOOGLE_OAUTH_CLIENT_SECRET"],
            "code": code,
            "grant_type": "authorization_code",
            "redirect_uri": redirect_uri(env),
        },
    )
    rt = tok.get("refresh_token")
    if not rt:
        sys.exit(f"No refresh_token returned (need prompt=consent). Response: {tok}")
    write_refresh_token(path, rt)
    print("Granted scopes:", tok.get("scope", "(none reported)"))


def cmd_auth_url(args):
    env = creds(args)
    if not env.get("GOOGLE_OAUTH_CLIENT_SECRET"):
        sys.exit("Missing GOOGLE_OAUTH_CLIENT_SECRET")
    state = secrets.token_urlsafe(16)
    url = build_auth_url(env, state)
    print("=" * 70)
    print("Sign in as  nick@nmajor.com  (NOT nmajor.foxpage@gmail.com). Approve all.")
    print("=" * 70)
    print(url)
    if args.print_url:
        return
    holder: dict[str, str] = {}

    class H(http.server.BaseHTTPRequestHandler):
        def log_message(self, *a):
            pass

        def do_GET(self):
            qs = urllib.parse.parse_qs(urllib.parse.urlparse(self.path).query)
            if qs.get("state", [""])[0] != state:
                self.send_response(400); self.end_headers(); self.wfile.write(b"state mismatch"); return
            holder["code"] = qs.get("code", [""])[0]
            self.send_response(200); self.end_headers()
            self.wfile.write(b"OK - you can close this tab and return to the terminal.")

    port = int(env.get("GOOGLE_OAUTH_CALLBACK_PORT", str(DEFAULT_PORT)))
    print(f"\nWaiting for the callback on 127.0.0.1:{port} ... (Ctrl-C to cancel and use `exchange` manually)")
    srv = http.server.HTTPServer(("127.0.0.1", port), H)
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    try:
        while "code" not in holder:
            srv.handle_request()
    except KeyboardInterrupt:
        sys.exit("\nCancelled. If you have the callback URL, run: python gsc.py exchange '<url>'")
    exchange_code(env, holder["code"], env_path(args))


def cmd_exchange(args):
    env = creds(args)
    qs = urllib.parse.parse_qs(urllib.parse.urlparse(args.callback_url).query)
    code = qs.get("code", [""])[0]
    if not code:
        sys.exit("No ?code= in the pasted URL.")
    exchange_code(env, code, env_path(args))


def cmd_check_scopes(args):
    env = creds(args)
    tok = access_token(env)
    try:
        with urllib.request.urlopen(f"{TOKENINFO_URL}?access_token={tok}") as r:
            info = json.loads(r.read().decode())
    except urllib.error.HTTPError as e:
        sys.exit(f"tokeninfo failed: {e.read().decode()}")
    scopes = info.get("scope", "")
    print("Scopes:", scopes)
    print("  webmasters      :", "OK" if "webmasters" in scopes else "MISSING")
    print("  siteverification:", "OK" if "siteverification" in scopes else "MISSING (needed for verify-domain)")


def cmd_list_sites(args):
    print(json.dumps(api(creds(args), "GET", f"{GSC_BASE}/sites"), indent=2))


def cmd_submit_sitemap(args):
    env = creds(args)
    site = urllib.parse.quote(args.property, safe="")
    feed = urllib.parse.quote(args.sitemap, safe="")
    api(env, "PUT", f"{GSC_BASE}/sites/{site}/sitemaps/{feed}")
    print(f"Submitted {args.sitemap} to {args.property}")
    print(json.dumps(api(env, "GET", f"{GSC_BASE}/sites/{site}/sitemaps/{feed}"), indent=2))


def cmd_list_sitemaps(args):
    site = urllib.parse.quote(args.property, safe="")
    print(json.dumps(api(creds(args), "GET", f"{GSC_BASE}/sites/{site}/sitemaps"), indent=2))


def cmd_verify_domain(args):
    env = creds(args)
    domain = args.domain
    token = api(
        env, "POST", f"{SITEVERIFY_BASE}/token",
        {"verificationMethod": "DNS_TXT", "site": {"type": "INET_DOMAIN", "identifier": domain}},
    )
    txt = token.get("token", "")
    if not args.insert:
        print("Add this DNS TXT record at the domain apex, then re-run with --insert once it has propagated:")
        print(f"  name : {domain}   (root/apex)")
        print(f"  type : TXT")
        print(f"  value: {txt}")
        return
    print(f"Verifying {domain} (TXT should be live: {txt}) ...")
    api(env, "POST", f"{SITEVERIFY_BASE}/webResource?verificationMethod=DNS_TXT",
        {"site": {"type": "INET_DOMAIN", "identifier": domain}})
    print(f"Verified {domain}. Adding sc-domain property ...")
    api(env, "PUT", f"{GSC_BASE}/sites/{urllib.parse.quote('sc-domain:' + domain, safe='')}")
    print(f"Added sc-domain:{domain}. Leave the TXT record in DNS permanently.")


def cmd_api(args):
    env = creds(args)
    url = args.path if args.path.startswith("http") else f"{GSC_BASE}{args.path}"
    payload = json.loads(args.body) if args.body else None
    print(json.dumps(api(env, args.method, url, payload), indent=2))


def main():
    p = argparse.ArgumentParser()
    p.add_argument("--env-file", default=str(DEFAULT_ENV))
    sub = p.add_subparsers(dest="cmd", required=True)

    a = sub.add_parser("auth-url"); a.add_argument("--print-url", action="store_true"); a.set_defaults(func=cmd_auth_url)
    e = sub.add_parser("exchange"); e.add_argument("callback_url"); e.set_defaults(func=cmd_exchange)
    sub.add_parser("check-scopes").set_defaults(func=cmd_check_scopes)
    sub.add_parser("list-sites").set_defaults(func=cmd_list_sites)
    s = sub.add_parser("submit-sitemap"); s.add_argument("--property", required=True); s.add_argument("--sitemap", required=True); s.set_defaults(func=cmd_submit_sitemap)
    ls = sub.add_parser("list-sitemaps"); ls.add_argument("--property", required=True); ls.set_defaults(func=cmd_list_sitemaps)
    v = sub.add_parser("verify-domain"); v.add_argument("--domain", required=True); v.add_argument("--insert", action="store_true"); v.set_defaults(func=cmd_verify_domain)
    g = sub.add_parser("api"); g.add_argument("method", choices=["GET", "PUT", "POST", "DELETE"]); g.add_argument("path"); g.add_argument("--body"); g.set_defaults(func=cmd_api)

    args = p.parse_args()
    args.func(args)


if __name__ == "__main__":
    main()
