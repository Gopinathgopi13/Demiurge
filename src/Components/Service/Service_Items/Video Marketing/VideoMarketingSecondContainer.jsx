import React from "react";
import SearchEO from "../../../../assets/SVG/ppc-management.svg";

function VideoMarketingSecondContainer() {
  return (
    <div className="lg:w-[1280px] sm:flex sm:flex-col sm:justify-center gap-10  mx-auto px-4 py-4">
      <div className="lg:text-5xl font-medium my-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
        recusandae distinctio.
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
          <p>
            <ul className="list-disc ml-5">
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo?
              </li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoMarketingSecondContainer;
