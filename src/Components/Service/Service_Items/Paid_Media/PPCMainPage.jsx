import React from "react";
import { Link } from "react-router-dom";
import Performance_marketing_Home_Page from "../../../../../public/static/Performance_marketing_Home_Page_2.png";
function PPCMainPage() {
  return (
    <div className="w-full">
      <div
        className="lg:w-[1280px] mx-auto px-4 md:pb-20 h-[90vh] text-white flex flex-col lg:pt-40 lg:items-start items-center gap-y-10 relative"
        // data-aos="fade-down"
        // data-aos-duration="1000"
        // data-aos-once="true"
      >
        <div className="lg:absolute right-0 bottom-40">
          <img src={Performance_marketing_Home_Page} alt="" />
        </div>
        <div className="text-lg">Performance Marketing</div>
        <div className="md:text-6xl text-3xl lg:w-[60%] font-extrabold leading-snug primaryColor">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
          impedit?
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
