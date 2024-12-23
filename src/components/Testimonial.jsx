import React from "react";
import { FiSearch } from "react-icons/fi";

const ClientBox = ({ image, name, review, city }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg px-20 shadow-lg flex flex-col items-center text-center">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full object-cover mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-700 mb-2">{review}</p>
      <p className="text-gray-500">{city}</p>
    </div>
  );
};

const Testimonial = () => {
  const clients = [
    {
      image: "/images/1.png",
      name: "Vaibhavi Thakkar",
      review:
        "Doctor is very knowledgeable, friendly, informative and puts our concerns first. Budget friendly clinic with best treatment.",
      // city: "New York",
    },
    {
      image: "/images/5.png",
      name: "sakshi madle",
      review:
        "I'm taking my treatment from Dr Amarjeet ma'am and I am thoroughly impressed with the level of care and expertise provided.",
      // city: "Los Angeles",
    },
    {
      image: "/images/4.png",
      name: "Mayurkumar Patel",
      review:
        "Dr. is knowledgeable. Take time to assess and give only required medicine. Fee is also very reasonable. They have also most of required primary medicine so u also don't need to visit medical store after visit in most cases.",
      // city: "Chicago",
    },
    {
      image: "/images/3.png",
      name: "Rachel Pathak",
      review:
       " Best Clinic in the vicinity of Baroda !! A lot of right advices and recommendations for all my medical needs online and offline. Always available to help the needy. Ekdum Mast 👌 Always anytime recommend Dr.Amarjeet. …",
      // city: "Chicago",
    },
  ];

  return (
    <>
      <div className="w-full mt-24 px-4 flex justify-items-center">
        <div className="w-full">
          {/* Main container with responsive width */}
          <div className="flex md:pl-20  justify-center w-full">
            {/* Responsive padding and flex alignment */}
            <p className="text-center p-2 lg:w-[200px] md:w-44 border-2  text-[#D9353D] font-bold text-lg border-[#028DCD] whitespace-nowrap">
              Testimonial
            </p>
          </div>
          <h1 className="text-[30px] md:text-[42px]  flex justify-center items-center  text-center lg:px-48 font-bold md:pl-20  mt-5 ">
            Care Connect is connection to comprehensive First Care Medical Clinic
          </h1>
          <p className="text-[#7a7979] md:pl-20 pl-5 flex justify-center items-center text-center lg:px-52 mt-5  leading-6 text-base md:text-lg">
            Our patient-centered approach focuses on building strong
            relationships with our patients and delivering personalized care
            plans. From preventive screenings to chronic disease management.
          </p>
          {/* <div className="flex justify-center md:pl-20 pl-5 mt-5 md:mt-10">
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
          </div> */}
        </div>
      </div>

      {/* right part  */}

      <div className="flex w-full lg:px-20 px-6 sm:px-6 md:px-28">
      <div className="overflow-hidden py-11 relative block">
        <div
          className="flex animate-marquee ease-in-out"
          style={{
            animationDuration: '20s',
            animationIterationCount: 'infinite',
          }}
        >
          {/* Original + Duplicated clients for seamless scroll */}
          {[...clients, ...clients].map((clients, index) => (
            <div key={index} className="flex-shrink-0 w-full  lg:w-1/3 px-2">
              <div className="p-6 bg-[#fcfcfc] border hover:bg-[#e3e3e3] lg:h-[330px]  rounded-lg shadow-md flex flex-col items-center">
                <img
                  src={clients.image}
                  alt={clients.name}
                  className="h-[100px] w-[100px] rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold mt-2">{clients.name}</h3>
                <span className="text-gray-600 mt-2 text-center ">
                  {clients.review}
                </span>
                {/* <p className="py-2 rounded-full font-bold text-[17px] text-[#028DCD] mt-2">
                  {clients.city}
                </p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Testimonial;
