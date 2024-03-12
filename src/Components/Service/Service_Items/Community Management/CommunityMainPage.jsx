import React from "react";
import { Link } from "react-router-dom";

function CommunityMainPage() {
  return (
    <div className="w-full">
      <div className="max-w-[1280px] mx-auto px-4 h-[100vh] text-white flex flex-col justify-center md:items-start items-center gap-y-14">
        {/* <div className="text-lg">Community Management</div> */}
        <div className="md:text-6xl text-3xl md:w-[90%] font-extrabold leading-snug primaryColor">
          Let Us Manage Your Community with Expertise and Care.
        </div>
        <div className=" text-xl md:w-[60%] leading-snug">
          Humanizing your brand is a transformative approach that connects your
          brand with people on a personal and emotional level.
        </div>
        <Link to="/contactForm">
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
