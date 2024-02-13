import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function IndustriesMainPage() {
  return (
    <div className="w-full">
      <div className="lg:w-[1280px] mx-auto px-4 pb-20 h-[90vh] text-white flex flex-col justify-center items-center gap-y-14">
        <div className="lg:text-7xl text-4xl lg:w-[70%] text-center font-extrabold leading-snug">
        Industries
        </div>
        <Link to="/contactForm">
          <div className="lg:px-16 px-5 py-5 text-2xl bg-blue-700 flex items-center gap-4 cursor-pointer">
            <Link to="/contact">Get proposal</Link>
            <FaArrowRight size={20} />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default IndustriesMainPage;
