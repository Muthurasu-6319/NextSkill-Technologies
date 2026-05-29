import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Recognised from './Components/Recognised';
import OurService from './Components/OurService';
import OurCoreValues from './Components/OurCoreValues';
import OurProcess from './Components/OurProcess';
import Technologies from './Components/Technologies';
import Solutions from './Components/Solutions';
import Archive from './Components/Archive';
import OurClients from './Components/OurClients';
import Programs from './Components/Programs';
import Courses from './Components/Courses';
import Mentor from './Components/Mentor';
import Studentstory from './Components/Studentstory';
import Hiring from './Components/Hiring';
import Blogs from './Components/Blogs';
import Footer from './Components/Footer';
import './App.css';

export default function App() {
  const [toastVisible, setToastVisible] = useState(false);

  window.showToast = () => {
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000);
  };

  return (
    <div className="appContainer">
      <Navbar />
      <Hero />
      <About />
      <Recognised />
      <OurService />
      <OurCoreValues />
      <OurProcess />
      <Technologies />
      <Solutions />
      <Archive />
      <OurClients />
      <Programs />
      <Courses />
      <Mentor />
      <Studentstory />
      <Hiring />
      <Blogs />
      <Footer />

      <div className={`toastNotification ${toastVisible ? 'toastVisible' : ''}`}>
        <div className="toastIcon">
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
          </svg>
        </div>
        <div className="toastText">
          <span className="toastTitle">Request Submitted!</span>
          <span className="toastSub">We'll call you back shortly.</span>
        </div>
        <button className="toastClose" onClick={() => setToastVisible(false)}>
          <svg viewBox="0 0 24 24" width="16" height="16">
            <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

