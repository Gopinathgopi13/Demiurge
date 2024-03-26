import React from "react";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Footer/Footer";
import VideoMarketingSecondContainer from "./VideoMarketingSecondContainer";
import VideoMarketingMainPage from "./VideoMarketingMainPage";
import VideoMarketingThirdContainer from "./VideoMarketingThirdContainer";
import CTA from "./CTA";
import FAQ from "./FAQ";
import VideoMarketingFourthContainer from "./VideoMarketingFourthContainer";

function VideoMarketing() {
  return (
    <div className="w-full">
      <div className="w-full sticky top-0 bg-[#0c2d57] shadow-md z-50">
        <Navbar />
      </div>
      <div className="bg-[url('https://img.freepik.com/free-photo/3d-cinema-movie-projector_23-2151016126.jpg?t=st=1711450279~exp=1711453879~hmac=8e861d5f863bd274ffc280a4b7556d6eba85139c030cbdad8ad6085444a5ce50&w=1380')] bg-cover bg-center">
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
        <FAQ />
      </div>
      <div className="bg-[#0c2d57]">
        <CTA />
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <Footer />
      </div>
    </div>
  );
}

export default VideoMarketing;
