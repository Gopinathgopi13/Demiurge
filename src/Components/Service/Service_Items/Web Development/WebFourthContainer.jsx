import React from "react";
import star from "../../../../assets/star.png";
import w1 from '../../../../assets/Website/w1.png'
import w2 from '../../../../assets/Website/w2.png'
import w3 from '../../../../assets/Website/w3.png'
import w4 from '../../../../assets/Website/w4.png'
import w5 from '../../../../assets/Website/w5.png'
import w6 from '../../../../assets/Website/w6.png'
function WebFourthContainer() {
  return (
    <div className="max-w-[1280px] sm:flex sm:flex-col sm:justify-center gap-10  mx-auto my-20 px-4 py-4">
      <div className="md:text-4xl text-center text-3xl font-semibold primaryColor my-5">
        Our Approach to Web Development
      </div>
      <div className="space-y-10">
        {/* 1 */}
        <div className="lg:w-[60%] mx-auto space-y-5">
          <img src={w1} className="w-28 mx-auto" alt="" />
          <div className="font-semibold text-[#0c2d57] text-2xl text-center">
            Discovery Consultation
          </div>
          <div className="px-10 text-center">
            In our discovery meeting, we strive to comprehend your current pain
            points and precise requirements. This involves conducting a
            comprehensive analysis of your current technological landscape,
            performing consumer research, and engaging with key stakeholders.
          </div>
        </div>
        {/* 2 */}
        <div className="lg:w-[60%] mx-auto space-y-5">
          <img src={w2} className="w-28 mx-auto" alt="" />
          <div className="font-semibold text-[#0c2d57] text-2xl text-center">
            Planning & Strategy
          </div>
          <div className="px-10 text-center">
            The first step sets the stage for creating a tech strategy that
            effectively communicates with your audience. We carefully consider
            everything from workflows and existing technical assets to
            integrations, timelines, and costs. Our dedicated web development
            team works meticulously to deliver practical solutions that provide
            tangible value.
          </div>
        </div>
        {/* 3 */}
        <div className="lg:w-[60%] mx-auto space-y-5">
          <img src={w3} className="w-28 mx-auto" alt="" />
          <div className="font-semibold text-[#0c2d57] text-2xl text-center">
            Website Design & Copywriting
          </div>
          <div className="px-10 text-center">
            This is the stage where creativity thrives. We work hand in hand
            with graphic designers and copywriters to transform your vision into
            reality through persuasive copywriting and carefully crafted
            artistic design. Then, we seamlessly merge all components into a
            unified product that meets all requirements.
          </div>
        </div>
        {/* 4 */}
        <div className="lg:w-[60%] mx-auto space-y-5">
          <img src={w4} className="w-28 mx-auto" alt="" />
          <div className="font-semibold text-[#0c2d57] text-2xl text-center">
            Coding & Development
          </div>
          <div className="px-10 text-center">
            Our expert team of website developers dives into action,
            constructing the essential infrastructure to host your design.
            Employing modern coding principles, we seamlessly integrate your
            design into a responsive platform, ensuring meticulous attention to
            detail every step of the way.
          </div>
        </div>
        {/* 5 */}
        <div className="lg:w-[60%] mx-auto space-y-5">
          <img src={w5} className="w-28 mx-auto" alt="" />
          <div className="font-semibold text-[#0c2d57] text-2xl text-center">
            Quality Assurance
          </div>
          <div className="px-10 text-center">
            Before your website goes live, we meticulously conduct a quality
            assurance process, incorporating multiple checkpoints to ensure the
            consistency of high-quality designs. Through a unique demo link, you
            can offer constructive feedback, which our expert team addresses
            before deployment.
          </div>
        </div>
        <div className="lg:w-[60%] mx-auto space-y-5">
          <img src={w6} className="w-28 mx-auto" alt="" />
          <div className="font-semibold text-[#0c2d57] text-2xl text-center">
            Deployment
          </div>
          <div className="px-10 text-center">
            Once you're satisfied with the proposed website and it meets your
            specifications, we're ready to go live. But we don't leave you
            hanging. To ensure a smooth transition, we provide training to key
            staff members on utilizing the CMS (content management system)
            effectively and making the most of your investment.
          </div>
        </div>
        {/* <div></div> */}
      </div>
    </div>
  );
}

export default WebFourthContainer;
