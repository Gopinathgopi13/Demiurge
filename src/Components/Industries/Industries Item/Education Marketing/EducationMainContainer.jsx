import React from "react";
import { Link } from "react-router-dom";

const EducationMainContainer = () => {
  return (
    <div className="lg:w-[1280px] mx-auto px-4 lg:pb-20 h-[90vh] text-white flex flex-col justify-center items-start gap-y-14">
      <div className="text-lg">Education</div>
      <div className="lg:text-7xl text-4xl lg:w-[90%] font-extrabold leading-snug text-[#e48f45]">
        Industry leading education marketing
      </div>
      <div className="text-3xl lg:w-[90%] leading-snug">
        Effective digital marketing solutions to boost leads and grow your
        enrolments
      </div>
      <Link to="/contactForm">
        <div className="px-16 py-5 text-2xl border-2 text-[#e48f45] flex items-center gap-4 cursor-pointer">
          <Link to="/contact">Book a demo</Link>
        </div>
      </Link>
    </div>
  );
};

export default EducationMainContainer;
