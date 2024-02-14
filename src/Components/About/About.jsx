import React from "react";
import Navbar from "../Navbar/Navbar";
import AboutMainPage from "./AboutMainPage";

import AboutBG from '../../assets/AboutBG.png'
import OurTeam from "./OurTeam";
import OurCompany from "./OurCompany";
function About() {
  return (
    <div>
      <div className="bg-[url(https://ninjapromo.io/wp-content/themes/ninjapromo/assets/img/hero-section/hero-bg-front.jpg)] lg:sticky top-0 z-50">
        <Navbar />
      </div>
      <div>
        <AboutMainPage />
      </div>
      <div>
        <OurCompany/>
      </div>
      <div className="">
        <OurTeam/>
      </div>
    </div>
  );
}

export default About;
