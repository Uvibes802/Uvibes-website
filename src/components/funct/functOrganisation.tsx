import {
  BookOpen,
  CalendarClock,
  ChevronDown,
  ChevronUp,
  Compass,
  Expand,
  Eye,
  GraduationCap,
  Lightbulb,
} from "lucide-react";
import { useState } from "react";
import "../../styles/funct/functOrganisation.css";
import OrgaCard from "../cards/orgaCard";

export default function FunctOrganisation() {
  const [showThemes, setShowThemes] = useState(false);

  return (
    <section className="funct-orga-container">
      <h2 className="title-h2-orange">
        Comment ça marche pour l&apos;organisation ?
      </h2>

      <article className="funct-orga-card">
        <h3 className="title-text">Vous définissez</h3>

        <div className="funct-orga-section">
          <div
            className="funct-orga-icon-container"
            onClick={() => setShowThemes(!showThemes)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setShowThemes(!showThemes);
              }
            }}
            style={{ cursor: "pointer" }}
          >
            <div className="funct-orga-icon">
              <Compass size={"32px"} style={{ color: "var(--mainColor)" }} />
            </div>
            <p className="title-text-orange" style={{ flexGrow: 1 }}>
              les sujets sur lesquels vous souhaitez obtenir la vision de votre
              collectif
            </p>
            {showThemes ? (
              <ChevronUp size={24} style={{ color: "var(--mainColor)" }} />
            ) : (
              <ChevronDown size={24} style={{ color: "var(--mainColor)" }} />
            )}
          </div>

          {showThemes && (
            <div className="funct-orga-card-container funct-orga-card-container--visible">
              <OrgaCard
                icone={
                  <Expand size="50%" style={{ color: "var(--bckgColor)" }} />
                }
                title="Des sujets grands angles"
                description="Aspirations individuelles, séries TV, modèles de réussite, etc.."
                content1="Quelle intrigue de film ou série t'a marqué ?"
                content2="Qu'est ce qui t'inspire le plus dans ton quotidien ?"
              />
              <OrgaCard
                icone={
                  <GraduationCap
                    size="50%"
                    style={{ color: "var(--bckgColor)" }}
                  />
                }
                title="Des sujets pédagogiques"
                description="Management, innovation, conversation en langue étrangère, etc.."
                content1="Have you ever innovated in your daily life ?"
                content2="Comment vois-tu le management du futur ?"
              />
              <OrgaCard
                icone={
                  <Lightbulb size="50%" style={{ color: "var(--bckgColor)" }} />
                }
                title="Des astuces et bons plans"
                description="Partagez vos expériences et conseils pratiques"
                content1="Quelles sont tes astuces pour mieux gérer ton budget ?"
                content2="Comment gérer l'incertitude ?"
              />
            </div>
          )}
        </div>

        <div className="funct-orga-section">
          <div className="funct-orga-icon-container">
            <div className="funct-orga-icon">
              <CalendarClock
                size={"32px"}
                style={{ color: "var(--mainColor)" }}
              />
            </div>
            <p className="title-text-orange">
              Le moment et la durée d&apos;utilisation de Uvibes
            </p>
          </div>
        </div>

        <div className="funct-orga-section">
          <div className="funct-orga-icon-container">
            <div className="funct-orga-icon">
              <Eye size={"32px"} style={{ color: "var(--mainColor)" }} />
            </div>
            <p className="title-text-orange">
              les ressources explorées par votre collectif
            </p>
          </div>
        </div>

        <div className="funct-orga-section">
          <div className="funct-orga-icon-container">
            <div className="funct-orga-icon">
              <BookOpen size={"32px"} style={{ color: "var(--mainColor)" }} />
            </div>
            <p className="title-text-orange">
              Les ressources que votre collectif pourra explorer
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}
