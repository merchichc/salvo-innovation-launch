/* Contact screen — uses the Salvo form primitives. */
const { Button: CtButton, Input: CtInput, Textarea: CtTextarea, Select: CtSelect, Card: CtCard } = window.SalvoInnovationDesignSystem_cdc9ce;

function ContactScreen({ onNavigate }) {
  const [sent, setSent] = React.useState(false);
  const details = [
    { icon: "mail", label: "Email", value: "hello@salvo.studio" },
    { icon: "message-circle", label: "Response time", value: "Within 1 working day" },
    { icon: "map-pin", label: "Based in", value: "London · working worldwide" },
  ];
  return (
    <div>
      <section style={{ padding: "clamp(48px,7vw,88px) 0 clamp(56px,8vw,104px)", background: "var(--paper)" }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 44 }}>
            {/* Left: pitch + details */}
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
                      <Icon name={d.icon} size={20} color="var(--signal-500)" />
                    </div>
                    <div>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)" }}>{d.label}</div>
                      <div style={{ fontWeight: 700, fontSize: 16.5, color: "var(--ink-900)" }}>{d.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <CtCard variant="sticker" style={{ padding: "clamp(24px,4vw,36px)" }}>
              {sent ? (
                <div style={{ textAlign: "center", padding: "40px 10px" }}>
                  <div style={{ width: 64, height: 64, borderRadius: "50%", background: "var(--volt-500)", border: "2px solid var(--ink-900)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 22px" }}>
                    <Icon name="check" size={32} color="var(--ink-900)" stroke={3} />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 26, margin: "0 0 8px" }}>Message away.</h3>
                  <p style={{ color: "var(--text-secondary)", margin: "0 0 22px" }}>We'll be in touch within a working day. Keep an eye on your inbox.</p>
                  <CtButton variant="secondary" onClick={() => setSent(false)}>Send another</CtButton>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <CtInput id="c-name" label="Your name" placeholder="Jane Marlow" required />
                    <CtInput id="c-email" label="Work email" type="email" placeholder="jane@acme.com" required />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <CtSelect id="c-team" label="Team size" defaultValue="2–10"><option>Just me</option><option>2–10</option><option>11–50</option><option>50+</option></CtSelect>
                    <CtSelect id="c-int" label="Interested in" defaultValue="A workshop"><option>A workshop</option><option>Product consulting</option><option>Ongoing (Fleet)</option><option>Not sure yet</option></CtSelect>
                  </div>
                  <CtTextarea id="c-msg" label="What's stuck?" rows={4} placeholder="We can't agree on what to build next…" required />
                  <CtButton variant="primary" size="lg" type="submit" fullWidth iconRight={<Icon name="arrow-right" size={18} />}>Send it</CtButton>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, color: "var(--text-muted)", textAlign: "center", margin: 0 }}>No spam. No 80-slide readouts. Just a fast, human reply.</p>
                </form>
              )}
            </CtCard>
          </div>
        </Container>
      </section>
    </div>
  );
}

Object.assign(window, { ContactScreen });
