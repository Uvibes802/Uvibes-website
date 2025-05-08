import Image from "next/image";
import type { TeamProps } from "@/types/team/teamProps";
import "@/styles/cards/teamCard.css";

export default function TeamCards({ image, name, position }: TeamProps) {
  return (
    <article className="team-card">
      <Image src={image} alt={`Portrait de ${name}`} width={500} height={500} />
      <div className="content-card">
        <p>{name}</p>
        <p>{position}</p>
      </div>
    </article>
  );
}
