import React from "react";
import trumpet from "../../../../assets/Branding/brand.jpg";
import SocialMedia from "../../../../assets/Branding/SocialMedia_Branding.jpg";
import website from "../../../../assets/Branding/website.png";
import content from "../../../../assets/Branding/Content.jpg";
function BrandingThirdContainer() {
  return (
    <div className="max-w-[1280px] mx-auto space-y-10 py-20">
      <div className="w-[95%] grid sm:grid-cols-2 mx-auto md:py-10 py-5 gap-5 bg-white rounded-xl text-black">
        <div className="w-full flex justify-center items-center">
          <img src={trumpet} className="" alt="" />
        </div>
        <div className="space-y-5 flex flex-col justify-center px-5">
          <div className="font-semibold text-2xl primaryColor">
            Product Branding
          </div>
          <p className="text-lg font-light ">
            Product branding focuses on creating a unique identity for
            individual products or product lines within a company's portfolio.
            It involves developing distinct branding elements such as a product
            name, logo, packaging design, and messaging that differentiate the
            product from competitors and resonate with target consumers. Product
            branding aims to build brand loyalty, drive purchase decisions, and
            establish a positive perception of the product in the minds of
            consumers.
          </p>
        </div>
      </div>
      <div className="w-[95%]  grid sm:grid-cols-2 mx-auto md:py-10 py-5 gap-5 bg-white rounded-xl text-black">
        <div className="flex justify-center items-center">
          <img src={trumpet} className="" alt="" />
        </div>
        <div className="space-y-5 flex flex-col justify-center px-5 ">
          <div className="font-semibold text-2xl primaryColor">
            Corporate Branding
          </div>
          <p className="text-lg font-light">
            Corporate branding involves building a strong and cohesive identity
            for the overall company or organization. It encompasses elements
            such as the company's name, logo, visual identity, mission
            statement, values, and corporate culture. Corporate branding aims to
            create a positive and consistent image of the company across all
            touchpoints, including its products, services, communications, and
            interactions with stakeholders. It helps build trust, credibility,
            and loyalty among customers, employees, investors, and other
            stakeholders.
          </p>
        </div>
      </div>
      <div className="w-[95%] grid sm:grid-cols-2 mx-auto md:py-10 py-5 gap-5 bg-white rounded-xl text-black">
        <div className="flex justify-center items-center">
          <img src={SocialMedia} className="h-80 w-10/12" alt="" />
        </div>
        <div className="space-y-5 flex flex-col justify-center px-5 ">
          <div className="font-semibold text-2xl primaryColor">
            Social Media Branding
          </div>
          <p className="text-lg font-light ">
            Social media branding focuses on creating a consistent and
            recognizable presence for a brand across various social media
            platforms such as Facebook, Instagram, Twitter, LinkedIn, and
            others. It involves developing branded profiles, cover photos,
            profile pictures, bios, content style, tone of voice, and hashtags
            that align with the brand's identity and appeal to its target
            audience. Social media branding aims to engage with audiences, build
            relationships, and amplify brand messaging through interactive and
            visual content.
          </p>
        </div>
      </div>
      <div className="w-[95%] grid sm:grid-cols-2 mx-auto md:py-10 py-5 gap-5 bg-white rounded-xl text-black">
        <div className="flex justify-center items-center">
          <img src={website} className="h-80 w-2/3" alt="" />
        </div>
        <div className="space-y-5 flex flex-col justify-center px-5 ">
          <div className="font-semibold text-2xl primaryColor">
            Website Branding
          </div>
          <p className="text-lg font-light ">
            Website branding involves creating a cohesive and memorable
            experience for visitors on a brand's website. It encompasses
            elements such as the website's layout, color scheme, typography,
            logo placement, imagery, navigation, and overall user experience
            (UX) design. Website branding aims to convey the brand's identity,
            values, and offerings effectively while providing a seamless and
            engaging browsing experience for users. It helps reinforce brand
            recognition, credibility, and trust among website visitors.
          </p>
        </div>
      </div>

      <div className="w-[95%] grid sm:grid-cols-2 mx-auto md:py-10 py-5 gap-5 bg-white rounded-xl text-black">
        <div className="flex justify-center items-center">
          <img src={content} className="" alt="" />
        </div>
        <div className="space-y-5 flex flex-col justify-center px-5 ">
          <div className="font-semibold text-2xl primaryColor">
            Content Branding
          </div>
          <p className="text-lg font-light ">
            Content branding focuses on creating branded content assets such as
            articles, blog posts, videos, podcasts, and infographics that align
            with the brand's values, voice, and objectives. It involves
            maintaining consistency in content style, tone, and messaging across
            various channels to reinforce the brand's identity and establish
            thought leadership in the industry. Content branding aims to engage
            audiences, build relationships, and drive conversions by delivering
            valuable and relevant content that resonates with target consumers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BrandingThirdContainer;
