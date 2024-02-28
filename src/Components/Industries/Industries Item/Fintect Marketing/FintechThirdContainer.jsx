import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
function FintechThirdContainer() {
  return (
    <div className="lg:w-[1280px] mx-auto px-4 py-16 space-y-10 grid md:grid-cols-2 items-center text-white">
      <div className="space-y-16">
        <div className="md:text-6xl text-3xl">Leverage Our Specialist Fintech Agency To:</div>
        <div>
          <Link to="contactForm">
            <div className="flex gap-5 items-center hover:text-blue-800">
              <div className="text-3xl font-medium">Get a Proposal</div>
              <div className="bg-blue-800 rounded-full p-3 text-white">
                <FaArrowRightLong />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-20">
          <div className="flex items-center gap-5">
            <div className="text-5xl text-[#e48f45]">&#x2605;</div>
            <div className="text-xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing.
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="text-5xl text-[#e48f45]">&#x2605;</div>
            <div className="text-xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing.
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="text-5xl text-[#e48f45]">&#x2605;</div>
            <div className="text-xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FintechThirdContainer;
