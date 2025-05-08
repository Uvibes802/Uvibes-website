import OrgaCard from "../cards/orgaCard";
import "../../styles/funct/functOrganisation.css";

import {
  BookOpen,
  CalendarClock,
  Compass,
  Expand,
  Eye,
  GraduationCap,
  Lightbulb,
} from "lucide-react";

export default function FunctOrganisation() {
  return (
    <section className="funct-orga-container">
      <h2 className="title-h2-orange">
        Comment ça marche pour l&apos;organisation ?
      </h2>

      <article className="funct-orga-card">
        <h3 className="title-text">Vous définissez</h3>

        <div className="funct-orga-section">
          <div className="funct-orga-icon-container">
            <div className="funct-orga-icon">
              <Compass size={"32px"} style={{ color: "var(--mainColor)" }} />
            </div>
            <p className="title-text-orange">
              Les thématiques abordées par votre collectif
            </p>
          </div>
          <div className="funct-orga-card-container">
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
              content1="Est-ce que tu as déjà innové dans ton quotidien ?"
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
              Les sujets dont vous souhaitez obtenir la vision de votre
              collectif
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
