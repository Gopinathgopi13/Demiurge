import React from "react";
import { Link } from "react-router-dom";

function BlockChainMainPage() {
  
  const handleEmailButtonClick = () => {
    const emailAddress = "gopinathkathirvel13@gmail.com";
    const mailtoLink = `mailto:${emailAddress}`;
    window.location.href = mailtoLink;
  };


  return (
    <div className="w-full">
      <div className="max-w-[1280px] mx-auto px-4 h-[100vh] text-white flex flex-col justify-center items-start gap-y-14">
        {/* <div className="text-lg">Video Marketing</div> */}
        <div className="md:text-5xl text-4xl md:w-[90%] font-extrabold leading-snug primaryColor">
          Forging the Future: Crafting Your Path in Blockchain Development
        </div>
        <div className=" text-xl md:w-[60%] leading-snug">
          Discover how to navigate through the complexities of decentralized
          technologies, unlock innovative solutions, and shape the future of
          finance, governance, and beyond.
        </div>
        <Link onClick={handleEmailButtonClick}>
          <div className="lg:px-10 px-10 py-3 lg:text-xl font-semibold border-2 flex justify-center items-center primaryColor cursor-pointer">
            <Link to="/contact" id="shine">
              Get in touch
            </Link>
            {/* <FaArrowRight size={20} className="primaryColor" /> */}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default BlockChainMainPage;
