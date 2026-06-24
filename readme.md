# Salvo Innovation — Design System

> **Fire a salvo at your hardest product problems.**
> Salvo is a product-consulting and workshop-facilitation studio. We inject a burst of progress into teams and ideas — from scrappy startups to large corporates — and help save the ships worth saving.

This repository is the single source of truth for the Salvo brand: voice, color, type, motifs, logo assets, reusable UI components, and a marketing-website UI kit. Consuming projects link one file — `styles.css` — to inherit every token and webfont.

---

## The name (why everything looks the way it does)

**Salvo** carries three ideas, and the whole system is built on them:

1. **A naval broadside** — a *salvo* is a simultaneous burst of fire. → energy, momentum, a decisive hit. (The **Signal** orange.)
2. **Latin _salvō_, "I save"** — rescue, salvage, the lifeline thrown to a sinking ship. → the nautical undercurrent (Ink navy, sonar, signal flags, ripples).
3. **A burst of fire into a team** — fast, joyful productivity that gets a stuck product moving.

So the brand is **nautical + high-voltage**: deep navy depths lit up by a flare of signal orange and an electric volt-green ping. Confident, playful, a little edgy — but credible enough for a boardroom.

---

## Sources & references

This is a **net-new brand** — no prior assets, codebase, or Figma were provided. The system was authored from scratch against the founder's direction:

- **Personality:** Playful & energetic — bright, witty, human. Leaning edgy/startup (≈25/100 on an edgy↔corporate scale) while staying professional enough for corporates.
- **Type vibe:** big, bold, modern grotesk (Swiss-confident).
- **Color exploration:** hot signal orange/red · acid lime/chartreuse · deep ink navy with a bright accent — all three combined into one coherent palette.
- **Tone reference (content only, not visuals):** [ajsmart.com](https://ajsmart.com/) — punchy, joyful, confident workshop-studio voice ("We make things we want to see in the world").
- **Content reference:** [team-consulting.com — workshop facilitation](https://www.team-consulting.com/us/expertise/front-end-innovation/workshop-facilitation/) — used for subject-matter framing only; its visual design is explicitly *not* a model.

**Business lines to design for:** (1) digital product consulting; (2) workshop design & facilitation — the Salvo sprint delivers a custom, tested prototype — for leadership teams or single product teams, at startups and corporates.

---

## CONTENT FUNDAMENTALS — how Salvo writes

Salvo sounds like a sharp, funny senior facilitator who respects your time. Confident, warm, never corporate-beige.

**Voice principles**
- **Punchy & declarative.** Short sentences. Lead with the verb. "Unstick your roadmap in five days." Not "We offer roadmap-alignment engagements."
- **Second person, active.** Talk to *you* and *your team*. "You'll leave with a decision, not a deck."
- **Confident, not boastful.** Claims are concrete and earned: outcomes, timeframes, formats. Avoid "world-class / best-in-class / synergy / leverage / cutting-edge."
- **Witty, with restraint.** One wink per section, max. The nautical/fire metaphors are seasoning, not the meal — use sparingly and never strain them.
- **Plain English over jargon.** Say "workshop," "decision," "prototype," "stuck." Kill "ideation sessions," "value streams," "north-star alignment frameworks."

**Mechanics**
- **Casing:** Sentence case for body and most headings. Reserve **UPPERCASE** for the mono *eyebrow* labels only (e.g. `WORKSHOPS`, `02 — FACILITATION`). Never all-caps a full sentence.
- **Numbers:** Use numerals — "3 outcomes," "90 minutes," "2-week follow-up." Numbers feel concrete and fast.
- **Punctuation:** Em-dashes for momentum. Periods over exclamation points (let the words carry it; an exclamation is rare and earned).
- **Emoji:** **No.** Personality comes from type, color, and the burst motif — not emoji.
- **"I" vs "you":** Salvo says **"we"** (the studio) and addresses **"you"** (the client). First-person singular only in a named quote/bio.

**Voice in the wild**
- Hero: *"Your product is stuck. We bring the fire."*
- Sub: *"Salvo runs sharp, decisive workshops that turn months of debate into a week of progress."*
- Eyebrow: `WHAT WE DO` · `THE SALVO METHOD` · `02 — FACILITATION`
- CTA: *"Book a salvo"* · *"Get unstuck"* · *"See the formats"*
- Section title: *"We don't do workshops that waste your afternoon."*
- Microcopy / reassurance: *"No 80-slide readouts. You leave with a decision."*

---

## VISUAL FOUNDATIONS

The look is **bold Swiss grotesk on warm paper, punctuated by a signal flare** — with a tactile, sticker-like edge from a hard offset shadow. Nautical signals (sonar pings, ripples, chart dots) provide the texture.

### Color
- **Ink** (`#0a1a2b` core) — deep nautical navy. The premium base: dark sections, body text, the hard shadow, the logo on light.
- **Signal** (`#ff4a1c`) — the burst of fire. **Primary** accent: CTAs, links, the live mark, key highlights. High-voltage, used with intent — a flare, not a flood.
- **Volt** (`#d4ff47`) — electric chartreuse. **Secondary** pop: highlight marks, the on-dark ping core, selection, small accents. Always paired with ink (it's illegible on white).
- **Paper** (`#f6f1e7`) — warm off-white canvas. The default background; gives the palette warmth and keeps it from feeling cold/techy.
- **Warm neutrals** (`sand-*`) — borders, muted text, sunken surfaces. Warm-tinted, never cold gray.
- **Vibe / pairing:** mostly Paper + Ink, with Signal as the one thing your eye jumps to. Volt is the surprise. Two backgrounds max per layout (Paper and Ink). Big fields of Signal are allowed for impact blocks but used sparingly.
- **Imagery color:** photography is treated as a **duotone of Ink + Signal** (warm, high-contrast, slightly gritty) or kept black-and-white with a single signal element. Workshop energy: people, sticky notes, whiteboards — never sterile stock.

### Type
- **Display — Space Grotesk (700):** all headings and big statements. Tight tracking (`-0.015 to -0.03em`), line-height ~1.0–1.1. Set it BIG; let headlines dominate.
- **Body — Hanken Grotesk (400–800):** paragraphs, UI, buttons. Warm, clean, highly legible. Goes to 800 for emphasis.
- **Eyebrow / data — Space Mono (700, uppercase, `+0.16em`):** kickers, labels, indices, metadata, code-y details. The "nautical instrument" voice. Mono pairs with both Space fonts by shared DNA.
- **Scale:** fluid display via `clamp()` for heroes; fixed steps below. Minimum body 15px; never set display under ~28px.

### Spacing & layout
- **4px base grid** (`--space-*`). Generous section rhythm (`--section-y` ≈ 64–128px).
- Containers: 1200px default, 760px for prose. Gutters fluid (20→64px).
- Layouts are **confident and asymmetric** — big type, generous negative space, the occasional element breaking the grid. Not a tidy 12-column template.

### Corners, borders, cards
- **Radius:** medium-soft. Cards `--radius-lg` (18px), buttons are **pills** (`--radius-pill`). Tight elements use 8–12px. Nothing fully sharp, nothing mushy.
- **Borders:** 1–2px. Subtle warm sand on light; a full **2px ink border** on "stickered" cards.
- **Cards** come in two flavors:
  - *Soft card* — white surface, `--shadow-md`, subtle border. Calm, content-dense areas.
  - *Sticker card* (signature) — white/colored surface, **2px ink border**, and the **hard offset shadow** (`4px 4px 0 ink`). Tactile, workshop-y, playful. Used for feature cards, pricing, CTAs.

### Shadows
- **Soft elevation** (`--shadow-sm/md/lg`) — cool ink-tinted, for menus, modals, calm cards.
- **HARD OFFSET (signature)** (`--shadow-hard*`) — a solid, blur-less ink (or signal/volt) shadow offset 4–7px. This is the brand's tactile signature. Sticker cards and pill buttons use it.

### Motion & interaction
- **Snappy and energetic**, never floaty. `--dur-fast/base` (120–200ms), `--ease-out` for most, `--ease-out-back` for playful pops.
- **Hover:** element lifts toward you — `translate(-2px,-2px)` so the hard shadow *grows* (8px). Soft cards lift with a deeper soft shadow. Links: signal underline grows in.
- **Press (signature):** the element **presses into its shadow** — `translate(2px,2px)` and the hard shadow collapses to `0 0`. Physical, satisfying, on-brand. Color may deepen one step.
- **Reveal:** short fade + rise (8–16px), staggered. The sonar **ripple** may animate outward on key moments (hero, success). No infinite decorative loops in content.
- **Focus:** double ring — paper gap + signal ring (`--ring`); volt ring on dark.
- **Reduced motion:** all of the above degrade to instant/opacity-only.

### Texture & backgrounds
- Default is **flat warm Paper** or **flat Ink** — no gradients as a rule (the energy comes from color blocking and type, not gradient mush).
- **Sonar ripple** rings and **radiating burst rays** appear as oversized, low-contrast graphics bleeding off section corners.
- **Chart-dot** pattern (`pattern-dots.svg`) adds a faint nautical-chart texture to ink panels.
- Transparency/blur is used **rarely** — only for sticky nav over content (a paper blur) — not as decoration.

---

## ICONOGRAPHY

- **Icon set: [Lucide](https://lucide.dev) (CDN).** ⚠️ *Substitution flag:* no icons were provided with the brief, so the system standardizes on Lucide — clean, modern, **2px stroke**, rounded line caps. Its geometric, friendly-but-precise line style matches the grotesk type and the line-based burst mark. If you have a preferred set, swap here.
  - Load: `<script src="https://unpkg.com/lucide@latest"></script>` then `lucide.createIcons()` — or use `https://unpkg.com/lucide-static/icons/<name>.svg` as `<img>`.
  - Usage: stroke `currentColor`, size on a 4px grid (16/20/24/32), inherit text color. Signal color for an active/emphasis icon only.
- **The burst mark is not an icon** — it's the logo. Don't use it as a bullet or inline glyph; use Lucide for UI affordances.
- **No emoji** anywhere in the brand. **No unicode glyphs as icons.** Personality is carried by the burst motif, color, and type.
- **Brand motif SVGs** (in `assets/`) — `motif-burst-rays`, `motif-ripple`, `motif-waves`, `pattern-dots` — are decorative graphics, not UI icons. Use them large and low-contrast.
- **Hero graphics** (in `assets/`) — two signature illustrations used as the large corner/side graphic on key pages, NOT as icons:
  - `brand-flags-salvo.svg` — nautical **signal-flag bunting** spelling S·A·L·V·O in the *real* International Code of Signals designs (Sierra, Alfa, Lima, Victor, Oscar), recolored to the brand palette. The naval/“salvo” signature. Use on the **Home/landing hero**.
  - `brand-stickies.svg` — a **workshop sticky-note cluster** built from the brand's sticker / hard-shadow signature. The facilitation signature. Use on **Services / Workshops** heroes.
  - These read best on the warm Paper background; the burst mark stays the logo, these carry the page story.

---

## INDEX — what's in this repo

**Foundations (CSS, linked by consumers via `styles.css`)**
- `styles.css` — entry point (imports only).
- `fonts.css` — webfont loading (Google Fonts; see caveat below).
- `tokens/colors.css` · `typography.css` · `spacing.css` · `effects.css` · `base.css`

**Brand assets** (`assets/`)
- Logo mark: `mark-burst-{signal,ink,paper,volt}.svg` (works as `<img>`).
- Wordmark / lockup: `wordmark-*.svg`, `logo-lockup-*.svg` *(text renders in Space Grotesk only when inlined, not via `<img>` — prefer the `SalvoLogo` component).*
- Motifs: `motif-burst-rays.svg`, `motif-ripple.svg`, `motif-waves.svg`, `pattern-dots.svg`.
- Hero graphics: `brand-flags-salvo.svg` (SALVO signal flags — Home), `brand-stickies.svg` (workshop notes — Services/Workshops).

**Components** (`components/`) — reusable React primitives. See `*.prompt.md` beside each.
- `brand/` — SalvoLogo, BurstMark
- `buttons/` — Button, IconButton
- `content/` — Card, Badge, Tag, Eyebrow, Stat
- `forms/` — Input, Textarea, Select
- `navigation/` — Tabs, Accordion

**UI kit** (`ui_kits/website/`) — marketing-site recreation: Home, Services, Workshops, Pricing, About, Contact (`index.html` is the interactive click-through).

**Foundation specimen cards** — small tagged `.html` files across the repo populate the **Design System** tab (groups: Brand, Colors, Type, Spacing, Effects, Components, Website).

**Other**
- `SKILL.md` — makes this repo usable as a downloadable Agent Skill.

### Caveats
- **Fonts are loaded from Google Fonts**, not self-hosted. They are the *real* intended faces (Space Grotesk / Hanken Grotesk / Space Mono), not substitutes — but to ship offline/self-hosted, add the binaries to `/fonts` and swap the `@import` in `fonts.css` for `@font-face` rules.
- **Lucide icons** are a documented substitution (no set was provided).
- Wordmark **SVG** files don't show the brand font when used as `<img>` (browser font-loading restriction) — use the `SalvoLogo` component for any real lockup.
