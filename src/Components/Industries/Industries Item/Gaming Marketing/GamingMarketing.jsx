import React from "react";
import Navbar from "../../../Navbar/Navbar";
import ContactForm from "../../../Home/ContactForm/ContactForm";
import Footer from "../../../Footer/Footer";
import GamingMainContainer from "./GamingMainContainer";
import GamingSecondContainer from "./GamingSecondContainer";
import GamingThirdContainer from "./GamingThirdContainer";
import GamingFourthContainer from "./GamingFourthContainer";
import Clients from "../../../Home/Clients/Clients";

function GamingMarketing() {
  return (
    <div className="w-full">
      <div className="w-full sticky top-0 z-50 shadow-md bg-[#0c2d57]">
        <Navbar />
      </div>
      <div className="bg-[#0c2d57] ">
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
        <Clients/>
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
