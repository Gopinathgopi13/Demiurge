import React from "react";
import { Link } from "react-router-dom";

function MobileMainPage() {
  return (
    <div className="w-full">
      <div className="lg:w-[1280px] mx-auto sm:px-4 lg:pb-20 h-[90vh] px-5 text-white flex flex-col justify-center sm:items-end gap-y-14">
        <div className="text-lg">Mobile App Design</div>
        <div className="md:text-6xl text-3xl font-extrabold sm:text-right leading-snug">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
        <div className="sm:w-[60%] text-xl sm:text-right leading-snug">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum
          dolor sit amet consectetur adipisicing elit.
        </div>
        <Link to="/contactForm">
          <div className="px-16 py-5 text-xl bg-blue-700 flex items-center gap-4 cursor-pointer">
            <Link to="/contact">Get proposal</Link>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MobileMainPage;
