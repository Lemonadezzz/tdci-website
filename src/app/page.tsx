import type { Metadata } from "next";

import { site } from "@/lib/site";
import Hero from "@/components/hero";
import ProductCategories from "@/components/product-categories";
import Stats from "@/components/stats";
import LogoMarquee from "@/components/logo-marquee";

export const metadata: Metadata = {
  title: `${site.name} | Philippine Shopfitting & Retail Displays`,
  description: site.description,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductCategories />
      <Stats />
      <LogoMarquee />
    </>
  );
}
