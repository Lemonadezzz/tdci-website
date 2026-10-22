/**
 * Central asset registry.
 *
 * All assets are served locally from /assets. No external CDN dependencies.
 */

const local = (file: string) => `/assets/${file}`;

export type MarqueeLogo = {
  src: string;
  alt: string;
  /** Breakpoint at which the logo is hidden. */
  hideOn?: "tablet" | "mobile-landscape";
};

export const marqueeLogos: readonly MarqueeLogo[] = [
  { src: local("home/logos/seiko.avif"), alt: "Seiko" },
  {
    src: local("home/logos/colour-mart.avif"),
    alt: "Colour Mart",
    hideOn: "tablet",
  },
  {
    src: local("home/logos/joels-place.avif"),
    alt: "Joel's Place",
    hideOn: "mobile-landscape",
  },
  {
    src: local("home/logos/rimowa.avif"),
    alt: "Rimowa",
    hideOn: "mobile-landscape",
  },
  {
    src: local("home/logos/landmark.avif"),
    alt: "Landmark",
  },
  {
    src: local("home/logos/nba-store.avif"),
    alt: "NBA Store",
  },
  {
    src: local("home/logos/puregold.avif"),
    alt: "Puregold",
    hideOn: "tablet",
  },
  {
    src: local("home/logos/sm.avif"),
    alt: "SM",
    hideOn: "mobile-landscape",
  },
  {
    src: local("home/logos/shark-ninja.avif"),
    alt: "SharkNinja",
    hideOn: "mobile-landscape",
  },
];

export const assets = {
  /** Navbar + footer wordmark. */
  logo: local("logo/targetdisplay-logo.png"),

  hero: {
    /** "Target Display 30 years" anniversary mark. */
    anniversaryLogo: local("home/hero/30th-logo.avif"),
    video: {
      poster: local("home/hero/poster.jpg"),
      mp4: local("home/hero/showcase.mp4"),
      webm: local("home/hero/showcase.webm"),
    },
  },

  /** Product category cards. */
  categories: {
    shelving: local("home/categories/img-shelving-4.avif"),
    storeEquipment: local("home/categories/img-store-equip-5.avif"),
    foodConcepts: local("home/categories/img-wines.avif"),
    garmentRacks: local("home/categories/img-runnr-racks.png"),
    cabinetsCounters: local("home/categories/img-counters-3.avif"),
    popUpsKiosks: local("home/categories/img-popups-3.avif"),
    checkoutCounters: local("home/categories/img-counters-2.avif"),
    popUpsKiosksAlt: local("home/categories/img-popups-5.avif"),
  },

  /** Client logos shown in the scrolling marquee. */
  marqueeLogos,
};
