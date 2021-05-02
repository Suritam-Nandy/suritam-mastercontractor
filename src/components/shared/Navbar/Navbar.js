import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "react-feather";
import { IoIosCall } from "react-icons/io";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed w-full top-0 z-50 bg-gray-50 border-b md:flex md:items-center md:justify-between  px-3 pb-0 shadow-lg  md:px-5">
        {/* <!-- Logo text or image --> */}
        <div className="flex items-center justify-between  md:mb-0">
          <div className="max-w-full h-auto flex justify-center items-center bg-gray-50">
            <NavLink to="/">
              <img
                className="object-contain max-w-full h-12 md:h-20 my-1 w-auto"
                src="/Images/mastercontractor-logo-01-navbar.png"
                alt="logo"
              ></img>
              {/* {item.name} */}
            </NavLink>
          </div>
          <div className="md:hidden flex-row flex">
            {/* <li className="hidden md:block md:ml-2"> */}
            <a
              className="flex-row flex text-left justify-start items-start mr-3 cursor-pointer"
              rel="noopener noreferrer"
              href="tel:8003909540"
            >
              <IoIosCall className="mr-1" size={28} />
              <p className="text-xl font-semibold"> 8003909540 </p>
            </a>
            {/* </li> */}
            <button
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              onClick={() => setOpen(!open)}
            >
              <Menu size={16} className="text-gray-900" />
            </button>
          </div>
        </div>

        <nav>
          <ul
            className={`${
              open ? "block" : "hidden"
            } list-reset md:flex md:items-center md:justify-center `}
          >
            <li className="hidden md:block md:ml-2">
              <a
                className="flex-row flex text-left justify-start items-start "
                href=" "
                target="_blank"
                rel="noreferrer"
              >
                <IoIosCall className="mr-1" size={32} />
                <p className="ml-1 text-2xl font-semibold"> 8003909540 </p>
              </a>
            </li>

            <li className="md:ml-2">
              <a
                className="block no-underline hover:underline py-2 text-gray-darkest hover:text-black md:border-none md:p-0 md:text-xl md:font-semibold"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="md:ml-2">
              <a
                className="block no-underline hover:underline py-2 text-gray-darkest hover:text-black md:border-none md:p-0 md:text-xl md:font-semibold"
                href="/about"
              >
                About Us
              </a>
            </li>
            <li className="md:ml-2">
              <a
                className="block no-underline hover:underline py-2 text-gray-darkest hover:text-black md:border-none md:p-0 md:text-xl md:font-semibold"
                href="/projects"
                exact
              >
                Projects
              </a>
            </li>
            <li className="md:ml-2">
              <div className="block no-underline hover:underline py-2 text-gray-darkest hover:text-black md:border-none md:p-0 md:text-xl md:font-semibold">
                <a href="/services" exact>
                  Services
                </a>
              </div>
            </li>
            <li className="md:ml-2">
              <a
                className="block no-underline hover:underline py-2 text-gray-darkest hover:text-black md:border-none md:p-0  md:text-xl md:font-semibold"
                href="/signin"
              >
                Sign In
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
