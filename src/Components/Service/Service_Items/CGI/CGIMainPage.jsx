import React from "react";
import { Link } from "react-router-dom";

function CGIMainPage() {
  return (
    <div className="lg:w-[1280px] mx-auto px-4 lg:pb-20 h-[90vh] text-white flex flex-col justify-center items-center gap-y-14">
      <div className="text-lg">CGI</div>
      <div className="md:text-6xl text-3xl lg:w-[90%] text-center font-extrabold leading-snug">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>
      <div className=" text-4xl lg:w-[90%] text-center  leading-snug">
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
