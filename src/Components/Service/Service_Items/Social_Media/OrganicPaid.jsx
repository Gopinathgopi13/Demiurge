import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import servicesGrid from "../../../../assets/SVG/services-grid.svg";
function OrganicPaid() {
  return (
    <div className="w-full">
      <div className="lg:w-[1280px] mx-auto px-4 grid lg:grid-cols-2 grid-cols-1 -z-50">
        {/* Organic Container */}
        <div
          className="bg-slate-100 w-[90%] shadow-2xl py-10 px-10 rounded-3xl lg:relative left-24 flex flex-col gap-10  justify-around items-center md:pr-10"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="md:text-6xl text-3xl font-semibold">
            Organic Social
          </div>
          <div className="space-y-2 text-lg grid grid-cols-2 grid-rows-2 gap-5">
            <div className="flex flex-wrap items-center gap-4 ">
              <div>
                <FaArrowRight size={15} />
              </div>
              <div>Social media strategy</div>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <FaArrowRight size={15} />
              </div>
              <div>Platform selection</div>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <FaArrowRight size={15} />
              </div>
              <div>Profile Optimization</div>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <FaArrowRight size={15} />
              </div>
              <div>Copywriting</div>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <FaArrowRight size={15} />
              </div>{" "}
              <div>Graphics (image, video)</div>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <FaArrowRight size={15} />
              </div>
              <div>Content creation</div>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <FaArrowRight size={15} />
              </div>{" "}
              <div>Reputation management</div>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <FaArrowRight size={15} />
              </div>{" "}
              <div>Influencer marketing</div>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <FaArrowRight size={15} />
              </div>{" "}
              <div>Storytelling</div>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <FaArrowRight size={15} />
              </div>{" "}
              <div>Editorial calendars</div>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <FaArrowRight size={15} />
              </div>{" "}
              <div>Community management</div>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <FaArrowRight size={15} />
              </div>{" "}
              <div>Content creation</div>
            </div>
          </div>
          <Link to="/contactForm">
            <div className="px-4 py-3 rounded-sm text-2xl bg-[#0c2d57] text-[white] flex items-center gap-4 cursor-pointer">
              <Link to="/contact">Get a proposal</Link>
            </div>
          </Link>
        </div>
        {/* Paid Container */}
        <div
          className="bg-[#0c2d57] text-white w-[90%] py-10 shadow-xl rounded-3xl z-20 flex flex-col gap-10 justify-around items-center"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="md:text-6xl text-3xl font-semibold">Paid Social</div>
          <div className="space-y-2 text-lg gap-2 grid px-10 grid-cols-2 grid-rows-2">
            <div className="flex flex-wrap items-center gap-4">
              <div>
                <FaArrowRight size={15} />
              </div>
              <div>Strategy</div>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <FaArrowRight size={15} />
              </div>
              <div>Creative development</div>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <FaArrowRight size={15} />
              </div>
              <div>Audience/targeting</div>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <FaArrowRight size={15} />
              </div>
              <div>Reporting/analytics</div>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <FaArrowRight size={15} />
              </div>
              <div>A/B testing</div>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <FaArrowRight size={15} />
              </div>
              <div>Budgeting</div>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <FaArrowRight size={15} />
              </div>
              <div>Optimizing and scaling</div>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <FaArrowRight size={15} />
              </div>
              <div>Reaching the right audience</div>
            </div>
          </div>
          <Link to="/contactForm">
            <div className="px-4 py-3 rounded-sm text-2xl bg-[#E48F45] flex items-center gap-4 cursor-pointer">
              <Link to="/contact">Get a proposal</Link>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrganicPaid;
