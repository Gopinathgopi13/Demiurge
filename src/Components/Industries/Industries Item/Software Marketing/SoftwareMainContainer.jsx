import React from "react";
import { Link } from "react-router-dom";

function SoftwareMainContainer() {
  return (
    <div className="lg:w-[1280px] mx-auto px-4 lg:pb-20 h-[90vh] text-white flex flex-col justify-center items-start gap-y-14">
      <div className="text-lg">Software Marketing</div>
      <div className="lg:text-7xl text-4xl lg:w-[90%] font-extrabold leading-snug text-[#e48f45]">
        Lorem ipsum dolor sit amet elit. Illo, impedit?
      </div>
      <div className="text-3xl lg:w-[90%] leading-snug">
        Discover how demiurge can take your software company from obscurity to
        global reach.
      </div>
      <Link to="/contactForm">
        <div className="px-16 py-5 text-2xl bg-blue-700 flex items-center gap-4 cursor-pointer">
          <Link to="/contact">Start now</Link>
        </div>
      </Link>
    </div>
  );
}

export default SoftwareMainContainer;
