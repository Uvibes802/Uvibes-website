import type { LastAvantagesCardProps } from "../../types/cards/LastAvantagesCardProps";

export default function LastAvantagesCard({
  icone,
  title,
  stats,
}: LastAvantagesCardProps) {
  return (
    <article className="avantages-card-container">
      <div>
        {icone} <h5>{title}</h5>
      </div>
      <p>{stats}</p>
    </article>
  );
}
