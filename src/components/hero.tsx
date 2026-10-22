import Image from "next/image";
import Link from "next/link";

import { assets } from "@/lib/assets";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg">
        <video
          className="hero__video"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={assets.hero.video.poster}
        >
          <source src={assets.hero.video.webm} type="video/webm" />
          <source src={assets.hero.video.mp4} type="video/mp4" />
        </video>
      </div>

      <div className="hero__content-wrap">
        <div className="container">
          <div className="hero__component">
            <div className="hero__grid">
              <div className="hero__logo">
                <Image
                  src={assets.hero.anniversaryLogo}
                  alt="Target Display — 30 years"
                  width={649}
                  height={620}
                  priority
                />
              </div>

              <div className="hero__content">
                <h1 className="hero__title">
                  We bring your retail concepts to life
                </h1>
                <div className="btn-group mt-8">
                  <Link href="/projects" className="btn">
                    See projects
                  </Link>
                  <Link
                    href="/about"
                    className="btn btn--secondary"
                    aria-label="Learn more about Target Display"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
