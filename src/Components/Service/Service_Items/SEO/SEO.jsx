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
      <div className="w-full sticky bg-[#0c2d57] top-0  z-50 shadow-md">
        <Navbar />
      </div>
      <div className="bg-[url('https://img.freepik.com/free-photo/futurism-perspective-digital-nomads-lifestyle_23-2151252437.jpg?t=st=1711457696~exp=1711461296~hmac=2fb09862ec4e64b446e379823f036f9f98bce9f030469f6b347fc92436b7afc7&w=1380')] bg-cover bg-center">
        <SEOMainPage />
      </div>
      <div className="my-10">
        <SEOSecondContainer />
      </div>
      <div className="bg-[#0c2d57] py-10">
        <SEOThirdContainer />
      </div>
      <div className="py-10">
        <SEOFourthConitainer />
      </div>
      {/* <div>
        <ContactForm />
      </div> */}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default SEO;
