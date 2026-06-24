/* Pricing screen. */
const { Button: PrButton, Card: PrCard, Badge: PrBadge, Tabs: PrTabs, Accordion: PrAccordion } = window.SalvoInnovationDesignSystem_cdc9ce;

function PricingScreen({ onNavigate }) {
  const tiers = [
    { name: "Spark", price: "$5k", unit: "/ session", tag: "Single workshop", desc: "One sharp, facilitated session to break a specific logjam.", features: ["Half- or full-day workshop", "Agenda designed around your decision", "Facilitation + digital whiteboard", "Outcomes summary next day"], cta: "Book a Spark", highlight: false },
    { name: "Salvo", price: "$15k", unit: "/ sprint", tag: "Most popular", desc: "The full product sprint — from fuzzy problem to a custom, tested prototype.", features: ["Full product sprint", "Pre-sprint scoping & recruiting", "A custom prototype + 5 user tests", "Decision, artefacts & next steps", "2-week follow-up check-in"], cta: "Book a Salvo", highlight: true },
    { name: "Fleet", price: "Custom", unit: "", tag: "Ongoing", desc: "Embedded consulting and a cadence of workshops over months.", features: ["Fractional product leadership", "Recurring strategy & sprint cadence", "Team facilitation coaching", "Quarterly roadmap resets"], cta: "Talk to us", highlight: false },
  ];
  const faqs = [
    { id: "p1", title: "What's not included?", content: "Travel and venue for in-person sessions are billed at cost. Everything else — design, facilitation, tools, write-ups — is in the price." },
    { id: "p2", title: "Can we mix consulting and workshops?", content: "That's exactly what Fleet is for. We'll shape a cadence that fits how your team actually works." },
    { id: "p3", title: "Do you offer a guarantee?", content: "If you finish a Salvo sprint and don't have a clear decision and a tested prototype, we'll make it right. That's never happened, but the promise stands." },
  ];
  return (
    <div>
      <section style={{ background: "var(--paper)", borderBottom: "2px solid var(--ink-900)" }}>
        <Container style={{ padding: "clamp(56px,8vw,96px) clamp(20px,5vw,56px)", textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 18 }}><Eyebrow>Pricing</Eyebrow></div>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(2.6rem,6vw,4.4rem)", lineHeight: 0.99, letterSpacing: "-0.035em", margin: 0 }}>Clear prices. No surprises.</h1>
          <p style={{ marginTop: 20, fontSize: 20, color: "var(--text-secondary)", maxWidth: "46ch", margin: "20px auto 0" }}>Pick the burst that fits. Every option ends with a decision you can build on.</p>
        </Container>
      </section>

      <section style={{ padding: "clamp(48px,7vw,88px) 0" }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 22, alignItems: "stretch" }}>
            {tiers.map((t) => (
              <div key={t.name} style={{ display: "flex" }}>
                <PrCard variant="sticker" tone={t.highlight ? "ink" : "default"} style={{ padding: 32, display: "flex", flexDirection: "column", width: "100%", position: "relative", ...(t.highlight ? { boxShadow: "6px 6px 0 var(--signal-500)" } : {}) }}>
                  {t.highlight && <span style={{ position: "absolute", top: -14, right: 22 }}><PrBadge tone="signal">Most popular</PrBadge></span>}
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: t.highlight ? "var(--volt-500)" : "var(--signal-600)" }}>{t.tag}</div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 30, margin: "10px 0 4px", letterSpacing: "-0.02em", color: t.highlight ? "var(--paper)" : "var(--ink-900)" }}>{t.name}</h3>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 6, margin: "8px 0 4px" }}>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 44, letterSpacing: "-0.03em", color: t.highlight ? "var(--volt-500)" : "var(--signal-500)" }}>{t.price}</span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: t.highlight ? "var(--text-on-dark-muted)" : "var(--text-muted)" }}>{t.unit}</span>
                  </div>
                  <p style={{ fontSize: 15.5, lineHeight: 1.5, color: t.highlight ? "var(--text-on-dark-muted)" : "var(--text-secondary)", margin: "6px 0 22px" }}>{t.desc}</p>
                  <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
                    {t.features.map((f) => (
                      <li key={f} style={{ display: "flex", gap: 10, fontSize: 15, color: t.highlight ? "var(--paper)" : "var(--ink-900)" }}>
                        <Icon name="check" size={18} color="var(--signal-500)" stroke={3} style={{ flex: "none", marginTop: 1 }} />{f}
                      </li>
                    ))}
                  </ul>
                  <div style={{ marginTop: 26 }}>
                    <PrButton variant={t.highlight ? "volt" : "primary"} size="md" fullWidth onClick={() => onNavigate("contact")}>{t.cta}</PrButton>
                  </div>
                </PrCard>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section style={{ padding: "clamp(48px,7vw,88px) 0", background: "var(--white)", borderTop: "2px solid var(--ink-900)" }}>
        <Container size="narrow">
          <SectionHead align="center" eyebrow="Pricing FAQ" title="Before you ask" />
          <div style={{ marginTop: 30 }}><PrAccordion items={faqs} defaultOpen={["p1"]} /></div>
        </Container>
      </section>

      <CTABand onNavigate={onNavigate} />
    </div>
  );
}

Object.assign(window, { PricingScreen });
