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
      <div className="w-full sticky top-0 bg-[#0c2d57] shadow-md z-50">
        <Navbar />
      </div>
      <div className="bg-[#0c2d57]">
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
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <Footer />
      </div>
    </div>
  );
}

export default LeadGeneration;
