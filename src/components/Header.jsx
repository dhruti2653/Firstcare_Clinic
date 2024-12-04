import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import FiX for the close icon
import { Link, NavLink } from "react-router-dom";
import Setup from "../components/Navbar";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu visibility

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="top-0 sticky z-20">
        <Setup />
        <header className="flex justify-between sticky top-0 z-30 bg-white items-center px-6 md:px-16">
          {/* Logo */}
          <div className="lg:w-[190px]">
            <Link to={"/"}>
              {" "}
              <img
                src="/images/logo.png"
                alt="Logo"
                className="h-[100px] md:h-auto"
              />
            </Link>
          </div>
                
               

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex space-x-14 text-[20px] list-none font-semibold">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 cursor-pointer"
                  : "text-black  cursor-pointer"
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 cursor-pointer"
                  : "text-black  cursor-pointer"
              }
            >
              About
            </NavLink>
            {/* <NavLink
              to={"/doctor"}
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 cursor-pointer"
                  : "text-black  cursor-pointer"
              }
            >
              Department
            </NavLink> */}
            <NavLink
              to={"/service"}
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 cursor-pointer"
                  : "text-black  cursor-pointer"
              }
            >
              Service
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 cursor-pointer"
                  : "text-black  cursor-pointer"
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isMenuOpen ? (
                <FiX className="w-14 h-14 text-[#D9353D]" /> // Close icon when menu is open
              ) : (
                <FiMenu className="w-14 h-14 text-[#D9353D]" /> // Hamburger icon when menu is closed
              )}
            </button>
          </div>

          {/* Mobile Navigation (Visible only when menu is open) */}
          {isMenuOpen && (
            <nav className="absolute top-16 left-0 w-full bg-white shadow-lg py-4 flex flex-col items-center space-y-4 z-50 md:hidden">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "text-red-500 cursor-pointer"
                    : "text-black  cursor-pointer"
                }
                onClick={toggleMenu}
              >
                Home
              </NavLink>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive
                    ? "text-red-500 cursor-pointer"
                    : "text-black  cursor-pointer"
                }
                onClick={toggleMenu}
              >
                About
              </NavLink>
              {/* <NavLink
                to={"/doctor"}
                className={({ isActive }) =>
                  isActive
                    ? "text-red-500 cursor-pointer"
                    : "text-black  cursor-pointer"
                }
                onClick={toggleMenu}
              >
                Department
              </NavLink> */}
              <NavLink
                to={"/service"}
                className={({ isActive }) =>
                  isActive
                    ? "text-red-500 cursor-pointer"
                    : "text-black cursor-pointer"
                }
                onClick={toggleMenu}
              >
                Service
              </NavLink>
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  isActive
                    ? "text-red-500 cursor-pointer"
                    : "text-black cursor-pointer"
                }
                onClick={toggleMenu}
              >
                Contact
              </NavLink>
              {/* Live Chat Button */}
              <div className=" md:flex">
                <Link
                  to={"/apoiment"}
                  className="bg-[#D9353D] text-white hover:bg-black  hover:text-[#b9b8b8] flex h-10 font-semibold items-center justify-between gap-3 w-full md:w-[220px] rounded-full px-4"
                >
                  {/* Text */}
                  <span className="pl-1 text-sm md:text-base">
                    Book Appointment
                  </span>

                  {/* Icon */}
                  <div className="flex justify-center items-center">
                    <IoIosArrowDroprightCircle className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                </Link>
              </div>
            </nav>
          )}

          {/* Live Chat Button */}
          <div className="hidden md:flex">
            <Link
              to={"/apoiment"}
              className="bg-[#D9353D] text-white hover:bg-black  hover:text-[#b9b8b8] flex h-12 font-semibold items-center justify-between gap-3 w-full md:w-[220px] rounded-full px-4"
            >
              {/* Text */}
              <span className="pl-1 text-sm md:text-base">
                Book Appointment
              </span>

              {/* Icon */}
              <div className="flex justify-center items-center">
                <IoIosArrowDroprightCircle className="w-6 h-6 md:w-8 md:h-8" />
              </div>
            </Link>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
