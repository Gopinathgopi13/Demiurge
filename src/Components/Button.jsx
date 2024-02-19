import React from "react";
import { PopupButton } from "react-calendly";

const Button = () => {
  return (
    <PopupButton
      className="text-white  px-6 py-2 hover:bg-blue-700 border-2 hover:border-none"
      url="https://calendly.com/gopinathkathirvel13"
      rootElement={document.getElementById("root")}
      text="Schedule a Call"
    />
  );
};

export default Button;
