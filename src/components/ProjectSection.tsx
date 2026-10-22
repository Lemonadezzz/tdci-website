// src/components/ProjectSection.tsx
import Link from "next/link";

import type { Project } from "@/lib/projectsData";

type Props = Project;

/** One half of a strip: two lists of 3 images each (Webflow marquee copies). */
function ImageList({ images }: { images: string[] }) {
  return (
    <>
      <div className="proj-images-list">
        {images.slice(0, 3).map((src, i) => (
          <div key={`a${i}`} className="proj-img-wrapper">
            <img src={src} alt="" loading="lazy" className="proj-img" />
          </div>
        ))}
      </div>
      <div className="proj-images-list">
        {images.slice(3, 6).map((src, i) => (
          <div key={`b${i}`} className="proj-img-wrapper">
            <img src={src} alt="" loading="lazy" className="proj-img" />
          </div>
        ))}
      </div>
    </>
  );
}

export default function ProjectSection({
  logoSrc,
  logoSrcSet,
  logoAlt,
  location,
  description,
  productsUtilized,
  imageRowTop,
  imageRowBottom,
  emptyTagsRow,
}: Props) {
  return (
    <section className="proj-section">
      <div className="proj-component">
        <div className="proj-content-left">
          <div className="proj-logo-block">
            <div className="proj-logo-stack">
              <div className="proj-logo-row">
                <img
                  src={logoSrc}
                  srcSet={logoSrcSet}
                  alt={logoAlt}
                  loading="lazy"
                  className="proj-logo-img"
                />
              </div>
              <div className="proj-location">{location}</div>
            </div>
          </div>

          <p className="proj-description">{description}</p>

          <div className="proj-products-label">Products utilized:</div>

          <div className="proj-tags">
            {productsUtilized.map((tag) => (
              <Link
                key={tag.href}
                href={tag.href}
                className="proj-tag"
                style={{ backgroundColor: tag.color }}
              >
                {tag.label}
              </Link>
            ))}
          </div>

          {emptyTagsRow && <div className="proj-tags" aria-hidden="true" />}
        </div>

        <div className="proj-content-right">
          <div className="proj-images-layout">
            <div className="proj-images-row proj-images-row--top">
              <ImageList images={imageRowTop} />
            </div>
            <div className="proj-images-row proj-images-row--bottom">
              <ImageList images={imageRowBottom} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
