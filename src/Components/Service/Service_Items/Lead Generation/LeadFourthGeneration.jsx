import React from "react";
import star from "../../../../assets/star.png";
import Goal from '../../../../assets/Lead/Goal Setting.png'
import Analysis from '../../../../assets/Lead/Analysis.png'
import design from '../../../../assets/Lead/Design & Development.png'
import execution from '../../../../assets/Lead/execution.png'
import reporting from '../../../../assets/Lead/Reporting.png'
const LeadFourthGeneration = () => {
  return (
    <div className="max-w-[1280px] sm:flex sm:flex-col sm:justify-center gap-10  mx-auto my-20 px-4 py-4">
      <div className="md:text-4xl text-center text-3xl font-semibold primaryColor my-5">
        Our Approach to Lead Generation
      </div>
      <div className="space-y-10">
        {/* 1 */}
        <div className="lg:w-[60%] mx-auto space-y-5">
          <img src={Goal} className="w-28 mx-auto" alt="" />
          <div className="font-semibold text-[#0c2d57] text-2xl text-center">
            Goal Setting
          </div>
          <div className="px-10 text-center">
            We initiate by thoroughly comprehending your objectives. Through
            attentive listening and learning about your brand, we meticulously
            craft a customized plan that perfectly aligns with your goals. With
            a clear goal in mind, our team is committed to delivering precisely
            what you need.
          </div>
        </div>
        {/* 2 */}
        <div className="lg:w-[60%] mx-auto space-y-5">
          <img src={Analysis} className="w-28 mx-auto" alt="" />
          <div className="font-semibold text-[#0c2d57] text-2xl text-center">
            Research & Analysis
          </div>
          <div className="px-10 text-center">
            Following that, we conduct comprehensive research and analysis to
            set your strategy up for success. Drawing on data-driven insights
            and the latest trends, we make informed decisions to ensure your
            campaigns are positioned to attract prospective customers and
            clients effectively.
          </div>
        </div>
        {/* 3 */}
        <div className="lg:w-[60%] mx-auto space-y-5">
          <img src={design} className="w-28 mx-auto" alt="" />
          <div className="font-semibold text-[#0c2d57] text-2xl text-center">
            Design & Development
          </div>
          <div className="px-10 text-center">
            Now, it's time to take action. With our experience, creativity, and
            expertise, we craft a lead-generation plan designed to deliver real
            results and drive engagement. From developing compelling content to
            harnessing the power of email marketing, we ensure that your
            strategy is set in motion effectively.
          </div>
        </div>
        {/* 4 */}
        <div className="lg:w-[60%] mx-auto space-y-5">
          <img src={execution} className="w-28 mx-auto" alt="" />
          <div className="font-semibold text-[#0c2d57] text-2xl text-center">
            Execution & Optimization
          </div>
          <div className="px-10 text-center">
            From there, we lead the charge and propel your lead acquisition plan
            forward. Remaining vigilant of the latest developments, we
            rigorously test and measure results, ensuring adaptability as
            needed. With ongoing optimization and adjustments, rest assured,
            we'll deliver the results you seek.
          </div>
        </div>
        {/* 5 */}
        <div className="lg:w-[60%] mx-auto space-y-5">
          <img src={reporting} className="w-28 mx-auto" alt="" />
          <div className="font-semibold text-[#0c2d57] text-2xl text-center">
            Reporting & Insights
          </div>
          <div className="px-10 text-center">
            In the end, we provide you with the insights essential for making
            informed decisions. By meticulously tracking performance metrics and
            delivering detailed reports on your conversion rate, you'll have a
            clear understanding of our progress. With comprehensive data,
            relevant metrics, and actionable insights, you'll have everything
            you need to keep your lead-generation strategy on the right path.
          </div>
        </div>
        {/* <div></div> */}
      </div>
    </div>
  );
};

export default LeadFourthGeneration;
