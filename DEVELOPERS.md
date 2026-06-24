# Salvo Innovation — Developer guide

This repo is the **Salvo Innovation design system**: brand foundations (color, type, spacing, effects), reusable React UI components, brand assets, page templates, and a full marketing-site recreation. It's framework-light by design — every screen runs in a plain browser with no build step — so it's easy to read, copy, and port into a real app (Vite, Next, Lovable, etc.).

> Designing with the brand? Read **`readme.md`** — the full brand & content guide (voice, color, type, motifs, iconography). This file is the *code* orientation.

## Run it (no build required)
Everything is static HTML + React loaded via CDN + Babel-in-the-browser.
- **Full marketing site (click-through):** open `ui_kits/website/index.html` in a browser. Working nav across Home · Services · Workshops · Pricing · About · Contact.
- **Foundation & component specimens:** the `*.html` files in `guidelines/` and `components/**/` each render a single card; open any directly.
- A tiny static server avoids file:// quirks: `npx serve .` then browse to the files.

## Where things live
```
styles.css            Entry stylesheet — @imports fonts + every token file. Link THIS.
fonts.css             Webfonts (Google Fonts: Space Grotesk / Hanken Grotesk / Space Mono)
tokens/
  colors.css          --ink-*, --signal-*, --volt-*, paper/neutrals + semantic aliases
  typography.css      font families, type scale, weights, tracking
  spacing.css         4px spacing scale + layout widths
  effects.css         radius, shadows (incl. the signature hard offset), motion
  base.css            light element resets + a few brand utility classes
assets/               Logo mark, SALVO signal-flag bunting, sticky-note cluster, motifs (SVG)
components/           Reusable React primitives, grouped:
  brand/  buttons/  content/  forms/  navigation/
  └─ each has <Name>.jsx (the component), <Name>.d.ts (props), <Name>.prompt.md (usage),
     and a *.card.html specimen.
ui_kits/website/      The marketing-site recreation — the real, page-by-page React.
  index.html          App shell (loads React + the screens below) and client-side router
  Chrome.jsx          Nav, Footer, CTA band, shared section helpers
  Icons.jsx           Inline Lucide icon set
  HomeScreen.jsx ServicesScreen.jsx WorkshopsScreen.jsx
  PricingScreen.jsx AboutScreen.jsx ContactScreen.jsx
templates/            Single-page starting points (one folder each)
guidelines/           Foundation specimen cards (color/type/spacing/effects/brand)
SKILL.md              Lets this repo double as a downloadable Agent Skill
handoff/              Lovable hand-off: prompt, tokens.css, page screenshots
```
Files prefixed `_` (`_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json`) are **auto-generated** — don't hand-edit.

## Component model
- Each component is a named export, e.g. `export function Button(props) { … }`, React-only, no npm deps.
- Styling is driven entirely by the CSS custom properties in `tokens/` — no CSS-in-JS, no Tailwind here.
- Components that need stateful CSS (hover/press, focus rings) inject a small scoped `<style>` block once and reference the tokens; props pick class variants.
- Props are documented in the sibling `<Name>.d.ts`; usage + variants in `<Name>.prompt.md`.

## Porting into a real build (Vite / Next / Lovable)
1. **Tokens first.** Drop `tokens/*.css` (or `handoff/tokens.css`) into your global stylesheet and load the three Google Fonts. Everything keys off these variables.
2. **Lift components** from `components/**` — they're plain JSX; remove the CDN assumptions and import React normally. The `.jsx` here uses no bundler features beyond JSX.
3. **Screens** in `ui_kits/website/*.jsx` show how the components compose into real pages — use them as the blueprint. They share helpers via `window` (a browser-no-build shim); in a real build, convert those to normal `import`/`export`.
4. **Assets:** reference the SVGs in `assets/` directly (logo `mark-burst-signal.svg`, hero `brand-flags-salvo.svg` / `brand-stickies.svg`, motifs).
5. If you re-style in Tailwind, map the tokens to your theme config so the palette, type, radii, and the **hard offset shadow** survive (`box-shadow: 4px 4px 0 var(--ink-900)` is the brand's signature — keep it).

## The non-negotiables (brand fidelity)
- Three-color discipline: **Ink** navy + **Signal** orange + **Volt** chartreuse on warm **Paper**. No gradients.
- **Space Grotesk** display, **Hanken Grotesk** body, **Space Mono** uppercase eyebrows.
- Pill buttons & sticker cards with the **hard offset ink shadow**; lift-on-hover, sink-on-press.
- No emoji. Punchy, second-person copy.
