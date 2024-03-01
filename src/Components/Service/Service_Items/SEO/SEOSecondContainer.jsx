import React from "react";
import SearchEO from "../../../../assets/SVG/SearchEO.svg";
function SEOSecondContainer() {
  return (
    <div className="lg:w-[1280px] sm:flex sm:flex-col sm:justify-center  mx-auto px-4">
      <div
        className="lg:text-5xl text-2xl font-semibold my-5 text-[#E48F45]"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        Your SEO Partner Like No Other
      </div>
      <div className="grid lg:grid-cols-2 mx-auto">
        <div
          className="flex flex-col justify-around text-justify px-2"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <p className="text-xl">
            With us as your SEO ally, you're not just another client – you're a
            valued collaborator in our mission for digital excellence. Together,
            we'll navigate the complexities of the online landscape, crafting
            bespoke strategies and implementing cutting-edge techniques to
            propel your brand forward. Experience personalized attention,
            unwavering support, and a commitment to achieving your goals. Choose
            us as your SEO partner and embark on a journey towards unparalleled
            success in the digital realm.
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
        <div
          className="mx-auto"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <img src={SearchEO} alt="" />
        </div>
      </div>
    </div>
  );
}

export default SEOSecondContainer;
