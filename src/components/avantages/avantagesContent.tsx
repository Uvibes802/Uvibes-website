import {
  Building,
  School,
  Heart,
  CircleGauge,
  Brain,
  Smile,
  Home,
} from "lucide-react";
import { DropdownButton } from "../button/DropdownButton";
import "../../styles/avantages/avantagesButton.css";
import AvantagesCard from "../cards/avantagesCard";
import UserIcon from "../../../public/assets/userIcon";
export default function AvantagesContent() {
  return (
    <div className="avantage-button-container">
      <DropdownButton
        title="Pour votre entreprise"
        subtitle="Dans le monde du travail, Uvibes stimule le bien-être individuel pour renforcer la performance collective"
        icon={<Building />}
      >
        <AvantagesCard
          icone={
            <CircleGauge style={{ color: "var(--secondaryColor)" }} size={50} />
          }
          title="Améliorer sa prise de décision et augmenter sa performance"
          stats="42% des employés admettent ne faire que le strict minimum (Etude 2023 Observatoire 
						de la société et de la consommation)."
          content="Uvibes stimule la réflexion, offre une meilleure connaissance de son collectif et suscite l’adhésion collective"
        />
        <AvantagesCard
          icone={<UserIcon />}
          title="Améliorer sa prise de décision et augmenter sa performance"
          stats="62% des dirigeants et employés considèrent la culture d'entreprise comme le principal frein à la transformation (Rapport The digital culture challenge)."
          content="Uvibes stimule la réflexion, offre une meilleure connaissance de son collectif et suscite l’adhésion collective"
        />
      </DropdownButton>
      <DropdownButton
        title="Pour votre établissement d'enseignement"
        subtitle="Dans la sphère éducative, Uvibes améliore la sociabilité des apprenants "
        icon={<School />}
      >
        <AvantagesCard
          icone={<UserIcon />}
          title="Soutenir le 
          bien-etre des jeunes"
          stats="41% des étudiants présentent des symptômes dépressifs contre 26% avant le COVID (Etude Université Bordeaux, 2024)."
          content="Uvibes encourage des échanges bienveillants entre élèves de tous horizons. 
          Il élimine les facteurs de cyberharcèlement et de dévalorisation de soi."
        />
        <AvantagesCard
          icone={<Brain size={50} />}
          title="Développer les savoir-agir relationnels"
          stats="62 % des managers sont prêts à recruter un  collaborateur sur la base de ses soft skills, même si ses compétences  techniques ne correspondent pas entièrement au poste"
          content="Uvibes est le premier service qui offre un espace d'entraînement continu et de valorisation des compétences interpersonnelles."
        />
      </DropdownButton>
      <DropdownButton
        title="Pour votre organisation en charge d'un collectif"
        subtitle="Dans la sphère du prendre soin, Uvibes est une nouvelle respiration "
        icon={<Heart />}
      >
        <AvantagesCard
          icone={<UserIcon />}
          title="Prévenir l'isolement social et maintenir les capacités cognitives"
          stats="Entretenir une vie sociale dynamique réduit de 38% le risque de démence (Rush University, 2025)"
          content="Uvibes nous redonne l’envie et la facilité de discuter"
        />
        <AvantagesCard
          icone={<Smile size={50} />}
          title="Valoriser chaque individu et cultiver le vivre-ensemble"
          stats="Parler à des inconnus augmente l’estime de soi et transforme notre perception de l’autre (Etude 2014 Epley et Shroeder)"
          content="En mettant en avant l'unicité de chacun, Uvibes nous amène à tisser de nouveaux liens avec notre entourage"
        />
        <AvantagesCard
          icone={<Home size={50} />}
          title="Créer des communautés d'entraide"
          stats="Partager une expérience commune, c’est mieux comprendre ce qu’on vit"
          content="En valorisant les savoirs issus de l'expérience, Uvibes nous donne la possibilité de créer des échanges entre pairs"
        />
      </DropdownButton>
    </div>
  );
}
