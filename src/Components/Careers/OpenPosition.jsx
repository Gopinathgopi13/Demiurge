import React from "react";
import PositionDetails from "./PositionDetails";

function OpenPosition() {
  return (
    <div className="lg:w-[1280px] sm:flex sm:flex-col sm:justify-center items-center text-center  mx-auto my-10 px-4">
      <div className="lg:text-6xl text-4xl font-bold my-5 text-[#E48F45]">
        Explore our open positions
      </div>
      <div className="lg:w-[70%]">
        Apply to one of our open positions below, or send your resume and cover
        letter to{" "}
        <strong className="text-blue-500">
          <a href="mailto:philomenjohn@demiurge.in">philomenjohn@demiurge.in</a>
        </strong>
        <div className="my-10">
          <PositionDetails />
        </div>
      </div>
    </div>
  );
}

export default OpenPosition;
