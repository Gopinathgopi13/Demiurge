import React from "react";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Footer/Footer";
import ContactForm from "../../../Home/ContactForm/ContactForm";
import ARVRMainPage from "./ARVRMainPage";
import ARVRSecondContainer from "./ARVRSecondContainer";
import ARThirdContainer from "./ARThirdContainer";
import ARVRi from "../../../../assets/AR-VR.jpg";
function ARVR() {
  return (
    <div className="w-full">
      <div className="">
        <div className="w-full sticky top-0">
          <Navbar />
        </div>
        <img
          src={ARVRi}
          className="absolute -z-30 w-full h-[100vh] top-0 left-0 border-none object-cover"
        />
        <ARVRMainPage />
      </div>
      <div className="my-20">
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
