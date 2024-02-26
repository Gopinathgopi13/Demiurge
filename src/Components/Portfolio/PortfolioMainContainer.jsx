import React from "react";
import data from "../../Utilities/WorkImages.json";
function PortfolioMainContainer() {
  return (
    <div className="lg:w-[1280px] sm:flex sm:flex-col sm:justify-center mx-auto px-4">
      <div
        className="lg:text-6xl text-3xl font-bold my-10"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        Our Past Projects
      </div>
      <div
        className="lg:text-xl lg:w-[60%] mb-12"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        Social Media Posts & Ads
      </div>
      <div className="grid lg:grid-cols-3 gap-3">
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
