import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import eklore from "../../../public/images/eklore.png";
import mutelios from "../../../public/images/mutelios.png";
import university from "../../../public/images/upvd_logo_hori_rvb.png";
import fetedesvoisins from "../../../public/images/LogoFeteDesVoisins.png";
import "../../styles/carousel/PartnerCarousel.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export function PartnerCarousel() {
  const partnerLogos = [
    {
      index: 1,
      src: university,
      alt: "University of Perpignan",
    },
    {
      index: 2,
      src: mutelios,
      alt: "Mutelios",
    },
    {
      index: 3,
      src: eklore,
      alt: "Eklore",
    },
    {
      index: 4,
      src: fetedesvoisins,
      alt: "Fête des voisins",
    },
    {
      index: 5,
      src: university,
      alt: "University of Perpignan",
    },
    {
      index: 6,
      src: mutelios,
      alt: "Mutelios",
    },
    {
      index: 7,
      src: eklore,
      alt: "Eklore",
    },
    {
      index: 8,
      src: fetedesvoisins,
      alt: "Fête des voisins",
    },
  ];
  return (
    <section className="partner-carousel">
      <h2 className="title-h2-orange partner-carousel-title">
        Nos Partenaires
      </h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        speed={2000}
        centeredSlides={true}
        slidesPerView={1.3}
        breakpoints={{
          400: { slidesPerView: 2.5 },
          1024: { slidesPerView: 3.3 },
        }}
      >
        {partnerLogos.map((logo) => (
          <SwiperSlide key={logo.index} className="swiper-slide">
            <div key={logo.index} className="slide-wrapper">
              <Image
                src={logo.src.src}
                alt={logo.alt}
                className="partner-logo"
                width={300}
                height={300}
                style={{ objectFit: "contain", width: "100%", height: "100%" }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
