import type { Metadata } from "next";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuoteForm from "@/components/QuoteForm";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Contact & Free Quote",
  description:
    "Get a free mobile windshield replacement or auto glass repair quote. Call or text (330) 305-2643, or send your vehicle details online.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <Section className="pb-20 pt-10">
      <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />
      <div className="mt-4 grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <h1 className="font-display text-4xl font-bold text-ink">Get a Free Quote</h1>
          <p className="mt-4 leading-relaxed text-slate">
            Tell us about your vehicle and the damage, and we&apos;ll get
            back to you with a quote — usually the same business day.
          </p>

          <div className="mt-8 space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-slate">
                Call or Text
              </p>
              <a
                href={business.phoneHref}
                className="mt-1 block text-2xl font-semibold text-brand-blue hover:text-brand-blue-dark"
              >
                {business.phone}
              </a>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-slate">Hours</p>
              <p className="mt-1 text-ink">{business.hoursDisplay}</p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-slate">
                Service Area
              </p>
              <p className="mt-1 text-ink">
                Stark, Summit, Wayne, Medina, Holmes, Ashland, Carroll &amp;
                Portage counties, Ohio
              </p>
              <p className="mt-1 text-sm text-slate">{business.serviceType}</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-line bg-mist p-6 sm:p-8 lg:col-span-3">
          <QuoteForm />
        </div>
      </div>
    </Section>
  );
}
