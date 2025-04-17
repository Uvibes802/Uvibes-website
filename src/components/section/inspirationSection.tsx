import { useEffect, useState } from "react";
import "../../styles/section/inspirationSection.css";
import UserNumberCard from "../cards/userNumberCard";

export default function InspirationSection() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="inspiration-section-container">
      <section className="inspiration-section">
        <h3>
          Uvibes, le premier activateur de renouveau relationnel , au sein de
          votre collectif
        </h3>
        <p>
          « En prenant le temps de réfléchir du point de vue d’une autre
          personne, nous développons notre humilité intellectuelle, cette
          qualité qui nous permet de reconnaître nos limites et d’accepter que
          nous n’avons pas toutes les réponses. Nous devenons également plus
          ouverts d’esprit, prêts à envisager différentes facons dont une
          situaiton pourrait évoluer. Et surtout, nous apprenons à intégrer des
          perspectives variées, enrichissant ainsi notre compréhension et nos
          décisions »
        </p>
        <p>Ilios Koutsou</p>
        <p>
          Docteur en psychologie et Maître de conférences à l’Université libre
          de Bruxelles
        </p>
      </section>
      {isDesktop && <UserNumberCard />}
    </main>
  );
}
