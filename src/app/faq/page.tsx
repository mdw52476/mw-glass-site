import type { Metadata } from "next";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqList from "@/components/FaqList";
import JsonLd from "@/components/JsonLd";
import { CtaButtonGroup } from "@/components/CtaButtons";
import { faqSchema } from "@/lib/schema";
import { business, services } from "@/lib/business";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about mobile windshield replacement, rock chip repair, pricing, insurance, service areas, and scheduling with MW Glass Repair.",
  alternates: { canonical: "/faq" },
};

const generalFaqs = [
  {
    question: "What areas does MW Glass Repair serve?",
    answer:
      "We serve Stark, Summit, Wayne, Medina, Holmes, Ashland, Carroll, and Portage counties in Ohio — including Canton, Akron, Wooster, Medina, Millersburg, Ashland, Carrollton, Kent, and everywhere in between.",
  },
  {
    question: "Is MW Glass Repair really 100% mobile?",
    answer:
      "Yes. We don't operate a storefront — every job is done at your home, workplace, or wherever your vehicle is parked, anywhere in our service area.",
  },
  {
    question: "What are your hours?",
    answer: `We book mobile appointments ${business.hoursDisplay}.`,
  },
  {
    question: "How do I get a quote?",
    answer: `Call or text ${business.phone} with your vehicle's year, make, and model, plus a description or photo of the damage. Most quotes take just a few minutes.`,
  },
  {
    question: "Do you bill insurance directly?",
    answer:
      "We're not currently set up with insurance networks for direct billing, but we can provide a detailed invoice for you to submit to your insurance company for reimbursement under your glass coverage.",
  },
  {
    question: "How much notice do you need to schedule?",
    answer: `We book appointments ${business.hoursDisplay}. Call or text ${business.phone} and we'll get you on the schedule as soon as we can — often the same week.`,
  },
];

const allSections = [
  { title: "General", faqs: generalFaqs },
  ...services.map((s) => ({ title: s.name, faqs: s.faqs })),
];

const allFaqsFlat = allSections.flatMap((s) => s.faqs);

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(allFaqsFlat)} />

      <Section className="border-b border-line bg-mist pb-12 pt-10">
        <Breadcrumbs items={[{ name: "FAQ", href: "/faq" }]} />
        <h1 className="mt-4 font-display text-4xl font-bold text-ink sm:text-5xl">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate">
          Everything you need to know about mobile windshield replacement,
          chip repair, pricing, and scheduling. Can&apos;t find your answer?
          Call or text {business.phone}.
        </p>
        <CtaButtonGroup className="mt-8" />
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl space-y-14">
          {allSections.map((section) => (
            <div key={section.title}>
              <h2 className="font-display text-2xl font-bold text-ink">{section.title}</h2>
              <div className="mt-4">
                <FaqList faqs={section.faqs} />
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
