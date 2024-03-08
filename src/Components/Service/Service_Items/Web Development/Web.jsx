import React from "react";
import Navbar from "../../../Navbar/Navbar";
import ContactForm from "../../../Home/ContactForm/ContactForm";
import Footer from "../../../Footer/Footer";
import WebMainPage from "./WebMainPage";
import WebSecondContainer from "./WebSecondContainer";
import WebFourthContainer from "./WebFourthContainer";
import WebThirdContainer from "./WebThirdContainer";
import web from "../../../../assets/web.jpg";

function Web() {
  return (
    <div className="w-full">
      <div className="w-full fixed top-0 bg-[#0c2d57] shadow-md z-50">
        <Navbar />
      </div>
      <div className="bg-[#0c2d57]">
        <WebMainPage />
      </div>
      <div className="">
        <WebSecondContainer />
      </div>
      <div>
        <WebThirdContainer />
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

export default Web;
