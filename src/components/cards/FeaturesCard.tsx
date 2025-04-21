import { FeaturesData } from "@/features/features/featuresData";
import { CircleCheckBig } from "lucide-react";

export function FeaturesCard() {
  return (
    <section>
      {FeaturesData.map(({ id, title, items }) => (
        <article key={id}>
          <h2 className="title-h2">{title}</h2>
          <ul>
            {items.map(({ id, item }) => (
              <li key={id}>
                <div className="icon-size">
                  <CircleCheckBig size="50%" color="#fd6e00" />{" "}
                </div>
                <p className="text">{item}</p>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}
