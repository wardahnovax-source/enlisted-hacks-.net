# Enlisted Hacks — Marketing Site

Static Astro 7 site for [enlistedhacks.net](https://enlistedhacks.net). Primary SEO keyword: **enlisted hacks**.

## Stack

- Astro 7 + Tailwind CSS 4 + TypeScript
- 22-locale i18n (English at root, `/es/`, `/fr/`, …)
- Cloudflare Pages deployment with `functions/_middleware.js`

## Quick start

```bash
npm install
npm run sync:brand
node scripts/import-enlisted-images.mjs
npm run dev
```

Build and validate sitemaps:

```bash
npm run build:validate
```

## Deploy (Cloudflare Pages)

1. Create a Cloudflare Pages project named **enlistedhacks**
2. Connect this repo or upload `dist/` after `npm run build`
3. Build command: `npm run build`
4. Output directory: `dist`
5. Add custom domain **enlistedhacks.net** (apex) and redirect **www** → apex
6. Enable SSL **Always Use HTTPS**

## Features

- Aimbot
- ESP / Skeleton
- Health bars
- Vehicle ESP (tanks, aircraft)
- Recoil control
- Streamproof mode

## Checkout

All buy/pricing buttons redirect to:
`https://zadeyo.com/go/WARDAH?to=%2Fproducts%2Fenlisted`

## Environment

- Node.js >= 22.12.0

## License

Private — for enlistedhacks.net deployment only.
