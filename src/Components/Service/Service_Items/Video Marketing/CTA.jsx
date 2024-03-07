import React from "react";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <div className="w-full">
      <div
        className="lg:w-[1280px] mx-auto px-4 py-20 lg:pb-20 flex flex-col justify-center gap-y-14"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="p-5 text-black flex flex-col items-center gap-5 rounded-lg  bg-gray-100">
          <div className="lg:text-4xl font-medium text-xl text-center text-[#E48F45]">
            Don't settle for ordinary – seize the opportunity to captivate your
            audience and lead your industry with the power of video marketing.
          </div>
          <div className="w-[90%] md:text-xl text-center">
            Transform your marketing strategy with the undeniable impact of
            video. Reach out to us today and let's explore how video marketing
            can revolutionize your brand's presence, engage your audience, and
            drive real results. Get in touch now and let's create something
            extraordinary together!
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
