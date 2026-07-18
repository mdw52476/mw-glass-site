import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqList from "@/components/FaqList";
import JsonLd from "@/components/JsonLd";
import { CtaButtonGroup } from "@/components/CtaButtons";
import { faqSchema } from "@/lib/schema";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Our Warranty & Guarantee",
  description:
    "Every windshield MW Glass Repair installs is guaranteed against stress cracks and leaks. Every rock chip repair is fully guaranteed. Here's what that means.",
  alternates: { canonical: "/warranty" },
};

const warrantyFaqs = [
  {
    question: "What does 'guaranteed against stress cracks and leaks' mean?",
    answer:
      "It means that if a windshield we installed develops a stress crack from the installation itself, or if it leaks around the seal we set, we'll make it right. Call (330) 305-2643 and we'll take care of it.",
  },
  {
    question: "What does a 'fully guaranteed' chip repair mean?",
    answer:
      "It means we stand behind every chip repair we perform. If you have an issue with a repair we did, give us a call and we'll make it right.",
  },
  {
    question: "Does the warranty cover new damage, like a new rock chip?",
    answer:
      "No — our guarantee covers the quality of our installation and repair work, not new damage from new road debris after the fact. If you pick up a new chip down the road, we're happy to take a look at that too.",
  },
  {
    question: "Do I need to keep a receipt or paperwork?",
    answer:
      "It helps to have your invoice or the date of service handy when you call, but the most important thing is just giving us a call at (330) 305-2643 so we can look up your service.",
  },
];

export default function WarrantyPage() {
  return (
    <>
      <JsonLd data={faqSchema(warrantyFaqs)} />

      <Section className="border-b border-line bg-mist pb-12 pt-10">
        <Breadcrumbs items={[{ name: "Warranty", href: "/warranty" }]} />
        <h1 className="mt-4 font-display text-4xl font-bold text-ink sm:text-5xl">
          Our Warranty
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate">
          After {business.yearsExperience}+ years in the auto glass
          business, we stand behind our work — no fine print, no runaround.
        </p>
        <CtaButtonGroup className="mt-8" />
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="rounded-lg border border-line bg-white p-8">
            <h2 className="font-display text-xl font-bold text-ink">
              Windshield Replacement
            </h2>
            <p className="mt-3 leading-relaxed text-slate">{business.guarantee.replacement}</p>
            <p className="mt-3 text-sm text-slate">
              See our{" "}
              <Link href="/services/windshield-replacement" className="text-brand-blue hover:underline">
                windshield replacement
              </Link>{" "}
              page for details on the installation process.
            </p>
          </div>

          <div className="rounded-lg border border-line bg-white p-8">
            <h2 className="font-display text-xl font-bold text-ink">
              Rock Chip &amp; Stone Chip Repair
            </h2>
            <p className="mt-3 leading-relaxed text-slate">{business.guarantee.repair}</p>
            <p className="mt-3 text-sm text-slate">
              See our{" "}
              <Link href="/services/rock-chip-repair" className="text-brand-blue hover:underline">
                rock chip repair
              </Link>{" "}
              page for details on what&apos;s repairable.
            </p>
          </div>

          <p className="text-sm text-slate">
            Have a question about a specific situation not covered above?
            Call or text {business.phone} — we&apos;re happy to talk it
            through.
          </p>
        </div>
      </Section>

      <Section className="border-t border-line bg-mist">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-ink">
            Warranty Questions
          </h2>
          <div className="mt-8">
            <FaqList faqs={warrantyFaqs} />
          </div>
        </div>
      </Section>
    </>
  );
}
