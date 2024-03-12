import React from "react";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Footer/Footer";
import ContactForm from "../../../Home/ContactForm/ContactForm";
import ARVRMainPage from "./ARVRMainPage";
import ARVRSecondContainer from "./ARVRSecondContainer";
import ARThirdContainer from "./ARThirdContainer";
import ARVRi from "../../../../assets/AR-VR.jpg";
import FAQ from "./FAQ";
import CTA from "./CTA";
function ARVR() {
  return (
    <div className="w-full">
      <div className="w-full sticky top-0 bg-[#0c2d57] shadow-md z-50">
        <Navbar />
      </div>
      <div className="bg-[#0c2d57]">
        <ARVRMainPage />
      </div>
      <div className="my-20">
        <ARVRSecondContainer />
      </div>
      <div className="bg-[#0c2d57] text-white">
        <ARThirdContainer />
      </div>
      <div>
        <FAQ />
      </div>
      <div className="bg-[#0c2d57]">
        <CTA/>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default ARVR;
