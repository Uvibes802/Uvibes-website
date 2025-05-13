import { getExcerpt } from "@/services/blog/getExcerpt";
import "@/styles/blog/blogSection.css";
import { Article } from "@/types/article/article";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import BlogEducationArticle from "../../services/blog/blogEducationArticle";
import BlogEntrepriseArticle from "../../services/blog/blogEntrepriseArticle";
import BlogScienceNSociety from "../../services/blog/blogScienceNSociety";
import BlogUvibesArticle from "../../services/blog/blogUvibesArticle";
import BlogVulnerabilityArticle from "../../services/blog/blogVulnerabilityArticle";
export default function AllArticle() {
  const [allArticles, setAllArticle] = useState<Article[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const { entrepriseArticle } = BlogEntrepriseArticle();
  const { educationArticle } = BlogEducationArticle();
  const { scienceArticles } = BlogScienceNSociety();
  const { vulnerabilityArticles } = BlogVulnerabilityArticle();
  const { uvibesArticles } = BlogUvibesArticle();
  const router = useRouter();
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

  const filteredArticles = selectedCategory
    ? allArticles.filter((article) => article.tags.slug === selectedCategory)
    : allArticles;

  return (
    <section className="article-section">
      <select
        name="category"
        id="categories"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">Toutes les catégories</option>
        <option value="entreprise-article">Entreprise</option>
        <option value="education-article">Education</option>
        <option value="personne-vulnerable">Personne Vulnerable</option>
        <option value="uvibes">Uvibes</option>
        <option value="science-et-societe">Science et Société</option>
      </select>
      {filteredArticles.map((article) => (
        <article
          key={article.id}
          className={`blog-article ${article.tags.slug}`}
          onClick={() => router.push(`/blog/${article.slug}`)}
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
