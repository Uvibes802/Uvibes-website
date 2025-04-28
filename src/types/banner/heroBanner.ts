import type { StaticImageData } from "next/image";

export type HeroBannerProps = {
  title: string;
  subtitle: string;
  description: string;
  imageDesktop: string | StaticImageData;
  imageMobile: string | StaticImageData;
  alt: string;
};
