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

const images = [
  "https://source.unsplash.com/collection/1353633/1600x900", // Image 1
  "https://source.unsplash.com/collection/1353633/1600x901", // Image 2
  "https://source.unsplash.com/collection/1353633/1600x902", // Image 3
  "https://source.unsplash.com/collection/1353633/1600x903", // Image 4
  "https://source.unsplash.com/collection/1353633/1600x904", // Image 5
  "https://source.unsplash.com/collection/1353633/1600x905", // Image 6
  "https://source.unsplash.com/collection/1353633/1600x906", // Image 7
  "https://source.unsplash.com/collection/1353633/1600x907", // Image 8
  "https://source.unsplash.com/collection/1353633/1600x908", // Image 9
  "https://source.unsplash.com/collection/1353633/1600x909", // Image 10
];

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 2000 }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="text-white rounded-lg"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
