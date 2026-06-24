import { Link, useRouterState } from "@tanstack/react-router";
import { useState, type ReactNode, type CSSProperties } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

type NavItem = { to: string; label: string };
const NAV: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/workshops", label: "Workshops" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
];

export function Container({ children, size, style }: { children: ReactNode; size?: "narrow" | "wide"; style?: CSSProperties }) {
  const cls = size === "narrow" ? "salvo-container salvo-container--narrow" : size === "wide" ? "salvo-container salvo-container--wide" : "salvo-container";
  return <div className={cls} style={style}>{children}</div>;
}

export function SalvoLogo({ tone = "ink", size = 30 }: { tone?: "ink" | "paper"; size?: number }) {
  const color = tone === "paper" ? "var(--paper)" : "var(--ink-900)";
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
      <img src={tone === "paper" ? "/brand/mark-burst-paper.svg" : "/brand/mark-burst-signal.svg"} alt="" width={size} height={size} style={{ display: "block" }} />
      <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: size * 0.78, letterSpacing: "-0.03em", color, lineHeight: 1 }}>SALVO</span>
    </span>
  );
}

export function Eyebrow({ children, tone = "signal" }: { children: ReactNode; tone?: "signal" | "paper" | "ink" }) {
  const color = tone === "paper" ? "var(--paper)" : tone === "ink" ? "var(--ink-900)" : "var(--signal-600)";
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color }}>
      <span style={{ width: 26, height: 0, borderTop: "2px solid currentColor" }} />
      {children}
    </span>
  );
}

export function SectionHead({ eyebrow, title, intro, tone = "ink", align = "left", max = 720 }: { eyebrow?: string; title: ReactNode; intro?: ReactNode; tone?: "ink" | "paper"; align?: "left" | "center"; max?: number }) {
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

export function Nav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(246,241,231,0.85)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", borderBottom: "2px solid var(--ink-900)" }}>
      <Container>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          <Link to="/" style={{ textDecoration: "none" }} aria-label="Salvo home" onClick={() => setOpen(false)}>
            <SalvoLogo tone="ink" size={30} />
          </Link>
          <nav className="salvo-nav-links" style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} className="salvo-nav-link" data-active={pathname === n.to ? "true" : "false"}>{n.label}</Link>
            ))}
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Link to="/contact" className="salvo-btn salvo-btn--primary salvo-btn--sm">
              Book a salvo
            </Link>
            <button className="salvo-nav-burger" onClick={() => setOpen(!open)} aria-label="Menu" style={{ display: "none", border: "2px solid var(--ink-900)", background: "var(--white)", borderRadius: 10, width: 40, height: 40, cursor: "pointer", alignItems: "center", justifyContent: "center" }}>
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </Container>
      {open && (
        <div style={{ borderTop: "1px solid var(--sand-200)", background: "var(--paper)" }}>
          <Container>
            <div style={{ display: "flex", flexDirection: "column", padding: "10px 0 16px" }}>
              {[...NAV, { to: "/contact", label: "Contact" }].map((n) => (
                <Link key={n.to} to={n.to} onClick={() => setOpen(false)} style={{ textAlign: "left", padding: "12px 4px", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 18, color: "var(--ink-900)", borderBottom: "1px solid var(--sand-200)", textDecoration: "none" }}>{n.label}</Link>
              ))}
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}

export function CTABand() {
  return (
    <section style={{ background: "var(--signal-500)", borderTop: "2px solid var(--ink-900)", borderBottom: "2px solid var(--ink-900)" }}>
      <Container style={{ padding: "clamp(56px,8vw,96px) clamp(20px,5vw,56px)" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 28, alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ maxWidth: 640 }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(2.2rem,4.5vw,3.4rem)", lineHeight: 1.02, letterSpacing: "-0.03em", color: "#fff", margin: 0 }}>Ready to get unstuck?</h2>
            <p style={{ marginTop: 14, fontSize: 19, color: "rgba(255,255,255,0.92)", maxWidth: "48ch" }}>Tell us what's stuck. We'll tell you the fastest way through — usually in a week.</p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link to="/contact" className="salvo-btn salvo-btn--ink salvo-btn--lg">Book a salvo <ArrowRight size={18} /></Link>
            <Link to="/workshops" className="salvo-btn salvo-btn--secondary salvo-btn--lg">See the formats</Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function Footer() {
  return (
    <footer style={{ background: "var(--ink-900)", color: "var(--paper)", position: "relative", overflow: "hidden" }}>
      <img src="/brand/motif-ripple.svg" alt="" style={{ position: "absolute", left: -80, bottom: -80, width: 300, opacity: 0.12, filter: "invert(1)" }} />
      <Container style={{ padding: "clamp(48px,7vw,80px) clamp(20px,5vw,56px) 32px", position: "relative" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 40, justifyContent: "space-between" }}>
          <div style={{ maxWidth: 320 }}>
            <SalvoLogo tone="paper" size={32} />
            <p style={{ marginTop: 18, color: "var(--text-on-dark-muted)", fontSize: 15.5, lineHeight: 1.6 }}>Product consulting and workshop facilitation. We bring the fire — you bring the product worth saving.</p>
          </div>
          <div style={{ display: "flex", gap: 56, flexWrap: "wrap" }}>
            <FootCol title="Company" items={[["Services", "/services"], ["Workshops", "/workshops"], ["Pricing", "/pricing"], ["About", "/about"]]} />
            <FootCol title="Get in touch" items={[["Contact", "/contact"], ["hello@salvoinnovation.com", "/contact"], ["Book a salvo", "/contact"]]} />
          </div>
        </div>
        <div style={{ marginTop: 48, paddingTop: 22, borderTop: "1px solid var(--border-on-dark)", display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.04em", color: "var(--text-on-dark-muted)" }}>
          <span>© {new Date().getFullYear()} Salvo Innovation</span>
          <span>SALVŌ — “I SAVE”</span>
        </div>
      </Container>
    </footer>
  );
}

function FootCol({ title, items }: { title: string; items: Array<[string, string]> }) {
  return (
    <div>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--volt-500)", marginBottom: 14 }}>{title}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {items.map(([label, to]) => (
          <Link key={label + to} to={to} style={{ color: "var(--paper)", textDecoration: "none", fontSize: 15.5, opacity: 0.92 }}>{label}</Link>
        ))}
      </div>
    </div>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "var(--paper)" }}>
      <Nav />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
    </div>
  );
}

export function Photo({ label = "Workshop in session", h = 320, tone = "ink", motif = "ripple", radius = 18, style }: { label?: string; h?: number; tone?: "ink" | "signal" | "volt"; motif?: "ripple" | "burst-rays" | "waves"; radius?: number; style?: CSSProperties }) {
  const bg = tone === "signal" ? "var(--signal-500)" : tone === "volt" ? "var(--volt-500)" : "var(--ink-900)";
  const fg = tone === "volt" ? "var(--ink-900)" : "var(--paper)";
  return (
    <div style={{ position: "relative", height: h, borderRadius: radius, border: "2px solid var(--ink-900)", background: bg, overflow: "hidden", display: "flex", alignItems: "flex-end", boxShadow: "var(--shadow-hard)", ...style }}>
      <img src={`/brand/motif-${motif}.svg`} alt="" style={{ position: "absolute", right: -40, top: -40, width: 240, opacity: tone === "ink" ? 0.55 : 0.85, filter: tone === "ink" ? "invert(1)" : "brightness(0)" }} />
      <span style={{ position: "relative", margin: 16, fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: fg }}>
        ⚡ {label}
      </span>
    </div>
  );
}
