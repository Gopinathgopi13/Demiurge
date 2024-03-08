import React from "react";
import { Link } from "react-router-dom";

function SEOFourthConitainer() {
  return (
    <div
      className="max-w-[1280px] sm:flex sm:flex-col sm:justify-center mx-auto p-4 gap-5 bg-[#0c2d57]"
      data-aos="fade-down"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      <div className="md:text-5xl text-3xl text-center font-medium my-5 primaryColor">
        Ready to wield the power of SEO ? 
      </div>
      <div className="px-14 space-y-3 md:text-xl font-light flex flex-col justify-center items-center gap-5">
        <p className="text-xl text-white">
          Unlock the power of SEO as your secret weapon for online success. With
          our proven strategies and expertise, we'll propel your brand to new
          heights in search engine rankings, driving organic traffic and
          maximizing visibility. Don't let your competitors outshine you –
          harness the full potential of SEO and watch your business thrive
        </p>
        <div>
          <Link to="/contactForm">
            <div className="px-10 w-auto py-3 rounded-sm text-xl font-semibold primaryColor bg-white flex items-center gap-4 cursor-pointer">
              <Link to="/contact">Book A Call Now</Link>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SEOFourthConitainer;
