import React from "react";
import SEOImage from "../../../../assets/SVG/seo-analytics.svg";
import PNG from "../../../../assets/PNG.png";
function PRFourthContainer() {
  return (
    <div
      className="lg:w-[1280px] sm:flex sm:flex-col sm:justify-center gap-20  mx-auto px-4"
      data-aos="fade-down"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      {/* <div className="md:text-4xl text-3xl font-medium my-5 py-5 primaryColor">
        Crafting perceptions, guarding reputations, and leading industries
      </div> */}
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="flex flex-col items-center">
          <div className="h-[70%]">
            <img src={PNG} className="w-[80px]" />
          </div>
          <div className="h-[30%] text-center">
            Expertly shape and maintain how your brand is perceived.
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="h-[70%]">
            <img src={PNG} className="w-[80px]" />
          </div>
          <div className="h-[30%] text-center">
            Shield your reputation from negative events with our strategic
            management.
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="h-[70%]">
            <img src={PNG} className="w-[80px]" />
          </div>
          <div className="h-[30%] text-center">
            Ascend to the top of your industry by establishing authority with
            our PR prowess.
          </div>
        </div>
      </div>
    </div>
  );
}

export default PRFourthContainer;
