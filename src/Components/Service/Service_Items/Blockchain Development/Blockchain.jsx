import React from "react";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Footer/Footer";
import ContactForm from "../../../Home/ContactForm/ContactForm";
import BlockChainMainPage from "./BlockChainMainPage";
import BockchainSeondContainer from "./BockchainSeondContainer";
import BlockchainThirdContainer from "./BlockchainThirdContainer";
import block from "../../../../assets/blockchain.jpg";
function Blockchain() {
  return (
    <div className="w-full">
      <div className="">
        <div className="w-full sticky top-0">
          <Navbar />
        </div>
        <img
          src={block}
          className="absolute -z-30 w-full h-[100vh] top-0 left-0 border-none object-cover"
        />
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
