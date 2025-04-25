"use client";

import AvantagesContent from "@/components/avantages/avantagesContent";
import { HeroBanner } from "@/components/banner/heroBanner";
import mockupAvantages from "../../../public/images/mockupAvantages.png";
import mockupAvantagesDesktop from "../../../public/images/mockupAvantageDesktop.png";
import FloatingMenu from "@/components/menu/Menu";

export default function Avantages() {
  return (
    <>
      <HeroBanner
        subtitle="Les avantages"
        title="Uvibes , moteur d’une dynamique positive"
        description="L’application qui répond aux objectifs de votre organisation"
        imageDesktop={mockupAvantagesDesktop}
        imageMobile={mockupAvantages}
        alt="Fonctionnalités de l'application"
      />
      <nav>
        <FloatingMenu />
      </nav>
      <main>
        <AvantagesContent />
      </main>
    </>
  );
}
