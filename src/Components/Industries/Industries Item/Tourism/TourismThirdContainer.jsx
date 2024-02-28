import React from "react";
import tourismIcon1 from "../../../../../public/static/PNG/tourismIcon1.png";
import tourismIcon2 from "../../../../../public/static/PNG/tourismIcon2.png";
import tourismIcon3 from "../../../../../public/static/PNG/tourismIcon3.png";
import tourismIcon4 from "../../../../../public/static/PNG/tourismIcon4.png";
import tourismIcon5 from "../../../../../public/static/PNG/tourismIcon5.png";
function TourismThirdContainer() {
  return (
    <div className="lg:w-[1280px] mx-auto px-4 py-10 flex flex-col justify-center items-start gap-10">
      <div className="lg:text-6xl text-4xl lg:w-[90%] font-extrabold leading-snug text-[#e48f45]">
        Why Choose Demiurge As Your Tourism Digital Marketing
      </div>
      <div className="space-y-5">
        <p className="text-xl">
          We Do In-Depth Research to Reach the Right Audience
        </p>
        <div className="grid lg:grid-cols-3 gap-10 my-10">
          <div className="flex flex-col bg-white shadow-lg rounded-lg p-5 gap-5 py-5">
            <div>
              <img className="h-[50px]" src={tourismIcon1} alt="" />
            </div>
            <div className="text-xl font-semibold text-[#e48f45]">
              We Value Our Clients
            </div>
            <div>
              Our clients are important to us. We take our time to learn about
              their company and their goals. We believe a client-first approach
              helps us steer our campaigns in the right direction and deliver
              the best possible results.
            </div>
          </div>

          <div className="flex flex-col bg-white shadow-lg rounded-lg p-5 gap-5 py-5">
            <div>
              <img className="h-[50px]" src={tourismIcon2} alt="" />
            </div>
            <div className="text-xl font-semibold text-[#e48f45]">
              We Give You Results
            </div>
            <div>
              While we never promise hitting a specific goal, we do everything
              in our power to achieve the highest goal possible. With our
              knowledge, tools and teamwork, we have delivered consistently
              successful marketing campaigns that have helped numerous companies
              achieve their goals.
            </div>
          </div>

          <div className="flex flex-col bg-white shadow-lg rounded-lg p-5 gap-5 py-5">
            <div>
              <img className="h-[50px]" src={tourismIcon3} alt="" />
            </div>
            <div className="text-xl font-semibold text-[#e48f45]">
              We Are Transparent
            </div>
            <div>
              At Thrive, our main values are honesty and integrity. We would
              never jeopardize our client’s trust by conducting questionable
              business practices. We provide transparent reports that show the
              exact data about our client’s campaigns.
            </div>
          </div>
          <div className="flex flex-col bg-white shadow-lg rounded-lg p-5 gap-5 py-5">
            <div>
              <img className="h-[50px]" src={tourismIcon4} alt="" />
            </div>
            <div className="text-xl font-semibold text-[#e48f45]">
              We Use Data-Driven Methods
            </div>
            <div>
              Our teams rely on data, analytics and research to support ideas,
              discover new solutions and test strategies. We believe that data
              and facts are the most reliable component of developing effective
              campaigns.
            </div>
          </div>
          <div className="flex flex-col bg-white shadow-lg rounded-lg p-5 gap-5 py-5">
            <div>
              <img className="h-[50px]" src={tourismIcon5} alt="" />
            </div>
            <div className="text-xl font-semibold text-[#e48f45]">
              We Are Always On Time
            </div>
            <div>
              We don’t want our clients to be delayed because of us. Our teams
              follow strict workflow and productivity standards that ensure each
              task is completed on time. We deliver quality work on time as a
              part of our commitment to providing the best possible digital
              marketing services.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourismThirdContainer;
