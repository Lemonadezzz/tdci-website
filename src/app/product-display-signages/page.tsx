// src/app/product-display-signages/page.tsx
import type { Metadata } from "next";

import { ProductPageView } from "@/components/product-page";
import { signagePage } from "@/lib/productPages";

export const metadata: Metadata = {
  title: { absolute: "Product Display & Signages" },
  description:
    "Custom display solutions for retail launches, promotions, and product education. Countertop displays, glorifiers, acrylic holders, and branded signage.",
};

export default function ProductDisplaySignagesPage() {
  return <ProductPageView data={signagePage} />;
}
