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

  const body = [
    `New quote request — ${business.name}`,
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Vehicle: ${vehicleYear} ${vehicleMake} ${vehicleModel}`,
    `Service: ${service}`,
    message ? `Notes: ${message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_FROM_NUMBER, TWILIO_TO_NUMBER } =
    process.env;

  if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN || !TWILIO_FROM_NUMBER || !TWILIO_TO_NUMBER) {
    // Twilio isn't configured yet (e.g. local dev). Log instead of failing
    // silently so the request is still visible somewhere.
    console.warn("[quote] Twilio env vars missing — logging lead instead of texting it:\n" + body);
    return Response.json({ ok: true, delivered: false });
  }

  const twilioUrl = `https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`;
  const basicAuth = Buffer.from(`${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`).toString("base64");

  const twilioRes = await fetch(twilioUrl, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basicAuth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      From: TWILIO_FROM_NUMBER,
      To: TWILIO_TO_NUMBER,
      Body: body,
    }),
  });

  if (!twilioRes.ok) {
    const errorText = await twilioRes.text().catch(() => "");
    console.error("[quote] Twilio send failed:", twilioRes.status, errorText);
    return Response.json(
      { error: "We couldn't send that automatically — please call or text us directly." },
      { status: 502 }
    );
  }

  return Response.json({ ok: true, delivered: true });
}
