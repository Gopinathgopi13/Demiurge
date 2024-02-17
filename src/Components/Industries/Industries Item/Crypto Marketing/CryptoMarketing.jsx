import React from "react";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Footer/Footer";
import ContactForm from "../../../Home/ContactForm/ContactForm";
import CryptoMainContainer from "./CryptoMainContainer";
import CryptoSecondContainer from "./CryptoSecondContainer";

function CryptoMarketing() {
  return (
    <div className="w-full">
      <div className="bg-industriesBG bg-cover">
        <div className="w-full sticky top-0">
          <Navbar />
        </div>
        <CryptoMainContainer />
      </div>
      <div>
        <CryptoSecondContainer />
      </div>
      {/* <div className="border-2">
        <ARThirdContainer />
      </div> */}
      {/* <div>
    <WebFourthContainer />
  </div> */}
      <div>
        <ContactForm />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default CryptoMarketing;
