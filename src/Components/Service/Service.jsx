import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ServiceContainer from "../Home/Service_Container/ServiceContainer";
import ContactForm from "../Home/ContactForm/ContactForm";
import Clients from "../Home/Clients/Clients";
import ServiceMainPage from "./ServiceMainPage";

function Service() {
  return (
    <div>
      <div className="bg-[#0c2d57] lg:sticky top-0 z-50 shadow-md">
        <Navbar />
      </div>
      <div className="bg-[#0c2d57]">
        <ServiceMainPage />
      </div>
      <div className="my-20">
        <ServiceContainer />
      </div>
      {/* <div className="w-full">
        <Clients />
      </div> */}
      <div className="w-full">
        <ContactForm />
      </div>
      <div data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once="true"
      >

        <Footer />
      </div>
    </div>
  );
}

export default Service;
