import React from "react";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Footer/Footer";
import VideoMarketingSecondContainer from "./VideoMarketingSecondContainer";
import VideoMarketingMainPage from "./VideoMarketingMainPage";
import VideoMarketingThirdContainer from "./VideoMarketingThirdContainer";
import CTA from "./CTA";
import FAQ from "./FAQ";

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
        <FAQ />
      </div>
      <div className="bg-[#0c2d57]">
       <CTA/>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <Footer />
      </div>
    </div>
  );
}

export default VideoMarketing;
