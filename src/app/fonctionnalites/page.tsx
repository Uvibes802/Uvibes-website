import { HeroBanner } from "@/components/banner/heroBanner";
import mockupFonctionnalites from "../../../public/images/mockupFonctionnality.png";
import mockupFonctionnalitesDesktop from "../../../public/images/mockupFonctionnalityDesktop.png";

export default function FonctionnalitesPage() {
  return (
    <div>
      <HeroBanner
        subtitle="LES FONCTIONNALITÉS"
        title="Uvibes, activateur d'intelligence émotionnelle"
        description="Au sein de votre collectif, l’application qui révolutionne les interactions grâce à des fonctionnalités innovantes"
        imageDesktop={mockupFonctionnalitesDesktop}
        imageMobile={mockupFonctionnalites}
        alt="Fonctionnalités de l'application"
      />
    </div>
  );
}
