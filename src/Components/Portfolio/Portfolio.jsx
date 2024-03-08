import React from "react";
import Navbar from "../Navbar/Navbar";
import ContactForm from "../Home/ContactForm/ContactForm";
import Footer from "../Footer/Footer";
import PortfolioMainContainer from "./PortfolioMainContainer";

const Portfolio = () => {
  return (
    <div>
      <div className="bg-[#0c2d57] lg:sticky top-0 z-50 shadow-md">
        <Navbar />
      </div>
      <div className="bg-[#0c2d57] w-full">
        <div className="max-w-[1280px] lg:h-[35vh] mx-auto px-4 py-10 primaryColor lg:text-7xl text-4xl flex justify-center items-center font-extrabold leading-snug">
          Portfolio
        </div>
      </div>
      <div className="my-20">
        <PortfolioMainContainer />
      </div>
      <div>
        <ContactForm />
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
