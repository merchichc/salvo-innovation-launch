import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
import type { TemplateEntry } from "./registry";

export interface ContactInquiryProps {
  name?: string;
  email?: string;
  team?: string;
  interest?: string;
  message?: string;
}

export function ContactInquiry({
  name = "(no name)",
  email = "(no email)",
  team = "—",
  interest = "—",
  message = "",
}: ContactInquiryProps) {
  return (
    <Html>
      <Head />
      <Preview>New inquiry from {name} via salvoinnovation.com</Preview>
      <Body style={{ background: "#ffffff", fontFamily: "Helvetica, Arial, sans-serif", color: "#111" }}>
        <Container style={{ maxWidth: 560, padding: "32px 24px" }}>
          <Heading style={{ fontSize: 22, margin: "0 0 8px" }}>New Salvo inquiry</Heading>
          <Text style={{ color: "#666", margin: "0 0 24px" }}>From the Book a salvo form on salvoinnovation.com</Text>

          <Section style={{ border: "2px solid #111", borderRadius: 8, padding: 20 }}>
            <Row label="Name" value={name} />
            <Row label="Email" value={email} />
            <Row label="Team size" value={team} />
            <Row label="Interested in" value={interest} />
            <Hr style={{ borderColor: "#eee", margin: "16px 0" }} />
            <Text style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", color: "#666", margin: "0 0 6px" }}>
              What's stuck
            </Text>
            <Text style={{ fontSize: 15, lineHeight: 1.55, margin: 0, whiteSpace: "pre-wrap" }}>{message}</Text>
          </Section>

          <Text style={{ color: "#999", fontSize: 12, marginTop: 24 }}>
            Reply directly to this email to reach {name}.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <Text style={{ margin: "0 0 10px", fontSize: 15 }}>
      <strong style={{ display: "inline-block", minWidth: 110, color: "#666" }}>{label}:</strong>{" "}
      {value}
    </Text>
  );
}

export const template = {
  component: ContactInquiry,
  subject: (data: Record<string, any>) =>
    `New Salvo inquiry — ${data?.name || "Unknown"} (${data?.interest || "—"})`,
  displayName: "Contact inquiry notification",
  to: "hello@salvoinnovation.com",
  previewData: {
    name: "Jane Marlow",
    email: "jane@acme.com",
    team: "11–50",
    interest: "A workshop",
    message: "We can't agree on what to build next…",
  },
} satisfies TemplateEntry;
