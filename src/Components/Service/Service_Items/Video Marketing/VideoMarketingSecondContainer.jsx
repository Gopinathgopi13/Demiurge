import React from "react";
import SearchEO from "../../../../assets/SVG/ppc-management.svg";

function VideoMarketingSecondContainer() {
  return (
    <div className="max-w-[1280px] sm:flex sm:flex-col sm:justify-center gap-20  mx-auto px-4 py-4">
      <div className="lg:text-4xl font-semibold lg:w-[90%] my-5 primaryColor">
        Experience the power of Video Marketing to propel your Reach to new
        heights
      </div>
      <div className="grid sm:grid-cols-2 mx-auto">
        <div className="mx-auto">
          <img src={SearchEO} className="md:w-[95%] h-[95%]" alt="" />
        </div>
        <div className="flex flex-col justify-around text-justify px-2 gap-5">
          <p className="leading-7">
            Video marketing isn't just about boosting engagement metrics; it's
            also about showcasing brand personality and driving innovation in a
            competitive market. Through creative storytelling and authentic
            content, brands can differentiate themselves from competitors,
            humanize their message, and build trust with their audience.
          </p>
          <p className="leading-7">
            Whether it's through product demonstrations, customer testimonials,
            or behind-the-scenes footage, video marketing allows brands to
            connect with their audience on a deeper level, driving brand loyalty
            and sustainable growth in today's ever-evolving digital landscape.
            With the widespread use of social media and video-sharing platforms,
            video marketing presents unparalleled opportunities for brands to
            expand their reach, foster authenticity, and ultimately, drive
            meaningful engagement that translates into long-term success.
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoMarketingSecondContainer;
