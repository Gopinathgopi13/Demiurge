import React from "react";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Footer/Footer";
import ContactForm from "../../../Home/ContactForm/ContactForm";
import ARVRMainPage from "./ARVRMainPage";
import ARVRSecondContainer from "./ARVRSecondContainer";
import ARThirdContainer from "./ARThirdContainer";

function ARVR() {
  return (
    <div className="w-full">
      <div className="bg-ARVR bg-cover">
        <div className="w-full sticky top-0">
          <Navbar />
        </div>
        <ARVRMainPage />
      </div>
      <div>
        <ARVRSecondContainer />
      </div>
      <div className="border-2">
        <ARThirdContainer />
      </div>
      {/* <div>
      <WebFourthContainer />
    </div> */}
      <div>
        <ContactForm />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default ARVR;
