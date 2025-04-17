import { useEffect, useState } from "react";
import DOMPurify from "dompurify";

export default function FetchCitation() {
  const [citation, setCitation] = useState<string>("");
  const [authorCitation, setAuthorCitation] = useState<string>("");
  const [roleAuthor, setRoleAuthor] = useState<string>("");
  useEffect(() => {
    const sanitizeText = (text: string) => {
      const tempDiv = document.createElement("p");
      tempDiv.innerHTML = text;
      return DOMPurify.sanitize(tempDiv.innerHTML, {
        ALLOWED_TAGS: [],
        ALLOWED_ATTR: [],
      })
        .replace(/&nbsp;/g, " ")
        .replace(/\s+/g, " ")
        .trim();
    };

    fetch("https://uvibes.fr/wp-json/wp/v2/posts?categories=12")
      .then((response) => response.json())
      .then((data) => {
        setCitation(sanitizeText(data[0].content.rendered));
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération de la citation:", error);
        setCitation("Citation non disponible");
      });

    fetch("https://uvibes.fr/wp-json/wp/v2/posts?categories=13")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAuthorCitation(sanitizeText(data[0].content.rendered));
      });

    fetch("https://uvibes.fr/wp-json/wp/v2/posts?categories=14")
      .then((response) => response.json())
      .then((data) => {
        setRoleAuthor(sanitizeText(data[0].content.rendered));
      });
  }, []);

  return { citation, authorCitation, roleAuthor };
}
