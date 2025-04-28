import "../../styles/cards/userNumberCard.css";
import FetchCitation from "@/services/citation/citation";

export default function UserNumberCard() {
  const { userNumber, userNumberTitle } = FetchCitation();
  return (
    <article className="user-number-card-container">
      <div className="user-number-card">
        <h2>{userNumberTitle}</h2>
        <p className="user-number">{userNumber}</p>
      </div>
    </article>
  );
}
