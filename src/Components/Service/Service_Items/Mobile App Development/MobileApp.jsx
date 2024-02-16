import React from "react";
import Navbar from "../../../Navbar/Navbar";
import MobileMainPage from "./MobileMainPage";
import MobileSecondContainer from "./MobileSecondContainer";
import MobileThirdContainer from "./MobileThirdContainer";
import MobileFourthCOntainer from "./MobileFourthCOntainer";
import ContactForm from "../../../Home/ContactForm/ContactForm";
import Footer from "../../../Footer/Footer";

function MobileApp() {
  return (
    <div className="w-full">
      <div className="bg-mbl bg-cover bg-no-repeat w-full">
        <div className="w-full sticky top-0">
          <Navbar />
        </div>
        <MobileMainPage />
      </div>
      <div className="bg-black">
        <MobileSecondContainer />
      </div>
      <div>
        <MobileThirdContainer />
      </div>
      <div>
        <MobileFourthCOntainer />
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

export default MobileApp;
