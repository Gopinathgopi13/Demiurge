import React from "react";
import google from "../../../../assets/PM SVG/google.svg";
import googleShopping from "../../../../assets/PM SVG/shopping.svg";
import Meta from "../../../../assets/PM SVG/meta.svg";
import YouTube from "../../../../assets/PM SVG/youTube.svg";
import LinkedIn from "../../../../assets/PM SVG/linkedIn.svg";
import Bing from "../../../../assets/PM SVG/bing.svg";
import Twitter from "../../../../assets/PM SVG/twitter.svg";
import Amazon from "../../../../assets/PM SVG/amazon.svg";
import Sharechat from "../../../../assets/PM SVG/sharechat.svg";

function PPCThirdContainer() {
  return (
    <div className="lg:w-[1280px] sm:flex sm:flex-col sm:justify-center  mx-auto px-4">
      <div className="lg:text-6xl text-3xl font-medium my-5 py-5 primaryColor">
        Our Platforms
      </div>
      <div className="grid lg:grid-cols-3 my-10">
        <div
          className="flex flex-col h-52 gap-5 border-r-2 border-b-2 p-5"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="h-[40%] flex items-center gap-8">
            <img src={google} className="h-[40%]" />
            <div className="text-xl text-[#0c2d57]">Google Ads</div>
          </div>
          <div className=" ">
            We craft targeted ad campaigns on Google's expansive network to
            boost your visibility, drive website traffic, and increase
            conversions.
          </div>
        </div>

        <div
          className="flex flex-col h-52 gap-5 border-r-2 border-b-2 p-5"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="h-[40%] flex items-center gap-8 ">
            <img src={googleShopping} className="h-[40%]" />
            <div className="text-xl text-[#0c2d57]">Google Shopping Ads</div>
          </div>
          <div className=" ">
            Utilizing Google's shopping platform, we showcase your products to
            potential customers, driving qualified leads and maximizing sales.
          </div>
        </div>
        <div
          className="flex flex-col h-52 gap-5 border-b-2 p-5"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="h-[40%] flex items-center gap-8">
            <img src={Meta} className="h-[40%]" />
            <div className="text-xl text-[#0c2d57]">Meta Ads</div>
          </div>
          <div className=" ">
            With Meta Ads, we engage your audience across Facebook and
            Instagram, leveraging precise targeting to deliver impactful
            messages and drive results.
          </div>
        </div>

        <div
          className="flex flex-col h-52 gap-5 border-r-2 border-b-2 p-5"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="h-[40%] flex items-center gap-8">
            <img src={YouTube} className="h-[40%]" />
            <div className="text-xl text-[#0c2d57]">YouTube Ads</div>
          </div>
          <div className=" ">
            Harnessing the power of video, we create compelling YouTube ad
            campaigns to captivate audiences, drive brand awareness, and inspire
            action.
          </div>
        </div>

        <div
          className="flex flex-col h-52 gap-5 border-r-2 border-b-2 p-5"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="h-[40%] flex items-center gap-8">
            <img src={LinkedIn} className="h-[40%]" />
            <div className="text-xl text-[#0c2d57]">LinkedIn Ads</div>
          </div>
          <div className=" ">
            Targeting professionals on LinkedIn, we deliver tailored ads that
            resonate with your B2B audience, driving leads and fostering
            business growth.
          </div>
        </div>

        <div
          className="flex flex-col h-52 gap-5 border-b-2 p-5"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="h-[40%] flex items-center gap-8">
            <img src={Bing} className="h-[40%]" />
            <div className="text-xl text-[#0c2d57]">Bing Ads</div>
          </div>
          <div className=" ">
            Expand your reach beyond Google with Bing Ads, reaching a diverse
            audience and driving targeted traffic to your website or products.
          </div>
        </div>

        <div
          className="flex flex-col h-52 gap-5 border-r-2 p-5"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="h-[40%] flex items-center gap-8">
            <img src={Twitter} className="h-[40%]" />
            <div className="text-xl text-[#0c2d57]">Twitter Ads</div>
          </div>
          <div className=" ">
            Engage with your audience in real-time with Twitter Ads, delivering
            timely messages and promotions to drive engagement and boost brand
            visibility.
          </div>
        </div>

        <div
          className="flex flex-col h-52 gap-5 border-r-2 p-5"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="h-[40%] flex items-center gap-8">
            <img src={Amazon} className="h-[40%]" />
            <div className="text-xl text-[#0c2d57]">Amazon Ads</div>
          </div>
          <div className=" ">
            Tap into the massive e-commerce audience on Amazon with targeted ad
            campaigns, increasing product visibility and driving sales.
          </div>
        </div>

        <div
          className="flex flex-col h-52 gap-5 p-5"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="h-[40%] flex items-center gap-8">
            <img src={Sharechat} className="h-[40%]" />
            <div className="text-xl text-[#0c2d57]">Sharechat Ads</div>
          </div>
          <div className=" ">
            Reach India's diverse and engaged audience on ShareChat with
            targeted ads that drive brand awareness and engagement.
          </div>
        </div>
      </div>
    </div>
  );
}

export default PPCThirdContainer;
