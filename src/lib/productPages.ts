// src/lib/productPages.ts
// Content for every product page. Assets live in /public/assets/products/<slug>/.

export type ProductHeroColumns = {
  variant: "columns";
  /** Left vertical marquee strip */
  left: string[];
  /** Right vertical marquee strip */
  right: string[];
};

export type ProductHeroRows = {
  variant: "rows";
  /** Top horizontal strip (repeats twice) */
  top: string[];
  /** Bottom horizontal strip (repeats twice) */
  bottom: string[];
};

export type ProductCard = {
  title: string;
  body: string;
  image: string;
  large?: boolean;
  /** Places the large card on the right (layout375) instead of the left (layout374) */
  largeRight?: boolean;
};

export type ProductSection = {
  heading: string;
  body: string;
  /** 374 = large card left, 375 = large card right */
  layout: "374" | "375";
  cards: ProductCard[];
};

export type BuiltForItem = {
  label: string;
  icon: string;
  large?: boolean;
};

export type ProductPageData = {
  slug: string;
  /** h1 */
  title: string;
  /** Hero paragraph */
  intro: string;
  /** Contact form topic, e.g. /contact?topic=shelving */
  topic: string;
  hero: ProductHeroColumns | ProductHeroRows;
  section: ProductSection;
  builtFor?: {
    heading: string;
    items: BuiltForItem[];
  };
  /** Centered button under the last section */
  cta: {
    text: string;
    label: string;
  };
};

const A = "/assets/products";

const shelving = `${A}/shelving`;
const racking = `${A}/racking`;
const equipment = `${A}/store-equipment`;
const signage = `${A}/product-display-signages`;
const fresh = `${A}/fresh-concepts`;
const kiosks = `${A}/pop-ups-kiosks`;
const cabinets = `${A}/cabinets-counters`;

export const shelvingPage: ProductPageData = {
  slug: "shelving",
  title: "Shelving Systems",
  intro:
    "Built for the demands of everyday retail, our durable shelving maximizes display capacity, simplifies replenishment, and keeps merchandise clearly presented across different store formats.",
  topic: "shelving",
  hero: {
    variant: "columns",
    left: [
      `${shelving}/hero/img-shelving-1.avif`,
      `${shelving}/hero/img-shelving-2.avif`,
      `${shelving}/hero/img-shelving-3.avif`,
    ],
    right: [
      `${shelving}/hero/img-shelving-4.avif`,
      `${shelving}/hero/img-shelving-5.avif`,
      `${shelving}/hero/img-shelving-6.avif`,
    ],
  },
  section: {
    heading: "Shelving Types",
    body: "Explore our most popular shelving configurations, each optimized for different retail layouts, product categories, and merchandising needs.",
    layout: "374",
    cards: [
      {
        title: "Island or Gondola Shelving",
        body: "Flexible double-sided shelving that creates efficient aisles and maximizes space.",
        image: `${shelving}/cards/img-island.avif`,
        large: true,
      },
      {
        title: "Wall Shelving",
        body: "Use perimeter space effectively while keeping merchandise organized, visible, and easy to replenish.",
        image: `${shelving}/cards/img-wall.avif`,
      },
      {
        title: "End Frame",
        body: "Turn high-traffic aisle ends into prominent locations for promotions, launches, and priority products.",
        image: `${shelving}/cards/img-end-frames.avif`,
      },
      {
        title: "Heavy-Duty",
        body: "Support heavier merchandise in hardware, home improvement, automotive, and bulk-retail environments.",
        image: `${shelving}/cards/img-heavy-duty.avif`,
      },
      {
        title: "Custom Solutions",
        body: "Develop a system for your exact footprint, product range, finishes, and operating requirements.",
        image: `${shelving}/cards/img-custom.avif`,
      },
    ],
  },
  builtFor: {
    heading: "Built For:",
    items: [
      { label: "Supermarkets", icon: `${shelving}/icons/supermarkets.png`, large: true },
      { label: "Convenience Stores", icon: `${shelving}/icons/convenience-stores.png` },
      { label: "Pharmacies", icon: `${shelving}/icons/pharmacies.png` },
      { label: "Beauty Stores", icon: `${shelving}/icons/beauty-stores.png` },
      { label: "Hardware Stores", icon: `${shelving}/icons/hardware-stores.png` },
      { label: "Specialty Retail", icon: `${shelving}/icons/specialty-retail.png` },
    ],
  },
  cta: { text: "Inquire Now", label: "Inquire about shelving" },
};

export const rackingPage: ProductPageData = {
  slug: "racking",
  title: "Racking Systems",
  intro:
    "Improve storage capacity, product access, and material flow with racking specified for warehouses, distribution centers, stockrooms, and industrial facilities.",
  topic: "racking",
  hero: {
    variant: "rows",
    top: [
      `${racking}/hero/img-racking-1.avif`,
      `${racking}/hero/img-racking-2.avif`,
      `${racking}/hero/img-racking-3.avif`,
    ],
    bottom: [
      `${racking}/hero/img-racking-4.avif`,
      `${racking}/hero/img-racking-5.avif`,
      `${racking}/hero/img-racking-6.avif`,
    ],
  },
  section: {
    heading: "Racking Systems",
    body: "Explore our most popular racking configurations, each optimized for different storage layouts, product categories, and handling needs.",
    layout: "375",
    cards: [
      {
        title: "Medium-Duty Racking",
        body: "Organise cartons, spare parts, archives, and stock requiring frequent manual access.",
        image: `${racking}/cards/img-medium.avif`,
      },
      {
        title: "Cantilever racking systems",
        body: "Designed for timber, pipes, steel sections, panels, and other products that don’t fit conventional pallet racks.",
        image: `${racking}/cards/img-cantilever.avif`,
      },
      {
        title: "Mezzanine Systems",
        body: "Make better use of building height by creating additional storage, production, or workspace, subject to site and regulatory requirements.",
        image: `${racking}/cards/img-mezzanine.avif`,
      },
      {
        title: "Pallet Racking",
        body: "Increase pallet capacity while maintaining appropriate forklift access and inventory handling.",
        image: `${racking}/cards/img-pallet.avif`,
      },
      {
        title: "Retail Integration",
        body: "High-capacity storage with accessible product displays for retail floors, cash-and-carry stores, and stockrooms.",
        image: `${racking}/cards/img-retail-integ.avif`,
        large: true,
        largeRight: true,
      },
    ],
  },
  builtFor: {
    heading: "Built For",
    items: [
      { label: "Warehouse Clubs", icon: `${racking}/icons/warehouse-clubs.png` },
      { label: "Distribution Centers", icon: `${racking}/icons/distribution-centers.png` },
      { label: "Storage Facilities", icon: `${racking}/icons/storage-facilities.png` },
      { label: "DIY Stores", icon: `${racking}/icons/diy-stores.png` },
      { label: "Stockrooms", icon: `${racking}/icons/stockrooms.png` },
      { label: "Cash-and-Carry Stores", icon: `${racking}/icons/cash-and-carry.png` },
    ],
  },
  cta: { text: "Inquire Now!", label: "Inquire about racking" },
};

export const storeEquipmentPage: ProductPageData = {
  slug: "store-equipment",
  title: "Store Equipment",
  intro:
    "Trolleys, carts, and material handling solutions designed to improve efficiency across retail, warehousing, and commercial environments.",
  topic: "store-equipment",
  hero: {
    variant: "columns",
    left: [
      `${equipment}/hero/img-store-equip-1.avif`,
      `${equipment}/hero/img-store-equip-2.avif`,
      `${equipment}/hero/img-store-equip-3.avif`,
    ],
    right: [
      `${equipment}/hero/img-store-equip-4.avif`,
      `${equipment}/hero/img-store-equip-5.avif`,
      `${equipment}/hero/img-store-equip-6.avif`,
    ],
  },
  section: {
    heading: "Solutions for every movement and load",
    body: "Improve customer convenience and day-to-day efficiency with equipment selected for your operating environment, load requirements, handling routes, and workflow.",
    layout: "374",
    cards: [
      {
        title: "Shopping Trolleys",
        body: "Durable options in different capacities and configurations for supermarkets, department stores, and other retailers.",
        image: `${equipment}/cards/img-shopping-trolleys.avif`,
        large: true,
      },
      {
        title: "Transport Trolleys",
        body: "Improve picking efficiency with carts built for warehouses, distribution centers, and inventory operations.",
        image: `${equipment}/cards/img-transport-trolley.avif`,
      },
      {
        title: "Order-picking Trolleys",
        body: "Support faster, more organised picking in warehouses, supermarkets, department stores, and other retailers.",
        image: `${equipment}/cards/img-order-picking.avif`,
      },
      {
        title: "Roll Containers",
        body: "Secure mobile cages that simplify stock movement, replenishment, staging, and back-of-house handling.",
        image: `${equipment}/cards/img-roll-cage.avif`,
      },
      {
        title: "Shopping Baskets",
        body: "Lightweight, stackable carry baskets for supermarkets, convenience stores, and specialty retail.",
        image: `${equipment}/cards/img-plastic-and-wire-basket.avif`,
      },
    ],
  },
  builtFor: {
    heading: "Used For",
    items: [
      { label: "Supermarkets", icon: `${equipment}/icons/supermarkets.png` },
      { label: "Convenience Stores", icon: `${equipment}/icons/convenience-stores.png` },
      { label: "Pharmacies", icon: `${equipment}/icons/pharmacies.png` },
      { label: "Beauty Stores", icon: `${equipment}/icons/beauty-stores.png` },
      { label: "Hardware Stores", icon: `${equipment}/icons/hardware-stores.png` },
      { label: "Specialty Retail Stores", icon: `${equipment}/icons/specialty-retail-stores.png` },
    ],
  },
  cta: { text: "Inquire Now!", label: "Inquire about store equipment" },
};

export const signagePage: ProductPageData = {
  slug: "product-display-signages",
  title: "Product Display & Signages",
  intro:
    "Tailored display solutions for launches, promotions, product education, and in-store engagement.",
  topic: "product-display-signages",
  hero: {
    variant: "columns",
    left: [
      `${signage}/hero/img-signage-1.avif`,
      `${signage}/hero/img-signage-2.avif`,
      `${signage}/hero/img-signage-3.avif`,
    ],
    right: [
      `${signage}/hero/img-signage-4.avif`,
      `${signage}/hero/img-signage-5.avif`,
      `${signage}/hero/img-signage-6.avif`,
    ],
  },
  section: {
    heading: "Displays built around the details",
    body: "From promotional graphics to tester displays, each fixture is developed around your product, brand, and retail environment.",
    layout: "375",
    cards: [
      {
        title: "Countertop Displays",
        body: "Compact branded fixtures for impulse items, launches, accessories, samples, and limited product ranges.",
        image: `${signage}/cards/img-countertop.avif`,
      },
      {
        title: "Product Glorifiers",
        body: "Platforms and feature pieces designed to elevate hero products and create stronger visual hierarchy.",
        image: `${signage}/cards/img-product-glorifier.avif`,
      },
      {
        title: "Acrylic Displays",
        body: "Custom-formed holders, trays, and stands for products, brochures, samples, menus, and point-of-sale materials.",
        image: `${signage}/cards/img-acrylic-disp.avif`,
      },
      {
        title: "Store/Aisle Signs",
        body: "Aisle and store signage that can be made to match your brand style, store colors, or more.",
        image: `${signage}/cards/img-store-aisle.avif`,
      },
    ],
  },
  cta: { text: "Inquire Now", label: "Inquire about product displays" },
};

export const freshConceptsPage: ProductPageData = {
  slug: "fresh-concepts",
  title: "Fresh Concepts & Beverage Displays",
  intro: "Fixtures designed for produce, bakery, bulk foods, wine, and more.",
  topic: "fresh-concepts-beverages",
  hero: {
    variant: "rows",
    top: [
      `${fresh}/hero/img-fresh-concepts-1.avif`,
      `${fresh}/hero/img-fresh-concepts-2.avif`,
      `${fresh}/hero/img-fresh-concepts-3.avif`,
    ],
    bottom: [
      `${fresh}/hero/img-fresh-concepts-4.avif`,
      `${fresh}/hero/img-fresh-concepts-5.avif`,
      `${fresh}/hero/img-fresh-concepts-6.avif`,
    ],
  },
  section: {
    heading: "From Fresh Produce to Fine Wine",
    body: "Purpose-built fixtures for the unique merchandising needs of food & beverage departments.",
    layout: "375",
    cards: [
      {
        title: "Produce Displays",
        body: "Open formats that create abundance, improve access, and accommodate baskets, crates, and loose goods.",
        image: `${fresh}/cards/img-produce-displays.avif`,
      },
      {
        title: "Bakery Displays",
        body: "Structured displays for bread, pastries, and packaged bakery products.",
        image: `${fresh}/cards/img-baked-goods.avif`,
      },
      {
        title: "Bulk Food Displays",
        body: "Organized high-visibility displays that keep products organized, visible, and easy to shop.",
        image: `${fresh}/cards/img-bulk-foods.avif`,
      },
      {
        title: "Wine & Beverage Displays",
        body: "Organized high-visibility displays that keep bottles organized, visible, and easy to shop.",
        image: `${fresh}/cards/img-wines.avif`,
      },
    ],
  },
  cta: { text: "Inquire Now", label: "Inquire about fresh concepts" },
};

export const popUpsPage: ProductPageData = {
  slug: "pop-ups-kiosks",
  title: "Pop Ups & Kiosks",
  intro:
    "Compact branded environments developed for your products, location, customer journey, operating period, and site requirements, from short-term activations to permanent retail points.",
  topic: "pop-ups-kiosks",
  hero: {
    variant: "columns",
    left: [
      `${kiosks}/hero/img-popups-1.avif`,
      `${kiosks}/hero/img-popups-2.avif`,
      `${kiosks}/hero/img-popups-3.avif`,
    ],
    right: [
      `${kiosks}/hero/img-popups-4.avif`,
      `${kiosks}/hero/img-popups-5.avif`,
      `${kiosks}/hero/img-popups-6.avif`,
    ],
  },
  section: {
    heading: "Flexible formats for retail and brand activation",
    body: "Whether you are launching a campaign, testing a market, or creating a permanent sales point, we develop a format that fits the site and commercial objective.",
    layout: "374",
    cards: [
      {
        title: "Retail Kiosks",
        body: "Permanent retail kiosks designed for malls, airports, and commercial spaces with storage, lighting, and premium finishes.",
        image: `${kiosks}/cards/img-retail.avif`,
        large: true,
      },
      {
        title: "Pop-Up Stores",
        body: "Temporary retail spaces that are quick to install and ideal for seasonal promotions, product promos, and more.",
        image: `${kiosks}/cards/img-popups.avif`,
      },
      {
        title: "Brand Activations",
        body: "Engaging environments that encourage interaction, increase visibility, and bring campaigns to life.",
        image: `${kiosks}/cards/img-brand.avif`,
      },
      {
        title: "Exhibition Displays",
        body: "Modular systems for trade shows, conventions, exhibitions, and roadshows.",
        image: `${kiosks}/cards/img-exhibition.avif`,
      },
      {
        title: "Custom Solutions",
        body: "Purpose-built solutions developed for your site, campaign, operating period, transport, storage, and reuse requirements.",
        image: `${kiosks}/cards/img-custom.avif`,
      },
    ],
  },
  cta: { text: "Inquire Now!", label: "Inquire about pop ups and kiosks" },
};

export const cabinetsPage: ProductPageData = {
  slug: "cabinets-counters",
  title: "Cabinets & Counters",
  intro:
    "Service counters, display cabinets, and workstations developed to support staff workflow, equipment, storage, security, and a consistent customer experience.",
  topic: "cabinets-counters",
  hero: {
    variant: "rows",
    top: [
      `${cabinets}/hero/img-counters-1.avif`,
      `${cabinets}/hero/img-counters-2.avif`,
      `${cabinets}/hero/img-counters-3.avif`,
    ],
    bottom: [
      `${cabinets}/hero/img-counters-4.avif`,
      `${cabinets}/hero/img-counters-5.avif`,
      `${cabinets}/hero/img-counters-6.avif`,
    ],
  },
  section: {
    heading: "Solutions for service, display, and daily operations.",
    body: "Made-to-order counters and cabinets for retail, hospitality, healthcare, offices, and other commercial environments.",
    layout: "375",
    cards: [
      {
        title: "Display Cabinets",
        body: "Showcase merchandise while supporting security, organization, lighting, and appropriate product access.",
        image: `${cabinets}/cards/img-display-cabinets.avif`,
      },
      {
        title: "Service Stations",
        body: "Configure practical work areas for consultation, customer service, packing, collection, or back-of-house support.",
        image: `${cabinets}/cards/img-service-counter.avif`,
      },
      {
        title: "Checkout Counters",
        body: "Improve transaction flow with counters planned for POS equipment, storage, packing, accessibility, and queue movement.",
        image: `${cabinets}/cards/img-checkout-counter.avif`,
      },
      {
        title: "Custom Joinery",
        body: "Bespoke cabinetry that fits your architecture, equipment, operations, finishes, and brand environment.",
        image: `${cabinets}/cards/img-custom-joinery.avif`,
      },
      {
        title: "Reception Counters",
        body: "Create a professional welcome point that supports staff workflow, storage, accessibility, and integrated equipment.",
        image: `${cabinets}/cards/img-reception-counter.avif`,
        large: true,
        largeRight: true,
      },
    ],
  },
  cta: { text: "Inquire Now!", label: "Inquire about cabinets and counters" },
};

export const productPages = {
  shelving: shelvingPage,
  racking: rackingPage,
  "store-equipment": storeEquipmentPage,
  "product-display-signages": signagePage,
  "fresh-concepts": freshConceptsPage,
  "pop-ups-kiosks": popUpsPage,
  "cabinets-counters": cabinetsPage,
} as const;
