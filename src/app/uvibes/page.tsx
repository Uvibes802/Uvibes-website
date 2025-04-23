import { HeroBanner } from "@/components/banner/heroBanner";
import logoUvibes from "../../../public/images/Logo VI blanc.png";

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
    </>
  );
}
