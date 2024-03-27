import React from "react";
import "../../Industries/Industries.css";
import industries_Card_Image from "../../../assets/industries_Card_Image.jpg";
function IndustriesCard({ id, logo, name, description, path }) {
  return (
    <div
      className={`text-base rounded-tl-3xl rounded-br-3xl shadow-md hover:bg-[#0c2c579f] group relative `}
    >
      <img
        src={industries_Card_Image}
        className="w-full h-full group-hover:blur-[2px]"
        alt=""
      />
      <div className="absolute group bottom-10 px-5 group-hover:drop-shadow-lg">
        <div className="font-bold group-hover:text-2xl text-xl primaryColor">{name}</div>
        <div>{description}</div>
      </div>
    </div>
    // </div>
  );
}

export default IndustriesCard;
