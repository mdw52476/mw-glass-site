import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";
import { CtaButtonGroup, CallButton } from "@/components/CtaButtons";
import FaqList from "@/components/FaqList";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import { business, services, counties } from "@/lib/business";

export const metadata: Metadata = {
  title: `${business.name} | Mobile Windshield Replacement & Auto Glass, Northeast Ohio`,
  description:
    "Mobile windshield replacement, rock chip repair, back glass & headlight restoration. We come to you across Stark, Summit, Wayne, Medina, Holmes, Ashland, Carroll & Portage counties, Ohio. Call (330) 305-2643.",
  alternates: { canonical: "/" },
};

const homeFaqs = [
  {
    question: "Does MW Glass Repair really come to me?",
    answer:
      "Yes — we're a 100% mobile auto glass company. We come to your home, workplace, or wherever your vehicle is, anywhere across our eight-county Northeast Ohio service area. There's no shop to drive to.",
  },
  {
    question: "What areas does MW Glass Repair serve?",
    answer:
      "We serve Stark, Summit, Wayne, Medina, Holmes, Ashland, Carroll, and Portage counties in Ohio — including Canton, Akron, Wooster, Medina, Millersburg, Ashland, Carrollton, Kent, and every city and town in between.",
  },
  {
    question: "Is a rock chip repair or a full windshield replacement cheaper?",
    answer:
      "Chip repair is almost always the less expensive option, and it's often covered differently by insurance than a full replacement. If your chip is smaller than a quarter and not directly in your line of sight, text a photo to (330) 305-2643 and we'll tell you honestly whether it's repairable.",
  },
  {
    question: "How fast can you get to me?",
    answer:
      "We book appointments Monday through Friday, 8 AM to 5 PM. Call or text (330) 305-2643 with your vehicle info and location, and we'll get you on the schedule as quickly as we can.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />

      {/* Hero */}
      <section className="border-b border-line bg-mist">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-24 lg:px-8">
          <div>
            <p className="inline-flex items-center rounded-full bg-brand-blue-light px-3 py-1 text-sm font-semibold text-brand-blue-dark">
              {business.yearsExperience}+ years of experience &middot; 100% mobile
            </p>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
              Windshield trouble? We come to you.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate">
              MW Glass Repair provides mobile windshield replacement, rock
              chip repair, back glass, quarter glass, and headlight
              restoration at your home or workplace — across Stark, Summit,
              Wayne, Medina, Holmes, Ashland, Carroll, and Portage counties,
              Ohio.
            </p>
            <CtaButtonGroup className="mt-8" />
            <p className="mt-4 text-sm text-slate">
              {business.hoursDisplay} &middot; Guaranteed workmanship
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/logo.png"
              alt={`${business.name} — mobile auto glass logo`}
              width={340}
              height={340}
              priority
              className="h-56 w-56 sm:h-72 sm:w-72 lg:h-80 lg:w-80"
            />
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <Section className="py-10">
        <div className="grid grid-cols-2 gap-6 text-center sm:grid-cols-4">
          <TrustStat label="Years Experience" value={`${business.yearsExperience}+`} />
          <TrustStat label="Counties Served" value="8" />
          <TrustStat label="Mobile Service" value="100%" />
          <TrustStat label="Chip Repairs" value="Guaranteed" />
        </div>
      </Section>

      {/* Services */}
      <Section className="border-t border-line bg-mist">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            Auto Glass Services
          </h2>
          <p className="mt-3 text-slate">
            Full-service mobile auto glass, all done at your location.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group rounded-lg border border-line bg-white p-6 transition hover:border-brand-blue hover:shadow-md"
            >
              <h3 className="font-display text-xl font-semibold text-ink group-hover:text-brand-blue">
                {service.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{service.tagline}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-brand-blue">
                Learn more &rarr;
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Guarantee */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
              Backed by a real guarantee
            </h2>
            <p className="mt-4 leading-relaxed text-slate">
              After {business.yearsExperience}+ years in the auto glass
              business, we stand behind our work without fine print.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex gap-3">
                <CheckIcon />
                <span className="text-ink">{business.guarantee.replacement}</span>
              </li>
              <li className="flex gap-3">
                <CheckIcon />
                <span className="text-ink">{business.guarantee.repair}</span>
              </li>
            </ul>
            <Link
              href="/warranty"
              className="mt-6 inline-block text-sm font-semibold text-brand-blue hover:text-brand-blue-dark"
            >
              Read our full warranty details &rarr;
            </Link>
          </div>
          <div className="rounded-lg border border-line bg-mist p-8">
            <h3 className="font-display text-xl font-semibold text-ink">
              Why go mobile?
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate">
              <li>No waiting room, no dropping off your car, no rental car needed</li>
              <li>We work around your schedule — home, office, or job site</li>
              <li>Same attention to detail as any shop, without the shop</li>
              <li>{business.serviceType}</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Service areas */}
      <Section className="border-t border-line bg-mist">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            Serving Eight Counties Across Northeast Ohio
          </h2>
          <p className="mt-3 text-slate">
            Wherever you are in our service area, we&apos;ll come to you.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {counties.map((county) => (
            <Link
              key={county.slug}
              href={`/service-areas/${county.slug}`}
              className="rounded-md border border-line bg-white px-4 py-4 text-center font-medium text-ink transition hover:border-brand-blue hover:text-brand-blue"
            >
              {county.name}
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/service-areas"
            className="text-sm font-semibold text-brand-blue hover:text-brand-blue-dark"
          >
            See every city we serve &rarr;
          </Link>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            Common Questions
          </h2>
          <div className="mt-8">
            <FaqList faqs={homeFaqs} />
          </div>
          <div className="mt-8 text-center">
            <Link href="/faq" className="text-sm font-semibold text-brand-blue hover:text-brand-blue-dark">
              View the full FAQ &rarr;
            </Link>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="border-t border-line bg-ink">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Get your free quote today
          </h2>
          <p className="mt-3 text-white/70">
            Call or text (330) 305-2643, or send us your details online.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CallButton />
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white px-6 py-3 text-base font-semibold text-white transition hover:bg-white hover:text-ink"
            >
              Request a Quote Online
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

function TrustStat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-display text-3xl font-bold text-brand-blue sm:text-4xl">{value}</p>
      <p className="mt-1 text-sm text-slate">{label}</p>
    </div>
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
