import "../../styles/cards/orgaCard.css";
import type { OrgaCardProps } from "../../types/cards/orgaCards";

export default function OrgaCard({
  title,
  description,
  content1,
  content2,
  icone,
}: OrgaCardProps) {
  return (
    <div className="orga-card">
      <div className="orga-card-header">
        <div className="orga-card-icon">{icone}</div>
        <h4 className="title-h4-orange">{title}</h4>
      </div>

      {description && (
        <div className="orga-card-description">
          <p className="text-orange">{description}</p>
        </div>
      )}

      <div className="orga-card-content">
        <div className="orga-card-content-item">
          <p className="text-italic">{content1}</p>
        </div>
        <div className="orga-card-content-item">
          <p className="text-italic">{content2}</p>
        </div>
      </div>
    </div>
  );
}
