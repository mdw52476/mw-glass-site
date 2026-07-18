import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqList from "@/components/FaqList";
import JsonLd from "@/components/JsonLd";
import { CtaButtonGroup } from "@/components/CtaButtons";
import { faqSchema, localAreaSchema } from "@/lib/schema";
import {
  counties,
  serviceAreas,
  services,
  business,
  getAreaBySlug,
  getCountyBySlug,
} from "@/lib/business";

export function generateStaticParams() {
  return [
    ...counties.map((c) => ({ slug: c.slug })),
    ...serviceAreas.map((a) => ({ slug: a.slug })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  const county = getCountyBySlug(slug);

  if (area) {
    return {
      title: `Mobile Windshield Replacement in ${area.city}, OH`,
      description: `Mobile windshield replacement, rock chip repair, and auto glass service in ${area.city}, ${area.county}, Ohio. We come to you — call or text (330) 305-2643.`,
      alternates: { canonical: `/service-areas/${area.slug}` },
    };
  }
  if (county) {
    return {
      title: `Auto Glass Service in ${county.name}, Ohio`,
      description: `Mobile windshield replacement and auto glass repair throughout ${county.name}, Ohio — serving ${county.cities.slice(0, 4).join(", ")}, and more.`,
      alternates: { canonical: `/service-areas/${county.slug}` },
    };
  }
  return {};
}

function areaFaqs(cityOrCounty: string) {
  return [
    {
      question: `Does MW Glass Repair really come to ${cityOrCounty}?`,
      answer: `Yes. We're a 100% mobile auto glass company — we'll come directly to your home, workplace, or wherever your vehicle is in ${cityOrCounty}, no shop visit required.`,
    },
    {
      question: "How do I get a quote?",
      answer: `Call or text ${business.phone} with your vehicle's year, make, and model, along with a description or photo of the damage. Most quotes take just a few minutes.`,
    },
    {
      question: "What are your hours?",
      answer: `We book mobile appointments ${business.hoursDisplay}.`,
    },
  ];
}

export default async function ServiceAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  const county = getCountyBySlug(slug);

  if (!area && !county) notFound();

  if (area) {
    const faqs = areaFaqs(area.city);
    return (
      <>
        <JsonLd data={localAreaSchema(area)} />
        <JsonLd data={faqSchema(faqs)} />

        <Section className="border-b border-line bg-mist pb-12 pt-10">
          <Breadcrumbs
            items={[
              { name: "Service Areas", href: "/service-areas" },
              { name: area.county, href: `/service-areas/${area.countySlug}` },
              { name: area.city, href: `/service-areas/${area.slug}` },
            ]}
          />
          <h1 className="mt-4 font-display text-4xl font-bold text-ink sm:text-5xl">
            Mobile Windshield Replacement in {area.city}, Ohio
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate">
            {area.intro}
          </p>
          <CtaButtonGroup className="mt-8" />
        </Section>

        <Section>
          <h2 className="font-display text-2xl font-bold text-ink">
            Services Available in {area.city}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="rounded-lg border border-line p-5 transition hover:border-brand-blue hover:shadow-sm"
              >
                <p className="font-display font-semibold text-ink">{s.name}</p>
                <p className="mt-1 text-sm text-slate">{s.tagline}</p>
              </Link>
            ))}
          </div>
        </Section>

        <Section className="border-t border-line bg-mist">
          <h2 className="font-display text-2xl font-bold text-ink">
            Also Serving Nearby
          </h2>
          <p className="mt-3 text-slate">
            In addition to {area.city}, we regularly work in:
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {area.nearby.map((n) => (
              <span
                key={n}
                className="rounded-full border border-line bg-white px-4 py-1.5 text-sm text-slate"
              >
                {n}
              </span>
            ))}
          </div>
          <p className="mt-6">
            <Link
              href={`/service-areas/${area.countySlug}`}
              className="text-sm font-semibold text-brand-blue hover:text-brand-blue-dark"
            >
              See all of {area.county} &rarr;
            </Link>
          </p>
        </Section>

        <Section>
          <h2 className="font-display text-2xl font-bold text-ink">
            {area.city} — Frequently Asked Questions
          </h2>
          <div className="mt-8 max-w-3xl">
            <FaqList faqs={faqs} />
          </div>
        </Section>

        <Section className="border-t border-line bg-ink text-center">
          <h2 className="font-display text-3xl font-bold text-white">
            Get a free quote in {area.city}
          </h2>
          <p className="mt-3 text-white/70">
            Call or text {business.phone} — {business.hoursDisplay}.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaButtonGroup light />
          </div>
        </Section>
      </>
    );
  }

  // County page
  const dedicated = serviceAreas.filter((a) => a.countySlug === county!.slug);
  const faqs = areaFaqs(`${county!.name}`);

  return (
    <>
      <JsonLd data={faqSchema(faqs)} />

      <Section className="border-b border-line bg-mist pb-12 pt-10">
        <Breadcrumbs
          items={[
            { name: "Service Areas", href: "/service-areas" },
            { name: county!.name, href: `/service-areas/${county!.slug}` },
          ]}
        />
        <h1 className="mt-4 font-display text-4xl font-bold text-ink sm:text-5xl">
          Mobile Auto Glass in {county!.name}, Ohio
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate">
          MW Glass Repair provides mobile windshield replacement, rock chip
          repair, back glass, quarter glass, and headlight restoration
          throughout {county!.name} — including {county!.cities.slice(0, 5).join(", ")},
          and the surrounding area. We come to you, {business.hoursDisplay.toLowerCase()}.
        </p>
        <CtaButtonGroup className="mt-8" />
      </Section>

      <Section>
        <h2 className="font-display text-2xl font-bold text-ink">
          Cities &amp; Communities We Serve in {county!.name}
        </h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {county!.cities.map((city) => {
            const match = dedicated.find((a) => a.city === city);
            return match ? (
              <Link
                key={city}
                href={`/service-areas/${match.slug}`}
                className="rounded-full border border-brand-blue bg-brand-blue-light px-4 py-1.5 text-sm font-medium text-brand-blue-dark hover:bg-brand-blue hover:text-white"
              >
                {city}
              </Link>
            ) : (
              <span
                key={city}
                className="rounded-full border border-line bg-white px-4 py-1.5 text-sm text-slate"
              >
                {city}
              </span>
            );
          })}
        </div>
      </Section>

      <Section className="border-t border-line bg-mist">
        <h2 className="font-display text-2xl font-bold text-ink">Our Services</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="rounded-lg border border-line bg-white p-5 transition hover:border-brand-blue hover:shadow-sm"
            >
              <p className="font-display font-semibold text-ink">{s.name}</p>
              <p className="mt-1 text-sm text-slate">{s.tagline}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="font-display text-2xl font-bold text-ink">
          {county!.name} — Frequently Asked Questions
        </h2>
        <div className="mt-8 max-w-3xl">
          <FaqList faqs={faqs} />
        </div>
      </Section>

      <Section className="border-t border-line bg-ink text-center">
        <h2 className="font-display text-3xl font-bold text-white">
          Get a free quote in {county!.name}
        </h2>
        <p className="mt-3 text-white/70">
          Call or text {business.phone} — {business.hoursDisplay}.
        </p>
        <div className="mt-8 flex justify-center">
          <CtaButtonGroup light />
        </div>
      </Section>
    </>
  );
}
