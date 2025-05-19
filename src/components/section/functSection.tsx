import { BookOpenText, HeartHandshake, MessagesSquare } from "lucide-react";
import Link from "next/link";
import "../../styles/section/functSection.css";
import Button from "../button/Button"; // Adjust the path if necessary
import FunctCards from "../cards/functCards";

export default function FunctSection() {
  return (
    <section className="funct-section">
      <h2 className="title-h2">Trois ingrédients clés</h2>
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
          subtitle={"Accéder à une médiathèque de savoirs sur-mesure "}
        />
      </div>
      <div className="funct-button-container">
        <Link href="/features">
          <Button title="Découvrir les fonctionnalités" type="button" />
        </Link>
      </div>
    </section>
  );
}
