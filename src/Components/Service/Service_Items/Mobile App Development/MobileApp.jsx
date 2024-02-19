import React from "react";
import Navbar from "../../../Navbar/Navbar";
import MobileMainPage from "./MobileMainPage";
import MobileSecondContainer from "./MobileSecondContainer";
import MobileThirdContainer from "./MobileThirdContainer";
import MobileFourthCOntainer from "./MobileFourthCOntainer";
import ContactForm from "../../../Home/ContactForm/ContactForm";
import Footer from "../../../Footer/Footer";
import mbl from "../../../../assets/mbl2.jpg";
function MobileApp() {
  return (
    <div className="w-full">
      <div className="w-full">
        <div className="w-full sticky top-0">
          <Navbar />
        </div>
        <img
          src={mbl}
          className="absolute -z-30 w-full h-[100vh] top-0 left-0 border-none object-cover"
        />
        <MobileMainPage />
      </div>
      <div className="bg-black">
        <MobileSecondContainer />
      </div>
      <div>
        <MobileThirdContainer />
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
