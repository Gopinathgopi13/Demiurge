import React from "react";
import education1 from "../../../../../public/static/PNG/education1.png";
import education2 from "../../../../../public/static/PNG/education2.png";
import education3 from "../../../../../public/static/PNG/education3.png";
import education4 from "../../../../../public/static/PNG/education4.png";
import education5 from "../../../../../public/static/PNG/education5.png";
import education6 from "../../../../../public/static/PNG/education6.png";
import education7 from "../../../../../public/static/PNG/education7.png";
import education8 from "../../../../../public/static/PNG/education8.png";
const EducationThirdContainer = () => {
  return (
    <div className="lg:w-[1280px] mx-auto px-4 py-10 flex flex-col justify-center items-start gap-10">
      <div className="lg:text-6xl text-4xl lg:w-[90%] font-extrabold leading-snug text-[#e48f45]">
        Areas of expertise
      </div>
      <div className="text-xl text-white">
        As an education marketing agency, our capabilities are built upon years
        of experience working with education brands across a wide variety of
        marketing channels and mediums. Delivering an engaging audience
        experience that strengthens trust and drives awareness, our bespoke,
        omni-channel marketing solutions set you apart from the competition,
        pushing you forward as the logical next step in each student’s learning
        journey.
      </div>
      <div className="grid lg:grid-cols-2 gap-10 my-10">
        <div className="flex flex-col bg-white shadow-lg rounded-lg p-5 gap-5 py-5">
          <div>
            <img className="h-[50px]" src={education8} alt="" />
          </div>
          <div className="text-xl font-semibold text-[#e48f45]">
            Brand and Marketing Strategy
          </div>
          <div>
            The best journeys start with a map. Know where you want to be and
            how you’re going to get there.
          </div>
        </div>

        <div className="flex flex-col bg-white shadow-lg rounded-lg p-5 gap-5 py-5">
          <div>
            <img className="h-[50px]" src={education7} alt="" />
          </div>
          <div className="text-xl font-semibold text-[#e48f45]">
            Content Marketing
          </div>
          <div>
            Cement your position within the education sector field with a strong
            SEO content marketing strategy.
          </div>
        </div>

        <div className="flex flex-col bg-white shadow-lg rounded-lg p-5 gap-5 py-5">
          <div>
            <img className="h-[50px]" src={education6} alt="" />
          </div>
          <div className="text-xl font-semibold text-[#e48f45]">
            Video Marketing
          </div>
          <div>
            85% of businesses use video marketing. And with an incredible 89% of
            marketers reporting a good ROI, you should be using it too!
          </div>
        </div>

        <div className="flex flex-col bg-white shadow-lg rounded-lg p-5 gap-5 py-5">
          <div>
            <img className="h-[50px]" src={education5} alt="" />
          </div>
          <div className="text-xl font-semibold text-[#e48f45]">
            Digital Marketing
          </div>
          <div>
            Using channels like search, social, and display; digital marketing
            can lead prospective students through each stage of the enrolment
            cycle.
          </div>
        </div>

        <div className="flex flex-col bg-white shadow-lg rounded-lg p-5 gap-5 py-5">
          <div>
            <img className="h-[50px]" src={education4} alt="" />
          </div>
          <div className="text-xl font-semibold text-[#e48f45]">
            Integrated Marketing
          </div>
          <div>
            Every channel of your integrated marketing strategy should work
            together seamlessly to lead audiences through their purchasing
            journey.
          </div>
        </div>
        <div className="flex flex-col bg-white shadow-lg rounded-lg p-5 gap-5 py-5">
          <div>
            <img className="h-[50px]" src={education3} alt="" />
          </div>
          <div className="text-xl font-semibold text-[#e48f45]">
            Email Marketing
          </div>
          <div>
            It’s the channel that just keeps on giving. Doomsdayers have long
            declared that email marketing is dead. And yet the results seem to
            say otherwise, with email marketing making an average of $38 for
            every $1 spent.
          </div>
        </div>
        <div className="flex flex-col bg-white shadow-lg rounded-lg p-5 gap-5 py-5">
          <div>
            <img className="h-[50px]" src={education2} alt="" />
          </div>
          <div className="text-xl font-semibold text-[#e48f45]">
            Event Marketing
          </div>
          <div>
            You don’t just want potential students hearing about your brand, you
            want them to experience it. Make your education brand extra
            memorable by making an impression in person.
          </div>
        </div>

        <div className="flex flex-col bg-white shadow-lg rounded-lg p-5 gap-5 py-5">
          <div>
            <img className="h-[50px]" src={education1} alt="" />
          </div>
          <div className="text-xl font-semibold text-[#e48f45]">
            Insights and Analytics
          </div>
          <div>
            Great marketing demands concrete results. But how do you measure
            your success? The Walk will assess your data, explain what it means
            for your business, and act upon it to improve your results.
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationThirdContainer;
