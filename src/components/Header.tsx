import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { CallButton } from "./CtaButtons";
import MobileNav from "./MobileNav";
import { business } from "@/lib/business";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/warranty", label: "Warranty" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt={`${business.name} logo`}
            width={44}
            height={44}
            priority
            className="h-11 w-11"
          />
          <span className="font-display text-lg font-semibold tracking-tight text-ink sm:text-xl">
            {business.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/80 transition hover:text-brand-blue"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CallButton />
        </div>

        <MobileNav navLinks={navLinks} />
      </Container>
    </header>
  );
}
