import React from "react";
import data from "../../Utilities/WorkImages";
function PortfolioMainContainer() {
  return (
    <div className="max-w-[1280px] sm:flex sm:flex-col sm:justify-center mx-auto px-4">
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
      <div className="columns-2">
        {data.map(({ id, img }) => {
          console.log(img);
          return (
            <>
              <img
                src={img}
                key={id}
                className={` mx-auto ${
                id%2==0 ? "aspect-square" : "aspect-video"
                } mb-6`}
                // data-aos="zoom-in"
                // data-aos-duration="500"
                // data-aos-once="true"
                alt=""
              />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default PortfolioMainContainer;
