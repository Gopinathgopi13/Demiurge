import React from "react";
// import SearchEO from "../../../../assets/SVG/SearchEO.svg";
import SearchEO from "../../../../assets/SEO.jpg";

function SEOSecondContainer() {
  return (
    <div className="max-w-[1280px] sm:flex sm:flex-col sm:justify-center space-y-3 mx-auto px-4">
      <div className="lg:text-4xl text-3xl font-semibold primaryColor">
        Your SEO Partner Like No Other
      </div>
      <div className="grid lg:grid-cols-2 mx-auto">
        <div className="flex flex-col justify-around px-2">
          <p className="text-lg leading-7 font-light">
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
        <div className="mx-auto">
          <img src={SearchEO} className="h-[400px] w-full" alt="" />
        </div>
      </div>
    </div>
  );
}

export default SEOSecondContainer;
