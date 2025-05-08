"use client";
import { HeroBanner } from "@/components/banner/heroBanner";
import Resize from "@/services/resize/resize";
import mockupFeature from "../../../public/images/mockupFeature.png";
import mockupFeatureDesktop from "../../../public/images/mockupFeatureDesktop.png";
import { FeaturesCard } from "@/components/cards/FeaturesCard";
import FunctOrganisation from "@/components/funct/functOrganisation";
import FloatingMenu from "@/components/menu/Menu";
import Footer from "@/components/footer/Footer";
import { PartnerBanner } from "@/components/banner/partnerBanner";
import { AppointmentSection } from "@/components/section/appointmentSection";
import visuelFeature1 from "../../../public/images/visuel-featurespage1.jpg";
import visuelFeature1Desktop from "../../../public/images/visuel-featurespage1Desktop.jpg";
import Image from "next/image";

export default function FeaturesPage() {
  const { isMobile } = Resize();
  return (
    <>
      <main>
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

        <FeaturesCard />
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: isMobile ? "4/3" : "16/9",
          }}
        >
          <Image
            src={isMobile ? visuelFeature1 : visuelFeature1Desktop}
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
