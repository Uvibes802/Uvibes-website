"use client";
import { HeroBanner } from "@/components/banner/heroBanner";
import UserNumberCard from "@/components/cards/userNumberCard";
import { PartnerCarousel } from "@/components/carousel/PartnerCarousel";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/Footer";
import FloatingMenu from "@/components/menu/Menu";
import FunctSection from "@/components/section/functSection";
import InspirationSection from "@/components/section/inspirationSection";
import Uvibes from "@/components/uvibes/uvibes";
import Resize from "@/services/resize/resize";
import Image from "next/image";
import mockupHome from "../../public/images/mockupHome.png";
import visuelHome1Mobile from "../../public/images/visuel-homepage1.jpg";
import visuelHome2Mobile from "../../public/images/visuel-homepage2.jpg";
import visuelHome1Desktop from "../../public/images/visuelHome1Desktop.jpg";
import visuelHome2Desktop from "../../public/images/visuelHome2Desktop.jpg";
import { BenefitsHomeSection } from "../components/section/BenefitsHomeSection";

export default function Home() {
  const { isMobile } = Resize();
  return (
    <main>
      <HeroBanner
        subtitle=""
        title="Découvrir des points de vue inattendus"
        description="Voir l’autre et ce que nous vivons autrement"
        imageMobile={mockupHome}
        imageDesktop={mockupHome}
        alt="visuel application"
      />
      <FunctSection />
      <div
        style={{
          position: "relative",
          width: "100%",
          height: isMobile ? "auto" : "60vh",
        }}
      >
        <Image
          src={isMobile ? visuelHome1Mobile : visuelHome1Desktop}
          alt="visuel homme avec téléphone"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center 70%",
          }}
          priority
        />
      </div>
      <BenefitsHomeSection />
      <InspirationSection />
      {isMobile && <UserNumberCard />}
      <FloatingMenu />
      <div
        style={{
          position: "relative",
          width: "100%",
          height: isMobile ? "auto" : "60vh",
        }}
      >
        <Image
          src={isMobile ? visuelHome2Mobile : visuelHome2Desktop}
          alt="visuel homme avec téléphone"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center 50%",
          }}
          priority
        />
      </div>
      <PartnerCarousel />
      <Uvibes />
      <Contact />
      <Footer />
    </main>
  );
}
