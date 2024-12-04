import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TimePicker } from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';

const Apoiment = () => {
  const [selectedService, setSelectedService] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState('10:00'); // Default time

  const services = ["Cardiology", "Dentistry", "Neurology", "Pediatrics, Child Care, Dermatology"];

  const availableTimes = [
    '05:30 PM',
    '06:30 PM',
    '07:30 PM',
    '08:30 PM',
    '09:30 PM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '01:00 PM',
  ];

  useEffect(() => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    const formattedCurrentTime = `${currentHour > 12 ? currentHour - 12 : currentHour}:${currentMinute < 10 ? '0' + currentMinute : currentMinute} ${currentHour < 12 ? 'AM' : 'PM'}`;

    const nextAvailableTime = availableTimes.find((availableTime) => {
      const [time, modifier] = availableTime.split(' ');
      const [hour, minute] = time.split(':').map(Number);
      const hourIn24 = modifier === 'PM' && hour !== 12 ? hour + 12 : hour;

      return (hourIn24 > currentHour || (hourIn24 === currentHour && minute > currentMinute));
    });

    const autoSetTime = nextAvailableTime || availableTimes[0];
    setTime(autoSetTime);
  }, []);

  return (
    <div
      className="h-auto md:h-[550px] w-full flex flex-col md:flex-row relative lg:px-20 px-9 mt-20"
      style={{
        backgroundImage: 'url("/images/about2.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[rgba(9,30,62,0.85)] z-0"></div>

      {/* Left Content Section */}
      <div className="relative md:w-1/2 w-full z-10 p-4 md:p-8 text-white flex items-center">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            We Are A Certified and Award Winning FirstCare Clinic You Can Trust
          </h1>
          <p className="text-base md:text-lg mb-4">
            Booking an appointment at First Care Medical Clinic is quick and
            convenient. Choose from our range of specialized services and secure
            a time that works best for you. Our expert medical team is ready to
            provide you with personalized care tailored to your health needs.
            Schedule your visit today and experience the difference in
            compassionate healthcare.
          </p>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="relative md:w-1/2 w-full flex flex-col justify-center p-4 md:p-8 h-auto md:h-[550px] lg:px-12 px-7" style={{ backgroundColor: "rgba(6, 163, 218, .7)" }}>
        <h2 className="flex justify-center text-xl md:text-[35px] lg:mb-10 mb-6 text-white font-bold">Make an Appointment</h2>

        {/* Service Dropdown */}
        <select className="lg:mb-7 mb-4  lg:p-4 p-3 border rounded w-full" value={selectedService} onChange={(e) => setSelectedService(e.target.value)}>
          <option value="">Choose a service</option>
          {services.map((service, index) => (
            <option key={index} value={service}>{service}</option>
          ))}
        </select>

        <div className="flex flex-col md:flex-row gap-4 mb-4">
          {/* Name Input */}
          <input type="text" className="lg:mb-4 mb-2 lg:p-4 p-3 border rounded w-full" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />

          {/* Email Input */}
          <input type="email" className="lg:mb-4 mb-2  lg:p-4 p-3 border rounded w-full" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="flex flex-col md:flex-row gap-4 lg:mb-7 mb-2 ">
          {/* Appointment Date */}
          <input
            type="date"
            className="lg:p-4 p-3 border rounded w-full"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          {/* Appointment Time Picker */}
          <TimePicker
            className="w-full p-3 border rounded bg-white "
            onChange={setTime}
            value={time}
            disableClock={true}
            clearIcon={null}
            clockIcon={null}
          />
        </div>

        {/* Submit Button */}
        <button className="w-full bg-[#091E3E] text-white p-3 rounded lg:mt-0 mt-4 hover:bg-white hover:text-[#091E3E] transition duration-300 cursor-pointer">
          <Link to={"/contact"}>
            <span>Submit</span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Apoiment;
