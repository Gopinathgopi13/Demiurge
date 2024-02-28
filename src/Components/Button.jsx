import React from "react";
import { PopupButton } from "react-calendly";

const Button = () => {
  return (
    <PopupButton
      className="text-[#E48F45]  px-6 py-2 hover:bg-[#E48F45] hover:text-white border-2 border-[#E48F45] hover:border-none"
      url="https://calendly.com/philomenjohn/digital-marketing-collab"
      rootElement={document.getElementById("root")}
      text="Schedule a Call"
    />
  );
};

export default Button;
