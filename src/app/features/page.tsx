"use client";
import { HeroBanner } from "@/components/banner/heroBanner";
import { PartnerBanner } from "@/components/banner/partnerBanner";
import { FeaturesCard } from "@/components/cards/FeaturesCard";
import Footer from "@/components/footer/Footer";
import FunctOrganisation from "@/components/funct/functOrganisation";
import FloatingMenu from "@/components/menu/Menu";
import { AppointmentSection } from "@/components/section/appointmentSection";
import Resize from "@/services/resize/resize";
import Image from "next/image";
import visuelFeature1 from "../../../public/images/Visuel-feature.png";
import mockupFeature from "../../../public/images/mockupFeature.png";
import mockupFeatureDesktop from "../../../public/images/mockupFeatureDesktop.png";
export default function FeaturesPage() {
  const { isMobile } = Resize();
  return (
    <>
      <main>
        <HeroBanner
          subtitle="Les fonctionnalités"
          title="Uvibes transforme le quotidien des échanges"
          description="La possibilité d’accéder à des visions nouvelles"
          imageDesktop={mockupFeatureDesktop}
          imageMobile={mockupFeature}
          alt="Fonctionnalités de l'application"
        />
        <nav>
          <FloatingMenu />
        </nav>

        <FeaturesCard />
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: isMobile ? "4/3" : "16/9",
          }}
        >
          <Image
            src={isMobile ? visuelFeature1 : visuelFeature1}
            alt="visuel femme avec téléphone"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            priority
          />
        </div>
        <FunctOrganisation />
        <PartnerBanner />
        <AppointmentSection />
      </main>
      <Footer />
    </>
  );
}
