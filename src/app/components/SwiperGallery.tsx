import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CardBg_1 from "../../../public/img/cardbg/cardBg(1).avif";
import CardBg_2 from "../../../public/img/cardbg/cardBg(2).gif";
import CardBg_3 from "../../../public/img/cardbg/cardBg(3).svg";
import CardBg_4 from "../../../public/img/cardbg/cardBg(4).png";
import CardBg_5 from "../../../public/img/cardbg/cardBg(5).gif";
import CardBg_6 from "../../../public/img/cardbg/cardBg(6).avif";
import CardBg_7 from "../../../public/img/cardbg/cardBg(7).avif";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

const SwiperGallery = () => {
  const slides = [
    {
      image: CardBg_1,
      title: "Denim City",
      description: "Connecting the next generation with the forefront of the denim world..."
    },
    {
      image: CardBg_2,
      title: "2050",
      description: "Transparency stitched into every thread, one scan at a time..."
    },
    {
      image: CardBg_3,
      title: "Female X Finance",
      description: "Community and job platform to empower young female professionals..."
    },
    {
      image: CardBg_4,
      title: "The Net Positive Network",
      description: "Shaping a sustainable future through knowledge, connection and action."
    },
    {
      image: CardBg_5,
      title: "Code Metal",
      description: "Edge-Development made first, fluid and future-proof."
    },
    {
      image: CardBg_6,
      title: "Air Schiphol",
      description: "A platform that enables users to run their codebases.."
    },
    {
      image: CardBg_7,
      title: "OGSM.com",
      description: "Designing a digital home for a time tested buisness framework..."
    }
  ];

  return (
    <section className="min-h-screen bg-black relative z-5 text-white flex items-center font-clashgrotesk px-4 md:px-0">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
        style={{ height: "60vh" }}
        breakpoints={{
            // when window width is < 640px (sm breakpoint)
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
           
            640: {
              slidesPerView: 2,
              spaceBetween: 25
            },
          
            1024: {
              slidesPerView: 4,
              spaceBetween: 30
            },
            1900: {
              slidesPerView: 6,
              spaceBetween: 30
            }
          }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="bg-white rounded-4xl h-full w-full relative overflow-hidden">
            <Image
              src={slide.image}
              alt=""
              className="h-full w-full rounded-[inherit] object-cover"
              priority={index < 3} // Only prioritize first few images
            />
            <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-b from-transparent to-black/50" />
            <div className="absolute bottom-4 left-4 z-10 text-white max-w-[80%]">
              <h1 className="text-2xl font-bold">{slide.title}</h1>
              <p className="normal-case text-sm mt-1">{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SwiperGallery;