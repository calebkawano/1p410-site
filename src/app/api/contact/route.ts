import { Resend } from "resend";

// the form is the only server surface on the site — always run it per request
export const dynamic = "force-dynamic";

const TO = process.env.CONTACT_TO_EMAIL ?? "therealcalebkawano@gmail.com";
const FROM = process.env.CONTACT_FROM_EMAIL ?? "1P410 <contact@1p410.net>";

const MAX_MESSAGE = 5000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("contact: RESEND_API_KEY is not set");
    return Response.json({ error: "Contact is offline." }, { status: 500 });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Malformed request." }, { status: 400 });
  }

  const { email, message, company } = (payload ?? {}) as Record<string, unknown>;

  // honeypot — real people never fill a hidden field
  if (typeof company === "string" && company.trim() !== "") {
    return Response.json({ ok: true });
  }

  if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    return Response.json({ error: "Enter a valid email." }, { status: 400 });
  }

  if (typeof message !== "string" || message.trim() === "") {
    return Response.json({ error: "Add a message." }, { status: 400 });
  }

  const from = email.trim();
  const body = message.trim().slice(0, MAX_MESSAGE);

  const resend = new Resend(apiKey);
  const { data, error } = await resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: from,
    subject: `1P410 contact — ${from}`,
    text: `From: ${from}\n\n${body}`,
    html: `<p><strong>From:</strong> ${escapeHtml(from)}</p><pre style="font:inherit;white-space:pre-wrap">${escapeHtml(body)}</pre>`,
  });

  if (error) {
    console.error("contact: resend rejected the send", error);
    return Response.json({ error: "Couldn't send that." }, { status: 502 });
  }

  return Response.json({ ok: true, id: data?.id });
}
