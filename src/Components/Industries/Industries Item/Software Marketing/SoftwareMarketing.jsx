import React from "react";
import SoftwareMainContainer from "./SoftwareMainContainer";
import Navbar from "../../../Navbar/Navbar";
import ContactForm from "../../../Home/ContactForm/ContactForm";
import Footer from "../../../Footer/Footer";
import SoftwareSecondContainer from "./SoftwareSecondContainer";
import SoftwareThirdContainer from "./SoftwareThirdContainer";

function SoftwareMarketing() {
  return (
    <div className="w-full">
      <div className="w-full sticky top-0 z-50 shadow-md bg-[#0c2d57]">
        <Navbar />
      </div>
      <div className="bg-[#0c2d57]">
        <SoftwareMainContainer />
      </div>
      <div>
        <SoftwareSecondContainer />
      </div>
      <div>
        <SoftwareThirdContainer />
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

export default SoftwareMarketing;
