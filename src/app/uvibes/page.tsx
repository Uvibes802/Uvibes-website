"use client";

import { HeroBanner } from "@/components/banner/heroBanner";
import Resize from "@/services/resize/resize";
import logoUvibes from "../../../public/images/Logo VI blanc.png";
import logoEclatense from "../../../public/images/LogoEclatens.png";
import { DotIcon } from "lucide-react";
import "../../styles/page/uvibes.css";
import Image from "next/image";
import TeamSection from "@/components/section/TeamSection";
import FloatingMenu from "@/components/menu/Menu";
import { AppointmentSection } from "@/components/section/appointmentSection";
import Footer from "@/components/footer/Footer";
import uvibesTeam from "../../../public/images/uvibesTeam.jpg";
import uvibesTeamDesktop from "../../../public/images/uvibesTeamDesktop.png";
import HelloAssoDon from "@/components/uvibes/HelloAssoDon";

export default function uvibes() {
  const { isMobile } = Resize();
  return (
    <>
      <HeroBanner
        subtitle=""
        title="Qui sommes-nous ?"
        description="Découvrez l'histoire de Uvibes, notre vision et les personnes qui donnent vie à cette dynamique innovante de renouveau relationnel"
        imageDesktop={logoUvibes}
        imageMobile={logoUvibes}
        alt="Fonctionnalités de l'application"
      />
      <nav>
        <FloatingMenu />
      </nav>
      <main>
        <section className="uvibes-aboutUs uvibes-container">
          <h2 className="title-h2-orange uvibes-title">
            La naissance de l&apos;idée
          </h2>
          <p className="text">
            Interagir avec des inconnus nous rend plus heureux et nous maintient
            en bonne santé physique. <br />
            <br />
            Alors comment lancer cette discussion ? <br />
            <br />
            Après 300 enquêtes de terrain, notre solution voit le jour, amènant
            à des échanges :
          </p>
          <ul>
            <div className="uvibes-list">
              <DotIcon size={24} style={{ color: "var(--mainColor)" }} />
              <li className="text">inattendus</li>
            </div>
            <div className="uvibes-list">
              <DotIcon size={24} style={{ color: "var(--mainColor)" }} />
              <li className="text">brefs</li>
            </div>
            <div className="uvibes-list">
              <DotIcon size={24} style={{ color: "var(--mainColor)" }} />
              <li className="text">ludiques et inspirants</li>
            </div>
            <div className="uvibes-list">
              <DotIcon size={24} style={{ color: "var(--mainColor)" }} />
              <li className="text">sans danger</li>
            </div>
          </ul>
        </section>
        <section className="uvibes-container ">
          <h2 className="title-h2-orange uvibes-title">Le portage du projet</h2>
          <div className="uvibes-portage">
            <article className="uvibes-eclatens-card">
              <Image
                src={logoEclatense}
                alt="team-staff"
                width={390}
                height={218}
                className="uvibes-eclatens-logo"
              />
              <h3 className="title-h3 uvibes-title">Un modèle non lucratif</h3>
              <p className="text">
                Tous les bénéfices générés par Uvibes sont réinvestis dans le
                projet ou dans d’autres initiatives portées par
                l&apos;association
              </p>
            </article>
          </div>
        </section>
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: isMobile ? "4/3" : "16/9",
          }}
        >
          <Image
            src={isMobile ? uvibesTeam : uvibesTeamDesktop}
            alt="visuel équipe Uvibes"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            priority
          />
        </div>
        <section className="uvibes-container">
          <h2 className="title-h2-orange uvibes-title">Sa concrétisation</h2>
          <TeamSection />
        </section>
        <section className="uvibes-contact-container">
          <div className="uvibes-contact-text">
            <h2 className="title-h2-white uvibes-title">
              Rejoignez l&apos;aventure Uvibes
            </h2>
            <p className="text-white">
              Soyez acteur de notre dynamique pour réinventer nos modes
              d’interaction en s’ouvrant à des vision nouvelles
            </p>
          </div>
          <div className="uvibes-contact-button-container">
            <a
              href="mailto:contact@uvibes.fr"
              className="uvibes-contact-button"
            >
              Nous contacter
            </a>
            <a
              href="mailto:contact@uvibes.fr"
              className="uvibes-contact-button"
            >
              Devenir partenaire
            </a>
            <HelloAssoDon />
          </div>
        </section>
        <AppointmentSection />
      </main>
      <Footer />
    </>
  );
}
