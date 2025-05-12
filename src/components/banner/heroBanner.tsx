import type { HeroBannerProps } from "../../types/banner/heroBanner";
import Image from "next/image";
import Link from "next/link";
import Logo_uVibesDesktop from "../../../public/images/Logo UVIBES.png";
import Logo_uVibes from "../../../public/images/Logo VI blanc.png";
import "../../styles/banner/heroBanner.css";
import WhiteButton from "../button/WhiteButton";

export function HeroBanner({
  title,
  subtitle,
  description,
  imageDesktop,
  imageMobile,
  alt,
}: HeroBannerProps) {
  return (
    <header className="hero-banner-wrapper">
      <div className="hero-banner-container">
        <div className="hero-banner-header-top">
          <Link href="/" passHref>
            <Image
              src={Logo_uVibes}
              alt="Logo uVibes"
              width={80}
              className="logo_mobile"
            />

            <Image
              src={Logo_uVibesDesktop}
              alt="Logo uVibes desktop"
              width={400}
              className="logo_desktop"
            />
          </Link>

          <WhiteButton title="Connectez-vous à Uvibes" type="button" />
        </div>

        <div className="hero-banner-body">
          <section className="hero-banner-content">
            <h1 className="visually-hidden">{title}</h1>
            <h2 className="title-text">{subtitle}</h2>
            <h1 className="title-h1">{title}</h1>
            <p className="title-text">{description}</p>
          </section>

          <figure className="hero-banner-image-container desktop-only">
            <Image
              src={imageDesktop}
              alt={alt}
              className="hero-banner-image-desktop"
              width={600}
              height={900}
              priority
            />
          </figure>
        </div>
      </div>

      <figure className="hero-banner-image-container mobile-only">
        <Image
          src={imageMobile}
          alt={alt}
          className="hero-banner-image"
          width={600}
          height={900}
          priority
        />
      </figure>
    </header>
  );
}
