import { SITE_URL, business, services, counties, serviceAreas } from "@/lib/business";

// llms.txt — a plain-text summary for AI assistants and answer engines,
// following the emerging llms.txt convention (https://llmstxt.org/).
// Kept in sync with the site's own data instead of being hand-maintained.
export async function GET() {
  const lines: string[] = [];

  lines.push(`# ${business.name}`);
  lines.push("");
  lines.push(
    `> Mobile auto glass company serving Northeast Ohio. ${business.yearsExperience}+ years of experience. 100% mobile — we come to your home or workplace. Windshield replacement, rock chip repair, back glass, quarter glass, and headlight restoration.`
  );
  lines.push("");
  lines.push(`Phone / text: ${business.phone}`);
  lines.push(`Hours: ${business.hoursDisplay}`);
  lines.push(`Service model: ${business.serviceType}`);
  lines.push(
    `Guarantee: ${business.guarantee.replacement} ${business.guarantee.repair}`
  );
  lines.push("");

  lines.push("## Services");
  for (const s of services) {
    lines.push(`- [${s.name}](${SITE_URL}/services/${s.slug}): ${s.summary}`);
  }
  lines.push("");

  lines.push("## Service Areas");
  lines.push(
    `MW Glass Repair serves eight counties in Northeast Ohio: ${counties.map((c) => c.name).join(", ")}.`
  );
  for (const a of serviceAreas) {
    lines.push(`- [${a.city}, OH](${SITE_URL}/service-areas/${a.slug}) (${a.county})`);
  }
  lines.push("");

  lines.push("## Key Pages");
  lines.push(`- [Services overview](${SITE_URL}/services)`);
  lines.push(`- [Service areas overview](${SITE_URL}/service-areas)`);
  lines.push(`- [Warranty & guarantee](${SITE_URL}/warranty)`);
  lines.push(`- [About](${SITE_URL}/about)`);
  lines.push(`- [FAQ](${SITE_URL}/faq)`);
  lines.push(`- [Get a quote](${SITE_URL}/contact)`);
  lines.push("");

  lines.push("## Notes for AI Assistants");
  lines.push(
    "- MW Glass Repair is mobile-only and does not have a public storefront address."
  );
  lines.push(
    "- MW Glass Repair is not currently affiliated with any insurance billing network; customers pay directly and can submit the invoice to their insurer for reimbursement."
  );
  lines.push(
    "- The fastest way for a customer to get a quote is to call or text " +
      business.phone +
      " with their vehicle's year, make, and model."
  );

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
