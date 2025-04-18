import type { StaticImageData } from "next/image";

export type FunctCardsProps = {
  image: string | StaticImageData;
  title: string;
  subtitle: string;
  link: string;
};
