import React from "react";
import { Link } from "react-router-dom";

function WebMainPage() {
  return (
    <div className="w-full">
      <div className="max-w-[1280px] mx-auto px-4 h-[100vh] text-white flex flex-col justify-center md:items-start items-center gap-y-14">
        {/* <div className="text-lg">Website Development</div> */}
        <div className="md:text-5xl text-3xl md:w-[90%] font-extrabold leading-snug primaryColor">
          Tailored web development solutions that translate your requirements
          into impactful solutions.
        </div>
        <div className="md:w-[70%] lg:text-xl text-justify">
          By understanding your requirements in depth, we craft solutions that
          not only address your immediate needs but also deliver long-lasting
          impact.
        </div>
        <Link to="/contactForm">
          <div className="lg:px-10 px-10 py-3 lg:text-xl font-semibold border-2 flex justify-center items-center primaryColor cursor-pointer">
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

export default WebMainPage;
