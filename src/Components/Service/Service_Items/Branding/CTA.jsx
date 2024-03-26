import React from "react";
import { Link } from "react-router-dom";

function CTA() {
  const handlePhoneNumberClick = ({ phoneNumber = 9627396283 }) => {
    console.log(phoneNumber);
    window.open(`tel:${phoneNumber}`);
  }
  return (
    <div className="w-full">
      <div className="max-w-[1280px] mx-auto px-4 py-20 lg:pb-20 flex flex-col justify-center gap-y-14">
        <div className="p-5 text-black flex flex-col items-center gap-5 rounded-lg  bg-gray-100">
          <div className="lg:text-4xl font-medium text-xl text-center text-[#E48F45]">
            Take the first step towards brand excellence. Let's collaborate to
            craft a captivating brand identity that sets you apart.
          </div>
          <div className="w-[90%] md:text-xl text-center">
            At Demiurge, we understand the power of branding to elevate your
            business to new heights. From defining your brand strategy to
            designing your visual identity, we're here to guide you every step
            of the way.
          </div>
          <div>
            <Link onClick={handlePhoneNumberClick}>
              <div className="px-10 w-auto py-3 rounded-sm text-xl text-[#E48F45] bg-[#0c2d57] flex items-center gap-4 cursor-pointer">
                <Link >Book A Call Now</Link>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTA;
