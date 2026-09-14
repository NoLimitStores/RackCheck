import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Archivo, Oswald } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCTABar from "@/components/MobileCTABar";
import JsonLd from "@/components/JsonLd";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "RackCheck | Onafhankelijke inspecties van magazijnstellingen",
    template: "%s | RackCheck",
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: site.name,
    url: "/",
    title: "RackCheck | Onafhankelijke inspecties van magazijnstellingen",
    description: site.description,
    images: [
      {
        url: "/images/magazijn-hero-inrijstelling.jpg",
        width: 1200,
        height: 630,
        alt: "Magazijn met hoge, volledig gevulde stellingen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RackCheck | Onafhankelijke stellinginspecties",
    description: site.description,
    images: ["/images/magazijn-hero-inrijstelling.jpg"],
  },
  robots: { index: true, follow: true },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  description: site.description,
  telephone: site.phoneE164,
  email: site.email,
  identifier: {
    "@type": "PropertyValue",
    propertyID: "KvK",
    value: site.kvk,
  },
  vatID: site.btw,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    ...(site.address.postalCode ? { postalCode: site.address.postalCode } : {}),
    addressCountry: "NL",
  },
  areaServed: [
    { "@type": "Country", name: "Nederland" },
    { "@type": "Country", name: "België" },
  ],
  serviceType: "Inspectie van magazijnstellingen",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: site.phoneE164,
    email: site.email,
    contactType: "customer service",
    areaServed: ["NL", "BE"],
    availableLanguage: ["nl"],
  },
  knowsAbout: [
    "Stellinginspectie",
    "Palletstelling",
    "Legbordstelling",
    "Draagarmstelling",
    "NEN-EN 15635",
    "Magazijnveiligheid",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  inLanguage: "nl-NL",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={`${archivo.variable} ${oswald.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col pb-[calc(4.5rem+env(safe-area-inset-bottom))] lg:pb-0">
        <JsonLd data={professionalServiceSchema} />
        <JsonLd data={websiteSchema} />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileCTABar />
      </body>
      {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
    </html>
  );
}
