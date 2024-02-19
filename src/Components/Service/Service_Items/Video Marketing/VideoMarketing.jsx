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
      <div className="bg-[url(https://ninjapromo.io/wp-content/themes/ninjapromo/assets/img/hero-section/hero-bg-front.jpg)]">
        <div className="w-full sticky top-0">
          <Navbar />
        </div>
        <VideoMarketingMainPage />
      </div>
      <div className="my-20">
        <VideoMarketingSecondContainer />
      </div>
      <div className="bg-blue-400 py-20">
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
