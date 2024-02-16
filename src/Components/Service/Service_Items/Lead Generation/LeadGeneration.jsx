import React from "react";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Footer/Footer";
import ContactForm from "../../../Home/ContactForm/ContactForm";
import LeadMainPage from "./LeadMainPage";
import LeadSecondContainer from "./LeadSecondContainer";
import LeadThirdGeneration from "./LeadThirdGeneration";

function LeadGeneration() {
  return (
    <div className="w-full">
      <div className="bg-lead bg-cover">
        <div className="w-full sticky top-0">
          <Navbar />
        </div>
        <LeadMainPage />
      </div>
      <div>
        <LeadSecondContainer />
      </div>
      <div className="border-2">
        <LeadThirdGeneration />
      </div>
      {/* <div>
        <WebFourthContainer />
      </div> */}
      <div>
        <ContactForm />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default LeadGeneration;
