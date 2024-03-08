import React from "react";
import { Link } from "react-router-dom";

function VideoMarketingMainPage() {
  return (
    <div className="w-full">
      <div
        className="max-w-[1280px] mx-auto px-4 lg:pb-20 h-[90vh] text-white flex flex-col justify-center items-start gap-y-14"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        {/* <div className="text-lg">Video Marketing</div> */}
        <div className="md:text-6xl text-3xl lg:w-[90%] font-extrabold leading-snug primaryColor ">
          Watch Your Brand Shine with Video Marketing for All
        </div>
        <div className="lg:w-[60%] lg:text-xl text-justify">
          Video marketing is essential for brand success in 2024 and years to
          come. Engage your audience, communicate your message effectively, and
          elevate your brand's presence with video.
        </div>
        <Link
          to="/contactForm"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <div className="lg:px-10 px-10 py-5 lg:text-xl font-semibold border-2 flex justify-center items-center primaryColor cursor-pointer">
            <Link to="/contact" id="shine">
              Get in touch
            </Link>
            {/* <FaArrowRight size={20} className="primaryColor" /> */}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default VideoMarketingMainPage;
