import { fetchPostsByTagSlug } from "@/services/blog/article";
import { sanitizeText } from "@/services/blog/sanitize";
import { Article } from "@/types/article/article";
import { useEffect, useState } from "react";

export default function BlogUvibesArticle() {
  const [uvibesArticles, setUvibesArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const articles = await fetchPostsByTagSlug("uvibes-article");
      const articlesWithImages = await Promise.all(
        articles.map(async (article: Article) => {
          let featuredImage = null;
          if (article.featured_media) {
            const mediaRes = await fetch(
              `${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/media/${article.featured_media}`
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
            date: new Date(article.date),
          };
        })
      );
      const sortedArticles = articlesWithImages.sort(
        (a, b) => b.date.getTime() - a.date.getTime()
      );
      setUvibesArticles(sortedArticles);
    };
    fetchArticles();
  }, []);

  return { uvibesArticles };
}
