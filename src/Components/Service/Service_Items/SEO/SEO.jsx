import React from "react";
import SEOMainPage from "./SEOMainPage";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Footer/Footer";
import ContactForm from "../../../Home/ContactForm/ContactForm";
import SEOSecondContainer from "./SEOSecondContainer";
import SEOThirdContainer from "./SEOThirdContainer";
import SEOFourthConitainer from "./SEOFourthConitainer";

function SEO() {
  return (
    <div className="w-full">
      <div className="w-full sticky top-0 bg-[#0c2d57] z-50 shadow-md">
        <Navbar />
      </div>
      <div className="bg-[#0c2d57]">
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
