import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy" },
  description:
    "How Target Display Co., Inc. collects, uses, and protects personal data collected through targetdisplay.com, in accordance with the Philippine Data Privacy Act of 2012.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="privacy">
      <div className="privacy__pad">
        <div className="privacy__inner">
          <h1 className="privacy__title">
            <span>Target Display Co., Inc.</span>
            <span>Privacy Policy</span>
          </h1>

          <p className="privacy__date">
            <em>Effective Date: August 20, 2026</em>
          </p>

          <div className="privacy__body">
            <p>
              At <strong>Target Display Co., Inc.</strong> (&quot;Company,&quot;
              &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), accessible from{" "}
              <a href="https://www.targetdisplay.com">
                <strong>www.targetdisplay.com</strong>
              </a>
              , we prioritize the privacy and security of our visitors. This
              Privacy Policy outlines our practices regarding the collection, use,
              and disclosure of personal data in accordance with Republic Act No.
              10173, also known as the{" "}
              <strong>Data Privacy Act of 2012 (DPA)</strong> of the Philippines,
              its Implementing Rules and Regulations, and international data
              protection practices.
            </p>

            <h2>1. Principles of Data Processing</h2>
            <p>
              In compliance with the DPA, all personal data collected through this
              website is processed under three core principles:
            </p>
            <ul>
              <li>
                <strong>Transparency:</strong> We inform you clearly about what
                data is collected and why.
              </li>
              <li>
                <strong>Legitimate Purpose:</strong> Personal data is collected
                solely to support customer inquiries and website performance.
              </li>
              <li>
                <strong>Proportionality:</strong> We collect only the minimum
                amount of information necessary to respond to your requests.
              </li>
            </ul>

            <h2>2. Information We Collect</h2>
            <p>
              We collect personal, technical, and automated data across different
              touch points:
            </p>
            <ul>
              <li>
                <strong>Contact &amp; Inquiry Data:</strong> When you submit an
                inquiry via our &quot;Contact Us&quot; form, we collect your First
                Name, Last Name, Email Address, Phone Number, Company/Brand Name,
                Type of Product Interest, Project Timeline, and any text provided
                in the project description box.
              </li>
              <li>
                <strong>Automated Analytics Data:</strong> We use analytics tools
                (such as Google Analytics) to monitor website traffic and
                technical parameters. This includes aggregate data such as user
                session length, device type, browser platform, referral web pages,
                and broad geographical location.
              </li>
              <li>
                <strong>Security &amp; Network Identifiers:</strong> Our web host
                (Webflow) logs incoming IP addresses when forms are submitted for
                technical routing, spam detection, and server security.
              </li>
            </ul>

            <h2>3. Web Content Indexing &amp; Automated Crawling</h2>
            <p>
              Our website contains public product showcases, project portfolios,
              and company information. This public information is indexable by web
              crawlers, search engines, and automated AI discovery platforms (such
              as Google Search and generative AI search assistants) to display our
              brand in public search results.
            </p>
            <p className="privacy__note">
              <em>
                Note: Public web indexing processes only our published company
                content and <strong>never</strong> accesses, reads, or processes
                private user form submissions or personal customer data.
              </em>
            </p>

            <h2>4. Purpose of Collection &amp; Processing</h2>
            <p>We use collected personal data exclusively to:</p>
            <ul>
              <li>Respond to direct product, project, and service inquiries.</li>
              <li>Estimate custom production timelines and generate proposals.</li>
              <li>Ensure website stability, cybersecurity, and spam prevention.</li>
              <li>
                Optimize website structure and layout based on aggregated visitor
                analytics.
              </li>
            </ul>

            <h2>5. Third-Party Service Providers</h2>
            <p>
              We do not sell, rent, or monetize your personal information. Data is
              held securely and processed through essential infrastructure
              providers:
            </p>
            <ul>
              <li>
                <strong>Webflow:</strong> Secure platform hosting and form data
                transmission.
              </li>
              <li>
                <strong>Google Analytics:</strong> Aggregated usage statistics and
                performance tracking.
              </li>
            </ul>

            <h2>6. Data Security &amp; Retention</h2>
            <p>
              We maintain physical, technical, and organizational security
              measures to protect personal data against unauthorized access, loss,
              or alteration. Information collected through inquiry forms is
              retained only for as long as necessary to fulfill the business
              request or comply with statutory record keeping rules.
            </p>

            <h2>7. Rights of the Data Subject</h2>
            <p>
              Under the Philippine Data Privacy Act of 2012, website visitors
              possess clear rights regarding their personal data:
            </p>
            <ul>
              <li>
                <strong>Right to be Informed:</strong> To know how your personal
                data is being processed.
              </li>
              <li>
                <strong>Right to Access:</strong> To request access to the
                personal data we hold about you.
              </li>
              <li>
                <strong>Right to Object:</strong> To withhold or withdraw consent
                to data collection.
              </li>
              <li>
                <strong>Right to Erasure or Blocking:</strong> To request deletion
                of your personal data from our records under reasonable grounds.
              </li>
              <li>
                <strong>Right to Rectification:</strong> To request corrections to
                inaccurate or outdated personal information.
              </li>
            </ul>

            <h2>8. Contact Information</h2>
            <p>
              For privacy concerns, data subject requests, or questions regarding
              this policy, please reach out to our Data Protection Officer (DPO):
            </p>
            <ul>
              <li>
                <strong>TARGET DISPLAY CO., INC.</strong>
              </li>
              <li>
                <strong>Attention:</strong> Data Protection Officer
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:inquiries@targetdisplay.com">
                  inquiries@targetdisplay.com
                </a>
              </li>
              <li>
                <strong>Address:</strong> 4F Ricogen Building, 112 Aguirre St.,
                Legazpi Village, San Lorenzo, NCR Fourth District Makati City,
                1229
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
