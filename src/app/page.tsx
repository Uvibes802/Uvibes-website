"use client";
import mockupHome from "../../public/images/mockupHome.png"
import { HeroBanner } from "@/components/banner/heroBanner";
import FloatingMenu from "@/components/menu/Menu";
import { BeneficesHomeSection } from "@/components/section/BeneficesHomeSection";

export default function Home() {
  return (
    <>
    <HeroBanner subtitle="" title="Ouvrir notre esprit à des visions nouvelles" description="La première application qui transforme notre perception de l’autre et nous inspire" image={mockupHome} alt="visuel application"/>
      <BeneficesHomeSection />
      <FloatingMenu />
    </>
  );
}
