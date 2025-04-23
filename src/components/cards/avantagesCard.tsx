import type { AvantagesCardProps } from "@/types/avantages/avantagesCard";
import "../../styles/cards/avantagesCard.css";

export default function AvantagesCard({
  icone,
  title,
  stats,
  content,
}: AvantagesCardProps) {
  return (
    <article className="avantages-card-container">
      <div>
        {icone} <h5>{title}</h5>
      </div>
      <p>{stats}</p>
      <div>{content}</div>
    </article>
  );
}
