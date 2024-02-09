import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
function MainPage() {
  return (
    <div className="w-full">
      <div className="w-[1280px] mx-auto px-4 pb-20 h-[90vh] text-white flex flex-col justify-center items-center gap-y-14">
        <div className="text-7xl w-[70%] text-center font-extrabold leading-snug">Increase sales without lifting a finger</div>
        <div className="w-[80%] text-2xl text-center">
          A forward-thinking digital marketing agency focused on amplifying your
          brand's presence through tailored multi-channel marketing strategies,
          dynamic branding techniques, and imaginative creative designs.
        </div>
        <Link to="/contactForm">
          <div className="px-16 py-5 text-2xl bg-blue-700 flex items-center gap-4 cursor-pointer">
            <button>Unlock a no-cost proposal</button>
            <FaArrowRight size={20} />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MainPage;
