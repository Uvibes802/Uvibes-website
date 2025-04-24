import { useState } from "react";

export default function TeamSection() {
  const [activeButton, setActiveButton] = useState("Equipe projet");

  const tabs = [
    "Equipe projet",
    "Les chargés de com'",
    "Les architectes du code",
  ];

  return (
    <div>
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`uvibes-button ${activeButton === tab ? "active" : ""}`}
          onClick={() => setActiveButton(tab)}
          type="button"
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
