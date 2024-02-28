import React from "react";
import Navbar from "../../../Navbar/Navbar";
import Clients from "../../../Home/Clients/Clients";
import ContactForm from "../../../Home/ContactForm/ContactForm";
import Footer from "../../../Footer/Footer";
import B2BMainContainer from "./B2BMainContainer";
import B2BSecondContainer from "./B2BSecondContainer";
import B2BThirdContainer from "./B2BThirdContainer";
import B2BFourthContainer from "./B2BFourthContainer";
import B2BFifthContainer from "./B2BFifthContainer";

function B2bMarketing() {
  return (
    <div className="w-full">
      <div className="w-full sticky top-0 z-50 shadow-md bg-[#0c2d57]">
        <Navbar />
      </div>
      <div className="bg-[#0c2d57]">
        <B2BMainContainer />
      </div>
      <div className="my-20">
        <B2BSecondContainer />
      </div>
      <div className="bg-[#0c2d57] py-20 my-10">
        <B2BThirdContainer />
      </div>
      <div className="py-10">
        <B2BFourthContainer/>
      </div>
      <div className="bg-[#0c2d57] py-20">
        <B2BFifthContainer/>
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
}

export default B2bMarketing;
