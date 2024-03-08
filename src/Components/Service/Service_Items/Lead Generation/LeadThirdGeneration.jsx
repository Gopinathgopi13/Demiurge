import React from "react";
import { Link } from "react-router-dom";

function LeadThirdGeneration() {
  return (
    <div
      className="max-w-[1280px] sm:flex sm:flex-col sm:justify-center gap-10  mx-auto my-20 px-4 py-4"
      data-aos="fade-down"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      <div className="md:text-6xl text-3xl font-medium my-5">
        How Can a Lead Generation Service Help My Business?
      </div>
      <div className="md:w-[80%] my-5">
        Lorem ipsum dolor sit amet, consectetur elit. elitsdf Dolorum,
        recusandae distinctio. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Et, dolorum?
      </div>
      <div className="mx-auto md:w-[80%] w-[95%] border-2 border-black rounded-tl-3xl rounded-br-3xl space-y-10 py-10 px-5">
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
        <div className="sm:w-[30%] w-[80%] overflow-hidden">
          <Link to="/contactForm">
            <div className="px-5 py-3 lg:text-xl bg-[#0c2d57] text-white flex items-center gap-4 cursor-pointer">
              <Link to="/contact">Book a Consultation</Link>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LeadThirdGeneration;
