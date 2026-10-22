// src/app/pop-ups-kiosks/page.tsx
import type { Metadata } from "next";

import { ProductPageView } from "@/components/product-page";
import { popUpsPage } from "@/lib/productPages";

export const metadata: Metadata = {
  title: { absolute: "Pop Up & Kiosk Fabrication" },
  description:
    "Retail kiosk and pop-up store builder in Manila. Custom activations and exhibition displays for malls, airports, and campaigns nationwide.",
};

export default function PopUpsKiosksPage() {
  return <ProductPageView data={popUpsPage} />;
}
