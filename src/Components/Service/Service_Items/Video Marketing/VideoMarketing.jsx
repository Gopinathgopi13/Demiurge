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
      <div className="w-full bg-black">
        <Navbar />
      </div>
      <div className="bg-[url(https://ninjapromo.io/wp-content/themes/ninjapromo/assets/img/hero-section/hero-bg-front.jpg)]">
        <VideoMarketingMainPage />
      </div>
      <div>
        <VideoMarketingSecondContainer />
      </div>
      <div className="bg-blue-400">
        <VideoMarketingThirdContainer />
      </div>
      <div>
        <VideoMarketingFourthContainer />
      </div>
      <div>
        <ContactForm />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default VideoMarketing;
