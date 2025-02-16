import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Header = () => {
  return (
    <motion.header className="relative flex flex-col md:flex-row items-center bg-[#23262b] text-white p-4 rounded-3xl mt-12 mx-4 md:mr-8">
      
      {/* Profile Picture */}
      <div className="relative w-36 h-36 rounded-xl bg-[#1d1e23] flex items-center justify-center -mt-10 ml-8">
        <img
          src={require('../assets/profile.jpg')}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover"
        />
      </div>

      {/* Name & Title */}
      <div className="flex flex-col items-center md:items-start ml-0 md:ml-4 mt-4 md:mt-0">
        <h1 className="text-3xl font-bold">Galen Yuan</h1>
        <h2 className="text-sm text-accent md:text-left">SWE Student | Aspiring Solutions Architect | Software Engineer</h2>
      </div>

      {/* Vertical Divider (Desktop Only) */}
      <div className="hidden md:block border-l border-gray-600 h-24 mx-4"></div>

      {/* Contact Information */}
      <div className="w-full md:w-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mt-4 md:mt-0">
        {/* Email */}
        <div className="flex flex-col items-center md:items-start">
          <span className="font-bold">Email:</span>
          <span>galenyuan1@gmail.com</span>
        </div>

        {/* CV */}
        <div className="flex flex-col ml-6 items-center md:items-start">
          <span className="font-bold">CV:</span>
          <a href="/path/to/cv.pdf" className="hover:text-accent">Download</a>
        </div>

        {/* Location */}
        <div className="flex flex-col items-center md:items-start">
          <span className="font-bold">Location:</span>
          <span>Sydney, Australia</span>
        </div>

        {/* Status */}
        <div className="flex flex-col ml-6 gap-y-2 items-center md:items-start">
          <span className="font-bold">Status:</span>
          <span>🌟</span>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex space-x-4 mt-4">
        <a href="https://www.linkedin.com/in/galen-yuan/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl hover:text-accent" />
        </a>
        <a href="https://github.com/Gal-Y" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl hover:text-accent" />
        </a>
      </div>
    </motion.header>
  );
};

export default Header;
