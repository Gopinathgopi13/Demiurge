import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import SocialMedia_Home_Page from "../../../../../public/static/SocialMedia_Home_Page.png";

function SocialMediaMainPage() {
  return (
    <div className="w-full">
      <div
        className="lg:w-[1280px] mx-auto px-4 lg:pb-20 h-[90vh] text-white flex flex-col lg:pt-40 lg:items-start items-center gap-y-10 relative"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <div className="lg:absolute right-0  bottom-40">
          <img src={SocialMedia_Home_Page} alt="" />
        </div>
        {/* <div className="text-lg">Social Media</div> */}
        <div className="lg:text-5xl text-3xl lg:w-[60%] font-extrabold text-[#E48F45] lg:text-start text-center">
          Experience the power of data-driven social media marketing that gets
          results.
        </div>
        <div className="lg:w-[50%] lg:text-xl text-justify">
          A strategic social media approach is your key to connecting with the
          right people and achieving lasting success.
        </div>
        <Link
          to="/contactForm"
          // data-aos="fade-right"
          // data-aos-duration="1000"
          // data-aos-delay="500"
        >
          <div className="lg:px-10 px-10 lg:py-5 py-3 lg:text-xl font-semibold border-2 flex justify-center items-center text-[#E48F45] cursor-pointer">
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

export default SocialMediaMainPage;

{
  /* <Link to="/contact"></Link> */
}
