import React from "react";
// import ClientLogo from "./ClientLogo";
// import clientLogo from "../../../Utilities/ClientLogos";
import cl1 from "../../../assets/client/cl1.webp";
import cl2 from "../../../assets/client/cl2.webp";
import cl3 from "../../../assets/client/cl3.webp";
import cl4 from "../../../assets/client/cl4.webp";
import cl5 from "../../../assets/client/cl5.webp";
import cl6 from "../../../assets/client/cl6.webp";
import cl7 from "../../../assets/client/cl7.webp";
import cl8 from "../../../assets/client/cl8.webp";
import cl9 from "../../../assets/client/cl9.webp";
import cl10 from "../../../assets/client/cl10.webp";
import cl11 from "../../../assets/client/cl11.webp";
import cl12 from "../../../assets/client/cl12.webp";
import Marquee from "react-fast-marquee";
// import cl13 from "../../../assets/client/cl13.webp";
function Clients() {
  return (
    <div className="lg:w-[1280px] mx-auto">
      <div className="lg:text-6xl text-3xl font-bold primaryColor text-center">
        Our Clients
      </div>
      <Marquee>
        <div>
          <img src={cl1} alt="" />
        </div>
        <div>
          <img src={cl2} alt="" />
        </div>
        <div>
          <img src={cl3} alt="" />
        </div>
        <div>
          <img src={cl4} alt="" />
        </div>
        <div>
          <img src={cl5} alt="" />
        </div>
        <div>
          <img src={cl6} alt="" />
        </div>
        <div>
          <img src={cl7} alt="" />
        </div>
        <div>
          <img src={cl8} alt="" />
        </div>
        <div>
          <img src={cl9} alt="" />
        </div>
        <div>
          <img src={cl10} alt="" />
        </div>
        <div>
          <img src={cl11} alt="" />
        </div>
        <div>
          <img src={cl12} alt="" />
        </div>
      </Marquee>
      <Marquee direction="right">
        <div>
          <img src={cl12} alt="" />
        </div>
        <div>
          <img src={cl11} alt="" />
        </div>
        <div>
          <img src={cl10} alt="" />
        </div>
        <div>
          <img src={cl9} alt="" />
        </div>
        <div>
          <img src={cl8} alt="" />
        </div>
        <div>
          <img src={cl7} alt="" />
        </div>
        <div>
          <img src={cl6} alt="" />
        </div>
        <div>
          <img src={cl5} alt="" />
        </div>
        <div>
          <img src={cl4} alt="" />
        </div>
        <div>
          <img src={cl3} alt="" />
        </div>
        <div>
          <img src={cl2} alt="" />
        </div>
        <div>
          <img src={cl1} alt="" />
        </div>
      </Marquee>
    </div>
  );
}

export default Clients;
