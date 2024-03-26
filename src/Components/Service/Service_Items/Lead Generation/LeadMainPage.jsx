import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../../Common/CustomButton";

function LeadMainPage() {
  return (
    <div className="w-full">
      <div className="max-w-[1280px] mx-auto px-4 h-[100vh] text-white flex flex-col justify-center items-start gap-y-14">
        {/* <div className="text-lg">Lead Generation</div> */}
        <div className="md:text-5xl text-3xl md:w-[90%] font-extrabold leading-snug primaryColor">
          Embrace the Future: Supercharge Lead Generation with AR/VR Experiences
        </div>
        <div className="text-3xl md:w-[90%] leading-snug">
          Immerse your audience in captivating interactive campaigns for
          unparalleled engagement and conversion.
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

export default LeadMainPage;
