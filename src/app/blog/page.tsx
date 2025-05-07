"use client";

import { HeroBanner } from "@/components/banner/heroBanner";
import BlogEntrepriseArticle from "@/components/cards/blogEntrepriseArticle";
import Footer from "@/components/footer/Footer";
import FloatingMenu from "@/components/menu/Menu";
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
      <div>
        <BlogEntrepriseArticle />
      </div>
      <Footer />
    </>
  );
}
