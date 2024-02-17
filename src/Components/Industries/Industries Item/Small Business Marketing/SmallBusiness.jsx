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
      <div className="bg-blue-800 bg-cover">
        <div className="w-full sticky top-0">
          <Navbar />
        </div>
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
