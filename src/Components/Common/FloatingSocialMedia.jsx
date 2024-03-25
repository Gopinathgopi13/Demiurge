import React from "react";
// import "./Home.css";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const FloatingSocialMedia = () => {
  return (
    <div className="">
      <div className="wrapper">
        <a
          href="https://api.whatsapp.com/send?phone=9627396283"
          target="_blank"
        >
          <i className="fa fa-whatsapp">
            <FaWhatsapp size={25} />
          </i>
        </a>
        <a
          href="https://www.instagram.com/demiurge.designs?igsh=bTBydDV4enE3a2N4"
          target="_blank"
        >
          <i className="fa fa-phone">
            <FaInstagram size={25} />
          </i>
        </a>
      </div>
    </div>
  );
};

export default FloatingSocialMedia;
