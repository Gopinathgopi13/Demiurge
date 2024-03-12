import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function AboutMainPage() {
  return (
    <div className="w-full">
      <div className="max-w-[1280px] mx-auto px-4 lg:pb-20 text-white py-20 space-y-10">
        <div className="lg:text-5xl  text-4xl text-[#E48F45] text-center font-bold">
          About Us
        </div>
        <div className="text-2xl text-center">
          Our Vision is to make work inspiring and fulfilling
        </div>
      </div>
    </div>
  );
}

export default AboutMainPage;
