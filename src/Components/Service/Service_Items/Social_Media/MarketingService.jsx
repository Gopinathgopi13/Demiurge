import React from "react";
import "./SocialMedia.css";
import servicesGrid from "../../../../assets/SVG/services-grid.svg";
function MarketingService() {
  return (
    <div className="w-full">
      <div className="lg:w-[1280px] mx-auto px-4 text-black flex flex-col items-center gap-y-24">
        <div className="md:text-6xl text-3xl  font-bold">
          Our Social Media{" "}
          <span className="backgroundColorGradient px-3">
            Marketing Services
          </span>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 justify-around w-full">
          <div className="px-5">
            <div className="md:text-3xl text-xl font-medium">
              At Demiurge, We Understand Social Media And We Live For Marketing
            </div>
          </div>
          <div className="px-5 text-xl space-y-6">
            <div className="flex gap-4 ">
              <div>
                <img src={servicesGrid} className="h-14 w-14" alt="" />
              </div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci non nesciunt beatae. Quasi, aliquid perferendis?
              </div>
            </div>
            <div className="flex gap-4 ">
              <div>
                <img src={servicesGrid} className="h-14 w-14" alt="" />
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                ullam aspernatur numquam voluptatibus, quas ex?
              </div>
            </div>
            <div className="flex gap-4 ">
              <div>
                <img src={servicesGrid} className="h-14 w-14" alt="" />
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                ullam aspernatur numquam voluptatibus, quas ex?
              </div>
            </div>
            <div className="flex gap-4 ">
              <div>
                <img src={servicesGrid} className="h-14 w-14" alt="" />
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                ullam aspernatur numquam voluptatibus, quas ex? 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketingService;
