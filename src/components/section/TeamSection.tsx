import { useState } from "react";
import { teamData } from "@/features/teams/teamData";
import TeamCards from "../cards/teamCards";
import "../../styles/section/TeamSection.css";

export default function TeamSection() {
  const [activeButton, setActiveButton] = useState("Equipe projet");

  const tabs = [
    "Equipe projet",
    "Comité scientifique",
    "Les architectes du code",
  ];

  return (
    <section className="uvibes-teamSection-container">
      <div className="uvibes-teamSection-button">
        <div
          className="uvibes-button-slider"
          style={{
            left: `${(tabs.indexOf(activeButton) * 100) / tabs.length}%`,
            width: `${100 / tabs.length}%`,
          }}
        />
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
      <div className="uvibes-teamSection-members">
        {teamData
          .filter((member) => member.team === activeButton)
          .map((member) => (
            <TeamCards
              key={member.name}
              image={member.image}
              alt={member.alt}
              name={member.name}
              position={member.position}
            />
          ))}
      </div>
    </section>
  );
}
