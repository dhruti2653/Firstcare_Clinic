import React from "react";
import { FiSearch } from "react-icons/fi";

const Review = () => {
  return (
    <div className="w-full px-4 md:px-24 lg:mt-28 mt-6 flex flex-col-reverse md:flex-row">
      {/* Left part */}
      <div className="flex flex-col-reverse md:flex-row w-full md:w-1/2 relative">
        {/* Left Side: 3 Boxes */}
        <div className="flex flex-col gap-10 ml-0 md:ml-7 !z-10 mt-5  w-full md:w-1/2">
          {/* 1st Box */}
          <div className="flex p-6 w-full md:w-[400px] h-[115px] bg-[#E9EFF5] shadow-xl rounded-3xl items-center">
            <div className="bg-[#D9D9D9] border-[3px] border-blue-500 rounded-full ml-2 h-[65px] w-[65px] flex items-center justify-center">
              <span className="text-blue-500 text-[24px]">👤</span>
            </div>
            <div className="ml-4 flex-1">
              <h1 className="font-semibold text-[20px]">Emily Sarah</h1>
              <span className="text-[#898989] text-[16px] mt-2 block">
                This article provides a comprehe <br /> overview of the topic
              </span>
            </div>
          </div>
          {/* 2nd Box */}
          <div className="flex p-6 w-full md:w-[400px] h-[115px] bg-[#E9EFF5] shadow-xl rounded-3xl items-center">
            <div className="bg-[#D9D9D9] border-[3px] border-blue-500 rounded-full ml-2 h-[65px] w-[65px] flex items-center justify-center">
              <span className="text-blue-500 text-[24px]">👤</span>
            </div>
            <div className="ml-4 flex-1">
              <h1 className="font-semibold text-[20px]">Jessica Olivia</h1>
              <span className="text-[#898989] text-[16px] mt-2 block">
                I found the insights shared in this <br />
                discussion very thought
              </span>
            </div>
          </div>
          {/* 3rd Box */}
          <div className="flex p-6 w-full md:w-[400px] h-[115px] bg-[#E9EFF5] shadow-xl rounded-3xl items-center">
            <div className="bg-[#D9D9D9] border-[3px] border-blue-500 rounded-full ml-2 h-[65px] w-[65px] flex items-center justify-center">
              <span className="text-blue-500 text-[24px]">👤</span>
            </div>
            <div className="ml-4 flex-1">
              <h1 className="font-semibold text-[20px]">Isabella</h1>
              <span className="text-[#898989] text-[16px] mt-2 block">
                Thank you for sharing your exper <br />
                It's inspiring to hear how
              </span>
            </div>
          </div>
        </div>
        {/* Right Side: Red Container */}
        <div className="bg-[#D9353D] w-full h-[420px] ml-[-150px] mr-28 rounded-tl-[200px] rounded-br-[200px] rounded-[30px] mt-8 md:mt-0 hidden md:block" >
        </div>
      </div>
      {/* Right part */}
      <div className="w-full md:w-1/2 h-auto mt-10 md:mt-0">
        <div className="flex lg:justify-start justify-center w-full">
          <p className="text-center p-2 lg:w-[200px] md:w-44 border-2 text-[#D9353D] font-bold text-lg border-[#028DCD] whitespace-nowrap">
            Review Medical
          </p>
        </div>
        <h1 className="text-[28px] md:text-[42px] font-bold mt-5">
          Care Connect is connection to comprehensive firstCare
        </h1>
        <p className="text-[#7a7979] mt-7 leading-6 text-base md:text-lg">
          Our patient-centered approach focuses on building strong relationships with our patients and delivering personalized care plans.
        </p>
        <div className="flex justify-start mt-14">
          <div className="flex bg-[#E9EFF5] rounded-2xl overflow-hidden p-2 w-full md:w-[350px] max-w-lg">
            <input
              type="text"
              placeholder="Search Comment"
              className="px-4 py-2 text-gray-600 bg-[#E9EFF5] focus:outline-none w-full"
            />
            <button className="bg-[#E9EFF5] text-[#D9353D] px-4 py-2">
              <FiSearch className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
