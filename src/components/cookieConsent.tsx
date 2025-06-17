"use client";

declare global {
  interface Window {
    gtag: (command: string, ...args: unknown[]) => void;
  }
}

import Cookies from "js-cookie";
import Image from "next/image";
import { useEffect, useState } from "react";
import LogoUvibes from "../../public/images/Logo UVIBES.png";
import "../styles/cookie.css";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Vérifie si l'utilisateur a déjà fait son choix
    const consent = Cookies.get("cookie-consent");
    if (!consent) {
      setShowBanner(true);
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
    }
  };

  const refuseCookies = () => {
    Cookies.set("cookie-consent", "refused", { expires: 365 });
    setShowBanner(false);
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
      });
    }
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-container">
        <Image src={LogoUvibes} alt="logo uvibes" width={300} height={100} />
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
