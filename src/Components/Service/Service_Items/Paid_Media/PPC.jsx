import React from "react";
import PPCMainPage from "./PPCMainPage";
import PPCSecondContainer from "./PPCSecondContainer";
import PPCThirdContainer from "./PPCThirdContainer";
import Navbar from "../../../Navbar/Navbar";
import ContactForm from "../../../Home/ContactForm/ContactForm";
import Footer from "../../../Footer/Footer";
import CTA from "./CTA";
import PPCFourthContainer from "./PPCFourthContainer";
import Performance_Marketing_Home_Page from "../../../../assets/Performance_Marketing_Home_Page.jpg";
function PPC() {
  return (
    <div className="w-full">
      <div className="w-full sticky bg-[#0c2d57] top-0 shadow-md z-50">
        <Navbar />
      </div>
      <div className="bg-[url('https://img.freepik.com/free-photo/3d-rendering-arrow-hitting-target_23-2151266523.jpg?t=st=1711450104~exp=1711453704~hmac=23821aef02a89687bc3949c1231835f32603b1bda552a2966d613b732fed1b01&w=1060')] bg-cover bg-center">
        <PPCMainPage />
      </div>
      <div className="my-10">
        <PPCSecondContainer />
      </div>
      <div className="my-10 bg-[#0c2d57]">
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
