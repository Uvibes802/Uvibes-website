import type { FunctCardsProps } from "@/types/cards/functCards";
import Image from "next/image";
import Link from "next/link";
import "../../styles/cards/functCard.css";
export default function FunctCards({
  image,
  title,
  subtitle,
  link,
}: FunctCardsProps) {
  return (
    <div className="funct-cards-container">
      <div className="funct-card">
        <Image src={image} alt="Fonctionnalité logo" />
        <h4>{title}</h4>
        <p>{subtitle}</p>
        <Link href={link}>En savoir plus</Link>
      </div>
    </div>
  );
}
