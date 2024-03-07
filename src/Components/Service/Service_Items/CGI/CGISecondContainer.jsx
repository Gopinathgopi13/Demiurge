import React from "react";
import SearchEO from "../../../../assets/SVG/seo-analytics.svg";

const CGISecondContainer = () => {
  return (
    <div
      className="lg:w-[1280px] sm:flex sm:flex-col sm:justify-center gap-10  mx-auto px-4 py-4"
      data-aos="fade-down"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      <div className="lg:text-4xl text-2xl font-semibold w-[80%] mx-auto text-center my-5 primaryColor">
        Harness the impactful capabilities of CGI ads to elevate your brand's
        outreach to unparalleled levels
      </div>
      <div className="grid sm:grid-cols-2 mx-auto">
        <div className="mx-auto">
          <img src={SearchEO} className="md:w-[95%] h-[90%]" alt="" />
        </div>
        <div className="flex flex-col justify-around text-justify px-2 gap-5">
          <p className="leading-6">
            Transform your brand's presence with CGI ads that defy boundaries
            and captivate audiences. Through mesmerizing visuals and innovative
            storytelling, our CGI creations transport viewers into immersive
            worlds where imagination knows no limits. From vibrant landscapes to
            dynamic characters, each frame is meticulously crafted to evoke
            emotion and spark curiosity. With CGI ads, your brand can break
            through the noise and forge meaningful connections with consumers,
            elevating your outreach to new heights of engagement and impact.
            Experience the transformative power of CGI ads and unlock boundless
            possibilities for your brand's success.
          </p>
          <ul className="list-disc px-5 text-lg font-popins ">
            <li>Unlimited Creativity</li>
            <li> Targeted Personalization</li>
            <li> Brand Consistency</li>
            <li>Cost-Effective Solutions</li>
            <li>Interactive Experiences</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CGISecondContainer;
