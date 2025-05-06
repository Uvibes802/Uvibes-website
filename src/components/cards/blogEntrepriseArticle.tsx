"use client";
import { fetchPostsByTagSlug } from "@/services/blog/article";
import "@/styles/cards/blogArticleCard.css";
import DOMPurify from "dompurify";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BlogEntrepriseArticle() {
  const [entrepriseArticle, setEntrepriseArticle] = useState([]);

  useEffect(() => {
    const sanitizeText = (text: string) => {
      return DOMPurify.sanitize(text, {
        ALLOWED_TAGS: [
          "p",
          "br",
          "ul",
          "ol",
          "li",
          "strong",
          "em",
          "b",
          "i",
          "a",
          "blockquote",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
        ],
        ALLOWED_ATTR: ["href", "title", "target", "rel"],
      });
    };

    const fetchArticles = async () => {
      const articles = await fetchPostsByTagSlug("entreprise-article");

      // Pour chaque article, on récupère l'URL de l'image à la une via l'ID
      const articlesWithImages = await Promise.all(
        articles.map(async (article) => {
          let featuredImage = null;
          if (article.featured_media) {
            // On récupère l'image à la une via l'ID
            const mediaRes = await fetch(
              `https://uvibes.fr/wp-json/wp/v2/media/${article.featured_media}`
            );
            const media = await mediaRes.json();
            featuredImage = media.source_url;
          }
          return {
            ...article,
            featured_image: featuredImage,
            title: {
              ...article.title,
              rendered: sanitizeText(article.title.rendered),
            },
            content: {
              ...article.content,
              rendered: sanitizeText(article.content.rendered),
            },
          };
        })
      );

      setEntrepriseArticle(articlesWithImages);
      console.log(articlesWithImages);
    };
    fetchArticles();
  }, []);
  // Fonction pour extraire un extrait texte du HTML
  const getExcerpt = (html: string, length: number) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    const text = tempDiv.textContent || tempDiv.innerText || "";
    return text.length > length ? text.slice(0, length) + "..." : text;
  };

  return (
    <div>
      {entrepriseArticle.map((article) => (
        <article key={article.id} className="blog-article entreprise-article">
          <Image
            src={article.featured_image}
            alt={article.title.rendered}
            width={200}
            height={200}
          />
          <div className="article-card-content">
            <h3>{article.title.rendered}</h3>
            <p>{getExcerpt(article.content.rendered, 240)}</p>
          </div>
          <Link href={`/blog/${article.slug}`}>Lire la suite</Link>
        </article>
      ))}
    </div>
  );
}
