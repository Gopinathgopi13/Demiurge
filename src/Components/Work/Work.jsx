import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import WorkMainPage from "./WorkMainPage";

function Work() {
  return (
    <div>
      <div className="bg-[url(https://ninjapromo.io/wp-content/themes/ninjapromo/assets/img/hero-section/hero-bg-front.jpg)] lg:sticky top-0 z-50">
        <Navbar />
      </div>
      <div className="bg-[url(https://ninjapromo.io/wp-content/themes/ninjapromo/assets/img/hero-section/hero-bg-front.jpg)]">
        <WorkMainPage />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Work;
