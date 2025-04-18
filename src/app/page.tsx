"use client";
import mockupHome from "../../public/images/mockupHome.png";
import { HeroBanner } from "@/components/banner/heroBanner";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/Footer";
import FloatingMenu from "@/components/menu/Menu";
import { BeneficesHomeSection } from "@/components/section/beneficesHomeSection";

import Uvibes from "@/components/uvibes/uvibes";


import FunctSection from "@/components/section/functSection";

export default function Home() {
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
        <FunctSection />
        <BeneficesHomeSection />
        <FloatingMenu />
      </>
      <Uvibes />
      <Contact />
      <Footer />
    </main>
  );
}
