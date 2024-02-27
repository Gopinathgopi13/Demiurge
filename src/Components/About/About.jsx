import React from "react";
import Navbar from "../Navbar/Navbar";
import AboutMainPage from "./AboutMainPage";
import AboutBG from '../../assets/AboutBG.png'
import OurTeam from "./OurTeam";
import OurCompany from "./OurCompany";
import Footer from "../Footer/Footer";
import Page from "./Page";

function About() {
  return (
    <div>
      <div className="bg-[#0c2d57] lg:sticky top-0 z-50 shadow-md">
        <Navbar />
      </div>
      <div className="bg-[#0c2d57]">
        <AboutMainPage />
      </div>
      <div>
        <OurCompany/>
      </div>
      <div>
        <Page/>
      </div>
      <div className="">
        <OurTeam/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default About;
