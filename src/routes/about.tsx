import { createFileRoute } from "@tanstack/react-router";
import { Target, Zap, Users, Anchor } from "lucide-react";
import { Container, Eyebrow, SectionHead, SiteLayout, CTABand } from "../components/site/SiteChrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Salvo Innovation" },
      { name: "description", content: "A burst of fire, and a hand on the wheel. The story behind the name and the values that drive the work." },
      { property: "og:title", content: "About — Salvo Innovation" },
      { property: "og:description", content: "A burst of fire, and a hand on the wheel — the story behind Salvo." },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { Icon: Target, t: "Decisions, not decks", d: "Every session ends with a real call the room owns — not a document that gathers dust." },
  { Icon: Zap, t: "Momentum is the product", d: "A stuck team is expensive. We optimise for the fastest honest path forward." },
  { Icon: Users, t: "The room is the expert", d: "Your team knows more than any consultant. We design the structure that gets it out." },
  { Icon: Anchor, t: "Save what's worth saving", d: "We're honest about what to fix, what to ship, and what to let sink. Salvō — we save." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section style={{ background: "var(--paper)", position: "relative", borderBottom: "2px solid var(--ink-900)" }}>
        <img src="/brand/motif-burst-rays.svg" alt="" style={{ position: "absolute", left: -50, bottom: -70, width: 380, opacity: 0.8 }} />
        <Container style={{ padding: "clamp(56px,8vw,104px) clamp(20px,5vw,56px)", position: "relative" }}>
          <div style={{ maxWidth: 820 }}>
            <Eyebrow>About Salvo</Eyebrow>
            <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(2.6rem,6vw,4.6rem)", lineHeight: 0.98, letterSpacing: "-0.035em", margin: "18px 0 0" }}>A burst of fire, and a hand on the wheel.</h1>
          </div>
        </Container>
      </section>

      <section style={{ padding: "clamp(56px,8vw,104px) 0" }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))", gap: 44, alignItems: "center" }}>
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--signal-600)", marginBottom: 16 }}>Why “Salvo”?</div>
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.18, letterSpacing: "-0.02em", color: "var(--ink-900)", margin: "0 0 20px" }}>
                A <span style={{ color: "var(--signal-500)" }}>salvo</span> is a broadside — a sudden, simultaneous burst of fire. In Latin, <span style={{ fontStyle: "italic" }}>salvō</span> means <span style={{ background: "linear-gradient(transparent 58%, var(--volt-500) 58%)" }}>“I save.”</span>
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--text-secondary)", maxWidth: "54ch" }}>
                That's the whole idea. We inject a burst of fire — of progress, of clarity, of momentum — into teams and ideas that have run aground. And we do it with a salvager's honesty: we save the ship worth saving, and we're straight with you about the rest.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--text-secondary)", maxWidth: "54ch", marginTop: 14 }}>
                Salvo Innovation was founded to make product work less precious and more decisive. We've spent the last decade running sprints, alignment days and embedded gigs for startups and big teams alike — and we'd love to do the same for yours.
              </p>
            </div>
            <div style={{ display: "grid", gap: 16 }}>
              <div className="salvo-card" style={{ padding: 24, background: "var(--signal-500)", color: "#fff" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", opacity: 0.85 }}>Salvo (n.)</div>
                <p style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em", margin: "10px 0 0", lineHeight: 1.2 }}>A simultaneous discharge of artillery — or a sudden, vigorous burst.</p>
              </div>
              <div className="salvo-card salvo-card--ink" style={{ padding: 24 }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--volt-500)" }}>Salvō (v., Latin)</div>
                <p style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em", margin: "10px 0 0", lineHeight: 1.2, color: "var(--paper)" }}>“I save.” As in: salvage, salvation, save the ship.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section style={{ padding: "clamp(56px,8vw,96px) 0", background: "var(--white)", borderTop: "2px solid var(--ink-900)", borderBottom: "2px solid var(--ink-900)" }}>
        <Container>
          <SectionHead eyebrow="What we believe" title="Four things we won't budge on" />
          <div style={{ marginTop: 44, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))", gap: 22 }}>
            {VALUES.map((v) => (
              <div key={v.t} className="salvo-card salvo-card--soft" style={{ padding: 28 }}>
                <div style={{ width: 50, height: 50, borderRadius: 12, background: "var(--ink-900)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                  <v.Icon size={26} color="var(--volt-500)" />
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 21, margin: "0 0 8px", letterSpacing: "-0.02em" }}>{v.t}</h3>
                <p style={{ fontSize: 15.5, lineHeight: 1.55, color: "var(--text-secondary)", margin: 0 }}>{v.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section style={{ padding: "clamp(48px,7vw,80px) 0" }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px,1fr))", gap: 28 }}>
            {[["2020", "Studio founded"], ["500+", "Workshops run"], ["50+", "PRODUCTS LAUNCHED"], ["∞", "Sticky notes"]].map(([v, l]) => (
              <div key={l}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(2.4rem,5vw,3.4rem)", letterSpacing: "-0.03em", lineHeight: 1, color: "var(--signal-500)" }}>{v}</div>
                <div style={{ marginTop: 8, fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)" }}>{l}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTABand />
    </SiteLayout>
  );
}
