import React from "react";
import "./SocialMedia.css";
import servicesGrid from "../../../../assets/SVG/services-grid.svg";
function MarketingService() {
  return (
    <div className="w-full">
      <div className="lg:w-[1280px] mx-auto my-12 px-4 pt-20 lg:pb-20 h-[90vh] text-black flex flex-col items-center gap-y-24">
        <div className="lg:text-6xl font-bold">
          Our Social Media{" "}
          <span className="backgroundColorGradient px-3">
            Marketing Services
          </span>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 justify-around w-full">
          <div className="px-5">
            <div className="text-4xl font-medium">
              At Demiurge, We Understand Social Media And We Live For Marketing
            </div>
          </div>
          <div className="px-5 text-2xl space-y-6">
            <div className="flex gap-4 ">
              <div>
                <img src={servicesGrid} className="h-14 w-14" alt="" />
              </div>
              <div>
                We know how to navigate the ever-changing landscape and develop
                creative solutions that achieve real results.
              </div>
            </div>
            <div className="flex gap-4 ">
              <div>
                <img src={servicesGrid} className="h-14 w-14" alt="" />
              </div>
              <div>
                We understand that digital marketing is about more than just
                posting a funny meme on Facebook or Twitter.
              </div>
            </div>
            <div className="flex gap-4 ">
              <div>
                <img src={servicesGrid} className="h-14 w-14" alt="" />
              </div>
              <div>
                It’s all about developing a relationship with your audience and
                creating a connection that goes beyond likes, comments, and
                shares.
              </div>
            </div>
            <div className="flex gap-4 ">
              <div>
                <img src={servicesGrid} className="h-14 w-14" alt="" />
              </div>
              <div>
                It also means having a strategy — one that’s based on your
                unique goals, target audience, and brand persona.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketingService;
