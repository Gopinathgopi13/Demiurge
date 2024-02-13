import { useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import CompanyLogo from "../../assets/Demiurge_logo.png";
import logo from "../../assets/Demiurge_logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
function Navbar() {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Bind the event listener
    window.addEventListener("click", handleClickOutside);

    // Unbind the event listener on cleanup
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, path: "/", text: "Home" },
    { id: 2, path: "/service", text: "Services" },
    { id: 3, path: "/industries", text: "Industries" },
    { id: 4, path: "/work", text: "Work" },
    { id: 5, path: "/contact", text: "Contact" },
  ];
  return (
    <>
      <nav className="nav_container w-full sticky top-0 hover:bg-black hover:transition-all hover:duration-800 py-5 text-white ">
        <div className="max-w-[1280px]  mx-auto flex justify-between items-center">
          <div className="logo_div w-[120px] h-[60%] object-cover overflow-hidden">
            <Link to="/">
              <img src={logo} className="w-full h-full" alt="Company_Logo" />
            </Link>
          </div>
          {/* Menu */}
          {/* Desktop Navigation */}
          <div className="hidden lg:flex  w-[680px] h-full items-center justify-between">
            <div className="menu relative text-md font-medium  cursor-pointer  ">
              <Link to="/" className="flex items-center gap-2">
                <div>Home</div>
              </Link>
            </div>
            <div className="menu relative text-md font-medium  cursor-pointer  ">
              <Link to="/service" className="flex items-center gap-2">
                <div>Service</div>
                {/* <div>
                  <FaAngleDown />
                </div> */}
              </Link>
            </div>
            <div className="menu relative text-md font-medium  cursor-pointer  ">
              <Link to="/industries" className="flex items-center gap-2">
                <div>Industries</div>
                {/* <div>
                  <FaAngleDown />
                </div> */}
              </Link>
            </div>

            <div className="menu relative text-md font-medium  cursor-pointer  ">
              <Link to="/work" className="flex items-center gap-2">
                <div>Work</div>
                {/* <div>
                  <FaAngleDown />
                </div> */}
              </Link>
            </div>

            <div className="menu relative text-md font-medium  cursor-pointer  ">
              <Link to="/contact">
                <div>Contact</div>
              </Link>
            </div>
          </div>
          {/* Button */}
          <Link
            to="/contact"
            className="hidden lg:flex button_continer border-4 border-white w-44 h-[60%] cursor-pointer justify-center items-center"
          >
            <button className="text-lg">Book Intro Call</button>
          </Link>

          {/* Mobile Navigation Icon */}
          <div onClick={handleNav} className="block mx-7 lg:hidden">
            {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </div>

          {/* Mobile Navigation menu */}
          <AnimatePresence mode="wait" initial={false}>
            <div
              className={
                nav
                  ? "fixed lg:hidden left-0 top-0 space-y-5 h-full border-r border-r-gray-900 bg-[#000300] p-8 ease-in-out duration-500"
                  : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
              }
            >
              <div className="logo_div w-[136px] mx-7 object-contain ml-8">
                <Link to="/">
                  <img
                    src={CompanyLogo}
                    className="w-full h-full"
                    alt="Company_Logo"
                  />
                </Link>
              </div>
              <div className="space-y-5 ">
                <div className=" lg:flex text-white w-[60%] flex flex-col items-center space-y-5 mx-auto">
                  {navItems.map(({ id, text, path }) => {
                    return (
                      <Link to={path}>
                        <div
                          key={id}
                          className="menu text-lg font-medium h-full flex items-center cursor-pointer  gap-2"
                        >
                          <div>{text}</div>
                        </div>
                      </Link>
                    );
                  })}
                  <Link
                    to="/contact"
                    className="w-full lg:flex button_continer border-4 border-white py- mx-auto text-center"
                  >
                    <button className="text-lg">Book a Call</button>
                  </Link>
                </div>
              </div>
            </div>
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

const framerSidebarBackground = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, transition: { delay: 0.2 } },
  transition: { duration: 0.3 },
};

const framerSidebarPanel = {
  initial: { x: "-100%" },
  animate: { x: 0 },
  exit: { x: "-100%" },
  transition: { duration: 0.3 },
};

const framerText = (delay) => {
  return {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: {
      delay: 0.5 + delay / 10,
    },
  };
};
