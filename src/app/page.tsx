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

import Testimony from "@/components/testimony/testimony";
import Resize from "@/services/resize/resize";
import Image from "next/image";
import mockupHome from "../../public/images/mochupHome.png";
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
        title="L’alternative éthique et pleine de vie aux réseaux sociaux
        habituels"
        description="Au sein d’un collectif, voir l’autre et ce que nous
        vivons autrement"
        image={mockupHome}
        alt="visuel application"
      />
      <FunctSection />
      <div
        style={{
          position: "relative",
          width: "100%",
          height: isMobile ? "30dvh" : "60vh",
        }}
      >
        <Image
          src={isMobile ? visuelHome1Mobile : visuelHome1Desktop}
          alt="visuel homme avec téléphone"
          fill
          style={{
            objectFit: "cover",
            width: "100%",
          }}
          loading="lazy"
          priority={false}
        />
      </div>
      <BenefitsHomeSection />
      <InspirationSection />
      {isMobile && <UserNumberCard />}
      <Testimony />
      <FloatingMenu />
      <div
        style={{
          position: "relative",
          width: "100%",
          height: isMobile ? "30dvh" : "60vh",
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
          loading="lazy"
        />
      </div>
      <PartnerCarousel />
      <Uvibes />
      <Contact />
      <Footer />
    </main>
  );
}
