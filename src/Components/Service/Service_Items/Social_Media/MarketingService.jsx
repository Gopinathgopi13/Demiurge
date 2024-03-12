import React from "react";
import "./SocialMedia.css";
import servicesGrid from "../../../../assets/SVG/services-grid.svg";
function MarketingService() {
  return (
    <div className="w-full">
      <div className="max-w-[1280px] mx-auto px-4 text-black flex flex-col items-center gap-y-10">
        <div className="md:text-5xl text-3xl font-bold primaryColor">
          Our Social Media{" "}
          <span className="bg-[#0c2d57] px-3">Marketing Services</span>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-3 justify-around w-full">
          <div className="px-5">
            <div className="md:text-3xl text-lg font-medium">
              We're experts in social media, driven by a passion for marketing.
              Let's elevate your brand's online presence together.
            </div>
          </div>
          <div className="px-5 text-md space-y-6">
            <div className="flex gap-4 ">
              <div>
                <img src={servicesGrid} className="h-14 w-14" alt="" />
              </div>
              <div>
                From viral-worthy videos to scroll-stopping graphics, our
                content speaks louder than words and leaves your audience
                craving more.
              </div>
            </div>
            <div className="flex gap-4 ">
              <div>
                <img src={servicesGrid} className="h-14 w-14" alt="" />
              </div>
              <div>
                We're not just social media managers—we're community architects.
                With a sprinkle of wit and a dash of charm, we turn followers
                into loyal fans.
              </div>
            </div>
            <div className="flex gap-4 ">
              <div>
                <img src={servicesGrid} className="h-14 w-14" alt="" />
              </div>
              <div>
                Ready to make an entrance? Our ads are designed to command
                attention, drive action, and make your brand the talk of the
                town.
              </div>
            </div>
            <div className="flex gap-4 ">
              <div>
                <img src={servicesGrid} className="h-14 w-14" alt="" />
              </div>
              <div>
                Numbers aren't just numbers—they're stories waiting to be told.
                Our analytics unravel the mysteries of social media, providing
                insights that guide our journey to digital greatness.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketingService;
