"use client";

import AvantagesContent from "@/components/avantages/avantagesContent";
import { HeroBanner } from "@/components/banner/heroBanner";
import mockupAvantages from "../../../public/images/mockupAvantages.png";
import mockupAvantagesDesktop from "../../../public/images/mockupAvantageDesktop.png";
import FloatingMenu from "@/components/menu/Menu";
import Resize from "@/services/resize/resize";
import AvantagesContentDesktop from "@/components/avantages/avantagesContentDesktop";
import { AppointmentSection } from "@/components/section/appointmentSection";
import Footer from "@/components/footer/Footer";
import { PartnerBanner } from "@/components/banner/partnerBanner";

export default function Avantages() {
  const { isMobile } = Resize();
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
        {isMobile ? <AvantagesContent /> : <AvantagesContentDesktop />}
        <PartnerBanner />
        <AppointmentSection />
        <Footer />
      </main>
    </>
  );
}
