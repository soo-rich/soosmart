import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  phone: z.string().optional(),
  subject: z.string().min(3),
  message: z.string().min(20),
  locale: z.string(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    // Using Resend for email
    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      // Fallback: log for dev, still return success
      console.log("📧 Contact form submission:", data);
      return NextResponse.json({ success: true });
    }

    const emailHtml = `
      <div style="font-family: 'JetBrains Mono', monospace; max-width: 600px; margin: 0 auto; background: #080C14; color: #e2e8f0; padding: 32px; border-radius: 12px; border: 1px solid rgba(0,229,255,0.2);">
        <div style="border-bottom: 1px solid rgba(0,229,255,0.2); padding-bottom: 20px; margin-bottom: 24px;">
          <h1 style="color: #00E5FF; font-size: 20px; margin: 0;">SOOSMART GROUP</h1>
          <p style="color: #64748b; margin: 4px 0 0; font-size: 12px;">Nouveau message de contact</p>
        </div>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #64748b; font-size: 12px; width: 120px;">Nom</td><td style="color: #e2e8f0;">${data.name}</td></tr>
          <tr><td style="padding: 8px 0; color: #64748b; font-size: 12px;">Email</td><td><a href="mailto:${data.email}" style="color: #00E5FF;">${data.email}</a></td></tr>
          ${data.company ? `<tr><td style="padding: 8px 0; color: #64748b; font-size: 12px;">Entreprise</td><td style="color: #e2e8f0;">${data.company}</td></tr>` : ""}
          ${data.phone ? `<tr><td style="padding: 8px 0; color: #64748b; font-size: 12px;">Téléphone</td><td style="color: #e2e8f0;">${data.phone}</td></tr>` : ""}
          <tr><td style="padding: 8px 0; color: #64748b; font-size: 12px;">Sujet</td><td style="color: #e2e8f0; font-weight: bold;">${data.subject}</td></tr>
        </table>
        <div style="margin-top: 24px; padding: 20px; background: rgba(0,229,255,0.05); border-radius: 8px; border: 1px solid rgba(0,229,255,0.1);">
          <p style="color: #64748b; font-size: 12px; margin: 0 0 8px;">Message</p>
          <p style="color: #e2e8f0; line-height: 1.6; margin: 0; white-space: pre-wrap;">${data.message}</p>
        </div>
      </div>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "SOOSMART GROUP <noreply@soosmart.group>",
        to: ["contact@soosmart.group"],
        reply_to: data.email,
        subject: `[Contact] ${data.subject} — ${data.name}`,
        html: emailHtml,
      }),
    });

    if (!res.ok) throw new Error("Resend error");

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
