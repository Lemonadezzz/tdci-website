"use client";

import { COOKIE_OPEN_EVENT } from "./cookie-consent";

export default function CookieSettingsButton() {
  return (
    <button
      type="button"
      className="footer__legal footer__legal--button"
      onClick={() => {
        window.dispatchEvent(new CustomEvent(COOKIE_OPEN_EVENT));
      }}
    >
      Cookie settings
    </button>
  );
}
