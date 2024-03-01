import React from "react";
import SearchEO from "../../../../assets/SVG/SearchEO.svg";
function SEOSecondContainer() {
  return (
    <div className="lg:w-[1280px] sm:flex sm:flex-col sm:justify-center  mx-auto px-4">
      <div
        className="lg:text-4xl text-2xl font-semibold my-5 text-[#E48F45]"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        Transform your online presence with a groundbreaking SEO partner.
      </div>
      <div className="grid lg:grid-cols-2 mx-auto">
        <div
          className="flex flex-col justify-around text-justify px-2"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi enim
            asperiores fuga odio incidunt. Nulla, rerum explicabo similique
            illum facere ullam, amet laudantium a labore fugiat incidunt,
            tempore aspernatur ex corporis cumque eligendi assumenda impedit
            necessitatibus id officia consectetur quisquam suscipit. Minus
            perspiciatis cumque atque natus! Illo voluptatum iure repudiandae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quae
            quas? Eaque deleniti accusamus eius veritatis distinctio sint hic
            voluptatum dolore error esse nisi, et maxime, voluptatibus libero
            quos nam soluta saepe ipsum iste temporibus laborum corrupti? Esse
            iste repudiandae quasi eos ipsum ipsa, adipisci suscipit iusto! Ex,
            facere fugiat?
          </p>
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
