import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, Compass, Zap, Quote } from "lucide-react";
import { Container, Eyebrow, SectionHead, SiteLayout, CTABand } from "../components/site/SiteChrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Salvo Innovation — Your product is stuck. We bring the fire." },
      { name: "description", content: "Sharp, decisive workshops and product consulting that turn months of debate into a week of progress." },
      { property: "og:title", content: "Salvo Innovation — Your product is stuck. We bring the fire." },
      { property: "og:description", content: "Sharp, decisive workshops and product consulting that turn months of debate into a week of progress." },
      { property: "og:image", content: "/brand/mark-burst-signal.svg" },
    ],
  }),
  component: Home,
});

function HeroHome() {
  return (
    <section style={{ position: "relative", overflow: "hidden", background: "var(--paper)" }}>
      <img src="/brand/brand-flags-salvo.svg" alt="" style={{ position: "absolute", right: 16, top: 8, width: "min(740px, 76vw)", opacity: 0.97, pointerEvents: "none" }} />
      <Container style={{ position: "relative", padding: "clamp(104px,13vw,156px) clamp(20px,5vw,56px) clamp(48px,7vw,90px)" }}>
        <div style={{ maxWidth: 860 }}>
          <Eyebrow>Product consulting &amp; workshop facilitation</Eyebrow>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(3rem, 8vw, 6.2rem)", lineHeight: 0.96, letterSpacing: "-0.035em", color: "var(--ink-900)", margin: "20px 0 0" }}>
            Your product is stuck.<br /><span style={{ color: "var(--signal-500)" }}>We bring the fire.</span>
          </h1>
          <p style={{ marginTop: 26, fontSize: "clamp(18px,2.4vw,22px)", lineHeight: 1.5, color: "var(--text-secondary)", maxWidth: "54ch" }}>
            Salvo runs sharp, decisive workshops that turn months of debate into a week of progress — for scrappy startups and big teams alike.
          </p>
          <div style={{ marginTop: 34, display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link to="/contact" className="salvo-btn salvo-btn--primary salvo-btn--lg">Book a salvo <ArrowRight size={18} /></Link>
            <Link to="/workshops" className="salvo-btn salvo-btn--secondary salvo-btn--lg">See the formats</Link>
          </div>
        </div>
      </Container>
      <div style={{ borderTop: "2px solid var(--ink-900)", background: "var(--white)" }}>
        <Container style={{ padding: "20px clamp(20px,5vw,56px)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 28, flexWrap: "wrap", justifyContent: "space-between" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--text-muted)" }}>Trusted by teams at</span>
            <div style={{ display: "flex", gap: "clamp(20px,4vw,52px)", flexWrap: "wrap", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, color: "var(--ink-800)", opacity: 0.75 }}>
              <span>Northwind</span><span>Vela</span><span>Harbor&amp;Co</span><span>Kestrel</span><span>Loomis</span>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

function WhatWeDo() {
  const offers = [
    { Icon: Compass, tag: "Consulting", to: "/services", title: "Digital product consulting", body: "Strategy, discovery and direction for products that have lost their bearings. We help you find the next right thing to build — and the confidence to ship it.", points: ["Product strategy & roadmaps", "Discovery & user research", "Embedded with your team"], dark: false },
    { Icon: Zap, tag: "Facilitation", to: "/workshops", title: "Workshop design & facilitation", body: "High-energy, decision-forward workshops for leadership and product teams. We design the session, run the room, and hand you outcomes — not homework.", points: ["Product sprints + a tested prototype", "Strategy & alignment days", "Remote, in-person or hybrid"], dark: true },
  ];
  return (
    <section style={{ padding: "clamp(64px,9vw,112px) 0" }}>
      <Container>
        <SectionHead eyebrow="What we do" title="Two ways we light a fire" intro="Whether you need a steady hand over months or a decisive burst in a week — we meet your product where it's stuck." />
        <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 22 }}>
          {offers.map((o) => (
            <div key={o.tag} className={`salvo-card salvo-card--interactive${o.dark ? " salvo-card--ink" : ""}`} style={{ padding: 34 }}>
              <div style={{ display: "inline-flex", width: 56, height: 56, borderRadius: 14, alignItems: "center", justifyContent: "center", background: o.dark ? "var(--signal-500)" : "var(--ink-900)", marginBottom: 22 }}>
                <o.Icon size={28} color={o.dark ? "#fff" : "var(--volt-500)"} />
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: o.dark ? "var(--volt-500)" : "var(--signal-600)", marginBottom: 10 }}>{o.tag}</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 28, lineHeight: 1.05, letterSpacing: "-0.02em", margin: 0, color: o.dark ? "var(--paper)" : "var(--ink-900)" }}>{o.title}</h3>
              <p style={{ marginTop: 14, fontSize: 16.5, lineHeight: 1.55, color: o.dark ? "var(--text-on-dark-muted)" : "var(--text-secondary)" }}>{o.body}</p>
              <ul style={{ listStyle: "none", margin: "20px 0 26px", padding: 0, display: "flex", flexDirection: "column", gap: 11 }}>
                {o.points.map((p) => (
                  <li key={p} style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 15.5, fontWeight: 600, color: o.dark ? "var(--paper)" : "var(--ink-900)" }}>
                    <Check size={18} color="var(--signal-500)" strokeWidth={3} />{p}
                  </li>
                ))}
              </ul>
              <Link to={o.to} className={`salvo-btn salvo-btn--md ${o.dark ? "salvo-btn--volt" : "salvo-btn--ink"}`}>Explore {o.tag.toLowerCase()} <ArrowUpRight size={16} /></Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Method() {
  const steps = [
    { n: "01", t: "Frame", d: "We pin down the real problem and the decision that has to be made. No solution-jumping." },
    { n: "02", t: "Diverge", d: "Fast, structured idea generation. Everyone contributes — the loudest voice doesn't win." },
    { n: "03", t: "Decide", d: "We converge to one clear direction the room actually agrees on. On the day." },
    { n: "04", t: "Prototype", d: "You leave with something testable — a prototype, a plan, a next step. Not a deck." },
  ];
  return (
    <section style={{ padding: "clamp(64px,9vw,112px) 0", background: "var(--white)", borderTop: "2px solid var(--ink-900)", borderBottom: "2px solid var(--ink-900)" }}>
      <Container>
        <SectionHead eyebrow="The Salvo Method" title="Four moves. One week. A decision you can build on." />
        <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 20 }}>
          {steps.map((s) => (
            <div key={s.n} style={{ borderTop: "3px solid var(--signal-500)", paddingTop: 18 }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", color: "var(--signal-600)" }}>{s.n}</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 24, margin: "10px 0 8px", letterSpacing: "-0.02em" }}>{s.t}</h3>
              <p style={{ fontSize: 15.5, lineHeight: 1.55, color: "var(--text-secondary)", margin: 0 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function StatsBand() {
  const stats: Array<[string, string]> = [["5 Days", "Idea → tested prototype"], ["120+", "Workshops facilitated"], ["40+", "Teams unstuck"], ["9/10", "Would run another"]];
  return (
    <section style={{ background: "var(--ink-900)", color: "var(--paper)", position: "relative", overflow: "hidden" }}>
      <img src="/brand/motif-ripple.svg" alt="" style={{ position: "absolute", right: -60, top: -60, width: 320, opacity: 0.14, filter: "invert(1)" }} />
      <Container style={{ padding: "clamp(56px,8vw,96px) clamp(20px,5vw,56px)", position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))", gap: 32 }}>
          {stats.map(([v, l]) => (
            <div key={l}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(2.4rem,5vw,3.6rem)", letterSpacing: "-0.03em", lineHeight: 1, color: "var(--volt-500)" }}>{v}</div>
              <div style={{ marginTop: 10, fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-on-dark-muted)" }}>{l}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Testimonial() {
  return (
    <section style={{ padding: "clamp(64px,9vw,112px) 0" }}>
      <Container size="narrow" style={{ textAlign: "center" }}>
        <Quote size={44} color="var(--signal-500)" />
        <blockquote style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.6rem,3.4vw,2.5rem)", lineHeight: 1.15, letterSpacing: "-0.02em", color: "var(--ink-900)", margin: "20px 0 28px" }}>
          “We'd argued about this roadmap for six months. Salvo got us to a decision — a real one — by Thursday lunch.”
        </blockquote>
        <div style={{ display: "flex", gap: 14, alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--signal-500)", border: "2px solid var(--ink-900)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 700, color: "#fff" }}>RM</div>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontWeight: 700 }}>Renata Mbeki</div>
            <div style={{ fontSize: 14, color: "var(--text-muted)" }}>VP Product, Northwind</div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Home() {
  return (
    <SiteLayout>
      <HeroHome />
      <WhatWeDo />
      <Method />
      <StatsBand />
      <Testimonial />
      <CTABand />
    </SiteLayout>
  );
}
