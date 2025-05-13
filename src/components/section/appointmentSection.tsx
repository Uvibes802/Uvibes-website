"use client";
import "../../styles/section/appointmentSection.css";
import { useEffect, useState } from "react";
import { CalendlyStyledButton } from "../../styles/button/CalendlyButton";

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
      <h2 className="title-h2-orange">
        Découvrez comment Uvibes peut s&apos;adapter à vos besoins
      </h2>
      <div className="appointment-button-container">
        <CalendlyStyledButton
          url="https://calendly.com/uvibescommunication/30min"
          rootElement={document.body}
          text="PARLER A UN CONSEILLER"
        />
      </div>
    </section>
  );
}
