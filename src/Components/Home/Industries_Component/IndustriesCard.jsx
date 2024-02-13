import React from "react";

function IndustriesCard({ id, logo, name, description }) {
  return (
    <div className="lg:w-60 text-base p-3 rounded-tl-3xl rounded-br-3xl transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30 hover:bg-gradient-to-r from-blue-400 via-violet-300 to-violet-400">
      <div className=" flex mb-5 items-center gap-2">
        <img src={logo} alt="" />
        <div className="text-xl font-semibold">{name}</div>
      </div>
      <div className="text-gray-500 font-normal">{description}</div>
    </div>
  );
}

export default IndustriesCard;
