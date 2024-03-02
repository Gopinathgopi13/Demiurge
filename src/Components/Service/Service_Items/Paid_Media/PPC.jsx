import React from "react";
import PPCMainPage from "./PPCMainPage";
import PPCSecondContainer from "./PPCSecondContainer";
import PPCThirdContainer from "./PPCThirdContainer";
import Navbar from "../../../Navbar/Navbar";
import ContactForm from "../../../Home/ContactForm/ContactForm";
import Footer from "../../../Footer/Footer";
import CTA from "./CTA";

function PPC() {
  return (
    <div className="w-full">
      <div className="w-full sticky top-0 bg-[#0c2d57] shadow-md z-50">
        <Navbar />
      </div>
      <div className="bg-[#0c2d57] ">
        <PPCMainPage />
      </div>
      <div className="my-20">
        <PPCSecondContainer />
      </div>
      <div className="my-20">
        <PPCThirdContainer />
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
