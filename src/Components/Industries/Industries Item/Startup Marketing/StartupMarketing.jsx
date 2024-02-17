import React from "react";
import Navbar from "../../../Navbar/Navbar";
import ContactForm from "../../../Home/ContactForm/ContactForm";
import Footer from "../../../Footer/Footer";
import StartupMainContainer from "./StartupMainContainer";
import StartupSecondContainer from "./StartupSecondContainer";
import StartupThirdContainer from "./StartupThirdContainer";
import StartupFourthContainer from "./StartupFourthContainer";

function StartupMarketing() {
  return (
    <div className="w-full">
      <div className="bg-blue-800 bg-cover">
        <div className="w-full sticky top-0">
          <Navbar />
        </div>
        <StartupMainContainer />
      </div>
      <div>
        <StartupSecondContainer />
      </div>
      <div>
        <StartupThirdContainer />
      </div>
      <div>
        <StartupFourthContainer/>
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

export default StartupMarketing;
