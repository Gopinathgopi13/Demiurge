import React from "react";
import { Link } from "react-router-dom";
import SEO_Home_Page from "../../../../../public/static/SEO_Home_Page.png";
import { FaArrowRight } from "react-icons/fa";
function SEOMainPage() {
  return (
    <div className="w-full">
      <div className="max-w-[1280px] mx-auto px-4 lg:pb-20 h-[100vh] text-white flex flex-col lg:pt-40 md:items-start justify-center items-center gap-y-10 ">
        {/* <div className="text-lg">SEO</div> */}
        <div className="md:text-5xl text-[6vw] md:w-[60%] font-extrabold leading-snug primaryColor">
          SEO isn't just a tool—it's your secret weapon
        </div>
        <div className="md:w-[50%] lg:text-xl text-justify">
          Your roadmap to online visibility, ensuring your brand stands out and
          attracts the right audience.
        </div>
        <Link to="/contactForm">
          <div className="lg:px-10 px-5  lg:py-5 py-3 lg:text-xl font-semibold border-2 flex justify-center items-center primaryColor cursor-pointer">
            <Link to="/contact" id="shine">
              Get in touch
            </Link>
            <FaArrowRight size={20} className="primaryColor" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SEOMainPage;
