import React from "react";
import Navbar from "../../../Navbar/Navbar";
import ContactForm from "../../../Home/ContactForm/ContactForm";
import Footer from "../../../Footer/Footer";
import SmallBusinessMainContainer from "./SmallBusinessMainContainer";
import SmallBusinessSecondContainer from "./SmallBusinessSecondContainer";
import SmallBusinessFourthContainer from "./SmallBusinessFourthContainer";
import SmallBusinessThirdContainer from "./SmallBusinessThirdContainer";

function SmallBusiness() {
  return (
    <div className="w-full">
      <div className="w-full sticky top-0 z-50 shadow-md bg-[#0c2d57]">
        <Navbar />
      </div>
      <div className="bg-[#0c2d57] bg-cover">
        <SmallBusinessMainContainer />
      </div>
      <div>
        <SmallBusinessSecondContainer />
      </div>
      <div>
        <SmallBusinessThirdContainer />
      </div>
      <div>
        <SmallBusinessFourthContainer />
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

export default SmallBusiness;
