import React from "react";
import { FaEye, FaBullseye } from 'react-icons/fa'; // Example icons for vision and mission
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row w-full lg:mt-12 md:mt-20 lg:px-40 px-4">
        {/* Left part */}
        <div className="w-full lg:w-1/2">
          <p className="w-28 text-center h-8 mx-auto lg:mx-0  mt-7 border-2 text-[#D9353D] font-bold text-lg border-[#028DCD]">
            About
          </p>
          <h1 className="text-[24px] lg:text-[43px] font-bold text-center lg:text-left mt-6">
            Discover Your Optimal First Care Solutions
          </h1>
          <p className="text-[#7a7979] text-[14px] lg:text-[15px] text-center lg:text-left px-2 mt-6 lg:mt-4 leading-6">
            At First Care Medical Clinic, we are dedicated to providing high-quality, compassionate healthcare to patients of all ages. Our team of experienced professionals is committed to ensuring that every patient receives personalized care, whether it’s for routine check-ups, diagnostic services, or emergency medical treatment.
          </p>

          {/* Mission section */}
          <div className="mt-8 lg:mt-7 px-2 ">
            <div className="flex items-start mb-4">
              <div className="bg-[#028DCD] p-2 rounded-md w-[40px] h-[40px] flex justify-center items-center">
                <FaBullseye className="text-white w-[23px] h-[23px]" />
              </div>
              <h1 className="pl-4 lg:pl-6 font-medium text-[16px] lg:text-[18px] mt-1 lg:mt-2">
                Our Mission
              </h1>
            </div>
            <span className="text-[#898989] text-[14px] lg:text-[15px] leading-7">
              Our mission is to provide accessible, compassionate, and high-quality healthcare to all. We strive to enhance patient well-being through personalized care and advanced medical services.
            </span>
          </div>

          {/* Vision section */}
          <div className="mt-8 lg:mt-7 ">
            <div className="flex items-start mb-4">
              <div className="bg-[#028DCD] p-2 rounded-md w-[40px] h-[40px] flex justify-center items-center">
                <FaEye className="text-white w-[23px] h-[23px]" />
              </div>
              <h1 className="pl-4 lg:pl-6 font-medium text-[16px] lg:text-[18px] mt-1 lg:mt-2">
                Our Vision
              </h1>
            </div>
            <span className="text-[#898989] text-[14px] lg:text-[15px] leading-7">
              We believe in embracing the value of wellness by prioritizing patient care and transforming the experience of health into a journey of joy and vitality.
            </span>
          </div>

          {/* Our Departments Button */}
          <div className="md:flex  mt-7 mx-9 lg:mx-0">
            <Link
              to={"/about"}
              className="bg-[#D9353D] text-white hover:bg-black hover:text-[#b9b8b8] flex h-12 font-semibold items-center justify-between gap-3 w-full sm:w-auto md:w-[220px] rounded-full px-3"
            >
              {/* Text */}
              <span className="pl-1 text-sm md:text-base text-center w-full sm:w-auto md:w-auto">
                Our About Us
              </span>

              {/* Icon */}
              <div className="flex justify-center items-center">
                <IoIosArrowDroprightCircle className="w-6 h-6 md:w-8 md:h-8" />
              </div>
            </Link>
          </div>
        </div>

        {/* Right part */}
        <div className="flex flex-col justify-center items-center relative w-full lg:w-1/2 lg:pl-9 mt-10 lg:mt-5">
          <div className="w-full lg:w-[500px]">
            <img src="images/about2.png" alt="about" className="h-auto w-full  lg:h-[450px]" />
          </div>
          {/* <div className="bg-[#028DCD] text-white text-center mt-4 p-4 rounded-lg lg:mx-9">
            <p>
              As a tertiary referral ICU to provide state of the art care with the help of very good professionals and infrastructure.
            </p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default About;
