import React from 'react';

const History = () => {
  return (
    <>
      {/* history section */}
      <div className="flex flex-col lg:flex-row lg:mt-32 mt-20 lg:px-44 px-6 ">
        {/* image section */}
        <div className="lg:w-1/2 w-full lg:pr-10">
          <img 
            src="images/opening.jpeg" 
            alt="history" 
            className="lg:h-[300px] lg:w-[500px] h-auto w-full hover:opacity-65"
          />
        </div>

        {/* content section */}
        <div className="flex flex-col lg:w-1/2 lg:pl-10 w-full gap-3 mt-6 lg:mt-0 lg:text-left text-center">
          <h1 className="text-[24px] lg:text-[32px] font-bold">FirstCare Medical History</h1>
          <p className="text-[15px] lg:text-[17px]">
            "With the support of family and all those who stood by my side in my journey to 
            accomplish my dream to provide health care to needy I am happy to announce 
            about my clinic all set in act of service from 
            <span className="font-bold"> 1st July, 2023</span> onwards."
          </p>
          <div className="flex flex-col items-center lg:items-start gap-1">
            <h1 className="text-[18px] lg:text-[22px] font-bold">Dr. Amarjeet Kaur</h1>
            <p className="text-[14px] lg:text-[16px] font-medium">B.A.M.S., MD(Ayu)</p>
            <p>Reg.No.-GB(I) 21355</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
