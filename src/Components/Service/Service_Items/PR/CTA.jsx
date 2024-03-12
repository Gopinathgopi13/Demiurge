import React from "react";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <div className="w-full">
      <div
        className="max-w-[1280px] mx-auto px-4 py-20 lg:pb-20 flex flex-col justify-center gap-y-14"
      
      >
        <div className="p-5 text-black flex flex-col items-center gap-5 rounded-lg  bg-gray-100">
          <div className="lg:text-4xl font-medium text-center text-xl text-[#E48F45]">
            Your brand's narrative is an ongoing conversation, whether you're
            actively shaping it or not. Why leave it to chance? At Demiurge, we
            understand the importance of taking control of your story
          </div>
          <div className="w-[80%] md:text-xl text-center">
            Through our strategic PR services, we empower you to lead the
            conversation. Leveraging our team's extensive background in the
            media industry, we've cultivated invaluable connections to ensure
            your brand's narrative is not only heard but also resonates
            positively. Let us guide you in shaping perceptions, safeguarding
            your brand's reputation, and ultimately, driving your success.
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
