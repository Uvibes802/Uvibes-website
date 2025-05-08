import { sanitizeText } from "../blog/sanitize";
import logoUvibes from "../../../public/images/Logo VI blanc.png";
import type { TeamProps } from "@/types/team/teamProps";

type Post = {
  title: { rendered: string };
  excerpt: { rendered: string };
  slug: string;
  tags: number[];
  _embedded?: {
    "wp:featuredmedia"?: {
      source_url: string;
    }[];
  };
};

const tagToTeamName = {
  20: "Equipe projet",
  21: "Comité scientifique",
  22: "Les architectes du code",
};

export default async function FetchTeam(): Promise<TeamProps[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/posts?categories=19&_embed`
  );

  const data: Post[] = await res.json();

  const enrichedTeam = data.map((item) => {
    const image =
      item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || logoUvibes;
    console.log(
      "Image pour",
      item.slug,
      ":",
      item._embedded?.["wp:featuredmedia"]?.[0]?.source_url
    );
    const teamTagId = item.tags[0]; // On suppose 1 seul tag par article
    const team =
      tagToTeamName[teamTagId as keyof typeof tagToTeamName] || "Autre";

    return {
      name: sanitizeText(item.title.rendered),
      position: sanitizeText(item.excerpt.rendered),
      image,
      alt: `Photo de ${sanitizeText(item.title.rendered)}`,
      team,
    };
  });

  return enrichedTeam;
}
