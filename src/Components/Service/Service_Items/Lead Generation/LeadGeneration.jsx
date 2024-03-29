import React from "react";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Footer/Footer";
import ContactForm from "../../../Home/ContactForm/ContactForm";
import LeadMainPage from "./LeadMainPage";
import LeadSecondContainer from "./LeadSecondContainer";
import LeadThirdGeneration from "./LeadThirdGeneration";
import lead from "../../../../assets/lead.jpg";
import LeadFourthGeneration from "./LeadFourthGeneration";
import CTA from "./CTA";
function LeadGeneration() {
  return (
    <div className="w-full">
      <div className="w-full sticky top-0 bg-[#0c2d57] shadow-md z-50">
        <Navbar />
      </div>
      <div className="bg-[url('https://img.freepik.com/free-photo/businessman-working-futuristic-office_23-2151003756.jpg?t=st=1711449992~exp=1711453592~hmac=b1fb4cb55c1c50e1cc5109d25f5fb58ac2d43bd6f219c66828fcb6633ff6b93f&w=1380')] bg-cover bg-center">
        <LeadMainPage />
      </div>
      <div className="my-20">
        <LeadSecondContainer />
      </div>
      {/* <div className="border-2">
        <LeadThirdGeneration />
      </div> */}
      <div>
        <LeadFourthGeneration />
      </div>
      <div className="bg-[#0c2d57]">
        <CTA />
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <Footer />
      </div>
    </div>
  );
}

export default LeadGeneration;
