import React from "react";

const Doctor = () => {
  return (
    <div className="container lg:mt-24 mt-36 lg:px-4 px-8">
      <section>
        <div className="flex justify-center">
          <p className="border-2 border-[#028DCD] text-[#D9353D] py-2 px-7 font-bold text-center">
            Doctor Medical
          </p>
        </div>
        <div className="flex justify-center py-8 md:py-12">
          <div className="w-full md:w-7/12 text-center">
            <p className="text-2xl md:text-5xl font-medium leading-snug">
              Your Trusted Partner in FirstCare Excellence Learn About Our Services
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-full md:w-10/12 text-center">
            <p className="text-base md:text-lg">
              At FirstCare, we believe that everyone deserves access to quality FirstCare. That's why we offer a wide range of medical services to meet your needs. Whether you're seeking preventive care, treatment for a specific condition, or rehabilitation services, our compassionate team is here to help. Join us at FirstCare and take charge of your health journey.
            </p>
          </div>
        </div>

        <div className="flex justify-center py-10">
          <div className="flex flex-col md:flex-row md:justify-evenly">
            {/* Card 1 */}
            <div className="w-full md:w-1/4 mb-10 md:mb-0">
              <div className="bg-[#D9D9D9] w-full h-[246px] rounded-2xl rounded-tl-[140px] mb-6"></div>
              <div className="flex justify-start pb-5">
                <p className="text-[#D9353D] bg-[#5b69f242] font-semibold px-6 py-2 rounded-xl">
                  Cardiology
                </p>
              </div>
              <p className="text-black font-bold text-xl md:text-2xl pb-5">
                Specializes in the diagnosis and treatment of heart diseases.
              </p>
              <p className="text-sm md:text-base pb-5">
                At FirstCare, we believe that everyone deserves access to quality FirstCare. That's why...
              </p>
              <div className="pb-5 flex items-center space-x-4">
                <h1 className="text-[#D9353D] text-[18px] font-bold">Live Chat</h1>
                <img src="/images/line1.png" alt="line1" className="w-6 h-4 mt-1" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full md:w-1/4 mb-10 md:mb-0">
              <div className="bg-[#D9D9D9] w-full h-[246px] rounded-2xl rounded-tl-[140px] mb-6"></div>
              <div className="flex justify-start pb-5">
                <p className="text-[#D9353D] bg-[#5b69f242] font-semibold px-6 py-2 rounded-xl">
                  Dermatology
                </p>
              </div>
              <p className="text-black font-bold text-xl md:text-2xl pb-5">
                Focuses on diagnosing and treating skin conditions.
              </p>
              <p className="text-sm md:text-base pb-5">
                At FirstCare, we believe that everyone deserves access to quality FirstCare. That's why...
              </p>
              <div className="pb-5 flex items-center space-x-4">
                <h1 className="text-[#D9353D] text-[18px] font-bold">Live Chat</h1>
                <img src="/images/line1.png" alt="line1" className="w-6 h-4 mt-1" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-full md:w-1/4">
              <div className="bg-[#D9D9D9] w-full h-[246px] rounded-2xl rounded-tl-[140px] mb-6"></div>
              <div className="flex justify-start pb-5">
                <p className="text-[#D9353D] bg-[#5b69f242] font-semibold px-6 py-2 rounded-xl">
                  Radiology
                </p>
              </div>
              <p className="text-black font-bold text-xl md:text-2xl pb-5">
                Involves using medical imaging techniques for diagnosis.
              </p>
              <p className="text-sm md:text-base pb-5">
                At FirstCare, we believe that everyone deserves access to quality Firstare. That's why...
              </p>
              <div className="pb-5 flex items-center space-x-4">
                <h1 className="text-[#D9353D] text-[18px] font-bold">Live Chat</h1>
                <img src="/images/line1.png" alt="line1" className="w-6 h-4 mt-1" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctor;
