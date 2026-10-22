// src/lib/aboutData.ts

export type FaqItem = {
  question: string;
  answer: string;
};

const CDN = "/assets/";

export const aboutFaqs: FaqItem[] = [
  {
    question: "What does TDCI offer?",
    answer:
      "TDCI designs, builds, and installs, storage, display, and retail fixture solutions across multiple sectors. Our work includes shelving and racking systems, trolleys, cabinets, counters, kiosks, store fixtures, and custom pop-up displays.",
  },
  {
    question: "Do you offer custom builds?",
    answer:
      "Yes, We can manufacture custom fixtures based on your specifications or provide standard shelving and racking solutions. If your design is not yet production-ready, our team can help develop it further.",
  },
  {
    question: "What kinds of projects do you take on?",
    answer:
      "We work on kiosks, store fixtures, cashier counters, shelving and racking systems, trolleys, and custom retail displays-from single-unit builds to complete store fit-outs.",
  },
  {
    question: "Do you handle small projects or only large-scale fit-outs?",
    answer:
      "We handle a wide range of project sizes, from individual fixtures and small installations to nationwide, multi-branch rollouts.",
  },
  {
    question: "Is everything made in-house?",
    answer:
      "Nearly everything is manufactured at our own facility. For high-volume orders, we may work with trusted production partners to increase capacity. Our team continues to oversee quality control, project coordination, and installation throughout the process.",
  },
  {
    question: "Where are you based, and do you work outside Metro Manila?",
    answer:
      "We are based in Metro Manila and work with clients throughout the Philippines. We also accommodate select projects across Southeast Asia.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines depend on the project's size, specifications, and complexity. Fabrication typically takes four to six weeks after the design, materials, and production schedule have been confirmed. Material procurement, delivery, and installation time are not included in this estimate and will be outlined in your project proposal.",
  },
  {
    question: "How long does the quotation process work?",
    answer:
      "Send us your concept, drawings, site plan, project requirements, and target budget. We will review the information, clarify any missing details, and prepare a proposal based on the agreed scope. The more complete the information you provide, the faster we can prepare an accurate quotation.",
  },
  {
    question: "Can you work from a site plan, or do we need a finished design?",
    answer:
      "Either is fine. We can manufacture from a completed technical design or help develop an initial concept, site plan, and requirements into a production-ready solution. A final technical drawing and confirmed specifications will be required before we can provide a firm production quotation.",
  },
  {
    question: "What do we need to prepare an accurate quotation?",
    answer:
      "Requirements vary by project, but the following information will help us get started.\n\nFor a custom-built module—such as a kiosk, counter, or fixture—we typically need: \n - A technical drawing with dimensions\n - Material specifications\n - Finish and color specifications\n - Required quantity\n - Delivery and installation location\n\nFor shelving and racking projects, we typically need:\n - A store layout or floor plan\n - The types of gondolas or shelving units required\n - Unit dimensions and quantities\n - Delivery and installation location\n‍\nIf your documentation is not yet complete, send us what you have. We can review it and let you know what else is needed before preparing a firm quotation.",
  },
  {
    question: "Can you provide a ballpark price without drawings or a floor plan?",
    answer:
      "Not reliably. Project cost swing too widely based on materials, finishes, and specs for a number without documentation to mean anything. Send over what you have from the list above, and we'll let you know whether it is enough to prepare a proper quote or if we need additional details.",
  },
];

/**
 * CTA image columns — 5 strips, each a vertical stack of two lists of 4
 * images (live repeats each list for its marquee layout). Column 5 uses only
 * 4 images per list (5.jpg excluded per user request).
 */
export const aboutCtaColumns: string[][][] = [
  [
    [
      `${CDN}about/col1/5.avif`,
      `${CDN}about/col1/15.avif`,
      `${CDN}about/col1/23.avif`,
      `${CDN}about/col1/28.avif`,
    ],
    [
      `${CDN}about/col1/5.avif`,
      `${CDN}about/col1/15.avif`,
      `${CDN}about/col1/23.avif`,
      `${CDN}about/col1/28.avif`,
    ],
  ],
  [
    [
      `${CDN}about/col2/2.avif`,
      `${CDN}about/col2/18.avif`,
      `${CDN}about/col2/20.avif`,
      `${CDN}about/col2/26.avif`,
    ],
    [
      `${CDN}about/col2/2.avif`,
      `${CDN}about/col2/18.avif`,
      `${CDN}about/col2/20.avif`,
      `${CDN}about/col2/26.avif`,
    ],
  ],
  [
    [
      `${CDN}about/col3/8.avif`,
      `${CDN}about/col3/19.avif`,
      `${CDN}about/col3/22.avif`,
      `${CDN}about/col3/27.avif`,
    ],
    [
      `${CDN}about/col3/8.avif`,
      `${CDN}about/col3/19.avif`,
      `${CDN}about/col3/22.avif`,
      `${CDN}about/col3/27.avif`,
    ],
  ],
  [
    [
      `${CDN}about/col4/10.avif`,
      `${CDN}about/col4/16.avif`,
      `${CDN}about/col4/21.avif`,
      `${CDN}about/col4/25.avif`,
    ],
    [
      `${CDN}about/col4/10.avif`,
      `${CDN}about/col4/16.avif`,
      `${CDN}about/col4/21.avif`,
      `${CDN}about/col4/25.avif`,
    ],
  ],
  [
    [
      `${CDN}about/col5/13.avif`,
      `${CDN}about/col5/17.avif`,
      `${CDN}about/col5/24.avif`,
      `${CDN}about/col5/29.avif`,
    ],
    [
      `${CDN}about/col5/13.avif`,
      `${CDN}about/col5/17.avif`,
      `${CDN}about/col5/24.avif`,
      `${CDN}about/col5/29.avif`,
    ],
  ],
];
