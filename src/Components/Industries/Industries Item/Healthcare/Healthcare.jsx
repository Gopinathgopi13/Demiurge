import React from "react";
import Navbar from "../../../Navbar/Navbar";
import Clients from "../../../Home/Clients/Clients";
import ContactForm from "../../../Home/ContactForm/ContactForm";
import HealthcareMainContainer from "./HealthcareMainContainer";
import HealthcareSecondContainer from "./HealthcareSecondContainer";
import HealthcareThirdContainer from "./HealthcareThirdContainer";
import Footer from "../../../Footer/Footer";

const Healthcare = () => {
  return (
    <div className="w-full">
      <div className="w-full sticky top-0 z-50 shadow-md bg-[#0c2d57]">
        <Navbar />
      </div>
      <div className="bg-[#0c2d57]">
        <HealthcareMainContainer />
      </div>
      <div className="my-20">
        <HealthcareSecondContainer />
      </div>
      <div className="bg-[#0c2d57] py-20 my-10">
        <HealthcareThirdContainer />
      </div>
      <div className="my-20">
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
};

export default Healthcare;
