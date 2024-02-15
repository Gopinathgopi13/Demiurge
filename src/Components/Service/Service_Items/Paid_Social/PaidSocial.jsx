import React from "react";
import Navbar from "../../../Navbar/Navbar";
import ContactForm from "../../../Home/ContactForm/ContactForm";
import Footer from "../../../Footer/Footer";
import PaidSocialSecondContainer from "./PaidSocialSecondContainer";
import PaidSocialThirdContainer from "./PaidSocialThirdContainer";
import PaidSocialMainPage from "./PaidSocialMainPage";

function PaidSocial() {
  return (
    <div className="w-full">
      <div className="w-full bg-black">
        <Navbar />
      </div>
      <div className="bg-[url(https://ninjapromo.io/wp-content/themes/ninjapromo/assets/img/hero-section/hero-bg-front.jpg)]">
        <PaidSocialMainPage />
      </div>
      <div>
        <PaidSocialSecondContainer />
      </div>
      <div>
        <PaidSocialThirdContainer />
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

export default PaidSocial;
