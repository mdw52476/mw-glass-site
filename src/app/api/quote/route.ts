import { business } from "@/lib/business";

type QuotePayload = {
  name?: string;
  phone?: string;
  vehicleYear?: string;
  vehicleMake?: string;
  vehicleModel?: string;
  service?: string;
  message?: string;
  company?: string; // honeypot
};

function sanitize(value: unknown, maxLength = 500): string {
  return String(value ?? "")
    .trim()
    .slice(0, maxLength);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let payload: QuotePayload;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields. Pretend success without sending anything.
  if (payload.company) {
    return Response.json({ ok: true });
  }

  const name = sanitize(payload.name, 100);
  const phone = sanitize(payload.phone, 30);
  const vehicleYear = sanitize(payload.vehicleYear, 10);
  const vehicleMake = sanitize(payload.vehicleMake, 50);
  const vehicleModel = sanitize(payload.vehicleModel, 50);
  const service = sanitize(payload.service, 100);
  const message = sanitize(payload.message, 800);

  if (!name || !phone || !vehicleYear || !vehicleMake || !vehicleModel || !service) {
    return Response.json({ error: "Please fill out all required fields." }, { status: 400 });
  }

  const rows: [string, string][] = [
    ["Name", name],
    ["Phone", phone],
    ["Vehicle", `${vehicleYear} ${vehicleMake} ${vehicleModel}`],
    ["Service", service],
  ];
  if (message) rows.push(["Notes", message]);

  const textBody = [
    `New quote request - ${business.name}`,
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
  ].join("\n");

  const htmlBody = `
    <h2 style="font-family:sans-serif;">New quote request - ${escapeHtml(business.name)}</h2>
    <table style="font-family:sans-serif;font-size:15px;border-collapse:collapse;">
      ${rows
        .map(
          ([label, value]) => `
        <tr>
          <td style="padding:4px 12px 4px 0;color:#4b5563;vertical-align:top;">${escapeHtml(label)}</td>
          <td style="padding:4px 0;color:#0f1720;white-space:pre-wrap;">${escapeHtml(value)}</td>
        </tr>`
        )
        .join("")}
    </table>
  `;

  const { RESEND_API_KEY, LEAD_TO_EMAIL } = process.env;

  if (!RESEND_API_KEY || !LEAD_TO_EMAIL) {
    // Resend isn't configured yet (e.g. local dev). Log instead of failing
    // silently so the request is still visible somewhere.
    console.warn("[quote] Resend env vars missing — logging lead instead of emailing it:\n" + textBody);
    return Response.json({ ok: true, delivered: false });
  }

  const resendRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `${business.name} <onboarding@resend.dev>`,
      to: [LEAD_TO_EMAIL],
      subject: `New quote request - ${name} (${vehicleYear} ${vehicleMake} ${vehicleModel})`,
      text: textBody,
      html: htmlBody,
    }),
  });

  if (!resendRes.ok) {
    const errorText = await resendRes.text().catch(() => "");
    console.error("[quote] Resend send failed:", resendRes.status, errorText);
    return Response.json(
      { error: "We couldn't send that automatically — please call or text us directly." },
      { status: 502 }
    );
  }

  return Response.json({ ok: true, delivered: true });
}
