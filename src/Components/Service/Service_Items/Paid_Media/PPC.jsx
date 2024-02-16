import React from "react";
import PPCMainPage from "./PPCMainPage";
import PPCSecondContainer from "./PPCSecondContainer";
import PPCThirdContainer from "./PPCThirdContainer";
import Navbar from "../../../Navbar/Navbar";
import ContactForm from "../../../Home/ContactForm/ContactForm";
import Footer from "../../../Footer/Footer";

function PPC() {
  return (
    <div className="w-full">
      <div className="bg-[url(https://ninjapromo.io/wp-content/themes/ninjapromo/assets/img/hero-section/hero-bg-front.jpg)]">
        <div className="w-full sticky top-0">
          <Navbar />
        </div>
        <PPCMainPage />
      </div>
      <div>
        <PPCSecondContainer />
      </div>
      <div>
        <PPCThirdContainer />
      </div>
      {/* <div>
        <SEOFourthConitainer />
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

export default PPC;
