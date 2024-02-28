import React from "react";
import { Link } from "react-router-dom";

const B2BMainContainer = () => {
  return (
    <div className="lg:w-[1280px] mx-auto px-4 lg:pb-20 h-[90vh] text-white flex flex-col justify-center items-start gap-y-14">
      <div className="text-lg">B-2-B</div>
      <div className="lg:text-7xl text-4xl lg:w-[90%] font-extrabold leading-snug text-[#e48f45]">
        RAMP UP YOUR REVENUE Х2
      </div>
      <div className="text-3xl lg:w-[90%] leading-snug">
        with the top B2B Marketing Digital Agency worldwide
      </div>
      <Link to="/contactForm">
        <div className="px-16 py-5 text-2xl border-2 text-[#e48f45] flex items-center gap-4 cursor-pointer">
          <Link to="/contact">Book a demo</Link>
        </div>
      </Link>
    </div>
  );
};

export default B2BMainContainer;
