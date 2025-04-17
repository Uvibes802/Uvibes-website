"use client";
import mockupHome from "../../public/images/mockupHome.png";
import { HeroBanner } from "@/components/banner/heroBanner";
import Contact from "@/components/contact/contact";
import FloatingMenu from "@/components/menu/Menu";
import UserNumberCard from "@/components/cards/userNumberCard";
import InspirationSection from "@/components/section/inspirationSection";
import Resize from "@/services/resize/resize";
import { BeneficesHomeSection } from "@/components/section/beneficesHomeSection";

export default function Home() {
  const { isMobile } = Resize();
  return (
    <main>
    <>
      <HeroBanner
        subtitle=""
        title="Ouvrir notre esprit à des visions nouvelles"
        description="La première application qui transforme notre perception de l'autre et nous inspire"
        image={mockupHome}
        alt="visuel application"
      />
      <BeneficesHomeSection />
      <FloatingMenu />
      <InspirationSection />
      {isMobile && <UserNumberCard />}
    </>
      <Contact />
    <main/>
  );
}
