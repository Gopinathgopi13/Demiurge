import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./Mylinks";
import { FaAngleDown } from "react-icons/fa";

const NavLinks = () => {
  return (
    <>
      {links.map((link) => (
        <div>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1 className="py-7 flex justify-between items-center md:pr-0 pr-5 group">
              <Link to={link.path} className="hover:text-[#e48f45]">
                {link.name}
              </Link>
              <span className="text- lg:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-1">
                <FaAngleDown />
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-12  hidden group-hover:md:block hover:md:block transition-all duration-[5000ms] ease-in">
                  <div className="py-3">
                    {/* <div
                      className="w-4 h-4 left-3 absolute 
                    mt-1 bg-white rotate-45"
                    ></div> */}
                  </div>
                  <div className="bg-[#0c2d57] p-5 grid">
                    {link.sublinks.map((mysublinks) => (
                      <div>
                        {mysublinks.sublink.map((slink) => (
                          <li className=" text-white my-2.5 hover:text-[#e48f45]">
                            <Link
                              to={slink.link}
                              className="hover:text-primary"
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
