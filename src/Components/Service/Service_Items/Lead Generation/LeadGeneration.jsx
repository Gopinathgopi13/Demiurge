import React from "react";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Footer/Footer";
import ContactForm from "../../../Home/ContactForm/ContactForm";
import LeadMainPage from "./LeadMainPage";
import LeadSecondContainer from "./LeadSecondContainer";
import LeadThirdGeneration from "./LeadThirdGeneration";
import lead from "../../../../assets/lead.jpg";
function LeadGeneration() {
  return (
    <div className="w-full">
      <div className="bg-lead bg-cover">
        <div className="w-full sticky top-0">
          <Navbar />
        </div>
        <img
          src={lead}
          className="absolute -z-30 w-full h-[100vh] top-0 left-0 border-none object-cover"
        />
        <LeadMainPage />
      </div>
      <div className="my-20">
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
