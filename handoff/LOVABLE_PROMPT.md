# Salvo Innovation — Lovable build brief

Paste the section below into Lovable as your opening prompt. Then upload the 6 screenshots in `handoff/screenshots/` as visual references, and paste `handoff/tokens.css` when Lovable asks for styling (or drop it into `src/index.css`).

---

## PROMPT (copy from here ↓)

Build a marketing website for **Salvo Innovation**, a product-consulting and workshop-facilitation studio. Use React + Tailwind. Match the brand below exactly — I've attached reference screenshots of every page; replicate that layout, spacing, and style.

**Brand personality:** playful, bold, confident, a little edgy but credible for corporate buyers. Nautical + high-voltage. The name "Salvo" = a naval broadside (a burst of fire) and Latin *salvō*, "I save."

**Colors (use these exact hex values):**
- Ink (navy, primary dark): #0a1a2b
- Signal (orange, primary accent / CTAs): #ff4a1c
- Volt (chartreuse, secondary pop): #d4ff47
- Paper (warm canvas background): #f6f1e7
- White: #ffffff; warm neutral border: #ded7c7; muted text: #6f6a5b

**Type (Google Fonts):**
- Display / headings: **Space Grotesk** 700, tight letter-spacing (-0.03em), big.
- Body / UI: **Hanken Grotesk** 400–800.
- Eyebrow labels / metadata: **Space Mono** 700, UPPERCASE, letter-spacing 0.16em (e.g. "WHAT WE DO", "02 — FACILITATION").

**Signature UI patterns (important):**
- **Buttons:** pill-shaped, 2px ink border, with a *hard offset shadow* (solid, no blur: `4px 4px 0 #0a1a2b`). On hover the element lifts (translate -2px,-2px, shadow grows to 6px); on press it sinks into the shadow (translate 2px,2px, shadow collapses to 0). Variants: primary (signal fill, white text), secondary (white fill), ink (navy fill), volt (chartreuse fill, ink text), ghost.
- **Cards:** "sticker" style — white/colored surface, 2px ink border, same hard offset shadow. Hover lifts. Also a softer variant with a normal drop shadow.
- **Eyebrow label:** mono uppercase kicker with a short leading rule line, in signal orange, above section headings.
- Corners: medium radius (cards ~18px, buttons fully pill). Backgrounds are flat (Paper or Ink) — no gradients.
- Motion: snappy (120–200ms, ease-out). No floaty/slow transitions.

**Brand graphics (I'll supply SVGs — see assets/ in the handoff):**
- Logo = a "burst" mark (sonar-ping arcs radiating from a corner) + "SALVO" wordmark in Space Grotesk.
- Home hero graphic = nautical signal-flag bunting spelling S-A-L-V-O, strung across the top.
- Services/Workshops hero graphic = a cluster of workshop sticky-notes (uses the sticker/hard-shadow look).

**Pages & key sections (see screenshots):**
1. **Home** — sticky nav (logo left, links, "Book a salvo" button right); hero ("Your product is stuck. We bring the fire."); trust strip; "Two ways we light a fire" (two cards: Digital product consulting, Workshop design & facilitation); "The Salvo Method" (4 steps: Frame, Diverge, Decide, Prototype); dark stats band; testimonial; orange CTA band; dark footer.
2. **Services** — hero; two alternating service detail sections (Consulting, Facilitation — note: the Salvo sprint delivers a custom, tested prototype); FAQ accordion; CTA band.
3. **Workshops** — dark hero; filterable grid of workshop technique cards (Crazy 8s, Dot voting, How Might We, etc.); "bring us in" block.
4. **Pricing** — three sticker-card tiers: **Spark $5k / session**, **Salvo $15k / sprint** (most popular, dark card), **Fleet Custom**; pricing FAQ.
5. **About** — the name story (salvo = burst + *salvō* "I save"); four values; mini stats.
6. **Contact** — pitch + contact details on the left; a form on the right (name, work email, team size, interested in, "what's stuck?" textarea, "Send it" button).

**Voice:** punchy, second person, witty but restrained, no emoji. Examples: "You leave with a decision, not a deck." / "No 80-slide readouts." / CTA: "Book a salvo."

Build all six pages with working navigation. Make it responsive. Prioritize matching the visual style (hard-shadow stickers, bold grotesk type, the three-color palette) over adding new content.

## (end of prompt ↑)

---

## How to share this with Lovable — step by step

Lovable builds from **prompts + reference images + (optionally) a GitHub repo**. It does **not** import a project folder/zip directly. So:

1. **Paste the PROMPT above** as your first message in Lovable.
2. **Upload the 6 screenshots** (`handoff/screenshots/01–06`) as visual references — these are your source of truth for layout.
3. **Drop in the tokens:** paste `handoff/tokens.css` (the real color/type variables) so Lovable's styling matches exactly. Tell it "use these CSS variables for all colors and fonts."
4. **Hand over the SVG assets:** upload the files in `assets/` (logo `mark-burst-signal.svg`, `brand-flags-salvo.svg`, `brand-stickies.svg`, the motifs) so it uses the real graphics instead of inventing icons.
5. Iterate page by page ("now build the Pricing page to match screenshot 04"), since Lovable does better in focused steps than one giant build.

**Even better (optional):** if you want a faithful starting codebase, the React components for every screen already exist in `ui_kits/website/` (HomeScreen.jsx, ServicesScreen.jsx, etc.). Push this project to **GitHub**, then connect that repo to Lovable — it can read the real components rather than rebuilding from screenshots. I can help set up the GitHub export if you want.

> Note: the components here use plain CSS variables (not Tailwind). Lovable defaults to Tailwind, so it'll re-style as it builds — the screenshots + tokens keep it on-brand.
