import { beneficesData } from "../../features/benefits/benefitsData";
import "../../styles/section/BenefitsHomeSection.css";
import { BeneficesHomeItem } from "./benefitsHomeItem";
import Button from "../button/Button";

export function BeneficesHomeSection() {
  return (
    <section className="benefices-home-section-container">
      <div className="benefices-home-header-and-data">
        <h2 className="title-h2">
          <span id="benefices-home-title-word">Transformez</span> votre
          quotidien
        </h2>

        <div className="benefices-home-data-container">
          <div className="benefices-home-data">
            {beneficesData.map((item) => (
              <BeneficesHomeItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>

      <div className="benefices-home-button-container">
        <Button
          title="Découvrir les bénéfices"
          type="button"
          className="benefices-home-button"
        />
      </div>
    </section>
  );
}
