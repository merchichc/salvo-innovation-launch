import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Zap, Target, Lightbulb, TrendingUp, Flag, Users, Layers, CheckCheck } from "lucide-react";
import { Container, Eyebrow, SectionHead, SiteLayout, CTABand, Photo } from "../components/site/SiteChrome";

export const Route = createFileRoute("/workshops")({
  head: () => ({
    meta: [
      { title: "Workshops — Salvo Innovation" },
      { name: "description", content: "The techniques behind the magic. Workshop exercises we run to turn debate into decisions, fast." },
      { property: "og:title", content: "Workshops — Salvo Innovation" },
      { property: "og:description", content: "Workshop techniques we use to turn debate into decisions, fast." },
    ],
  }),
  component: WorkshopsPage,
});

const TECHNIQUES = [
  { cat: "diverge", name: "Crazy 8s", dur: "8 min", group: "Any size", desc: "Eight ideas, eight minutes, one folded sheet. Quantity beats precious. Breaks the blank page every time.", Icon: Zap },
  { cat: "decide", name: "Dot voting", dur: "10 min", group: "3–30", desc: "Everyone gets dots, the wall makes the call. Silent, fast, and immune to the loudest voice in the room.", Icon: Target },
  { cat: "frame", name: "How Might We", dur: "15 min", group: "Any size", desc: "Turn problems and gripes into open, optimistic questions you can actually design against.", Icon: Lightbulb },
  { cat: "frame", name: "Lightning Demos", dur: "20 min", group: "4–12", desc: "Steal shamelessly. The team demos great solutions from anywhere, then we mine them for ideas.", Icon: TrendingUp },
  { cat: "decide", name: "The Decider", dur: "5 min", group: "Leadership", desc: "When consensus stalls, one named decider breaks the tie. Clarity beats comfortable ambiguity.", Icon: Flag },
  { cat: "diverge", name: "Note-and-Vote", dur: "12 min", group: "Any size", desc: "Generate solo, share together, vote silently. The fairest way to harvest a group's best thinking.", Icon: Users },
  { cat: "prototype", name: "Storyboarding", dur: "45 min", group: "4–10", desc: "Sketch the solution frame by frame before anyone builds a thing. Cheap to change, costly to skip.", Icon: Layers },
  { cat: "prototype", name: "Test with 5", dur: "1 day", group: "5 users", desc: "Five real users, one prototype, a wall of patterns. The fastest reality check you'll ever run.", Icon: CheckCheck },
];

const CATS = [
  { id: "all", label: "All" },
  { id: "frame", label: "Frame" },
  { id: "diverge", label: "Diverge" },
  { id: "decide", label: "Decide" },
  { id: "prototype", label: "Prototype" },
];

function WorkshopsPage() {
  const [cat, setCat] = useState("all");
  const shown = cat === "all" ? TECHNIQUES : TECHNIQUES.filter((t) => t.cat === cat);
  return (
    <SiteLayout>
      <section style={{ background: "var(--ink-900)", color: "var(--paper)", position: "relative", overflow: "hidden", borderBottom: "2px solid var(--ink-900)" }}>
        <img src="/brand/brand-stickies.svg" alt="" style={{ position: "absolute", right: -16, top: 24, width: "min(36vw, 360px)", opacity: 0.97, pointerEvents: "none" }} />
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
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 40, flexWrap: "wrap", gap: 8 }}>
            {CATS.map((c) => (
              <button key={c.id} onClick={() => setCat(c.id)} style={{ padding: "10px 18px", borderRadius: 999, border: "2px solid var(--ink-900)", background: cat === c.id ? "var(--ink-900)" : "var(--white)", color: cat === c.id ? "var(--paper)" : "var(--ink-900)", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 14, cursor: "pointer", boxShadow: cat === c.id ? "var(--shadow-hard-signal)" : "none" }}>
                {c.label}
              </button>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
            {shown.map((t) => (
              <div key={t.name} className="salvo-card salvo-card--interactive" style={{ padding: 26, display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: "var(--volt-500)", border: "2px solid var(--ink-900)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <t.Icon size={24} color="var(--ink-900)" />
                  </div>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--signal-600)" }}>{t.cat}</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, margin: "0 0 10px", letterSpacing: "-0.02em" }}>{t.name}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.55, color: "var(--text-secondary)", margin: "0 0 16px" }}>{t.desc}</p>
                <div style={{ marginTop: "auto", display: "flex", gap: 14, fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)" }}>
                  <span>{t.dur}</span><span>{t.group}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section style={{ padding: "clamp(56px,8vw,104px) 0", background: "var(--white)", borderTop: "2px solid var(--ink-900)" }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))", gap: 40, alignItems: "center" }}>
            <div>
              <SectionHead eyebrow="Bring us in" title="Want the whole playbook in your room?" intro="We design the agenda around your decision, run every minute of it, and leave your team with the artefacts and the momentum to keep going." />
              <div style={{ marginTop: 26, display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link to="/contact" className="salvo-btn salvo-btn--primary salvo-btn--lg">Book a workshop <ArrowRight size={18} /></Link>
                <Link to="/pricing" className="salvo-btn salvo-btn--secondary salvo-btn--lg">See pricing</Link>
              </div>
            </div>
            <Photo h={300} tone="signal" motif="burst-rays" label="Product sprint" />
          </div>
        </Container>
      </section>

      <CTABand />
    </SiteLayout>
  );
}
