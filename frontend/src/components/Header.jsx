import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className="flex flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20">
      
      {/* Left Section */}
      <div className="flex-1 flex flex-col items-start justify-center gap-4 py-10 md:py-[10rem] md:mb-[30px]"> 
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight">
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
          <img className="w-28" src={assets.group_profiles} alt="" />
          <p>
            Simply browse through our extensive list of trusted doctors, 
            <br className="hidden sm:block"/> Schedule your appointment hassle-free.
          </p>
        </div>
        <a href="#speciality" className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm hover:scale-105 transition-all duration-300">
          Book appointment 
          <img className="w-3" src={assets.arrow_icon} alt="" />
        </a>
      </div>

      {/* Right Section */}
      <div className="flex-1 relative">
        <img className="w-full md:absolute bottom-0 h-auto rounded-lg" src={assets.header_img} alt="" />
      </div>
    </div>
  );
}

export default Header;
