/* Site chrome — Nav, Footer, and shared section building blocks.
   Pulls Button/SalvoLogo from the Salvo bundle, Icon from Icons.jsx. */
const DS = window.SalvoInnovationDesignSystem_cdc9ce;
const { Button, SalvoLogo } = DS;

const NAV = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "workshops", label: "Workshops" },
  { id: "pricing", label: "Pricing" },
  { id: "about", label: "About" },
];

function Container({ children, size = "max", style }) {
  const max = size === "narrow" ? "760px" : size === "wide" ? "1320px" : "1180px";
  return <div style={{ width: "100%", maxWidth: max, margin: "0 auto", padding: "0 clamp(20px, 5vw, 56px)", ...style }}>{children}</div>;
}

function Nav({ current, onNavigate }) {
  const [open, setOpen] = React.useState(false);
  const go = (id) => { onNavigate(id); setOpen(false); };
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(246,241,231,0.82)", backdropFilter: "blur(12px)", borderBottom: "2px solid var(--ink-900)" }}>
      <Container>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          <button onClick={() => go("home")} style={{ border: "none", background: "none", cursor: "pointer", padding: 0 }} aria-label="Salvo home">
            <SalvoLogo tone="ink" size={30} />
          </button>
          <nav style={{ display: "flex", alignItems: "center", gap: 4 }} className="salvo-nav-links">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => go(n.id)}
                style={{ border: "none", background: "none", cursor: "pointer", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 15, padding: "8px 12px", borderRadius: 8,
                  color: current === n.id ? "var(--signal-600)" : "var(--ink-900)" }}>
                {n.label}
              </button>
            ))}
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Button variant="primary" size="sm" onClick={() => go("contact")}>Book a salvo</Button>
            <button className="salvo-nav-burger" onClick={() => setOpen(!open)} aria-label="Menu"
              style={{ display: "none", border: "2px solid var(--ink-900)", background: "var(--white)", borderRadius: 10, width: 40, height: 40, cursor: "pointer", alignItems: "center", justifyContent: "center" }}>
              <Icon name={open ? "x" : "menu"} size={20} />
            </button>
          </div>
        </div>
      </Container>
      {open && (
        <div style={{ borderTop: "1px solid var(--sand-200)", background: "var(--paper)" }}>
          <Container>
            <div style={{ display: "flex", flexDirection: "column", padding: "10px 0 16px" }}>
              {NAV.concat([{ id: "contact", label: "Contact" }]).map((n) => (
                <button key={n.id} onClick={() => go(n.id)} style={{ textAlign: "left", border: "none", background: "none", padding: "12px 4px", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 18, color: "var(--ink-900)", borderBottom: "1px solid var(--sand-200)" }}>{n.label}</button>
              ))}
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}

function Eyebrow({ children, tone = "signal" }) {
  const color = tone === "paper" ? "var(--paper)" : tone === "ink" ? "var(--ink-900)" : "var(--signal-600)";
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color }}>
      <span style={{ width: 26, height: 0, borderTop: "2px solid currentColor" }} />{children}
    </span>
  );
}

function SectionHead({ eyebrow, title, intro, tone = "ink", align = "left", max = 720 }) {
  const titleColor = tone === "paper" ? "var(--paper)" : "var(--ink-900)";
  const introColor = tone === "paper" ? "var(--text-on-dark-muted)" : "var(--text-secondary)";
  return (
    <div style={{ maxWidth: max, margin: align === "center" ? "0 auto" : 0, textAlign: align }}>
      {eyebrow && <div style={{ marginBottom: 18, display: "flex", justifyContent: align === "center" ? "center" : "flex-start" }}><Eyebrow tone={tone === "paper" ? "paper" : "signal"}>{eyebrow}</Eyebrow></div>}
      <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.04, letterSpacing: "-0.03em", color: titleColor, margin: 0 }}>{title}</h2>
      {intro && <p style={{ marginTop: 18, fontSize: 19, lineHeight: 1.55, color: introColor, maxWidth: "60ch", marginLeft: align === "center" ? "auto" : 0, marginRight: align === "center" ? "auto" : 0 }}>{intro}</p>}
    </div>
  );
}

/* Duotone photo placeholder — where real ink+signal duotone photography goes. */
function Photo({ label = "Workshop in session", h = 320, tone = "ink", motif = "ripple", radius = 18, style }) {
  const bg = tone === "signal" ? "var(--signal-500)" : tone === "volt" ? "var(--volt-500)" : "var(--ink-900)";
  const fg = tone === "volt" ? "var(--ink-900)" : "var(--paper)";
  return (
    <div style={{ position: "relative", height: h, borderRadius: radius, border: "2px solid var(--ink-900)", background: bg, overflow: "hidden", display: "flex", alignItems: "flex-end", boxShadow: "var(--shadow-hard)", ...style }}>
      <img src={`../../assets/motif-${motif}.svg`} alt="" style={{ position: "absolute", right: -40, top: -40, width: 240, opacity: tone === "ink" ? 0.5 : 0.85, filter: tone === "ink" ? "invert(1)" : "brightness(0)" }} />
      <span style={{ position: "relative", margin: 16, fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: fg, display: "inline-flex", alignItems: "center", gap: 8 }}>
        <Icon name="zap" size={14} color={fg} /> {label}
      </span>
    </div>
  );
}

function CTABand({ onNavigate }) {
  return (
    <section style={{ background: "var(--signal-500)", borderTop: "2px solid var(--ink-900)", borderBottom: "2px solid var(--ink-900)" }}>
      <Container style={{ padding: "clamp(56px,8vw,96px) clamp(20px,5vw,56px)" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 28, alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ maxWidth: 640 }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(2.2rem,4.5vw,3.4rem)", lineHeight: 1.02, letterSpacing: "-0.03em", color: "#fff", margin: 0 }}>Ready to get unstuck?</h2>
            <p style={{ marginTop: 14, fontSize: 19, color: "rgba(255,255,255,0.9)", maxWidth: "48ch" }}>Tell us what's stuck. We'll tell you the fastest way through — usually in a week.</p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Button variant="ink" size="lg" onClick={() => onNavigate("contact")} iconRight={<Icon name="arrow-right" size={18} />}>Book a salvo</Button>
            <Button variant="secondary" size="lg" onClick={() => onNavigate("workshops")}>See the formats</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Footer({ onNavigate }) {
  return (
    <footer style={{ background: "var(--ink-900)", color: "var(--paper)", position: "relative", overflow: "hidden" }}>
      <img src="../../assets/motif-ripple.svg" alt="" style={{ position: "absolute", left: -80, bottom: -80, width: 300, opacity: 0.12, filter: "invert(1)" }} />
      <Container style={{ padding: "clamp(48px,7vw,80px) clamp(20px,5vw,56px) 32px", position: "relative" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 40, justifyContent: "space-between" }}>
          <div style={{ maxWidth: 320 }}>
            <SalvoLogo tone="paper" size={32} />
            <p style={{ marginTop: 18, color: "var(--text-on-dark-muted)", fontSize: 15.5, lineHeight: 1.6 }}>Product consulting and workshop facilitation. We bring the fire — you bring the product worth saving.</p>
          </div>
          <div style={{ display: "flex", gap: 56, flexWrap: "wrap" }}>
            <FootCol title="Company" items={[["Services", "services"], ["Workshops", "workshops"], ["Pricing", "pricing"], ["About", "about"]]} onNavigate={onNavigate} />
            <FootCol title="Get in touch" items={[["Contact", "contact"], ["hello@salvo.studio", "contact"], ["Book a salvo", "contact"]]} onNavigate={onNavigate} />
          </div>
        </div>
        <div style={{ marginTop: 48, paddingTop: 22, borderTop: "1px solid var(--border-on-dark)", display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.04em", color: "var(--text-on-dark-muted)" }}>
          <span>© 2026 Salvo Innovation</span>
          <span>SALVŌ — “I SAVE” · 51.5074° N, 0.1278° W</span>
        </div>
      </Container>
    </footer>
  );
}
function FootCol({ title, items, onNavigate }) {
  return (
    <div>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--volt-500)", marginBottom: 14 }}>{title}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {items.map((it, i) => (
          <button key={i} onClick={() => onNavigate(it[1])} style={{ textAlign: "left", border: "none", background: "none", cursor: "pointer", color: "var(--paper)", fontFamily: "var(--font-body)", fontSize: 15, padding: 0 }}>{it[0]}</button>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { Container, Nav, Footer, CTABand, SectionHead, Eyebrow, Photo });
