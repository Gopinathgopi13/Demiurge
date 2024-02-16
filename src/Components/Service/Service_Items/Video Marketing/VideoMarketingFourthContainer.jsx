import React from "react";
import { Link } from "react-router-dom";

function VideoMarketingFourthContainer() {
  return (
    <div className="lg:w-[1280px] sm:flex sm:flex-col sm:justify-center gap-10  mx-auto my-20 px-4 py-4">
      <div className="lg:text-5xl font-medium my-5">
        Lorem ipsum dolor sit amet, consectetur elit. elitsdf Dolorum,
        recusandae distinctio.
      </div>
      <div className="mx-auto w-[80%] border rounded-lg space-y-10 py-10 px-5">
        <div className="flex flex-col justify-around text-justify text-xl px-2 gap-5 ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi enim
            asperiores fuga odio incidunt. Nulla, rerum explicabo similique
            illum facere ullam, amet laudantium a labore fugiat incidunt,
            tempore aspernatur ex corporis cumque eligendi assumenda impedit
            necessitatibus id officia consectetur quisquam suscipit. Minus
            perspiciatis cumque atque natus! Illo voluptatum iure repudiandae.
          </p>
        </div>
        <div className="sm:w-[30%] w-[50%] rounded-xl overflow-hidden">
          <Link to="/contactForm">
            <div className="px-5 py-3 lg:text-2xl bg-blue-700 flex items-center gap-4 cursor-pointer">
              <Link to="/contact">Book a Consultation</Link>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default VideoMarketingFourthContainer;
