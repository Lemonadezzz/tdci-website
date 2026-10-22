// src/app/about/page.tsx
import { Metadata } from "next";
import Link from "next/link";

import { aboutCtaColumns, aboutFaqs } from "@/lib/aboutData";
import FaqAccordion from "@/components/faq-accordion";

const DESCRIPTION =
  "A Manila-based shopfitting company building retail fixtures since 1996. One in-house facility, one team, from first drawing to final handover.";

export const metadata: Metadata = {
  title: { absolute: "About Us" },
  description: DESCRIPTION,
  openGraph: {
    title: "About Us",
    description: DESCRIPTION,
  },
  twitter: {
    title: "About Us",
    description: DESCRIPTION,
  },
};

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="about-hero">
        <div className="about-hero-global">
          <div className="about-hero-container">
            <div className="about-hero-content">
              <div className="about-hero-left">
                <div className="about-hero-heading-wrap">
                  <h1 className="about-hero-heading">Building Stores Since 1996</h1>
                </div>
                {/* Empty spacer wrapper, present on the live layout */}
                <div className="about-hero-heading-wrap" />
                <div>
                  <div className="about-hero-text">
                  For 30 years, Target Display Co., Inc. has created kiosks, store
                  fixtures, shelving systems, and custom displays for some of the
                  Philippines&#x27; leading retail names.
                  {"\n\n"}
                  With our own fabrication facility, specialized machinery, and
                  experienced installation crews, one team guides each project
                  from the first drawing to final handover; from concept through
                  production to on-site install.
                  {"\n\n"}
                  Whether you have a finished concept or simply a site plan,
                  requirements, and budget, we help turn your ideas into durable,
                  production-ready solutions, built to perform, not just look
                  good.
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="about-faq">
        <div className="about-faq-global">
          <div className="about-faq-container">
            <div className="about-faq-pad">
              <div className="about-faq-component">
                <div className="about-faq-head">
                  <div className="about-faq-head-inner">
                    <h2 className="about-faq-heading">FAQs</h2>
                    <div className="about-faq-heading-gap" />
                    <p className="about-faq-sub">
                      Find answers to common questions about Target Display and
                      our solutions
                    </p>
                  </div>
                </div>

                <FaqAccordion items={aboutFaqs} />

                <div className="about-faq-cta">
                  <div className="about-faq-cta-inner">
                    <div className="about-faq-cta-heading-wrap">
                      <h3 className="about-faq-cta-heading">Need more help?</h3>
                    </div>
                    <p className="about-faq-cta-text">
                      Reach out to our team directly
                    </p>
                  </div>
                  <div className="about-faq-cta-btn-wrap">
                    <Link href="/contact" className="btn btn--secondary">
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Image banner (header79) ── */}
      <section className="about-cta">
        <div className="about-cta-pad">
          <div className="about-cta-component">
            <div className="about-cta-clip">
              <div className="about-cta-grid">
                {aboutCtaColumns.map((column, ci) => (
                  <div key={ci} className="about-cta-col">
                    {column.map((list, li) => (
                      <div key={li} className="about-cta-list">
                        {list.map((src, ii) => (
                          <div key={ii} className="about-cta-wrap">
                            <img
                              src={src}
                              alt=""
                              loading="lazy"
                              className="about-cta-img"
                            />
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
