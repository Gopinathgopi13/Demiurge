import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import CareerMainPage from "./CareerMainPage";
import Page from "./Page";
import OpenPosition from "./OpenPosition";
import Querys from "./Querys";

function Careers() {
  return (
    <div>
      <div className="bg-[url(https://ninjapromo.io/wp-content/themes/ninjapromo/assets/img/hero-section/hero-bg-front.jpg)] lg:sticky top-0 z-50">
        <Navbar />
      </div>
      <div className="bg-[url(https://ninjapromo.io/wp-content/themes/ninjapromo/assets/img/hero-section/hero-bg-front.jpg)]">
        <CareerMainPage />
      </div>
      <div>
        <Page/>
      </div>
      <div>
        <OpenPosition/>
      </div>
      <div>
        <Querys/>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Careers;
