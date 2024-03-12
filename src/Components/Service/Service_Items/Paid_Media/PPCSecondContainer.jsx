import React from "react";
import SearchEO from "../../../../assets/Performance_Marketing/Performance MArketing.jpg";
function PPCSecondContainer() {
  return (
    <div className="max-w-[1280px] sm:flex sm:flex-col sm:justify-center gap-10  mx-auto px-4 py-4">
      <div className="lg:text-5xl text-3xl font-medium my-3 primaryColor">
        Our Performance Marketing Services:
      </div>
      <div className="grid sm:grid-cols-2 mx-auto">
        <div className="mx-auto">
          <img src={SearchEO} className="w-full h-full" alt="" />
        </div>
        <div className="flex flex-col justify-around px-3 gap-5">
          <p className="text-xl ">
            Our approach is rooted in data and analytics. We dive deep into your
            audience insights, market trends, and competitor analysis to
            identify the most lucrative opportunities. Then, armed with this
            knowledge, we craft tailored strategies to reach your goals
            efficiently and effectively.With performance marketing, you can
            finally say goodbye to wasted ad spend and guesswork.
          </p>
          <ul className="space-y-4 list-outside list-disc px-5 marker:text-[#ff8400]">
            <li className="text-lg font-popins">
              Pay-Per-Click (PPC) Advertising
            </li>
            <li className="text-lg font-popins">Social Media Advertising</li>
            <li className="text-lg font-popins">
              Conversion Rate Optimization (CRO)
            </li>
            <li className="text-lg font-popins">Email Marketing</li>
            <li className="text-lg font-popins">Content Marketing</li>
            <li className="text-lg font-popins">Affiliate Marketing</li>
            <li className="text-lg font-popins">
              Data Analytics and Reporting
            </li>
            <li className="text-lg font-popins">Landing Page Optimization</li>
            <li className="text-lg font-popins">Remarketing and Retargeting</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PPCSecondContainer;
