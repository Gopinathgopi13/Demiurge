import React from "react";
import Navbar from "../../../Navbar/Navbar";
import ContactForm from "../../../Home/ContactForm/ContactForm";
import Footer from "../../../Footer/Footer";
import EsportFouthContainer from "./EsportFouthContainer";
import EsportMainContainer from "./EsportMainContainer";
import EsportSecondContainer from "./EsportSecondContainer";
import EsportThirdContainer from "./EsportThirdContainer";
import EsportFifthContainer from "./EsportFifthContainer";
import Clients from "../../../Home/Clients/Clients";

function EsportsMarketing() {
  return (
    <div className="w-full">
      <div className="w-full sticky top-0 z-50 shadow-md bg-[#0c2d57]">
        <Navbar />
      </div>
      <div className="bg-[#0c2d57]">
        <EsportMainContainer />
      </div>
      <div>
        <EsportSecondContainer />
      </div>
      <div>
        <EsportThirdContainer />
      </div>
      <div>
        <EsportFouthContainer />
      </div>
      <div>
        <EsportFifthContainer />
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

export default EsportsMarketing;
