"use client";

import AvantagesContent from "@/components/avantages/avantagesContent";
import { HeroBanner } from "@/components/banner/heroBanner";
import mockupAvantages from "../../../public/images/mockupAvantages.png";
import mockupAvantagesDesktop from "../../../public/images/mockupAvantageDesktop.png";

export default function Avantages() {
  return (
    <>
      <HeroBanner
        subtitle="LES AVANTAGES"
        title="Uvibes , moteur d’une dynamique positive"
        description="L’application qui répond aux objectifs de votre organisation"
        imageDesktop={mockupAvantagesDesktop}
        imageMobile={mockupAvantages}
        alt="Fonctionnalités de l'application"
      />
      <main>
        <AvantagesContent />
      </main>
    </>
  );
}
