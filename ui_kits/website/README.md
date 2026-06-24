# Salvo Innovation — Marketing Website UI kit

An interactive, click-through recreation of the Salvo marketing site, built entirely on the design system's tokens and components. This is the canonical reference for how Salvo looks on the web.

## Run it
Open `index.html`. It's a single-page app with client-side navigation across six screens. Nav links, buttons, the workshop-technique filter, and the contact form all work (the form fakes a submit).

## Screens
- **Home** — hero, trust strip, the two offerings, the Salvo Method, stats band, testimonial, CTA.
- **Services** — both service lines (consulting, facilitation) in depth, alternating layout, FAQ accordion.
- **Workshops** — filterable grid of workshop techniques/exercises, "bring us in" block.
- **Pricing** — three sticker-card tiers (Spark / Salvo / Fleet), pricing FAQ.
- **About** — the name story (salvo = burst + *salvō* "I save"), values, mini-stats.
- **Contact** — pitch + details and a working form built from the form primitives.

## Architecture
Each `<script type="text/babel">` has its own scope, so shared pieces are exported to `window` at the end of each file (`Object.assign(window, {...})`) and read back from `window` elsewhere.

- `Icons.jsx` — inline Lucide icon set (`<Icon name size color stroke />`).
- `Chrome.jsx` — `Nav`, `Footer`, `CTABand`, `SectionHead`, `Eyebrow`, `Container`, `Photo` (duotone placeholder).
- `HomeScreen.jsx` · `ServicesScreen.jsx` · `WorkshopsScreen.jsx` · `PricingScreen.jsx` · `AboutScreen.jsx` · `ContactScreen.jsx`
- `App.jsx` — router + sticky nav + footer.

Design-system components used from `window.SalvoInnovationDesignSystem_cdc9ce`: `Button`, `Card`, `Badge`, `Tabs`, `Accordion`, `Input`, `Textarea`, `Select`, `Stat`, `SalvoLogo`.

## Notes & placeholders
- **Imagery:** the `Photo` component is a branded **duotone placeholder** standing in for real ink+signal duotone workshop photography. Swap these for real images on the live site.
- **Trust-strip / testimonial names** are illustrative.
- This is a recreation/reference kit — cosmetic fidelity over production wiring (no real form backend, no routing URLs).
