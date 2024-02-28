import React from "react";

import b2bSolution from "../../../../../public/static/b2bsolution01.png";

function B2BSecondContainer() {
  return (
    <div className="lg:w-[1280px] mx-auto space-y-10">
      <div className="space-y-10 px-5">
        <div className="md:text-3xl font-semibold text-center w-[90%] mx-auto">
          B2B Digital Marketing Agency That Creates Customized Solutions In Your
          Field For 5 Years
        </div>
      </div>

      <div className="w-[95%]  grid sm:grid-cols-2 mx-auto py-10 md:px-10 px-5 gap-5 bg-white rounded-xl ">
        <div className="rounded-xl overflow-hidden">
          <img src={b2bSolution} className="w-full h-full" alt="" />
        </div>
        <div className="space-y-10">
          <div className="space-y-5 flex flex-col justify-center px-5">
            <div className="font-semibold text-2xl text-[#e48f45]">
              B2B specialization
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab in a
              quisquam nesciunt natus porro.
            </p>
          </div>
          <div className="space-y-5 flex flex-col justify-center px-5">
            <div className="font-semibold text-2xl text-[#e48f45]">
              Fast communication
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab in a
              quisquam nesciunt natus porro.
            </p>
          </div>
          <div className="space-y-5 flex flex-col justify-center px-5">
            <div className="font-semibold text-2xl text-[#e48f45]">
              Turnkey basis
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab in a
              quisquam nesciunt natus porro.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default B2BSecondContainer;
