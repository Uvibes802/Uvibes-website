import { Building, School, Heart } from "lucide-react";
import { DropdownButton } from "../button/DropdownButton";
import "../../styles/avantages/avantagesButton.css";
import AvantagesCard from "../cards/avantagesCard";
export default function AvantagesButton() {
  return (
    <div className="avantage-button-container">
      <DropdownButton
        title="Pour votre entreprise"
        subtitle="Dans le monde du travail, Uvibes stimule le bien-être individuel pour renforcer la performance collective"
        icon={<Building />}
      >
        <AvantagesCard
          icone={<Building />}
          title="Améliorer sa prise de décision et augmenter sa performance"
          stats="42% des employés admettent ne faire que le strict minimum (Etude 2023 Observatoire 
						de la société et de la consommation)."
          content="Uvibes stimule la réflexion, offre une meilleure connaissance de son collectif et suscite l’adhésion collective"
        />
        <AvantagesCard
          icone={<School />}
          title="Améliorer sa prise de décision et augmenter sa performance"
          stats="42% des employés admettent ne faire que le strict minimum (Etude 2023 Observatoire 
          de la société et de la consommation)."
          content="Uvibes stimule la réflexion, offre une meilleure connaissance de son collectif et suscite l’adhésion collective"
        />
        <AvantagesCard
          icone={<Heart />}
          title="Améliorer sa prise de décision et augmenter sa performance"
          stats="42% des employés admettent ne faire que le strict minimum (Etude 2023 Observatoire 
						de la société et de la consommation)."
          content="Uvibes stimule la réflexion, offre une meilleure connaissance de son collectif et suscite l’adhésion collective"
        />
      </DropdownButton>
      <DropdownButton
        title="Pour votre établissement d'enseignement"
        subtitle="Dans la sphère éducative, Uvibes améliore la sociabilité des apprenants "
        icon={<School />}
      >
        vide
      </DropdownButton>
      <DropdownButton
        title="Pour votre organisation en charge d'un collectif"
        subtitle="Dans la sphère du prendre soin, Uvibes est une nouvelle respiration "
        icon={<Heart />}
      >
        vide
      </DropdownButton>
    </div>
  );
}
