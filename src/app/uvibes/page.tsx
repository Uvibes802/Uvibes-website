"use client";

import { HeroBanner } from "@/components/banner/heroBanner";
import logoUvibes from "../../../public/images/Logo VI blanc.png";
import delphine from "../../../public/images/delphine.jpg";
import logoEclatense from "../../../public/images/LogoEclatens.png";
import { DotIcon } from "lucide-react";
import "../../styles/page/uvibes.css";
import TeamCards from "@/components/cards/teamCards";
import Image from "next/image";
import TeamSection from "@/components/section/TeamSection";

export default function uvibes() {
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
      <main>
        <section className="uvibes-aboutUs uvibes-container">
          <h2 className="title-h2 uvibes-title">La naissance de l&apos;idée</h2>
          <p className="text">
            Interagir avec des inconnus nous rend plus heureux et nous maintient
            en bonne santé physique. <br />
            Alors comment lancer cette discussion ? <br />
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
          <h2 className="title-h2 uvibes-title">Le portage du projet</h2>
          <div className="uvibes-portage">
            <TeamSection />
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
        <section className="uvibes-container">
          <h2 className="title-h2 uvibes-title">Sa concrétisation</h2>
          <TeamCards
            image={delphine}
            alt="Photo de Delphine Boyrie"
            name="Delphine Boyrie"
            position="Présidente"
          />
        </section>
      </main>
    </>
  );
}
