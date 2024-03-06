import React from "react";
import "../../Industries/Industries.css";
import industries_Card_Image from '../../../assets/industries_Card_Image.jpg'
function IndustriesCard({ id, logo, name, description, path }) {
  return (
    <div
      className={`text-base rounded-tl-3xl rounded-br-3xl shadow-md transform transition duration-500 hover:bg-[#0c2c579f] group relative `}
      // data-aos="fade-left"
      // data-aos-duration="1500"
      // data-aos-once="true"
    >
      <img src={industries_Card_Image} className="w-full h-full blur-0  group-hover:blur-[2px]" alt="" />
      <div className="absolute bottom-10 px-5 text-white group-hover:drop-shadow-lg">
        <div className="font-bold text-xl primaryColor">{name}</div>
        <div>{description}</div>
      </div>
    </div>
    // </div>
  );
}

export default IndustriesCard;
