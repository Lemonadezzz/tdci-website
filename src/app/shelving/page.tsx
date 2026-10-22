// src/app/shelving/page.tsx
import type { Metadata } from "next";

import { ProductPageView } from "@/components/product-page";
import { shelvingPage } from "@/lib/productPages";

export const metadata: Metadata = {
  title: { absolute: "Shelving Systems" },
  description:
    "Built for the demands of everyday retail, our durable shelving maximizes display capacity, simplifies replenishment, and keeps merchandise clearly presented across different store formats.",
};

export default function ShelvingPage() {
  return <ProductPageView data={shelvingPage} />;
}
