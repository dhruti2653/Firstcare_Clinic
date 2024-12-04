import React from 'react';
import Layout from '../components/LayoutPage';
import Welcome from '../components/Welcome';
import About from '../components/About';
import Department from '../components/Department';
import DoctorMedical from '../components/DoctorMedical';
import Service from '../components/Service';
// import Review from '../components/Review';
import Testimonial from '../components/Testimonial';
import Apoiment from '../components/Apoiment';
import PopupModal from '../components/PopUp';

const Home = () => {
  return (
    <>

      <Welcome />
      {/* <Department /> */}
      <About />
      <Apoiment />
      {/* <DoctorMedical /> */}
      <Service />
      {/* <Review /> */}
      <Testimonial />

    </>
  );
};

export default Home;