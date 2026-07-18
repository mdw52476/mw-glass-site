import Link from "next/link";
import type { Metadata } from "next";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CtaButtonGroup } from "@/components/CtaButtons";
import { counties, serviceAreas } from "@/lib/business";

export const metadata: Metadata = {
  title: "Service Areas — Northeast Ohio",
  description:
    "MW Glass Repair provides mobile windshield replacement and auto glass repair across Stark, Summit, Wayne, Medina, Holmes, Ashland, Carroll, and Portage counties, Ohio.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasPage() {
  return (
    <>
      <Section className="border-b border-line bg-mist pb-12 pt-10">
        <Breadcrumbs items={[{ name: "Service Areas", href: "/service-areas" }]} />
        <h1 className="mt-4 font-display text-4xl font-bold text-ink sm:text-5xl">
          Where We Work
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate">
          MW Glass Repair is a mobile-only auto glass company covering eight
          counties across Northeast Ohio. If you&apos;re in one of the areas
          below, we&apos;ll come straight to you — home, work, or wherever
          your vehicle is parked.
        </p>
        <CtaButtonGroup className="mt-8" />
      </Section>

      <Section>
        <div className="space-y-14">
          {counties.map((county) => {
            const dedicated = serviceAreas.filter((a) => a.countySlug === county.slug);
            return (
              <div key={county.slug} id={county.slug}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="font-display text-2xl font-bold text-ink">
                    <Link href={`/service-areas/${county.slug}`} className="hover:text-brand-blue">
                      {county.name}, Ohio
                    </Link>
                  </h2>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {county.cities.map((city) => {
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
              </div>
            );
          })}
        </div>
        <p className="mt-12 text-sm text-slate">
          Don&apos;t see your city listed? If you&apos;re anywhere near these
          eight counties, call or text (330) 305-2643 — there&apos;s a good
          chance we still cover you.
        </p>
      </Section>
    </>
  );
}
