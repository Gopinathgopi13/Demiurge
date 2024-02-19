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
      <div className="bg-[url(https://ninjapromo.io/wp-content/themes/ninjapromo/assets/img/hero-section/hero-bg-front.jpg)]">
        <div className="w-full sticky top-0">
          <Navbar />
        </div>
        <PaidSocialMainPage />
      </div>
      <div className="my-20">
        <PaidSocialSecondContainer />
      </div>
      <div className="my-20">
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
