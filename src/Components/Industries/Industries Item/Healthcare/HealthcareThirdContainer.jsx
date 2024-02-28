import React from "react";
import tourismIcon1 from "../../../../assets/SVG/SVG/tourismIcon1.svg";
import tourismIcon2 from "../../../../assets/SVG/SVG/tourismIcon2.svg";
import tourismIcon3 from "../../../../assets/SVG/SVG/tourismIcon3.svg";
import tourismIcon4 from "../../../../assets/SVG/SVG/tourismIcon4.svg";
const HealthcareThirdContainer = () => {
  return (
    <div className="lg:w-[1280px] mx-auto px-4 py-10 flex flex-col justify-center items-start gap-10">
      <div className="lg:text-6xl text-4xl lg:w-[90%] font-extrabold leading-snug text-[#e48f45]">
        Healthcare Industry Challenges
      </div>
      <div className="grid lg:grid-cols-2 gap-10 my-10">
        <div className="flex flex-col bg-white shadow-lg rounded-lg p-5 gap-5 py-5">
          <div>
            <img className="h-[50px]" src={tourismIcon1} alt="" />
          </div>
          <div className="text-xl font-semibold text-[#e48f45]">
            Changing consumer behaviour
          </div>
          <div>Patients are now very involved in healthcare decisions</div>
        </div>

        <div className="flex flex-col bg-white shadow-lg rounded-lg p-5 gap-5 py-5">
          <div>
            <img className="h-[50px]" src={tourismIcon2} alt="" />
          </div>
          <div className="text-xl font-semibold text-[#e48f45]">
            Changing consumer expectations
          </div>
          <div>That go past healthcare to expecting a premium experience</div>
        </div>

        <div className="flex flex-col bg-white shadow-lg rounded-lg p-5 gap-5 py-5">
          <div>
            <img className="h-[50px]" src={tourismIcon3} alt="" />
          </div>
          <div className="text-xl font-semibold text-[#e48f45]">
            Rising role of tech integrations
          </div>
          <div>From booking of appointments to the implementation of EHRs</div>
        </div>
        <div className="flex flex-col bg-white shadow-lg rounded-lg p-5 gap-5 py-5">
          <div>
            <img className="h-[50px]" src={tourismIcon4} alt="" />
          </div>
          <div className="text-xl font-semibold text-[#e48f45]">
            Lack of consumer data
          </div>
          <div>
            Due to an industry that has been primarily service-driven over
            performance-driven
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthcareThirdContainer;
