import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import IndustriesComponent from "../Home/Industries_Component/IndustriesComponent";
import Clients from "../Home/Clients/Clients";
import ContactForm from "../Home/ContactForm/ContactForm";
import IndustriesMainPage from "./IndustriesMainPage";

function Industries() {
  return (
    <div>
      <div className="bg-[#0c2d57] lg:sticky top-0 z-50">
        <Navbar />
      </div>
      <div className="bg-[#0c2d57]">
        <IndustriesMainPage />
      </div>
      <div className="my-20">
        <IndustriesComponent />
      </div>
      {/* <div className="w-full my-20">
        <Clients />
      </div> */}
      <div className="w-full">
        <ContactForm />
      </div>
      <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once="true"
      >
        <Footer />
      </div>
    </div>
  );
}

export default Industries;
