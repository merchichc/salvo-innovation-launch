/* Services screen. */
const { Button: SvButton, Card: SvCard, Accordion: SvAccordion } = window.SalvoInnovationDesignSystem_cdc9ce;

function ServicesScreen({ onNavigate }) {
  const lines = [
    { tag: "01 — Consulting", icon: "compass", title: "Digital product consulting", lead: "For products that have lost their bearings.", body: "We embed with your team to find the next right thing to build. Strategy that survives contact with reality, discovery that kills bad bets early, and a roadmap your whole org can rally behind.", items: ["Product & portfolio strategy", "Discovery & customer research", "Roadmap & prioritisation", "Fractional product leadership"], tone: "default" },
    { tag: "02 — Facilitation", icon: "zap", title: "Workshop design & facilitation", lead: "For decisions that have to happen now.", body: "We design and run high-energy sessions that get a room to a real decision — fast. You bring the people who can decide; we bring the structure, the momentum, and a custom, tested prototype to show for it.", items: ["Product sprints", "A custom, tested prototype", "Strategy & alignment days", "Discovery & kickoff workshops"], tone: "ink" },
  ];
  const faqs = [
    { id: "f1", title: "Do you work with startups or only big companies?", content: "Both. We've run sprints for three-person startups and alignment days for 200-person product orgs. The format flexes; the energy doesn't." },
    { id: "f2", title: "Remote, in person, or hybrid?", content: "All three. Our remote sessions are designed for remote — not an in-person workshop bolted onto a video call." },
    { id: "f3", title: "How quickly can you start?", content: "Most engagements kick off within two weeks. A single workshop can often be booked sooner." },
    { id: "f4", title: "What do we actually walk away with?", content: "A decision, the artefacts behind it, and a clear next step. Usually a tested prototype or a one-page plan — never an 80-slide readout." },
  ];
  return (
    <div>
      <section style={{ background: "var(--paper)", position: "relative", overflow: "hidden", borderBottom: "2px solid var(--ink-900)" }}>
        <img src="../../assets/brand-stickies.svg" alt="" style={{ position: "absolute", right: -10, bottom: -24, width: "min(40vw, 400px)", opacity: 0.97, pointerEvents: "none" }} />
        <Container style={{ padding: "clamp(56px,8vw,104px) clamp(20px,5vw,56px)", position: "relative" }}>
          <div style={{ maxWidth: 780 }}>
            <Eyebrow>Services</Eyebrow>
            <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(2.6rem,6vw,4.6rem)", lineHeight: 0.98, letterSpacing: "-0.035em", margin: "18px 0 0", color: "var(--ink-900)" }}>Steady guidance, or a decisive burst.</h1>
            <p style={{ marginTop: 22, fontSize: 20, lineHeight: 1.5, color: "var(--text-secondary)", maxWidth: "52ch" }}>Two service lines, one goal: get your product moving and keep it moving.</p>
          </div>
        </Container>
      </section>

      <section style={{ padding: "clamp(56px,8vw,104px) 0" }}>
        <Container>
          <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
            {lines.map((l, idx) => (
              <div key={l.tag} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 36, alignItems: "center" }}>
                <div style={{ order: idx % 2 ? 2 : 1 }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--signal-600)" }}>{l.tag}</div>
                  <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(2rem,4vw,2.8rem)", letterSpacing: "-0.03em", lineHeight: 1.04, margin: "12px 0 6px" }}>{l.title}</h2>
                  <p style={{ fontSize: 19, fontWeight: 700, color: "var(--signal-600)", margin: "0 0 12px" }}>{l.lead}</p>
                  <p style={{ fontSize: 16.5, lineHeight: 1.6, color: "var(--text-secondary)", maxWidth: "50ch" }}>{l.body}</p>
                  <div style={{ marginTop: 20, display: "flex", flexWrap: "wrap", gap: 10 }}>
                    {l.items.map((it) => (
                      <span key={it} style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1.5px solid var(--ink-900)", borderRadius: 999, padding: "7px 14px", fontSize: 14.5, fontWeight: 600 }}>
                        <Icon name="check" size={15} color="var(--signal-500)" stroke={3} />{it}
                      </span>
                    ))}
                  </div>
                </div>
                <div style={{ order: idx % 2 ? 1 : 2 }}>
                  <Photo h={300} tone={l.tone === "ink" ? "ink" : l.tone === "volt" ? "volt" : "signal"} motif={l.tone === "ink" ? "ripple" : "burst-rays"} label={l.title} />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section style={{ padding: "clamp(56px,8vw,96px) 0", background: "var(--white)", borderTop: "2px solid var(--ink-900)" }}>
        <Container size="narrow">
          <SectionHead align="center" eyebrow="Questions" title="The usual questions" />
          <div style={{ marginTop: 32 }}>
            <SvAccordion items={faqs} defaultOpen={["f1"]} />
          </div>
        </Container>
      </section>

      <CTABand onNavigate={onNavigate} />
    </div>
  );
}

Object.assign(window, { ServicesScreen });
