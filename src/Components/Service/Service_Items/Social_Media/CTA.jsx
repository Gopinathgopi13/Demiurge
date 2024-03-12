import React from "react";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <div className="w-full">
      <div className="max-w-[1280px] mx-auto px-4 py-20 lg:pb-20 flex flex-col justify-center gap-y-14">
        <div className="p-5 text-black flex flex-col items-center gap-5 rounded-lg  bg-gray-100">
          <div className="lg:text-4xl text-xl text-[#E48F45]">
            Ignite your brand's digital essence with our SMM expertise!
          </div>
          <div className="w-[80%] md:text-xl text-center">
            Reach out today to uncover how our specialized social media
            strategies can transform your brand's digital footprint.
          </div>
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
}

export default CTA;
