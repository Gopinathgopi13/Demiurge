import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import SocialMedia_Home_Page from "../../../../../public/static/SocialMedia_Home_Page.png";
import CustomButton from "../../../Common/CustomButton";

function SocialMediaMainPage() {
  return (
    <div className="w-full">
      <div
        className={`max-w-[1280px] mx-auto px-4 lg:pb-20 h-[100vh] text-white flex flex-col lg:pt-40 md:items-start justify-center items-center gap-y-10`}
      >
        <div className="lg:text-5xl text-3xl md:w-[60%] font-extrabold primaryColor lg:text-start text-center">
          Unlock Your Brand's Social Potential with Us!
        </div>
        <div className="md:w-[50%] lg:text-xl text-justify">
          Discover how we can amplify your brand's impact through social media
          expertise.
        </div>
        {/* <Link to="/contactForm">
          <div className="lg:px-10 px-10 lg:py-5 py-3 lg:text-xl font-semibold border-2 flex justify-center items-center primaryColor cursor-pointer">
            <Link to="/contact" id="shine">
              Get in touch
            </Link>
           
          </div>
        </Link> */}
         <CustomButton text="Get in touch" />
      </div>
    </div>
  );
}

export default SocialMediaMainPage;

{
  /* <Link to="/contact"></Link> */
}
