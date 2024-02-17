import React from "react";
import Navbar from "../../../Navbar/Navbar";
import ContactForm from "../../../Home/ContactForm/ContactForm";
import Footer from "../../../Footer/Footer";
import GamingMainContainer from "./GamingMainContainer";
import GamingSecondContainer from "./GamingSecondContainer";
import GamingThirdContainer from "./GamingThirdContainer";
import GamingFourthContainer from "./GamingFourthContainer";

function GamingMarketing() {
  return (
    <div className="w-full">
      <div className="bg-blue-800 bg-cover">
        <div className="w-full sticky top-0">
          <Navbar />
        </div>
        <GamingMainContainer />
      </div>
      <div>
        <GamingSecondContainer />
      </div>
      <div>
        <GamingThirdContainer />
      </div>
      <div>
        <GamingFourthContainer />
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

export default GamingMarketing;
