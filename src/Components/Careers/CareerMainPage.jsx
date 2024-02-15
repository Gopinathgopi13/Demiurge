import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

function CareerMainPage() {
  return (
    <div className="w-full">
      <div className="lg:w-[1280px] mx-auto px-4 lg:pb-20 h-[60vh] text-white flex flex-col justify-center items-center gap-y-14">
        <div className="text-4xl">Careers</div>
        <div className="lg:text-7xl text-4xl lg:w-[80%] text-center font-extrabold leading-snug">
          Challenge the status quo. Build a better future, together.
        </div>
      </div>
    </div>
  );
}

export default CareerMainPage;
