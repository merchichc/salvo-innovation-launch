/* About screen — the name story + values. */
const { Button: AbButton, Card: AbCard, Stat: AbStat } = window.SalvoInnovationDesignSystem_cdc9ce;

function AboutScreen({ onNavigate }) {
  const values = [
    { icon: "target", t: "Decisions, not decks", d: "Every session ends with a real call the room owns — not a document that gathers dust." },
    { icon: "zap", t: "Momentum is the product", d: "A stuck team is expensive. We optimise for the fastest honest path forward." },
    { icon: "users", t: "The room is the expert", d: "Your team knows more than any consultant. We design the structure that gets it out." },
    { icon: "anchor", t: "Save what's worth saving", d: "We're honest about what to fix, what to ship, and what to let sink. Salvō — we save." },
  ];
  return (
    <div>
      <section style={{ background: "var(--paper)", position: "relative", overflow: "hidden", borderBottom: "2px solid var(--ink-900)" }}>
        <img src="../../assets/motif-burst-rays.svg" alt="" style={{ position: "absolute", left: -50, bottom: -70, width: 380, opacity: 0.8 }} />
        <Container style={{ padding: "clamp(56px,8vw,104px) clamp(20px,5vw,56px)", position: "relative" }}>
          <div style={{ maxWidth: 820 }}>
            <Eyebrow>About Salvo</Eyebrow>
            <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(2.6rem,6vw,4.6rem)", lineHeight: 0.98, letterSpacing: "-0.035em", margin: "18px 0 0" }}>A burst of fire, and a hand on the wheel.</h1>
          </div>
        </Container>
      </section>

      {/* Name story */}
      <section style={{ padding: "clamp(56px,8vw,104px) 0" }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))", gap: 44, alignItems: "center" }}>
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--signal-600)", marginBottom: 16 }}>Why "Salvo"?</div>
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.18, letterSpacing: "-0.02em", color: "var(--ink-900)", margin: "0 0 20px" }}>
                A <span style={{ color: "var(--signal-500)" }}>salvo</span> is a broadside — a sudden, simultaneous burst of fire. In Latin, <span style={{ fontStyle: "italic" }}>salvō</span> means <span style={{ background: "linear-gradient(transparent 58%, var(--volt-500) 58%)" }}>“I save.”</span>
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--text-secondary)", maxWidth: "54ch" }}>
                That's the whole idea. We inject a burst of fire — of progress, of clarity, of momentum — into teams and ideas that have run aground. And we do it with a salvager's honesty: we save the ship worth saving, and we're straight with you about the rest.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--text-secondary)", maxWidth: "54ch", marginTop: 14 }}>
                Fast, decisive, a little bit loud. Never beige.
              </p>
            </div>
            <Photo h={360} tone="ink" motif="ripple" label="Salvō — I save" />
          </div>
        </Container>
      </section>

      {/* Values */}
      <section style={{ padding: "clamp(56px,8vw,96px) 0", background: "var(--white)", borderTop: "2px solid var(--ink-900)", borderBottom: "2px solid var(--ink-900)" }}>
        <Container>
          <SectionHead eyebrow="What we believe" title="Four things we won't budge on" />
          <div style={{ marginTop: 44, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))", gap: 22 }}>
            {values.map((v) => (
              <AbCard key={v.t} variant="soft" style={{ padding: 28 }}>
                <div style={{ width: 50, height: 50, borderRadius: 12, background: "var(--ink-900)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                  <Icon name={v.icon} size={26} color="var(--volt-500)" />
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 21, margin: "0 0 8px", letterSpacing: "-0.02em" }}>{v.t}</h3>
                <p style={{ fontSize: 15.5, lineHeight: 1.55, color: "var(--text-secondary)", margin: 0 }}>{v.d}</p>
              </AbCard>
            ))}
          </div>
        </Container>
      </section>

      {/* Mini stats */}
      <section style={{ padding: "clamp(48px,7vw,80px) 0" }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px,1fr))", gap: 28 }}>
            <AbStat value="2019" label="Studio founded" />
            <AbStat value="120+" label="Workshops run" tone="signal" />
            <AbStat value="11" label="Countries" />
            <AbStat value="∞" label="Sticky notes" />
          </div>
        </Container>
      </section>

      <CTABand onNavigate={onNavigate} />
    </div>
  );
}

Object.assign(window, { AboutScreen });
