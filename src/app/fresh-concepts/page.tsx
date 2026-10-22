// src/app/fresh-concepts/page.tsx
import type { Metadata } from "next";

import { ProductPageView } from "@/components/product-page";
import { freshConceptsPage } from "@/lib/productPages";

export const metadata: Metadata = {
  title: { absolute: "Fresh Concepts" },
  description:
    "Fixtures designed for produce, bakery, bulk foods, wine, and more — purpose-built for food and beverage departments.",
};

export default function FreshConceptsPage() {
  return <ProductPageView data={freshConceptsPage} />;
}
