// src/components/product-categories.tsx
import Image from "next/image";
import Link from "next/link";

import { assets } from "@/lib/assets";

type CategoryCard = {
  label: string;
  href: string;
  image: string;
};

type CategoryGroup = {
  header: {
    title: string;
    description?: string;
  };
  cards: CategoryCard[];
};

const columns: CategoryGroup[] = [
  {
    header: {
      title: "Food Retail",
      description: "Durable fixtures built for high-traffic grocery environments",
    },
    cards: [
      { label: "Shelving", href: "/shelving", image: assets.categories.shelving },
      { label: "Store Equipment", href: "/store-equipment", image: assets.categories.storeEquipment },
      { label: "Food Concepts & Beverage Displays", href: "/fresh-concepts", image: assets.categories.foodConcepts },
    ],
  },
  {
    header: {
      title: "Non-Food Retail",
      description: "Flexible displays for apparel, lifestyle, and specialty retail.",
    },
    cards: [
      { label: "Cabinets & Counters", href: "/cabinets-counters", image: assets.categories.cabinetsCounters },
      { label: "Pop-Ups & Kiosks", href: "/pop-ups-kiosks", image: assets.categories.popUpsKiosks },
    ],
  },
  {
    header: { title: "Shared Solutions", description: "Modular solutions that work across every retail space." },
    cards: [
      { label: "Checkout Counters", href: "/cabinets-counters", image: assets.categories.checkoutCounters },
      { label: "Pop-Ups & Kiosks", href: "/pop-ups-kiosks", image: assets.categories.popUpsKiosksAlt },
    ],
  },
];

export default function ProductCategories() {
  return (
    <section className="section">
      <div className="container">
        <div className="section__inner">
          <div className="heading-block">
            <div className="heading-block__inner">
              <h2 className="h2">The right display for every retail need</h2>
              <p className="body-lg">
                We build displays that work as hard as you do. Each product
                line is engineered for performance, durability, and the kind of
                visual impact that stops customers in their tracks.
              </p>
            </div>
          </div>

          <div className="categories">
            {columns.map((group, gi) => (
              <div key={gi} className="categories__column">
                <div className="category-card category-card--header">
                  <div className="category-card__content">
                    <h3 className="h3">{group.header.title}</h3>
                    {group.header.description && (
                      <p className="category-card__desc">{group.header.description}</p>
                    )}
                  </div>
                </div>

                {group.cards.map((card) => (
                  <Link
                    key={card.label}
                    href={card.href}
                    className="category-card category-card--image"
                  >
                    <div className="category-card__media">
                      <Image
                        src={card.image}
                        alt=""
                        fill
                        sizes="(max-width: 991px) 100vw, 33vw"
                      />
                    </div>
                    <div className="category-card__content">
                      <h3 className="h3">{card.label}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            ))}
          </div>

          <div className="btn-group btn-group--center mt-10">
            <Link href="/contact" className="btn">
              Need a Custom Solution?
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
