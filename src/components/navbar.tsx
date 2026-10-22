"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import { assets } from "@/lib/assets";
import { navLinks, productLinks } from "@/lib/site";
import { ChevronDownIcon, productIcons } from "./icons";

const LOGO_WIDTH = 1176;
const LOGO_HEIGHT = 214;

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
    setProductsOpen(false);
    setMobileProductsOpen(false);
  }


  // Close the desktop dropdown when clicking outside of it.
  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setProductsOpen(false);
      }
    }
    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

  // Prevent background scrolling while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const productsLink = productLinks.map((item) => {
    const Icon = productIcons[item.icon];
    return { ...item, Icon };
  });

  return (
    <>
      <header className={`navbar${mobileOpen ? " is-open" : ""}`}>
        <div className="navbar__inner">
          <Link href="/" className="navbar__logo" aria-label="Target Display home">
            <Image
              src={assets.logo}
              alt="Target Display"
              width={LOGO_WIDTH}
              height={LOGO_HEIGHT}
              priority
            />
          </Link>

          <nav className="navbar__menu" aria-label="Primary">
            <div className="navbar__links">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div
                    key={link.label}
                    className={`dropdown${productsOpen ? " is-open" : ""}`}
                    ref={dropdownRef}
                    onMouseEnter={() => setProductsOpen(true)}
                    onMouseLeave={() => setProductsOpen(false)}
                    onFocus={() => setProductsOpen(true)}
                    onBlur={(event) => {
                      if (!event.currentTarget.contains(event.relatedTarget)) {
                        setProductsOpen(false);
                      }
                    }}
                  >
                    <button
                      type="button"
                      className="dropdown__toggle"
                      aria-expanded={productsOpen}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <span className="dropdown__chevron" aria-hidden="true">
                        <ChevronDownIcon />
                      </span>
                    </button>
                    <div className="dropdown__list" role="menu">
                      <div className="dropdown__content">
                        <div className="dropdown__column">
                          <p className="dropdown__column-title">Products</p>
                          {productsLink.map(
                            ({ label, description, href, Icon }) => (
                              <Link
                                key={label}
                                href={href}
                                className="dropdown__item"
                                role="menuitem"
                              >
                                <span className="dropdown__item-icon">
                                  <Icon />
                                </span>
                                <span className="dropdown__item-text">
                                  <span className="dropdown__item-label">
                                    {label}
                                  </span>
                                  <span className="dropdown__item-desc">
                                    {description}
                                  </span>
                                </span>
                              </Link>
                            ),
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`navbar__link${
                      isActive(pathname, link.href) ? " is-active" : ""
                    }`}
                    aria-current={isActive(pathname, link.href) ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </div>

            <div className="navbar__buttons">
              <Link href="/contact" className="btn btn--small">
                Contact Us
              </Link>
            </div>
          </nav>

          <button
            type="button"
            className="navbar__toggle"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span className="navbar__toggle-bars" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      <div className={`mobile-menu${mobileOpen ? " is-open" : ""}`}>
        <nav aria-label="Mobile">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.label}>
                <button
                  type="button"
                  className="mobile-menu__group-title"
                  aria-expanded={mobileProductsOpen}
                  onClick={() => setMobileProductsOpen((open) => !open)}
                >
                  {link.label}
                  <ChevronDownIcon className="w-4 h-4" />
                </button>
                {mobileProductsOpen && (
                  <div className="mobile-menu__sub">
                    {productLinks.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="mobile-menu__link"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={`mobile-menu__link${
                  isActive(pathname, link.href) ? " is-active" : ""
                }`}
              >
                {link.label}
              </Link>
            ),
          )}
          <div className="mobile-menu__buttons">
            <Link href="/contact" className="btn btn--block">
              Contact Us
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
