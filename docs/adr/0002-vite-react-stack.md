# ADR 0002: Vite + React + TypeScript stack

## Status

Accepted

## Context

v1 uses Create React App + Tailwind. Need a modern multi-page SPA without Next.js complexity.

## Decision

Use **Vite + React + TypeScript + React Router + Tailwind**, with **Framer Motion** for whisper motion.

## Consequences

Static build suitable for GitHub Pages / similar hosts. Client-side routing for Home, About, Oils, Sketches, Contact. No SSR/image CDN from Next — optimize images manually or via build plugins if needed.
