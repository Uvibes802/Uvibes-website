import type { LastAvantagesCardProps } from "../../types/cards/LastAvantagesCardProps";
import "../../styles/cards/LastAvantagesCard.css";

export default function LastAvantagesCard({
  icone,
  title,
  stats,
}: LastAvantagesCardProps) {
  return (
    <article className="avantages-card-container">
      <div className="last-avantages-card-title">
        {icone} <h5>{title}</h5>
      </div>
      <p>{stats}</p>
    </article>
  );
}
