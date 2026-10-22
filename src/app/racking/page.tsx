// src/app/racking/page.tsx
import type { Metadata } from "next";

import { ProductPageView } from "@/components/product-page";
import { rackingPage } from "@/lib/productPages";

export const metadata: Metadata = {
  title: { absolute: "Racking Systems" },
  description:
    "Pallet, cantilever, mezzanine, and medium-duty racking systems built for PH based warehouses and distribution centers.",
};

export default function RackingPage() {
  return <ProductPageView data={rackingPage} />;
}
