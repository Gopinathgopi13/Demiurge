import React from "react";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Footer/Footer";
import ContactForm from "../../../Home/ContactForm/ContactForm";
import CryptoMainContainer from "./CryptoMainContainer";
import CryptoSecondContainer from "./CryptoSecondContainer";
import CryptoThirdContainer from "./CryptoThirdContainer";
import CryptoFourthContainer from "./CryptoFourthContainer";
import CryptoFifthContainer from "./CryptoFifthContainer";

function CryptoMarketing() {
  return (
    <div className="w-full">
      <div className="w-full sticky top-0 bg-[#0c2d57] z-50 shadow-md">
        <Navbar />
      </div>
      <div className="bg-[#0c2d57]">
        <CryptoMainContainer />
      </div>
      <div className="my-20">
        <CryptoSecondContainer />
      </div>
      <div className="bg-[#0c2d57]">
        <CryptoThirdContainer />
      </div>
      <div>
        <CryptoFourthContainer />
      </div>
      <div>
        <CryptoFifthContainer />
      </div>
      <div>
        <ContactForm />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default CryptoMarketing;
