# Paintings By Chantal — Domain Context

## Purpose

Brand home for Paintings By Chantal: equal weight on artist identity, artwork, and contact.

## Glossary

| Term | Meaning |
|------|---------|
| **Brand home** | Site primary job — balanced identity + gallery + contact, not commission-only or gallery-only. |
| **Artist** | Chantal Dassanayake, trading as Paintings By Chantal. |
| **Site** | The public web presence at paintingsbychantal.com (v2 rebuild). |
| **Multi-page** | Site structure: separate routes for home, about, oil gallery, sketch gallery, and contact. |
| **Home** | Brand landing route — full-bleed hero, short intro, paths into About / Galleries / Contact; no full galleries. |
| **Studio quiet** | Visual direction — soft paper/linen grounds, charcoal ink, warm muted accents; serif display + clean sans body. |
| **Whisper motion** | Animation ceiling — soft scroll fades/slides, gentle image reveals, subtle nav/hover; 2–3 motifs max. |
| **Gallery page** | Oils or sketches route — masonry grid + lightbox with next/prev. |
| **Contact** | Contact route — social links + email as primary CTA; no inquiry form. |
| **Stack** | Vite + React + TypeScript + React Router + Tailwind; Framer Motion for whisper motion. |
| **Artwork set** | Curated subset of v1 oils, sketches, hero, and profile images — not the full dump. |
| **Build path** | Implement the production Site directly from locked decisions (no UI prototype branch). |

## Routes

| Path | Job |
|------|-----|
| `/` | Brand landing |
| `/about` | Artist identity |
| `/oils` | Oil gallery (masonry + lightbox) |
| `/sketches` | Pencil sketch gallery (masonry + lightbox) |
| `/contact` | Social links + email CTA |

