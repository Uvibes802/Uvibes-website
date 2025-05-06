"use client";

import DOMPurify from "dompurify";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Article({ slug }: { slug: string }) {
  const [article, setArticle] = useState(null);

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

    const fetchArticle = async () => {
      // 1. Récupère l'article par son slug
      const res = await fetch(
        `https://uvibes.fr/wp-json/wp/v2/posts?slug=${slug}`
      );
      const posts = await res.json();
      if (!posts.length) return;
      const post = posts[0];

      // 2. Récupère l'image à la une
      let featuredImage = null;
      if (post.featured_media) {
        const mediaRes = await fetch(
          `https://uvibes.fr/wp-json/wp/v2/media/${post.featured_media}`
        );
        const media = await mediaRes.json();
        featuredImage = media.source_url;
      }

      // 3. Mets à jour le state avec l'article et l'image
      setArticle({
        ...post,
        featured_image: featuredImage,
        title: {
          ...post.title,
          rendered: sanitizeText(post.title.rendered),
        },
        content: {
          ...post.content,
          rendered: sanitizeText(post.content.rendered),
        },
      });
    };

    if (slug) fetchArticle();
  }, [slug]);

  if (!article) return <div>Chargement...</div>;

  return (
    <article>
      <Image
        src={article.featured_image || "/default-image.jpg"}
        alt={article.title.rendered}
        width={400}
        height={400}
      />
      <h1>{article.title.rendered}</h1>
      <div
        className="article-content"
        dangerouslySetInnerHTML={{ __html: article.content.rendered }}
      />
    </article>
  );
}
