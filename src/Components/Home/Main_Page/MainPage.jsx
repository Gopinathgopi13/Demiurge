import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Home.css";
import ServiceAmountDetails from "../ServiceAmountDetails";
import Type from "./Type";

function MainPage() {
  return (
    <div className="w-full">
      <div className="max-w-[1280px] mx-auto px-4 h-[100vh] text-white flex flex-col justify-center items-start gap-y-14">
        <div className="lg:text-6xl text-3xl lg:w-[70%] font-extrabold leading-snug primaryColor">
          <span className=" mr-3">Increase</span>
          <span className="inline-block text-white">
            <Type />
          </span>
          <div className="">
            without lifting a finger
          </div>
        </div>
        <button className="lg:px-10 px-5 py-3 lg:text-xl font-semibold border-2 hover:border-[#ff8400] flex items-center gap-4 cursor-pointer ">
          <div id="shine">Unlock a no-cost proposal</div>
          <FaArrowRight size={20} className="primaryColor" />
        </button>
      </div>
    </div>
  );
}

export default MainPage;
