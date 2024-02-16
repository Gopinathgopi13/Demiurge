import React from "react";
import Navbar from "../../../Navbar/Navbar";
import ContactForm from "../../../Home/ContactForm/ContactForm";
import Footer from "../../../Footer/Footer";
import WebMainPage from "./WebMainPage";
import WebSecondContainer from "./WebSecondContainer";
import WebFourthContainer from "./WebFourthContainer";
import WebThirdContainer from "./WebThirdContainer";

function Web() {
  return (
    <div className="w-full">
      <div className="bg-web bg-cover">
        <div className="w-full sticky top-0">
          <Navbar />
        </div>
        <WebMainPage />
      </div>
      <div className="bg-black">
        <WebSecondContainer />
      </div>
      <div>
        <WebThirdContainer />
      </div>
      <div>
        <WebFourthContainer />
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

export default Web;
