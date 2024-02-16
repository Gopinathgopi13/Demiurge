import React from "react";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <div className="w-full">
      <div className="lg:w-[1280px] mx-auto px-4 py-20 lg:pb-20 text-white flex flex-col justify-center gap-y-14">
        <div className="lg:text-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          molestiae!
        </div>
        <div className="p-5 text-black flex justify-around items-center bg-gray-200">
          <div className="w-[80%] text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sit
            saepe ex ipsam qui, tempore quaerat perferendis impedit aliquid
            consequatur quia debitis iste explicabo sint. Hic dolorum facere
            optio autem ab magnam perferendis sunt voluptatum atque animi odit
            mollitia repudiandae nemo excepturi quasi soluta earum eaque, veniam
            dignissimos est nesciunt.
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
