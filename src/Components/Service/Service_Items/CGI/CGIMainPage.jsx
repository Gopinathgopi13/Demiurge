import React from "react";
import { Link } from "react-router-dom";

function CGIMainPage() {
  return (
    <div
      className="lg:w-[1280px] mx-auto px-4 lg:pb-20 h-[90vh] text-white flex flex-col justify-center items-start gap-y-14"
      data-aos="fade-down"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      <div className="md:text-6xl text-3xl lg:w-[90%] font-extrabold leading-snug primaryColor">
        Experience the visual revolution. Elevate your brand's storytelling with
        CGI!
      </div>
      <div className=" text-xl lg:w-[60%] leading-snug">
        Unlock the power of CGI to revolutionize your brand's storytelling.
        Elevate your visuals and captivate your audience like never before.
      </div>
      <Link to="/contactForm">
        <div className="px-16 py-5 text-xl bg-blue-700 flex items-center gap-4 cursor-pointer">
          <Link to="/contact">Get proposal</Link>
        </div>
      </Link>
    </div>
  );
}

export default CGIMainPage;
