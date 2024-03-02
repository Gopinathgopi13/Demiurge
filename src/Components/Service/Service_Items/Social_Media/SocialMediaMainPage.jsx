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
        <div className="lg:text-5xl text-3xl lg:w-[60%] font-extrabold primaryColor lg:text-start text-center">
          Unlock Your Brand's Social Potential with Us!
        </div>
        <div className="lg:w-[50%] lg:text-xl text-justify">
          Discover how we can amplify your brand's impact through social media
          expertise.
        </div>
        <Link
          to="/contactForm"
          // data-aos="fade-right"
          // data-aos-duration="1000"
          // data-aos-delay="500"
        >
          <div className="lg:px-10 px-10 lg:py-5 py-3 lg:text-xl font-semibold border-2 flex justify-center items-center primaryColor cursor-pointer">
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

export default SocialMediaMainPage;

{
  /* <Link to="/contact"></Link> */
}
