import React from "react";
import Navbar from "../../../Navbar/Navbar";
import ContactForm from "../../../Home/ContactForm/ContactForm";
import Footer from "../../../Footer/Footer";
import EsportFouthContainer from "./EsportFouthContainer";
import EsportMainContainer from "./EsportMainContainer";
import EsportSecondContainer from "./EsportSecondContainer";
import EsportThirdContainer from "./EsportThirdContainer";
import EsportFifthContainer from "./EsportFifthContainer";

function EsportsMarketing() {
  return (
    <div className="w-full">
      <div className="bg-blue-800 bg-cover">
        <div className="w-full sticky top-0">
          <Navbar />
        </div>
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
        <EsportFifthContainer/>
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
