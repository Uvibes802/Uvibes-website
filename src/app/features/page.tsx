"use client";
import { HeroBanner } from "@/components/banner/heroBanner";
import mockupFeature from "../../../public/images/mockupFeature.png";
import mockupFeatureDesktop from "../../../public/images/mockupFeatureDesktop.png";
import { FeaturesCard } from "@/components/cards/FeaturesCard";
import FunctOrganisation from "@/components/funct/functOrganisation";
import FloatingMenu from "@/components/menu/Menu";
import Footer from "@/components/footer/Footer";
import { PartnerBanner } from "@/components/banner/partnerBanner";
import { AppointmentSection } from "@/components/section/appointmentSection";

export default function FeaturesPage() {
  return (
    <>
      <HeroBanner
        subtitle="Les fonctionnalités"
        title="Uvibes, activateur d'intelligence émotionnelle"
        description="Au sein de votre collectif, l’application qui révolutionne les interactions grâce à des fonctionnalités innovantes"
        imageDesktop={mockupFeatureDesktop}
        imageMobile={mockupFeature}
        alt="Fonctionnalités de l'application"
      />
      <nav>
        <FloatingMenu />
      </nav>
      <main>
        <FeaturesCard />
        <FunctOrganisation />
        <PartnerBanner />
        <AppointmentSection />
      </main>
      <Footer />
    </>
  );
}
