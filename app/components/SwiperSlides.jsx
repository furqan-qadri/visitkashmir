// Import Swiper React components
"use client";
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const localImages = [
  "/dallake.webp",
  "/dallake2.webp",
  "./tarsar.webp",
  "./pahalgam.webp",
  "/sonmarg.webp",
];

const remoteImages = [];

export default function SwiperSlides() {
  const allImages = [...localImages, ...remoteImages];

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 2500 }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="text-white rounded-lg w-full h-full object-contain"
    >
      {allImages.map((image, index) => (
        <SwiperSlide key={index} className="h-full w-full object-contain">
          <img
            loading="lazy"
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-contain"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
