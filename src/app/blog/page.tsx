"use client";

import { HeroBanner } from "@/components/banner/heroBanner";
import BlogEducationArticle from "@/components/cards/blogEducationArticle";
import BlogEntrepriseArticle from "@/components/cards/blogEntrepriseArticle";
import BlogScienceNSociety from "@/components/cards/blogScienceNSociety";
import BlogUvibesArticle from "@/components/cards/blogUvibesArticle";
import BlogVulnerabilityArticle from "@/components/cards/blogVulnerabilityArticle";
import Footer from "@/components/footer/Footer";
import FloatingMenu from "@/components/menu/Menu";
import "@/styles/blog/blogSection.css";
import mockupBlog from "../../../public/images/mockupBlog.png";
export default function BlogPage() {
  return (
    <>
      <HeroBanner
        subtitle="Le blog"
        title="Explorez des contenus inspirants"
        description="Une sélection d'actualités et de publications enrichissantes"
        imageDesktop={mockupBlog}
        imageMobile={mockupBlog}
        alt="Fonctionnalités de l'application"
      />
      <nav>
        <FloatingMenu />
      </nav>
      <section className="blog-section">
        <BlogEntrepriseArticle />
        <BlogEducationArticle />
        <BlogScienceNSociety />
        <BlogVulnerabilityArticle />
        <BlogUvibesArticle />
      </section>
      <Footer />
    </>
  );
}
