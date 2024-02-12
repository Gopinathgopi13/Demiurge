import React from "react";
import Navbar from "../Navbar/Navbar";
import ServiceContainer from "./Service_Container/ServiceContainer";
import CallToTeam from "./CallToTeam/CallToTeam";
import Industries from "./Industries/Industries";
import Clients from "./Clients/Clients";
import ContactForm from "./ContactForm/ContactForm";
import MainPage from "./Main_Page/MainPage";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div className="w-full">
      <div className="bg-[url(https://ninjapromo.io/wp-content/themes/ninjapromo/assets/img/hero-section/hero-bg-front.jpg)]">
        <Navbar />
        {/* Main Page */}
        <div className="w-full">
          <MainPage/>
        </div>
      </div>
      {/* Services */}
      <div className="w-full">
        <ServiceContainer></ServiceContainer>
      </div>
      <div className="w-full">
        <CallToTeam />
      </div>
      <div className="w-full">
        <Industries />
      </div>
      <div className="w-full">
        <Clients />
      </div>
      <div className="w-full">
        <ContactForm />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
