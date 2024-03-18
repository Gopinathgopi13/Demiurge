import React from "react";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Footer/Footer";
import ContactForm from "../../../Home/ContactForm/ContactForm";
import PRMainPage from "./PRMainPage";
import PRSecondContainer from "./PRSecondContainer";
import PRThirdContainer from "./PRThirdContainer";
import PRFourthContainer from "./PRFourthContainer";
import CTA from "./CTA";

function PR() {
  return (
    <div className="w-full">
      <div className="w-full sticky top-0 bg-[#0c2d57] shadow-md z-50">
        <Navbar />
      </div>
      <div className="bg-[#0c2d57]">
        <PRMainPage />
      </div>
      <div className="my-10">
        <PRSecondContainer />
      </div>
      {/* <div className="my-10 ">
      </div> */}
      <div className="bg-[#0c2d57] text-white">
        <PRThirdContainer />
        {/* <PRFourthContainer /> */}
      </div>

      {/* Call To action */}
      <div className="bg-[#0c2d57]">
        {/* <CTA/> */}
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <Footer />
      </div>
    </div>
  );
}

export default PR;
