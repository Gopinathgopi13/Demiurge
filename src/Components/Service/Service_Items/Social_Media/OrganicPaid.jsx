import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import servicesGrid from "../../../../assets/SVG/services-grid.svg";
function OrganicPaid() {
  return (
    <div className="w-full">
      <div className="lg:w-[1280px] mx-auto px-4 lg:pb-20 h-[90vh] grid lg:grid-cols-2 grid-cols-1">
        {/* Organic Container */}
        <div className="bg-slate-100 w-[90%] rounded-3xl lg:relative left-24 flex flex-col justify-around items-center pr-10">
          <div className="text-6xl font-semibold">Organic Social</div>
          <div className="space-y-2 text-lg">
            <div className="flex items-center gap-4">
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
              <div>Reporting/analytics</div>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <FaArrowRight size={15} />
              </div>{" "}
              <div>Content creation</div>
            </div>
          </div>
          <Link to="/contactForm">
            <div className="px-4 py-3 rounded-sm text-2xl bg-blue-700 flex items-center gap-4 cursor-pointer">
              <Link to="/contact">Get a proposal</Link>
            </div>
          </Link>
        </div>
        {/* Paid Container */}
        <div className="bg-black text-white w-[90%] rounded-3xl z-20 flex flex-col justify-around items-center">
          <div className="text-6xl font-semibold">Paid Social</div>
          <div className="space-y-2 text-lg">
            <div className="flex items-center gap-4">
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
            <div className="px-4 py-3 rounded-sm text-2xl bg-blue-700 flex items-center gap-4 cursor-pointer">
              <Link to="/contact">Get a proposal</Link>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrganicPaid;
