import React from "react";
import SearchEO from "../../../../assets/SVG/ppc-management.svg";

function PRThirdContainer() {
  return (
    <div className="max-w-[1280px] sm:flex sm:flex-col sm:justify-center gap-20  mx-auto px-4 py-4">
      <div className="md:text-4xl font-semibold text-2xl my-5 primaryColor">
        Your brand's narrative is an ongoing conversation, whether you're
        actively shaping it or not. Why leave it to chance? At Demiurge, we
        understand the importance of taking control of your story
      </div>
      <div className="grid sm:grid-cols-2 mx-auto">
        <div className="mx-auto">
          <img src={SearchEO} className="md:w-[95%] h-[80%]" alt="" />
        </div>
        <div className="text-justify text-xl px-2 gap-5">
          <p className="leading-8 text-white">
            Through our strategic PR services, we empower you to lead the
            conversation. Leveraging our team's extensive background in the
            media industry, we've cultivated invaluable connections to ensure
            your brand's narrative is not only heard but also resonates
            positively. Let us guide you in shaping perceptions, safeguarding
            your brand's reputation, and ultimately, driving your success.
          </p>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quae
            quas? Eaque deleniti accusamus eius veritatis distinctio sint hic
            voluptatum dolore error esse nisi, et maxime, voluptatibus libero
            quos nam soluta saepe ipsum iste temporibus laborum corrupti? Esse
            iste repudiandae quasi eos ipsum ipsa, adipisci suscipit iusto! Ex,
            facere fugiat?
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default PRThirdContainer;
