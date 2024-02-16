import React from "react";
import Navbar from "../../../Navbar/Navbar";
import ContactForm from "../../../Home/ContactForm/ContactForm";
import Footer from "../../../Footer/Footer";
import BrandingMainPage from "./BrandingMainPage";
import BrandingSecondContainer from "./BrandingSecondContainer";
import BrandingThirdContainer from "./BrandingThirdContainer";
import BrandingFourthContainer from "./BrandingFourthContainer";

function Branding() {
  return (
    <div className="w-full">
      <div className="bg-[url(https://ninjapromo.io/wp-content/themes/ninjapromo/assets/img/hero-section/hero-bg-front.jpg)]">
        <div className="w-full sticky top-0">
          <Navbar />
        </div>
        <BrandingMainPage />
      </div>
      <div>
        <BrandingSecondContainer />
      </div>
      <div className="bg-black">
        <BrandingThirdContainer />
      </div>
      <div>
        <BrandingFourthContainer />
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

export default Branding;
