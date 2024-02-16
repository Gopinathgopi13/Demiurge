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
      <div className="bg-[url(https://ninjapromo.io/wp-content/themes/ninjapromo/assets/img/hero-section/hero-bg-front.jpg)]">
        <div className="w-full sticky top-0">
          <Navbar />
        </div>
        <SEOMainPage />
      </div>
      <div>
        <SEOSecondContainer />
      </div>
      <div>
        <SEOThirdContainer />
      </div>
      <div>
        <SEOFourthConitainer />
      </div>
      <div>
        <ContactForm />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default SEO;
