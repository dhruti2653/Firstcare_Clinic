import React from "react";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi"; // Feather Icons


const Contact = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row lg:mt-24 mt-16 px-4 md:px-36">
        {/* Left Side: Contact Form */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-6 mb-8 md:mr-10">
          <h2 className="text-3xl font-bold mb-4"> Our Contact Us</h2>
          <form>
            <div className="mb-4 ">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Enter subject"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter your message"
                required
                rows="4"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-[#D9353D] hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full md:w-auto"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Right Side: Google Map */}
        {/* <div className="flex-1 bg-gray-200 rounded-lg p-4 h-[400px] md:h-[530px]">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/@22.2457228,73.2147302,15z?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>*/}
<div className="relative flex-1 bg-gray-200 rounded-lg p-4 h-[300px] sm:h-[400px] md:h-[530px] lg:h-[530px]">
  <iframe
    title="Google Map Vadodara"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.387973656992!2d73.16454031496398!3d22.307158885318557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc5cfd888fba3%3A0x2e2360e00e947611!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1635202567639!5m2!1sen!2sin"
    className="w-full h-full border-0"
    allowFullScreen=""
    loading="lazy"
  ></iframe>

  {/* Clickable overlay to open link */}
  <a
    href="https://www.google.com/maps/contrib/103568276042830367235/photos/@22.2457228,73.2147302,15z/data=!4m3!8m2!3m1!1e1?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D"
    target="_blank"
    rel="noopener noreferrer"
    className="absolute inset-0"
  >
    <span className="sr-only">Open full map</span>
  </a>
</div>



 


      </div>

      {/* Boxes Section */}
      <div className="flex flex-col lg:flex-row mt-10 px-4 md:px-32 gap-8">
        {/* First Box */}
        <div className="flex-1 bg-[#028DCD] p-6 py-20 rounded-2xl text-white transition-transform transform hover:-translate-y-2 hover:shadow-lg hover:shadow-[#028DCD]">
          <div className="flex items-center gap-4 -mt-8">
            <FiPhone className="text-[40px]" />
            <div>
              <a href="tel:+91 92659 70103" className="block font-bold text-[20px]">
                +91 92659 70103
              </a>
              <a href="mailto:amarjeet94.k@gmail.com" className="text-[19px]">
                amarjeet94.k@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Second Box */}
        <div className="flex-1 bg-[#028DCD] p-6 py-10 rounded-2xl lg:pt-11 text-white transition-transform transform hover:-translate-y-2 hover:shadow-lg hover:shadow-[#028DCD]">
          <div className="flex items-center gap-4">
            <FiMapPin className="text-[45px]" />
            <div>
              <p className="text-[19px]">
                <span className="font-bold text-[20px]">
                  5, Shree Siddheshwar Habitat,
                </span>
                <br />
                Nr. Tarsali Flyover, N.H 8 Road, Vadodara-390009
              </p>
            </div>
          </div>
        </div>

        {/* Third Box */}
        <div className="flex-1 bg-[#028DCD] p-6  py-16 rounded-2xl lg:pt-11 text-white transition-transform transform hover:-translate-y-2 hover:shadow-lg hover:shadow-[#028DCD]">
          <div className="flex items-center gap-4">
            <FiClock className="text-[45px]" />
            <div>
              <p className="text-[19px]">
                <span className="font-bold text-[20px]">
                  Mon-Sat: 5:30pm to 9:30pm
                </span>
                <br />
                Sun: 11:00am to 1:00pm
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
