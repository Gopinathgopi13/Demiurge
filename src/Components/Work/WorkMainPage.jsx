import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function WorkMainPage() {
  return (
    <div className="w-full">
      <div className="max-w-[1280px] mx-auto px-4 lg:pb-20 h-[90vh] text-white flex flex-col justify-center items-center gap-y-14">
        <div className="lg:text-7xl text-4xl lg:w-[70%] text-center font-extrabold leading-snug">
          Discover How We've Helped Brands Grow
        </div>
        <div className="lg:w-[80%] lg:text-2xl text-center">
          We have been honoured to work with many great brands and teams to take
          their projects to the next level. Along our journey, we have learnt
          much and collected a realm of data which fuels our strategy and
          innovations moving forwards.
        </div>
        <Link to="/contactForm">
          <div className="px-16 py-5 text-2xl bg-blue-700 flex items-center gap-4 cursor-pointer">
            <Link to="/contact">Get proposal</Link>
            <FaArrowRight size={20} />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default WorkMainPage;
