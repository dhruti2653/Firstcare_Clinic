import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi"; // Feather Icons

const Footer = () => {
  return (
    <div>
      {/* Main Blue Section */}
      <div className="flex flex-col md:flex-row mt-20 w-full space-y-96">
        {/* Blue part */}
        <div className="flex py-16 w-full px-10 md:px-20 flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-20 bg-[#028DCD]">
          {/* First Column */}
          <div className="flex flex-col text-center md:text-left">
            <h1 className="text-white text-[18px] font-bold">About Us</h1>
            <p className="text-[#E0E0E0] pt-2 text-[15px]">
              Get healthy news, tips, and solutions to your problems from our
              experts.
            </p>
            <div className="flex lg:flex-row flex-col lg:gap-5 lg:mt-1 mt-3 text-[#E0E0E0]">
              <p className="font-medium text-[20px]">Address </p>
              <span>
                5, Shree Siddheshwar Habitat, Nr. Tarsali Flyover, N.H 8 Road
                Touch, Tarsali, Vadodara, Pincode: 390009
              </span>
            </div>
          </div>

          {/*   Second Column: desktop View  Quick Links Section */}
          <div className="flex flex-col text-center md:text-left hidden md:flex">
            <h1 className="text-white flex flex-row lg:-mt-4  gap-2 text-[18px] font-bold  ">
              Quick <br/><span>Links</span>
            </h1>

            <ul className="text-[#E0E0E0] mt-2">
              <nav className="flex flex-col gap-3 font-semibold">
              <NavLink
                  to="/"
                  className= "text-[#E0E0E0] cursor-pointer" >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className="text-[#E0E0E0] cursor-pointer" >
                  About
                </NavLink>
                {/* <NavLink
                  to="/doctor"
                  className= "text-[#E0E0E0] cursor-pointer">
                  Doctor
                </NavLink> */}
                <NavLink
                  to="/service"
                  className= "text-[#E0E0E0] cursor-pointer">
                  Service
                </NavLink>
                <NavLink
                  to="/contact"
                  className= "text-[#E0E0E0] cursor-pointer">
                  Contact
                </NavLink>
              </nav>
            </ul>
          </div>

          {/*   Second Column: Mobile View  Quick Links Section */}
          <div className="flex flex-col text-center md:text-left lg:hidden">
            <h1 className="text-white text-[18px] font-bold">Quick Links</h1>
            <ul className="text-[#E0E0E0] mt-2">
              <nav className="grid grid-cols-2 gap-2 md:grid-cols-3 font-semibold">
              <NavLink
                  to="/"
                  className="text-[#E0E0E0] cursor-pointer">
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className= "text-[#E0E0E0] cursor-pointer">
                  About
                </NavLink>
                {/* <NavLink
                  to="/doctor"
                  className= "text-[#E0E0E0] cursor-pointer">
                  Doctor
                </NavLink> */}
                <NavLink
                  to="/service"
                  className="text-[#E0E0E0] cursor-pointer">
                  Service
                </NavLink>
                <NavLink
                  to="/contact"
                  className="text-[#E0E0E0] cursor-pointer">
                  Contact
                </NavLink>
              </nav>
            </ul>
          </div>

          {/* Third Column: Contact Info */}
          <div className="flex flex-col space-y-4 text-center md:text-left">
            <h1 className="text-white text-[18px] font-bold">Get In Touch</h1>
            <div className="flex flex-col gap-1">
              <div className="flex flex-row gap-5 text-[#E0E0E0]">
                <FiPhone className="text-[#E0E0E0] mt-1 font-bold text-[22px]" />
                <a href="tel:+91 92659 70103">+91 92659 70103</a>
              </div>
              <div className="flex flex-row gap-5 mt-1 text-[#E0E0E0]">
                <FiMail className="text-[#E0E0E0] mt-1 font-bold text-[22px]" />
                <a href="mailto:amarjeet94.k@gmail.com">
                  amarjeet94.k@gmail.com
                </a>
              </div>
              <div className="flex flex-row gap-5 mt-1 text-[#E0E0E0]">
                <FiClock className="text-[#E0E0E0] mt-1 font-bold text-[22px]" />
                <span>
                  Mon-Sat: 5:30pm to 9:30pm <br /> Sun: 11:00am to 1:00pm
                </span>
              </div>
            </div>
          </div>

          {/* Fourth Column: Newsletter Signup */}
          <div className="flex flex-col items-center md:items-start space-y-8">
            <div>
              <h1 className="text-white font-bold text-[20px] text-center md:text-left">
                Newsletter
              </h1>
              <p className="text-[#E0E0E0] text-center md:text-left">
                Stay updated with the latest health tips, medical breakthroughs,
                and expert advice delivered right to your inbox!
              </p>
            </div>
            <div className="w-full flex justify-center md:justify-start pt-2">
              <form className="flex bg-white rounded-2xl overflow-hidden max-w-full">
                <input
                  type="email"
                  placeholder="Enter Your Email Here"
                  required
                  className="px-5 py-2 text-gray-600 text-[13px] w-[70%] md:w-[90%]"
                />
                <button
                  type="submit"
                  className="bg-[#D9353D] w-[30%] md:w-[40%] hover:bg-black hover:text-[#b9b8b8] text-white lg:px-5 py-2 font-semibold"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Red Footer Section */}
      <div className="bg-[#D9353D] flex flex-col md:flex-row py-4 px-6 md:px-20 w-full">
        <div className="flex flex-row w-full md:w-1/2 gap-2 text-[15px] items-center justify-center md:justify-start">
          
         
          <p className="text-white text-[15px] font-medium"> Copyright © 2024 . MakeMyVision Technology. All Rights Reserved.</p>						

        </div>
        <div className="w-full md:w-1/2 flex flex-row gap-2 items-center justify-center md:justify-end mt-2 md:mt-0">
          <img
            src="/images/phone.png"
            alt="phone"
            className="w-[14px] h-[14px] mt-1"
          />
          <p className="text-white font-bold text-center md:text-left">
            Contact Us: <span className="pl-5">+91 92659 70103</span>
          </p>
        </div>
      </div>

    </div>
  );
};

export default Footer;
