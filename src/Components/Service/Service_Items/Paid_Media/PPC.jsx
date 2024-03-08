import React from "react";
import PPCMainPage from "./PPCMainPage";
import PPCSecondContainer from "./PPCSecondContainer";
import PPCThirdContainer from "./PPCThirdContainer";
import Navbar from "../../../Navbar/Navbar";
import ContactForm from "../../../Home/ContactForm/ContactForm";
import Footer from "../../../Footer/Footer";
import CTA from "./CTA";
import PPCFourthContainer from "./PPCFourthContainer";
import Performance_Marketing_Home_Page from "../../../../assets/Performance_Marketing_Home_Page.jpg"
function PPC() {
  return (
    <div className="w-full">
      <div className="w-full fixed top-0 shadow-md z-50">
        <Navbar />
      </div>
      <div
        className="bg-cover bg-right"
        style={{ backgroundImage: `url(${Performance_Marketing_Home_Page})` }}
      >
        <PPCMainPage />
      </div>
      <div className="my-20">
        <PPCSecondContainer />
      </div>
      <div className="my-20 bg-[#0c2d57]">
        <PPCThirdContainer />
      </div>
      <div>
        <PPCFourthContainer />
      </div>
      <div className="bg-[#0c2d57]">
        <CTA />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default PPC;
