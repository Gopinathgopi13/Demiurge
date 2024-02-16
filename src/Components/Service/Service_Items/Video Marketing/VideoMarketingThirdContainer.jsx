import React from "react";
import VideoMarketing from "../../../../assets/Video-Marketing.mp4";
function VideoMarketingThirdContainer() {
  return (
    <div className="lg:w-[1280px] sm:flex sm:flex-col sm:justify-center gap-10  mx-auto my-20 px-4 py-4">
      <div className="lg:text-7xl font-medium my-5 text-white">
        Lorem ipsum dolor, consectetur.
      </div>
      <div className="grid lg:grid-cols-2 gap-5">
        <div>
          <video autoPlay loop controls>
            <source src={VideoMarketing} />
          </video>
        </div>
        <div>
          <video autoPlay loop controls>
            <source src={VideoMarketing} />
          </video>
        </div>
        <div>
          <video autoPlay loop controls>
            <source src={VideoMarketing} />
          </video>
        </div>
        <div>
          <video autoPlay loop controls>
            <source src={VideoMarketing} />
          </video>
        </div>
        <div>
          <video autoPlay loop controls>
            <source src={VideoMarketing} />
          </video>
        </div>
        <div>
          <video autoPlay loop muted controls>
            <source src={VideoMarketing} />
          </video>
        </div>
      </div>
    </div>
  );
}

export default VideoMarketingThirdContainer;
