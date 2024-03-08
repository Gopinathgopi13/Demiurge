import React from "react";
import PNG from '../../../../assets/PNG.png'

function PRSecondContainer() {
  return (
    <div
      className="max-w-[1280px] sm:flex sm:flex-col sm:justify-center  mx-auto px-4"
      // data-aos="fade-down"
      // data-aos-duration="1000"
      // data-aos-once="true"
    >
      <div className="md:text-4xl text-3xl font-semibold my-5 py-5 primaryColor">
        Driving Measurable Results in PR with Demiurge
      </div>
      <div className="grid lg:grid-cols-3 gap-10 my-10">
        <div className="flex flex-col h-52 gap-5">
          <div className=" space-y-3">
            <img src={PNG} className="w-[80px]" />
            <div className="text-xl font-semibold text-blue-500 ">
              Strategy Development{" "}
            </div>
          </div>
          <div className="">
            Conducting in-depth research and analysis to understand your target
            audience, industry landscape, and competitive positioning.
          </div>
        </div>

        <div className="flex flex-col h-52 gap-5">
          <div className="space-y-3">
            <img src={PNG} className="w-[80px]" />
            <div className="text-xl font-semibold text-blue-500 ">
              Targeted Audience Engagement
            </div>
          </div>
          <div className="">
            Utilizing sophisticated media monitoring and analytics tools to
            identify and understand audience behavior, preferences, and
            sentiment.
          </div>
        </div>

        <div className="flex flex-col h-52 gap-5">
          <div className=" space-y-3">
            <img src={PNG} className="w-[80px]" />
            <div className="text-xl font-semibold text-blue-500 ">
              Media Coverage and Visibility
            </div>
          </div>
          <div className="">
            Securing high-quality media placements in top-tier publications,
            websites, and broadcast outlets.
          </div>
        </div>

        <div className="flex flex-col h-52 gap-5">
          <div className=" space-y-3">
            <img src={PNG} className="w-[80px]" />
            <div className="text-xl font-semibold text-blue-500 ">
              Social Media Amplification:
            </div>
          </div>
          <div className="">
            Leveraging social media platforms to extend the reach and impact of
            PR campaigns.
          </div>
        </div>

        <div className="flex flex-col h-52 gap-5">
          <div className=" space-y-3">
            <img src={PNG} className="w-[80px]" />
            <div className="text-xl font-semibold text-blue-500 ">
              Performance Optimization
            </div>
          </div>
          <div className="">
            Implementing robust measurement and analytics frameworks to track
            and evaluate campaign performance against KPIs.
          </div>
        </div>
      </div>
    </div>
  );
}

export default PRSecondContainer;
