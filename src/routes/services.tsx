import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { Container, Eyebrow, SectionHead, SiteLayout, CTABand, Photo } from "../components/site/SiteChrome";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Salvo Innovation" },
      { name: "description", content: "Product consulting and workshop facilitation. Two service lines that get your product moving and keep it moving." },
      { property: "og:title", content: "Services — Salvo Innovation" },
      { property: "og:description", content: "Product consulting and workshop facilitation. Two service lines that get your product moving." },
      { property: "og:url", content: "https://salvoinnovation.com/services" },
    ],
    links: [{ rel: "canonical", href: "https://salvoinnovation.com/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: ServicesPage,
});


type Line = { tag: string; title: string; lead: string; body: string; items: string[]; dark: boolean };

const LINES: Line[] = [
  { tag: "01 — Consulting", title: "Digital product consulting", lead: "For products that have lost their bearings.", body: "We embed with your team to find the next right thing to build. Strategy that survives contact with reality, discovery that kills bad bets early, and a roadmap your whole org can rally behind.", items: ["Product & portfolio strategy", "Discovery & customer research", "Roadmap & prioritisation", "Fractional product leadership"], dark: false },
  { tag: "02 — Facilitation", title: "Workshop design & facilitation", lead: "For decisions that have to happen now.", body: "We design and run high-energy sessions that get a room to a real decision — fast. You bring the people who can decide; we bring the structure, the momentum, and a custom, tested prototype to show for it.", items: ["Product sprints", "A custom, tested prototype", "Strategy & alignment days", "Discovery & kickoff workshops"], dark: true },
];

const FAQS = [
  { id: "f1", q: "Do you work with startups or only big companies?", a: "Both. We've run sprints for three-person startups and alignment days for 200-person product orgs. The format flexes; the energy doesn't." },
  { id: "f2", q: "Remote, in person, or hybrid?", a: "All three. Our remote sessions are designed for remote — not an in-person workshop bolted onto a video call." },
  { id: "f3", q: "How quickly can you start?", a: "Most engagements kick off within two weeks. A single workshop can often be booked sooner." },
  { id: "f4", q: "What do we actually walk away with?", a: "A decision, the artefacts behind it, and a clear next step. Usually a tested prototype or a one-page plan — never an 80-slide readout." },
];

function FAQ({ items, defaultOpen = [] }: { items: typeof FAQS; defaultOpen?: string[] }) {
  const [open, setOpen] = useState<Set<string>>(new Set(defaultOpen));
  return (
    <div style={{ borderTop: "2px solid var(--ink-900)" }}>
      {items.map((it) => {
        const isOpen = open.has(it.id);
        return (
          <div key={it.id} style={{ borderBottom: "2px solid var(--ink-900)" }}>
            <button
              onClick={() => {
                const next = new Set(open);
                if (isOpen) next.delete(it.id); else next.add(it.id);
                setOpen(next);
              }}
              style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 4px", background: "none", border: "none", cursor: "pointer", textAlign: "left", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 19, color: "var(--ink-900)", letterSpacing: "-0.01em" }}
            >
              <span>{it.q}</span>
              <ChevronDown size={22} style={{ transition: "transform 200ms var(--ease-out)", transform: isOpen ? "rotate(180deg)" : "rotate(0)" }} />
            </button>
            {isOpen && (
              <div style={{ padding: "0 4px 22px", fontSize: 16.5, lineHeight: 1.6, color: "var(--text-secondary)" }}>{it.a}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function ServicesPage() {
  return (
    <SiteLayout>
      <section style={{ background: "var(--paper)", position: "relative", overflow: "hidden", borderBottom: "2px solid var(--ink-900)" }}>
        <img src="/brand/brand-stickies.svg" alt="" style={{ position: "absolute", right: -10, bottom: -24, width: "min(40vw, 400px)", opacity: 0.97, pointerEvents: "none" }} />
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
            {LINES.map((l, idx) => (
              <div key={l.tag} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 36, alignItems: "center" }}>
                <div style={{ order: idx % 2 ? 2 : 1 }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--signal-600)" }}>{l.tag}</div>
                  <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(2rem,4vw,2.8rem)", letterSpacing: "-0.03em", lineHeight: 1.04, margin: "12px 0 6px" }}>{l.title}</h2>
                  <p style={{ fontSize: 19, fontWeight: 700, color: "var(--signal-600)", margin: "0 0 12px" }}>{l.lead}</p>
                  <p style={{ fontSize: 16.5, lineHeight: 1.6, color: "var(--text-secondary)", maxWidth: "50ch" }}>{l.body}</p>
                  <div style={{ marginTop: 20, display: "flex", flexWrap: "wrap", gap: 10 }}>
                    {l.items.map((it) => (
                      <span key={it} style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1.5px solid var(--ink-900)", borderRadius: 999, padding: "7px 14px", fontSize: 14.5, fontWeight: 600 }}>
                        <Check size={15} color="var(--signal-500)" strokeWidth={3} />{it}
                      </span>
                    ))}
                  </div>
                </div>
                <div style={{ order: idx % 2 ? 1 : 2 }}>
                  <Photo h={300} tone={l.dark ? "ink" : "signal"} motif={l.dark ? "ripple" : "burst-rays"} label={l.title} />
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
            <FAQ items={FAQS} defaultOpen={["f1"]} />
          </div>
        </Container>
      </section>

      <CTABand />
    </SiteLayout>
  );
}
