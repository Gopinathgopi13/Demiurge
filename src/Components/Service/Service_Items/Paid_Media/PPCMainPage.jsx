import React from "react";
import { Link } from "react-router-dom";
import Performance_marketing_Home_Page from "../../../../../public/static/Performance_marketing_Home_Page_2.png";
function PPCMainPage() {
  return (
    <div className="w-full">
      <div
        className="max-w-[1280px] mx-auto px-4 h-[100vh] text-white flex flex-col lg:pt-40 md:items-start justify-center items-center gap-y-10 relative"
        // data-aos="fade-down"
        // data-aos-duration="1000"
        // data-aos-once="true"
      >
        {/* <div className="text-lg">Performance Marketing</div> */}
        <div className="md:text-6xl text-3xl md:w-[70%] font-extrabold leading-snug primaryColor">
          Power Up Your Goals with Performance Marketing
        </div>
        <div className="md:w-[50%] lg:text-xl text-justify">
          The strategic engine that propels your brand forward, delivering
          measurable results and maximizing your online impact.
        </div>
        <Link
          to="/contactForm"
          // data-aos="fade-right"
          // data-aos-duration="1000"
          // data-aos-delay="500"
        >
          <div className="lg:px-10 px-10 py-5 lg:text-xl font-semibold border-2 flex justify-center items-center primaryColor cursor-pointer">
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

export default PPCMainPage;
