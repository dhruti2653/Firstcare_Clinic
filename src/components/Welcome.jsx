import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";

// import { FaGreaterThan } from "react-icons/fa6";

const Welcome = () => {
  return (
    <div className="w-full lg:mt-20  mt-7 px-4">
      <div className="flex flex-col lg:flex-row w-full h-auto">
        {/* Left Part */}
        <div className="w-full lg:w-1/2 lg:h-[770px] mb-10 lg:mb-0">
          <p className="w-32 text-center h-8 mx-auto lg:ml-28 mt-7 border-2 text-[#D9353D] font-bold text-lg border-[#028DCD]">
            Welcome
          </p>
          <h1 className="text-[24px] lg:text-[35px] font-bold px-6 lg:px-28 mt-6 lg:mr-16 text-center lg:text-left">
            Welcome to First Care Medical journey to optimal health begins
          </h1>
          <p className="text-[#7a7979] px-6 lg:px-28 mt-4 lg:mt-6 leading-7 lg:leading-7 text-center lg:text-left">
            Welcome to FirstCare Medical, where your journey to optimal health
            be FirstCare, We are committed to providing you with Personalized
            and comprehensive healthcare solutions tailored to your unique
            needs.
          </p>

          <div className="flex flex-col lg:flex-row w-full mt-8 lg:pl-0 pl-6 lg:mt-7 justify-center lg:pr-16 lg:justify-start">
            <div className="flex items-center mb-8 lg:mb-0">
              <img
                src="/images/welcome1.svg"
                alt="Welcome1"
                className="bg-[#028DCD] p-3 rounded-lg w-[60px] h-[50px] mx-auto lg:ml-[110px]"
              />
              <div className="flex flex-col w-auto pl-6  text-left">
                <h1 className="font-bold text-[16px]">Primary Care</h1>
                <span className="text-[#898989] text-[15px] mt-2">
                  Primary Care involves the provision of basic Firstcare
                  services.
                </span>
              </div>
            </div>

            <div className="flex items-center">
              <img
                src="/images/welcome2.png"
                alt="Welcome2"
                className="bg-[#028DCD] p-3 rounded-lg w-[60px] h-[50px] mx-auto lg:ml-[110px]"
              />
              <div className="flex flex-col w-auto pl-6 text-left">
                <h1 className="font-bold text-[16px]">Specialty Care</h1>
                <span className="text-[#898989] text-[15px] mt-2">
                  Specialty Care involves the provision of advanced medical
                  services.
                </span>
              </div>
            </div>
          </div>

          {/* Button Section */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start lg:ml-28 mt-6 lg:mt-[45px]">
          <div className=" md:flex">
                <Link
                  to={"/contact"}
                  className="bg-[#D9353D] text-white hover:bg-black  hover:text-[#b9b8b8] flex h-12 font-semibold items-center justify-between gap-3 w-full md:w-[220px] rounded-full px-4"
                >
                  {/* Text */}
                  <span className="pl-1 text-sm md:text-base">
                  Contact Us
                  </span>

                  {/* Icon */}
                  <div className="flex justify-center items-center">
                    <IoIosArrowDroprightCircle className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                </Link>
                
              </div>

            {/* <div className="flex items-center mt-3 pl-32  space-x-3 w-full">
              <p className="text-[20px] font-bold">See More</p>
              <img src="/images/line1.png" alt="line1" className="w-[25px] mt-1 h-[15px]" />
            </div> */}
          </div>
        </div>

        {/* Right Part */}
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          {/* Circle Avatar */}
          <div className="flex justify-center items-center">
            <div className="bg-[#3987f461] w-[280px] lg:w-[490px] h-[280px] lg:h-[490px] rounded-full flex justify-center items-center border border-slate-400">
              <div className="w-[260px] lg:w-[470px] h-[260px] lg:h-[470px] rounded-full border-2 border-dashed flex justify-center items-center border-[#99226659]">
                <div className="bg-[#3988F4] w-[240px] lg:w-[430px] h-[240px] lg:h-[430px] rounded-full flex justify-center items-center border border-slate-500">
                  <div className="bg-[#0E20FF] w-[220px] lg:w-[390px] h-[220px] lg:h-[390px] rounded-full flex justify-center items-center border border-slate-600">
                    <div className="z-10 mb-[25px]">
                      <img
                        src="/images/doctor1.png"
                        alt="doctor"
                        className="object-cover rounded-full mt-5 h-[200px]  w-[200px] lg:w-[350px] lg:h-[350px] md:[300px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Doctor Card */}
          <div className="flex mt-5 lg:mt-0 lg:p-6 p-4 w-[350px] lg:w-[500px] h-auto bg-[#3b82f61a] border border-[#9922656d] rounded-3xl items-center">
            <div className="bg-blue-500 border-[3px] border-blue-500 rounded-full w-[70px] h-[70px] flex items-center justify-center">
              {/* <span className="text-blue-500 text-[24px]">👤</span> */}
              <img src="/images/doctor1.png" alt="doctor" className="object-cover rounded-full w-[63px] h-[63px]"/>
            </div>
            <div className="ml-4 flex-1">
              <h1 className="font-semibold text-[20px] lg:text-[24px]">
                Dr. Amarjeet Kaur<br/>
                <span className="font-semibold text-[17px]">B.A.M.S., MD (Ayu)</span>
              </h1>
              <span className="text-[#898989] text-[14px] lg:text-[16px] mt-1 block">
                Welcome to FirstCare Medical, where your journey to optimal
                health begins.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Achievement Section */}
      <div className="flex justify-center items-center px-5 mt-16">
        <div className="bg-[#D9353D] h-auto w-full lg:w-[1300px] rounded-3xl flex flex-col lg:flex-row gap-8 lg:p-16 p-10">
          {/* First Section */}
          <div className="flex items-center space-x-6">
            <img
              src="/images/healing.png"
              alt="healing"
              className="bg-[#E9EFE5] p-3 rounded-lg w-[60px] h-[60px] lg:w-[70px] lg:h-[70px]"
            />
            <div className="flex flex-col">
              <h1 className="font-semibold text-[18px] lg:text-[23px] text-white">
                Emergency Medicine
              </h1>
              <span className="text-[#b1b1b1] text-[14px] lg:text-[17px] mt-2">
                FirstCare Medical, where your journey to optimal health begins.
              </span>
            </div>
          </div>

          {/* Second Section */}
          <div className="flex items-center space-x-6 ">
            <img
              src="/images/surgical.png"
              alt="surgical"
              className="bg-[#E9EFE5] p-3 rounded-lg w-[60px] h-[60px] lg:w-[70px] lg:h-[70px]"
            />
            <div className="flex flex-col">
              <h1 className="font-semibold text-[18px] lg:text-[23px] text-white">
                Surgery
              </h1>
              <span className="text-[#b1b1b1] text-[14px] lg:text-[17px] mt-2">
                Surgery involves the use of operative techniques to treat
                diseases.
              </span>
            </div>
          </div>

          {/* Third Section */}
          <div className="flex items-center space-x-6">
            <img
              src="/images/stress.png"
              alt="stress"
              className="bg-[#E9EFE5] p-3 rounded-lg w-[60px] h-[60px] lg:w-[70px] lg:h-[70px]"
            />
            <div className="flex flex-col">
              <h1 className="font-semibold text-[18px] lg:text-[23px] text-white">
                Mental Health
              </h1>
              <span className="text-[#b1b1b1] text-[14px] lg:text-[17px] mt-2">
                FirstCare Medical, where your journey to optimal health begins.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
