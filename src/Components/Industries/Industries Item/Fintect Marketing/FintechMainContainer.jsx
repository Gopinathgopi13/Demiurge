import React from "react";
import { Link } from "react-router-dom";

function FintechMainContainer() {
  return (
    <div className="lg:w-[1280px] mx-auto px-4 lg:pb-20 h-[90vh] text-white flex flex-col justify-center items-start gap-y-14">
      <div className="text-lg">Fintech Marketing</div>
      <div className="lg:text-7xl text-4xl lg:w-[90%] font-extrabold leading-snug text-[#e48f45]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, impedit?
      </div>
      <div className="text-3xl lg:w-[90%] leading-snug">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, impedit?
      </div>
      <Link to="/contactForm">
        <div className="px-16 py-5 text-2xl border-2 text-[#e48f45] flex items-center gap-4 cursor-pointer">
          <Link to="/contact">Requwst a Fre Proposal</Link>
        </div>
      </Link>
    </div>
  );
}

export default FintechMainContainer;
