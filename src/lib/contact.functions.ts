import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const ContactInput = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  team: z.string().trim().max(40).optional().default("—"),
  interest: z.string().trim().max(80).optional().default("—"),
  message: z.string().trim().min(1).max(4000),
});

export const submitContactInquiry = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => ContactInput.parse(input))
  .handler(async ({ data }) => {
    const React = await import("react");
    const { render } = await import("@react-email/render");
    const { TEMPLATES } = await import("./email-templates/registry");
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const entry = TEMPLATES["contact-inquiry"];
    if (!entry?.to) {
      throw new Error("Contact inquiry template missing fixed recipient");
    }

    const messageId = crypto.randomUUID();
    const element = React.createElement(entry.component, data);
    const html = await render(element);
    const text = await render(element, { plainText: true });
    const subject =
      typeof entry.subject === "function" ? entry.subject(data) : entry.subject;

    await supabaseAdmin.from("email_send_log").insert({
      message_id: messageId,
      template_name: "contact-inquiry",
      recipient_email: entry.to,
      status: "pending",
    });

    // Get or create a persistent unsubscribe token for the fixed recipient.
    const normalized = entry.to.toLowerCase();
    let unsubscribeToken: string;
    const { data: existing, error: lookupErr } = await supabaseAdmin
      .from("email_unsubscribe_tokens")
      .select("token, used_at")
      .eq("email", normalized)
      .maybeSingle();
    if (lookupErr) console.error("[contact] token lookup error", lookupErr);
    if (existing && !existing.used_at) {
      unsubscribeToken = existing.token;
    } else {
      const bytes = new Uint8Array(32);
      crypto.getRandomValues(bytes);
      unsubscribeToken = Array.from(bytes).map((b) => b.toString(16).padStart(2, "0")).join("");
      const { error: upsertErr } = await supabaseAdmin
        .from("email_unsubscribe_tokens")
        .upsert({ token: unsubscribeToken, email: normalized }, { onConflict: "email" });
      if (upsertErr) console.error("[contact] token upsert error", upsertErr);
    }
    console.log("[contact] token ready len=", unsubscribeToken?.length);

    const { error } = await supabaseAdmin.rpc("enqueue_email", {
      queue_name: "transactional_emails",
      payload: {
        message_id: messageId,
        to: entry.to,
        from: `Salvo Innovation <noreply@notify.salvoinnovation.com>`,
        reply_to: data.email,
        sender_domain: "notify.salvoinnovation.com",
        subject,
        html,
        text,
        purpose: "transactional",
        label: "contact-inquiry",
        idempotency_key: messageId,
        unsubscribe_token: unsubscribeToken,
        queued_at: new Date().toISOString(),
      },
    });

    if (error) {
      await supabaseAdmin.from("email_send_log").insert({
        message_id: messageId,
        template_name: "contact-inquiry",
        recipient_email: entry.to,
        status: "failed",
        error_message: error.message,
      });
      throw new Error("Failed to send your message. Please try again or email hello@salvoinnovation.com directly.");
    }

    return { ok: true };
  });
