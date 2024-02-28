import React from "react";
import Navbar from "../../../Navbar/Navbar";
import Clients from "../../../Home/Clients/Clients";
import ContactForm from "../../../Home/ContactForm/ContactForm";
import Footer from "../../../Footer/Footer";
import RealEstateMainContainer from "./RealEstateMainContainer";
import RealEstateSecondContainer from "./RealEstateSecondContainer";
import RealEstateThirdContainer from "./RealEstateThirdContainer";

function RealEstateMarketing() {
  return (
    <div className="w-full">
      <div className="w-full sticky top-0 z-50 shadow-md bg-[#0c2d57]">
        <Navbar />
      </div>
      <div className="bg-[#0c2d57]">
        <RealEstateMainContainer />
      </div>
      <div>
        <RealEstateSecondContainer />
      </div>
      <div>
        <RealEstateThirdContainer />
      </div>
      <div>
        <Clients />
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

export default RealEstateMarketing;
