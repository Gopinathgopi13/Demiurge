import React from "react";
import SEOImage from "../../../../assets/SVG/seo-analytics.svg";
function PRFourthContainer() {
  return (
    <div
      className="lg:w-[1280px] sm:flex sm:flex-col sm:justify-center gap-20  mx-auto px-4"
      data-aos="fade-down"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      <div className="md:text-6xl text-3xl font-medium my-5 py-5 primaryColor">
        Our SEO Agency Can Help You By:
      </div>
      <div className="grid lg:grid-cols-3 gap-5">
        <div className="flex flex-col items-center">
          <div className="h-[70%]">
            <img src={SEOImage} className="h-full" />
          </div>
          <div className="h-[30%] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, praesentium?
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="h-[70%]">
            <img src={SEOImage} className="h-full" />
          </div>
          <div className="h-[30%] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, praesentium?
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="h-[70%]">
            <img src={SEOImage} className="h-full" />
          </div>
          <div className="h-[30%] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, praesentium?
          </div>
        </div>
      </div>
    </div>
  );
}

export default PRFourthContainer;
