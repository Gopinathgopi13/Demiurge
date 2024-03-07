import React from "react";
import { Link } from "react-router-dom";

function CommunityMainPage() {
  return (
    <div className="w-full">
      <div
        className="lg:w-[1280px] mx-auto px-4 lg:pb-20 h-[90vh] text-white flex flex-col justify-center items-start gap-y-14"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        {/* <div className="text-lg">Community Management</div> */}
        <div className="md:text-6xl text-3xl lg:w-[90%] font-extrabold leading-snug primaryColor">
          Let Us Manage Your Community with Expertise and Care.
        </div>
        <div className=" text-xl lg:w-[60%] leading-snug">
          Humanizing your brand is a transformative approach that connects your
          brand with people on a personal and emotional level.
        </div>
        <Link
          to="/contactForm"
          data-aos="fade-right"
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

export default CommunityMainPage;
