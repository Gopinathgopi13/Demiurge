import React from "react";
import SEOImage from "../../../../assets/SVG/SearchEO.svg";
function BrandingFourthContainer() {
  return (
    <div className="lg:w-[1280px] sm:flex sm:flex-col sm:justify-center  mx-auto px-10 py-10">
      <div className="md:text-4xl font-semibold text-3xl primaryColor my-5 py-5">
        Services for establishing and maintaining a strong and cohesive brand
        identity.
      </div>
      <div className="grid lg:grid-cols-3 gap-20 my-10">
        <div className="flex flex-col items-center h-60 gap-5">
          <div className="h-[40%] flex flex-col justify-center items-center ">
            <img src={SEOImage} className="h-[80%]" />
            <div className="text-xl font-semibold primaryColor ">
              Brand Strategy Development
            </div>
          </div>
          <div className=" text-center">
            Crafting a comprehensive plan that defines the brand's purpose,
            target audience, values, and unique selling proposition.
          </div>
        </div>

        <div className="flex flex-col items-center h-60 gap-5">
          <div className="h-[40%] flex flex-col justify-center items-center ">
            <img src={SEOImage} className="h-[80%]" />
            <div className="text-xl font-semibold primaryColor ">
              Brand Identity Design
            </div>
          </div>
          <div className=" text-center">
            Creating visual elements such as logos, color palettes, typography,
            and imagery that represent the brand's personality and values.
          </div>
        </div>

        <div className="flex flex-col items-center h-60 gap-5">
          <div className="h-[40%] flex flex-col justify-center items-center ">
            <img src={SEOImage} className="h-[80%]" />
            <div className="text-xl font-semibold primaryColor ">
              Brand Messaging and Tone of Voice
            </div>
          </div>
          <div className=" text-center">
            Developing consistent messaging that communicates the brand's story,
            value proposition, and key messages to the target audience.
          </div>
        </div>

        <div className="flex flex-col items-center h-60 gap-5">
          <div className="h-[40%] flex flex-col justify-center items-center ">
            <img src={SEOImage} className="h-[80%]" />
            <div className="text-xl font-semibold primaryColor ">
              Brand Guidelines Creation
            </div>
          </div>
          <div className=" text-center">
            Establishing guidelines that ensure consistency in brand
            presentation across all channels, including digital and print media.
          </div>
        </div>

        <div className="flex flex-col items-center h-60 gap-5">
          <div className="h-[40%] flex flex-col justify-center items-center ">
            <img src={SEOImage} className="h-[80%]" />
            <div className="text-xl font-semibold primaryColor ">
              Brand Launch Strategy
            </div>
          </div>
          <div className=" text-center">
            Planning and executing a strategic launch campaign to introduce the
            brand to the target audience and generate excitement and awareness.
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandingFourthContainer;
