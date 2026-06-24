---
name: salvo-design
description: Use this skill to generate well-branded interfaces and assets for Salvo Innovation, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick map
- `readme.md` — the full design guide: brand story, voice, visual foundations, iconography, manifest. **Start here.**
- `styles.css` — the one stylesheet to link; it `@import`s `fonts.css` + everything in `tokens/`.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css` (CSS custom properties).
- `assets/` — logo mark + wordmark + lockup SVGs and brand motifs (burst rays, ripple, waves, chart dots).
- `components/` — React primitives: `brand/` (SalvoLogo, BurstMark), `buttons/`, `content/`, `forms/`, `navigation/`. Each has a `.prompt.md` with usage.
- `ui_kits/website/` — full interactive marketing-site recreation.
- `guidelines/` — foundation specimen cards (colors, type, spacing, effects, brand).

## The one-paragraph brief
Salvo is product consulting + workshop facilitation. The brand is **nautical + high-voltage**: deep **Ink** navy lit by a flare of **Signal** orange (the "burst of fire") and an electric **Volt** chartreuse, on warm **Paper**. Type is bold Swiss grotesk (**Space Grotesk** display / **Hanken Grotesk** body / **Space Mono** eyebrows). The signature move is a **hard offset ink shadow** (sticker energy) with press-into-shadow interactions, and pill CTAs. Voice is punchy, witty, second-person, no emoji. See `readme.md` for the full system.
