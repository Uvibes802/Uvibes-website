"use client";
import { HeroBanner } from "@/components/banner/heroBanner";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/Footer";
import FloatingMenu from "@/components/menu/Menu";
import Resize from "@/services/resize/resize";
import { BenefitsHomeSection } from "../components/section/BenefitsHomeSection";
import mockupHome from "../../public/images/mockupHome.png";
import Uvibes from "@/components/uvibes/uvibes";
import FunctSection from "@/components/section/functSection";
import visuelHome1 from "../../public/images/visuel-homepage1.jpg";
import imageFemmeAge from "../../public/images/femme_age_phone.jpg";
import Image from "next/image";
import InspirationSection from "@/components/section/inspirationSection";
import UserNumberCard from "@/components/cards/userNumberCard";
import { PartnerCarousel } from "@/components/carousel/PartnerCarousel";

export default function Home() {
  const { isMobile } = Resize();
  return (
    <main>
      <HeroBanner
        subtitle=""
        title="Ouvrir notre esprit à des visions nouvelles"
        description="La première application qui transforme notre perception de l'autre et nous inspire"
        imageMobile={mockupHome}
        imageDesktop={mockupHome}
        alt="visuel application"
      />
      <FunctSection />
      <div style={{ position: "relative", width: "100%", height: "auto" }}>
        <Image
          src={visuelHome1}
          alt="visuel homme avec téléphone"
          width={600}
          height={450}
          layout="responsive"
        />
      </div>
      <BenefitsHomeSection />
      <InspirationSection />
      {isMobile && <UserNumberCard />}
      <FloatingMenu />
      <div style={{ position: "relative", width: "100%", height: "auto" }}>
        <Image
          src={imageFemmeAge}
          alt="visuel femme avec téléphone"
          width={600}
          height={450}
          layout="responsive"
        />
      </div>
      <PartnerCarousel />
      <Uvibes />
      <Contact />
      <Footer />
    </main>
  );
}
