"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "td_cookie_consent";
const CONSENT_VERSION = 1;
export const COOKIE_OPEN_EVENT = "td:open-cookie-settings";
const CHANGE_EVENT = "td:consent-change";

type Consent = {
  version: number;
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
};

type Choice = Pick<Consent, "analytics" | "marketing">;
type View = "banner" | "settings" | null;

function readConsent(): Consent | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<Consent>;
    if (parsed.version !== CONSENT_VERSION) return null;
    return {
      version: CONSENT_VERSION,
      necessary: true,
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
      updatedAt: typeof parsed.updatedAt === "string" ? parsed.updatedAt : "",
    };
  } catch {
    return null;
  }
}

/**
 * Publishes the stored choice so analytics/marketing scripts can gate on it.
 * Anything that wants to react can listen for `td:consent-change`, read
 * `data-cookie-analytics` / `data-cookie-marketing` on <html>, or use
 * Google Consent Mode (`gtag`) if it is loaded.
 */
function applyConsent(choice: Choice) {
  const root = document.documentElement;
  root.dataset.cookieAnalytics = choice.analytics ? "granted" : "denied";
  root.dataset.cookieMarketing = choice.marketing ? "granted" : "denied";

  type ConsentMode = (command: "consent", action: "update", payload: Record<string, string>) => void;
  const gtag = (window as unknown as { gtag?: ConsentMode }).gtag;

  if (typeof gtag === "function") {
    gtag("consent", "update", {
      analytics_storage: choice.analytics ? "granted" : "denied",
      ad_storage: choice.marketing ? "granted" : "denied",
      ad_user_data: choice.marketing ? "granted" : "denied",
      ad_personalization: choice.marketing ? "granted" : "denied",
    });
  }

  window.dispatchEvent(
    new CustomEvent<Choice>(CHANGE_EVENT, { detail: choice }),
  );
}

export default function CookieConsent() {
  const [view, setView] = useState<View>(null);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const returnViewRef = useRef<View>(null);

  // Decide on first paint (client only) whether to show the banner.
  // localStorage cannot be read during render without desyncing hydration, so
  // this state update after mount is intentional.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    const saved = readConsent();
    if (saved) {
      setAnalytics(saved.analytics);
      setMarketing(saved.marketing);
      applyConsent(saved);
    } else {
      setView("banner");
    }
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  const openSettings = useCallback((from: View) => {
    const saved = readConsent();
    if (saved) {
      setAnalytics(saved.analytics);
      setMarketing(saved.marketing);
    }
    returnFocusRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    returnViewRef.current = from;
    setView("settings");
  }, []);

  // Footer "Cookie settings" link (or anything else) can reopen the panel.
  useEffect(() => {
    const onOpen = () => openSettings(readConsent() ? null : "banner");
    window.addEventListener(COOKIE_OPEN_EVENT, onOpen);
    return () => window.removeEventListener(COOKIE_OPEN_EVENT, onOpen);
  }, [openSettings]);

  const closeSettings = useCallback(() => {
    const target = returnFocusRef.current;
    if (target && document.contains(target)) target.focus();
    setView(returnViewRef.current);
  }, []);

  // Modal behaviour: Escape to close, lock the page behind it, trap focus.
  useEffect(() => {
    if (view !== "settings") return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeSettings();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && (active === first || active === dialogRef.current)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    dialogRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [view, closeSettings]);

  const save = useCallback((choice: Choice) => {
    const consent: Consent = {
      version: CONSENT_VERSION,
      necessary: true,
      analytics: choice.analytics,
      marketing: choice.marketing,
      updatedAt: new Date().toISOString(),
    };

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    } catch {
      // Private mode / storage disabled — the choice still applies for this visit.
    }

    setAnalytics(consent.analytics);
    setMarketing(consent.marketing);
    applyConsent(consent);
    setView(null);
  }, []);

  if (!view) return null;

  return (
    <>
      {view === "banner" ? (
        <div className="cookie-banner" role="region" aria-label="Cookie notice">
          <p className="cookie-banner__title">We value your privacy</p>
          <p className="cookie-banner__text">
            We use cookies to keep this site working, understand how it is used,
            and improve your experience. You can accept all, reject
            non-essential cookies, or choose what to allow. See our{" "}
            <Link href="/privacy-policy" className="cookie-link">
              Privacy Policy
            </Link>
            .
          </p>
          <div className="cookie-banner__actions">
            <button
              type="button"
              className="cookie-btn cookie-btn--primary"
              onClick={() => save({ analytics: true, marketing: true })}
            >
              Accept all
            </button>
            <button
              type="button"
              className="cookie-btn cookie-btn--ghost"
              onClick={() => save({ analytics: false, marketing: false })}
            >
              Reject non-essential
            </button>
            <button
              type="button"
              className="cookie-btn cookie-btn--link"
              onClick={() => openSettings("banner")}
            >
              Cookie settings
            </button>
          </div>
        </div>
      ) : null}

      {view === "settings" ? (
        <div className="cookie-modal" role="presentation">
          <div
            className="cookie-modal__backdrop"
            onClick={closeSettings}
            aria-hidden="true"
          />
          <div
            className="cookie-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-dialog-title"
            aria-describedby="cookie-dialog-desc"
            tabIndex={-1}
            ref={dialogRef}
          >
            <h2 className="cookie-dialog__title" id="cookie-dialog-title">
              Cookie settings
            </h2>
            <p className="cookie-dialog__text" id="cookie-dialog-desc">
              Choose which cookies this site may use. Strictly necessary cookies
              are always on because the site cannot work without them. You can
              change this at any time from the {""}
              <span className="cookie-nowrap">footer</span> of any page.
            </p>

            <div className="cookie-option">
              <div className="cookie-option__text">
                <p className="cookie-option__label">Strictly necessary</p>
                <p className="cookie-option__desc">
                  Required for the site to function, such as remembering your
                  cookie choice and submitting forms securely. These cannot be
                  switched off.
                </p>
              </div>
              <span className="cookie-badge">Always on</span>
            </div>

            <div className="cookie-option">
              <div className="cookie-option__text">
                <p className="cookie-option__label">Analytics</p>
                <p className="cookie-option__desc">
                  Helps us understand which pages are visited so we can improve
                  the site. Reported in aggregate, never used to identify you.
                </p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={analytics}
                aria-label="Allow analytics cookies"
                className={`cookie-switch${analytics ? " is-on" : ""}`}
                onClick={() => setAnalytics((value) => !value)}
              >
                <span className="cookie-switch__thumb" />
              </button>
            </div>

            <div className="cookie-option">
              <div className="cookie-option__text">
                <p className="cookie-option__label">Marketing</p>
                <p className="cookie-option__desc">
                  Used to measure campaigns and show more relevant content. Off
                  by default.
                </p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={marketing}
                aria-label="Allow marketing cookies"
                className={`cookie-switch${marketing ? " is-on" : ""}`}
                onClick={() => setMarketing((value) => !value)}
              >
                <span className="cookie-switch__thumb" />
              </button>
            </div>

            <div className="cookie-dialog__actions">
              <button
                type="button"
                className="cookie-btn cookie-btn--primary"
                onClick={() => save({ analytics, marketing })}
              >
                Save preferences
              </button>
              <button
                type="button"
                className="cookie-btn cookie-btn--ghost"
                onClick={() => save({ analytics: true, marketing: true })}
              >
                Accept all
              </button>
              <button
                type="button"
                className="cookie-btn cookie-btn--link"
                onClick={closeSettings}
              >
                Cancel
              </button>
            </div>

            <p className="cookie-dialog__footnote">
              Details on what we collect and why are in our{" "}
              <Link href="/privacy-policy" className="cookie-link">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
