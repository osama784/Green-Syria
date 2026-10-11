# Green Syria

**Live demo:** [green-syria.vercel.app](https://green-syria.vercel.app)

Landing page for the Green Syria project: a platform concept for reporting full waste containers or dirty areas, tracking reports, and connecting citizens with the responsible parties (municipalities or private companies).

The site is a single-page Arabic-language frontend; the Next.js app lives in [`my-app/`](my-app).

## Stack

- [Next.js](https://nextjs.org) 15.1.7 (App Router; dev server runs with Turbopack)
- React 19
- TypeScript 5
- Tailwind CSS 3.4
- Font Awesome icons; Cairo Arabic font loaded via `next/font`

## What's on the page

One route (`src/app/page.tsx`) containing:

- A hero introducing the idea, with "download the app to submit complaints" call-to-action buttons
- A "why it matters" section with three focus points (reducing waste, protecting the environment, saving resources) plus an environmental quote
- A programs grid: vision, goal, collaboration with government organizations, analytics
- A four-step "How the app works" explainer: report an illegal dump → alert interested parties → organize a cleaning event → the site is cleaned
- A photo grid and a footer

The calls to action are placeholders — no backend, API, form handling, or links are wired up.

## Run it locally

```bash
cd my-app
npm install
npm run dev
```

Then open <http://localhost:3000>. Other scripts (`my-app/package.json`): `npm run build`, `npm run start`, `npm run lint`.

## Context

Built during the one-week Startup Syria Hackathon (Feb 2025) by a cross-disciplinary team of 8.
