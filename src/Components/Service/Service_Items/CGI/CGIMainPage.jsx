import React from "react";
import { Link } from "react-router-dom";

function CGIMainPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-4  h-[100vh] text-white flex flex-col justify-center items-start gap-y-14">
      <div className="md:text-5xl text-3xl md:w-[90%] font-extrabold leading-snug primaryColor">
        Experience the visual revolution. Elevate your brand's storytelling with
        CGI!
      </div>
      <div className=" text-xl md:w-[60%] leading-snug">
        Unlock the power of CGI to revolutionize your brand's storytelling.
        Elevate your visuals and captivate your audience like never before.
      </div>
      <Link to="/contactForm">
        <div className="lg:px-10 px-10 py-3 lg:text-lg font-semibold border-2 flex justify-center items-center primaryColor cursor-pointer">
          <Link to="/contact" id="shine">
            Get in touch
          </Link>
          {/* <FaArrowRight size={20} className="primaryColor" /> */}
        </div>
      </Link>
    </div>
  );
}

export default CGIMainPage;
