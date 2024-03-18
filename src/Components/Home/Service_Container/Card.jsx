import ServicesCard from "./ServicesCard";
import serviceData from "../../../Utilities/ServiceData";
import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
import "./ServiceContainer.css"; // Import CSS file

const ServiceSlider = () => {
  return (
    <div className="relative">
      {/* <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 overflow-hidden"> */}
      <Swiper
        pagination={{
          type: "progressbar",
          el: ".swiper-progressbar",
        }}
        slidesPerView={3}
        spaceBetween={30}
        navigator={true}
        direction={"horizontal"}
        modules={[Pagination, Mousewheel]}
        className="mySwiper py-5"
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
