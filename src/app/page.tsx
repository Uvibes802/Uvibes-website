"use client";
import { HeroBanner } from "@/components/banner/heroBanner";
import FloatingMenu from "@/components/menu/Menu";
import { BeneficesHomeSection } from "@/components/section/beneficesHomeSection";
import mockupHome from "../../public/images/mockupHome.png";
import Resize from "@/services/resize/resize";
import Contact from "@/components/contact/contact";
import InspirationSection from "@/components/section/inspirationSection";
import UserNumberCard from "@/components/cards/userNumberCard";
export default function Home() {
  const { isMobile } = Resize();
  return (
    <main>
      <HeroBanner
        subtitle=""
        title="Ouvrir notre esprit à des visions nouvelles"
        description="La première application qui transforme notre perception de l'autre et nous inspire"
        image={mockupHome}
        alt="visuel application"
      />
      <BeneficesHomeSection />
      <InspirationSection />
      {isMobile && <UserNumberCard />}
      <FloatingMenu />
      <Contact />
    </main>
  );
}
