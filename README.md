# LeLo — SaaS Landing Page

A modern, animated SaaS landing page for **LeLo** — a fictional SaaS product concept. Built with Next.js 14, React 18, TypeScript, and Tailwind CSS v4. Originally generated with [v0.app](https://v0.app).

## What it does

A single-page marketing site with:

- **Sticky header** with navigation and theme-aware branding
- **Hero section** with animated headline and CTAs
- **Animated features section** (GSAP scroll-triggered animations)
- **Pricing section** with plan tiers
- **FAQ section** (accordion)
- **Animated CTA section** and full **footer**
- Custom animated UI primitives: floating paths, infinite sliders, particle text effect, progressive blur, animated gradients (Three.js / framer-motion)

All client-side rendered sections; no backend, no API routes.

## Tech stack

- Next.js 14.2.16 + React 18 + TypeScript
- Tailwind CSS v4 (@tailwindcss/postcss)
- Radix UI primitives, shadcn-style `ui/` components
- GSAP (@gsap/react), framer-motion, Three.js (@react-three/fiber)
- next-themes (dark/light), Vercel Analytics

## Quick start

```sh
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve production build
```

Requires Node.js 18+.

## Project structure

```
├── app/
│   ├── layout.tsx      # root layout + metadata
│   ├── page.tsx        # landing page composition
│   └── globals.css     # global styles
├── components/
│   ├── hero-section.tsx, animated-features-section.tsx,
│   ├── pricing-section.tsx, faq-section.tsx,
│   ├── animated-cta-section.tsx, header.tsx, footer.tsx,
│   └── ui/             # animated UI primitives
├── lib/                # utilities
├── public/             # static assets
└── next.config.mjs
```

## Environment variables

None required. `@vercel/analytics` works out of the box on Vercel; no keys to configure for a local or static deploy.

## Deployment

The site has no API routes or server actions, so it can be deployed as a **static export**:

- `output: 'export'` is set in `next.config.mjs`, and `basePath: '/le-lo-saa-s-landing'` targets the GitHub Pages subpath. **Remove `basePath` (and `output: 'export'`) for root-domain / Vercel / Netlify deploys.**

Build output lands in `out/` — host it on any static host.

## Notes

- ESLint and TypeScript errors are ignored during builds (`ignoreDuringBuilds` / `ignoreBuildErrors` in `next.config.mjs`) — tighten these before production use.
- Images are set to `unoptimized` in the config.

---

Built by Girish Lade · [ladestack.in](https://ladestack.in)
