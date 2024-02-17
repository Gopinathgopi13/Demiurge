import React from "react";
import Navbar from "../../../Navbar/Navbar";
import ContactForm from "../../../Home/ContactForm/ContactForm";
import Footer from "../../../Footer/Footer";
import EcommerceMainPage from "./EcommerceMainPage";
import EcommerceSecondContainer from "./EcommerceSecondContainer";
import EcommerceThirdContainer from "./EcommerceThirdContainer";
import EcommerceFourthContainer from "./EcommerceFourthContainer";

function ECommerceMarketing() {
  return (
    <div className="w-full">
      <div className="bg-blue-800 bg-cover">
        <div className="w-full sticky top-0">
          <Navbar />
        </div>
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
        <ContactForm />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default ECommerceMarketing;
