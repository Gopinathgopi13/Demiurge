import React from "react";
import ARTech1 from "../../../../assets/ARTech1.webp";
import ARTech2 from "../../../../assets/ARTech2.webp";
import ARTech3 from "../../../../assets/ARTech3.webp";
import ARTech4 from "../../../../assets/ARTech4.webp";
import ARTech5 from "../../../../assets/ARTech5.webp";
function ARThirdContainer() {
  return (
    <div className="lg:w-[1280px] mx-auto px-4 lg:pb-20 h-[90vh]flex flex-col justify-center items-center text-center space-y-5 py-10">
      <div className="lg:text-4xl text-2xl lg:w-[90%] font-extrabold leading-snug text-[#E48F45]">
        AR Application Development Technology Stack
      </div>
      <div className="text-lg lg:w-[90%] text-center leading-snug">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, impedit?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
        voluptate!
      </div>
      <div className="grid md:grid-cols-5 gap-5">
        <div className="flex justify-center items-center shadow-xl rounded-3xl">
          <img
            src={ARTech1}
            className="h-[50%] w-[50%] object-contain"
            alt=""
          />
        </div>
        <div className="flex justify-center items-center shadow-xl rounded-3xl">
          <img
            src={ARTech2}
            className="h-[50%] w-[50%] object-contain"
            alt=""
          />
        </div>
        <div className="flex justify-center items-center shadow-xl rounded-3xl">
          <img
            src={ARTech3}
            className="h-[50%] w-[50%] object-contain"
            alt=""
          />
        </div>
        <div className="flex justify-center items-center shadow-xl rounded-3xl">
          <img
            src={ARTech4}
            className="h-[50%] w-[50%] object-contain"
            alt=""
          />
        </div>
        <div className="flex justify-center items-center shadow-xl rounded-3xl">
          <img
            src={ARTech5}
            className="h-[50%] w-[50%] object-contain"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default ARThirdContainer;
