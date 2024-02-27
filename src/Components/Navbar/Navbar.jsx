import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Logo from "../../assets/DEMIURGE_LOGO.png";
// import OrginalLogo  from
import Button from "../Button";
import NavLinks from "./NavLinks";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="text-white hover:bg-black w-full z-50">
      <div className="lg:w-[1280px] mx-auto flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <a href="/">
            <img src="./OrginalLogo1.png" alt="logo" className="md:cursor-pointer h-16" />
          </a>
          <div
            className="text-3xl md:hidden text-[#e48f45]"
            onClick={() => setOpen(!open)}
          >
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden items-center gap-3 font-[Poppins]">
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="py-7 px-3 inline-block">
              Portfolio
            </Link>
          </li>
          <NavLinks />

          <li>
            <Link to="/contact" className="py-7 px-3 inline-block">
              Contact
            </Link>
          </li>
        </ul>
        <div
          className="md:block hidden"
          data-aos="fade-left"
          data-aos-delay="500"
          data-aos-duration="1000"
        >
          <Button />
        </div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-[#0c2d57] fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4 z-20
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Portfolio
            </Link>
          </li>
          <NavLinks />
          <div className="py-5">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
