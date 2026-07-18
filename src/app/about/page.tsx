import type { Metadata } from "next";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CtaButtonGroup } from "@/components/CtaButtons";
import { business, counties } from "@/lib/business";

export const metadata: Metadata = {
  title: "About Us",
  description: `${business.name} has ${business.yearsExperience}+ years of auto glass experience, serving Northeast Ohio as a 100% mobile service — no shop, no waiting room, we come to you.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Section className="border-b border-line bg-mist pb-12 pt-10">
        <Breadcrumbs items={[{ name: "About", href: "/about" }]} />
        <h1 className="mt-4 font-display text-4xl font-bold text-ink sm:text-5xl">
          About MW Glass Repair
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate">
          {business.yearsExperience}+ years of hands-on auto glass
          experience, built into a mobile-only service that comes to you.
        </p>
        <CtaButtonGroup className="mt-8" />
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl space-y-6 leading-relaxed text-slate">
          <p>
            {business.legalName} was built around a simple idea: getting your
            windshield fixed shouldn&apos;t mean rearranging your whole day.
            After {business.yearsExperience}+ years working in the auto
            glass trade, we set out to do the job the way it should be done
            — at your home, your workplace, or wherever your vehicle happens
            to be — without the waiting room, the rental car, or the
            back-and-forth.
          </p>
          <p>
            Today, MW Glass Repair is a 100% mobile auto glass company
            serving Stark, Summit, Wayne, Medina, Holmes, Ashland, Carroll,
            and Portage counties in Ohio. Whether it&apos;s a small rock
            chip that needs a quick repair or a full windshield replacement,
            we bring the same tools, materials, and attention to detail a
            traditional shop would use — we just skip the shop.
          </p>
          <p>
            We&apos;re straightforward about what your vehicle actually
            needs. If a chip can be repaired instead of replaced, we&apos;ll
            tell you — it saves you money and keeps more of your original
            windshield intact. If it needs a full replacement, we&apos;ll
            walk you through what that involves and get you a clear quote
            before we ever show up.
          </p>
          <p>
            Every windshield we install is guaranteed against stress cracks
            and leaks. Every rock chip repair we perform is fully
            guaranteed. That&apos;s not a marketing line — it&apos;s how we
            approach the job.
          </p>
        </div>
      </Section>

      <Section className="border-t border-line bg-mist">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-ink">
            What Makes Us Different
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <Feature
              title="100% Mobile"
              description="We don't have a storefront to drive to — we come to your home, office, or job site."
            />
            <Feature
              title={`${business.yearsExperience}+ Years Experience`}
              description="Two decades of hands-on auto glass work across every make and model."
            />
            <Feature
              title="Honest Assessments"
              description="We'll tell you when a repair makes more sense than a replacement — and why."
            />
            <Feature
              title="Guaranteed Work"
              description="Windshield installs guaranteed against stress cracks and leaks. Chip repairs fully guaranteed."
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-ink">Our Service Area</h2>
          <p className="mt-3 text-slate">
            We serve all of the following Ohio counties, plus the cities and
            townships within them:
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {counties.map((c) => (
              <span
                key={c.slug}
                className="rounded-full border border-line bg-white px-4 py-1.5 text-sm text-slate"
              >
                {c.name}
              </span>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}

function Feature({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-lg border border-line bg-white p-5">
      <p className="font-display font-semibold text-ink">{title}</p>
      <p className="mt-1.5 text-sm leading-relaxed text-slate">{description}</p>
    </div>
  );
}
