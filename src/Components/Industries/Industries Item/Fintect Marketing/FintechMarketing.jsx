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
      <div className="bg-blue-800 bg-cover">
        <div className="w-full sticky top-0">
          <Navbar />
        </div>
        <FintechMainContainer />
      </div>
      <div>
        <FintechSecondContainer />
      </div>
      <div className="border-2">
        <FintechThirdContainer />
      </div>
      <div>
        <FintechFourthContainer />
      </div>
      <div>
        <FintechFifthContainer/>
      </div>
      <div className="bg-blue-500">
        <FintechSixthContainer/>
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
