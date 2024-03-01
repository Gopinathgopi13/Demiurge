import React from "react";
import { PopupButton } from "react-calendly";

const Button = () => {
  return (
    <PopupButton
      className="text-[#FF8400]  px-6 py-2 hover:bg-[#FF8400] hover:text-white border-2 border-[#FF8400] hover:border-none"
      url="https://calendly.com/philomenjohn/digital-marketing-collab"
      rootElement={document.getElementById("root")}
      text="Schedule a Call"
    />
  );
};

export default Button;
