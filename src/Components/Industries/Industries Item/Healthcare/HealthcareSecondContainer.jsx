import React from "react";
import health1 from "../../../../../public/static/Health/health1.jpg";
import health2 from "../../../../../public/static/Health/health2.jpg";
import health3 from "../../../../../public/static/Health/health3.jpg";
import health4 from "../../../../../public/static/Health/health4.jpg";

const HealthcareSecondContainer = () => {
  return (
    <div className="lg:w-[1280px] mx-auto space-y-10 py-20">
      <div className="space-y-10 px-5">
        <div className="md:text-6xl text-3xl">
          Scope of Digital marketing in Healthcare Industry
        </div>
        <div className="text-xl">
          <p>
            With Demiurge, seize the opportunity to engage, educate, and empower
            your target audience through targeted digital campaigns. From
            compelling content creation to strategic social media management,
            tap into the vast potential of digital marketing to enhance brand
            visibility, build trust, and foster long-term relationships. Enhance
            your online presence, outrank competitors, and become the go-to
            authority in your specialized field with the Digital Marketing
            Company that promises performance and guarantees results.
          </p>
        </div>
      </div>

      {/* IOS App Development */}
      <div className="w-[95%] grid sm:grid-cols-2 mx-auto py-10 md:px-10 px-5 gap-5 bg-white rounded-xl ">
        <div className="w-full rounded-xl overflow-hidden">
          <img src={health1} className="w-full h-full" alt="" />
        </div>
        <div className="space-y-5 flex flex-col justify-center px-5">
          {/* <div>
            <img src={phone} alt="" />
          </div> */}
          <div className="font-semibold text-2xl text-[#e48f45]">
            Digital Marketing for Dental Clinics
          </div>
          <p>
            If you’re a clinic chain, you must use social media as your primary
            marketing method. Potential patients are more likely to interact
            with you on these platforms. They are more likely to read reviews,
            watch informative videos and build rapport with staff. Being the
            best healthcare digital marketing services agency in India, Reinvent
            Digital can foster a life-long relationship between your endemic
            patients.
          </p>
        </div>
      </div>

      {/* Android App Development */}
      <div className="w-[95%]  grid sm:grid-cols-2 mx-auto py-10 md:px-10 px-5 gap-5 bg-white rounded-xl ">
        <div className="rounded-xl overflow-hidden">
          <img src={health2} className="w-full h-full" alt="" />
        </div>
        <div className="space-y-5 flex flex-col justify-center px-5">
          {/* <div>
            <img src={phone} alt="" />
          </div> */}
          <div className="font-semibold text-2xl text-[#e48f45]">
            Digital Marketing for Doctors and Surgeons
          </div>
          <p>
            Digital marketing is very effective for smaller medical practices.
            In addition to attracting new patients, it can also help to retain
            existing patients. In addition, it can also reduce the cost per
            patient acquisition. When choosing a digital marketing agency, look
            for an agency that shares a good rapport with doctors and dentists
            LEARN MORE.
          </p>
        </div>
      </div>

      {/* Cross-Platform App Development */}
      <div className="w-[95%]  grid sm:grid-cols-2 mx-auto py-10 md:px-10 px-5 gap-5 bg-white rounded-xl ">
        <div className="rounded-xl overflow-hidden">
          <img src={health3} className="w-full h-full" alt="" />
        </div>
        <div className="space-y-5 flex flex-col justify-center px-5">
          {/* <div>
            <img src={phone} alt="" />
          </div> */}
          <div className="font-semibold text-2xl text-[#e48f45]">
            Digital Marketing for Diagnostic Centres
          </div>
          <p>
            Goodwill matters a lot when it comes to a diagnostic centre. After
            all, there’s a huge chunk of competition and patients want to know
            exactly where to go for MRIs, CT Scans, and Biopsies. They want to
            choose the one that has the best turnaround time - it’s about how
            reliable the diagnostic test results are.
          </p>
        </div>
      </div>

      {/* Progressive Web App Development Services */}
      <div className="w-[95%]  grid sm:grid-cols-2 mx-auto py-10 md:px-10 px-5 gap-5 bg-white rounded-xl ">
        <div className="rounded-xl overflow-hidden">
          <img src={health4} className="w-full h-full" alt="" />
        </div>
        <div className="space-y-5 flex flex-col justify-center px-5">
          {/* <div>
            <img src={phone} alt="" />
          </div> */}
          <div className="font-semibold text-2xl text-[#e48f45]">
            Digital Marketing for Vitamin and Supplement Manufacturers
          </div>
          <p>
            Creating a successful vitamin & supplement manufacturer is a
            multifaceted process. Branding your product is a great way to get
            attention. You can also use social media to build brand awareness
            and engage with your audience. Having a solid marketing plan is
            essential to running a successful online supplement business.
            Reinvent Digital, known for healthcare digital marketing services
            will make your vitamins and supplements a talk-of-the-town.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HealthcareSecondContainer;
