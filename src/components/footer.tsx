import Link from "next/link";
import Image from "next/image";

import { assets } from "@/lib/assets";
import { site } from "@/lib/site";
import CurrentYear from "./current-year";
import CookieSettingsButton from "./cookie-settings-button";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "./icons";

const LOGO_WIDTH = 1176;
const LOGO_HEIGHT = 214;

const footerLinks = [
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Careers", href: site.social.careers, external: true },
  { label: "Contact Us", href: "/contact" },
];

const socialLinks = [
  { label: "Visit our Facebook page", href: site.social.facebook, Icon: FacebookIcon },
  { label: "Follow us on Instagram", href: site.social.instagram, Icon: InstagramIcon },
  { label: "Follow us on LinkedIn", href: site.social.linkedin, Icon: LinkedInIcon },
];

export default function Footer() {
  return (
    <footer className="section footer">
      <div className="container">
        <div className="footer__top">
          <Link href="/" className="footer__logo" aria-label="Target Display home">
            <Image
              src={assets.logo}
              alt="Target Display"
              width={LOGO_WIDTH}
              height={LOGO_HEIGHT}
            />
          </Link>

          <nav className="footer__links" aria-label="Footer">
            {footerLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="footer__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ) : (
                <Link key={link.label} href={link.href} className="footer__link">
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          <div className="footer__social">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                className="footer__social-link"
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__credit">
            © <CurrentYear /> {site.legalName} All rights reserved.
          </p>
          <Link href="/privacy-policy" className="footer__legal">
            Privacy policy
          </Link>
          <CookieSettingsButton />
        </div>
      </div>
    </footer>
  );
}
