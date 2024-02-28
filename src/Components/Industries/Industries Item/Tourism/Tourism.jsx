import React from "react";
import Navbar from "../../../Navbar/Navbar";
import Clients from "../../../Home/Clients/Clients";
import ContactForm from "../../../Home/ContactForm/ContactForm";
import Footer from "../../../Footer/Footer";
import TourismMainContainer from "./TourismMainContainer";
import TourismSecondContainer from "./TourismSecondContainer";
import TourismThirdContainer from "./TourismThirdContainer";

function Tourism() {
  return (
    <div className="w-full">
      <div className="w-full sticky top-0 z-50 shadow-md bg-[#0c2d57]">
        <Navbar />
      </div>
      <div className="bg-[#0c2d57]">
        <TourismMainContainer />
      </div>
      <div className="my-20">
        <TourismSecondContainer />
      </div>
      <div className="bg-[#0c2d57] py-20 my-10">
        <TourismThirdContainer />
      </div>
      <div className="my-20">
        <Clients />
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

export default Tourism;
