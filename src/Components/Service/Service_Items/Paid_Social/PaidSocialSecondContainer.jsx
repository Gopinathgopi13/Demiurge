import React from "react";
import SearchEO from "../../../../assets/SVG/paid-social-media.svg";
function PaidSocialSecondContainer() {
  return (
    <div
      className="max-w-[1280px] sm:flex sm:flex-col sm:justify-center gap-10  mx-auto  px-4 py-4"
      data-aos="fade-down"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      <div className="md:text-6xl text-3xl font-medium my-5  primaryColor">
        Our Paid Social Media Marketing Services
      </div>
      <div className="grid sm:grid-cols-2 mx-auto">
        <div className="mx-auto">
          <img src={SearchEO} className="md:w-[70%] h-[80%]" alt="" />
        </div>
        <div className="flex flex-col justify-around text-justify px-2 gap-5">
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
      </div>
    </div>
  );
}

export default PaidSocialSecondContainer;
