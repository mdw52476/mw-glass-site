import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { organizationSchema } from "@/lib/schema";
import { SITE_URL, business } from "@/lib/business";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${business.name} | Mobile Windshield Replacement & Auto Glass, Northeast Ohio`,
    template: `%s | ${business.name}`,
  },
  description:
    "Mobile windshield replacement, rock chip repair, back glass & headlight restoration. We come to you across Stark, Summit, Wayne, Medina, Holmes, Ashland, Carroll & Portage counties, Ohio. Call (330) 305-2643.",
  keywords: [
    "mobile windshield replacement Ohio",
    "auto glass repair Canton Ohio",
    "rock chip repair Akron Ohio",
    "windshield replacement Wooster Ohio",
    "mobile auto glass Stark County",
  ],
  authors: [{ name: business.name }],
  creator: business.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: business.name,
    title: `${business.name} | Mobile Windshield Replacement & Auto Glass, Northeast Ohio`,
    description:
      "Mobile windshield replacement, rock chip repair, back glass & headlight restoration. We come to you — 20+ years of experience across eight Northeast Ohio counties.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} | Mobile Auto Glass, Northeast Ohio`,
    description:
      "Mobile windshield replacement, rock chip repair, back glass & headlight restoration. We come to you.",
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "c5eieSsSgO4f_vvrG9plLxdSAYXaZ1MxmwHtw5BqgEY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <JsonLd data={organizationSchema()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-DN1TSHRJ2D" />
    </html>
  );
}
