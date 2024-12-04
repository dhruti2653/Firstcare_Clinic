import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";

const Navbar = () => {
  return (
      <div className="bg-[#028DCD] font-semibold py-3 flex  z-30 md:flex-row gap-4 md:gap-8 sticky top-0">
      {/* Phone and Website Info */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 ml-5 md:ml-36">
        <p className="text-white flex items-center gap-3">
          <FiPhoneCall className="mt-1" />
          <a href="tel:+91 92659 70103">+91 92659 70103</a>
          </p>
        <p className="text-white flex items-center gap-3">
          <TfiWorld className="mt-1" />
          <a href="mailto:amarjeet94.k@gmail.com">
                  amarjeet94.k@gmail.com
                </a>        </p>
      </div>

      {/* Social Icons */}
      <div className="flex gap-4 md:gap-9 ml-auto mr-5 md:mr-36 justify-center md:justify-end">
        <img src="/images/Instagram.png" alt="Instagram" className="w-6 h-6" />
        <img src="/images/Facebook.png" alt="Facebook" className="w-6 h-6" />
        <img src="/images/Vector.png" alt="Vector" className="w-6 h-6" />
      </div>
    </div>
  );
};

export default Navbar;