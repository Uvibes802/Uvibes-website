import FunctCards from "../cards/functCards";
import iconCall from "../../../public/images/icon _Video Person Call_.png";
import iconUser from "../../../public/images/icon _Users.png";
import iconBook from "../../../public/images/material-symbols_menu-book-outline.png";
import "../../styles/section/functSection.css";
export default function FunctSection() {
  return (
    <section className="funct-section">
      <h2>Les Fonctionnalités</h2>
      <div className="funct-container">
        <FunctCards
          image={iconCall}
          title={"Echanges"}
          subtitle={
            "Partager des témoignages positifs sur un nombre infini de sujets"
          }
          link={"/functionnalities"}
        />
        <FunctCards
          image={iconUser}
          title={"Participation"}
          subtitle={"Recueillir régulièrement les avis de son collectif"}
          link={"/functionnalities"}
        />
        <FunctCards
          image={iconBook}
          title={"Ressources"}
          subtitle={"Disposer d'une cité des savoirs sur-mesure"}
          link={"/functionnalities"}
        />
      </div>
    </section>
  );
}
