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

import { useState, useEffect } from "react";
import { PulseLoader } from "react-spinners";

const localImages = [
  "/dallake.webp",
  "/dallake2.webp",
  "./tarsar.webp",
  "./pahalgam.webp",
  "/sonmarg.webp",
];

const remoteImages = [];

export default function SwiperSlides() {
  const [isFirstImageLoaded, setIsFirstImageLoaded] = useState(false);
  const allImages = [...localImages, ...remoteImages];

  const loadFirstImage = () => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = allImages[0];
      img.onload = () => resolve(true);
    });
  };

  useEffect(() => {
    const loadImage = async () => {
      await loadFirstImage();
      setIsFirstImageLoaded(true);
    };

    loadImage();
  }, []);

  return (
    <div className="text-white rounded-lg w-full h-full object-contain">
      {/* Render a loading spinner while the first image is loading */}
      {!isFirstImageLoaded && (
        <div className="flex justify-center items-center w-full h-full">
          <PulseLoader color="#ffffff" size={25} speedMultiplier={1} />
        </div>
      )}

      {/* Render the Swiper once the first image is loaded */}
      {isFirstImageLoaded && (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 2500 }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="w-full h-full object-contain"
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
      )}
    </div>
  );
}
