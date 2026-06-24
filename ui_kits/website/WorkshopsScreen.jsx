/* Workshops screen — techniques / example exercises. */
const { Button: WkButton, Card: WkCard, Badge: WkBadge, Tabs: WkTabs } = window.SalvoInnovationDesignSystem_cdc9ce;

function WorkshopsScreen({ onNavigate }) {
  const [cat, setCat] = React.useState("all");
  const techniques = [
    { cat: "diverge", name: "Crazy 8s", dur: "8 min", group: "Any size", desc: "Eight ideas, eight minutes, one folded sheet. Quantity beats precious. Breaks the blank page every time.", icon: "zap" },
    { cat: "decide", name: "Dot voting", dur: "10 min", group: "3–30", desc: "Everyone gets dots, the wall makes the call. Silent, fast, and immune to the loudest voice in the room.", icon: "target" },
    { cat: "frame", name: "How Might We", dur: "15 min", group: "Any size", desc: "Turn problems and gripes into open, optimistic questions you can actually design against.", icon: "lightbulb" },
    { cat: "frame", name: "Lightning Demos", dur: "20 min", group: "4–12", desc: "Steal shamelessly. The team demos great solutions from anywhere, then we mine them for ideas.", icon: "trending-up" },
    { cat: "decide", name: "The Decider", dur: "5 min", group: "Leadership", desc: "When consensus stalls, one named decider breaks the tie. Clarity beats comfortable ambiguity.", icon: "flag" },
    { cat: "diverge", name: "Note-and-Vote", dur: "12 min", group: "Any size", desc: "Generate solo, share together, vote silently. The fairest way to harvest a group's best thinking.", icon: "users" },
    { cat: "prototype", name: "Storyboarding", dur: "45 min", group: "4–10", desc: "Sketch the solution frame by frame before anyone builds a thing. Cheap to change, costly to skip.", icon: "layers" },
    { cat: "prototype", name: "Test with 5", dur: "1 day", group: "5 users", desc: "Five real users, one prototype, a wall of patterns. The fastest reality check you'll ever run.", icon: "check-big" },
  ];
  const cats = [{ id: "all", label: "All" }, { id: "frame", label: "Frame" }, { id: "diverge", label: "Diverge" }, { id: "decide", label: "Decide" }, { id: "prototype", label: "Prototype" }];
  const shown = cat === "all" ? techniques : techniques.filter((t) => t.cat === cat);

  return (
    <div>
      <section style={{ background: "var(--ink-900)", color: "var(--paper)", position: "relative", overflow: "hidden", borderBottom: "2px solid var(--ink-900)" }}>
        <img src="../../assets/brand-stickies.svg" alt="" style={{ position: "absolute", right: -16, top: 24, width: "min(36vw, 360px)", opacity: 0.97, pointerEvents: "none" }} />
        <Container style={{ padding: "clamp(56px,8vw,104px) clamp(20px,5vw,56px)", position: "relative" }}>
          <div style={{ maxWidth: 600 }}>
            <Eyebrow tone="paper">Workshop techniques</Eyebrow>
            <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(2.6rem,6vw,4.6rem)", lineHeight: 0.98, letterSpacing: "-0.035em", margin: "18px 0 0", color: "var(--paper)" }}>The exercises behind the magic.</h1>
            <p style={{ marginTop: 22, fontSize: 20, lineHeight: 1.5, color: "var(--text-on-dark-muted)", maxWidth: "54ch" }}>A peek at the plays we run in the room. Steal them for your own sessions — or let us bring the whole playbook.</p>
          </div>
        </Container>
      </section>

      <section style={{ padding: "clamp(48px,7vw,88px) 0" }}>
        <Container>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 40 }}>
            <div style={{ overflowX: "auto", maxWidth: "100%" }}><WkTabs items={cats} value={cat} onChange={setCat} /></div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
            {shown.map((t) => (
              <WkCard key={t.name} variant="sticker" interactive style={{ padding: 26, display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: "var(--volt-500)", border: "2px solid var(--ink-900)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon name={t.icon} size={24} color="var(--ink-900)" />
                  </div>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--signal-600)" }}>{t.cat}</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, margin: "0 0 8px", letterSpacing: "-0.02em" }}>{t.name}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.5, color: "var(--text-secondary)", margin: "0 0 18px", flex: 1 }}>{t.desc}</p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 700, color: "var(--ink-800)" }}><Icon name="clock" size={14} />{t.dur}</span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 700, color: "var(--ink-800)" }}><Icon name="users" size={14} />{t.group}</span>
                </div>
              </WkCard>
            ))}
          </div>
        </Container>
      </section>

      <section style={{ padding: "clamp(56px,8vw,96px) 0", background: "var(--white)", borderTop: "2px solid var(--ink-900)" }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))", gap: 40, alignItems: "center" }}>
            <div>
              <SectionHead eyebrow="Bring us in" title="Want the whole playbook in your room?" intro="We design the agenda around your decision, run every minute of it, and leave your team with the artefacts and the momentum to keep going." />
              <div style={{ marginTop: 26, display: "flex", gap: 12, flexWrap: "wrap" }}>
                <WkButton variant="primary" size="lg" onClick={() => onNavigate("contact")} iconRight={<Icon name="arrow-right" size={18} />}>Book a workshop</WkButton>
                <WkButton variant="secondary" size="lg" onClick={() => onNavigate("pricing")}>See pricing</WkButton>
              </div>
            </div>
            <Photo h={300} tone="signal" motif="burst-rays" label="Product sprint" />
          </div>
        </Container>
      </section>

      <CTABand onNavigate={onNavigate} />
    </div>
  );
}

Object.assign(window, { WorkshopsScreen });
