import React from "react";
import EducationMainContainer from "./EducationMainContainer";
import Navbar from "../../../Navbar/Navbar";
import Clients from "../../../Home/Clients/Clients";
import ContactForm from "../../../Home/ContactForm/ContactForm";
import Footer from "../../../Footer/Footer";
import EducationThirdContainer from "./EducationThirdContainer";
import EducationSecondContainer from "./EducationSecondContainer";

const Education = () => {
  return (
    <div className="w-full">
      <div className="w-full sticky top-0 z-50 shadow-md bg-[#0c2d57]">
        <Navbar />
      </div>
      <div className="bg-[#0c2d57]">
        <EducationMainContainer />
      </div>
      <div className="my-20">
        <EducationSecondContainer />
      </div>
      <div className="bg-[#0c2d57] py-20 my-10">
        <EducationThirdContainer />
      </div>
      {/* <div className="py-10">
        <B2BFourthContainer />
      </div>
      <div className="bg-[#0c2d57] py-20">
        <B2BFifthContainer />
      </div> */}
      <div className="my-20">
        <Clients/>
      </div>
      <div>
        <ContactForm />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Education;
