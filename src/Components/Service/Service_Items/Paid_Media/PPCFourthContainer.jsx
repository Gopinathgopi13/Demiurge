import React from "react";
import star from "../../../../assets/star.png";
import Objective from "../../../../assets/Performance_Marketing/Objective.png";
import Audience from "../../../../assets/Performance_Marketing/Audience.png";
import Trends from "../../../../assets/Performance_Marketing/Trends.png";
import Competition from "../../../../assets/Performance_Marketing/Competition.png";
import Planning from "../../../../assets/Performance_Marketing/Planning.png";
import Execution from "../../../../assets/Performance_Marketing/Execution.png";
import Analysis from "../../../../assets/Performance_Marketing/Analysis.png";
import Improvement from "../../../../assets/Performance_Marketing/Improvement.png";

const PPCFourthContainer = () => {
  return (
    <div className="max-w-[1280px] sm:flex sm:flex-col sm:justify-center gap-10  mx-auto px-4 py-5">
      <div className="md:text-4xl text-center text-3xl font-semibold primaryColor my-5">
        How Our PPC Management Company Drives ROI
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
        {/* 1 */}
        <div className="mx-auto space-y-5">
          <img src={Objective} className="w-20 mx-auto" alt="" />
          <div className="font-semibold text-[#0c2d57] text-2xl text-center">
            Objective
          </div>
          <div className="px-10 text-center">
            In this stage, we work closely with you to understand your specific
            goals and objectives. Whether it's increasing brand awareness,
            driving sales, or generating leads, we ensure that our strategies
            are aligned with your desired outcomes.
          </div>
        </div>
        {/* 2 */}
        <div className="mx-auto space-y-5">
          <img src={Audience} className="w-20 mx-auto" alt="" />
          <div className="font-semibold text-[#0c2d57] text-2xl text-center">
            Audience
          </div>
          <div className="px-10 text-center">
            We conduct in-depth analysis to identify and understand your target
            audience. This involves researching demographics, interests,
            behaviors, and preferences to ensure that our campaigns effectively
            resonate with your audience.
          </div>
        </div>
        {/* 3 */}
        <div className="mx-auto space-y-5">
          <img src={Trends} className="w-20 mx-auto" alt="" />
          <div className="font-semibold text-[#0c2d57] text-2xl text-center">
            Trends
          </div>
          <div className="px-10 text-center">
            We analyze current market trends and industry insights to stay
            informed about the latest developments. By understanding market
            trends, we can capitalize on emerging opportunities and adapt our
            strategies accordingly.
          </div>
        </div>
        {/* 4 */}
        <div className="mx-auto space-y-5">
          <img src={Competition} className="w-20 mx-auto" alt="" />
          <div className="font-semibold text-[#0c2d57] text-2xl text-center">
            Competition
          </div>
          <div className="px-10 text-center">
            We conduct a thorough analysis of your competitors to understand
            their strategies, strengths, and weaknesses. This allows us to
            differentiate your brand and develop unique selling propositions
            that resonate with your audience.
          </div>
        </div>
        {/* 5 */}
        <div className="mx-auto space-y-5">
          <img src={Planning} className="w-20 mx-auto" alt="" />
          <div className="font-semibold text-[#0c2d57] text-2xl text-center">
            Planning
          </div>
          <div className="px-10 text-center">
            Based on our research and analysis, we develop a comprehensive plan
            tailored to your specific goals and objectives. This includes
            outlining the strategies, tactics, and timelines needed to achieve
            success.
          </div>
        </div>
        {/* 6 */}
        <div className="mx-auto space-y-5">
          <img src={Execution} className="w-20 mx-auto" alt="" />
          <div className="font-semibold text-[#0c2d57] text-2xl text-center">
            Execution
          </div>
          <div className="px-10 text-center">
            Once the plan is finalized, we execute the campaigns across various
            channels, such as digital advertising, social media, and email
            marketing. Our team ensures that all elements are implemented
            effectively and efficiently.
          </div>
        </div>
        {/* 7 */}
        <div className="mx-auto space-y-5">
          <img src={Analysis} className="w-20 mx-auto" alt="" />
          <div className="font-semibold text-[#0c2d57] text-2xl text-center">
            Analysis
          </div>
          <div className="px-10 text-center">
            Throughout the campaign, we continuously monitor performance and
            gather data on key metrics such as engagement, conversion rates, and
            return on investment (ROI). This allows us to evaluate the
            effectiveness of our strategies and make data-driven decisions.
          </div>
        </div>
        {/* 8 */}
        <div className="mx-auto space-y-5">
          <img src={Improvement} className="w-20 mx-auto" alt="" />
          <div className="font-semibold text-[#0c2d57] text-2xl text-center">
            Improvement
          </div>
          <div className="px-10 text-center">
            Based on the insights gathered from the analysis, we refine and
            optimize our strategies to improve performance and achieve better
            results. This iterative process ensures that we are constantly
            adapting and improving to maximize success.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PPCFourthContainer;
