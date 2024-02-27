import React from "react";
import { Link } from "react-router-dom";

function ARVRMainPage() {
  return (
    <div className="w-full">
      <div
        className="lg:w-[1280px] mx-auto px-4 lg:pb-20 h-[90vh] text-white flex flex-col justify-center items-start gap-y-14"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <div className="text-lg">AR/VR ADs</div>
        <div className="md:text-6xl text-3xl lg:w-[90%] font-extrabold leading-snug text-[#E48F45]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
          impedit?
        </div>
        <div className="text-xl lg:w-[90%] leading-snug">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
          impedit?
        </div>
        <Link
          to="/contactForm"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <div className="lg:px-10 px-5 py-5 lg:text-xl font-semibold border-2 flex justify-center items-center text-[#E48F45] cursor-pointer">
            <Link to="/contact" id="shine">
              Get in touch
            </Link>
            {/* <FaArrowRight size={20} className="text-[#E48F45]" /> */}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ARVRMainPage;
// Get proposal
