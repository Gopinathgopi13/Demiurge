import React from "react";
import socialMedia from "../../../assets/SVG/Social_media.svg";
import { Link, Outlet } from "react-router-dom";
function ServicesCard({ id, logo, name, description, path }) {
  console.log(path);
  return (
    <Link to={path}>
      <div
        className=" lg:w-96 text-base p-6 rounded-tl-3xl rounded-br-3xl hover:text-black transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30 hover:bg-gradient-to-r from-blue-600 to-violet-600"
        data-aos="fade-left"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        <div className=" flex mb-5 items-center gap-2">
          <img src={logo} alt="" />
          <div className="text-xl font-semibold">{name}</div>
        </div>
        <div className="text-gray-600 font-normal">{description}</div>
      </div>
    </Link>
  );
}

export default ServicesCard;
