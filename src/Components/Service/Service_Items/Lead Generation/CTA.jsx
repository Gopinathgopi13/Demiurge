import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="w-full">
      <div
        className="max-w-[1280px] mx-auto px-4 py-20 lg:pb-20 flex flex-col justify-center gap-y-14"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="p-5 text-black flex flex-col items-center gap-5 rounded-lg  bg-gray-100">
          <div className="lg:text-4xl font-medium text-center text-xl text-[#E48F45]">
            Revamp Your Lead Generation Strategy and Propel Your Business to New
            Heights with Our Cutting-Edge Methods and Unique Insights.
          </div>
          {/* <div className="w-[80%] md:text-xl text-center">
            Don't miss out on the opportunity to build meaningful relationships
            and unlock the full potential of your community. Get in touch with
            us now to get started!Our team of experts will work closely with you
            to develop a tailored strategy that fosters engagement, drives
            loyalty, and amplifies your brand's presence.
          </div> */}
          <div>
            <Link to="/contactForm">
              <div className="px-10 w-auto py-3 rounded-sm text-xl text-[#E48F45] bg-[#0c2d57] flex items-center gap-4 cursor-pointer">
                <Link to="/contact">Book A Call Now</Link>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
