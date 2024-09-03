import React, { useEffect, useState } from "react";
import { FaAlignJustify } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import SideMenu from "../Pages/SideMenu";



const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-2 flex items-center justify-between z-50 bg-fuchsia-950 font-Nunito">
        <h3 className="font-semibold text-3xl text-white font-Nunito">
          MATHIVATHANA
        </h3>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-white text-xl font-Roboto">
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden lg:flex items-center px-8 py-2.5 border border-gray-500 rounded-full ml-4 font-Roboto bg-white text-xl "
          >
            Contact
            <div className="p-1">
              <MdArrowOutward />
            </div>
          </a>

          <div
            className="block md:hidden ml-3"
            onClick={() => setOpenMenu(true)}
          >
            <button className="text-fuchsia-950 bg-white p-1 rounded border">
              <FaAlignJustify size={25} />
            </button>
          </div>
        </div>

        {/* mobile menu */}

        {openMenu && <SideMenu onClose={() => setOpenMenu(false)} />}
      </nav>
    </>
  );
};

export default Navbar;
