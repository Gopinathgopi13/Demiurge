import React from "react";
import SEOMainPage from "./SEOMainPage";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Footer/Footer";
import ContactForm from "../../../Home/ContactForm/ContactForm";
import SEOSecondContainer from "./SEOSecondContainer";
import SEOThirdContainer from "./SEOThirdContainer";
import SEOFourthConitainer from "./SEOFourthConitainer";
import SEO_Main_Page from "../../../../assets/SEO_Main_Page.jpg";
function SEO() {
  return (
    <div className="w-full">
      <div className="w-full fixed top-0  z-50 shadow-md">
        <Navbar />
      </div>
      <div
        className="bg-cover bg-right"
        style={{ backgroundImage: `url(${SEO_Main_Page})` }}
      >
        <SEOMainPage />
      </div>
      <div className="my-20">
        <SEOSecondContainer />
      </div>
      <div className="bg-[#0c2d57] py-10">
        <SEOThirdContainer />
      </div>
      <div className="my-20">
        <SEOFourthConitainer />
      </div>
      {/* <div>
        <ContactForm />
      </div> */}
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <Footer />
      </div>
    </div>
  );
}

export default SEO;
