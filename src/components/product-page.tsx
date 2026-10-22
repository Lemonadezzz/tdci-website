// src/components/product-page.tsx
import Link from "next/link";

import type { ProductCard, ProductPageData } from "@/lib/productPages";

/* ── Hero: two vertical marquee strips (header76) ── */
function HeroStrip({ images, side }: { images: string[]; side: "left" | "right" }) {
  const list = [...images, ...images];
  return (
    <div className={`sh-hero-strip sh-hero-strip--${side}`}>
      {list.map((src, i) => (
        <div key={i} className="sh-hero-wrap">
          <img src={src} alt="" loading="lazy" className="sh-hero-img" />
        </div>
      ))}
    </div>
  );
}

/* ── Hero: two horizontal image rows (header77) ── */
function HeroRow({ images, top }: { images: string[]; top?: boolean }) {
  const list = [...images, ...images];
  return (
    <div className={`sh-hero-row${top ? " sh-hero-row--top" : ""}`}>
      {list.map((src, i) => (
        <div key={i} className="sh-hero-row-item">
          <img src={src} alt="" loading="lazy" className="sh-hero-row-img" />
        </div>
      ))}
    </div>
  );
}

function ProductCardItem({ card }: { card: ProductCard }) {
  const modifier = card.large
    ? ` sh-card--large${card.largeRight ? " sh-card--large-right" : ""}`
    : " sh-card--small";

  return (
    <div className={`sh-card${modifier}`}>
      <div className="sh-card-media">
        <img src={card.image} alt="" loading="lazy" className="sh-card-img" />
      </div>
      <div className="sh-card-content">
        <h3 className="sh-card-title">{card.title}</h3>
        <p className="sh-card-body">{card.body}</p>
      </div>
    </div>
  );
}

export function ProductPageView({ data }: { data: ProductPageData }) {
  const { hero, section, builtFor, cta } = data;
  const contactHref = `/contact?topic=${data.topic}`;

  return (
    <>
      {/* ── Hero ── */}
      <section className="sh-hero">
        <div className="sh-hero-component">
          <div className="sh-hero-left">
            <div className="sh-hero-heading-wrap">
              <h1 className="sh-hero-heading">{data.title}</h1>
            </div>
            <p className="sh-hero-body">{data.intro}</p>
            <div className="sh-hero-btn-wrap">
              <Link href={contactHref} className="btn">
                Inquire Now
              </Link>
            </div>
          </div>

          {hero.variant === "columns" ? (
            <div className="sh-hero-right">
              <div className="sh-hero-layout">
                <HeroStrip images={hero.left} side="left" />
                <HeroStrip images={hero.right} side="right" />
              </div>
            </div>
          ) : (
            <div className="sh-hero-right sh-hero-right--rows">
              <div className="sh-hero-rows">
                <HeroRow images={hero.top} top />
                <HeroRow images={hero.bottom} />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Types / range (layout374 or layout375) ── */}
      <section className="sh-types">
        <div className="sh-types-pad">
          <div className="sh-types-container">
            <div className="sh-types-section">
              <div className="sh-types-head">
                <div className="sh-types-head-inner">
                  <div className="sh-types-heading-wrap">
                    <h2 className="sh-types-heading">{section.heading}</h2>
                  </div>
                  <p className="sh-types-body">{section.body}</p>
                </div>
              </div>

              <div className="sh-types-grid">
                <div className={`sh-types-row sh-types-row--${section.layout}`}>
                  {section.cards.map((card) => (
                    <ProductCardItem key={card.title} card={card} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {!builtFor && (
            <div className="sh-built-btn-wrap">
              <Link href={contactHref} className="sh-built-btn" aria-label={cta.label}>
                {cta.text}
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ── Built For / Used For (layout228) ── */}
      {builtFor && (
        <section className="sh-built">
          <div className="sh-built-pad">
            <div className="sh-built-heading-wrap">
              <h2 className="sh-built-heading">{builtFor.heading}</h2>
            </div>
            <div className="sh-built-container">
              <div className="sh-built-section">
                <div className="sh-built-list">
                  {builtFor.items.map((item) => (
                    <div key={item.label} className="sh-built-item">
                      <div className="sh-built-icon-wrap">
                        <img
                          src={item.icon}
                          alt=""
                          loading="lazy"
                          className={`sh-built-icon${item.large ? " sh-built-icon--large" : ""}`}
                        />
                      </div>
                      <div className="sh-built-label-wrap">
                        <h3 className="sh-built-label">{item.label}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="sh-built-btn-wrap">
              <Link href={contactHref} className="sh-built-btn" aria-label={cta.label}>
                {cta.text}
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
