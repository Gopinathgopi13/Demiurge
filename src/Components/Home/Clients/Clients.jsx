import React from "react";

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
import cl13 from "../../../assets/client/cl13.webp";
import cl14 from "../../../assets/client/cl14.webp";
import cl15 from "../../../assets/client/cl15.webp";
import cl16 from "../../../assets/client/cl16.webp";
import cl17 from "../../../assets/client/cl17.webp";
// import cl18 from "../../../assets/client/cl18.webp";
import cl19 from "../../../assets/client/cl19.webp";
import cl20 from "../../../assets/client/cl20.webp";
import cl21 from "../../../assets/client/cl21.webp";
import cl22 from "../../../assets/client/cl22.webp";
import cl23 from "../../../assets/client/cl23.webp";
import cl24 from "../../../assets/client/cl24.webp";
import cl25 from "../../../assets/client/cl25.webp";
import cl26 from "../../../assets/client/cl26.webp";
import cl27 from "../../../assets/client/cl27.webp";
import cl28 from "../../../assets/client/cl28.webp";
import cl29 from "../../../assets/client/cl29.webp";
import cl30 from "../../../assets/client/cl30.webp";
import cl31 from "../../../assets/client/cl31.webp";
import cl32 from "../../../assets/client/cl32.webp";
import cl33 from "../../../assets/client/cl33.webp";
import cl34 from "../../../assets/client/cl34.webp";
import cl35 from "../../../assets/client/cl35.webp";
import cl36 from "../../../assets/client/cl36.webp";
import cl37 from "../../../assets/client/cl37.webp";
import cl38 from "../../../assets/client/cl38.webp";
import Marquee from "react-fast-marquee";
function Clients() {
  return (
    <div className="max-w-[1280px] mx-auto space-y-5">
      <div className="lg:text-4xl text-3xl font-bold primaryColor text-center">
        Our Clients
      </div>
      <Marquee>
        {[
          cl1,
          cl2,
          cl3,
          cl4,
          cl5,
          cl6,
          cl7,
          cl8,
          cl9,
          cl10,
          cl11,
          cl12,
          cl13,
          cl14,
          cl15,
          cl16,
          cl17,
          cl19,
        ].map((cl, index) => (
          <div key={index}>
            <img src={cl} className="md:h-36 h-24" alt="" />
          </div>
        ))}
      </Marquee>
      <Marquee direction="right">
        {[
          cl20,
          cl21,
          cl22,
          cl23,
          cl24,
          cl25,
          cl26,
          cl27,
          cl28,
          cl29,
          cl30,
          cl31,
          cl32,
          cl33,
          cl34,
          cl35,
          cl36,
          cl37,
          cl38,
        ].map((cl, index) => (
          <div key={index}>
            <img src={cl} className="md:h-36 h-24" alt="" />
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default Clients;
