export type Article = {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  featured_media: number;
  featured_image: string;
  slug: string;
  date: Date;
  acf: {
    auteur_custom: string;
  };
  tags: {
    id: number;
    name: string;
    slug: string;
  };
};
