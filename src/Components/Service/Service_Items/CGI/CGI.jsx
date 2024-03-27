import React from "react";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Footer/Footer";
import CGIMainPage from "./CGIMainPage";
import CGISecondContainer from "./CGISecondContainer";
import CGIThirdContainer from "./CGIThirdContainer";
import FAQ from "./FAQ";
import CTA from "./CTA";
import banner from '../../../../assets/CGIBanner1.jpg'

function CGI() {
  return (
    <div className="w-full">
      <div className="w-full sticky top-0 bg-[#0c2d57] shadow-md z-50">
        <Navbar />
      </div>
      <div className="bg-cover bg-center"
      style={{backgroundImage: `url('${banner}')`}}
      >
        <CGIMainPage />
      </div>
      <div className="my-20">
        <CGISecondContainer />
      </div>
      <div className="bg-[#0C2D57] py-20">
        <CGIThirdContainer />
      </div>
      <div className="py-20">
        <FAQ />
      </div>
      <div className="bg-[#0c2d57]">
        <CTA />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default CGI;
