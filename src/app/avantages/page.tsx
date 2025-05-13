"use client";

import AvantagesContent from "@/components/avantages/avantagesContent";
import AvantagesContentDesktop from "@/components/avantages/avantagesContentDesktop";
import { HeroBanner } from "@/components/banner/heroBanner";
import { PartnerBanner } from "@/components/banner/partnerBanner";
import Footer from "@/components/footer/Footer";
import FloatingMenu from "@/components/menu/Menu";
import { AppointmentSection } from "@/components/section/appointmentSection";
import Resize from "@/services/resize/resize";
import mockupAvantages from "../../../public/images/MockupAvantage.png";

export default function Avantages() {
  const { isMobile } = Resize();
  return (
    <>
      <HeroBanner
        subtitle="Les avantages"
        title="Uvibes , moteur d’une dynamique positive"
        description="L’application qui répond aux objectifs de votre organisation"
        imageDesktop={mockupAvantages}
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
