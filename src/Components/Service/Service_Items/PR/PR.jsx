import React from "react";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Footer/Footer";
import ContactForm from "../../../Home/ContactForm/ContactForm";
import PRMainPage from "./PRMainPage";
import PRSecondContainer from "./PRSecondContainer";
import PRThirdContainer from "./PRThirdContainer";
import PRFourthContainer from "./PRFourthContainer";

function PR() {
  return (
    <div className="w-full">
      <div className="bg-[url(https://ninjapromo.io/wp-content/themes/ninjapromo/assets/img/hero-section/hero-bg-front.jpg)]">
        <div className="w-full sticky top-0">
          <Navbar />
        </div>
        <PRMainPage />
      </div>
      <div className="my-20">
        <PRSecondContainer />
      </div>
      <div className="my-20">
        <PRThirdContainer />
      </div>
      <div className="my-20">
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

export default PR;
