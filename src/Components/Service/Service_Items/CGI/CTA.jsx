import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  const handlePhoneNumberClick = ({ phoneNumber = 9627396283 }) => {
    console.log(phoneNumber);
    window.open(`tel:${phoneNumber}`);
  }
  return (
    <div className="w-full">
      <div className="max-w-[1280px] mx-auto px-4 py-20 lg:pb-20 flex flex-col justify-center gap-y-14">
        <div className="p-5 text-black flex flex-col items-center gap-5 rounded-lg  bg-gray-100">
          <div className="lg:text-4xl text-xl text-[#E48F45]">
            Ready to revolutionize your brand's image?
          </div>
          <div className="w-[80%] md:text-xl text-center">
            Unlock the power of imagination with CGI! Elevate your brand,
            captivate your audience, and bring your visions to life. Contact us
            today to discover how CGI can transform your next project into a
            stunning visual masterpiece!
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
};

export default CTA;
