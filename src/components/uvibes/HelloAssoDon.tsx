import { useState } from "react";

export default function HelloAssoDon() {
  const [showIframe, setShowIframe] = useState(false);

  return (
    <div className="uvibes-contact-button-container">
      <button
        className="uvibes-contact-button"
        onClick={() => setShowIframe(true)}
        type="button"
      >
        Aider financièrement le projet
      </button>
      {showIframe && (
        <iframe
          id="haWidget"
          allowTransparency={true}
          scrolling="auto"
          src="https://www.helloasso.com/associations/eclat-ens/formulaires/1/widget"
          style={{ width: "100%", height: "750px", border: "none" }}
          title="Formulaire de don pour l'association Eclat'Ens"
        />
      )}
    </div>
  );
}
