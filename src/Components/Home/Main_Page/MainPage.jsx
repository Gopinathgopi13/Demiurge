import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
function MainPage() {
  return (
    <div className="w-full">
      <div className="lg:w-[1280px] mx-auto px-4 h-[90vh] text-white flex flex-col justify-center items-center gap-y-14">
        <div className="lg:text-7xl text-3xl lg:w-[70%] text-center font-extrabold leading-snug">
          Increase sales without lifting a finger
        </div>
        <div className="lg:w-[80%] lg:text-2xl text-justify">
          A forward-thinking digital marketing agency focused on amplifying your
          brand's presence through tailored multi-channel marketing strategies,
          dynamic branding techniques, and imaginative creative designs.
        </div>
        <Link to="/contactForm">
          <div className="lg:px-16 px-10 py-5 lg:text-2xl bg-blue-700 flex items-center gap-4 cursor-pointer">
            <Link to="/contact">Unlock a no-cost proposal</Link>
            <FaArrowRight size={20} />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MainPage;
