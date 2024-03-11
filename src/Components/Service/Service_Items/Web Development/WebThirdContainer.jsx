import React from "react";
import web3 from "../../../../assets/web3.jpg";
import web4 from "../../../../assets/web4.jpg";
function WebThirdContainer() {
  return (
    <div className="max-w-[1280px] mx-auto space-y-10 py-20 sm:px-5">
      <div className="md:text-4xl font-semibold primaryColor text-3xl">Why partner with us?</div>
      <div>
        <div class="grid sm:grid-rows-3 sm:grid-flow-col gap-4">
          <div class="sm:row-span-3 relative rounded-xl overflow-hidden">
            <div className="h-full">
              <img src={web3} className="h-full" alt="" />
            </div>
            <div className="absolute top-32 left-16 text-white">
              <span className="text-6xl font-bold block">1+</span>
              <span className="text-4xl font-semibold block">
                Year in Business
              </span>
            </div>
          </div>
          <div class="sm:row-span-1 bg-purple-700 rounded-xl overflow-hidden p-3">
            <div>
              <span className="text-3xl font-bold block">1 Week</span>
              <span className="text-xl font-semibold block">
                for a typical project kickoff
              </span>
            </div>
          </div>
          <div class="sm:row-span-2 bg-blue-500 rounded-xl overflow-hidden p-10">
            <div>
              <span className="text-5xl font-bold block">50%</span>
              <span className="text-xl font-semibold block">
                of our customers file into long-term engagement
              </span>
            </div>
          </div>
          <div class="sm:row-span-3 relative rounded-xl overflow-hidden  h-[300px] ">
            <div className="h-full">
              <img src={web4} className="h-full" alt="" />
            </div>
            <div className="absolute top-20 left-16 text-black">
              <span className="text-6xl font-bold block">100+</span>
              <span className="text-3xl font-semibold block">
                Successfully delivered projects
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebThirdContainer;
