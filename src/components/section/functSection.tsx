import FunctCards from "../cards/functCards";
import "../../styles/section/functSection.css";
import { BookOpenText, HeartHandshake, MessagesSquare } from "lucide-react";
import Button from "../button/Button"; // Adjust the path if necessary
export default function FunctSection() {
  return (
    <section className="funct-section">
      <h2 className="title-h2">Les Fonctionnalités</h2>
      <div className="funct-container">
        <FunctCards
          icone={
            <HeartHandshake size="100%" style={{ color: "var(--mainColor)" }} />
          }
          title={"Echanges"}
          subtitle={
            "Partager des témoignages positifs sur un nombre infini de sujets"
          }
        />
        <FunctCards
          icone={
            <MessagesSquare size="100%" style={{ color: "var(--mainColor)" }} />
          }
          title={"Participation"}
          subtitle={"Recueillir régulièrement les avis de son collectif"}
        />
        <FunctCards
          icone={
            <BookOpenText size="100%" style={{ color: "var(--mainColor)" }} />
          }
          title={"Ressources"}
          subtitle={"Disposer d'une cité des savoirs sur-mesure"}
        />
      </div>
      <div className="benefices-home-button-container">
        <Button
          title="Découvrir les fonctionnalités"
          type="button"
          className="benefices-home-button"
          href="/features"
        />
      </div>
    </section>
  );
}
