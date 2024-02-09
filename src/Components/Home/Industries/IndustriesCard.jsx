import React from "react";

function IndustriesCard({ id, logo, name, description }) {
  return (
    <div className="w-60 text-base">
      <div className=" flex mb-5 items-center gap-2">
        <img src={logo} alt="" />
        <div className="text-xl font-semibold">{name}</div>
      </div>
      <div className="text-gray-500 font-normal">{description}</div>
    </div>
  );
}

export default IndustriesCard;
