import type { BeneficesItemProps } from "@/types/section/BeneficesItemProps";
import "../../styles/section/benefitsHomeItem.css";

export function BeneficesHomeItem({ icon, title }: BeneficesItemProps) {
  return (
    <article className="benefices-home-item-container">
      <div className="benefices-home-item-icon">{icon}</div>
      <h3 className="text">{title}</h3>
    </article>
  );
}
