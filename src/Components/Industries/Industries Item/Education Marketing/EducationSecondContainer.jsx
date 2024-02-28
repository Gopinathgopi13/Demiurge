import React from "react";
import Education from "../../../../../public/static/Education.jpg";
function EducationSecondContainer() {
  return (
    <div className="lg:w-[1280px] mx-auto space-y-10">
      <div className="grid md:grid-cols-2 gap-5 px-5">
        {" "}
        <div>
          <img src={Education} alt="" />
        </div>
        <div className="flex flex-col justify-center gap-10 px-3">
          <div className="text-3xl font-semibold">
            Digital Marketing for Education and Training Institutes
          </div>
          <div className="text-xl">
            67% of netizens use search engines as their first source of
            information for higher education institutions. <br />
            <br /> With a shift to the
            digital in recent times, marketing for the education sector is a
            successful means to increase student inquiries and sign-ups.
            Educational and Training institutes benefit from displaying their
            courses, amenities, and upcoming admission dates to a tailor-made
            audience.
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationSecondContainer;
