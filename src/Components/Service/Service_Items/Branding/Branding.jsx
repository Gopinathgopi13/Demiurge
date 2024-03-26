import React from "react";
import Navbar from "../../../Navbar/Navbar";
import ContactForm from "../../../Home/ContactForm/ContactForm";
import Footer from "../../../Footer/Footer";
import BrandingMainPage from "./BrandingMainPage";
import BrandingSecondContainer from "./BrandingSecondContainer";
import BrandingThirdContainer from "./BrandingThirdContainer";
import BrandingFourthContainer from "./BrandingFourthContainer";
import CTA from "./CTA";

function Branding() {
  return (
    <div className="w-full">
      <div className="w-full sticky top-0  bg-[#0c2d57] shadow-md z-50">
        <Navbar />
      </div>
      <div 
      className="bg-[url('https://img.freepik.com/premium-photo/graphic-designer-working-tablet-pc-ai_622301-6279.jpg?w=1380')] bg-cover bg-center"
      >
        <BrandingMainPage />
      </div>
      <div className="my-10">
        <BrandingSecondContainer />
      </div>
      <div className="bg-[#0c2d57]">
        <BrandingThirdContainer />
      </div>
      <div>
        <BrandingFourthContainer />
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

export default Branding;
