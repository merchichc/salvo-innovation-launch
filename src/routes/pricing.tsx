import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { Container, Eyebrow, SectionHead, SiteLayout, CTABand } from "../components/site/SiteChrome";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Salvo Innovation" },
      { name: "description", content: "Clear prices, no surprises. Spark workshops, Salvo sprints, and Fleet ongoing engagements." },
      { property: "og:title", content: "Pricing — Salvo Innovation" },
      { property: "og:description", content: "Spark workshops, Salvo sprints, and Fleet ongoing engagements." },
    ],
  }),
  component: PricingPage,
});

const TIERS = [
  { name: "Spark", price: "$5k", unit: "/ session", tag: "Single workshop", desc: "One sharp, facilitated session to break a specific logjam.", features: ["Half- or full-day workshop", "Agenda designed around your decision", "Facilitation + digital whiteboard", "Outcomes summary next day"], cta: "Book a Spark", highlight: false },
  { name: "Salvo", price: "$15k", unit: "/ sprint", tag: "Most popular", desc: "The full product sprint — from fuzzy problem to a custom, tested prototype.", features: ["Full product sprint", "Pre-sprint scoping & recruiting", "A custom prototype + 5 user tests", "Decision, artefacts & next steps", "2-week follow-up check-in"], cta: "Book a Salvo", highlight: true },
  { name: "Fleet", price: "Custom", unit: "", tag: "Ongoing", desc: "Embedded consulting and a cadence of workshops over months.", features: ["Fractional product leadership", "Recurring strategy & sprint cadence", "Team facilitation coaching", "Quarterly roadmap resets"], cta: "Talk to us", highlight: false },
];

const FAQS = [
  { id: "p1", q: "What's not included?", a: "Travel and venue for in-person sessions are billed at cost. Everything else — design, facilitation, tools, write-ups — is in the price." },
  { id: "p2", q: "Can we mix consulting and workshops?", a: "That's exactly what Fleet is for. We'll shape a cadence that fits how your team actually works." },
  { id: "p3", q: "Do you offer a guarantee?", a: "If you finish a Salvo sprint and don't have a clear decision and a tested prototype, we'll make it right. That's never happened, but the promise stands." },
];

function PricingPage() {
  const [open, setOpen] = useState<Set<string>>(new Set(["p1"]));
  return (
    <SiteLayout>
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
            {TIERS.map((t) => (
              <div key={t.name} className={`salvo-card${t.highlight ? " salvo-card--ink" : ""}`} style={{ padding: 32, display: "flex", flexDirection: "column", position: "relative", boxShadow: t.highlight ? "6px 6px 0 var(--signal-500)" : "var(--shadow-hard)" }}>
                {t.highlight && (
                  <span style={{ position: "absolute", top: -14, right: 22, background: "var(--signal-500)", color: "#fff", border: "2px solid var(--ink-900)", borderRadius: 999, padding: "5px 12px", fontFamily: "var(--font-mono)", fontSize: 10.5, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>Most popular</span>
                )}
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
                      <Check size={18} color="var(--signal-500)" strokeWidth={3} style={{ flex: "none", marginTop: 1 }} />{f}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: 26 }}>
                  <Link to="/contact" className={`salvo-btn salvo-btn--md salvo-btn--full ${t.highlight ? "salvo-btn--volt" : "salvo-btn--primary"}`}>{t.cta}</Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section style={{ padding: "clamp(48px,7vw,88px) 0", background: "var(--white)", borderTop: "2px solid var(--ink-900)" }}>
        <Container size="narrow">
          <SectionHead align="center" eyebrow="Pricing FAQ" title="Before you ask" />
          <div style={{ marginTop: 30, borderTop: "2px solid var(--ink-900)" }}>
            {FAQS.map((it) => {
              const isOpen = open.has(it.id);
              return (
                <div key={it.id} style={{ borderBottom: "2px solid var(--ink-900)" }}>
                  <button onClick={() => { const n = new Set(open); if (isOpen) n.delete(it.id); else n.add(it.id); setOpen(n); }} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 4px", background: "none", border: "none", cursor: "pointer", textAlign: "left", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 19, color: "var(--ink-900)" }}>
                    <span>{it.q}</span>
                    <ChevronDown size={22} style={{ transition: "transform 200ms var(--ease-out)", transform: isOpen ? "rotate(180deg)" : "rotate(0)" }} />
                  </button>
                  {isOpen && <div style={{ padding: "0 4px 22px", fontSize: 16.5, lineHeight: 1.6, color: "var(--text-secondary)" }}>{it.a}</div>}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <CTABand />
    </SiteLayout>
  );
}
