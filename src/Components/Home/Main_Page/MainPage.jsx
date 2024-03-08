import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Home.css";
import ServiceAmountDetails from "../ServiceAmountDetails";

function MainPage() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <div className="w-full">
      <div className="max-w-[1280px] mx-auto px-4 h-[90vh] text-white flex flex-col justify-center items-center gap-y-14">
        <div
          className="lg:text-6xl text-3xl lg:w-[70%] text-center font-extrabold leading-snug primaryColor"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <span className="mr-[10px]">Increase</span>
          <span
            id="animated-text"
            className=" lg:w-[220px] w-[120px] text-center lg:h-[60px] h-[40px] z-10"
          >
            <div className="line">sales</div>
            <div className="line ">Leads</div>
            <div className="line ">ROI</div>
          </span>
          <span className="lg:ml-[220px] ml-[200px]">
            <br /> without lifting a finger
          </span>
        </div>
        <ServiceAmountDetails></ServiceAmountDetails>
        {/* <button
          className="lg:px-16 px-10 py-5 lg:text-xl font-semibold border-2 hover:border-[#ff8400] flex items-center gap-4 cursor-pointer "
          onClick={togglePopup}
        >
          <div id="shine">Unlock a no-cost proposal</div>
          <FaArrowRight size={20} className="primaryColor" />
        </button> */}
        {/* {showPopup && <ServiceAmountDetails onClose={togglePopup} />} */}
      </div>
    </div>
  );
}

export default MainPage;
