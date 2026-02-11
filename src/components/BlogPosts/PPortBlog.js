import React from 'react';
import { FaUser, FaLaptop, FaTools, FaRocket, FaBug } from 'react-icons/fa';
import { FiLink } from 'react-icons/fi';

const PPortBlog = () => {
  return (
    <div className="surface-card text-white p-5 sm:p-8 rounded-3xl w-full max-w-screen-lg mx-auto">
      <h1 className="text-4xl font-bold mb-4">
        Showcasing My Personal Portfolio: A Journey of Creativity and Innovation
      </h1>
      
      <p className="muted-text mb-6 text-left">
        In this post, I share my experience building my personal portfolio website—a platform designed to showcase my projects, experiences, and professional journey. 
        This project reflects my passion for learning new technologies and my commitment to creating engaging, responsive experiences.
      </p>

      {/* Why I Built It */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FaUser className="text-orange-500 mr-2" /> Why I Built This Portfolio
        </h2>
        <p className="muted-text text-left">
          I built my portfolio to provide a personal space where I could highlight my skills, share my projects, and track my growth as a developer. It’s a living testament to my journey in the world of web development.
        </p>
      </section>

      {/* Project Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FaLaptop className="text-blue-500 mr-2" /> Project Overview
        </h2>
        <ul className="list-disc list-inside muted-text space-y-2 text-left">
          <li>Responsive design that adapts seamlessly to all devices</li>
          <li>Interactive animations and smooth transitions with Framer Motion</li>
          <li>A clean, modern interface built with React and Tailwind CSS</li>
          <li>Integration of continuous deployment using AWS Amplify</li>
        </ul>
      </section>

      {/* Tech Stack */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FaTools className="text-green-500 mr-2" /> Tech Stack
        </h2>
        <div className="grid grid-cols-2 gap-4 muted-text">
          <div className="flex items-center">
            <FaLaptop className="text-yellow-500 mr-2" /> React - Frontend
          </div>
          <div className="flex items-center">
            <FaLaptop className="text-blue-500 mr-2" /> Tailwind CSS - Styling
          </div>
          <div className="flex items-center">
            <FaRocket className="text-red-500 mr-2" /> Framer Motion - Animations
          </div>
          <div className="flex items-center">
            <FiLink className="text-purple-500 mr-2" /> AWS Amplify - CI/CD & Hosting
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FaRocket className="text-purple-400 mr-2" /> Development Process
        </h2>
        <ol className="list-decimal list-inside muted-text space-y-4 text-left">
          <li>
            <strong className="text-white">Planning & Design:</strong> Mapped out the structure, user experience, and visual design of the portfolio.
          </li>
          <li>
            <strong className="text-white">Implementation:</strong> Developed the website using React and Tailwind CSS, incorporating smooth animations with Framer Motion.
          </li>
          <li>
            <strong className="text-white">Deployment:</strong> Set up a continuous deployment pipeline with AWS Amplify and connected my custom domain.
          </li>
        </ol>
      </section>

      {/* Key Challenges */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FaBug className="text-red-400 mr-2" /> Key Challenges
        </h2>
        <div className="space-y-4 muted-text text-left">
          <div>
            <strong>Responsive Design:</strong> Ensuring optimal appearance and performance across all devices.
          </div>
          <div>
            <strong>Performance Optimization:</strong> Balancing interactive animations with fast load times.
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FaRocket className="text-purple-400 mr-2" /> Lessons Learned
        </h2>
        <ul className="list-disc list-inside muted-text space-y-2 text-left">
          <li>Enhanced my skills in React, Tailwind CSS, and modern web animations.</li>
          <li>Gained practical experience hosting a full stack application with AWS Amplify.</li>
          <li>Learned the importance of responsive design and performance optimization.</li>
          <li>REACT IS SO MUCH BETTER THAN HTML AND CSS 💀💀💀</li>
        </ul>
      </section>

      {/* Check It Out */}
      <section className="mb-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Check It Out!</h2>
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/Gal-Y/Personal-Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white transition"
          >
            GitHub Repository
          </a>
          <a
            href="https://www.galen-yuan.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-white transition"
          >
            Live Website
          </a>
        </div>
      </section>
    </div>
  );
};

export default PPortBlog;
