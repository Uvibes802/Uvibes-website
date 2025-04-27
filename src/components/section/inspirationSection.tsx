import Resize from "@/services/resize/resize";
import "../../styles/section/inspirationSection.css";
import UserNumberCard from "../cards/userNumberCard";
import FetchCitation from "@/services/citation/citation";

export default function InspirationSection() {
  const { citation, authorCitation, roleAuthor } = FetchCitation();
  const { isDesktop, mounted } = Resize();
  if (!mounted) return null;

  return (
    <article className="inspiration-section-container">
      <section className="inspiration-section">
        <div className="inspiration-section-text">
          <h2>Uvibes, la solution qui réinvente les intéractions</h2>
          <p className="inspiration-text inspiration-text-citation">
            {citation}
          </p>
          <p className="inspiration-text inspiration-text-autor">
            {authorCitation}
          </p>
          <p className="inspiration-text inspiration-text-work">{roleAuthor}</p>
        </div>
        {isDesktop && <UserNumberCard />}
      </section>
    </article>
  );
}
