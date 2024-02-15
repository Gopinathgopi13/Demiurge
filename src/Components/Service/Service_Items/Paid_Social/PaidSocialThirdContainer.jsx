import React from "react";
import SEOImage from "../../../../assets/SVG/google_icon.svg";

function PaidSocialThirdContainer() {
  return (
    <div className="lg:w-[1280px] sm:flex sm:flex-col sm:justify-center  mx-auto px-4">
      <div className="lg:text-5xl font-medium my-5 py-5">Our Platforms</div>
      <div className="grid lg:grid-cols-3 gap-5 my-10">
        <div className="flex flex-col items-center h-60 gap-5">
          <div className="h-[40%] flex items-center gap-8">
            <img src={SEOImage} className="h-[40%]" />
            <div className="text-xl text-blue-500">Facebook Advertising</div>
          </div>
          <div className=" text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, praesentium?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatibus, praesentium? adipisicing elit.
            Voluptatibus, praesentium?
          </div>
        </div>

        <div className="flex flex-col items-center h-60 gap-5">
          <div className="h-[40%] flex items-center gap-8">
            <img src={SEOImage} className="h-[40%]" />
            <div className="text-xl text-blue-500">Twitter Advertising</div>
          </div>
          <div className=" text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, praesentium?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatibus, praesentium? adipisicing elit.
            Voluptatibus, praesentium?
          </div>
        </div>

        <div className="flex flex-col items-center h-60 gap-5">
          <div className="h-[40%] flex items-center gap-8">
            <img src={SEOImage} className="h-[40%]" />
            <div className="text-xl text-blue-500">Youtube Advertising</div>
          </div>
          <div className=" text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, praesentium?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatibus, praesentium? adipisicing elit.
            Voluptatibus, praesentium?
          </div>
        </div>

        <div className="flex flex-col items-center h-60 gap-5">
          <div className="h-[40%] flex items-center gap-8">
            <img src={SEOImage} className="h-[40%]" />
            <div className="text-xl text-blue-500">LinkedIn Advertising</div>
          </div>
          <div className=" text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, praesentium?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatibus, praesentium? adipisicing elit.
            Voluptatibus, praesentium?
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaidSocialThirdContainer;
