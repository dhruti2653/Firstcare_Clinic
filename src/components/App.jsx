import React from "react";
import "./App.css";
import { useRef } from 'react';


import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from '../components/Header';
import Aboutpage from "../pages/AboutPage";
import Footer from '../components/Footer';
import DoctorPage  from '../pages/DoctorPage';
import ServicePage from "../pages/ServicePage";
import ContactPage from "../pages/ContactPage";
import Apoiment from "./Apoiment";
import PopupModal from "./PopUp";


function App() {
  return (
   <>
   <PopupModal />
    <BrowserRouter>
    
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<Aboutpage/>} />
        <Route path="/doctor" element={<DoctorPage/>} />
        <Route path="/service" element={<ServicePage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/apoiment" element={<Apoiment/>} />

      </Routes>
     <Footer/>
    </BrowserRouter>
   

   </>
  );
}

export default App;
