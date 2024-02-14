import React from "react";
import OurTeamImg from "../../assets/OurTeam2.jpg";
function OurCompany() {
  return (
    <div className="w-full">
      <div className="lg:w-[1280px] mx-auto px-4 lg:pb-20 h-[90vh] grid lg:grid-cols-2 grid-cols-1 justify-center items-center">
        <div className="w-[90%] h-[90%] flex flex-col justify-center lg:space-y-10 space-y-5 border">
          <div className="text-3xl font-bold text-blue-600">Our Company</div>
          <div className="text-4xl font-light">Small Team, Big Dreams</div>
          <div className="w-[90%] font-normal text-xl">
            Every day, we build products, brands and websites that help our
            partners stand out, connect with customers and grow faster.
          </div>
        </div>
        <div className="w-[90%] h-[90%] object-fill border relative">
          <div className="w-[60%] h-[80%] border absolute bottom-0 left-0 z-20g">
            <img src="" alt="" />
            <div>
              <span>Lorem, ipsum.</span>
              <span>Founder</span>
            </div>
          </div>
          <div className="w-[50%] h-[80] border absolute right-0 top-0">
            <img src="" alt="" />
            <div>
              <span>Lorem, ipsum.</span>
              <span>Co-Founder</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurCompany;
