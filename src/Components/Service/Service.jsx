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
      <div className="bg-[url(https://ninjapromo.io/wp-content/themes/ninjapromo/assets/img/hero-section/hero-bg-front.jpg)] lg:sticky top-0 z-50">
        <Navbar />
      </div>
      <div className="bg-[url(https://ninjapromo.io/wp-content/themes/ninjapromo/assets/img/hero-section/hero-bg-front.jpg)]">
        <ServiceMainPage />
      </div>
      <div className="my-20">
        <ServiceContainer />
      </div>
      <div className="w-full">
        <Clients />
      </div>
      <div className="w-full">
        <ContactForm />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Service;
