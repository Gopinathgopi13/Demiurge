import React from "react";
import { Link } from "react-router-dom";
import PR_Home_Page from "../../../../../public/static/PR_Home_Page.png";
function PRMainPage() {
  return (
    <div className="w-full">
      <div className="max-w-[1280px] mx-auto px-4 lg:pb-20 h-[100vh] text-white flex flex-col lg:pt-40 md:items-start justify-center items-center gap-y-10 ">
        {/* <div className="text-lg">PR</div> */}
        <div className="md:text-6xl text-3xl md:w-[70%] font-extrabold leading-snug primaryColor">
          Amplify Your Influence with Dynamic PR Strategies.
        </div>
        <div className="md:w-[50%] lg:text-xl text-justify">
          Position your brand for recognition and reputation growth with our
          strategic public relations tactics.
        </div>
        <Link to="/contactForm">
          <div className="md:px-10 px-10 py-5 lg:text-xl font-semibold border-2 flex justify-center items-center primaryColor cursor-pointer">
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

export default PRMainPage;
