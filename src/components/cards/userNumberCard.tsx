import "../../styles/cards/userNumberCard.css";
import FetchCitation from "@/services/citation/citation";

export default function UserNumberCard() {
  const { userNumber, userNumberTitle } = FetchCitation();
  return (
    <article className="user-number-card">
      <h4>{userNumberTitle}</h4>
      <p>{userNumber}</p>
    </article>
  );
}
