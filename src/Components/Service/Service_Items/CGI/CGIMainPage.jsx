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
      <div className="text-lg">CGI</div>
      <div className="md:text-6xl text-3xl lg:w-[90%] font-extrabold leading-snug text-[#e48f45]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>
      <div className=" text-4xl lg:w-[90%]  leading-snug">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, impedit?
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
