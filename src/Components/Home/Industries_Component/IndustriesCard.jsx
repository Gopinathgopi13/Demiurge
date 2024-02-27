import React from "react";
import { Link } from "react-router-dom";

function IndustriesCard({ id, logo, name, description, path }) {
  return (
    <Link to={path}>
      <div
        className="lg:w-60 text-base p-3 rounded-tl-3xl rounded-br-3xl shadow-md"
        data-aos="fade-left"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        <div className=" flex mb-5 items-center gap-2">
          <img src={logo} alt="" />
          <div className="text-xl font-semibold text-[#E48F45]">{name}</div>
        </div>
        <div className="text-gray-500 font-normal">{description}</div>
      </div>
    </Link>
  );
}

export default IndustriesCard;
