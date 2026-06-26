import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, Check, Mail, MessageCircle, MapPin } from "lucide-react";
import { Container, Eyebrow, SiteLayout } from "../components/site/SiteChrome";
import { submitContactInquiry } from "@/lib/contact.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Salvo Innovation" },
      { name: "description", content: "Tell us what's stuck. A sentence or two is plenty to start — we'll reply within a working day." },
      { property: "og:title", content: "Contact — Salvo Innovation" },
      { property: "og:description", content: "Tell us what's stuck. We'll reply within a working day." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const details = [
    { Icon: Mail, label: "Email", value: "hello@salvoinnovation.com" },
    { Icon: MessageCircle, label: "Response time", value: "Within 1 working day" },
    { Icon: MapPin, label: "Based in", value: "Working worldwide" },
  ];
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const fd = new FormData(e.currentTarget);
    try {
      await submitContactInquiry({
        data: {
          name: String(fd.get("name") || ""),
          email: String(fd.get("email") || ""),
          team: String(fd.get("team") || ""),
          interest: String(fd.get("interest") || ""),
          message: String(fd.get("message") || ""),
        },
      });
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <SiteLayout>
      <section style={{ padding: "clamp(48px,7vw,88px) 0 clamp(56px,8vw,104px)", background: "var(--paper)" }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 44 }}>
            <div>
              <Eyebrow>Book a salvo</Eyebrow>
              <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(2.4rem,5vw,4rem)", lineHeight: 0.99, letterSpacing: "-0.035em", margin: "18px 0 0" }}>Tell us what's stuck.</h1>
              <p style={{ marginTop: 20, fontSize: 19, lineHeight: 1.55, color: "var(--text-secondary)", maxWidth: "44ch" }}>
                A sentence or two is plenty to start. We'll reply with the fastest way through — and whether a workshop or a longer engagement fits.
              </p>
              <div style={{ marginTop: 36, display: "flex", flexDirection: "column", gap: 18 }}>
                {details.map((d) => (
                  <div key={d.label} style={{ display: "flex", gap: 14, alignItems: "center" }}>
                    <div style={{ width: 46, height: 46, borderRadius: 12, background: "var(--white)", border: "2px solid var(--ink-900)", boxShadow: "var(--shadow-hard)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                      <d.Icon size={20} color="var(--signal-500)" />
                    </div>
                    <div>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)" }}>{d.label}</div>
                      <div style={{ fontWeight: 700, fontSize: 16.5, color: "var(--ink-900)" }}>{d.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="salvo-card" style={{ padding: "clamp(24px,4vw,36px)" }}>
              {sent ? (
                <div style={{ textAlign: "center", padding: "40px 10px" }}>
                  <div style={{ width: 64, height: 64, borderRadius: "50%", background: "var(--volt-500)", border: "2px solid var(--ink-900)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 22px" }}>
                    <Check size={32} color="var(--ink-900)" strokeWidth={3} />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 26, margin: "0 0 8px" }}>Message away.</h3>
                  <p style={{ color: "var(--text-secondary)", margin: "0 0 22px" }}>We'll be in touch within a working day. Keep an eye on your inbox.</p>
                  <button type="button" onClick={() => setSent(false)} className="salvo-btn salvo-btn--secondary salvo-btn--md">Send another</button>
                </div>
              ) : (
                <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <Field label="Your name"><input className="salvo-input" name="name" placeholder="Jane Marlow" required /></Field>
                    <Field label="Work email"><input className="salvo-input" name="email" type="email" placeholder="jane@acme.com" required /></Field>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <Field label="Team size">
                      <select className="salvo-select" defaultValue="2–10" name="team">
                        <option>Just me</option><option>2–10</option><option>11–50</option><option>50+</option>
                      </select>
                    </Field>
                    <Field label="Interested in">
                      <select className="salvo-select" defaultValue="A workshop" name="interest">
                        <option>A workshop</option><option>Product consulting</option><option>Ongoing (Fleet)</option><option>Not sure yet</option>
                      </select>
                    </Field>
                  </div>
                  <Field label="What's stuck?"><textarea className="salvo-textarea" name="message" rows={4} placeholder="We can't agree on what to build next…" required /></Field>
                  <button type="submit" disabled={submitting} className="salvo-btn salvo-btn--primary salvo-btn--lg salvo-btn--full">
                    {submitting ? "Sending…" : <>Send it <ArrowRight size={18} /></>}
                  </button>
                  {error && <p style={{ color: "var(--signal-500)", fontSize: 13, textAlign: "center", margin: 0 }}>{error}</p>}
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, color: "var(--text-muted)", textAlign: "center", margin: 0 }}>No spam. No 80-slide readouts. Just a fast, human reply.</p>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>
    </SiteLayout>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label style={{ display: "block" }}>
      <span className="salvo-label">{label}</span>
      {children}
    </label>
  );
}
