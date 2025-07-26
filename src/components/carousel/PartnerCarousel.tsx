import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import eklore from "../../../public/images/eklore.png";
import fetedesvoisins from "../../../public/images/LogoFeteDesVoisins.png";
import university from "../../../public/images/upvd_logo_hori_rvb.png";
import "../../styles/carousel/PartnerCarousel.css";

export function PartnerCarousel() {
  const partnerLogos = [
    {
      index: 1,
      src: university,
      alt: "University of Perpignan",
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
          delay: 500,
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
