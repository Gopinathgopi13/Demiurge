import React from "react";
import { Link } from "react-router-dom";

function ARVRMainPage() {
  return (
    <div className="w-full">
      <div
        className="max-w-[1280px] mx-auto px-4 h-[100vh] text-white flex flex-col justify-center items-start gap-y-14"
        // data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        {/* <div className="text-lg">AR/VR ADs</div> */}
        <div className="md:text-5xl text-3xl md:w-[90%] font-extrabold leading-snug primaryColor">
          Step Into the Future: Explore Our AR/VR Advertising Solutions
        </div>
        <div className="text-xl md:w-[90%] leading-snug">
          Discover immersive experiences that captivate and engage audiences in
          innovative ways, setting your brand apart in the digital landscape.
        </div>
        <Link
          to="/contactForm"
          // data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <div className="lg:px-10 px-5 py-3 lg:text-xl font-semibold border-2 flex justify-center items-center primaryColor cursor-pointer">
            <Link to="/contact" id="shine">
              Get in touch
            </Link>
            {/* <FaArrowRight size={20} className="primaryColor" /> */}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ARVRMainPage;
// Get proposal
