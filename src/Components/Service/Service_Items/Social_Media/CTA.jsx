import React from "react";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <div className="w-full">
      <div className="lg:w-[1280px] mx-auto px-4 py-20 lg:pb-20 text-white flex flex-col justify-center gap-y-14">
        <div className="lg:text-5xl">
          Our social media marketing service will help you kickstart your social
          media presence, develop a strategy, create content, and engage️ with
          your brand fans.
        </div>
        <div className="p-5 text-black flex justify-around items-center bg-gray-200">
          <div className="w-[80%] text-xl">
            We'll also help you track your progress and measure your success so
            you can see exactly what's working and what isn't. We are
            comfortable working with all major platforms such as Facebook,
            Instagram, Twitter, and Snapchat.
          </div>
          <div>
            <Link to="/contactForm">
              <div className="px-4 py-3 rounded-sm text-xl text-white bg-blue-700 flex items-center gap-4 cursor-pointer">
                <Link to="/contact">Start now</Link>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTA;
