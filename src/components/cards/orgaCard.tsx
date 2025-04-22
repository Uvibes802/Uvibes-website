import "../../styles/cards/orgaCard.css";

export type OrgaCardProps = {
  title: string;
  description: string;
  content1: string;
  content2: string;
};

export default function OrgaCard({
  title,
  description,
  content1,
  content2,
}: OrgaCardProps) {
  return (
    <div className="orga-card">
      <div className="orga-card-title">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className="orga-card-content">
        <div>
          <p>{content1}</p>
        </div>
        <div>
          <p>{content2}</p>
        </div>
      </div>
    </div>
  );
}
