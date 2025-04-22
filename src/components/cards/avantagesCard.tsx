import "../../styles/cards/avantagesCard.css";

type AvantagesCardProps = {
  icone: React.ReactNode;
  title: string;
  stats: string;
  content: string;
};

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
