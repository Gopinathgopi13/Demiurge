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
      <div className="">
        <div className="w-full sticky top-0">
          <Navbar />
        </div>
        <img
          src={web}
          className="absolute -z-30 w-full h-[100vh] top-0 left-0 border-none object-cover"
        />
        <WebMainPage />
      </div>
      <div className="bg-black">
        <WebSecondContainer />
      </div>
      <div>
        <WebThirdContainer />
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
