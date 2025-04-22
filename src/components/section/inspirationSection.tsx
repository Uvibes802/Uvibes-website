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
          <h2>
            Uvibes, le premier activateur de renouveau relationnel , au sein de
            votre collectif
          </h2>
          <p>{citation}</p>
          <p>{authorCitation}</p>
          <p>{roleAuthor}</p>
        </div>
        {isDesktop && <UserNumberCard />}
      </section>
    </article>
  );
}
