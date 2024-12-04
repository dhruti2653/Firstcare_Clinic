import React from 'react'

const Departments = ({ image, name, details }) => {
  return (
    <>
    <div className='lg:px-28'>
     <div className=' lg:mt-28 mt-12 lg:px-5 px-10 flex flex-col  w-full'  >
     <h1 className="text-[32px] font-medium  lg:pl-28">
          Medical Departments
        </h1>
        {/* first  row */}
        <div  className='flex lg:flex-row flex-col lg:mt-12 lg:gap-9 gap-5'>
            {/* first department */}
            <div className="bg-white lg:w-1/3 w-[310px] h-auto shadow-md shadow-gray-400 lg:p-7 p-4 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
      {/* Card Image */}
      <img src={'/images/child1.jpeg'} alt={name} className="lg:w-[350px] w-[275px] h-[120px] lg:h-[250px] " />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{'Child Care'}</h2>
        <p className="text-gray-700">{'Providing nurturing and safe environments for children to thrive, our child care services focus on holistic development through engaging activities. Our dedicated professionals ensure personalized attention. Trust us to support your childs growth while you balance work and family life.'}</p>
      </div>
    </div>

    {/* second department  */}
    <div className="bg-white lg:w-1/3 w-[310px] h-auto shadow-md shadow-gray-400 lg:p-7 p-4 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
      {/* Card Image */}
      <img src={'/images/about2.png'} alt={name} className="lg:w-[350px] lg:h-[250px]   w-[275px] h-[120px] " />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{'Cardiology'}</h2>
        <p className="text-gray-700">{'Comprehensive heart health assessments and diagnostics. Personalized treatment plans for heart disease management. Cutting-edge technology and expert care for a healthier heart.Expert heart care for diagnosis and treatment.. It involves procedures like ECGs, stress tests, and cardiac catheterization.'}</p>
      </div>
    </div>

    {/* third department  */}
    <div className="bg-white lg:w-1/3 w-[310px] h-auto shadow-md shadow-gray-400 lg:p-7 p-4 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
      {/* Card Image */}
      <img src={'/images/department3.jpg'} alt={name} className="lg:w-[350px]  lg:h-[250px]  w-[275px] h-[120px] " />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{'Gynecology'}</h2>
        <p className="text-gray-700">{'Gynecology focuses on womens reproductive health, addressing issues such as menstrual disorders, fertility, and pregnancy care. It also covers conditions like ovarian cysts, uterine fibroids, and menopause. Regular gynecological exams are essential for maintaining reproductive health.'}</p>
      </div>
    </div>
        </div>

        {/* second row  */}
        <div  className='flex lg:flex-row flex-col lg:mt-12 lg:gap-9 gap-5'>
            {/* first department */}
            <div className="bg-white lg:w-1/3 w-[310px] h-auto shadow-md shadow-gray-400 lg:p-7 p-4 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
      {/* Card Image */}
      <img src={'/images/women3.jpeg'} alt={name} className="lg:w-[350px] lg:h-[250px]  w-[275px] h-[120px] " />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{'Diseases of Women'}</h2>
        <p className="text-gray-700">{'White discharge, menstrual problems, urinary tract infection. Will provide excellent advice for menopause problems, infertility, pregnancy.- Husband and wife come together for infertility.'}</p>
      </div>
    </div>

    {/* second department  */}
    <div className="bg-white lg:w-1/3 w-[310px] h-auto shadow-md shadow-gray-400 lg:p-7 p-4 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
      {/* Card Image */}
      <img src={'/images/ayurvedic3.jpeg'} alt={name} className="lg:w-[350px] lg:h-[250px]  w-[275px] h-[120px]  " />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{'Ayurvedic Treatment'}</h2>
        <p className="text-gray-700">{'The diseases that are required will also be treated by complete Ayurveda method. On every Pushya Nakshatra children will be given intellectual golden drops. FirstCare Medical offers holistic Ayurvedic treatment that focuses on restoring balance and promoting overall wellness through natural remedies. '}</p>
      </div>
    </div>

    {/* third department  */}
    <div className="bg-white lg:w-1/3 w-[310px] h-auto shadow-md shadow-gray-400 lg:p-7 p-4 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
      {/* Card Image */}
      <img src={'/images/dresing2.jpeg'} alt={name} className="lg:w-[350px] lg:h-[250px]  w-[275px] h-[120px] " />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{'Dressing and Sutures'}</h2>
        <p className="text-gray-700">{'Dressing and suturing facility. We offer professional wound care services, including dressing and suturing, ensuring proper healing and minimizing infection risk for all types of injuries.'}</p>
      </div>
    </div>
        </div>

     </div>
     </div>
    </>
  );
};

export default  Departments;