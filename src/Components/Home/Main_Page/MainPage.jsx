import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
function MainPage() {
  return (
    <div className="w-full">
      <div className="lg:w-[1280px] mx-auto px-4 h-[90vh] text-white flex flex-col justify-center items-center gap-y-14">
        <div
          className="lg:text-6xl text-3xl lg:w-[70%] text-center font-extrabold leading-snug"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Increase sales without lifting a finger
        </div>
        {/* <div className="lg:w-[80%] lg:text-xl text-justify" data-aos="fade-up" data-aos-duration="1500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tempora
          alias ex distinctio officiis molestiae consequuntur magni labore iure
          cumque animi nemo quo vel doloremque, iusto corporis praesentium
          officia? Vero non provident autem ducimus nulla repellendus eveniet
          doloribus nam incidunt cum molestiae consectetur accusantium minus
          aliquid debitis repellat, expedita perferendis?
        </div> */}
        <Link to="/contactForm" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
          <div className="lg:px-16 px-10 py-5 lg:text-xl bg-blue-700 flex items-center gap-4 cursor-pointer">
            <Link to="/contact">Unlock a no-cost proposal</Link>
            <FaArrowRight size={20} />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MainPage;
