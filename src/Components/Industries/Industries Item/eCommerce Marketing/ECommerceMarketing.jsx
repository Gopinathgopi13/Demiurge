import React from "react";
import Navbar from "../../../Navbar/Navbar";
import ContactForm from "../../../Home/ContactForm/ContactForm";
import Footer from "../../../Footer/Footer";
import EcommerceMainPage from "./EcommerceMainPage";
import EcommerceSecondContainer from "./EcommerceSecondContainer";
import EcommerceThirdContainer from "./EcommerceThirdContainer";
import EcommerceFourthContainer from "./EcommerceFourthContainer";
import EcommerceFifthContainer from "./EcommerceFifthContainer";

function ECommerceMarketing() {
  return (
    <div className="w-full">
      <div className="w-full sticky top-0 z-50 shadow-md bg-[#0c2d57]">
        <Navbar />
      </div>
      <div className="bg-[#0c2d57] bg-cover">
        <EcommerceMainPage />
      </div>
      <div>
        <EcommerceSecondContainer />
      </div>
      <div>
        <EcommerceThirdContainer />
      </div>
      <div>
        <EcommerceFourthContainer />
      </div>
      <div>
        <EcommerceFifthContainer />
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

export default ECommerceMarketing;
