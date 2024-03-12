import React from "react";
import { Link } from "react-router-dom";

function MobileMainPage() {
  return (
    <div className="w-full">
      <div className="max-w-[1280px] mx-auto sm:px-4 h-[100vh] px-5 text-white flex flex-col justify-center items-start gap-y-14 overflow-hidden">
        {/* <div className="text-lg">Mobile App Development</div> */}
        <div className="md:text-6xl text-3xl font-extrabold  leading-snug primaryColor">
          Unleash your business potential with our mobile app solutions
        </div>
        <div className="sm:w-[60%] text-xl leading-snug">
          Ready to take your brand worldwide? Our bespoke mobile app designs are
          your ticket. Start your global journey today!
        </div>
        <Link to="/contactForm">
          <div className="lg:px-10 px-10 py-5 lg:text-xl font-semibold border-2 flex justify-center items-center primaryColor cursor-pointer">
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

export default MobileMainPage;
