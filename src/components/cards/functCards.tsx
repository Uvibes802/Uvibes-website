import type { FunctCardsProps } from "@/types/cards/functCards";
import "../../styles/cards/functCard.css";
export default function FunctCards({
  icone,
  title,
  subtitle,
}: FunctCardsProps) {
  return (
    <div className="funct-cards-container">
      <div className="funct-card">
        <div className="icon-size">{icone}</div>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
