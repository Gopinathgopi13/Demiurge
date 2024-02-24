import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ContactForm from "../Home/ContactForm/ContactForm";

function Contact() {
  return (
    <div>
      <div className="bg-[url(https://ninjapromo.io/wp-content/themes/ninjapromo/assets/img/hero-section/hero-bg-front.jpg)] lg:sticky top-0 z-50">
        <Navbar />
      </div>
      <div className="bg-[url(https://ninjapromo.io/wp-content/themes/ninjapromo/assets/img/hero-section/hero-bg-front.jpg)] w-full">
        <div className="lg:w-[1280px] lg:h-[25vh] mx-auto px-4 py-10 text-white lg:text-7xl text-4xl flex justify-center items-center font-extrabold leading-snug">
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
