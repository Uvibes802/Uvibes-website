"use client";

declare global {
  interface Window {
    gtag: (command: string, ...args: unknown[]) => void;
  }
}

import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import "../styles/cookie.css";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    } else if (consent === "accepted") {
      // Si déjà accepté, configurer GA immédiatement
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("config", "G-N068M873WC", {
          send_page_view: true,
          debug_mode: true,
        });
        console.log("Google Analytics configured from existing consent");
      }
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set("cookie-consent", "accepted", { expires: 365 });
    setShowBanner(false);
    // Réinitialiser Google Analytics avec le consentement
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
      // Configurer Google Analytics et envoyer la vue de page initiale après acceptation
      window.gtag("config", "G-N068M873WC", {
        send_page_view: true,
        debug_mode: true,
      });
      console.log(
        "Google Analytics configured and page view sent after acceptance"
      );

      // Test event après acceptation
      window.gtag("event", "test_event", {
        event_category: "testing",
        event_label: "consent_accepted",
      });
      console.log("Test event sent after acceptance");
    }
  };

  const refuseCookies = () => {
    Cookies.set("cookie-consent", "refused", { expires: 365 });
    setShowBanner(false);
    // Désactiver Google Analytics
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
      });
      console.log("Google Analytics consent denied");
    }
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-container">
        <p className="cookie-text">
          Nous utilisons des cookies pour améliorer votre expérience sur notre
          site. En continuant à naviguer, vous acceptez notre utilisation des
          cookies.
        </p>
        <div className="cookie-buttons">
          <button onClick={acceptCookies} className="accept-button">
            Accepter
          </button>
          <button onClick={refuseCookies} className="refuse-button">
            Refuser
          </button>
        </div>
      </div>
    </div>
  );
}
