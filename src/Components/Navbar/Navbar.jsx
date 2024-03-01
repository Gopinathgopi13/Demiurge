import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import Button from "../Button";
import NavLinks from "./NavLinks";
import OrginalLogo1 from '../../../public/OrginalLogo1.png'
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="text-white hover:bg-black w-full z-50 sticky top-0">
      <div className="lg:w-[1280px] mx-auto flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <a href="/">
            <img
              src={OrginalLogo1}
              alt="logo"
              className="md:cursor-pointer h-16"
            />
          </a>
          <div
            className="text-3xl md:hidden flex justify-center items-center text-[#e48f45]"
            onClick={() => setOpen(!open)}
          >
            {open ? <IoClose size={30} /> : <IoMenu size={30} />}
          </div>
        </div>
        <ul className="md:flex hidden items-center gap-3 font-[Poppins]">
          <li>
            <Link to="/" className="py-7 px-3 inline-block hover:text-[#e48f45]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="py-7 px-3 inline-block hover:text-[#e48f45]">
              Portfolio
            </Link>
          </li>
          <NavLinks />

          <li>
            <Link to="/contact" className="py-7 px-3 inline-block hover:text-[#e48f45]">
              Contact
            </Link>
          </li>
        </ul>
        <div className="md:block hidden">
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
            <Link to="/portfolio" className="py-7 px-3 inline-block">
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
