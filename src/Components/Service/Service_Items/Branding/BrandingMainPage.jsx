import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../../Common/CustomButton";

function BrandingMainPage() {
  return (
    <div className="w-full">
      <div className="max-w-[1280px] mx-auto px-4 h-[100vh] text-white flex flex-col justify-center md:items-start items-center gap-y-14">
        {/* <div className="text-lg">Branding</div> */}
        <div className="md:text-6xl text-3xl md:w-[90%] font-extrabold leading-snug primaryColor">
          Craft a digital identity for your brand that leaves a lasting mark.
        </div>
        <div className="md:w-[60%] lg:text-xl text-justify">
          Our strategic visionaries dive deep into the core of your brand,
          unraveling its essence, values, and aspirations.
        </div>
        {/* <Link to="/contactForm">
          <div className="lg:px-10 px-10 py-3 lg:text-xl font-semibold border-2 flex justify-center items-center primaryColor cursor-pointer">
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

export default BrandingMainPage;
