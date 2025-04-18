"use client";
import "../../styles/section/appointmentSection.css";
import { useEffect, useState } from "react";
import { PopupButton } from "react-calendly";

export function AppointmentSection() {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isBrowser) {
    return null;
  }

  return (
    <section className="appointment-section">
      <h3>Découvrez comment Uvibes peut s&apos;adapter à vos besoins</h3>
      <div className="appointment-button-container">
        <PopupButton
          url="https://calendly.com/justine-cousin-wbx/demo-uvibes" //A remplacer//
          rootElement={document.body}
          className="calendly-button"
          text="Parler à un conseiller"
        />
      </div>
    </section>
  );
}
