import React from "react";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Footer/Footer";
import ContactForm from "../../../Home/ContactForm/ContactForm";
import BlockChainMainPage from "./BlockChainMainPage";
import BockchainSeondContainer from "./BockchainSeondContainer";
import BlockchainThirdContainer from "./BlockchainThirdContainer";

function Blockchain() {
  return (
    <div className="w-full">
      <div className="bg-blockchain bg-cover">
        <div className="w-full sticky top-0">
          <Navbar />
        </div>
        <BlockChainMainPage />
      </div>
      <div>
        <BockchainSeondContainer />
      </div>
      <div>
        <BlockchainThirdContainer />
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

export default Blockchain;
