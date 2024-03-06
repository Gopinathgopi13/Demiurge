import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const PPCFourthContainer = () => {
  return (
    <div
      className="lg:w-[1280px] sm:flex sm:flex-col sm:justify-center gap-10  mx-auto px-4 py-4"
      //   data-aos="fade-down"
      //   data-aos-duration="1000"
      //   data-aos-once="true"
    >
      <div className="lg:text-6xl text-3xl font-medium my-5 primaryColor">
        Our Performance Marketing Services:
      </div>
      <div>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className="border">Slide 1</SwiperSlide>
          <SwiperSlide className="border">Slide 2</SwiperSlide>
          <SwiperSlide className="border">Slide 3</SwiperSlide>
          <SwiperSlide className="border">Slide 4</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default PPCFourthContainer;
