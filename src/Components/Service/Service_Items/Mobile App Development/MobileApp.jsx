import React from "react";
import Navbar from "../../../Navbar/Navbar";
import MobileMainPage from "./MobileMainPage";
import MobileSecondContainer from "./MobileSecondContainer";
import MobileThirdContainer from "./MobileThirdContainer";
import MobileFourthCOntainer from "./MobileFourthCOntainer";
import ContactForm from "../../../Home/ContactForm/ContactForm";
import Footer from "../../../Footer/Footer";
import mbl from "../../../../assets/mbl2.jpg";
import CTA from "./CTA";
import FAQ from "./FAQ";
function MobileApp() {
  return (
    <div className="w-full">
      <div className="w-full sticky top-0 bg-[#0c2d57] shadow-md z-50">
        <Navbar />
      </div>
      <div className="bg-[url('https://img.freepik.com/premium-photo/mobile-app-concept-generate-ai_98402-9595.jpg?w=1380')] bg-cover bg-center">
        <MobileMainPage />
      </div>
      <div>
        <MobileSecondContainer />
      </div>
      <div className="py-20 bg-[#0c2d57]">
        <MobileThirdContainer />
      </div>
      <div>
        <FAQ />
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

export default MobileApp;
