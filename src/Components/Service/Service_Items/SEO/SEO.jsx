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
      <div className="bg-[url('https://img.freepik.com/free-photo/glowing-blue-circuit-board-futuristic-technology-design-generated-by-ai_188544-31057.jpg?t=st=1711450199~exp=1711453799~hmac=508b6ce9afb149c6fe96c865f18eed2196c933d406b06543462031b5a7e4a2a7&w=1380')] bg-cover bg-center">
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
