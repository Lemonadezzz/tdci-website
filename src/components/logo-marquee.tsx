import Image from "next/image";

import { assets, type MarqueeLogo } from "@/lib/assets";

export default function LogoMarquee() {
  const groups = [0, 1];

  return (
    <section className="marquee" aria-label="Trusted by leading retailers">
      <div className="marquee__track">
        {groups.map((group) => (
          <div
            key={group}
            className="marquee__group"
            aria-hidden={group === 1 ? "true" : undefined}
          >
            {assets.marqueeLogos.map((logo: MarqueeLogo, index) => (
              <div
                key={`${logo.alt}-${index}`}
                className={`marquee__item${
                  logo.hideOn ? ` marquee__item--${logo.hideOn}` : ""
                }`}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={300}
                  height={96}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
