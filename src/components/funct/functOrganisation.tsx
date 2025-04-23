import OrgaCard from "../cards/orgaCard";
import "../../styles/funct/functOrganisation.css";
import IconeTheme from "../../../public/assets/iconeTheme";
import CalendarIcon from "../../../public/assets/calendarIcon";
import BookIcon from "../../../public/assets/bookIcon";
import UserIcon from "../../../public/assets/userIcon";
export default function FunctOrganisation() {
  return (
    <section className="funct-orga-container">
      <h2>Comment ça marche pour l&apos;organisation ?</h2>
      <article className="funct-orga-card">
        <h3>Vous définissez:</h3>
        <div>
          <IconeTheme />
          <p>Les thématiques abordées par votre collectif</p>
        </div>
        <div className="funct-orga-card-container">
          <OrgaCard
            title="Des sujets grands angles"
            description="(aspirations individuelles,  séries TV,  modèles de réussite, etc.)"
            content1="'Quelle intrigue de film ou série t’a marqué ?'"
            content2="'Qu’est ce qui t’inspire le plus dans ton quotidien ?'"
          />
          <OrgaCard
            title="Des sujets pédagogiques"
            description="(management, innovation, conversation en langue étrangère, etc.)"
            content1="'Est-ce que tu as déjà innové dans ton quotidien ?'"
            content2="'Comment vois-tu le management du futur  ?'"
          />
          <OrgaCard
            title="Des astuces et bons plans"
            description=""
            content1="'Quelles sont tes astuces pour mieux gérer ton budget ?'"
            content2="'Comment gérer l’incertitude ?'"
          />
        </div>
        <div className="funct-orga-icons">
          <div>
            <CalendarIcon />
            <p>Le moment et la durée d&apos;utilisation de Uvibes</p>
          </div>

          <div>
            <UserIcon />
            <p>
              Les sujets sur lesquels elle souhaite obtenir la vision de votre
              collectif
            </p>
          </div>
          <div>
            <BookIcon />
            <p>Les ressources que votre collectif pourra explorer</p>
          </div>
        </div>
      </article>
    </section>
  );
}
