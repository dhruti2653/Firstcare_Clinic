import React, { useState } from "react";

const services = [
  {
    id: 1,
    image: "/images/skin.png",
    title: "Skin Diseases",
    description: "Hives, ringworm, eczema, white spots, acne, itching, psoriasis, allergies. we specialize in diagnosing and treating common skin diseases such as eczema, psoriasis, acne, and dermatitis. Our dermatology services focus on personalized care, ensuring effective treatment plans for healthy, glowing skin.",
  },
  {
    id: 2,
    image: "/images/dresing2.png",
    title: "Dressing and Sutures",
    description: "Dressing and suturing facility. We offer professional wound care services, including dressing and suturing, ensuring proper healing and minimizing infection risk for all types of injuries.",
  },
  {
    id: 3,
    image: "/images/comon.png",
    title: "Common Diseases",
    description: "All fever, diarrhoea, cold, back pain, cough, asthma. Hair problems and joint pains, rheumatism etc. we provide expert care for common diseases like diabetes, hypertension, respiratory infections, and heart disease. Our focus is on early diagnosis, personalized treatment, and preventive care to ensure optimal health outcomes for all patients.",
  },
  {
    id: 4,
    image: "/images/child.png",
    title: "Diseases of Children",
    description: "Milk teeth problem, cold, fever, cough, diarrhea, vomiting, worms, weight gain, poor memory, intelligence enhancing drugs, loss of appetite, bedwetting and immunity boosting information Facility to give naas (steam) for small children and asthma patients.",
  },
  {
    id: 5,
    image: "/images/nose.png",
    title: "Ear Nose Throat Diseases",
    description: "Ear infection, ear wax, sinusitis, allergic rhinitis, throat infection, tonsillitis. FirstCare Medical offers comprehensive care for ear, nose, and throat (ENT) diseases, including sinusitis, hearing loss, tonsillitis, and allergies. Our ENT specialists provide advanced treatment to improve your respiratory and auditory health.",
  },
  {
    id: 6,
    image: "/images/women.png",
    title: "Diseases of Women",
    description: "White discharge, menstrual problems, urinary tract infection. Will provide excellent advice for menopause problems, infertility, pregnancy.- Husband and wife come together for infertility.",
  },
  {
    id: 7,
    image: "/images/daibiti.png",
    title: "Treatment of Thyroid Diabetes BP",
    description: "Regular checking of blood sugar level Maintaining a healthy weight. To stay healthy (gain or lose weight), diabetes (sugar), thyroid. Diet plan for hypertension(BP).",
  },
  {
    id: 8,
    image: "/images/digestive.png",
    title: "Diseases of the Digestive System",
    description: "Indigestion, Constipation, Acidity, Gas, Diarrhea, Vomiting. FirstCare Medical specializes in diagnosing and treating diseases of the digestive system, including acid reflux, irritable bowel syndrome, and inflammatory bowel disease. Our compassionate team focuses on personalized treatment plans to promote digestive health and well-being.",
  },
  {
    id: 9,
    image: "/images/unary.png",
    title: "Diseases of the Urinary Tract",
    description: "Pus in urine, inflammation, bleeding stones Haras, Masha. Fistula.  we provide expert diagnosis and treatment for urinary tract diseases, including infections, kidney stones, and bladder disorders. Our team is dedicated to delivering personalized care to ensure your urinary health and comfort.",
  },
  {
    id: 10,
    image: "/images/covid.png",
    title: "Treatment after Corona",
    description: "Boost immunity. Do not feel hungry. Weakness in the body. Preventing blood clots, goiter and black fungus etc. we provide comprehensive post-COVID care, addressing lingering symptoms like fatigue, respiratory issues, and mental health concerns. Our dedicated team focuses on personalized recovery plans to help patients regain their health and vitality.",
  },
  {
    id: 11,
    image: "/images/ayurvedics.png",
    title: "Ayurvedic Treatment",
    description: "The diseases that are required will also be treated by complete Ayurveda method. On every Pushya Nakshatra children will be given intellectual golden drops.  FirstCare Medical offers holistic Ayurvedic treatment that focuses on restoring balance and promoting overall wellness through natural remedies. Our experienced practitioners tailor personalized therapies to address individual health concerns and enhance vitality.",
  },
  {
    id: 12,
    image: "/images/other.png",
    title: "Other Problems",
    description: "Fear of exams and interviews, weight gain and loss, kidney problems (stones), depression, migraine etc.  we address a variety of other health concerns, including allergies, chronic pain, and stress-related issues. Our multidisciplinary approach ensures comprehensive care tailored to each patient's unique needs for optimal well-being.",
  },
];

const MedicalServices = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="space-y-20">
      {/* First Section: Services 1 to 6 */}
      <div className="flex flex-col lg:flex-row w-full mt-10 lg:mt-20 lg:px-40 px-4">
        {/* Services List */}
        <div className="w-full lg:w-1/3">
          <h2 className="text-2xl font-bold mb-4 text-center lg:text-left">
            Our Medical Services
          </h2>
          <ul className="space-y-4">
            {services.slice(0, 6).map((service) => (
              <li
                key={service.id}
                className={`cursor-pointer p-4 border rounded-lg text-center lg:text-left ${
                  selectedService === service.id
                    ? "bg-[#028DCD] text-white"
                    : "bg-white"
                } hover:bg-[#028DCD] hover:text-white`}
                onClick={() => setSelectedService(service.id)}
              >
                {service.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Service Details */}
        <div className="w-full lg:w-2/3 mt-10 lg:mt-0 lg:pl-10">
          {selectedService && services.slice(0, 6).some((s) => s.id === selectedService) ? (
            <div className="p-6 bg-gray-100 rounded-lg">
              <img
                src={services.find((service) => service.id === selectedService).image}
                alt={services.find((service) => service.id === selectedService).title}
                className="w-full h-auto rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                {services.find((service) => service.id === selectedService).title}
              </h3>
              <p className="text-gray-700">
                {services.find((service) => service.id === selectedService).description}
              </p>
            </div>
          ) : (
            <div className="p-6 bg-gray-100 rounded-lg">
              <img src="/images/health-it.jpg" alt="No selected" className="w-full h-auto rounded-md mb-4" />
              <p className="text-gray-500">Select a service to see the details.</p>
            </div>
          )}
        </div>
      </div>

      {/* Second Section: Services 7 to 12 (Reversed Layout) */}
      <div className="flex flex-col lg:flex-row-reverse w-full mt-16 lg:mt-20 lg:px-40 px-4">
        {/* Services List (right side on larger screens) */}
        <div className="w-full lg:w-1/3">
          <h2 className="text-2xl font-bold mb-4 text-center lg:text-right">
            Additional Medical Services
          </h2>
          <ul className="space-y-4">
            {services.slice(6, 12).map((service) => (
              <li
                key={service.id}
                className={`cursor-pointer p-4 border rounded-lg text-center lg:text-right ${
                  selectedService === service.id
                    ? "bg-[#028DCD] text-white"
                    : "bg-white"
                } hover:bg-[#028DCD] hover:text-white`}
                onClick={() => setSelectedService(service.id)}
              >
                {service.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Service Details (left side on larger screens) */}
        <div className="w-full lg:w-2/3 mt-10 lg:mt-0 lg:pr-10">
          {selectedService && services.slice(6, 12).some((s) => s.id === selectedService) ? (
            <div className="p-6 bg-gray-100 rounded-lg">
              <img
                src={services.find((service) => service.id === selectedService).image}
                alt={services.find((service) => service.id === selectedService).title}
                className="w-full h-auto   rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                {services.find((service) => service.id === selectedService).title}
              </h3>
              <p className="text-gray-700">
                {services.find((service) => service.id === selectedService).description}
              </p>
            </div>
          ) : (
            <div className="p-6 bg-gray-100 rounded-lg">
              <img src="/images/health-it.jpg" alt="No selected" className="w-full h-auto rounded-md mb-4" />
              <p className="text-gray-500">Select a service to see the details.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MedicalServices;
