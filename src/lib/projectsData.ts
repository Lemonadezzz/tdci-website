// src/lib/projectsData.ts

export type ProductLink = {
  label: string;
  href: string;
  /** Tag background color — matches the live Webflow tag buttons */
  color: string;
};

export type Project = {
  id: string;
  logoSrc: string;
  logoSrcSet?: string;
  logoAlt: string;
  location: string;
  description: string;
  productsUtilized: ProductLink[];
  /** Top strip: two marquee copies (3 images each → 6 entries) */
  imageRowTop: string[];
  /** Bottom strip: two marquee copies (3 images each → 6 entries) */
  imageRowBottom: string[];
  /** Live site has an empty spacer row after the tags for some projects */
  emptyTagsRow?: boolean;
};

const CDN = "/assets/";

const CABINETS = {
  label: "Cabinets & Counters",
  href: "/cabinets-counters",
  color: "#5e3a70",
};
const SIGNAGES = {
  label: "Product Display & Signages",
  href: "/product-display-signages",
  color: "#1e543b",
};
const RACKING = { label: "Racking", href: "/racking", color: "#a87b00" };
const EQUIPMENT = {
  label: "Store Equipment",
  href: "/store-equipment",
  color: "#8c1d1d",
};

const projects: Project[] = [
  {
    id: "vex",
    logoSrc: `${CDN}projects/logos/logo-vex.png`,
    logoAlt: "VEX",
    location: "Greenbelt 5, Makati",
    description:
      "A complete retail fit-out developed to stay aligned with multiple brand guidelines, combining clean product presentation, illuminated displays, integrated storage, and durable fixtures built to handle hundreds of shoppers each day. The scope also included back-of-house cabinetry to support daily store operations.",
    productsUtilized: [
      { label: "Cabinet & Counters", href: "/cabinets-counters", color: "#5e3a70" },
      SIGNAGES,
    ],
    emptyTagsRow: true,
    imageRowTop: [
      `${CDN}projects/vex/VEX-1.avif`,
      `${CDN}projects/vex/VEX-2.avif`,
      `${CDN}projects/vex/VEX-3.avif`,
      `${CDN}projects/vex/VEX-1.avif`,
      `${CDN}projects/vex/VEX-2.avif`,
      `${CDN}projects/vex/VEX-3.avif`,
    ],
    imageRowBottom: [
      `${CDN}projects/vex/VEX-4.avif`,
      `${CDN}projects/vex/VEX-5.avif`,
      `${CDN}projects/vex/VEX-6.avif`,
      `${CDN}projects/vex/VEX-4.avif`,
      `${CDN}projects/vex/VEX-5.avif`,
      `${CDN}projects/vex/VEX-6.avif`,
    ],
  },
  {
    id: "supernatural",
    logoSrc: `${CDN}projects/logos/supernatural-logo.avif`,
    logoAlt: "(SUPER)Natural",
    location: "Chino Roces Ext., Makati",
    description:
      "A custom wine rack and display unit for (SUPER)Natural, built to put featured bottles front and center while keeping reserve stock organized and within easy reach. Fabricated in-house to carry the full weight of a stocked inventory, the unit pairs natural wood finish with a clean, understated look that lets the products do the talking.",
    productsUtilized: [CABINETS, SIGNAGES],
    emptyTagsRow: true,
    imageRowTop: [
      `${CDN}projects/supernatural/supernatural_1.avif`,
      `${CDN}projects/supernatural/supernatural_2.avif`,
      `${CDN}projects/supernatural/supernatural_3.avif`,
      `${CDN}projects/supernatural/supernatural_1.avif`,
      `${CDN}projects/supernatural/supernatural_2.avif`,
      `${CDN}projects/supernatural/supernatural_3.avif`,
    ],
    imageRowBottom: [
      `${CDN}projects/supernatural/supernatural_4.avif`,
      `${CDN}projects/supernatural/supernatural_5.avif`,
      `${CDN}projects/supernatural/supernatural_6.avif`,
      `${CDN}projects/supernatural/supernatural_4.avif`,
      `${CDN}projects/supernatural/supernatural_5.avif`,
      `${CDN}projects/supernatural/supernatural_6.avif`,
    ],
  },
  {
    id: "joels-place",
    logoSrc: `${CDN}projects/logos/logo-joelsplace.png`,
    logoAlt: "Joel's Place",
    location: "Glorietta 4, Makati",
    description:
      "A custom retail fit-out for Joel’s Place, combining warm food presentation with durable shelving, counters, display fixtures, and integrated storage designed for a busy specialty grocery environment. Each element was built to support daily merchandising, replenishment, and customer flow while maintaining a cohesive premium look.",
    productsUtilized: [RACKING, EQUIPMENT, CABINETS, SIGNAGES],
    imageRowTop: [
      `${CDN}projects/joels/Joels-Place-2.avif`,
      `${CDN}projects/joels/Joels-Place-3.avif`,
      `${CDN}projects/joels/Joels-Place-4.avif`,
      `${CDN}projects/joels/Joels-Place-2.avif`,
      `${CDN}projects/joels/Joels-Place-3.avif`,
      `${CDN}projects/joels/Joels-Place-4.avif`,
    ],
    imageRowBottom: [
      `${CDN}projects/joels/Joels-Place-5.avif`,
      `${CDN}projects/joels/Joels-Place-Baker.avif`,
      `${CDN}projects/joels/Joels-Place-Cashier.avif`,
      `${CDN}projects/joels/Joels-Place-5.avif`,
      `${CDN}projects/joels/Joels-Place-Baker.avif`,
      `${CDN}projects/joels/Joels-Place-Cashier.avif`,
    ],
  },
  {
    id: "landmark",
    logoSrc: `${CDN}projects/logos/logo-landmark.png`,
    logoAlt: "Landmark",
    location: "The Landmark, Makati",
    description:
      "A complete retail fixture package for Landmark, including gondola and wall shelving, shopping trolleys, and cashier counters. Each component was built for durability, efficient store operations, and the demands of a high-traffic retail environment.",
    productsUtilized: [RACKING, EQUIPMENT, CABINETS, SIGNAGES],
    // Live site uses a different image in copy 1 vs copy 2 of the top strip —
    // replicated here for a faithful 1:1 match.
    imageRowTop: [
      `${CDN}projects/landmark/Landmark-1.avif`,
      `${CDN}projects/landmark/Landmark-2.avif`,
      `${CDN}projects/landmark/Landmark-3.avif`,
      `${CDN}projects/landmark/Landmark-1.avif`,
      `${CDN}projects/landmark/Landmark-2.avif`,
      `${CDN}projects/landmark/Landmark-3.avif`,
    ],
    imageRowBottom: [
      `${CDN}projects/landmark/Landmark-4.avif`,
      `${CDN}projects/landmark/Landmark-5.avif`,
      `${CDN}projects/landmark/Landmark-6.avif`,
      `${CDN}projects/landmark/Landmark-4.avif`,
      `${CDN}projects/landmark/Landmark-5.avif`,
      `${CDN}projects/landmark/Landmark-6.avif`,
    ],
  },
];

export default projects;
