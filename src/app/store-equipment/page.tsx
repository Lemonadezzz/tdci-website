// src/app/store-equipment/page.tsx
import type { Metadata } from "next";

import { ProductPageView } from "@/components/product-page";
import { storeEquipmentPage } from "@/lib/productPages";

export const metadata: Metadata = {
  title: { absolute: "Store Equipment" },
  description:
    "Shopping trolleys, transport carts, and roll containers for supermarkets, retailers, or distribution facilities.",
};

export default function StoreEquipmentPage() {
  return <ProductPageView data={storeEquipmentPage} />;
}
