import ServicesCard from "./ServicesCard";
import serviceData from "../../../Utilities/ServiceData";
import React from "react";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Autoplay } from "swiper/modules";
import "./ServiceContainer.css"; // Import CSS file

const ServiceSlider = () => {
  return (
    <div className="relative">
      {/* <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 overflow-hidden"> */}
      <Swiper
        pagination={{
          type: "progressbar",
          // el: "swiper-pagination",
        }}
        slidesPerView={3}
        spaceBetween={30}
        navigator={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        direction={"horizontal"}
        modules={[Pagination, Mousewheel]}
        className="mySwiper py-5 custom-progress-bar"
        mousewheel={true}
        breakpoints={{
          // when window width is >= 640px
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
          },
        }}
      >
        {serviceData.map(({ id, logo, name, description, path }) => (
          <SwiperSlide key={id}>
            <ServicesCard
              id={id}
              logo={logo}
              name={name}
              description={description}
              path={path}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* </div> */}
    </div>
  );
};

export default ServiceSlider;
