import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function ServiceMainPage() {
  return (
    <div className="w-full">
      <div className="lg:w-[1280px] mx-auto px-4 lg:pb-20 h-[90vh] primaryColor flex flex-col justify-center items-center gap-y-14">
        <div className="lg:text-6xl text-3xl lg:w-[70%] text-center font-extrabold leading-snug"
        data-aos="fade-down"
        data-aos-duration="1000"
        >
          Let Our Expertise Bring Your Ideas to Life
        </div>
        <Link to="/contactForm"
        data-aos="fade-right"
        data-aos-duration="1000"
        
        >
          <div className="px-16 py-5 text-xl border-2 text-white flex items-center gap-4 cursor-pointer">
            <Link to="/contact">Get proposal</Link>
            <FaArrowRight size={20} className="primaryColor"/>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ServiceMainPage;
