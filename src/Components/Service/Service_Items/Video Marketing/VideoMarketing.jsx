import React from "react";
import Navbar from "../../../Navbar/Navbar";
import ContactForm from "../../../Home/ContactForm/ContactForm";
import Footer from "../../../Footer/Footer";
import VideoMarketingSecondContainer from "./VideoMarketingSecondContainer";
import VideoMarketingMainPage from "./VideoMarketingMainPage";
import VideoMarketingThirdContainer from "./VideoMarketingThirdContainer";
import VideoMarketingFourthContainer from "./VideoMarketingFourthContainer";

function VideoMarketing() {
  return (
    <div className="w-full">
      <div className="w-full sticky top-0 bg-[#0c2d57] shadow-md z-50">
        <Navbar />
      </div>
      <div className="bg-[#0c2d57]">
        <VideoMarketingMainPage />
      </div>
      <div className="my-20">
        <VideoMarketingSecondContainer />
      </div>
      <div className="bg-[#0c2d57] py-20">
        <VideoMarketingThirdContainer />
      </div>
      <div>
        <VideoMarketingFourthContainer />
      </div>
      <div>
        <ContactForm />
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <Footer />
      </div>
    </div>
  );
}

export default VideoMarketing;
