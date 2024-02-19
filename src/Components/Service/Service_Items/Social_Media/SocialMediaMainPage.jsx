import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function SocialMediaMainPage() {
  return (
    <div className="w-full">
      <div className="lg:w-[1280px] mx-auto px-4 lg:pb-20 h-[90vh] text-white flex flex-col justify-center gap-y-14">
        <div className="lg:text-6xl text-3xl lg:w-[95%] font-extrabold">
          Experience the power of data-driven social media marketing that gets
          results.
        </div>
        <div className="lg:w-[80%] lg:text-xl text-justify">
          A strategic social media approach is your key to connecting with the
          right people and achieving lasting success.
        </div>
        <Link to="/contactForm">
          <div className="w-60 px-6 py-5 text-xl bg-blue-700 flex items-center gap-4 cursor-pointer">
            <Link to="/contact">Get in touch</Link>
            <FaArrowRight size={20} />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SocialMediaMainPage;
