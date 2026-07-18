"use client";

import { useState } from "react";
import Link from "next/link";
import { business } from "@/lib/business";

export default function MobileNav({
  navLinks,
}: {
  navLinks: { href: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
      >
        <span
          className={`h-0.5 w-6 bg-ink transition ${open ? "translate-y-2 rotate-45" : ""}`}
        />
        <span className={`h-0.5 w-6 bg-ink transition ${open ? "opacity-0" : ""}`} />
        <span
          className={`h-0.5 w-6 bg-ink transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute inset-x-0 top-20 border-b border-line bg-paper shadow-lg">
          <nav className="flex flex-col px-4 py-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3 text-base font-medium text-ink last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="my-3 rounded-md bg-brand-blue px-6 py-3 text-center text-base font-semibold text-white"
            >
              Get a Free Quote
            </Link>
            <a
              href={business.phoneHref}
              className="mb-3 text-center text-base font-semibold text-brand-blue"
            >
              Call {business.phone}
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
