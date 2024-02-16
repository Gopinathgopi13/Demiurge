import React from "react";
import Navbar from "../../../Navbar/Navbar";
import SocialMediaMainPage from "./SocialMediaMainPage";
import MarketingService from "./MarketingService";
import OrganicPaid from "./OrganicPaid";
import Footer from "../../../Footer/Footer";
import CTA from "./CTA";
import ContactForm from "../../../Home/ContactForm/ContactForm";
import { Outlet } from "react-router-dom";

function SocialMedia() {
  return (
    <div className="w-full">
      <div className="bg-[url(https://ninjapromo.io/wp-content/themes/ninjapromo/assets/img/hero-section/hero-bg-front.jpg)]">
        <div className="w-full sticky top-0">
          <Navbar />
        </div>
        <SocialMediaMainPage />
      </div>
      <div>
        <MarketingService />
      </div>
      <div className="bg-[#161616]">
        <CTA />
      </div>
      <div className="my-10">
        <OrganicPaid />
      </div>

      <div>
        <ContactForm />
      </div>
      <div>
        <Footer />
      </div>
      <Outlet/>
    </div>
  );
}

export default SocialMedia;
