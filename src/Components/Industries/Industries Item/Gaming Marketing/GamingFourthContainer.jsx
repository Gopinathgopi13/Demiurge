import React from "react";
import { Link } from "react-router-dom";

function GamingFourthContainer() {
  return (
    <div className="lg:w-[1280px] sm:flex sm:flex-col sm:justify-center items-center gap-10  mx-auto my-20 px-4 py-4">
      <div className="lg:text-5xl font-medium my-5 text-center">
        Book Your eCommerce Marketing Consultation Today
      </div>
      <div className="text-center text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat a
        exercitationem cum perspiciatis recusandae nemo reiciendis sit,
        accusantium voluptatem distinctio?
      </div>
      <Link to="/contactForm">
        <div className="py-5 text-2xl w-[300px] text-white bg-[#0c2d57] flex items-center justify-center gap-4 cursor-pointer">
          <Link to="/contact">Book a Call</Link>
        </div>
      </Link>
    </div>
  );
}

export default GamingFourthContainer;
