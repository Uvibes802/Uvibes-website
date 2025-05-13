import { getExcerpt } from "@/services/blog/getExcerpt";
import "@/styles/blog/blogSection.css";
import { Article } from "@/types/article/article";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import BlogEducationArticle from "../../services/blog/blogEducationArticle";
import BlogEntrepriseArticle from "../../services/blog/blogEntrepriseArticle";
import BlogScienceNSociety from "../../services/blog/blogScienceNSociety";
import BlogUvibesArticle from "../../services/blog/blogUvibesArticle";
import BlogVulnerabilityArticle from "../../services/blog/blogVulnerabilityArticle";
export default function AllArticle() {
  const [allArticles, setAllArticle] = useState<Article[]>([]);
  const { entrepriseArticle } = BlogEntrepriseArticle();
  const { educationArticle } = BlogEducationArticle();
  const { scienceArticles } = BlogScienceNSociety();
  const { vulnerabilityArticles } = BlogVulnerabilityArticle();
  const { uvibesArticles } = BlogUvibesArticle();
  useEffect(() => {
    const fetchAllArticle = async () => {
      try {
        const fetchEntrepriseArticle = await entrepriseArticle;
        const fetchEducationArticle = await educationArticle;
        const fetchScienceNSocietyArticle = await scienceArticles;
        const fetchVulnerabilityArticle = await vulnerabilityArticles;
        const fetchUvibesArticle = await uvibesArticles;

        const combinedArticles = [
          ...fetchEntrepriseArticle,
          ...fetchEducationArticle,
          ...fetchScienceNSocietyArticle,
          ...fetchVulnerabilityArticle,
          ...fetchUvibesArticle,
        ];
        setAllArticle(combinedArticles);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllArticle();
  }, [
    entrepriseArticle,
    educationArticle,
    scienceArticles,
    vulnerabilityArticles,
    uvibesArticles,
  ]);
  return (
    <section className="article-section">
      {allArticles.map((article) => (
        <article
          key={article.id}
          className={`blog-article ${article.tags.slug}`}
        >
          <Image
            src={article.featured_image}
            alt={article.title.rendered}
            width={200}
            height={200}
          />
          <div className="article-card-content">
            <h3>{article.title.rendered}</h3>
            <p>{getExcerpt(article.content.rendered, 240)}</p>
            <p>
              <strong>{article.acf.auteur_custom}</strong>
            </p>
            <p>{article.date.toLocaleDateString()}</p>
            <Link href={`/blog/${article.slug}`}>Lire la suite</Link>
          </div>
        </article>
      ))}
    </section>
  );
}
