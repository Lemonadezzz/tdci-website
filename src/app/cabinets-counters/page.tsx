// src/app/cabinets-counters/page.tsx
import type { Metadata } from "next";

import { ProductPageView } from "@/components/product-page";
import { cabinetsPage } from "@/lib/productPages";

export const metadata: Metadata = {
  title: { absolute: "Cabinets & Counters" },
  description:
    "Custom checkout counters and display cabinets from a Philippine shopfitting manufacturer. Built for retail, healthcare, and commercial spaces.",
};

export default function CabinetsCountersPage() {
  return <ProductPageView data={cabinetsPage} />;
}
