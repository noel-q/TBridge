# TimeBridge

A lightweight, frontend-only timezone conversion web app. Enter a date, time, and source city, then pick multiple destination cities to see correctly converted times with proper DST handling.

## What it does

- Converts a date and time from any source timezone to multiple destinations
- Handles daylight saving time correctly via Luxon and IANA timezone IDs
- Shows timezone abbreviations (BST, EDT, JST, etc.) appropriate to the date
- Flags results that land on the previous or next day
- 12h / 24h display toggle
- Shareable URLs — full app state lives in the query string
- Copy results to clipboard as plain text
- Responsive, dark-mode UI

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Run tests

```bash
npm test
```

Runs 7 Vitest unit tests covering the core conversion utility across summer/winter DST scenarios.

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Preview the production build locally:

```bash
npm run preview
```

## Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Vercel auto-detects Vite. No configuration file needed. The app is entirely static — no server required.

For subsequent deploys: `vercel --prod`

## URL format

App state is fully serialised in the URL:

```
?date=2026-06-30&time=17:00&src=Europe/London&dst=America/New_York,America/Denver,Asia/Tokyo&format=24h
```

Share any conversion by copying the URL from the browser address bar, or use the **Share link** button in the app.

## Stack

| Package | Version | Purpose |
|---|---|---|
| Vite | 8.x | Build tool and dev server |
| React | 19.x | UI framework |
| TypeScript | 5.x | Type safety (strict mode) |
| Tailwind CSS | 4.x | Styling via `@tailwindcss/vite` |
| Luxon | 3.x | Timezone conversion and DST handling |
| Vitest | 4.x | Unit tests for conversion logic |

## Known limitations

- **Day offset capped at ±1**: `dayOffset` is typed as `-1 | 0 | 1`. Extreme combinations like UTC-12 → UTC+14 could theoretically produce a ±2 day offset, but no timezone pair in the curated dataset triggers this. Not handled in V1.
- **Timezone abbreviation fallback**: Some Node.js builds lack full ICU data and return raw offset strings (e.g. `GMT+9`). The conversion utility includes a static fallback map covering all 25 curated timezones to ensure correct abbreviations in all environments.
- **25 curated cities only**: V1 ships with a hand-picked list. Extending to a full IANA dataset is a straightforward V2 addition.
