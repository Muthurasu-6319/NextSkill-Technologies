import React from 'react';
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
    </div>
  );
}
