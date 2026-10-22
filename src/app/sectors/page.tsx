// src/app/sectors/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Sectors" },
  description:
    "Retail sectors we serve — supermarkets, fashion, beauty, specialty retail, eyewear and optical, and food & beverage.",
};

type Sector = {
  title: string;
  body: string;
  image: string;
};

const sectors: Sector[] = [
  {
    title: "Supermarkets & Grocery",
    body: "Gondolas, wall shelving, checkout counters, fresh food displays, trolleys, storage, and custom fixtures designed for busy stores and everyday use.",
    image: "/assets/sectors/supermarket.avif",
  },
  {
    title: "Fashion & Lifestyle",
    body: "Garment displays, wall systems, feature tables, counters, cabinetry, and branded fixtures built around your visual merchandising and store concepts.",
    image: "/assets/sectors/fashion.avif",
  },
  {
    title: "Beauty & Wellness",
    body: "Tester units, illuminated displays, cosmetic modules, counters, shelving, and branded fixtures developed around your products and brand guidelines.",
    image: "/assets/sectors/beauty.avif",
  },
  {
    title: "Specialty Retail",
    body: "Display and merchandising systems for electronic, appliance, and specialty concept stores.",
    image: "/assets/sectors/specialty.avif",
  },
  {
    title: "Eyewear & Optical",
    body: "Illuminated eyewear displays, wall fixtures, storage, consultation counters, and back-of-house cabinetry for optical stores and eyewear brands.",
    image: "/assets/sectors/eyewear.avif",
  },
  {
    title: "Food & Beverage",
    body: "Service counters, food displays, merchandising fixtures, cabinetry, storage, and custom solutions developed around day-to-day operations.",
    image: "/assets/sectors/food.avif",
  },
];

export default function SectorsPage() {
  return (
    <>
      {/* ── Intro (layout13) ── */}
      <section className="secs">
        <div className="secs-pad">
          <div className="secs-container">
            <div className="secs-section">
              <div className="secs-intro">
                <div className="secs-intro-left">
                  <div className="secs-heading-wrap">
                    <h1 className="secs-heading">Sectors we serve</h1>
                  </div>
                  <div className="secs-body-wrap">
                    <p className="secs-body">
                      From high-traffic supermarkets to premium boutiques, every
                      space has different requirements. We build fixtures,
                      displays, and retail environments around how your products
                      are presented, how your team operates, and how your
                      customers move through the space.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sector list (portfolio15) ── */}
      <section className="secs">
        <div className="secs-pad">
          <div className="secs-container">
            <div className="secs-section">
              <div className="secs-list">
                {sectors.map((sector) => (
                  <div key={sector.title} className="secs-item">
                    <Link href="#" className="secs-item-link">
                      <div className="secs-item-text">
                        <div className="secs-item-title-wrap">
                          <h2 className="secs-item-title">{sector.title}</h2>
                        </div>
                        <p className="secs-item-body">{sector.body}</p>
                      </div>
                      <div className="secs-item-media">
                        <img
                          src={sector.image}
                          alt=""
                          loading="lazy"
                          className="secs-item-img"
                        />
                      </div>
                    </Link>
                  </div>
                ))}
              </div>

              <div className="secs-cta-wrap">
                <Link href="/contact" className="secs-cta">
                  Inquire Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
