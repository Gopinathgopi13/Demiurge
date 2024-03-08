import React from "react";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Footer/Footer";
import ContactForm from "../../../Home/ContactForm/ContactForm";
import BlockChainMainPage from "./BlockChainMainPage";
import BockchainSeondContainer from "./BockchainSeondContainer";
import BlockchainThirdContainer from "./BlockchainThirdContainer";
import block from "../../../../assets/blockchain.jpg";
import BlockchainFourthContainer from "./BlockchainFourthContainer";
function Blockchain() {
  return (
    <div className="w-full">
      <div className="w-full fixed top-0 bg-[#0c2d57] shadow-md z-50">
        <Navbar />
      </div>
      <div className=" bg-[#0c2d57] ">
        <BlockChainMainPage />
      </div>
      <div>
        <BockchainSeondContainer />
      </div>
      <div className="bg-[#0c2d57] text-white">
        <BlockchainThirdContainer />
      </div>
      <div>
        <BlockchainFourthContainer />
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

export default Blockchain;
