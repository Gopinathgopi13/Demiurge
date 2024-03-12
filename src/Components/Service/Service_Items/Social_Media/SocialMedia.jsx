import React from "react";
import Navbar from "../../../Navbar/Navbar";
import SocialMediaMainPage from "./SocialMediaMainPage";
import MarketingService from "./MarketingService";
import OrganicPaid from "./OrganicPaid";
import Footer from "../../../Footer/Footer";
import CTA from "./CTA";
import ContactForm from "../../../Home/ContactForm/ContactForm";
import { Outlet } from "react-router-dom";
import Social_Media_Home_Page from "../../../../assets/Social_Media_Home_Page.jpg";
function SocialMedia() {
  return (
    <div>
      <div className="w-full bg-[#0c2d57] sticky top-0  shadow-md z-50">
        <Navbar />
      </div>
      <div
        className="bg-cover bg-right"
        style={{ backgroundImage: `url(${Social_Media_Home_Page})` }}
      >
        <SocialMediaMainPage />
      </div>
      <div className="my-20">
        <MarketingService />
      </div>
      <div className="my-20">
        <OrganicPaid />
      </div>
      <div className="bg-[#0c2d57]">
        <CTA />
      </div>

      {/* <div>
        <ContactForm />
      </div> */}
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <Footer />
      </div>
      <Outlet />
    </div>
  );
}

export default SocialMedia;
