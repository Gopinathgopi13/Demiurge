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
      <div className="w-full sticky top-0 bg-[#0c2d57] shadow-md z-50">
        <Navbar />
      </div>
      <div className="bg-[#0c2d57]">
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
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <Footer />
      </div>
    </div>
  );
}

export default PaidSocial;
