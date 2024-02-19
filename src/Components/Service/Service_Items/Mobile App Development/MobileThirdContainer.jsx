import React from "react";
import SEOImage from "../../../../assets/SVG/google_icon.svg";

function MobileThirdContainer() {
  return (
    <div className="lg:w-[1280px] sm:flex sm:flex-col sm:justify-center  mx-auto px-4">
      <div className="md:text-6xl text-3xl font-medium my-5 py-5">Our Platforms</div>
      <div className="grid lg:grid-cols-3 gap-5 my-10">
        <div className="flex flex-col items-center h-72 px-5 gap-5 shadow-lg rounded-lg py-5">
          <div className="h-[40%] space-y-5 ">
            <img src={SEOImage} className="h-[40%] mx-auto" />
            <div className="text-xl text-blue-500">E-Commerce & Retail</div>
          </div>
          <div className=" text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, praesentium?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatibus, praesentium? adipisicing elit.
            Voluptatibus, praesentium?
          </div>
        </div>

        <div className="flex flex-col items-center h-72 px-5 gap-5 shadow-lg rounded-lg py-5">
          <div className="h-[40%] space-y-5 ">
            <img src={SEOImage} className="h-[40%] mx-auto" />
            <div className="text-xl text-blue-500">Healthcare & Medicine</div>
          </div>
          <div className=" text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, praesentium?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatibus, praesentium? adipisicing elit.
            Voluptatibus, praesentium?
          </div>
        </div>

        <div className="flex flex-col items-center h-72 px-5 gap-5 shadow-lg rounded-lg py-5">
          <div className="h-[40%] space-y-5 ">
            <img src={SEOImage} className="h-[40%] mx-auto" />
            <div className="text-xl text-blue-500">Entertainment</div>
          </div>
          <div className=" text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, praesentium?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatibus, praesentium? adipisicing elit.
            Voluptatibus, praesentium?
          </div>
        </div>

        <div className="flex flex-col items-center h-72 px-5 gap-5 shadow-lg rounded-lg py-5">
          <div className="h-[40%] space-y-5 ">
            <img src={SEOImage} className="h-[40%] mx-auto" />
            <div className="text-xl text-blue-500">LinkedIn Advertising</div>
          </div>
          <div className=" text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, praesentium?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatibus, praesentium? adipisicing elit.
            Voluptatibus, praesentium?
          </div>
        </div>

        <div className="flex flex-col items-center h-72 px-5 gap-5 shadow-lg rounded-lg py-5">
          <div className="h-[40%] space-y-5 ">
            <img src={SEOImage} className="h-[40%] mx-auto" />
            <div className="text-xl text-blue-500">Telecommunications</div>
          </div>
          <div className=" text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, praesentium?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatibus, praesentium? adipisicing elit.
            Voluptatibus, praesentium?
          </div>
        </div>

        <div className="flex flex-col items-center h-72 px-5 gap-5 shadow-lg rounded-lg py-5">
          <div className="h-[40%] space-y-5 ">
            <img src={SEOImage} className="h-[40%] mx-auto" />
            <div className="text-xl text-blue-500">Learning & Education</div>
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

export default MobileThirdContainer;
