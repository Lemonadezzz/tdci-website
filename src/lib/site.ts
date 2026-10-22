export type NavLink = {
  label: string;
  href: string;
  hasDropdown?: boolean;
};

export type ProductIconName =
  | "shelving"
  | "racking"
  | "storeEquipment"
  | "signage"
  | "fresh"
  | "kiosk"
  | "cabinet";

export type ProductLink = {
  label: string;
  description: string;
  href: string;
  icon: ProductIconName;
};

export const site = {
  name: "Target Display",
  legalName: "Target Display Co., Inc.",
  description:
    "Supplying retail shelving and racking nationwide since 1996, plus custom fixtures and counters built in our own in-house facility. Request a quote now!",
  url: "https://targetdisplay.com",
  founded: "1996-01-01",
  email: "inquiries@targetdisplay.com",
  phone1: "+63 2 8891 3607",
  phone2: "+63 917 123 8872",
  address: "4F Ricogen Building, 112 Aguirre, Legaspi Village, Makati, Metro Manila, Philippines",
  social: {
    facebook: "https://www.facebook.com/p/Target-Display-100067987686990/",
    instagram: "https://www.instagram.com/targetdisplayph/",
    linkedin: "https://www.linkedin.com/company/target-display-co-inc/",
    careers: "https://ph.indeed.com/cmp/Target-Display-Co.,-Inc.",
  },
} as const;

export const navLinks: readonly NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Products", href: "#", hasDropdown: true },
  { label: "Sectors", href: "/sectors" },
  { label: "About", href: "/about" },
];

export const productLinks: readonly ProductLink[] = [
  {
    label: "Shelving",
    description: "Wall mounted and freestanding display solutions",
    href: "/shelving",
    icon: "shelving",
  },
  {
    label: "Racking",
    description: "Heavy duty storage and warehouse systems",
    href: "/racking",
    icon: "racking",
  },
  {
    label: "Store Equipment",
    description: "Mobile transport and material handling equipment",
    href: "/store-equipment",
    icon: "storeEquipment",
  },
  {
    label: "Product Display & Signages",
    description:
      "Custom signage, product holders, and presentation displays for retail environments.",
    href: "/product-display-signages",
    icon: "signage",
  },
  {
    label: "Fresh Concepts",
    description:
      "Fixtures designed for produce, bakery, bulk foods, wine, and more.",
    href: "/fresh-concepts",
    icon: "fresh",
  },
  {
    label: "Pop Ups & Kiosks",
    description: "Flexible solutions for temporary and compact retail spaces",
    href: "/pop-ups-kiosks",
    icon: "kiosk",
  },
  {
    label: "Cabinets & Counters",
    description: "Functional counters and cabinets for display and storage",
    href: "/cabinets-counters",
    icon: "cabinet",
  },
];
