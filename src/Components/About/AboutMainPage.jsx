import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function AboutMainPage() {
  return (
    <div className="w-full">
      <div className="lg:w-[1280px] mx-auto px-4 lg:pb-20 pt-20">
        <div className="flex flex-col items-center space-y-5">
          <div className="text-center text-3xl">About Us</div>
          <div className="text-center text-5xl">
            Our Vision is to make work inspiring and fulfilling
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMainPage;
