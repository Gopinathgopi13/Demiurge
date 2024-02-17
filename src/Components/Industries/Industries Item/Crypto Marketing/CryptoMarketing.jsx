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
    <div className="w-full space-y-20">
      <div className="bg-blue-600 bg-cover">
        <div className="w-full sticky top-0">
          <Navbar />
        </div>
        <CryptoMainContainer />
      </div>
      <div>
        <CryptoSecondContainer />
      </div>
      <div>
        <CryptoThirdContainer />
      </div>
      <div>
        <CryptoFourthContainer />
      </div>
      <div className="bg-blue-400">
        <CryptoFifthContainer/>
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
