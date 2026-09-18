"use client";

import { useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(true);

  function handleChoice() {
    setVisible(false);
  }

  if (!visible) {
    return null;
  }

  return (
    <aside
      className="cookie-consent"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="cookie-consent-content">
        <div className="cookie-consent-text">
          <span className="cookie-consent-label">
            [ COOKIE NOTICE ]
          </span>

          <h2>We use cookies.</h2>

          <p>
            ChainLab uses essential browser storage to remember
            preferences and improve your experience.
          </p>
        </div>

        <div className="cookie-consent-actions">
          <button
            type="button"
            className="cookie-button cookie-button-secondary"
            onClick={handleChoice}
          >
            DECLINE
          </button>

          <button
            type="button"
            className="cookie-button cookie-button-primary"
            onClick={handleChoice}
          >
            ACCEPT
          </button>
        </div>
      </div>
    </aside>
  );
}