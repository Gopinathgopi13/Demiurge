import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Home.css";
import ServiceAmountDetails from "../ServiceAmountDetails";
import Type from "./Type";
import Button from "../../Button";
import { PopupButton } from "react-calendly";
import CustomButton from "../../Common/CustomButton";
function MainPage() {
  const handleEmailButtonClick = () => {
    const emailAddress = "gopinathkathirvel13@gmail.com";
    const mailtoLink = `mailto:${emailAddress}`;
    window.location.href = mailtoLink;
  };
  return (
    <div className="w-full">
      <div className="max-w-[1280px] mx-auto px-4 h-[100vh] text-white flex flex-col justify-center items-start gap-y-14">
        <div className="lg:text-6xl text-3xl lg:w-[70%] font-extrabold leading-snug primaryColor">
          <span className=" mr-3">Increase</span>
          <span className="inline-block text-white">
            <Type />
          </span>
          <div className="">without lifting a finger</div>
        </div>

        <CustomButton text="Unlock a no-cost proposal" />
      </div>
    </div>
  );
}

export default MainPage;

// import React from 'react'

// const PoButton = () => {
//   return (
//     <PopupButton
//       // className="text-[#FF8400]  px-6 py-2 hover:bg-[#FF8400] hover:text-white border-2 border-[#FF8400] hover:border-none"
//       url="https://calendly.com/philomenjohn/digital-marketing-collab"
//       rootElement={document.getElementById("root")}
//       // text="Unlock a no-cost proposal"
//     />
//   );
// };

// const CustomButton = ({ text }) => {
//   return (
//     <button
//       className="lg:px-10 px-5 py-3 lg:text-xl font-semibold border-2 hover:border-[#ff8400] flex items-center gap-4 cursor-pointer"
//       style={{
//         background:
//           "linear-gradient(to right, white 10%, #e48f45 40%, white 30%)",
//         backgroundPosition: "0",
//         WebkitBackgroundClip: "text",
//         WebkitTextFillColor: "transparent",
//         animation: "shine 3s infinite linear",
//         animationFillMode: "forwards",
//         WebkitTextSizeAdjust: "none",
//       }}
//       onClick={() => {
//         window.open(
//           "https://calendly.com/philomenjohn/digital-marketing-collab"
//         );
//       }}
//     >
//       <span id="shine">{text}</span>
//     </button>
//   );
// };
