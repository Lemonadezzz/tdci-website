import { Metadata } from "next";
import { Suspense } from "react";

import { site } from "@/lib/site";
import ContactForm from "@/components/contact-form";
import { MailIcon, PhoneIcon, MapPinIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Target Display Co., Inc. for custom retail displays, shelving, racking, and store fixtures.",
};

export default function ContactPage() {
  return (
    <div className="contact-page-wrapper">
      {/* Section: Contact Form */}
      <section className="section section_contact2">
        <div className="container">
          <div className="section__inner">
            <div className="contact2_component">
              <div className="contact-header margin-bottom-xxlarge text-center">
                <h1 className="heading-style-h2">Get in touch</h1>
                <p className="text-size-medium text-muted">
                  We&apos;re here to help with your display needs
                </p>
              </div>

              <div className="contact2_form-block">
                <Suspense
                  fallback={
                    <div className="contact2_loading text-center text-muted">
                      Loading form...
                    </div>
                  }
                >
                  <ContactForm />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Direct Contact & Map */}
      <section className="section section_contact14 section--surface">
        <div className="container">
          <div className="section__inner">
            <div className="contact14_component">
              <div className="contact-header margin-bottom-xxlarge">
                <h2 className="heading-style-h2 text-left">Let&apos;s talk</h2>
                <p className="text-size-medium text-muted text-left">
                  Contact us directly for your project
                </p>
              </div>

              <div className="contact14_content">
                <div className="contact14_content-left">
                  <div className="contact14_contact-list">
                    {/* Email Item */}
                    <div className="contact14_item">
                      <div className="contact14_item-header">
                        <div className="icon-embed-small">
                          <MailIcon />
                        </div>
                        <h3 className="heading-style-h6">Email</h3>
                      </div>
                      <div className="contact14_item-desc">
                        Send us your inquiry
                      </div>
                      <a
                        href={`mailto:${site.email}`}
                        className="text-style-link"
                      >
                        {site.email}
                      </a>
                    </div>

                    {/* Phone Item */}
                    <div className="contact14_item">
                      <div className="contact14_item-header">
                        <div className="icon-embed-small">
                          <PhoneIcon />
                        </div>
                        <h3 className="heading-style-h6">Phone</h3>
                      </div>
                      <div className="contact14_phone-links">
                        <a
                          href={`tel:${site.phone1.replace(/\s+/g, "")}`}
                          className="text-style-link"
                        >
                          {site.phone1}
                        </a>
                        <a
                          href={`tel:${site.phone2.replace(/\s+/g, "")}`}
                          className="text-style-link"
                        >
                          {site.phone2}
                        </a>
                      </div>
                    </div>

                    {/* Office Item */}
                    <div className="contact14_item">
                      <div className="contact14_item-header">
                        <div className="icon-embed-small">
                          <MapPinIcon />
                        </div>
                        <h3 className="heading-style-h6">Office</h3>
                      </div>
                      <div className="contact14_address">
                        {site.address}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Wrapper */}
                <div className="contact14_map-wrapper">
                  <iframe
                    title="Target Display Office Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d348.81359493765393!2d121.0170417868095!3d14.552690252345194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c911efd4f1bd%3A0x19ae3abbf0310f62!2sTarget%20Display%20Co.%2C%20Inc.!5e0!3m2!1sen!2sph!4v1785813863811!5m2!1sen!2sph"
                    width="100%"
                    height="100%"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
