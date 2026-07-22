import { SITE_URL, business, counties, services } from "./business";

/** Base Organization/LocalBusiness JSON-LD, included on every page via the root layout. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["AutoRepair", "HomeAndConstructionBusiness"],
    "@id": `${SITE_URL}/#organization`,
    name: business.name,
    legalName: business.legalName,
    url: SITE_URL,
    telephone: business.phoneE164,
    priceRange: business.priceRange,
    image: `${SITE_URL}/logo.png`,
    logo: `${SITE_URL}/logo.png`,
    description:
      "Mobile auto glass company serving Stark, Summit, Wayne, Medina, Holmes, Ashland, Carroll, and Portage counties in Ohio. Windshield replacement, rock chip repair, back glass, quarter glass, and headlight restoration — we come to you.",
    areaServed: counties.map((c) => ({
      "@type": "AdministrativeArea",
      name: `${c.name}, Ohio`,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Auto Glass Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.metaDescription,
          url: `${SITE_URL}/services/${s.slug}`,
        },
      })),
    },
    sameAs: [business.windshieldMapUrl].filter(Boolean),
  };
}

export function serviceSchema(service: {
  slug: string;
  name: string;
  metaDescription: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/${service.slug}/#service`,
    name: service.name,
    serviceType: service.name,
    description: service.metaDescription,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: {
      "@id": `${SITE_URL}/#organization`,
    },
    areaServed: counties.map((c) => ({
      "@type": "AdministrativeArea",
      name: `${c.name}, Ohio`,
    })),
  };
}

export function articleSchema(post: {
  slug: string;
  title: string;
  description: string;
  date: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${SITE_URL}/blog/${post.slug}/#article`,
    headline: post.title,
    description: post.description,
    url: `${SITE_URL}/blog/${post.slug}`,
    datePublished: post.date || undefined,
    dateModified: post.date || undefined,
    author: {
      "@id": `${SITE_URL}/#organization`,
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function localAreaSchema(area: {
  city: string;
  county: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": `${SITE_URL}/service-areas/${area.slug}/#business`,
    name: `${business.name} — ${area.city}, OH`,
    telephone: business.phoneE164,
    priceRange: business.priceRange,
    url: `${SITE_URL}/service-areas/${area.slug}`,
    image: `${SITE_URL}/logo.png`,
    parentOrganization: {
      "@id": `${SITE_URL}/#organization`,
    },
    areaServed: {
      "@type": "City",
      name: area.city,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: `${area.county}, Ohio`,
      },
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "17:00",
      },
    ],
  };
}

/** Renders a JSON-LD payload as a sanitized <script> tag. */
export function jsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
