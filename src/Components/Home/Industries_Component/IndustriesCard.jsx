import React from "react";

function IndustriesCard({ id, logo, name, description, path }) {
  return (
      <div
        className="lg:w-96 text-base p-3 rounded-tl-3xl rounded-br-3xl shadow-md transform transition duration-500 hover:bg-[#0c2c579f] group"
        data-aos="fade-left"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        <div className=" flex mb-5 items-center gap-2">
          <img src={logo} alt="" />
          <div className="text-xl font-semibold text-[#E48F45]">{name}</div>
        </div>
        <div className="text-gray-500 font-normal  group-hover:text-white line-clamp-5">
          {description}
        </div>
      </div>
  );
}

export default IndustriesCard;
