import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ContactForm from "../Home/ContactForm/ContactForm";

function Contact() {
  return (
    <div>
      <div className="bg-[#0c2d57] lg:sticky top-0 z-50 shadow-md">
        <Navbar />
      </div>
      <div className="bg-[#0c2d57] w-full">
        <div className="lg:w-[1280px] lg:h-[25vh] mx-auto px-4 py-10 text-[#E48F45] lg:text-7xl text-4xl flex justify-center items-center font-extrabold leading-snug">
          Contact
        </div>
      </div>
      <div>
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

export default Contact;
