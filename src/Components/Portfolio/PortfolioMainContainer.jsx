import React from "react";
import data from "../../Utilities/WorkImages";
function PortfolioMainContainer() {
  return (
    <div className="lg:w-[1280px] sm:flex sm:flex-col sm:justify-center mx-auto px-4">
      <div
        className="lg:text-6xl text-3xl text-center font-bold my-10"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        Our Past Projects
      </div>
      <div
        className="text-2xl primaryColor mb-12 text-center"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        Social Media Posts & Ads
      </div>
      <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
        {data.map(({ id, img }) => {
          console.log(img);
          return (
            <>
              <div
                key={id}
                className="h-[300px] w-[300px] mx-auto"
                data-aos="zoom-in"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <img src={img} className="h-full w-full" alt="" />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default PortfolioMainContainer;
