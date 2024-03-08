import React from "react";
import { Link } from "react-router-dom";
import star from "../../../../assets/star.png";



function VideoMarketingFourthContainer() {
  return (
    <div className="max-w-[1280px] sm:flex sm:flex-col sm:justify-center gap-10  mx-auto my-20 px-4 py-4">
      <div className="md:text-4xl text-center text-3xl font-semibold primaryColor my-5">
        Our dynamic 5-Stage Journey in Video Marketing
      </div>
      <div className="space-y-10">
        {/* 1 */}
        <div className="lg:w-[60%] mx-auto space-y-5">
          <img src={star} className="w-28 mx-auto" alt="" />
          <div className="font-semibold text-[#0c2d57] text-2xl text-center">
            Strategic Vision
          </div>
          <div className="px-10 text-center">
            Begin by defining objectives, target audience, and key messaging.
            Develop a comprehensive video marketing strategy that aligns with
            overall marketing goals.
          </div>
        </div>
        {/* 2 */}
        <div className="lg:w-[60%] mx-auto space-y-5">
          <img src={star} className="w-28 mx-auto" alt="" />
          <div className="font-semibold text-[#0c2d57] text-2xl text-center">
            Content Creation
          </div>
          <div className="px-10 text-center">
            Create engaging video content that resonates with audience. This
            could include product demonstrations, customer testimonials,
            educational videos, or behind-the-scenes footage.
          </div>
        </div>
        {/* 3 */}
        <div className="lg:w-[60%] mx-auto space-y-5">
          <img src={star} className="w-28 mx-auto" alt="" />
          <div className="font-semibold text-[#0c2d57] text-2xl text-center">
            Distribution
          </div>
          <div className="px-10 text-center">
            Determine the best channels and platforms to distribute the video
            content. This may include your website, social media platforms,
            email newsletters, or paid advertising channels.
          </div>
        </div>
        {/* 4 */}
        <div className="lg:w-[60%] mx-auto space-y-5">
          <img src={star} className="w-28 mx-auto" alt="" />
          <div className="font-semibold text-[#0c2d57] text-2xl text-center">
            Optimization
          </div>
          <div className="px-10 text-center">
            Optimize videos for search engines and audience engagement. Use
            relevant keywords, captivating thumbnails, and compelling titles and
            descriptions to maximize visibility and engagement.
          </div>
        </div>
        {/* 5 */}
        <div className="lg:w-[60%] mx-auto space-y-5">
          <img src={star} className="w-28 mx-auto" alt="" />
          <div className="font-semibold text-[#0c2d57] text-2xl text-center">
            Performance Measurement
          </div>
          <div className="px-10 text-center">
            Track the performance of video content using analytics tools.
            Monitor key metrics such as views, engagement, conversions, and ROI
            to measure the effectiveness of video marketing efforts.
          </div>
        </div>
        {/* <div></div> */}
      </div>
    </div>
  );
}

export default VideoMarketingFourthContainer;
