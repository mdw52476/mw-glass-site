import Link from "next/link";
import JsonLd from "./JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/business";

export type Crumb = { name: string; href: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const full = [{ name: "Home", href: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-slate">
      <JsonLd
        data={breadcrumbSchema(
          full.map((c) => ({ name: c.name, url: `${SITE_URL}${c.href}` }))
        )}
      />
      <ol className="flex flex-wrap items-center gap-1.5">
        {full.map((crumb, i) => (
          <li key={crumb.href} className="flex items-center gap-1.5">
            {i > 0 && <span className="text-line">/</span>}
            {i === full.length - 1 ? (
              <span className="text-ink" aria-current="page">
                {crumb.name}
              </span>
            ) : (
              <Link href={crumb.href} className="hover:text-brand-blue">
                {crumb.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
