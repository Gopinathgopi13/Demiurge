import React from "react";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Footer/Footer";
import ContactForm from "../../../Home/ContactForm/ContactForm";
import BlockChainMainPage from "./BlockChainMainPage";
import BockchainSeondContainer from "./BockchainSeondContainer";
import BlockchainThirdContainer from "./BlockchainThirdContainer";
import block from "../../../../assets/blockchain.jpg";
import BlockchainFourthContainer from "./BlockchainFourthContainer";
import CTA from "./CTA";
import FAQ from "./FAQ";
function Blockchain() {
  return (
    <div className="w-full">
      <div className="w-full sticky top-0 bg-[#0c2d57] shadow-md z-50">
        <Navbar />
      </div>
      <div 
      className="bg-[url('https://img.freepik.com/premium-photo/group-cubes-with-glowing-lights_917856-4389.jpg?w=1380')] bg-cover bg-center"
      >
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
        <FAQ />
      </div>
      <div className="bg-[#0c2d57]">
        <CTA />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Blockchain;
