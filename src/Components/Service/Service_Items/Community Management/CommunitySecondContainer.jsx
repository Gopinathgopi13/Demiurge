import React from "react";
import SearchEO from "../../../../assets/SVG/seo-analytics.svg";
import CommunityManagement from '../../../../assets/Community_Management/CommunityManagement.jpg'
function CommunitySecondContainer() {
  return (
    <div className="max-w-[1280px] sm:flex sm:flex-col sm:justify-center gap-10  mx-auto px-4 py-4">
      <div className="lg:text-4xl text-2xl font-semibold w-[80%] mx-auto text-center my-5 primaryColor">
        Humanizing your brand will establish a deeper connection with your
        audience.
      </div>
      <div className="grid lg:grid-cols-2 mx-auto">
        <div className="mx-auto">
          <img src={CommunityManagement} className="" alt="" />
        </div>
        <div className="flex flex-col text-justify justify-center font-light px-2 gap-5">
          <p className="leading-6">
            Community management is integral to establishing a brand's identity
            and reputation. By actively engaging with community members, brands
            can cultivate meaningful relationships, foster a sense of belonging,
            and drive loyalty and advocacy. This interaction humanizes the
            brand, making it more approachable and relatable to its audience.
            Satisfied customers can be transformed into enthusiastic brand
            advocates, expanding the brand's reach and influence through
            word-of-mouth promotion.
          </p>
          <p className="leading-6">
            Furthermore, community management serves as a valuable feedback loop
            for brands. By listening to community members' opinions,
            suggestions, and concerns, brands gain insights into customer
            preferences, pain points, and trends. This feedback informs product
            development, marketing strategies, and overall brand positioning,
            contributing to its growth and evolution. Through personalized
            communication, exclusive perks, and rewards, community managers can
            strengthen the emotional connection between customers and the brand,
            fostering long-term loyalty and retention.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CommunitySecondContainer;
