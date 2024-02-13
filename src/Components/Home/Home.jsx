import React from "react";
import Navbar from "../Navbar/Navbar";
import ServiceContainer from "./Service_Container/ServiceContainer";
import CallToTeam from "./CallToTeam/CallToTeam";
import Clients from "./Clients/Clients";
import ContactForm from "./ContactForm/ContactForm";
import MainPage from "./Main_Page/MainPage";
import Footer from "../Footer/Footer";
import FQA from "../FQA's/FQA";
import IndustriesComponent from "./Industries_Component/IndustriesComponent";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="w-full">
      <motion.div
        className="bg-[url(https://ninjapromo.io/wp-content/themes/ninjapromo/assets/img/hero-section/hero-bg-front.jpg)] lg:sticky top-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ ease: "easeIn" }}
      >
        <Navbar />
      </motion.div>
      <div className="bg-[url(https://ninjapromo.io/wp-content/themes/ninjapromo/assets/img/hero-section/hero-bg-front.jpg)]">
        <MainPage />
      </div>
      {/* Services */}
      <div className="w-full">
        <ServiceContainer></ServiceContainer>
      </div>
      <div className="w-full">
        <CallToTeam />
      </div>
      <div className="w-full">
        <IndustriesComponent />
      </div>
      <div>
        <FQA />
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

export default Home;
