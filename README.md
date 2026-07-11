# Paintings By Chantal — Portfolio v2

Brand home for [Paintings By Chantal](https://paintingsbychantal.com): identity, galleries, and contact.

## Stack

Vite · React · TypeScript · React Router · Tailwind CSS · Framer Motion

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy (GitHub Pages)

Publishes the production build to the `gh-pages` branch. Custom domain: `paintingsbychantal.com`.

```bash
npm run deploy
```

Same pattern as the previous site: build → push `dist/` to `gh-pages` (includes `CNAME` and a `404.html` SPA fallback for client routes).

## Routes

| Path | Page |
|------|------|
| `/` | Brand landing |
| `/about` | Artist |
| `/oils` | Oil gallery |
| `/sketches` | Pencil gallery |
| `/contact` | Email + social |

See `CONTEXT.md` and `docs/adr/` for design decisions.
