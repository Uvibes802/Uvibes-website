"use client";
import { HeroBanner } from "@/components/banner/heroBanner";
import { PartnerBanner } from "@/components/banner/partnerBanner";
import { FeaturesCard } from "@/components/cards/FeaturesCard";
import Footer from "@/components/footer/Footer";
import FunctOrganisation from "@/components/funct/functOrganisation";
import FloatingMenu from "@/components/menu/Menu";
import { AppointmentSection } from "@/components/section/appointmentSection";

import mockupFeature from "../../../public/images/mockupFeature.png";
export default function FeaturesPage() {
  return (
    <>
      <main>
        <HeroBanner
          subtitle="Les fonctionnalités"
          title="Uvibes transforme le quotidien des échanges"
          description="La possibilité d’accéder à des visions nouvelles"
          image={mockupFeature}
          alt="Fonctionnalités de l'application"
        />
        <nav>
          <FloatingMenu />
        </nav>

        <FeaturesCard />
        <FunctOrganisation />
        <PartnerBanner />
        <AppointmentSection />
      </main>
      <Footer />
    </>
  );
}
