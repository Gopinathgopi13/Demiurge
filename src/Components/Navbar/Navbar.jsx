import { useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import CompanyLogo from "../../assets/Demiurge_logo.png";
import logo from "../../assets/Demiurge_logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
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
    { id: 1, text: "Services" },
    { id: 2, text: "Industries" },
    { id: 3, text: "Work" },
    { id: 4, text: "Company" },
    { id: 5, text: "Contact" },
  ];
  return (
    <>
      <nav className="nav_container w-full sticky top-0 hover:bg-black hover:transition-all hover:duration-800 py-5 text-white ">
        <div className="max-w-[1280px] h-20 mx-auto px-4 flex justify-between items-center">
          <div className="logo_div w-[136px] h-[70%] object-cover overflow-hidden">
            <Link to="/">
              <img src={logo} className="w-full h-full" alt="Company_Logo" />
            </Link>
          </div>
          {/* Menu */}
          {/* Desktop Navigation */}
          <div className="hidden lg:flex  w-[680px] h-full items-center justify-between">
            <button
              type="button"
              className="menu relative text-lg font-medium flex items-center cursor-pointer  gap-2"
              id="dropdownDelayButton"
              onClick={toggleDropdown}
              onMouseOut={toggleDropdown}
            >
              <div>Service</div>
              <div>
                <FaAngleDown />
              </div>
            </button>
            {isOpen && (
              <div
                id="dropdownDelay"
                className="z-10 absolute mt-1 top-32 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDelayButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            )}
            <div className="menu text-lg font-medium h-full flex items-center cursor-pointer  gap-2">
              <div>Industries</div>
              <div>
                <FaAngleDown />
              </div>
            </div>

            <div className="menu text-lg font-medium h-full flex items-center cursor-pointer  gap-2">
              <div>Work</div>
              <div>
                <FaAngleDown />
              </div>
            </div>

            <div className="menu text-lg font-medium h-full flex items-center cursor-pointer  gap-2">
              <div>Company</div>
              <div>
                <FaAngleDown />
              </div>
            </div>

            <div className="menu text-lg font-medium h-full flex items-center cursor-pointer  gap-2">
              <div>Contact</div>
            </div>
          </div>
          {/* Button */}
          <div className="hidden lg:flex button_continer border-4 border-white w-44 h-[70%] cursor-pointer justify-center items-center">
            <button className="text-xl">Book Intro Call</button>
          </div>

          {/* Mobile Navigation Icon */}
          <div onClick={handleNav} className="block mx-7 lg:hidden">
            {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </div>

          {/* Mobile Navigation menu */}
          <div
            className={
              nav
                ? "fixed lg:hidden left-0 top-0 w-[60%] space-y-5 h-full border-r border-r-gray-900 bg-[#000300] p-8 ease-in-out duration-500"
                : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
            }
          >
            <div className="logo_div w-[136px] mx-7 object-contain ">
              <Link to="/">
                <img
                  src={CompanyLogo}
                  className="w-full h-full"
                  alt="Company_Logo"
                />
              </Link>
            </div>
            <div className=" h-[50%] space-y-5 ">
              <div className=" lg:flex text-white w-[60%] space-y-5 mx-auto">
                {navItems.map(({ id, text }) => {
                  return (
                    <div
                      key={id}
                      className="menu text-lg font-medium h-full flex items-center cursor-pointer  gap-2"
                    >
                      <div>{text}</div>
                    </div>
                  );
                })}
              </div>
              <div className=" lg:flex button_continer border-4 border-white w-[50%] py- mx-auto text-center">
                <button className="text-lg">Book a Call</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
