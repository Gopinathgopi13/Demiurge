import React from "react";
import Navbar from "../../../Navbar/Navbar";
import ContactForm from "../../../Home/ContactForm/ContactForm";
import Footer from "../../../Footer/Footer";
import PRSecondContainer from "../PR/PRSecondContainer";
import PRThirdContainer from "../PR/PRThirdContainer";
import PRFourthContainer from "../PR/PRFourthContainer";
import CGIMainPage from "./CGIMainPage";

function CGI() {
  return (
    <div className="w-full">
      <div className="bg-[url(https://ninjapromo.io/wp-content/themes/ninjapromo/assets/img/hero-section/hero-bg-front.jpg)]">
      <div className="w-full sticky top-0">
          <Navbar />
        </div>
        <CGIMainPage />
      </div>
      <div>
        <PRSecondContainer />
      </div>
      <div>
        <PRThirdContainer />
      </div>
      <div>
        <PRFourthContainer />
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

export default CGI;
