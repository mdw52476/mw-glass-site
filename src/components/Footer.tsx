import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { business, services, counties } from "@/lib/business";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink text-white/80">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt={`${business.name} logo`}
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="font-display text-lg font-semibold text-white">
              {business.name}
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            Mobile auto glass replacement and repair. We come to you —
            home, work, or job site — anywhere across our eight-county
            Northeast Ohio service area.
          </p>
          <a
            href={business.windshieldMapUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="mt-5 inline-block"
          >
            <Image
              src="/windshieldmap-badge.svg"
              alt="Verified on WindshieldMap"
              width={160}
              height={48}
            />
          </a>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Services
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-white/60 hover:text-brand-blue">
                  {s.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Service Areas
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {counties.map((c) => (
              <li key={c.slug}>
                <Link href={`/service-areas/${c.slug}`} className="text-white/60 hover:text-brand-blue">
                  {c.name}, OH
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Contact
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/60">
            <li>
              <a href={business.phoneHref} className="hover:text-brand-blue">
                {business.phone}
              </a>
            </li>
            <li>{business.hoursDisplay}</li>
            <li>{business.serviceType}</li>
          </ul>
          <Link
            href="/contact"
            className="mt-5 inline-block rounded-md bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-blue-dark"
          >
            Get a Free Quote
          </Link>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-white/50 sm:flex-row">
          <p>
            &copy; {year} {business.legalName}. All rights reserved.
          </p>
          <p>Proudly serving Northeast Ohio for {business.yearsExperience}+ years.</p>
        </Container>
      </div>
    </footer>
  );
}
