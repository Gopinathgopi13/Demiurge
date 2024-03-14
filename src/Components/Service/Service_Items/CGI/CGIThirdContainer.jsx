import React from "react";
import PNG from "../../../../assets/PNG.png";
import CGI1 from '../../../../assets/CGI/CGI1.png'
import CGI2 from '../../../../assets/CGI/CGI2.png'
import CGI3 from '../../../../assets/CGI/CGI3.png'
const CGIThirdContainer = () => {
  return (
    <div className="max-w-[1280px] sm:flex sm:flex-col sm:justify-center gap-10 mx-auto px-10 text-white">
      <div className="md:text-4xl text-3xl font-semibold py-5 primaryColor">
        Our Approach to CGI Advertising
      </div>
      <div className="text-xl">
        Our CGI advertising approach is fueled by a passion for storytelling and
        a commitment to technological innovation. We believe in crafting
        compelling ads that resonate with audiences through captivating
        narratives and breathtaking visuals, pushing the boundaries of
        imagination.
      </div>

      <div className="primaryColor text-2xl font-semibold">
        The process of creating a CGI advertisement typically involves:
      </div>
      <div className="grid lg:grid-cols-3 gap-10 my-5">
        <div className="flex flex-col items-center gap-5">
          <div className="">
            <img src={CGI1} className="w-[80px]" />
          </div>
          <div className="text-xl font-semibold text-center">
            Conceptualization
          </div>
          <div className="h-[30%] text-center text-balance">
            Every project commences with an idea—a vision seeking to resonate
            profoundly with viewers. Our team of creative experts excels at
            transforming these ideas into detailed storyboards, laying the
            groundwork for successful CGI advertisement production.
          </div>
        </div>

        <div className="flex flex-col items-center gap-5">
          <div className="">
            <img src={CGI2} className="w-[80px]" />
          </div>
          <div className="text-xl font-semibold text-center">
            Cutting-Edge Technology
          </div>
          <div className="h-[30%] text-center text-balance">
            Using cutting-edge CGI technology, we animate our storyboards with
            remarkable realism and meticulous detail. Our team employs advanced
            tools and software to craft captivating visual effects and lifelike
            animations.
          </div>
        </div>

        <div className="flex flex-col items-center gap-5">
          <div className="">
            <img src={CGI3} className="w-[80px]" />
          </div>
          <div className="text-xl font-semibold text-center">
            {" "}
            Tailored Brand Stories
          </div>
          <div className="h-[30%] text-center text-balance">
            Acknowledging the distinct story behind each brand, we personalize
            our advertisements to echo the fundamental values and messages of
            our clients. Our collaborative process guarantees that every facet
            of the CGI advertisement, from concept to final edit, mirrors the
            brand's identity and marketing aspirations.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CGIThirdContainer;
