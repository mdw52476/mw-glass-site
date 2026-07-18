import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqList from "@/components/FaqList";
import JsonLd from "@/components/JsonLd";
import { CtaButtonGroup } from "@/components/CtaButtons";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { services, getServiceBySlug, business, counties } from "@/lib/business";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      <JsonLd data={faqSchema(service.faqs)} />

      <Section className="border-b border-line bg-mist pb-12 pt-10">
        <Breadcrumbs
          items={[
            { name: "Services", href: "/services" },
            { name: service.name, href: `/services/${service.slug}` },
          ]}
        />
        <h1 className="mt-4 font-display text-4xl font-bold text-ink sm:text-5xl">
          {service.name}
        </h1>
        <p className="mt-3 text-lg font-medium text-brand-blue">{service.tagline}</p>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate">{service.summary}</p>
        <CtaButtonGroup className="mt-8" />
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">What&apos;s Included</h2>
            <ul className="mt-6 space-y-4">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <CheckIcon />
                  <span className="text-slate">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">How It Works</h2>
            <ol className="mt-6 space-y-6">
              {service.process.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-ink">{step.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section className="border-t border-line bg-mist">
        <h2 className="font-display text-3xl font-bold text-ink">
          {service.name} — Frequently Asked Questions
        </h2>
        <div className="mt-8 max-w-3xl">
          <FaqList faqs={service.faqs} />
        </div>
      </Section>

      <Section className="border-t border-line bg-mist">
        <h2 className="font-display text-2xl font-bold text-ink">
          Available Anywhere In Our Service Area
        </h2>
        <p className="mt-3 max-w-2xl text-slate">
          {service.name} is available across all eight counties we serve.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {counties.map((c) => (
            <Link
              key={c.slug}
              href={`/service-areas/${c.slug}`}
              className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink hover:border-brand-blue hover:text-brand-blue"
            >
              {c.name}, OH
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="font-display text-2xl font-bold text-ink">Other Services</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherServices.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="rounded-lg border border-line p-5 transition hover:border-brand-blue hover:shadow-sm"
            >
              <p className="font-display text-lg font-semibold text-ink">{s.name}</p>
              <p className="mt-1 text-sm text-slate">{s.tagline}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="border-t border-line bg-ink text-center">
        <h2 className="font-display text-3xl font-bold text-white">
          Ready to schedule your {service.shortName.toLowerCase()}?
        </h2>
        <p className="mt-3 text-white/70">
          Call or text {business.phone} for a free quote, Monday through Friday.
        </p>
        <div className="mt-8 flex justify-center">
          <CtaButtonGroup light />
        </div>
      </Section>
    </>
  );
}

function CheckIcon() {
  return (
    <svg
      className="mt-1 h-5 w-5 shrink-0 text-brand-blue"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}
