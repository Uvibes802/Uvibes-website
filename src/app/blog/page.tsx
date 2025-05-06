"use client";

import { HeroBanner } from "@/components/banner/heroBanner";
import FloatingMenu from "@/components/menu/Menu";
import Footer from "@/components/footer/Footer";
import mockupBlog from "../../../public/images/mockupBlog.png";

export default function BlogPage() {
  return (
    <>
      <HeroBanner
        subtitle="Le blog"
        title="Explorez des contenus inspirants"
        description="Une sélection d’actualités et de publications enrichissantes"
        imageDesktop={mockupBlog}
        imageMobile={mockupBlog}
        alt="Fonctionnalités de l'application"
      />
      <nav>
        <FloatingMenu />
      </nav>
      <Footer />
    </>
  );
}
