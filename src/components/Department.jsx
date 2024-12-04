import React, { useState } from "react";
import {
  FaHeartbeat,
  FaBrain,
  FaHandHoldingMedical, FaChild,
} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { GiLungs, GiFemale } from "react-icons/gi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const departments = [
  {
    icon: <FaHeartbeat />,
    title: "Cardiology",
    description:
      "How all this mistaken al idea of denouncing pleasure praisings pain was or that complete.",
    link: "/doctor",
  },
  {
    icon: <FaChild />,
    title: "Child Care",
   description:"Child care ensures a safe, nurturing environment for children, promoting their growth, and social skills development.",
   link: "/doctor",
  },
  {
    icon: <GiLungs />,
    title: "Pulmonology",
    description:
      "Who chooses to enjoy a pleasure that has annoying consquences, or one who avoids a pain.",
    link: "/doctor",
  },
  {
    icon: <GiFemale />,
    title: "Gynecology",
    description:
      "Who chooses to enjoy a pleasure that has annoying consquences, or one who avoids a pain.",
    link: "/doctor",
  },
  {
    icon: <FaBrain />,
    title: "Neurology",
    description:
      "Who chooses to enjoy a pleasure that has annoying consquences, or one who avoids a pain.",
    link: "/doctor",
  },
  {
    icon: <FaHandHoldingMedical />,
    title: "Dermatology",
    description:
      "How all this mistaken al idea of denouncing pleasure praisings pain or that was complete.",
    link: "/doctor",
  },
];

const DepartmentSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === departments.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? departments.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      {/* Desktop View */}
      <div className="hidden lg:block lg:mt-28 mt-12 lg:px-5 px-10">
        <h1 className="text-[32px] font-medium  lg:pl-28">
          Medical Departments
        </h1>
        <div className="flex w-full h-auto lg:px-28">
          <div className="overflow-hidden w-full py-8 relative block">
            <div
              className="flex animate-marquee gap-9 ease-in-out"
              style={{
                animationDuration: "20s",
                animationIterationCount: "infinite",
              }}
            >
              {/* Duplicate the list to make continuous scroll seamless */}
              {[...departments, ...departments].map((department, index) => (
                <div
                  key={index}
                  className="min-w-[250px] lg:p-6 p-4 bg-white border rounded-lg shadow-md flex-shrink-0"
                >
                  <div className="min-w-[250px] max-w-[250px] lg:p-5 p-3 bg-white flex-shrink-0">
                    <div className="icon text-[#028DCD] text-[100px] hover:bg-[#028DCD] hover:text-white flex justify-center items-center">
                      {department.icon}
                    </div>
                    <h3 className="text-xl font-semibold lg:mt-11 mt-5 mb-2 flex justify-center items-center">
                      {department.title}
                    </h3>
                    <span className="text-gray-600 mb-4 line-clamp-2 mt-5 flex justify-center items-center">
                      {department.description}
                    </span>
                    <a
                      href={department.link}
                      className="inline-block lg:px-11 px-6 py-2 border rounded-full font-bold text-[17px] text-black hover:text-white hover:bg-[#028DCD] transition-colors duration-300"
                    >
                      Read More
                    </a>
                  
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden mt-12 px-8">
        <h1 className="text-[28px] font-medium text-center">Medical Departments</h1>
        <div className="relative w-full mt-6">
          {/* Single Card Display */}
          <div className="p-6 bg-white border rounded-lg shadow-md flex flex-col items-center">
            <div className="text-[#028DCD] text-[80px] mb-5">{departments[currentIndex].icon}</div>
            <h3 className="text-xl font-semibold mb-2">{departments[currentIndex].title}</h3>
            <p className="text-gray-600 mb-4 text-center">{departments[currentIndex].description}</p>
            <a
              href={departments[currentIndex].link}
              className="inline-block px-6 py-2 border rounded-full font-bold text-black hover:text-white hover:bg-[#028DCD] transition-colors duration-300"
            >
              Read More
            </a>
          </div>

          {/* Buttons */}
          <div className="flex justify-center mt-6 m-3">
            <button
              onClick={handlePrev}
              className="bg-gray-200 p-2 m-2 rounded-full"
            >
              <FaChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="bg-gray-200 p-2 m-2 rounded-full"
            >
              <FaChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DepartmentSlider;
