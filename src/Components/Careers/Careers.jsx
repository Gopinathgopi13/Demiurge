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
      <div className="bg-[#0c2d57] shadow-md lg:sticky top-0 z-50">
        <Navbar />
      </div>
      <div className="bg-[#0c2d57]">
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
