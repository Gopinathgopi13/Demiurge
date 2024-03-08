import React from "react";
import { Link } from "react-router-dom";

function LeadMainPage() {
  return (
    <div className="w-full">
      <div
        className="max-w-[1280px] mx-auto px-4 h-[100vh] text-white flex flex-col justify-center items-start gap-y-14"
        // data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <div className="text-lg">Lead Generation</div>
        <div className="md:text-6xl text-3xl md:w-[90%] font-extrabold leading-snug primaryColor">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
          impedit?
        </div>
        <div className="text-3xl md:w-[90%] leading-snug">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
          impedit?
        </div>
        <Link
          to="/contactForm"
          // data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="500"
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

export default LeadMainPage;
