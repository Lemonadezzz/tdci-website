import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

import { site } from "@/lib/site";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CookieConsent from "@/components/cookie-consent";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Philippine Shopfitting & Retail Displays`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "retail displays",
    "shopfitting",
    "retail shelving",
    "racking",
    "store fixtures",
    "Philippines",
  ],
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Philippine Shopfitting & Retail Displays`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Philippine Shopfitting & Retail Displays`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.legalName,
  url: site.url,
  logo: new URL("/assets/logo/targetdisplay-logo.png", site.url).toString(),
  description: site.description,
  foundingDate: site.founded,
  email: site.email,
  telephone: site.phone1,
  address: {
    "@type": "PostalAddress",
    streetAddress: "4F Ricogen Building, 112 Aguirre, Legaspi Village",
    addressLocality: "Makati",
    addressRegion: "Metro Manila",
    addressCountry: "PH",
  },
  sameAs: [
    site.social.facebook,
    site.social.instagram,
    site.social.linkedin,
    site.social.careers,
  ],
};

export default function RootLayout(props: LayoutProps<"/">) {
  const { children } = props;

  return (
    <html
      lang="en"
      className={manrope.variable}
      data-scroll-behavior="smooth"
    >
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
