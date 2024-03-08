import React from "react";
import VideoMarketing from "../../../../assets/Video-Marketing.mp4";
function VideoMarketingThirdContainer() {
  return (
    <div className="max-w-[1280px] sm:flex sm:flex-col sm:justify-center gap-10  mx-auto my-20 px-4 py-4">
      <div className="md:text-6xl text-3xl font-medium my-5 text-white">
        Some of our Video Marketing Examples
      </div>
      <div className="grid lg:grid-cols-2 gap-5">
        <div data-aos="fade-down" data-aos-duration="1000" data-aos-once="true">
          <video autoPlay loop controls>
            <source src={VideoMarketing} />
          </video>
        </div>
        <div data-aos="fade-down" data-aos-duration="1000" data-aos-once="true">
          <video autoPlay loop controls>
            <source src={VideoMarketing} />
          </video>
        </div>
        <div data-aos="fade-down" data-aos-duration="1000" data-aos-once="true">
          <video autoPlay loop controls>
            <source src={VideoMarketing} />
          </video>
        </div>
        <div data-aos="fade-down" data-aos-duration="1000" data-aos-once="true">
          <video autoPlay loop controls>
            <source src={VideoMarketing} />
          </video>
        </div>
        <div data-aos="fade-down" data-aos-duration="1000" data-aos-once="true">
          <video autoPlay loop controls>
            <source src={VideoMarketing} />
          </video>
        </div>
        <div data-aos="fade-down" data-aos-duration="1000" data-aos-once="true">
          <video autoPlay loop muted controls>
            <source src={VideoMarketing} />
          </video>
        </div>
      </div>
    </div>
  );
}

export default VideoMarketingThirdContainer;
