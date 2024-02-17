import React from "react";
import { Link } from "react-router-dom";

function EcommerceFourthContainer() {
  return (
    <div className="lg:w-[1280px] sm:flex sm:flex-col sm:justify-center gap-10  mx-auto my-20 px-4 py-4">
      <div className="lg:text-5xl font-medium my-5">
        Book Your eCommerce Marketing Consultation Today
      </div>
      <div className="text-center text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat a
        exercitationem cum perspiciatis recusandae nemo reiciendis sit,
        accusantium voluptatem distinctio?
      </div>
      <Link to="/contactForm">
        <div className="px-16 py-5 text-2xl w-[300px] text-white bg-blue-700 flex items-center gap-4 cursor-pointer">
          <Link to="/contact">Get in touch</Link>
        </div>
      </Link>
    </div>
  );
}

export default EcommerceFourthContainer;
