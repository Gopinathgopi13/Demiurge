import React from "react";
import Navbar from "../../../Navbar/Navbar";
import ContactForm from "../../../Home/ContactForm/ContactForm";
import Footer from "../../../Footer/Footer";
import FintechMainContainer from "./FintechMainContainer";
import FintechSecondContainer from "./FintechSecondContainer";
import FintechThirdContainer from "./FintechThirdContainer";
import FintechFourthContainer from "./FintechFourthContainer";
import FintechFifthContainer from "./FintechFifthContainer";
import FintechSixthContainer from "./FintechSixthContainer";

function FintechMarketing() {
  return (
    <div className="w-full">
      <div className="w-full sticky top-0 bg-[#0c2d57] z-50 shadow-md">
        <Navbar />
      </div>
      <div className="bg-[#0c2d57]">
        <FintechMainContainer />
      </div>
      <div>
        <FintechSecondContainer />
      </div>
      <div className="bg-[#0c2d57] py-10">
        <FintechThirdContainer />
      </div>
      <div>
        <FintechFourthContainer />
      </div>
      <div>
        <FintechFifthContainer />
      </div>
      <div>
        <FintechSixthContainer />
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

export default FintechMarketing;
