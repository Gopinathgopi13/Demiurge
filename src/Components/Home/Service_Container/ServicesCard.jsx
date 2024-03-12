import React from "react";
import socialMedia from "../../../assets/SVG/Social_media.svg";
import { Link, Outlet } from "react-router-dom";
function ServicesCard({ id, logo, name, description, path }) {
  console.log(path);
  return (
    <Link to={path}>
      <div
        className="text-base p-6 rounded-tl-3xl rounded-br-3xl shadow-md transform transition duration-500 hover:bg-[#0c2c579f] group"
        data-aos="fade-left"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        <div className=" flex mb-5 items-center gap-2">
          <img src={logo} className="h-12" alt="" />
          <div className="text-xl font-semibold primaryColor">{name}</div>
        </div>
        <div className="text-gray-600 font-normal group-hover:text-white line-clamp-5">{description}</div>
      </div>
    </Link>
  );
}

export default ServicesCard;
