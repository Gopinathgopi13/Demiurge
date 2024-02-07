import React from "react";
import { FaAngleDown } from "react-icons/fa";
import CompanyLogo from "../../assets/Demiurge_logo.png";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <nav className="nav_container w-full hover:bg-black hover:transition-all hover:duration-800 py-5 text-white ">
        <div className="max-w-[1280px] h-20 mx-auto flex justify-between items-center">
          <div className="logo_div w-[136px] object-contain">
            <img
              src={CompanyLogo}
              className="w-full h-full"
              alt="Company_Logo"
            />
          </div>
          {/* Menu */}
          <div className="w-[680px] h-full flex items-center justify-between">
            <div className="menu text-lg font-medium h-full flex items-center cursor-pointer  gap-2">
              <div>Services</div>
              <div>
                <FaAngleDown />
              </div>
            </div>
            <div className="menu text-lg font-medium h-full flex items-center cursor-pointer gap-2 ">
              <div>Industries</div>
              <div>
                <FaAngleDown />
              </div>
            </div>
            <div className="menu text-lg font-medium h-full flex items-center cursor-pointer gap-2">
              <div>Work</div>
              <div>
                <FaAngleDown />
              </div>
            </div>
            <div className="menu text-lg font-medium h-full flex items-center cursor-pointer gap-2">
              <div>Company</div>
              <div>
                <FaAngleDown />
              </div>
            </div>
            <div className="menu text-lg font-medium h-full flex items-center cursor-pointer gap-2">
              <div>Contact</div>
            </div>
          </div>

          {/* Button */}
          <div className="button_continer border-4 border-white w-44 h-[70%] cursor-pointer flex justify-center items-center">
            <button className="text-xl">Book Intro Call</button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
