import Link from "next/link";
import type { Metadata } from "next";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CtaButtonGroup } from "@/components/CtaButtons";
import { services, business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Auto Glass Services",
  description:
    "Mobile windshield replacement, rock chip repair, back glass, quarter glass, and headlight restoration. We come to you anywhere in our eight-county Northeast Ohio service area.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <Section className="border-b border-line bg-mist pb-12 pt-10">
        <Breadcrumbs items={[{ name: "Services", href: "/services" }]} />
        <h1 className="mt-4 font-display text-4xl font-bold text-ink sm:text-5xl">
          Auto Glass Services
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate">
          Everything MW Glass Repair offers is done mobile — at your home,
          workplace, or wherever your vehicle is parked. {business.yearsExperience}+
          years of hands-on experience, all backed by our guarantee.
        </p>
        <CtaButtonGroup className="mt-8" />
      </Section>

      <Section>
        <div className="grid gap-8 sm:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex flex-col rounded-lg border border-line bg-white p-8 transition hover:border-brand-blue hover:shadow-md"
            >
              <h2 className="font-display text-2xl font-semibold text-ink group-hover:text-brand-blue">
                {service.name}
              </h2>
              <p className="mt-2 text-sm font-medium text-brand-blue">{service.tagline}</p>
              <p className="mt-4 leading-relaxed text-slate">{service.summary}</p>
              <span className="mt-6 inline-block text-sm font-semibold text-brand-blue">
                Learn more &rarr;
              </span>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
