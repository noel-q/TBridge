# TBridge status

Updated 2026-09-20. The code changes below have not been committed, pushed or deployed yet. The custom domain is live.

## Definition of done

TBridge is done when the public app converts times correctly (including day changes and DST edges) at one final URL, https://tbridge.noel-q.dev, that actually loads, with that same URL used in the README, the GitHub repo homepage and the portfolio, CI green, and a short description and privacy note on the page.

## Done so far

Baseline before any change: 114/114 tests, build OK, CI green, deployed bundle hash identical to `main`.

Fixed and verified (tests, plus checked in the browser at desktop and 375px width):

- **Wrong day badge.** The "+1 / −1 day" badge and the "(+1 day)" copy text were wrong for 24% of conversions between popular zones (7.6% across all 196 zones). Example: New York 17:00 → Tokyo showed no "+1"; New York 09:00 → Tokyo showed "−1". Now uses calendar-date difference. 8 new tests fail on the old formula and pass on the fix.
- **Cleared date or time.** Clearing the date rendered a year-0000 conversion with a −00:01:15 offset; a cleared time silently became 00:00. Input is now parsed strictly, shows "Enter a valid date and time…", and "Copy results" is disabled.
- **DST gaps and overlaps.** A non-existent time (02:30 on 8 Mar, New York) or a repeated one (01:30 on 1 Nov) was silently resolved. A notice now says what was shown and why.
- **Stale default date.** The landing state was hardcoded to 30 Jun 2026; it now defaults to today.
- **Clipboard failure.** A denied or unavailable clipboard threw an unhandled rejection with no feedback; it now shows "Copy failed".
- **Source field mismatch.** A shared URL with a source zone outside the curated list showed "London" while converting from that zone.
- **Version mismatch.** Footer said v1.1, package.json said 0.1.0, the only release is v1.0.0. `package.json` (1.0.0) is now the single source; the footer reads it at build time.
- **Dependencies.** `vite` and `@vitejs/plugin-react` moved to devDependencies; vite 8.3.0 and vitest 4.1.11. `npm audit`: 4 vulnerabilities → 0. Clean `npm ci` passes under CI's npm.
- **Privacy.** Geist fonts are now bundled instead of loaded from Google Fonts. Checked in the browser: no cookies, nothing in localStorage until a theme is chosen, no request leaves the origin. Added a short about and privacy line with a GitHub link to the footer, and corrected two README feature claims.

Tests: 114 → 150.

Domain (done 2026-09-20): added `CNAME tbridge → 6f53b98dd670813d.vercel-dns-017.com` (DNS only) in Cloudflare and refreshed Vercel. Verified: public DNS returns the CNAME, `https://tbridge.noel-q.dev` returns 200 with a valid Let's Encrypt certificate (expires 2026-12-19) and serves TBridge. It is serving the currently deployed build, which does not include the fixes above until they are pushed. Machines that already looked the name up before the record existed may keep a cached "not found" for up to 30 minutes (SOA negative TTL 1800s).

## Left

- Review, commit and push these changes. Pushing to `main` auto-deploys on Vercel, so it needs your OK.
- Social preview image: `og:image` is a relative SVG, which LinkedIn, X and Slack do not render. Needs a 1200×630 PNG, an absolute URL, and `og:url` plus canonical once the domain is live.
- No LICENSE file, so the repo is not legally open source (the footer says "Source on GitHub" for that reason).
- "Offline-first" overpromises: there is no service worker or manifest, so the app shell does not work offline after a reload without network. Either soften the wording or add a PWA (which would also provide an install link).
- Destination city search has no arrow-key navigation (Enter picks the first result only).
- Hosting hardening (optional): only an HSTS header is sent; no CSP, nosniff or referrer policy; no robots.txt or sitemap.
- No UI or URL-state tests (Vitest runs in a node environment).
- Naming: the UI and repo say TBridge, the package name and portfolio id say `timebridge`.
- `docs/ENGINEERING.md` points to a `docs/ADR/` folder that does not exist.
- Check `www.noel-q.dev`: in Cloudflare it points to `noelq-portfolio.netlify.app` (Netlify) while the apex `noel-q.dev` points to Vercel. May be intentional, but the two hostnames serve different hosts.

## Blocker

None. The domain blocker was cleared on 2026-09-20.

## Next action

By 2026-09-20: review the uncommitted changes (`git diff`) and approve a commit and push to `main`. The push auto-deploys to https://tbridge.noel-q.dev and tbridge-pied.vercel.app, so the live site then gets the fixes above.

## Human-only tail

- Approve the commit, push and deploy.
- Choose a licence.
- Decide the canonical domain (tbridge.noel-q.dev vs the .vercel.app URL) and the TBridge vs TimeBridge name.
- Decide whether to keep or soften "offline-first", or build the PWA.
- Test on a real phone (iOS Safari date and time pickers) and with a screen reader.
- After the push: check the social preview and the portfolio link.
