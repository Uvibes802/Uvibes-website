import { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import logoUvibes from "../../../public/images/Logo VI blanc.png";
import type { TeamProps } from "@/types/team/teamProps";
import { useCallback } from "react";

export default function useTeam() {
  const [team, setTeam] = useState<TeamProps[]>([]);

  const sanitizeText = useCallback((text: string): string => {
    const tempDiv = document.createElement("p");
    tempDiv.innerHTML = text;
    return DOMPurify.sanitize(tempDiv.innerHTML, {
      ALLOWED_TAGS: [],
      ALLOWED_ATTR: [],
    })
      .replace(/&nbsp;/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }, []);

  useEffect(() => {
    const tagToTeamName = {
      20: "Equipe projet",
      21: "Comité scientifique",
      22: "Les architectes du code",
    };

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    fetch(`${apiUrl}/wp-json/wp/v2/posts?categories=19&_embed`)
      .then((res) => res.json())
      .then((data) => {
        const mappedTeam = data.map(
          (item: {
            title: { rendered: string };
            content: { rendered: string };
            tags: number[];
            _embedded?: { "wp:featuredmedia"?: { source_url?: string }[] };
          }) => {
            const image =
              item._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
              logoUvibes;
            const teamTagId = item.tags[0] as keyof typeof tagToTeamName;
            const teamName = tagToTeamName[teamTagId] || "Autre";

            return {
              name: sanitizeText(item.title.rendered),
              position: sanitizeText(item.content.rendered),
              image,
              alt: `Photo de ${sanitizeText(item.title.rendered)}`,
              team: teamName,
            };
          }
        );
        setTeam(mappedTeam);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération de l'équipe :", error);
      });
  }, [sanitizeText]);

  return team;
}
